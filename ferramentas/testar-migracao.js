#!/usr/bin/env node
/* Teste da migração do histórico, versão 1 para versão 2.

   Até a versão 1, a identidade de uma questão era a posição dela em window.BANCO_IA.
   Quem estudou tem, no navegador, um enade26.historico cheio desses índices, e um
   baralho de revisão espaçada derivado deles. A versão 2 troca o índice pelo id
   estável — e é uma operação que, feita errada, apaga esse progresso sem dar erro
   nenhum na tela. Só se percebe depois, quando o painel está zerado.

   Daí este teste existir separado do auditor: o auditor mede a qualidade do banco,
   este mede se ninguém perde o que já fez.

       node ferramentas/testar-migracao.js

   Monta um localStorage falso, escreve nele um histórico v1 como o código antigo
   escrevia, carrega os módulos de verdade e confere o que sai do outro lado.
*/
"use strict";

var fs = require("fs");
var path = require("path");

var RAIZ = path.resolve(__dirname, "..");
var ASSETS = path.join(RAIZ, "estudo", "assets");
var BANCO = path.join(ASSETS, "banco");
var ORDEM = ["es", "oo", "al", "bd", "gp", "in", "ml", "ih", "sg", "ot", "fg"];

var falhas = 0, testes = 0;

function conferir(nome, condicao, detalhe) {
  testes++;
  if (condicao) { console.log("  ok  " + nome); return; }
  falhas++;
  console.log("  --  " + nome + (detalhe ? "\n        " + detalhe : ""));
}

/* --------------------------------------------------- navegador de mentirinha */

function armazenamento(inicial) {
  var dados = Object.assign({}, inicial);
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(dados, k) ? dados[k] : null; },
    setItem: function (k, v) { dados[k] = String(v); },
    removeItem: function (k) { delete dados[k]; },
    _dados: dados
  };
}

/* Carrega os módulos do repositório num escopo isolado, com o localStorage dado.
   `comLegado: false` simula a página que esqueceu de carregar a tabela congelada —
   o caso em que a migração não pode acontecer e o histórico tem de sobreviver. */
function montarJanela(ls, opcoes) {
  opcoes = opcoes || {};
  var janela = { BANCO_IA: [], localStorage: ls };
  janela.window = janela;

  ORDEM.forEach(function (a) {
    new Function("window", "localStorage", fs.readFileSync(path.join(BANCO, a + ".js"), "utf8"))(janela, ls);
  });
  if (opcoes.comLegado !== false) {
    new Function("window", "localStorage", fs.readFileSync(path.join(BANCO, "legado-ids.js"), "utf8"))(janela, ls);
  }
  ["objetos.js", "historico.js", "sorteio.js"].forEach(function (f) {
    new Function("window", "localStorage", fs.readFileSync(path.join(ASSETS, f), "utf8"))(janela, ls);
  });
  return janela;
}

/* ------------------------------------------------------ histórico v1 de exemplo */

/* Reproduz o que o código da versão 1 gravava: uma linha por questão respondida,
   com `id` sendo o índice em window.BANCO_IA. */
function historicoV1(indices) {
  var agora = Date.parse("2026-08-01T10:00:00Z");
  var DIA = 86400000;
  var itens = indices.map(function (par, k) {
    return { t: agora + k * DIA, f: "ia", a: par.area, s: par.subtema, o: par.objeto,
             ok: par.ok, id: par.id };
  });
  return JSON.stringify({
    v: 1,
    itens: itens,
    disc: [{ t: agora, f: "disc", id: "2021-D2", nota: 6, total: 10 }]
  });
}

/* ------------------------------------------------------------------- os testes */

console.log("\n  MIGRAÇÃO DO HISTÓRICO — v1 para v2\n");

/* Retrato do banco antes de mexer em nada, para saber o que cada índice era. */
var referencia = montarJanela(armazenamento({}));
var B = referencia.BANCO_IA;
var LEGADO = referencia.BANCO_LEGADO_IDS;

