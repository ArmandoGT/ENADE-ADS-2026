#!/usr/bin/env node
/* Auditoria do banco autoral — ENADE 2026 / TADS.

   Recalcula, a partir dos arquivos do próprio repositório, toda afirmação numérica
   que o README faz sobre a qualidade do banco. O ponto é que nenhum número deste
   material seja acreditado por afirmação: quem clona o repositório roda

       node ferramentas/auditar.js

   e obtém os mesmos valores, ou descobre que eles mudaram.

   A régua não é arbitrária. As metas de composição vêm do acervo oficial do Inep —
   as 200 questões de 2008 a 2021 classificadas em questoes_mapeadas.csv — e não de
   uma opinião sobre como deveria ser uma boa prova. Corrigir uma linha do CSV
   reacomoda o alvo automaticamente.

   Uso:
     node ferramentas/auditar.js              relatório em texto
     node ferramentas/auditar.js --json       o mesmo em JSON
     node ferramentas/auditar.js --escrever   grava estudo/assets/auditoria-dados.js

   Sai com código 1 se alguma meta falhar, para servir de porteiro em CI ou hook.
*/
"use strict";

var fs = require("fs");
var path = require("path");

var RAIZ = path.resolve(__dirname, "..");
var BANCO = path.join(RAIZ, "estudo", "assets", "banco");
var ASSETS = path.join(RAIZ, "estudo", "assets");

var AREAS = ["es", "oo", "al", "bd", "gp", "in", "ml", "ih", "sg", "ot", "fg"];

/* ---------------------------------------------------------------- carregamento */

/* Os arquivos do banco são scripts de navegador que se penduram em `window`.
   Em vez de reimplementar o formato, damos a eles o `window` que esperam. */
function carregarBanco() {
  var janela = { BANCO_IA: [] };
  var sandbox = { window: janela };
  AREAS.forEach(function (a) {
    var src = fs.readFileSync(path.join(BANCO, a + ".js"), "utf8");
    new Function("window", src)(janela);
  });
  ["disc", "disc-oficiais"].forEach(function (a) {
    var src = fs.readFileSync(path.join(BANCO, a + ".js"), "utf8");
    new Function("window", src)(janela);
  });
  ["objetos.js", "acervo.js"].forEach(function (f) {
    new Function("window", fs.readFileSync(path.join(ASSETS, f), "utf8"))(janela);
  });
  new Function("window", fs.readFileSync(path.join(BANCO, "legado-ids.js"), "utf8"))(janela);
  return {
    obj: janela.BANCO_IA || [],
    disc: janela.BANCO_IA_DISC || [],
    discOficiais: janela.DISC_OFICIAIS || [],
    OBJETOS: janela.OBJETOS,
    ACERVO: janela.ACERVO,
    legado: janela.BANCO_LEGADO_IDS || [],
    _sandbox: sandbox
  };
}

/* CSV com aspas e vírgula dentro de campo. Pequeno o bastante para não merecer
   biblioteca, grande o bastante para não merecer split(","). */
