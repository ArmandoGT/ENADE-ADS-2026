/* Aba de discursivas — 60 questões (24 oficiais do Inep + 36 autorais), com
   autocorreção por rubrica.

   Formato de 2026: a prova tem UMA discursiva, no componente específico (Portaria
   Inep 169/2026, art. 3º). A Portaria 154/2026 extinguiu as duas discursivas de
   formação geral. O acervo aqui continua inteiro — são 60 questões de treino de
   escrita —, mas o ensaio cronometrado passou a reproduzir a prova real: uma questão.
   Quem quiser volume usa a maratona.

   Depende de: banco/disc-oficiais.js (window.DISC_OFICIAIS),
               banco/disc.js         (window.BANCO_IA_DISC),
               paginas.js            (window.PAGINAS, TOTAL_PAGINAS),
               historico.js          (window.HISTORICO, opcional)
*/
(function (global) {
  "use strict";

  var KEY = "enade26.discursivas";
  var TIPOS = {
    fg: "Formação geral", uml: "Modelagem (UML e ER)",
    estrutura: "Estrutura de dados", algoritmo: "Algoritmo com vetor e matriz"
  };
  var AREAS = {
    FG: "Formação geral", OO: "UML e projeto OO", AL: "Algoritmos e estruturas de dados",
    BD: "Banco de dados"
  };

  /* Tipos que ainda podem cair em 2026. "fg" ficou fora: sobrevive como treino de
     escrita, nunca como ensaio da prova. */
  var TIPOS_2026 = ["uml", "estrutura", "algoritmo"];
  function vale2026(d) { return TIPOS_2026.indexOf(d.tipo) >= 0; }

  /* Rótulo do tipo, com o selo de quem não cai mais nesse formato. */
  function rotuloTipo(t) {
    return TIPOS[t] + (t === "fg" ? " · formato anterior a 2026" : "");
  }

  /* Os cinco aspectos de expressão que o Edital 61/2026, item 3.9.1, acrescentou à
     correção da discursiva, redigidos como conferência. */
  var EXPRESSAO = [
    "Clareza: dá para entender cada frase na primeira leitura, sem reler.",
    "Coerência: a resposta responde ao que foi perguntado, item por item, sem fugir do comando.",
    "Coesão: os parágrafos se ligam; não há salto entre uma ideia e a seguinte.",
    "Argumentação: cada afirmação vem sustentada por razão, dado ou exemplo — não é lista solta.",
    "Vocabulário: os termos técnicos da área estão usados com precisão e sem enfeite."
  ];

  /* Ensaio oficial: 1 discursiva em 40 minutos — a fatia proporcional das 4 horas
     para uma questão que vale 11,25% da nota. Maratona: N questões seguidas, sem
     correspondência com a prova, só para acumular repertório. */
  var BLOCO_MIN = 40;
  var MARATONA_MIN = 30;      // por questão
  var MARATONA_QTD = 4;

  /* Caracteres a partir dos quais se considera que houve tentativa escrita aqui. Duas
     frases. Abaixo disso o módulo pergunta se você respondeu no papel ou se está só
     lendo o padrão — ver o bloco "revelar". */
  var MIN_ESCRITO = 120;

  function el(t, c, h) {
    var n = document.createElement(t);
    if (c) n.className = c;
    if (h != null) n.innerHTML = h;
    return n;
  }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function num(n) { return n.toFixed(1).replace(".", ","); }
  function embaralhar(a) {
    var v = a.slice();
    for (var i = v.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = v[i]; v[i] = v[j]; v[j] = t;
    }
    return v;
  }

  /* ---------------- acervo unificado ---------------- */
  var TODAS = (global.DISC_OFICIAIS || []).concat(global.BANCO_IA_DISC || []);
  TODAS.forEach(function (d) {
    d.totalPontos = d.rubrica.reduce(function (a, q) { return a + q.pontos; }, 0);
  });

  /* ---------------- estado ---------------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { aviso(); } }
  var S = load();
  if (!S.hist) S.hist = {};      // id -> [{nota, total, data, texto}]
  if (!S.atual) S.atual = {};    // id -> { marcados:{}, texto:"", revelado:bool }
  var avisado = false;
  function aviso() {
    if (avisado) return; avisado = true;
    var a = document.getElementById("avisoArmazenamento");
    if (a) a.style.display = "block";
  }
  try { localStorage.setItem("enade26.t", "1"); localStorage.removeItem("enade26.t"); } catch (e) { aviso(); }

  var app = document.getElementById("app");
  var filtro = { origem: "", tipo: "", ano: "", situacao: "" };
  var vistaPag = null, vistaPadrao = null;

  /* ---------------- utilidades de progresso ----------------

     Leituras — quando o padrão foi aberto antes de haver resposta — ficam de fora de
     tudo o que é medida. Elas continuam no histórico da questão, visíveis e rotuladas,
     mas nota tirada com a resposta à vista não diz nada sobre o que a pessoa sabe. */
  function valem(id) {
    return (S.hist[id] || []).filter(function (t) { return !t.consultada; });
  }
  function melhorNota(id) {
    var h = valem(id);
    if (!h.length) return null;
    return h.reduce(function (m, t) { return Math.max(m, t.nota); }, 0);
  }
  function feita(id) { return valem(id).length > 0; }
  function soLeitura(id) {
    return (S.hist[id] || []).length > 0 && valem(id).length === 0;
  }

  function resumo() {
    var feitas = TODAS.filter(function (d) { return feita(d.id); });
    var soma = 0, tot = 0;
    feitas.forEach(function (d) { soma += melhorNota(d.id); tot += d.totalPontos; });
    var porTipo = {};
    Object.keys(TIPOS).forEach(function (t) {
      var ds = TODAS.filter(function (d) { return d.tipo === t && feita(d.id); });
      if (!ds.length) { porTipo[t] = null; return; }
      var s = 0, v = 0;
      ds.forEach(function (d) { s += melhorNota(d.id); v += d.totalPontos; });
      porTipo[t] = { pct: s / v * 100, n: ds.length, de: TODAS.filter(function (d) { return d.tipo === t; }).length };
    });
    return { feitas: feitas.length, total: TODAS.length, pct: tot ? soma / tot * 100 : 0, porTipo: porTipo };
  }

  /* ================= TELA: lista ================= */
  function telaLista() {
    app.innerHTML = "";
    var w = el("div", "tela");
    var r = resumo();

    w.appendChild(el("div", "",
      '<span class="eyebrow">Discursivas · ' + TODAS.length + " questões</span>" +
      "<h1>Uma questão, 11,25% da nota.</h1>" +
      '<p class="lede" style="margin-top:14px">A prova de 2026 tem <strong>uma única discursiva</strong>, ' +
      "no componente específico — a formação geral perdeu as duas dela. Uma questão só, e ainda assim " +
      "a fatia mais concentrada da nota: por isso o acervo inteiro continua aqui como treino. São as " +
      (global.DISC_OFICIAIS || []).length + " discursivas oficiais do Inep, de 2008 a 2021, " +
      "mais " + (global.BANCO_IA_DISC || []).length + " que escrevi prevendo 2026. Cada uma vem com a " +
      "<strong>rubrica de correção</strong>: você escreve, revela o padrão e marca item por item o que " +
      "cumpriu. A nota sai disso — é assim que o Inep corrige.</p>"));

    /* painel */
    var fichas = el("div", "fichas");
    fichas.appendChild(el("div", "ficha", "<b>" + r.feitas + " / " + r.total + "</b><span>discursivas feitas</span>"));
    fichas.appendChild(el("div", "ficha", "<b>" + (r.feitas ? Math.round(r.pct) + "%" : "—") +
      "</b><span>aproveitamento médio</span>"));
    var pior = null;
    Object.keys(r.porTipo).forEach(function (t) {
      if (r.porTipo[t] && (!pior || r.porTipo[t].pct < r.porTipo[pior].pct)) pior = t;
    });
    fichas.appendChild(el("div", "ficha", "<b>" + (pior ? Math.round(r.porTipo[pior].pct) + "%" : "—") +
      "</b><span>" + (pior ? "sua perna mais fraca: " + TIPOS[pior].toLowerCase() : "faça uma para medir") + "</span>"));
    fichas.appendChild(el("div", "ficha", "<b>" + BLOCO_MIN +
      " min</b><span>o que a discursiva merece nas 4 horas</span>"));
    w.appendChild(fichas);

    /* desempenho por tipo */
    if (r.feitas) {
      var areas = el("div", "areas");
      Object.keys(TIPOS).forEach(function (t) {
        var d = r.porTipo[t];
        var pct = d ? d.pct : 0;
        var cor = !d ? "var(--rule-2)" : pct >= 75 ? "var(--good)" : pct >= 50 ? "var(--warn)" : "var(--flag)";
        areas.appendChild(el("div", "arow",
          '<div class="alabel">' + rotuloTipo(t) + "</div>" +
          '<div class="atrack"><div class="afill" style="width:' + pct + "%;background:" + cor + '"></div></div>' +
          '<div class="aval">' + (d ? Math.round(pct) + "%" : "—") + "</div>"));
      });
      w.appendChild(areas);
    }

    /* ações */
    var acoes = el("div", "acoes");
    var b1 = el("button", "btn grande", "Ensaio oficial · 1 questão em " + BLOCO_MIN + " min");
    b1.type = "button"; b1.onclick = function () { iniciarBloco("oficial"); };
    acoes.appendChild(b1);

    var b2 = el("button", "btn", "Maratona · " + MARATONA_QTD + " seguidas");
    b2.type = "button"; b2.onclick = function () { iniciarBloco("maratona"); };
    acoes.appendChild(b2);

    if (S.bloco && S.bloco.lista) {
      var bRetomar = el("button", "btn", "Retomar bloco em andamento");
      bRetomar.type = "button";
      bRetomar.onclick = function () {
        telaQuestao(S.bloco.lista[S.bloco.i || 0],
          { lista: S.bloco.lista, i: S.bloco.i || 0, inicio: S.bloco.inicio, modo: S.bloco.modo });
      };
      acoes.appendChild(bRetomar);
    }
    acoes.appendChild(el("span", "fine",
      "o ensaio sorteia uma discursiva do componente específico, como na prova; a maratona " +
      "enfileira " + MARATONA_QTD + " para treinar volume"));
    w.appendChild(acoes);

    /* recomeçar do zero */
    if (r.feitas || (S.bloco && S.bloco.lista) || Object.keys(S.atual).length) {
      var zerar = el("div", "acoes");
      var bz = el("button", "btn ghost", "Recomeçar tudo do zero");
      bz.type = "button";
      bz.onclick = function () {
        if (!confirm("Apagar TODO o seu progresso nas discursivas?\n\n" +
          "Isso remove as " + r.feitas + " questões feitas, o histórico de notas, os textos que você " +
          "escreveu e qualquer bloco em andamento. Não dá para desfazer.")) return;
        S = { hist: {}, atual: {}, bloco: null };
        try { localStorage.removeItem(KEY); } catch (e) {}
        if (global.HISTORICO) global.HISTORICO.limpar("disc");
        telaLista();
      };
      zerar.appendChild(bz);
      zerar.appendChild(el("span", "fine",
        "apaga notas, textos escritos e bloco em andamento — as questões em si continuam aqui"));
      w.appendChild(zerar);
    }

    /* filtros */
    var f = el("div", "filtros");
    function sel(id, rot, opcoes, valor) {
      var c = el("div", "campo");
      c.innerHTML = "<label>" + rot + "</label>";
      var s = el("select");
      opcoes.forEach(function (o) {
        var op = document.createElement("option");
        op.value = o[0]; op.textContent = o[1];
        if (o[0] === valor) op.selected = true;
        s.appendChild(op);
      });
      s.onchange = function () { filtro[id] = s.value; telaLista(); };
      c.appendChild(s);
      return c;
    }
    var anos = [];
    TODAS.forEach(function (d) { if (d.ano && anos.indexOf(d.ano) < 0) anos.push(d.ano); });
    anos.sort();
    f.appendChild(sel("origem", "Origem", [["", "Todas"], ["oficial", "Oficiais do Inep"], ["autoral", "Minhas"]], filtro.origem));
    f.appendChild(sel("tipo", "Tipo", [["", "Todos"]].concat(Object.keys(TIPOS).map(function (t) { return [t, TIPOS[t]]; })), filtro.tipo));
    f.appendChild(sel("ano", "Ano", [["", "Todos"]].concat(anos.map(function (a) { return [String(a), String(a)]; })), filtro.ano));
    f.appendChild(sel("situacao", "Situação", [["", "Todas"], ["nao", "Ainda não fiz"], ["feita", "Já fiz"], ["fraca", "Fiz e tirei menos de 60%"]], filtro.situacao));
    w.appendChild(f);

    /* lista */
    var lista = TODAS.filter(function (d) {
      if (filtro.origem && d.origem !== filtro.origem) return false;
      if (filtro.tipo && d.tipo !== filtro.tipo) return false;
      if (filtro.ano && String(d.ano) !== filtro.ano) return false;
      if (filtro.situacao === "nao" && feita(d.id)) return false;
      if (filtro.situacao === "feita" && !feita(d.id)) return false;
      if (filtro.situacao === "fraca") {
        if (!feita(d.id)) return false;
        if (melhorNota(d.id) / d.totalPontos >= 0.6) return false;
      }
      return true;
    });

    w.appendChild(el("div", "contagem", lista.length + " de " + TODAS.length + " discursivas"));

    var box = el("div", "revisao");
    lista.forEach(function (d) {
      var n = melhorNota(d.id);
      var frac = n === null ? null : n / d.totalPontos;
      var cls = frac === null ? "" : frac >= 0.6 ? "ok" : "bad";
      var linha = el("button", "ritem " + cls);
      linha.type = "button";
      linha.onclick = function () { telaQuestao(d.id, null); };
      linha.innerHTML =
        '<span class="rnum">' + (d.origem === "oficial" ? d.num : "IA") + "</span>" +
        '<span class="rtema"><b>' + esc(d.tema) + "</b><em>" +
          (d.origem === "oficial" ? "Prova " + d.ano + " · oficial" : "questão autoral") +
          " · " + rotuloTipo(d.tipo) + " · " + num(d.totalPontos) + " pontos</em></span>" +
        '<span class="rgab">' +
          (n === null
            ? '<i class="marcou">' + (soLeitura(d.id) ? "só leitura" : "não feita") + "</i>"
            : '<i class="verd">' + num(n) + " / " + num(d.totalPontos) + "</i>" +
              '<i class="marcou">' + valem(d.id).length +
              (valem(d.id).length === 1 ? " tentativa" : " tentativas") + "</i>") +
        "</span>";
      box.appendChild(linha);
    });
    if (!lista.length) box.appendChild(el("p", "fine", "Nenhuma discursiva com esses filtros."));
    w.appendChild(box);

    app.appendChild(w);
    window.scrollTo(0, 0);
  }

  /* ================= TELA: questão ================= */
  function telaQuestao(id, bloco) {
    var d = TODAS.filter(function (x) { return x.id === id; })[0];
    if (!d) return telaLista();
    if (!S.atual[id]) S.atual[id] = { marcados: {}, texto: "", revelado: false };
    var est = S.atual[id];
    vistaPag = d.pagCaderno || null;
    vistaPadrao = d.pagPadrao || null;

    app.innerHTML = "";
    var w = el("div", "tela");

    /* barra de saída — sempre visível, inclusive dentro do bloco cronometrado */
    var barra = el("div", "barravolta");
    var bInicio = el("button", "btn ghost mini", "← Voltar ao início");
    bInicio.type = "button";
    bInicio.onclick = function () {
      if (bloco) {
        if (!confirm("Sair do bloco cronometrado?\n\n" +
          "O bloco fica guardado e você pode retomá-lo pelo botão na tela inicial.")) return;
        salvarBloco(bloco);
      }
      telaLista();
    };
    barra.appendChild(bInicio);
    if (bloco) {
      var bAband = el("button", "btn ghost mini", "Abandonar o bloco");
      bAband.type = "button";
      bAband.onclick = function () {
        if (!confirm("Abandonar este bloco? As marcações feitas nele serão descartadas.")) return;
        bloco.lista.forEach(function (x) { delete S.atual[x]; });
        S.bloco = null; save(); telaLista();
      };
      barra.appendChild(bAband);
    }
    w.appendChild(barra);

    /* topo */
    var topo = el("div", "qtopo");
    topo.innerHTML =
      '<div class="qpos"><b>' + (bloco ? "Discursiva " + (bloco.i + 1) : esc(d.tema)) + "</b>" +
      "<span>" + (bloco ? "de " + bloco.lista.length + " · bloco cronometrado" : TIPOS[d.tipo]) + "</span></div>" +
      (bloco ? '<div class="qrelogio"><span class="clock" id="clock">0:00:00</span></div>' : "");
    w.appendChild(topo);

    var ficha = el("div", "origem");
    ficha.innerHTML = (d.origem === "oficial"
        ? "<span>Prova ENADE <b>" + d.ano + "</b> · discursiva <b>" + d.num + "</b></span>"
        : '<span class="tag ia">questão autoral</span>') +
      '<span class="sep">·</span><span>' + rotuloTipo(d.tipo) + "</span>" +
      '<span class="sep">·</span><span>' + num(d.totalPontos) + " pontos</span>" +
      '<span class="sep">·</span><span>' + (d.pesosOficiais ? "pesos oficiais" : "divisão de pontos inferida") + "</span>";
    w.appendChild(ficha);

    /* enunciado */
    if (d.origem === "oficial") {
      w.appendChild(el("div", "card", "<h3>Comando</h3><p>" + esc(d.comando) + "</p>"));
      w.appendChild(visor(d, "caderno"));
    } else {
      w.appendChild(el("div", "enunciado", esc(d.enunciado).replace(/\n/g, "<br>")));
      if (d.codigo) {
        var pre = el("pre", "codigo");
        pre.appendChild(el("code", null, esc(d.codigo)));
        w.appendChild(pre);
      }
    }

    /* editor */
    var ed = el("div", "resposta");
    ed.appendChild(el("div", "rotulo", "Sua resposta"));
    ed.appendChild(el("p", "fine", "Escreva aqui ou no papel — o que vale é treinar. O limite oficial é de " +
      "<strong>15 linhas</strong>."));
    var ta = el("textarea", "editor");
    ta.rows = 14;
    ta.placeholder = "Escreva sua resposta…";
    ta.value = est.texto || "";
    var cont = el("div", "contador");
    function atualizaContador() {
      var linhas = ta.value ? ta.value.split("\n").length : 0;
      cont.textContent = linhas + " de 15 linhas";
      cont.classList.toggle("estourou", linhas > 15);
    }
    function escreveu() { return (est.texto || "").trim().length >= MIN_ESCRITO; }
    var estadoRevelar = null;   // lembra o que está desenhado, para só repintar na virada
    ta.oninput = function () {
      est.texto = ta.value; save(); atualizaContador();
      if (!est.revelado && escreveu() !== estadoRevelar) pintarRevelar();
    };
    ed.appendChild(ta);
    ed.appendChild(cont);
    atualizaContador();
    w.appendChild(ed);

    /* Desenha as saídas do editor conforme já exista resposta escrita. Precisa ser
       repintável: quem começa a escrever depois de abrir a tela tem de ver a opção
       honesta aparecer na hora, sem sair e voltar. */
    function pintarRevelar() {
      estadoRevelar = escreveu();
      acao.innerHTML = "";
      if (estadoRevelar) {
        var br = el("button", "btn grande", "Ver o padrão de resposta e corrigir");
        br.type = "button";
        br.onclick = function () { est.revelado = true; save(); telaQuestao(id, bloco); };
        acao.appendChild(br);
        acao.appendChild(el("span", "fine", "a partir daqui a rubrica entrega a resposta"));
        return;
      }
      var bp2 = el("button", "btn grande", "Já respondi no papel");
      bp2.type = "button";
      bp2.onclick = function () { est.revelado = true; save(); telaQuestao(id, bloco); };
      acao.appendChild(bp2);

      var bl = el("button", "btn ghost", "Só quero ler o padrão");
      bl.type = "button";
      bl.onclick = function () {
        est.revelado = true; est.consultou = true; save(); telaQuestao(id, bloco);
      };
      acao.appendChild(bl);
      acao.appendChild(el("span", "fine",
        "o editor está vazio. Ler o padrão antes de responder é estudo válido, mas não é " +
        "tentativa: fica registrado como leitura e não entra na sua média."));
    }

    /* Revelar.

       Aqui morava o buraco antichute do módulo: bastava abrir a questão, clicar em
       revelar com o editor vazio, ler a rubrica inteira e marcar tudo. O aviso em
       texto era a única barreira, e nota obtida assim entrava na média como qualquer
       outra — o que corrompia justamente a medida que a aba existe para produzir.

       A trava não pode ser bloquear: o material sempre admitiu responder no papel, e
       ler o padrão para estudar é uso legítimo. O que ela faz é obrigar a escolha a
       ser explícita e ficar registrada. Quem consultou sem ter respondido gera uma
       LEITURA, que aparece no histórico e fica fora da média. */
    if (!est.revelado) {
      var acao = el("div", "acoes");
      pintarRevelar();
      w.appendChild(acao);
    } else {
      if (est.consultou) {
        w.appendChild(el("div", "card flag", "<h3>Leitura, não tentativa</h3><p>" +
          "Você abriu o padrão sem ter respondido. Pode marcar a rubrica à vontade para " +
          "entender como a correção funciona — mas o que registrar aqui entra no histórico " +
          "como <strong>leitura</strong> e fica fora da sua média, porque nota tirada com a " +
          "resposta à vista não mede nada. Para valer, use <em>Limpar e refazer</em> e " +
          "responda antes.</p>"));
      }

      /* padrão oficial em imagem */
      if (d.origem === "oficial") {
        if (d.pagPadrao) {
          w.appendChild(el("h2", "secao", "Padrão de resposta oficial do Inep"));
          w.appendChild(visor(d, "padrao"));
        } else {
          w.appendChild(el("div", "card flag", "<h3>Sem padrão oficial no acervo</h3><p>" +
            "O documento de padrão de resposta publicado para esta edição não cobre esta questão.</p>"));
        }
      }
      if (d.notaPadrao) {
        w.appendChild(el("div", "card " + (d.pesosOficiais ? "key" : "flag"),
          "<h3>Sobre esta rubrica</h3><p>" + esc(d.notaPadrao) + "</p>"));
      }

      /* rubrica */
      w.appendChild(el("h2", "secao", "Marque o que você cumpriu"));
      var lista = el("div", "quesitos");
      d.rubrica.forEach(function (q, k) {
        var lin = el("label", "quesito" + (est.marcados[k] ? " feito" : ""));
        var cx = el("input"); cx.type = "checkbox"; cx.checked = !!est.marcados[k];
        cx.onchange = function () {
          est.marcados[k] = cx.checked; save(); telaQuestao(id, bloco);
        };
        lin.appendChild(cx);
        lin.appendChild(el("span", "qtexto", esc(q.item)));
        lin.appendChild(el("span", "qpontos", num(q.pontos)));
        lista.appendChild(lin);
      });
      w.appendChild(lista);

      var nota = d.rubrica.reduce(function (a, q, k) { return a + (est.marcados[k] ? q.pontos : 0); }, 0);
      w.appendChild(el("div", "notadisc",
        "<b>" + num(nota) + "</b> de " + num(d.totalPontos) + " pontos"));

      /* Dimensão de expressão — não pontuada aqui.

         O Edital Enade 61/2026, item 3.9.1, diz que a discursiva avalia, "além do
         estabelecido pela Diretriz de cada uma das Áreas de Avaliação, aspectos como
         clareza, coerência, coesão, estratégias argumentativas, utilização de
         vocabulário". As rubricas acima são as do Inep, com os pontos que ele de fato
         distribuiu — inventar pontos de linguagem dentro delas falsearia o padrão
         oficial. Fica como conferência à parte. */
      w.appendChild(el("h2", "secao", "Como você escreveu"));
      var expr = el("div", "quesitos");
      EXPRESSAO.forEach(function (item, k) {
        var lin = el("label", "quesito" + (est.expressao && est.expressao[k] ? " feito" : ""));
        var cx = el("input"); cx.type = "checkbox";
        cx.checked = !!(est.expressao && est.expressao[k]);
        cx.onchange = function () {
          if (!est.expressao) est.expressao = {};
          est.expressao[k] = cx.checked; save(); telaQuestao(id, bloco);
        };
        lin.appendChild(cx);
        lin.appendChild(el("span", "qtexto", esc(item)));
        expr.appendChild(lin);
      });
      w.appendChild(expr);
      w.appendChild(el("p", "fine", "Estes cinco itens não entram na nota acima — a rubrica do Inep " +
        "distribui pontos só pelo conteúdo. Mas desde 2026 o edital os inclui explicitamente na " +
        "correção da discursiva, então vale conferir antes de dar a questão por encerrada."));

      var ac2 = el("div", "acoes");
      if (!bloco) {
        var consultada = !!est.consultou;
        var bs = el("button", "btn" + (consultada ? " ghost" : ""),
          consultada ? "Registrar como leitura" : "Registrar esta tentativa");
        bs.type = "button";
        bs.onclick = function () {
          if (!S.hist[id]) S.hist[id] = [];
          S.hist[id].push({ nota: nota, total: d.totalPontos,
            data: new Date().toISOString().slice(0, 10), texto: est.texto || "",
            consultada: consultada });
          S.atual[id] = { marcados: {}, texto: "", revelado: false };
          save();
          if (global.HISTORICO) {
            global.HISTORICO.gravarDiscursiva("disc-avulsa",
              { id: id, nota: nota, total: d.totalPontos, consultada: consultada });
          }
          telaQuestao(id, null);
        };
        ac2.appendChild(bs);
        if (consultada) {
          ac2.appendChild(el("span", "fine", "fica no histórico como leitura, fora da média"));
        }
      }
      var bl = el("button", "btn ghost", "Limpar e refazer");
      bl.type = "button";
      bl.onclick = function () {
        if (!confirm("Apagar o texto e as marcações desta tentativa?")) return;
        S.atual[id] = { marcados: {}, texto: "", revelado: false }; save(); telaQuestao(id, bloco);
      };
      ac2.appendChild(bl);
      w.appendChild(ac2);
    }

    /* histórico */
    if (S.hist[id] && S.hist[id].length) {
      w.appendChild(el("h2", "secao", "Suas tentativas"));
      var h = el("div", "revisao");
      S.hist[id].slice().reverse().forEach(function (t, k) {
        var frac = t.nota / t.total;
        h.appendChild(el("div", "ritem " + (t.consultada ? "" : (frac >= 0.6 ? "ok" : "bad")),
          '<span class="rnum">' + (S.hist[id].length - k) + "</span>" +
          '<span class="rtema"><b>' + num(t.nota) + " de " + num(t.total) + " pontos</b><em>" +
            t.data + " · " + Math.round(frac * 100) + "%" +
            (t.consultada ? " · leitura, fora da média" : "") + "</em></span>" +
          '<span class="rgab"><i class="marcou">' +
            (t.consultada ? "padrão à vista"
                          : (t.texto ? t.texto.split("\n").length + " linhas escritas" : "escrita no papel")) +
          "</i></span>"));
      });
      w.appendChild(h);
      var limpaHist = el("div", "acoes");
      var bh = el("button", "btn ghost mini", "Apagar o histórico desta questão");
      bh.type = "button";
      bh.onclick = function () {
        if (!confirm("Apagar as " + S.hist[id].length + " tentativas registradas nesta questão?")) return;
        delete S.hist[id]; save(); telaQuestao(id, bloco);
      };
      limpaHist.appendChild(bh);
      w.appendChild(limpaHist);
    }

    /* navegação */
    var nav = el("div", "acoes centro");
    if (bloco) {
      if (bloco.i > 0) {
        var ba = el("button", "btn ghost", "← Anterior");
        ba.type = "button";
        ba.onclick = function () { bloco.i--; salvarBloco(bloco); telaQuestao(bloco.lista[bloco.i], bloco); };
        nav.appendChild(ba);
      }
      if (bloco.i < bloco.lista.length - 1) {
        var bp = el("button", "btn", "Próxima →");
        bp.type = "button";
        bp.onclick = function () { proximaDoBloco(bloco); };
        nav.appendChild(bp);
      } else {
        var bf = el("button", "btn", "Encerrar bloco");
        bf.type = "button";
        bf.onclick = encerrarBloco;
        nav.appendChild(bf);
      }
    } else {
      var bv = el("button", "btn", "← Voltar ao início");
      bv.type = "button";
      bv.onclick = function () { telaLista(); };
      nav.appendChild(bv);

      // pula para a próxima discursiva do mesmo tipo, sem passar pela lista
      var mesmoTipo = TODAS.filter(function (x) { return x.tipo === d.tipo; });
      var pos = mesmoTipo.map(function (x) { return x.id; }).indexOf(d.id);
      if (mesmoTipo.length > 1) {
        var bn = el("button", "btn ghost", "Próxima de " + TIPOS[d.tipo].toLowerCase() + " →");
        bn.type = "button";
        bn.onclick = function () { telaQuestao(mesmoTipo[(pos + 1) % mesmoTipo.length].id, null); };
        nav.appendChild(bn);
      }
    }
    w.appendChild(nav);

    app.appendChild(w);
    if (bloco) relogioBloco();
    window.scrollTo(0, 0);
  }

  /* visor de imagem, reaproveitando a mecânica dos simulados */
  function visor(d, qual) {
    var oficial = qual === "caderno";
    var pasta = oficial ? "paginas/" : "padroes/";
    var max = oficial ? ((global.TOTAL_PAGINAS || {})[d.ano] || 1) : maxPadrao(d.ano);
    var atual = oficial ? vistaPag : vistaPadrao;

    var box = el("div", "visor");
    var ctrl = el("div", "visorctrl");
    var esq = el("button", "btn ghost mini", "◀"),
        dir = el("button", "btn ghost mini", "▶"),
        lbl = el("span", "visorlbl", ""),
        abrir = el("a", "fine linkabrir", "abrir imagem ↗");
    [esq, dir].forEach(function (b) { b.type = "button"; });
    ctrl.appendChild(esq); ctrl.appendChild(lbl); ctrl.appendChild(dir);
    ctrl.appendChild(el("span", "visorsp")); ctrl.appendChild(abrir);
    box.appendChild(ctrl);

    var moldura = el("div", "moldura");
    var img = el("img", "pag");
    img.alt = (oficial ? "Página do caderno" : "Página do padrão de resposta") + " do ENADE " + d.ano;
    moldura.appendChild(img);
    box.appendChild(moldura);

    function pintar() {
      var src = pasta + d.ano + "-" + pad2(atual) + ".png";
      img.src = src; abrir.href = src; abrir.target = "_blank"; abrir.rel = "noopener";
      lbl.textContent = "pág. " + atual + " de " + max;
      esq.disabled = atual <= 1; dir.disabled = atual >= max;
      if (oficial) vistaPag = atual; else vistaPadrao = atual;
    }
    esq.onclick = function () { if (atual > 1) { atual--; pintar(); } };
    dir.onclick = function () { if (atual < max) { atual++; pintar(); } };
    pintar();
    return box;
  }
  function maxPadrao(ano) { return { 2008: 2, 2011: 3, 2014: 10, 2017: 10, 2021: 6 }[ano] || 1; }

  /* ================= bloco cronometrado ================= */

  /* Sorteia entre os tipos que a Portaria 169/2026 mantém — modelagem, estrutura de
     dados e algoritmo. Prioriza as que ainda não foram feitas; quando o estoque
     inédito acaba, reinicia o ciclo. */
  function sorteiaBloco(modo) {
    var pool = TODAS.filter(vale2026);
    var novos = pool.filter(function (d) { return !feita(d.id); });
    var qtd = modo === "maratona" ? MARATONA_QTD : 1;
    var fila = embaralhar(novos.length >= qtd ? novos : pool);
    return fila.slice(0, qtd).map(function (d) { return d.id; });
  }
  function minutosDoBloco(b) {
    var modo = (b && b.modo) || (S.bloco && S.bloco.modo) || "oficial";
    return modo === "maratona" ? MARATONA_MIN * MARATONA_QTD : BLOCO_MIN;
  }
  function salvarBloco(b) {
    S.bloco = { lista: b.lista, i: b.i, inicio: b.inicio, modo: b.modo || "oficial" };
    save();
  }
  function iniciarBloco(modo) {
    var b = { lista: sorteiaBloco(modo), i: 0, inicio: Date.now(), modo: modo || "oficial" };
    b.lista.forEach(function (id) { S.atual[id] = { marcados: {}, texto: "", revelado: false }; });
    salvarBloco(b);
    telaQuestao(b.lista[0], b);
  }
  function proximaDoBloco(b) {
    if (b.i < b.lista.length - 1) { b.i++; salvarBloco(b); telaQuestao(b.lista[b.i], b); }
    else encerrarBloco();
  }
  function relogioBloco() {
    var c = document.getElementById("clock");
    if (!c || !S.bloco) return;
    var limite = minutosDoBloco(S.bloco);
    function tick() {
      var el2 = document.getElementById("clock");
      if (!el2) return;
      var restante = limite * 60000 - (Date.now() - S.bloco.inicio);
      if (restante < 0) restante = 0;
      var s = Math.floor(restante / 1000);
      el2.textContent = Math.floor(s / 3600) + ":" + pad2(Math.floor((s % 3600) / 60)) + ":" + pad2(s % 60);
      el2.classList.toggle("low", restante <= 10 * 60000);
      setTimeout(tick, 1000);
    }
    tick();
  }
  function encerrarBloco() {
    var b = S.bloco;
    if (!b) return telaLista();
    app.innerHTML = "";
    var w = el("div", "tela");
    var soma = 0, total = 0;
    var itens = b.lista.map(function (id) {
      var d = TODAS.filter(function (x) { return x.id === id; })[0];
      var est = S.atual[id] || { marcados: {} };
      var n = d.rubrica.reduce(function (a, q, k) { return a + (est.marcados[k] ? q.pontos : 0); }, 0);
      soma += n; total += d.totalPontos;
      return { d: d, nota: n };
    });
    var oficial = (b.modo || "oficial") !== "maratona";
    w.appendChild(el("div", "",
      '<span class="eyebrow">' + (oficial ? "Ensaio oficial" : "Maratona") + "</span><h1>" +
      num(soma) + " de " + num(total) + " pontos.</h1>"));
    w.appendChild(el("p", "fine", (oficial
        ? "Na prova de 2026 esta única questão vale 11,25% da nota. "
        : "A maratona não corresponde à prova: são " + itens.length + " discursivas seguidas, para " +
          "acumular repertório. Na prova, você enfrenta uma. ") +
      "Você aproveitou " + Math.round(soma / total * 100) + "% dos pontos."));
    var box = el("div", "revisao");
    itens.forEach(function (x, k) {
      var frac = x.nota / x.d.totalPontos;
      var linha = el("button", "ritem " + (frac >= 0.6 ? "ok" : "bad"));
      linha.type = "button";
      linha.onclick = function () { telaQuestao(x.d.id, null); };
      linha.innerHTML = '<span class="rnum">D' + (k + 1) + "</span>" +
        '<span class="rtema"><b>' + esc(x.d.tema) + "</b><em>" + TIPOS[x.d.tipo] + "</em></span>" +
        '<span class="rgab"><i class="verd">' + num(x.nota) + " / " + num(x.d.totalPontos) + "</i></span>";
      box.appendChild(linha);
    });
    w.appendChild(box);

    var ac = el("div", "acoes");
    var bs = el("button", "btn", itens.length === 1
      ? "Registrar a tentativa" : "Registrar as " + itens.length + " tentativas");
    bs.type = "button";
    bs.onclick = function () {
      itens.forEach(function (x) {
        var estX = S.atual[x.d.id] || {};
        var consultada = !!estX.consultou;
        if (!S.hist[x.d.id]) S.hist[x.d.id] = [];
        S.hist[x.d.id].push({ nota: x.nota, total: x.d.totalPontos,
          data: new Date().toISOString().slice(0, 10), texto: estX.texto || "",
          consultada: consultada });
        S.atual[x.d.id] = { marcados: {}, texto: "", revelado: false };
        if (global.HISTORICO) {
          global.HISTORICO.gravarDiscursiva(oficial ? "disc" : "disc-maratona",
            { id: x.d.id, nota: x.nota, total: x.d.totalPontos, consultada: consultada });
        }
      });
      S.bloco = null; save(); telaLista();
    };
    ac.appendChild(bs);
    var bd = el("button", "btn ghost", "Descartar e voltar");
    bd.type = "button";
    bd.onclick = function () { S.bloco = null; save(); telaLista(); };
    ac.appendChild(bd);
    w.appendChild(ac);
    app.appendChild(w);
    window.scrollTo(0, 0);
  }

  /* ---------------- entrada ---------------- */
  global.abrirDiscursivas = function () {
    if (S.bloco && S.bloco.lista) {
      var b = { lista: S.bloco.lista, i: S.bloco.i || 0, inicio: S.bloco.inicio,
                modo: S.bloco.modo || "oficial" };
      telaQuestao(b.lista[b.i], b);
    } else {
      telaLista();
    }
  };
})(window);
