/* Revisão espaçada.

   Refaz só o que você errou, em intervalos que crescem a cada acerto — o esquema de
   caixas de Leitner. Errou de novo, a questão volta para a primeira caixa.

   O baralho NÃO tem estado próprio: é derivado de enade26.historico a cada abertura,
   percorrendo as tentativas de cada questão em ordem. Guardar caixas numa segunda chave
   criaria duas versões da verdade, que divergem no dia em que o usuário limpar uma e
   não a outra. Aqui, apagar o histórico apaga o baralho junto, que é o comportamento
   correto: sem histórico não há o que revisar.

   Cobertura: só as questões do banco IA, que o histórico identifica por índice e o
   sorteio sabe remontar. As objetivas dos simulados 1 a 4 são imagens de página de
   caderno e não têm identificador individual gravado — para refazê-las, refaz-se o
   simulado.

   Depende de: banco/*.js, objetos.js, historico.js, sorteio.js, simulado.js
*/
(function (global) {
  "use strict";

  var DIA = 86400000;

  /* Intervalos por caixa, em dias. Quatro acertos seguidos depois do erro e a questão
     sai do baralho — com a prova em novembro, esticar mais que isso faria a última
     revisão cair depois do exame. */
  var CAIXAS = [1, 3, 7, 16];
  var LOTE = 20;          // teto por sessão, para a revisão caber numa sentada

  var CHAVE_SESSAO = "enade26.revisao.sessao";
  var CHAVE_RESP = "enade26.revisao.respostas";

  var app;

  function el(t, c, h) {
    var n = document.createElement(t);
    if (c) n.className = c;
    if (h != null) n.innerHTML = h;
    return n;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function dias(ms) { return Math.round(ms / DIA); }
  function dataCurta(ts) {
    var d = new Date(ts);
    return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
  }

  /* ---------------- baralho ---------------- */

  /* Percorre as tentativas de uma questão e devolve em que caixa ela parou.
     Errar zera o progresso: a questão volta para a caixa 1 mesmo que já estivesse
     graduada. É o ponto do método — o que você esqueceu volta a ser cobrado cedo. */
  function dobrar(tentativas) {
    var caixa = 0, graduada = false, erros = 0, ultimo = 0;
    tentativas.forEach(function (a) {
      ultimo = a.t;
      if (!a.ok) { erros++; caixa = 1; graduada = false; return; }
      if (caixa === 0) return;                 // acertou sem nunca ter errado: fora do baralho
      caixa++;
      if (caixa > CAIXAS.length) { graduada = true; caixa = CAIXAS.length; }
    });
    return { caixa: caixa, graduada: graduada, erros: erros, ultimo: ultimo,
             tentativas: tentativas.length };
  }

  function baralho(agora) {
    agora = agora || Date.now();
    var h = global.HISTORICO ? global.HISTORICO.ler() : { itens: [] };

    var porQuestao = {};
    var oficiaisErradas = 0;
    h.itens.forEach(function (r) {
      if (r.id === null || r.id === undefined) {
        if (!r.ok) oficiaisErradas++;
        return;
      }
      (porQuestao[r.id] = porQuestao[r.id] || []).push(r);
    });

    var vencidas = [], agendadas = [], graduadas = 0;
    Object.keys(porQuestao).forEach(function (id) {
      var tentativas = porQuestao[id].sort(function (a, b) { return a.t - b.t; });
      var e = dobrar(tentativas);
      if (e.caixa === 0) return;               // nunca errada: não entra no baralho
      if (e.graduada) { graduadas++; return; }

      var ultimo = tentativas[tentativas.length - 1];
      var carta = {
        id: Number(id), caixa: e.caixa, erros: e.erros, tentativas: e.tentativas,
        ultimo: e.ultimo, prox: e.ultimo + CAIXAS[e.caixa - 1] * DIA,
        area: ultimo.a, subtema: ultimo.s, objeto: ultimo.o
      };
      (carta.prox <= agora ? vencidas : agendadas).push(carta);
    });

    /* Mais atrasada primeiro; empatando, a de caixa mais baixa, que é a mais frágil. */
    vencidas.sort(function (a, b) { return (a.prox - b.prox) || (a.caixa - b.caixa); });
    agendadas.sort(function (a, b) { return a.prox - b.prox; });

    return { vencidas: vencidas, agendadas: agendadas, graduadas: graduadas,
             oficiaisErradas: oficiaisErradas,
             total: vencidas.length + agendadas.length };
  }

  /* ---------------- sessão ---------------- */
  function lerSessao() {
    try { return JSON.parse(localStorage.getItem(CHAVE_SESSAO) || "null"); }
    catch (e) { return null; }
  }

  /* Uma sessão já corrigida cumpriu o seu papel: as respostas foram para o histórico e
     as caixas já andaram. Retomá-la numa visita nova devolveria o resultado de ontem no
     lugar do baralho de hoje — que é justamente o que a pessoa vem ver. */
  function sessaoEncerrada() {
    try {
      var r = JSON.parse(localStorage.getItem(CHAVE_RESP) || "null");
      return !!(r && r.corrigido);
    } catch (e) { return false; }
  }
  function gravarSessao(s) {
    try { localStorage.setItem(CHAVE_SESSAO, JSON.stringify(s)); } catch (e) {}
  }
  function limparSessao() {
    try { localStorage.removeItem(CHAVE_SESSAO); localStorage.removeItem(CHAVE_RESP); }
    catch (e) {}
  }

  function iniciar(cartas) {
    var ids = cartas.slice(0, LOTE).map(function (c) { return c.id; });
    var itens = global.SORTEIO.porIds(ids);
    if (!itens.length) return;
    limparSessao();
    gravarSessao({ itens: itens });
    montarSessao();
  }

  function montarSessao() {
    var s = lerSessao();
    if (!s) return telaBaralho();
    global.montarSimulado({
      chave: CHAVE_RESP,
      numero: "REV",
      fonte: "revisao",
      titulo: "Revisão de " + s.itens.length +
        (s.itens.length === 1 ? " questão" : " questões"),
      itens: s.itens,
      modo: "treino",          // revela a explicação na hora: rever é para entender, não medir
      duracaoMin: 0,
      aoSair: function () { telaBaralho(); },   // a sessão fica guardada
      rotuloSair: "← Voltar ao baralho",
      avisoSair: "o que você já respondeu fica guardado",
      rotuloTrocar: "Encerrar e voltar ao baralho",
      confirmaTrocar: "Encerrar esta revisão e voltar ao baralho?\n\n" +
        "Se você já corrigiu, as respostas foram gravadas e as caixas já avançaram. " +
        "Se ainda não corrigiu, elas se perdem.",
      aoTrocarProva: function () { limparSessao(); telaBaralho(); }
    });
  }

  /* ---------------- tela do baralho ---------------- */
  function telaBaralho() {
    app.innerHTML = "";
    var w = el("div", "tela");
    var b = baralho();

    w.appendChild(el("div", "",
      '<span class="eyebrow">Revisão espaçada</span>' +
      "<h1>De volta ao que você errou.</h1>"));

    if (!b.total && !b.graduadas) {
      w.appendChild(el("p", "lede", b.oficiaisErradas
        ? "Ainda não há nada para revisar aqui. Você errou " + b.oficiaisErradas +
          " questões nos simulados oficiais, mas essas são imagens das páginas do caderno " +
          "e não podem ser servidas uma a uma — para refazê-las, refaça o simulado."
        : "O baralho se monta sozinho com o que você errar. Ainda não há erro registrado " +
          "neste navegador — ou porque você não corrigiu nenhum simulado, ou porque acertou tudo."));
      var card = el("div", "card key");
      card.innerHTML = "<h3>Como funciona</h3><p>Cada questão do Simulado IA que você errar entra " +
        "no baralho e volta no dia seguinte. Acertando, o intervalo cresce: 1, 3, 7 e 16 dias. " +
        "Quatro acertos seguidos e ela sai. Errando de novo, volta para o começo — que é " +
        "justamente o ponto do método.</p>";
      w.appendChild(card);
      var acao = el("div", "acoes");
      acao.innerHTML = '<a class="btn" href="simulado-ia.html">Gerar uma prova</a>' +
        '<a class="btn ghost" href="painel.html">Ver o painel</a>';
      w.appendChild(acao);
      app.appendChild(w);
      window.scrollTo(0, 0);
      return;
    }

    var proxima = b.agendadas.length ? b.agendadas[0].prox : 0;
    var fichas = el("div", "placar");
    [[b.vencidas.length, b.vencidas.length === 1 ? "questão esperando revisão" : "questões esperando revisão"],
     [b.total, "no baralho, contando as agendadas"],
     [b.graduadas, b.graduadas === 1 ? "questão já dominada" : "questões já dominadas"],
     [b.vencidas.length ? "hoje" : (proxima ? dataCurta(proxima) : "—"),
      b.vencidas.length ? "é dia de revisar" : "a próxima volta"]]
      .forEach(function (p, k) {
        fichas.appendChild(el("div", "pcell" + (k === 0 ? " destaque" : ""),
          "<b>" + p[0] + "</b><span>" + p[1] + "</span>"));
      });
    w.appendChild(fichas);

    /* Sessão interrompida: retomar tem de vir antes de qualquer outra ação, senão
       começar uma nova apagaria silenciosamente o que já foi respondido. */
    var emCurso = lerSessao();
    if (emCurso) {
      var barra = el("div", "acoes");
      var br = el("button", "btn grande", "Retomar a revisão em andamento");
      br.type = "button";
      br.onclick = montarSessao;
      barra.appendChild(br);
      var bd = el("button", "btn ghost", "Descartar");
      bd.type = "button";
      bd.onclick = function () {
        if (!confirm("Descartar a revisão em andamento?\n\n" +
          "São " + emCurso.itens.length + " questões. O que você já corrigiu está gravado; " +
          "o que respondeu sem corrigir se perde.")) return;
        limparSessao();
        telaBaralho();
      };
      barra.appendChild(bd);
      barra.appendChild(el("span", "fine", emCurso.itens.length + " questões abertas"));
      w.appendChild(barra);
    }

    /* ação principal */
    var acoes = el("div", "acoes");
    if (b.vencidas.length) {
      var quantas = Math.min(b.vencidas.length, LOTE);
      var bi = el("button", "btn grande", "Revisar " + quantas +
        (quantas === 1 ? " questão" : " questões"));
      bi.type = "button";
      bi.onclick = function () { iniciar(b.vencidas); };
      acoes.appendChild(bi);
      if (b.vencidas.length > LOTE) {
        acoes.appendChild(el("span", "fine", "as " + quantas + " mais atrasadas; as outras " +
          (b.vencidas.length - LOTE) + " ficam para a próxima sessão"));
      } else {
        acoes.appendChild(el("span", "fine",
          "com a explicação revelada na hora — rever é para entender, não para medir"));
      }
    } else {
      var ba = el("button", "btn", "Revisar adiantado");
      ba.type = "button";
      ba.onclick = function () { iniciar(b.agendadas); };
      acoes.appendChild(ba);
      acoes.appendChild(el("span", "fine",
        "nada venceu ainda. Antecipar não faz mal, mas o intervalo existe justamente " +
        "para você esquecer um pouco antes de rever — é o esforço de lembrar que fixa"));
    }
    w.appendChild(acoes);

    /* fila */
    if (b.vencidas.length) {
      w.appendChild(el("h2", "secao", "Esperando revisão"));
      var fila = el("div", "revisao");
      fila.appendChild(listar(b.vencidas, true));
      w.appendChild(fila);
    }
    if (b.agendadas.length) {
      w.appendChild(el("h2", "secao", "Agendadas"));
      w.appendChild(el("p", "fine",
        "Já revisadas, esperando o intervalo fechar. Quanto mais alta a caixa, mais tempo " +
        "você aguenta sem revisitar."));
      var ag = el("div", "revisao");
      ag.appendChild(listar(b.agendadas.slice(0, 12), false));
      w.appendChild(ag);
      if (b.agendadas.length > 12) {
        w.appendChild(el("p", "fine", "e mais " + (b.agendadas.length - 12) + "."));
      }
    }

    if (b.oficiaisErradas) {
      w.appendChild(el("p", "fine", "<strong>Fora do baralho:</strong> " + b.oficiaisErradas +
        " questões que você errou nos simulados 1 a 4. Elas são imagens das páginas dos " +
        "cadernos do Inep, sem identificador individual no histórico — para refazê-las, " +
        "refaça o simulado correspondente."));
    }

    var rodape = el("div", "acoes");
    rodape.innerHTML = '<a class="btn ghost" href="painel.html">Painel de desempenho</a>' +
      '<a class="btn ghost" href="simulado-ia.html">Simulado IA</a>';
    w.appendChild(rodape);

    app.appendChild(w);
    window.scrollTo(0, 0);
  }

  function listar(cartas, vencida) {
    var box = document.createDocumentFragment();
    var agora = Date.now();
    cartas.forEach(function (c) {
      var obj = global.OBJETOS ? global.OBJETOS.porId(c.objeto) : null;
      var rotulo = obj ? obj.curto : (global.AREA_NOMES && global.AREA_NOMES[c.area]) || c.area;
      var atraso = dias(agora - c.prox);
      var quando = vencida
        ? (atraso <= 0 ? "vence hoje" : "atrasada " + atraso + (atraso === 1 ? " dia" : " dias"))
        : "volta em " + dataCurta(c.prox);
      /* Quando o subtema repete o nome do objeto — "Globalização · Globalização" — só o
         objeto fica; a redundância não informa nada e polui a linha. */
      var detalhe = (c.subtema && c.subtema !== rotulo) ? esc(c.subtema) + " · " : "";
      var linha = el("div", "ritem " + (c.caixa === 1 ? "bad" : "ok"));
      linha.innerHTML =
        '<span class="rnum">' + c.caixa + "</span>" +
        '<span class="rtema"><b>' + esc(rotulo) + "</b><em>" + detalhe +
          c.erros + (c.erros === 1 ? " erro" : " erros") +
          " em " + c.tentativas + (c.tentativas === 1 ? " tentativa" : " tentativas") + "</em></span>" +
        '<span class="rgab"><i class="marcou">' + quando + "</i></span>";
      box.appendChild(linha);
    });
    return box;
  }

  /* ---------------- entrada ---------------- */
  global.REVISAO = { baralho: baralho, CAIXAS: CAIXAS, LOTE: LOTE };

  global.abrirRevisao = function () {
    app = document.getElementById("app");
    try { localStorage.setItem("enade26.t", "1"); localStorage.removeItem("enade26.t"); }
    catch (e) {
      var a = document.getElementById("avisoArmazenamento");
      if (a) a.style.display = "block";
    }
    if (lerSessao() && sessaoEncerrada()) limparSessao();
    if (lerSessao()) montarSessao(); else telaBaralho();
  };
})(window);