function lerCSV(arquivo) {
  var txt = fs.readFileSync(arquivo, "utf8").replace(/^﻿/, "");
  var linhas = [], campo = "", linha = [], aspas = false;
  for (var i = 0; i < txt.length; i++) {
    var c = txt[i];
    if (aspas) {
      if (c === '"' && txt[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') aspas = false;
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ",") { linha.push(campo); campo = ""; }
    else if (c === "\n") { linha.push(campo); linhas.push(linha); linha = []; campo = ""; }
    else if (c !== "\r") campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  var cab = linhas.shift();
  return linhas.filter(function (l) { return l.length === cab.length; })
    .map(function (l) {
      var o = {};
      cab.forEach(function (k, j) { o[k] = l[j]; });
      return o;
    });
}

/* ------------------------------------------------------- vocabulário do acervo */

/* Banco e acervo falam a mesma língua: os códigos de uma letra de ACERVO.HAB. Esta
   tabela existe só para traduzir a coluna `habilidade` do CSV, que traz o nome por
   extenso e sem acento. É também o que permite conferir se acervo.js não divergiu do
   CSV — os dois guardam as mesmas 200 linhas, e dado duplicado sem conferência é dado
   que uma hora discorda de si mesmo. */
var COD_HAB = {
  "Julgamento de itens": "J",
  "Interpretacao de artefato": "I",
  "Conceito puro": "C",
  "Assercao-razao": "A",
  "Calculo ou traco": "X",
  "Estudo de caso ou producao de artefato": "E"
};
var COD_FMT = {
  "Texto": "T", "Codigo": "K", "Pseudocodigo": "P", "Diagrama UML": "U", "Modelo ER": "R",
  "SQL": "Q", "Tabela": "B", "Grafico ou figura": "G", "Cenario": "S"
};

/* Cota por área do componente específico, espelhando sorteio.js. Fica repetida aqui
   de propósito: o auditor não deve depender do módulo que audita. Se as duas
   divergirem, a meta cota-espelhada acusa. */
var COTA_AREA = { ES: 8, OO: 5, AL: 4, BD: 3, IN: 2, GP: 2, ML: 2, SG: 2, IH: 1, OT: 1 };

/* O registro do banco tem 7 campos posicionais e um oitavo com os metadados nomeados:
   { id, hab, art }. Posicional ficaria ilegível a partir do oitavo campo. */
function meta(q) { return (q.length > 7 && q[7]) || null; }
function habilidadeDe(q) { var m = meta(q); return (m && m.hab) || null; }

/* ------------------------------------------------------------------ estatística */

function contar(lista, chave) {
  var c = {};
  lista.forEach(function (x) { var k = chave(x); c[k] = (c[k] || 0) + 1; });
  return c;
}

function proporcao(contagem, total) {
  var p = {};
  Object.keys(contagem).forEach(function (k) { p[k] = 100 * contagem[k] / total; });
  return p;
}

/* Qui-quadrado de aderência a uma distribuição uniforme sobre cinco casas.
   Crítico a 5% com 4 graus de liberdade: 9,49. */
function quiQuadrado(obs) {
  var n = obs.reduce(function (a, b) { return a + b; }, 0);
  if (!n) return 0;
  var e = n / obs.length;
  return obs.reduce(function (s, v) { return s + Math.pow(v - e, 2) / e; }, 0);
}

function mediana(v) {
  if (!v.length) return 0;
  var s = v.slice().sort(function (a, b) { return a - b; });
  var m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/* ------------------------------------------------------------------ heurísticas */

/* Marcador de absurdo: promessa que nenhum artefato de software cumpre. É diferente
   de quantificador de escopo — "todos os titulares", "qualquer tratamento" são
   linguagem jurídica precisa, e um bom distrator descreve com exatidão a coisa
   errada. Por isso a lista é estreita de propósito: erra para menos. */
var ABSURDO = new RegExp([
  "garante?\\s+(a\\s+)?(ausência|inexistência|total|completa)",
  "garante?\\s+que\\s+não\\s+(haverá|existirá|ocorra)",
  "nunca\\s+(falha|erra|apresenta|contém|precisa)",
  "jamais\\s+(falha|erra|apresenta)",
  "elimina\\s+(totalmente|completamente|por\\s+definitivo|qualquer\\s+possibilidade)",
  "dispensa\\s+(totalmente|completamente|qualquer\\s+necessidade)",
  "100%\\s+(seguro|livre|confiável|garantid)",
  "torna\\s+(o\\s+sistema\\s+)?(imune|infalível|inviolável)",
  "é\\s+impossível\\s+(de\\s+)?(falhar|errar|violar)",
  "resolve\\s+(todos\\s+os\\s+problemas|qualquer\\s+problema)",
  "sem\\s+necessidade\\s+de\\s+qualquer\\s+(teste|verificação|revisão)"
].join("|"), "i");

/* Explicação que se apoia na posição da alternativa. Quebra silenciosamente, porque
   sorteio.js embaralha as cinco alternativas a cada sorteio. */
var CITA_POSICAO = new RegExp([
  "\\b(a|na|à|da)\\s+(primeira|segunda|terceira|quarta|última)\\s+(alternativa|opção)",
  "\\balternativa\\s+[«\"“]?[A-E]\\b",
  "\\bletra\\s+[«\"“]?[A-E]\\b",
  "\\bopção\\s+[«\"“]?[A-E]\\b"
].join("|"), "i");

/* Explicação que refuta distrator, em vez de só justificar o gabarito. */
var REFUTA = new RegExp([
  "as\\s+demais", "as\\s+outras", "distrator", "pegadinha", "erro\\s+(comum|mais\\s+comum|clássico)",
  "confund", "não\\s+é\\s+", "não\\s+se\\s+", "ao\\s+contrário", "já\\s+.{0,20}\\s+descreve",
  "corresponde\\s+a", "descreve\\s+", "seria\\s+", "quem\\s+(marca|escolhe)", "trocar\\s+"
].join("|"), "i");

/* --------------------------------------------------------------------- auditoria */

function auditar() {
  var b = carregarBanco();
  var B = b.obj;
  var n = B.length;
  var oficial = lerCSV(path.join(RAIZ, "questoes_mapeadas.csv"));
  var oficialObj = oficial.filter(function (r) { return r.tipo === "obj"; });

  var metas = [];
  var achados = {};

  function meta_(id, titulo, valor, alvo, ok, unidade, nota) {
    metas.push({ id: id, titulo: titulo, valor: valor, alvo: alvo, ok: ok, unidade: unidade || "", nota: nota || "" });
  }

  /* ---- 1. chutar pelo tamanho ---------------------------------------------- */
  /* Só conta diferença perceptível: quinze caracteres sobre a segunda colocada.
     Diferença de quatro caracteres não é pista para ninguém. */
  var MARGEM = 15;
  var maisLonga = 0, maisCurta = 0;
  B.forEach(function (q) {
    var l = q[3].map(function (a) { return a.length; });
    var c = l[q[4]];
    var outros = l.filter(function (_, i) { return i !== q[4]; });
    if (c > Math.max.apply(null, outros) + MARGEM) maisLonga++;
    if (c < Math.min.apply(null, outros) - MARGEM) maisCurta++;
  });
  meta_("comprimento-longa", "Acerto chutando a visivelmente mais longa",
    pct(maisLonga, n), "≤ 8%", maisLonga / n <= 0.08, "%", "acaso = 20%");
  meta_("comprimento-curta", "Acerto chutando a visivelmente mais curta",
    pct(maisCurta, n), "≤ 8%", maisCurta / n <= 0.08, "%", "acaso = 20%");

  /* ---- 2. resolver por eliminação ------------------------------------------ */
  var porEliminacao = [];
  B.forEach(function (q, i) {
    var c = 0;
    q[3].forEach(function (a, j) { if (j !== q[4] && ABSURDO.test(a)) c++; });
    if (c >= 3) porEliminacao.push({ i: i, area: q[0], enunciado: corte(q[2]) });
  });
  meta_("eliminacao", "Questões com 3+ distratores descartáveis por absurdo",
    porEliminacao.length, "0", porEliminacao.length === 0, "");
  achados.porEliminacao = porEliminacao;

  /* ---- 3. posição da correta na fonte -------------------------------------- */
  /* sorteio.js embaralha as alternativas a cada sorteio, então o viés de posição
     não chega ao estudante. Ele é medido aqui mesmo assim, por duas razões: o
     arquivo do banco é público e legível, e slot fixo é sintoma de distrator
     escrito para preencher espaço em volta de uma resposta já decidida. */
  var pos = [0, 0, 0, 0, 0];
  B.forEach(function (q) { pos[q[4]]++; });
  var chi = quiQuadrado(pos);
  meta_("posicao-fonte", "Distribuição da correta na fonte (qui-quadrado)",
    round(chi, 1), "< 9,49", chi < 9.49, "",
    "A " + pos[0] + " · B " + pos[1] + " · C " + pos[2] + " · D " + pos[3] + " · E " + pos[4]);

  var porArea = {};
  B.forEach(function (q) { (porArea[q[0]] = porArea[q[0]] || [0, 0, 0, 0, 0])[q[4]]++; });
  achados.posicaoPorArea = Object.keys(porArea).sort().map(function (a) {
    return { area: a, pos: porArea[a], chi: round(quiQuadrado(porArea[a]), 1) };
  });

  /* ---- 4a. acervo.js contra questoes_mapeadas.csv --------------------------- */
  /* As 200 linhas do acervo existem em dois lugares: o CSV, que é o artefato de
     origem, e acervo.js, que é a cópia que o navegador lê. Se divergirem, a régua
     de todo o material passa a depender de qual das duas se leu. */
  var divergencias = [];
  var linhasJS = b.ACERVO.linhas;
  if (linhasJS.length !== oficial.length) {
    divergencias.push("contagem: CSV " + oficial.length + " · acervo.js " + linhasJS.length);
  } else {
    oficial.forEach(function (r, i) {
      var j = linhasJS[i];
      var esperado = [Number(r.ano), r.numero, r.bloco, r.tipo, r.area_codigo,
        COD_HAB[r.habilidade], COD_FMT[r.formato]];
      var obtido = [j[0], j[1], j[2], j[3], j[4], j[6], j[7]];
      esperado.forEach(function (v, c) {
        if (String(v) !== String(obtido[c])) {
          divergencias.push("linha " + (i + 2) + " campo " + c + ": CSV " + v + " · JS " + obtido[c]);
        }
      });
    });
  }
  meta_("acervo-coerente", "acervo.js confere com questoes_mapeadas.csv",
    divergencias.length, "0", divergencias.length === 0, "",
    "a régua do material não pode depender de qual cópia se leu");
  achados.divergenciasAcervo = divergencias.slice(0, 20);

  /* ---- 4b. mix de habilidade contra o acervo oficial ------------------------- */
  var declaradas = B.filter(function (q) { return !!habilidadeDe(q); }).length;
  var mix = {};
  ["FG", "CE"].forEach(function (bloco) {
    var pOf = b.ACERVO.mix(bloco);
    var au = B.filter(function (q) { return (q[0] === "FG" ? "FG" : "CE") === bloco; });
    var pAu = proporcao(contar(au, habilidadeDe), au.length);
    var linhas = Object.keys(COD_HAB).map(function (nome) {
      var h = COD_HAB[nome];
      return { habilidade: nome, oficial: round(pOf[h] || 0, 1), autoral: round(pAu[h] || 0, 1),
               lacuna: round((pAu[h] || 0) - (pOf[h] || 0), 1) };
    }).filter(function (l) { return l.oficial || l.autoral; });
    mix[bloco] = { nOficial: b.ACERVO.objetivas(bloco).length, nAutoral: au.length, linhas: linhas,
                   desvioMax: Math.max.apply(null, linhas.map(function (l) { return Math.abs(l.lacuna); })) };
  });
  achados.mix = mix;
  var desvio = Math.max(mix.FG.desvioMax, mix.CE.desvioMax);
  meta_("mix-habilidade", "Desvio do mix do BANCO contra o acervo (informativo)",
    round(desvio, 1), "informativo", true, " pp",
    "o que precisa bater com o acervo é a prova sorteada, não o banco — ver estoque-celulas");

  /* ---- 4c. estoque por célula (área × habilidade) --------------------------- */
  /* Esta é a meta que importa, e o motivo pelo qual a anterior é só informativa.
     Com cota de habilidade no sorteio, quem tem de bater com o mix oficial é a PROVA
     sorteada, não o banco. Do banco se exige outra coisa: ter, em cada célula
     (área × habilidade), estoque para o sorteio tirar. Igualar o mix do banco ao mix
     oficial seria reescrever três vezes mais questões sem melhorar a prova em nada. */
  var PROVAS_SEM_REPETIR = 3;
  var cotaCE = b.ACERVO.cota("CE", 30);
  var cotaFG = b.ACERVO.cota("FG", 15);
  var estoque = contar(B, function (q) { return q[0] + "|" + habilidadeDe(q); });

  var celulas = [], deficit = 0, excedente = 0;
  function avaliar(area, vagasArea, cota, totalVagas) {
    Object.keys(cota).forEach(function (h) {
      var demanda = Math.ceil(vagasArea * cota[h] / totalVagas);
      if (!demanda) return;
      var piso = demanda * PROVAS_SEM_REPETIR;
      var tem = estoque[area + "|" + h] || 0;
      var falta = Math.max(0, piso - tem);
      deficit += falta;
      if (tem > piso) excedente += tem - piso;
      celulas.push({ area: area, hab: h, piso: piso, tem: tem, falta: falta });
    });
  }
  Object.keys(COTA_AREA).forEach(function (a) { avaliar(a, COTA_AREA[a], cotaCE, 30); });
  avaliar("FG", 15, cotaFG, 15);

  achados.celulas = celulas.filter(function (c) { return c.falta > 0; })
    .sort(function (x, y) { return y.falta - x.falta; });
  meta_("estoque-celulas", "Questões faltando para o sorteio cobrir " + PROVAS_SEM_REPETIR + " provas",
    deficit, "0", deficit === 0, "",
    excedente + " questões de excedente disponíveis para conversão");

  /* ---- 5. formato do enunciado --------------------------------------------- */
  var tams = B.map(function (q) { return q[2].length; });
  var med = mediana(tams);
  meta_("enunciado-mediana", "Mediana do enunciado", Math.round(med), "≥ 400 ch", med >= 400, " ch",
    "o ENADE é feito de situações-problema; " + br(pct(B.filter(function (q) { return q[2].length < 150; }).length, n)) + "% abaixo de 150 ch");

  var comArtefato = B.filter(function (q) { var m = meta(q); return !!(q[6] || (m && m.art)); }).length;
  /* Alvo tirado do acervo: proporção de questões oficiais cujo formato não é "Texto". */
  var alvoArtefato = 100 * oficialObj.filter(function (r) { return r.formato !== "Texto"; }).length / oficialObj.length;
  meta_("artefatos", "Questões com artefato (código, tabela, gráfico, UML, ER)",
    pct(comArtefato, n), "≥ " + round(alvoArtefato, 0) + "%", 100 * comArtefato / n >= alvoArtefato, "%",
    "alvo medido no acervo oficial");

  /* ---- 6. explicações ------------------------------------------------------- */
  var citaPos = [];
  B.forEach(function (q, i) {
    if (CITA_POSICAO.test(q[5])) citaPos.push({ i: i, area: q[0], explicacao: corte(q[5], 120) });
  });
  meta_("explicacao-posicao", "Explicações que citam letra ou posição da alternativa",
    citaPos.length, "0", citaPos.length === 0, "",
    "as alternativas são embaralhadas a cada sorteio");
  achados.citaPosicao = citaPos;

  var refuta = B.filter(function (q) { return REFUTA.test(q[5]); }).length;
  meta_("explicacao-refuta", "Explicações que refutam algum distrator",
    pct(refuta, n), "≥ 90%", 100 * refuta / n >= 90, "%",
    "justificar o gabarito não diagnostica o erro cometido");

  /* ---- 7. integridade estrutural -------------------------------------------- */
  var estrut = [];
  B.forEach(function (q, i) {
    if (q[3].length !== 5) estrut.push({ i: i, erro: "não tem 5 alternativas" });
    if (new Set(q[3]).size !== q[3].length) estrut.push({ i: i, erro: "alternativas duplicadas" });
    if (!(q[4] >= 0 && q[4] <= 4)) estrut.push({ i: i, erro: "índice da correta fora da faixa" });
    if (!q[5] || q[5].length < 20) estrut.push({ i: i, erro: "sem explicação" });
  });
  meta_("estrutura", "Registros com defeito estrutural", estrut.length, "0", estrut.length === 0, "");
  achados.estrutura = estrut;

  /* Enunciados clonados: mesma pergunta escrita duas vezes gasta estoque de sorteio
     e engana a medida de cobertura. */
  var vistos = {}, clones = [];
  B.forEach(function (q, i) {
    var k = normalizar(q[2]);
    if (vistos[k] !== undefined) clones.push({ i: i, gemea: vistos[k], enunciado: corte(q[2]) });
    else vistos[k] = i;
  });
  meta_("clones", "Enunciados duplicados", clones.length, "0", clones.length === 0, "");
  achados.clones = clones;

  /* Ids estáveis: quando existirem, precisam ser únicos — é a identidade que o
     histórico e a revisão espaçada guardam. */
  var comId = B.filter(function (q) { var m = meta(q); return !!(m && m.id); });
  var ids = {}, idsDup = [];
  comId.forEach(function (q, i) {
    var id = meta(q).id;
    if (ids[id] !== undefined) idsDup.push(id); else ids[id] = i;
  });
  meta_("ids", "Questões com id estável", comId.length + "/" + n,
    n + "/" + n, comId.length === n && idsDup.length === 0, "",
    idsDup.length ? "ids duplicados: " + idsDup.join(", ") : "");

  /* A tabela congelada é a única ponte entre o histórico de quem usou o material
     antes do id estável e o banco de agora. Ela descreve o passado: pode ficar menor
     que o banco quando questões novas entrarem, nunca maior nem diferente. */
  var legado = b.legado;
  var vivos = new Set(comId.map(function (q) { return meta(q).id; }));
  var legadoOrfao = legado.filter(function (id) { return !vivos.has(id); });
  var legadoDesalinhado = legado.filter(function (id, i) {
    return B[i] && meta(B[i]) && meta(B[i]).id !== id;
  }).length;
  meta_("legado-ids", "Tabela congelada de migração íntegra",
    legadoDesalinhado ? legadoDesalinhado + " desalinhadas" : "ok",
    "ok", legadoDesalinhado === 0 && legado.length > 0, "",
    legado.length + " entradas" + (legadoOrfao.length
      ? " · " + legadoOrfao.length + " apontam para questões que não existem mais (esperado após remoções)"
      : ""));

  /* ---- 8. cobertura dos objetos oficiais ------------------------------------ */
  /* OBJETOS.auditar() existia sem nenhum ponto de chamada. Este é o ponto. */
  var aud = b.OBJETOS.auditar(B);
  var porObjeto = Object.keys(aud).filter(function (k) { return k[0] !== "_"; })
    .map(function (k) { return { id: k, nome: aud[k].obj.curto, n: aud[k].n }; })
    .sort(function (x, y) { return x.n - y.n; });
  var minObjeto = porObjeto.length ? porObjeto[0].n : 0;
  meta_("cobertura-objetos", "Menor cobertura entre os 32 objetos oficiais",
    minObjeto, "≥ 8", minObjeto >= 8, " questões",
    porObjeto.length ? "mais escasso: " + porObjeto[0].nome : "");
  achados.porObjeto = porObjeto;

  /* `_semObjeto` é um mapa "AREA|Subtema" -> contagem, não uma lista. Um subtema
     digitado com erro cai aqui e some de todo relatório por objeto oficial, sem aviso
     em lugar nenhum — é o silêncio que esta meta existe para quebrar. */
  var semObjeto = Object.keys(aud._semObjeto || {}).map(function (k) {
    return k + " (" + aud._semObjeto[k] + ")";
  });
  meta_("subtemas-orfaos", "Subtemas sem objeto oficial mapeado",
    semObjeto.length, "≤ 2", semObjeto.length <= 2, "",
    semObjeto.length ? semObjeto.join(" · ") : "");
  achados.semObjeto = semObjeto;

  var subtemas = contar(B, function (q) { return q[0] + " / " + q[1]; });
  var solitarios = Object.keys(subtemas).filter(function (k) { return subtemas[k] === 1; });
  meta_("subtemas-solitarios", "Subtemas com uma única questão",
    solitarios.length, "≤ 5", solitarios.length <= 5, "",
    "um subtema com uma questão só não sustenta revisão espaçada");
  achados.solitarios = solitarios;

  /* ---- 8b. integridade das páginas ------------------------------------------ */
  /* Um <script src> apontando para arquivo que não existe não dá erro visível: a
     página abre, e a funcionalidade que dependia dele simplesmente não acontece.
     Também se confere que toda página que lê o histórico carregue a tabela congelada
     — sem ela a migração não roda, e é por isso que ela foi feita para não rodar em
     vez de rodar pela metade. */
  var ESTUDO = path.join(RAIZ, "estudo");
  var paginas = fs.readdirSync(ESTUDO).filter(function (f) { return /\.html$/.test(f); });
  var quebrados = [], semLegado = [];
  paginas.forEach(function (p) {
    var html = fs.readFileSync(path.join(ESTUDO, p), "utf8");
    var srcs = (html.match(/<script src="([^"]+)"/g) || [])
      .map(function (s) { return s.replace(/.*src="/, "").replace(/"$/, ""); });
    srcs.forEach(function (s) {
      if (!fs.existsSync(path.join(ESTUDO, s))) quebrados.push(p + " -> " + s);
    });
    if (srcs.indexOf("assets/historico.js") >= 0 &&
        srcs.indexOf("assets/banco/legado-ids.js") < 0) semLegado.push(p);
  });
  meta_("paginas-scripts", "Páginas com <script src> apontando para arquivo ausente",
    quebrados.length, "0", quebrados.length === 0, "",
    quebrados.join(" · "));
  meta_("paginas-legado", "Páginas que leem o histórico sem carregar a tabela congelada",
    semLegado.length, "0", semLegado.length === 0, "",
    semLegado.length ? semLegado.join(" · ") : paginas.length + " páginas conferidas");

  /* ---- 9. discursivas ------------------------------------------------------- */
  var todasDisc = b.discOficiais.concat(b.disc);
  var itensRubrica = todasDisc.reduce(function (s, d) { return s + d.rubrica.length; }, 0);
  /* Item não falsificável: aquele que se pode marcar como cumprido independentemente
     do que se escreveu. O verbo vago sozinho não condena — condena o verbo vago sem
     dizer o que exatamente conferir. */
  var vago = /^(demonstra|apresenta|evidencia|revela|mostra)\s+(compreensão|entendimento|domínio|conhecimento)/i;
  var naoFalsificaveis = [];
  todasDisc.forEach(function (d) {
    d.rubrica.forEach(function (r) {
      var t = r.item.replace(/^\([a-z]\)\s*/i, "");
      if (vago.test(t) && !/:|—|,|\bao\b|\bque\b/.test(t)) naoFalsificaveis.push(d.id + ": " + corte(r.item, 80));
    });
  });
  meta_("rubricas", "Itens de rubrica não falsificáveis",
    naoFalsificaveis.length + "/" + itensRubrica, "0", naoFalsificaveis.length === 0, "");
  achados.naoFalsificaveis = naoFalsificaveis;

  return {
    gerado: new Date().toISOString(),
    banco: { objetivas: n, discursivasAutorais: b.disc.length, discursivasOficiais: b.discOficiais.length },
    acervo: { objetivas: oficialObj.length, total: oficial.length },
    metas: metas,
    achados: achados
  };
}

/* ------------------------------------------------------------------- utilidades */

function pct(x, n) { return round(100 * x / n, 1); }
function round(v, c) { var f = Math.pow(10, c); return Math.round(v * f) / f; }
function corte(s, n) { s = String(s).replace(/\s+/g, " "); n = n || 70; return s.length > n ? s.slice(0, n) + "…" : s; }
function normalizar(s) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}
function br(v) { return String(v).replace(".", ","); }

/* ---------------------------------------------------------------- apresentação */

function relatorio(r) {
  var L = [];
  var falhas = r.metas.filter(function (m) { return !m.ok; }).length;

  L.push("");
  L.push("  AUDITORIA DO BANCO — ENADE 2026 / TADS");
  L.push("  " + r.banco.objetivas + " objetivas autorais · " +
    (r.banco.discursivasAutorais + r.banco.discursivasOficiais) + " discursivas · " +
    "régua: " + r.acervo.objetivas + " objetivas oficiais do Inep");
  L.push("");

  var largura = Math.max.apply(null, r.metas.map(function (m) { return m.titulo.length; }));
  r.metas.forEach(function (m) {
    var marca = m.ok ? "  ok  " : "  --  ";
    var valor = br(m.valor) + m.unidade;
    L.push(marca + pad(m.titulo, largura) + "  " + pad(valor, 12) + " alvo " + m.alvo);
    if (m.nota) L.push("      " + pad("", largura) + "  " + m.nota);
  });

  L.push("");
  L.push("  MIX DE HABILIDADE CONTRA O ACERVO OFICIAL");
  ["FG", "CE"].forEach(function (bloco) {
    var mx = r.achados.mix[bloco];
    L.push("");
    L.push("  " + (bloco === "FG" ? "Formação Geral" : "Componente específico") +
      "  (oficial n=" + mx.nOficial + " · autoral n=" + mx.nAutoral + ")");
    L.push("      " + pad("habilidade", 40) + pad("oficial", 10) + pad("autoral", 10) + "lacuna");
    mx.linhas.sort(function (a, b) { return b.oficial - a.oficial; }).forEach(function (l) {
      L.push("      " + pad(l.habilidade, 40) + pad(br(l.oficial) + "%", 10) +
        pad(br(l.autoral) + "%", 10) + (l.lacuna > 0 ? "+" : "") + br(l.lacuna) + " pp");
    });
  });

  if (r.achados.porObjeto.length) {
    L.push("");
    L.push("  OBJETOS OFICIAIS MAIS ESCASSOS");
    r.achados.porObjeto.slice(0, 8).forEach(function (o) {
      L.push("      " + pad(o.id, 8) + pad(o.nome, 40) + o.n);
    });
  }

  var lista = [
    ["EXPLICAÇÕES QUE CITAM POSIÇÃO", r.achados.citaPosicao.map(function (x) { return x.area + " · " + x.explicacao; })],
    ["QUESTÕES RESOLVÍVEIS POR ELIMINAÇÃO", r.achados.porEliminacao.map(function (x) { return x.area + " · " + x.enunciado; })],
    ["ENUNCIADOS DUPLICADOS", r.achados.clones.map(function (x) { return x.enunciado; })],
    ["DEFEITO ESTRUTURAL", r.achados.estrutura.map(function (x) { return "#" + x.i + " " + x.erro; })],
    ["SUBTEMAS SEM OBJETO OFICIAL", r.achados.semObjeto],
    ["ITENS DE RUBRICA NÃO FALSIFICÁVEIS", r.achados.naoFalsificaveis]
  ];
  lista.forEach(function (par) {
    if (!par[1].length) return;
    L.push("");
    L.push("  " + par[0]);
    par[1].slice(0, 12).forEach(function (s) { L.push("      " + s); });
    if (par[1].length > 12) L.push("      … e mais " + (par[1].length - 12));
  });

  L.push("");
  L.push(falhas ? "  " + falhas + " de " + r.metas.length + " metas fora do alvo."
                : "  Todas as " + r.metas.length + " metas dentro do alvo.");
  L.push("");
  return L.join("\n");
}

function pad(s, n) { s = String(s); return s.length >= n ? s + "  " : s + " ".repeat(n - s.length); }

/* ---------------------------------------------------------------------- entrada */

function principal() {
  var args = process.argv.slice(2);
  var r = auditar();

  if (args.indexOf("--escrever") >= 0) {
    var destino = path.join(ASSETS, "auditoria-dados.js");
    fs.writeFileSync(destino,
      "/* Gerado por ferramentas/auditar.js — não editar à mão. */\n" +
      "window.AUDITORIA = " + JSON.stringify(r, null, 2) + ";\n", "utf8");
    process.stderr.write("gravado: " + path.relative(RAIZ, destino) + "\n");
  }

  if (args.indexOf("--json") >= 0) process.stdout.write(JSON.stringify(r, null, 2) + "\n");
  else process.stdout.write(relatorio(r) + "\n");

  var falhas = r.metas.filter(function (m) { return !m.ok; }).length;
  process.exit(falhas ? 1 : 0);
}

if (require.main === module) principal();
module.exports = { auditar: auditar, carregarBanco: carregarBanco, lerCSV: lerCSV };
