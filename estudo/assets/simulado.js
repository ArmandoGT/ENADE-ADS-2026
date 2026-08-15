/* Motor dos simulados — uma questão por tela.

   Duas fontes de questão, com a mesma mecânica:
     • "caderno"  — questão oficial do Inep, exibida como imagem da página do PDF
     • "autoral"  — questão do banco IA, com enunciado, alternativas e explicação em texto

   Chamada:
     montarSimulado({
       chave, numero, titulo, resumo, criterios,   // tela de abertura padrão
       FG, CE, DISC,                               // modo caderno
       itens,                                      // modo autoral (lista já pronta)
       modo: "prova" | "treino",                   // treino revela o gabarito na hora
       duracaoMin: 240,                            // 0 ou ausente = sem cronômetro
       fonte: "revisao",                           // rótulo no histórico; padrão vem do número
       aoTrocarProva: fn                           // se definido, exibe "Gerar outra prova"
     })

   Modo caderno depende de paginas.js (window.PAGINAS, TOTAL_PAGINAS, CONTINUA).
*/
(function (global) {
  "use strict";

  var AREA = {
    ES: "Engenharia de software", OO: "UML e projeto OO", AL: "Algoritmos e estruturas de dados",
    BD: "Banco de dados", GP: "Gestão de projetos", IN: "SO, redes e distribuídos",
    ML: "Lógica e matemática", IH: "IHC e acessibilidade", SG: "Segurança e legislação",
    OT: "Arquitetura de computadores e IA", FG: "Formação geral"
  };
  var LETRAS = ["A", "B", "C", "D", "E"];

  /* Pesos da nota — PROVISÓRIOS.

     O Edital Enade nº 61/2026, item 16.5, remete o cálculo da nota a "nota técnica
     específica, publicada posteriormente no Portal do Inep", que até hoje não saiu.
     Não existe, portanto, peso oficial para 2026.

     Até que saia, aplica-se a proporção histórica do exame: formação geral 25% e
     componente específico 75% (Portaria Normativa MEC nº 840/2018), com o específico
     dividido em 85% objetivas e 15% discursiva — a mesma razão que produzia os
     63,75% e 11,25% das edições de 2008 a 2021.

     A mudança em relação ao formato antigo: a formação geral valia 15% em objetivas
     porque 10% vinham das suas duas discursivas, que a Portaria 154/2026 extinguiu.
     Sem elas, os 25% inteiros passam para as 15 objetivas.

     Quando a nota técnica for publicada, só este bloco muda. */
  var PESOS = { fgObj: 25, ceObj: 63.75, ceDisc: 11.25 };
  var TOTAL_OBJ = PESOS.fgObj + PESOS.ceObj;   // 88,75 pontos nas objetivas

  function num(v) { return v.toFixed(2).replace(".", ","); }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function pad2(n) { return String(n).padStart(2, "0"); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function txt(s) { return esc(s).replace(/\n/g, "<br>"); }

  global.AREA_NOMES = AREA;

  global.montarSimulado = function (cfg) {
    /* ---------------- normalização dos itens ---------------- */
    var ITENS = [];

    if (cfg.itens) {
      cfg.itens.forEach(function (it, i) { it.i = i; ITENS.push(it); });
    } else {
      cfg.FG.concat(cfg.CE).forEach(function (q, i) {
        ITENS.push({
          i: i, fonte: "caderno", tipo: "obj", rotulo: String(q[0]),
          ano: q[1], orig: q[2], area: q[3], tema: q[4], gab: q[5], rec: q[6], nota: q[7],
          bloco: q[3] === "FG" ? "FG" : "CE"
        });
      });
      var base = ITENS.length;
      cfg.DISC.forEach(function (d, k) {
        ITENS.push({
          i: base + k, fonte: "caderno", tipo: "disc", rotulo: d[0],
          ano: d[1], orig: d[2], area: d[3], tema: d[4], valor: d[5], criterios: d[6],
          bloco: d[3] === "FG" ? "FG" : "CE"
        });
      });
    }

    // páginas do caderno e rubrica oficial das discursivas
    ITENS.forEach(function (it) {
      if (it.fonte !== "caderno") return;
      var m = (global.PAGINAS || {})[it.ano] || {};
      it.pag = m[it.orig] || null;
      it.maxPag = (global.TOTAL_PAGINAS || {})[it.ano] || null;
      it.continua = ((global.CONTINUA || {})[it.ano] || []).indexOf(it.orig) >= 0;

      if (it.tipo === "disc" && global.DISC_OFICIAIS) {
        var of = global.DISC_OFICIAIS.filter(function (d) {
          return d.ano === it.ano && d.num === it.orig;
        })[0];
        if (of) { it.rubrica = of.rubrica; it.valorNum = of.valor; it.tipoDisc = of.tipo; }
      }
    });

    var N = ITENS.length;
    var OBJS = ITENS.filter(function (it) { return it.tipo === "obj"; });
    var DISCS = ITENS.filter(function (it) { return it.tipo === "disc"; });
    var FGO = OBJS.filter(function (it) { return it.bloco === "FG"; });
    var CEO = OBJS.filter(function (it) { return it.bloco === "CE"; });
    var TREINO = cfg.modo === "treino";
    var DURACAO = (cfg.duracaoMin || 0) * 60 * 1000;

    /* ---------------- estado ---------------- */
    var KEY = cfg.chave;
    function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { aviso(); } }
    var S = load();
    if (!S.resp) S.resp = {};
    if (S.atual == null) S.atual = 0;
    if (!S.revelado) S.revelado = {};

    var avisado = false;
    function aviso() {
      if (avisado) return; avisado = true;
      var a = document.getElementById("avisoArmazenamento");
      if (a) a.style.display = "block";
    }
    try { localStorage.setItem("enade26.t", "1"); localStorage.removeItem("enade26.t"); } catch (e) { aviso(); }

    var raiz = document.getElementById("app");
    var vistaPag = null, zoom = 1;

    /* ---------------- cronômetro ---------------- */
    var tick = null;
    function fmt(ms) {
      if (ms < 0) ms = 0;
      var s = Math.floor(ms / 1000);
      return Math.floor(s / 3600) + ":" + pad2(Math.floor((s % 3600) / 60)) + ":" + pad2(s % 60);
    }
    function restante() { return S.inicio ? DURACAO - (Date.now() - S.inicio) : DURACAO; }
    function relogio() {
      if (!DURACAO) return;
      var r = S.rodando ? restante() : (S.congelado != null ? S.congelado : DURACAO);
      var c = document.getElementById("clock");
      if (c) { c.textContent = fmt(r); c.classList.toggle("low", r <= 15 * 60 * 1000); }
      if (S.rodando && r <= 0) pausar();
    }
    function tocar() {
      if (!DURACAO) return;
      var sobra = (S.inicio && S.congelado != null) ? S.congelado : DURACAO;
      if (sobra <= 0) sobra = DURACAO;
      S.inicio = Date.now() - (DURACAO - sobra);
      S.rodando = true; S.congelado = null; save();
      if (tick) clearInterval(tick);
      tick = setInterval(relogio, 500); relogio();
    }
    function pausar() {
      if (!DURACAO) return;
      S.congelado = restante(); S.rodando = false; save();
      if (tick) { clearInterval(tick); tick = null; }
      relogio();
    }
    if (S.rodando && DURACAO) tick = setInterval(relogio, 500);

    function respondidas() {
      return ITENS.filter(function (it) { return S.resp[it.rotulo]; }).length;
    }

    /* ================= TELAS ================= */

    function telaInicio() {
      raiz.innerHTML = "";
      var feito = respondidas();
      var w = el("div", "tela");

      w.appendChild(el("div", "", '<span class="eyebrow">Simulado ' + pad2(cfg.numero) + "</span>" +
        "<h1>" + cfg.titulo + "</h1>" +
        '<p class="lede" style="margin-top:14px">' + cfg.resumo + "</p>"));

      var fichas = el("div", "fichas");
      [[N, "questões"], [OBJS.length, "objetivas, com correção automática"],
       [DISCS.length, "discursivas, para autoavaliar"],
       [cfg.duracaoMin ? Math.round(cfg.duracaoMin / 60) + " h" : "livre", "de prova"]]
        .forEach(function (f) {
          fichas.appendChild(el("div", "ficha", "<b>" + f[0] + "</b><span>" + f[1] + "</span>"));
        });
      w.appendChild(fichas);

      /* Provas montadas com questões reais do acervo seguem o formato da época. Não são
         reescritas para 2026 de propósito: a questão do Inep é a que caiu, e adulterá-la
         para caber no novo caderno destruiria o valor de treinar com o item original. */
      if (!cfg.itens) {
        w.appendChild(el("div", "card flag", "<h3>Formato da época, questões reais</h3><p>" +
          "Este simulado reproduz a montagem das provas de 2008 a 2021: 8 objetivas de formação " +
          "geral, 27 do componente específico e 5 discursivas. A prova de 2026 mudou — passou a " +
          "ter 15 objetivas de formação geral, 30 do específico e uma só discursiva (portarias " +
          "Inep 154 e 169/2026). O que não mudou foi o que cai e como cai, e é isso que se treina " +
          "aqui. Para ensaiar o formato novo, use o " +
          '<a href="simulado-ia.html">Simulado IA</a> e a <a href="discursivas.html">aba de ' +
          "discursivas</a>.</p>"));
      }

      if (cfg.criterios) {
        w.appendChild(el("div", "cards c3", cfg.criterios.map(function (c) {
          return '<div class="card key"><h3>' + c[0] + "</h3><p>" + c[1] + "</p></div>";
        }).join("")));
      }

      w.appendChild(el("div", "card", "<h3>Como funciona</h3><p>" +
        "Uma questão por tela, com a página original do caderno do Inep na sua frente — " +
        "diagramas, código e tabelas exatamente como caíram. Você marca a alternativa, avança, e " +
        "pode voltar a qualquer questão pelo mapa no rodapé. No fim, a correção mostra o que você " +
        "acertou, o que errou e o gabarito de cada uma.</p>"));

      var acoes = el("div", "acoes");
      var b = el("button", "btn grande", feito ? "Continuar de onde parei" : "Começar simulado");
      b.type = "button";
      b.onclick = function () { if (DURACAO && !S.rodando && S.congelado == null) tocar(); irPara(feito ? S.atual : 0); };
      acoes.appendChild(b);

      if (feito) {
        var r = el("button", "btn ghost", "Recomeçar do zero");
        r.type = "button"; r.onclick = limpar;
        acoes.appendChild(r);
        acoes.appendChild(el("span", "fine", feito + " de " + N + " já respondidas"));
      }
      w.appendChild(acoes);
      raiz.appendChild(w);
      window.scrollTo(0, 0);
    }

    function telaQuestao(idx) {
      var it = ITENS[idx];
      S.atual = idx; save();
      vistaPag = it.pag; zoom = 1;

      raiz.innerHTML = "";
      var w = el("div", "tela");

      /* Saída sempre à vista. Sem ela, quem entra numa sessão que a página retoma
         sozinha ao abrir fica preso: voltar pelo menu apenas reabre a mesma sessão. */
      if (cfg.aoSair) {
        var saida = el("div", "barravolta");
        var bs = el("button", "btn ghost mini", cfg.rotuloSair || "← Voltar");
        bs.type = "button";
        bs.onclick = cfg.aoSair;
        saida.appendChild(bs);
        if (cfg.avisoSair) saida.appendChild(el("span", "fine", cfg.avisoSair));
        w.appendChild(saida);
      }

      /* topo */
      var topo = el("div", "qtopo");
      topo.innerHTML =
        '<div class="qpos">' +
          "<b>" + (it.tipo === "disc" ? "Discursiva " + it.rotulo.replace(/^D/, "") : "Questão " + it.rotulo) + "</b>" +
          "<span>de " + N + " · " + (it.bloco === "FG" ? "formação geral" : "componente específico") + "</span>" +
        "</div>" +
        (DURACAO
          ? '<div class="qrelogio"><span class="clock" id="clock">0:00:00</span>' +
            '<button class="btn ghost mini" type="button" id="bTempo"></button></div>'
          : '<div class="qrelogio"><span class="fine">' +
            (TREINO ? "modo treino · sem cronômetro" : "sem cronômetro") + "</span></div>");
      w.appendChild(topo);

      var barra = el("div", "ptrack grande");
      barra.appendChild(el("div", "pfill")).style.width = (idx / N * 100) + "%";
      w.appendChild(barra);

      /* origem */
      var ficha = el("div", "origem");
      ficha.innerHTML = it.fonte === "caderno"
        ? "<span>Prova ENADE <b>" + it.ano + "</b> · questão <b>" +
            (it.tipo === "disc" ? "discursiva " + it.orig.replace(/^D/, "") : it.orig) + "</b></span>" +
          '<span class="sep">·</span><span>' + AREA[it.area] + "</span>" +
          (it.rec ? '<span class="sep">·</span><span class="tag rec">' +
            (it.rec === 1 ? "1 edição" : it.rec + " edições") + "</span>" : "") +
          (it.valor ? '<span class="sep">·</span><span>' + it.valor + "</span>" : "")
        : '<span class="tag ia">questão autoral</span>' +
          '<span class="sep">·</span><span>' + AREA[it.area] + "</span>" +
          '<span class="sep">·</span><span>' + esc(it.subtema || "") + "</span>" +
          (it.valor ? '<span class="sep">·</span><span>' + it.valor + "</span>" : "");
      w.appendChild(ficha);

      /* enunciado */
      w.appendChild(it.fonte === "caderno" ? visorCaderno(it) : visorAutoral(it));

      /* resposta */
      w.appendChild(it.tipo === "obj" ? montarAlternativas(it) : montarAutoavaliacao(it));

      /* navegação */
      var nav = el("div", "qnav");
      var ant = el("button", "btn ghost", "← Anterior");
      ant.type = "button"; ant.disabled = idx === 0;
      ant.onclick = function () { irPara(idx - 1); };
      nav.appendChild(ant);
      nav.appendChild(el("span", "fine", respondidas() + " de " + N + " respondidas"));
      if (idx < N - 1) {
        var prox = el("button", "btn", "Próxima →");
        prox.type = "button"; prox.onclick = function () { irPara(idx + 1); };
        nav.appendChild(prox);
      } else {
        var fim = el("button", "btn", "Finalizar e corrigir");
        fim.type = "button"; fim.onclick = finalizar;
        nav.appendChild(fim);
      }
      w.appendChild(nav);

      w.appendChild(montarMapa());

      var acoes = el("div", "acoes centro");
      if (S.corrigido) {
        var bv = el("button", "btn", "← Voltar ao resultado");
        bv.type = "button"; bv.onclick = telaResultado;
        acoes.appendChild(bv);
      } else {
        var bf = el("button", "btn ghost", "Encerrar e corrigir agora");
        bf.type = "button"; bf.onclick = finalizar;
        acoes.appendChild(bf);
      }
      w.appendChild(acoes);

      raiz.appendChild(w);
      atualizarMapa();

      if (DURACAO) {
        var bt = document.getElementById("bTempo");
        function rotulo() { bt.textContent = S.rodando ? "Pausar" : (S.congelado != null ? "Retomar" : "Iniciar"); }
        bt.onclick = function () { S.rodando ? pausar() : tocar(); rotulo(); };
        rotulo(); relogio();
      }
      window.scrollTo(0, 0);
    }

    /* ---------------- enunciado: caderno ---------------- */
    function visorCaderno(it) {
      var box = el("div", "visor");
      if (!it.pag) {
        box.appendChild(el("div", "semimg",
          "<p>A imagem desta página não está disponível. Abra o caderno em " +
          "<code>../provas/ENADE_" + it.ano + "_TADS_prova.pdf</code> e procure a questão " + it.orig + ".</p>"));
        return box;
      }
      var ctrl = el("div", "visorctrl");
      var esq = el("button", "btn ghost mini", "◀"),
          dir = el("button", "btn ghost mini", "▶"),
          lbl = el("span", "visorlbl", ""),
          zmenos = el("button", "btn ghost mini", "−"),
          zmais = el("button", "btn ghost mini", "+"),
          zlbl = el("span", "visorlbl", "100%"),
          abrir = el("a", "fine linkabrir", "abrir imagem ↗");
      [esq, dir, zmenos, zmais].forEach(function (b) { b.type = "button"; });
      ctrl.appendChild(esq); ctrl.appendChild(lbl); ctrl.appendChild(dir);
      ctrl.appendChild(el("span", "visorsp"));
      ctrl.appendChild(zmenos); ctrl.appendChild(zlbl); ctrl.appendChild(zmais);
      ctrl.appendChild(abrir);
      box.appendChild(ctrl);

      var moldura = el("div", "moldura");
      var img = el("img", "pag");
      img.alt = "Página " + it.pag + " do caderno do ENADE " + it.ano;
      moldura.appendChild(img);
      box.appendChild(moldura);

      if (it.continua) {
        box.appendChild(el("p", "fine dica",
          "O enunciado desta questão continua na página seguinte — use a seta ▶."));
      }
      function pintar() {
        var src = "paginas/" + it.ano + "-" + pad2(vistaPag) + ".png";
        img.src = src; abrir.href = src; abrir.target = "_blank"; abrir.rel = "noopener";
        lbl.textContent = "pág. " + vistaPag + " de " + it.maxPag;
        esq.disabled = vistaPag <= 1; dir.disabled = vistaPag >= it.maxPag;
        moldura.classList.toggle("fora", vistaPag !== it.pag);
        img.style.width = (zoom * 100) + "%";
        zlbl.textContent = Math.round(zoom * 100) + "%";
        zmenos.disabled = zoom <= 1; zmais.disabled = zoom >= 3;
      }
      esq.onclick = function () { if (vistaPag > 1) { vistaPag--; pintar(); } };
      dir.onclick = function () { if (vistaPag < it.maxPag) { vistaPag++; pintar(); } };
      zmenos.onclick = function () { zoom = Math.max(1, zoom - 0.5); pintar(); };
      zmais.onclick = function () { zoom = Math.min(3, zoom + 0.5); pintar(); };
      pintar();
      return box;
    }

    /* ---------------- enunciado: autoral ---------------- */
    function visorAutoral(it) {
      var box = el("div", "visor");
      box.appendChild(el("div", "enunciado", txt(it.enunciado)));
      if (it.codigo) {
        var pre = el("pre", "codigo");
        pre.appendChild(el("code", null, esc(it.codigo)));
        box.appendChild(pre);
      }
      return box;
    }

    /* ---------------- alternativas ---------------- */
    function montarAlternativas(it) {
      var dado = S.resp[it.rotulo];
      var revelado = S.corrigido || (TREINO && S.revelado[it.rotulo]);
      var box = el("div", "resposta" + (revelado ? (dado === it.gab ? " certa" : " errada") : ""));
      box.appendChild(el("div", "rotulo", revelado ? "Correção" : "Sua resposta"));

      if (it.fonte === "autoral") {
        var lista = el("div", "opcoes");
        it.alternativas.forEach(function (texto, k) {
          var L = LETRAS[k];
          var b = el("button", "opcao");
          b.type = "button";
          b.innerHTML = '<span class="oletra">' + L + '</span><span class="otexto">' + esc(texto) + "</span>";
          b.setAttribute("aria-pressed", dado === L ? "true" : "false");
          if (revelado) {
            b.disabled = true;
            if (L === it.gab) b.classList.add("gabarito");
            else if (L === dado) b.classList.add("marcada-errada");
          } else {
            b.onclick = function () { marcar(it, L); };
          }
          lista.appendChild(b);
        });
        box.appendChild(lista);
      } else {
        var linha = el("div", "alts");
        LETRAS.forEach(function (L) {
          var b = el("button", "alt", L);
          b.type = "button";
          b.setAttribute("aria-pressed", dado === L ? "true" : "false");
          if (revelado) {
            b.disabled = true;
            if (L === it.gab) b.classList.add("gabarito");
            else if (L === dado) b.classList.add("marcada-errada");
          } else {
            b.onclick = function () { marcar(it, L); };
          }
          linha.appendChild(b);
        });
        box.appendChild(linha);
      }

      if (revelado) {
        var msg = dado === it.gab
          ? "<strong>Você acertou.</strong> O gabarito é <b>" + it.gab + "</b>."
          : dado
            ? "<strong>Você errou.</strong> Marcou <b>" + dado + "</b>; o gabarito é <b>" + it.gab + "</b>."
            : "<strong>Deixou em branco.</strong> O gabarito é <b>" + it.gab + "</b>.";
        box.appendChild(el("p", "veredito", msg));
        if (it.explicacao) box.appendChild(el("div", "explicacao", "<b>Por quê</b>" + txt(it.explicacao)));
        else if (it.nota) box.appendChild(el("p", "fine", it.tema + ". " + it.nota + "."));
      } else {
        box.appendChild(el("p", "fine",
          "Clique de novo para desmarcar. Teclas A a E respondem; as setas navegam. " +
          (TREINO ? "No modo treino, o gabarito aparece assim que você marcar."
                  : "O gabarito só aparece no fim, na correção.")));
      }
      return box;
    }

    function marcar(it, L) {
      if (TREINO && S.revelado[it.rotulo]) return;   // no treino, a resposta trava
      S.resp[it.rotulo] = (S.resp[it.rotulo] === L) ? null : L;
      if (TREINO && S.resp[it.rotulo]) S.revelado[it.rotulo] = true;
      save();
      telaQuestao(S.atual);
    }

    /* Discursiva: em vez de "fiz / não fiz", o estudante marca os quesitos da rubrica
       e a nota é somada. É como o Inep corrige — por contagem de itens cumpridos. */
    function montarAutoavaliacao(it) {
      var box = el("div", "resposta");
      box.appendChild(el("div", "rotulo", "Discursiva — autocorreção por rubrica"));
      box.appendChild(el("p", "fine", "Escreva a resposta no papel ou no editor, em no máximo 15 linhas. " +
        (it.fonte === "caderno"
          ? "Depois compare com o padrão oficial em <code>../padroes_resposta/ENADE_" + it.ano +
            "_TADS_padrao_resposta.pdf</code> e marque abaixo os quesitos que você cumpriu."
          : "Depois marque abaixo os quesitos que você cumpriu.") +
        ' Para o treino completo, com editor e histórico, use a <a href="discursivas.html">aba de discursivas</a>.'));

      if (!it.rubrica || !it.rubrica.length) {
        box.appendChild(el("p", "fine", "Esta questão não tem rubrica cadastrada."));
        return box;
      }

      var marcados = S.rubrica && S.rubrica[it.rotulo] ? S.rubrica[it.rotulo] : {};
      var lista = el("div", "quesitos");
      it.rubrica.forEach(function (q, k) {
        var lin = el("label", "quesito" + (marcados[k] ? " feito" : ""));
        var cx = el("input"); cx.type = "checkbox"; cx.checked = !!marcados[k];
        cx.onchange = function () {
          if (!S.rubrica) S.rubrica = {};
          if (!S.rubrica[it.rotulo]) S.rubrica[it.rotulo] = {};
          S.rubrica[it.rotulo][k] = cx.checked;
          // a discursiva conta como respondida quando qualquer quesito foi avaliado
          S.resp[it.rotulo] = "avaliada";
          save(); telaQuestao(S.atual);
        };
        lin.appendChild(cx);
        lin.appendChild(el("span", "qtexto", esc(q.item)));
        lin.appendChild(el("span", "qpontos", q.pontos.toFixed(1).replace(".", ",")));
        lista.appendChild(lin);
      });
      box.appendChild(lista);

      var nota = it.rubrica.reduce(function (a, q, k) { return a + (marcados[k] ? q.pontos : 0); }, 0);
      var total = it.valorNum || it.rubrica.reduce(function (a, q) { return a + q.pontos; }, 0);
      box.appendChild(el("div", "notadisc",
        "<b>" + nota.toFixed(1).replace(".", ",") + "</b> de " +
        total.toFixed(1).replace(".", ",") + " pontos"));
      return box;
    }

    /* ---------------- mapa ---------------- */
    function montarMapa() {
      var box = el("div", "mapa");
      box.appendChild(el("div", "rotulo", "Mapa do simulado"));
      var g = el("div", "grade"); g.id = "gradeMapa";
      ITENS.forEach(function (it, k) {
        var c = el("button", "cel", it.rotulo);
        c.type = "button"; c.dataset.k = k;
        c.title = (it.tipo === "disc" ? "Discursiva " : "Questão ") + it.rotulo + " — " +
          (it.tema || it.subtema || AREA[it.area]);
        c.onclick = function () { irPara(k); };
        g.appendChild(c);
      });
      box.appendChild(g);
      box.appendChild(el("div", "legenda",
        '<span><i class="am respondida"></i> respondida</span>' +
        '<span><i class="am"></i> em branco</span>' +
        '<span><i class="am aqui"></i> onde você está</span>'));
      return box;   // pintado por atualizarMapa() ao fim de telaQuestao
    }
    function atualizarMapa() {
      var g = document.getElementById("gradeMapa");
      if (!g) return;
      Array.prototype.forEach.call(g.children, function (c) {
        var it = ITENS[+c.dataset.k];
        c.classList.toggle("respondida", !!S.resp[it.rotulo]);
        c.classList.toggle("aqui", +c.dataset.k === S.atual);
        c.classList.toggle("disc", it.tipo === "disc");
      });
    }

    function irPara(k) { if (k >= 0 && k < N) telaQuestao(k); }

    /* ---------------- correção ---------------- */
    function finalizar() {
      var faltam = N - respondidas();
      if (faltam > 0 && !confirm("Ainda faltam " + faltam + " questões sem resposta. Corrigir mesmo assim?")) return;
      if (S.rodando) pausar();
      var primeiraVez = !S.corrigido;
      S.corrigido = true; save();
      if (primeiraVez) registrarHistorico();
      telaResultado();
    }

    /* Alimenta o histórico entre sessões. Só na primeira correção de cada prova —
       reabrir a tela de resultado não pode inflar a estatística. Questões deixadas em
       branco entram como erro, que é como o ENADE as trata. */
    function registrarHistorico() {
      if (!global.HISTORICO) return;
      var fonte = cfg.fonte || (cfg.numero === "IA" ? "ia" : "s" + pad2(cfg.numero));
      global.HISTORICO.gravarObjetivas(fonte, OBJS.map(function (it) {
        return {
          area: it.area,
          subtema: it.subtema || it.tema || null,
          objeto: it.objeto || null,
          ok: S.resp[it.rotulo] === it.gab,
          id: it.idBanco != null ? it.idBanco : null
        };
      }));
      DISCS.forEach(function (it) {
        var mk = (S.rubrica || {})[it.rotulo] || {};
        if (!Object.keys(mk).length) return;   // não autoavaliada: nada a registrar
        var total = it.valorNum || (it.rubrica || []).reduce(function (a, q) { return a + q.pontos; }, 0);
        var nota = (it.rubrica || []).reduce(function (a, q, k) { return a + (mk[k] ? q.pontos : 0); }, 0);
        global.HISTORICO.gravarDiscursiva(fonte, { id: it.idBanco || it.rotulo, nota: nota, total: total });
      });
    }

    function telaResultado() {
      raiz.innerHTML = "";
      var w = el("div", "tela");

      var aFG = FGO.filter(function (it) { return S.resp[it.rotulo] === it.gab; }).length;
      var aCE = CEO.filter(function (it) { return S.resp[it.rotulo] === it.gab; }).length;
      var acertos = aFG + aCE;
      var temPeso = FGO.length > 0 && CEO.length > 0;
      var pontos = temPeso
        ? (aFG / FGO.length) * PESOS.fgObj + (aCE / CEO.length) * PESOS.ceObj
        : 0;

      w.appendChild(el("div", "", '<span class="eyebrow">Resultado do simulado ' + pad2(cfg.numero) + "</span>" +
        "<h1>Você acertou " + acertos + " de " + OBJS.length + ".</h1>"));

      var placar = el("div", "placar");
      var celulas = [[acertos + " / " + OBJS.length, "acertos nas objetivas"]];
      if (temPeso) {
        celulas.push([aFG + " / " + FGO.length, "formação geral"]);
        celulas.push([aCE + " / " + CEO.length, "componente específico"]);
        celulas.push([num(pontos) + " / " + num(TOTAL_OBJ), "pontos ponderados"]);
      } else {
        celulas.push([Math.round(acertos / OBJS.length * 100) + "%", "de aproveitamento"]);
      }
      celulas.forEach(function (p, k) {
        placar.appendChild(el("div", "pcell" + (k === 0 ? " destaque" : ""),
          "<b>" + p[0] + "</b><span>" + p[1] + "</span>"));
      });
      w.appendChild(placar);

      if (temPeso) {
        w.appendChild(el("p", "fine", "As 15 objetivas de formação geral valem " + num(PESOS.fgObj) +
          "% da nota e as 30 do componente específico, " + num(PESOS.ceObj) + "%. Os " +
          num(PESOS.ceDisc) + "% restantes vêm da discursiva, que você mesmo avalia. " +
          "Esta ponderação é provisória: o Edital 61/2026 remete o cálculo da nota a uma nota " +
          "técnica do Inep ainda não publicada, então usa-se aqui a proporção das edições anteriores."));
      }

      /* por área */
      var porArea = {};
      OBJS.forEach(function (it) {
        var a = porArea[it.area] || (porArea[it.area] = { ok: 0, n: 0 });
        a.n++; if (S.resp[it.rotulo] === it.gab) a.ok++;
      });
      if (Object.keys(porArea).length > 1) {
        w.appendChild(el("h2", "secao", "Desempenho por área"));
        var areas = el("div", "areas");
        Object.keys(porArea).sort(function (a, b) {
          return porArea[a].ok / porArea[a].n - porArea[b].ok / porArea[b].n;
        }).forEach(function (k) {
          var a = porArea[k], pct = a.ok / a.n * 100;
          var cor = pct >= 75 ? "var(--good)" : (pct >= 50 ? "var(--warn)" : "var(--flag)");
          areas.appendChild(el("div", "arow",
            '<div class="alabel">' + AREA[k] + "</div>" +
            '<div class="atrack"><div class="afill" style="width:' + pct + "%;background:" + cor + '"></div></div>' +
            '<div class="aval">' + a.ok + "/" + a.n + "</div>"));
        });
        w.appendChild(areas);
      }

      // Só diagnostica área com amostra suficiente: com 1 ou 2 questões, um único
      // erro derruba o percentual e o conselho vira ruído.
      var MIN_AMOSTRA = 3;
      var fracas = Object.keys(porArea).filter(function (k) {
        return porArea[k].n >= MIN_AMOSTRA && porArea[k].ok / porArea[k].n < 0.6;
      });
      var zeradasPequenas = Object.keys(porArea).filter(function (k) {
        return porArea[k].n < MIN_AMOSTRA && porArea[k].ok === 0;
      });

      var corpo;
      if (fracas.length) {
        corpo = "<h3>Comece por aqui</h3><p>Abaixo de 60% em <strong>" +
          fracas.map(function (k) { return AREA[k]; }).join(", ") + "</strong>. " +
          'Reordene as semanas 4 a 14 do <a href="plano.html#plano">plano</a> para atacar essas ' +
          "áreas primeiro.</p>";
      } else {
        corpo = "<h3>Nenhuma área com fraqueza consistente</h3><p>Onde havia questões suficientes " +
          "para medir, você ficou acima de 60%. Concentre as próximas semanas na discursiva do " +
          "componente específico: é uma questão só, mas vale " + num(PESOS.ceDisc) + "% da nota, " +
          "e a correção premia quem conhece o padrão de resposta.</p>";
      }
      if (zeradasPequenas.length) {
        corpo += "<p class='fine'>Você zerou em <strong>" +
          zeradasPequenas.map(function (k) { return AREA[k]; }).join(", ") + "</strong>, mas esta " +
          "prova trouxe menos de " + MIN_AMOSTRA + " questões dessas áreas — pouco para concluir " +
          "alguma coisa. Se quiser medir de verdade, use o " +
          '<a href="simulado-ia.html">treino por área</a>.</p>';
      }
      /* O diagnóstico acima enxerga só esta prova. O painel acumula todas. */
      corpo += "<p class='fine'>Este quadro considera apenas as questões desta prova. O " +
        '<a href="painel.html">painel de desempenho</a> junta todas as suas correções e mostra ' +
        "a evolução por objeto de conhecimento oficial.</p>";
      w.appendChild(el("div", "card " + (fracas.length ? "flag" : "key"), corpo));

      var errou = OBJS.filter(function (it) { return S.resp[it.rotulo] && S.resp[it.rotulo] !== it.gab; });
      var branco = OBJS.filter(function (it) { return !S.resp[it.rotulo]; });
      var acertou = OBJS.filter(function (it) { return S.resp[it.rotulo] === it.gab; });

      if (errou.length) {
        w.appendChild(el("h2", "secao", "O que você errou — " + errou.length +
          (errou.length === 1 ? " questão" : " questões")));
        w.appendChild(el("p", "fine", "Esta é a lista mais importante da página. Clique em qualquer uma para rever a questão."));
        w.appendChild(listaRevisao(errou));
      }
      if (branco.length) {
        w.appendChild(el("h2", "secao", "Deixadas em branco — " + branco.length));
        w.appendChild(listaRevisao(branco));
      }
      if (acertou.length) {
        var det = el("details", "bloco-acertos");
        det.innerHTML = "<summary>Ver as " + acertou.length + " que você acertou</summary>";
        det.appendChild(listaRevisao(acertou));
        w.appendChild(det);
      }

      if (DISCS.length) {
        var somaD = 0, totalD = 0;
        DISCS.forEach(function (it) {
          var mk = (S.rubrica || {})[it.rotulo] || {};
          var tot = it.valorNum || (it.rubrica || []).reduce(function (a, q) { return a + q.pontos; }, 0);
          totalD += tot;
          somaD += (it.rubrica || []).reduce(function (a, q, k) { return a + (mk[k] ? q.pontos : 0); }, 0);
        });
        w.appendChild(el("h2", "secao", "Discursivas — " +
          somaD.toFixed(1).replace(".", ",") + " de " + totalD.toFixed(1).replace(".", ",") + " pontos"));
        w.appendChild(el("p", "fine", (DISCS.length === 1
            ? "Vale " + num(PESOS.ceDisc) + "% da nota e não entra no placar das objetivas. "
            : "Nas provas de 2008 a 2021 as cinco discursivas valiam 21,25% da nota, repartidos " +
              "entre duas de formação geral e três do componente específico. Não entram no placar " +
              "das objetivas. ") +
          "A nota acima vem dos quesitos que você marcou na rubrica de cada questão."));
        var ld = el("div", "revisao");
        DISCS.forEach(function (it) {
          var mk = (S.rubrica || {})[it.rotulo] || {};
          var tot = it.valorNum || (it.rubrica || []).reduce(function (a, q) { return a + q.pontos; }, 0);
          var got = (it.rubrica || []).reduce(function (a, q, k) { return a + (mk[k] ? q.pontos : 0); }, 0);
          var frac = tot ? got / tot : 0;
          var rot = S.resp[it.rotulo]
            ? got.toFixed(1).replace(".", ",") + " / " + tot.toFixed(1).replace(".", ",")
            : "sem registro";
          var cls = !S.resp[it.rotulo] ? "meio" : frac >= 0.6 ? "ok" : "bad";
          var linha = el("button", "ritem " + cls);
          linha.type = "button";
          linha.onclick = function () { irPara(it.i); };
          linha.innerHTML =
            '<span class="rnum">' + it.rotulo + "</span>" +
            '<span class="rtema"><b>' + esc(it.tema || it.subtema) + "</b><em>" +
              (it.fonte === "caderno" ? "Prova " + it.ano + " · discursiva " + it.orig.replace(/^D/, "")
                                      : "questão autoral") +
              " · " + AREA[it.area] + "</em></span>" +
            '<span class="rgab"><i class="verd">' + rot + "</i></span>";
          ld.appendChild(linha);
        });
        w.appendChild(ld);
      }

      var acoes = el("div", "acoes");
      var v = el("button", "btn", "Rever as questões");
      v.type = "button"; v.onclick = function () { irPara(0); };
      acoes.appendChild(v);
      if (cfg.aoTrocarProva) {
        var g = el("button", "btn", cfg.rotuloTrocar || "Gerar outra prova");
        g.type = "button";
        g.onclick = function () {
          if (!confirm(cfg.confirmaTrocar ||
            "Gerar uma prova nova? As respostas atuais serão apagadas.")) return;
          try { localStorage.removeItem(KEY); } catch (e) {}
          cfg.aoTrocarProva();
        };
        acoes.appendChild(g);
      }
      var z = el("button", "btn ghost", "Refazer esta prova");
      z.type = "button"; z.onclick = limpar;
      acoes.appendChild(z);
      var p = el("a", "btn ghost", "Voltar ao plano");
      p.href = "plano.html";
      acoes.appendChild(p);
      w.appendChild(acoes);

      raiz.appendChild(w);
      window.scrollTo(0, 0);
    }

    function listaRevisao(lista) {
      var box = el("div", "revisao");
      lista.forEach(function (it) {
        var dado = S.resp[it.rotulo];
        var certo = dado === it.gab;
        var linha = el("button", "ritem " + (certo ? "ok" : dado ? "bad" : "meio"));
        linha.type = "button";
        linha.onclick = function () { irPara(it.i); };
        linha.innerHTML =
          '<span class="rnum">' + it.rotulo + "</span>" +
          '<span class="rtema"><b>' + esc(it.tema || it.subtema) + "</b><em>" +
            (it.fonte === "caderno" ? "Prova " + it.ano + " · questão " + it.orig : "questão autoral") +
            " · " + AREA[it.area] + "</em></span>" +
          '<span class="rgab">' +
            (dado ? '<i class="marcou">você: ' + dado + "</i>" : '<i class="marcou">em branco</i>') +
            '<i class="verd">gabarito: ' + it.gab + "</i></span>";
        box.appendChild(linha);
      });
      return box;
    }

    function limpar() {
      if (!confirm("Apagar todas as respostas e a correção deste simulado?")) return;
      S = { resp: {}, atual: 0, revelado: {} };
      try { localStorage.removeItem(KEY); } catch (e) {}
      if (tick) { clearInterval(tick); tick = null; }
      if (cfg.itens) { irPara(0); } else { telaInicio(); }
    }

    /* ---------------- teclado ---------------- */
    document.addEventListener("keydown", function (e) {
      if (!raiz.querySelector(".qnav")) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      var it = ITENS[S.atual];
      var L = e.key.toUpperCase();
      var travado = S.corrigido || (TREINO && it && S.revelado[it.rotulo]);
      if (LETRAS.indexOf(L) >= 0 && it && it.tipo === "obj" && !travado) {
        marcar(it, L); e.preventDefault();
      } else if (e.key === "ArrowRight" && S.atual < N - 1) { irPara(S.atual + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft" && S.atual > 0) { irPara(S.atual - 1); e.preventDefault(); }
    });

    /* ---------------- entrada ---------------- */
    if (S.corrigido) telaResultado();
    else if (cfg.itens) { if (DURACAO && !S.rodando && S.congelado == null) tocar(); irPara(S.atual || 0); }
    else telaInicio();
  };
})(window);