/* A tabela descreve o PASSADO: os 468 índices que existiam quando o id estável foi
   introduzido. Depois disso o banco cresceu, e o índice de uma questão antiga mudou —
   é exatamente por isso que a tabela precisa ser congelada. Comparar a tabela com as
   posições de hoje seria exigir que o banco nunca mudasse, que é o contrário do que
   ela existe para permitir. */
var CONGELADAS = 468;
conferir("tabela congelada mantém os " + CONGELADAS + " índices originais",
  LEGADO.length === CONGELADAS, LEGADO.length + " entradas");
conferir("tabela congelada não tem id repetido",
  new Set(LEGADO).size === LEGADO.length);

var porId = {};
B.forEach(function (q, i) { porId[(q[7] || {}).id] = i; });
var perdidos = LEGADO.filter(function (id) { return porId[id] === undefined; });
conferir("todo id da tabela ainda existe no banco",
  perdidos.length === 0,
  perdidos.length + " sem correspondência (esperado só após remover questões): " +
    perdidos.slice(0, 5).join(" "));

/* Escolhe índices antigos espalhados, inclusive nas bordas. O id esperado sai da
   tabela congelada, não da posição atual. */
var escolhidas = [0, 1, 93, 94, 200, 467].map(function (i, k) {
  var esperado = LEGADO[i];
  var q = B[porId[esperado]];
  return { id: i, area: q[0], subtema: q[1], objeto: null, ok: k % 2 === 0,
           esperado: esperado, enunciado: q[2] };
});

/* ---- 1. migração traduz cada índice para o id certo ----------------------- */
var ls1 = armazenamento({ "enade26.historico": historicoV1(escolhidas) });
var j1 = montarJanela(ls1);
var h1 = j1.HISTORICO.ler();

conferir("versão sobe para 2", h1.v === 2, "veio v" + h1.v);
conferir("nenhuma linha se perde",
  h1.itens.length === escolhidas.length,
  h1.itens.length + " linhas de " + escolhidas.length);

var traduziuTudo = h1.itens.every(function (r, k) { return r.q === escolhidas[k].esperado; });
conferir("cada índice virou o id estável correto", traduziuTudo,
  h1.itens.map(function (r, k) { return escolhidas[k].id + "->" + r.q; }).join(" "));

conferir("o campo antigo `id` sai do registro",
  h1.itens.every(function (r) { return r.id === undefined; }));
conferir("acertos e erros preservados",
  h1.itens.every(function (r, k) { return r.ok === escolhidas[k].ok; }));
conferir("área e subtema preservados",
  h1.itens.every(function (r, k) { return r.a === escolhidas[k].area && r.s === escolhidas[k].subtema; }));
conferir("discursiva mantém o id textual que já usava",
  h1.disc.length === 1 && h1.disc[0].q === "2021-D2");

/* ---- 2. a migração é gravada, não refeita a cada leitura ------------------- */
var gravado = JSON.parse(ls1._dados["enade26.historico"]);
conferir("o resultado é persistido no armazenamento", gravado.v === 2 && !!gravado.itens[0].q);

/* ---- 3. reler não estraga o que já foi migrado ----------------------------- */
var h1b = j1.HISTORICO.ler();
conferir("ler de novo é idempotente",
  h1b.itens.length === escolhidas.length && h1b.itens[0].q === escolhidas[0].esperado);

/* ---- 4. sem a tabela congelada, NÃO migra e NÃO perde ---------------------- */
/* É o caso da página que carrega historico.js e esquece legado-ids.js. Migrar ali
   apagaria o id de cada linha; o certo é não migrar e tentar de novo na próxima. */
var ls2 = armazenamento({ "enade26.historico": historicoV1(escolhidas) });
var j2 = montarJanela(ls2, { comLegado: false });
var h2 = j2.HISTORICO.ler();

conferir("sem a tabela, o histórico continua na v1", h2.v === 1, "veio v" + h2.v);
conferir("sem a tabela, nenhuma linha se perde", h2.itens.length === escolhidas.length);
conferir("sem a tabela, os índices continuam lá",
  h2.itens.every(function (r, k) { return r.id === escolhidas[k].id; }));
conferir("sem a tabela, nada é sobrescrito no armazenamento",
  JSON.parse(ls2._dados["enade26.historico"]).v === 1);

/* ---- 5. o baralho de Leitner sobrevive ------------------------------------ */
/* O teste que de fato importa: a revisão espaçada tem de devolver exatamente as
   mesmas questões depois da migração. */
var erradas = escolhidas.filter(function (x) { return !x.ok; });
var qids = h1.itens.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; });

conferir("as erradas continuam identificáveis",
  qids.length === erradas.length && qids.every(function (q) { return !!q; }),
  qids.join(" "));

var remontadas = j1.SORTEIO.porQids(qids);
conferir("o sorteio remonta exatamente as questões erradas",
  remontadas.length === erradas.length,
  remontadas.length + " de " + erradas.length);
conferir("cada questão remontada é a que a pessoa errou",
  remontadas.every(function (it, k) { return it.enunciado === erradas[k].enunciado; }));

/* ---- 6. o estoque de já-vistas migra junto -------------------------------- */
var ls3 = armazenamento({ "enade26.ia.vistas": JSON.stringify([0, 93, 94, "ia-fg-01"]) });
var j3 = montarJanela(ls3);
j3.SORTEIO.cobertura();                       // força a leitura, que dispara a migração
var vistas = JSON.parse(ls3._dados["enade26.ia.vistas"]);

conferir("vistas: índices viraram ids estáveis",
  vistas.indexOf(LEGADO[0]) >= 0 && vistas.indexOf(LEGADO[93]) >= 0 && vistas.indexOf(LEGADO[94]) >= 0,
  JSON.stringify(vistas));
conferir("vistas: id textual de discursiva permanece", vistas.indexOf("ia-fg-01") >= 0);
conferir("vistas: nada se perde no caminho", vistas.length === 4, vistas.length + " entradas");

/* ---- 7. histórico ausente ou corrompido não derruba nada ------------------ */
var vazioLs = montarJanela(armazenamento({})).HISTORICO.ler();
conferir("sem histórico nenhum, devolve estrutura vazia da v2",
  vazioLs.v === 2 && vazioLs.itens.length === 0);

var lixo = montarJanela(armazenamento({ "enade26.historico": "{isso não é json" })).HISTORICO.ler();
conferir("histórico corrompido não derruba a página", lixo.v === 2 && lixo.itens.length === 0);

var futuro = montarJanela(armazenamento({
  "enade26.historico": JSON.stringify({ v: 99, itens: [{ t: 1, f: "ia", ok: true }], disc: [] })
})).HISTORICO.ler();
conferir("versão desconhecida não é interpretada como v1", futuro.v === 2 && futuro.itens.length === 0);

/* ---- 8. gravação nova traz os campos da v2 -------------------------------- */
var ls4 = armazenamento({});
var j4 = montarJanela(ls4);
j4.HISTORICO.gravarObjetivas("ia", [
  { area: "BD", subtema: "SQL", objeto: "ce-03", hab: "I", ok: false, q: "bd-0001", escolha: 3 }
]);
var novo = j4.HISTORICO.ler().itens[0];
conferir("gravação nova traz id estável, habilidade e slot marcado",
  novo.q === "bd-0001" && novo.h === "I" && novo.e === 3,
  JSON.stringify(novo));

var res = j4.HISTORICO.resumo();
conferir("o resumo agrega por habilidade",
  res.porHabilidade && res.porHabilidade.I && res.porHabilidade.I.n === 1,
  JSON.stringify(res.porHabilidade));

/* ------------------------------------------------------------------ desfecho */

console.log("");
console.log(falhas ? "  " + falhas + " de " + testes + " verificações falharam.\n"
                   : "  " + testes + " verificações, todas passaram.\n");
process.exit(falhas ? 1 : 0);
