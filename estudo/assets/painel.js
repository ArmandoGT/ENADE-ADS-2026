/* Painel de desempenho.

   Lê window.HISTORICO (chave enade26.historico) e responde a pergunta que o material
   não conseguia responder: onde você erra mais.

   Duas leituras, porque as fontes são diferentes:
     • por OBJETO DE CONHECIMENTO — a nomenclatura oficial das portarias 154 e 169.
       Cobre as questões do Simulado IA, que trazem o objeto resolvido no sorteio.
     • por ÁREA — a classificação própria do material, mais grossa, mas que abrange
       também os simulados 1 a 4, cujas questões declaram tema em texto livre.

   Regra de leitura: nada é diagnosticado com menos de MIN_AMOSTRA questões. Com três
   questões respondidas, 33% de acerto não distingue lacuna de azar.

   Depende de: objetos.js (window.OBJETOS), historico.js (window.HISTORICO)
*/
(function (global) {
  "use strict";

  var MIN_AMOSTRA = 5;      // abaixo disso a área/objeto aparece, mas sem veredito
  var BOM = 75, MEDIO = 50; // faixas, iguais às da tela de resultado dos simulados

  var AREA = {
    ES: "Engenharia de software", OO: "UML e projeto OO", AL: "Algoritmos e estruturas de dados",
    BD: "Banco de dados", GP: "Gestão de projetos", IN: "SO, redes e distribuídos",
    ML: "Lógica e matemática", IH: "IHC e acessibilidade", SG: "Segurança e legislação",
    OT: "Arquitetura de computadores", FG: "Formação geral"
  };

  var FONTES = {
    ia: "Simulado IA", s01: "Simulado 1", s02: "Simulado 2", s03: "Simulado 3", s04: "Simulado 4",
    revisao: "Revisão espaçada",
    disc: "Ensaio discursivo", "disc-maratona": "Maratona", "disc-avulsa": "Discursiva avulsa"
  };

  var app;

  /* ---------------- utilidades ---------------- */
  function el(t, c, h) {
    var n = document.createElement(t);
    if (c) n.className = c;
    if (h != null) n.innerHTML = h;
    return n;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function pct(ok, n) { return n ? ok / n * 100 : 0; }

  /* Ordena do pior para o melhor, mas joga para o fim quem não tem amostra suficiente.
     Sem isso, um objeto com três questões e nenhum acerto encabeçaria a lista — e o topo
     da lista é justamente o que o painel apresenta como prioridade de estudo. Zero em
     três questões não é diagnóstico; é ruído com aparência de diagnóstico. */
  function doPiorAoMelhor(a, b) {
    var sa = a.n >= MIN_AMOSTRA, sb = b.n >= MIN_AMOSTRA;
    if (sa !== sb) return sa ? -1 : 1;
    return pct(a.ok, a.n) - pct(b.ok, b.n);
  }
  function cor(p) { return p >= BOM ? "var(--good)" : p >= MEDIO ? "var(--warn)" : "var(--flag)"; }
  function data(ts) {
    var d = new Date(ts);
    return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
  }

  /* Uma correção grava todas as suas linhas com o mesmo instante, então (fonte + t) é
     o identificador natural de uma sessão. */
  function sessoes(itens) {
    var mapa = {};
    itens.forEach(function (r) {
      var k = r.f + "|" + r.t;
      var s = mapa[k] || (mapa[k] = { f: r.f, t: r.t, n: 0, ok: 0 });
      s.n++; if (r.ok) s.ok++;
    });
    return Object.keys(mapa).map(function (k) { return mapa[k]; })
      .sort(function (a, b) { return a.t - b.t; });
  }

  /* ---------------- blocos de tela ---------------- */

  /* Barra horizontal com rótulo à esquerda e número à direita. O número fica sempre
     visível: a cor é reforço, nunca o único portador da informação. */
  function linhaBarra(rotulo, prefixo, ok, n, classe) {
    var p = pct(ok, n);
    var suficiente = n >= MIN_AMOSTRA;
    var linha = el("div", "arow " + (classe || ""));
    linha.appendChild(el("div", "alabel",
      (prefixo ? '<span class="num">' + esc(prefixo) + "</span>" : "") + esc(rotulo)));

    var trilho = el("div", "atrack");
    var fill = el("div", "afill");
    fill.style.width = (n ? p : 0) + "%";
    fill.style.background = suficiente ? cor(p) : "var(--rule-2)";
    trilho.appendChild(fill);
    linha.appendChild(trilho);

    linha.appendChild(el("div", "aval", n
      ? '<span class="pct">' + Math.round(p) + "%</span> " +
        '<span class="de">' + ok + "/" + n + "</span>"
      : '<span class="de">—</span>'));

    linha.title = n
      ? ok + " acertos em " + n + " questões" + (suficiente ? "" : " — amostra pequena demais para concluir")
      : "nenhuma questão respondida ainda";
    return linha;
  }

  function secao(titulo, sub) {
    var f = document.createDocumentFragment();
    f.appendChild(el("h2", "secao", titulo));
    if (sub) f.appendChild(el("p", "fine", sub));
    return f;
  }

  function legenda() {
    return el("div", "legenda",
      '<span><i style="background:var(--good)"></i>75% ou mais</span>' +
      '<span><i style="background:var(--warn)"></i>entre 50% e 74%</span>' +
      '<span><i style="background:var(--flag)"></i>abaixo de 50%</span>' +
      '<span><i style="background:var(--rule-2)"></i>menos de ' + MIN_AMOSTRA + " questões: sem veredito</span>");
  }

  /* ---------------- gráficos ----------------

     Quem desenha é o ARTEFATO, o mesmo renderizador dos gráficos que aparecem
     dentro das questões: uma linguagem visual só no material inteiro, e de
     brinde a descrição textual que ele já gera para leitor de tela.

     Uma diferença de propósito: dentro de uma questão o gráfico é o enunciado,
     e revelar o valor exato ao passar o mouse estragaria a questão de
     interpretação. Aqui é o contrário — o número é o que se quer. Por isso a
     dica de valor é acrescentada aqui, sobre as marcas, e não no ARTEFATO. */

  function comDicas(fig, textos) {
    if (!fig) return null;
    var marcas = fig.querySelectorAll(".a-barra, .a-ponto");
    for (var i = 0; i < marcas.length && i < textos.length; i++) {
      var t = document.createElementNS("http://www.w3.org/2000/svg", "title");
      t.textContent = textos[i];
      marcas[i].appendChild(t);
    }
    return fig;
  }

  /* Segunda-feira da semana de um instante. As semanas são a unidade do
     cronograma do plano, então o ritmo é lido na mesma régua. */
  function semanaDe(ts) {
    var d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return d.getTime();
  }

  var HAB_CURTA = {
    J: "Julgamento", I: "Interpretação", C: "Conceito",
    A: "Asserção-razão", X: "Cálculo", E: "Estudo de caso"
  };

  /* 1. Acerto por habilidade cobrada.
     É o corte que nenhuma lista por área dá: separa saber a definição de saber
     aplicá-la. O histórico já consolidava isso e nada na tela mostrava. */
  function graficoHabilidade(r) {
    if (!global.ARTEFATO) return null;
    var chaves = Object.keys(r.porHabilidade).filter(function (k) {
      return r.porHabilidade[k].n >= MIN_AMOSTRA;
    });
    if (chaves.length < 2) return null;

    chaves.sort(function (a, b) {
      return pct(r.porHabilidade[a].ok, r.porHabilidade[a].n) -
             pct(r.porHabilidade[b].ok, r.porHabilidade[b].n);
    });

    var dicas = chaves.map(function (k) {
      var d = r.porHabilidade[k];
      return (global.ACERVO && global.ACERVO.HAB[k] ? global.ACERVO.HAB[k] : k) + ": " +
        Math.round(pct(d.ok, d.n)) + "% — " + d.ok + " de " + d.n;
    });

    return comDicas(global.ARTEFATO.montar({
      t: "grafico", sub: "barra", eixoY: "% de acerto",
      cap: "Acerto por habilidade cobrada, da mais fraca para a mais forte. " +
        "Só entram as habilidades com " + MIN_AMOSTRA + " questões ou mais.",
      cat: chaves.map(function (k) { return HAB_CURTA[k] || k; }),
      ser: [{ nome: "% de acerto", val: chaves.map(function (k) {
        return Math.round(pct(r.porHabilidade[k].ok, r.porHabilidade[k].n));
      }) }]
    }), dicas);
  }

  /* 2. Ritmo: quantas questões você corrigiu em cada semana.
     A evolução ao lado mede acerto; esta mede volume. São perguntas diferentes,
     e semana de muito acerto com três questões não é semana de estudo. */
  function graficoRitmo(itens) {
    if (!global.ARTEFATO || !itens.length) return null;
    var mapa = {};
    itens.forEach(function (r) {
      var s = semanaDe(r.t);
      mapa[s] = (mapa[s] || 0) + 1;
    });
    var semanas = Object.keys(mapa).map(Number).sort(function (a, b) { return a - b; });
    if (semanas.length < 2) return null;
    if (semanas.length > 12) semanas = semanas.slice(semanas.length - 12);

    var dicas = semanas.map(function (s) {
      return "semana de " + data(s) + ": " + mapa[s] +
        (mapa[s] === 1 ? " questão corrigida" : " questões corrigidas");
    });

    return comDicas(global.ARTEFATO.montar({
      t: "grafico", sub: "barra", eixoY: "questões",
      cap: "Questões corrigidas por semana" +
        (semanas.length === 12 ? ", nas últimas doze" : "") + ".",
      cat: semanas.map(data),
      ser: [{ nome: "questões", val: semanas.map(function (s) { return mapa[s]; }) }]
    }), dicas);
  }

  /* 3. Acerto por origem da questão.
     Serve para calibrar o próprio material: se o seu acerto no banco autoral é
     muito maior que nas provas reais do Inep, as questões que eu escrevi estão
     fáceis demais, e o número do simulado IA está mentindo para você. */
  function graficoFonte(itens) {
    if (!global.ARTEFATO || !itens.length) return null;
    var mapa = {};
    itens.forEach(function (r) {
      var f = mapa[r.f] || (mapa[r.f] = { n: 0, ok: 0 });
      f.n++; if (r.ok) f.ok++;
    });
    var chaves = Object.keys(mapa).filter(function (k) { return mapa[k].n >= MIN_AMOSTRA; });
    if (chaves.length < 2) return null;
    chaves.sort(function (a, b) { return pct(mapa[a].ok, mapa[a].n) - pct(mapa[b].ok, mapa[b].n); });

    var dicas = chaves.map(function (k) {
      return (FONTES[k] || k) + ": " + Math.round(pct(mapa[k].ok, mapa[k].n)) +
        "% — " + mapa[k].ok + " de " + mapa[k].n;
    });

    return comDicas(global.ARTEFATO.montar({
      t: "grafico", sub: "barra", eixoY: "% de acerto",
      cap: "Acerto por origem da questão.",
      cat: chaves.map(function (k) { return FONTES[k] || k; }),
      ser: [{ nome: "% de acerto", val: chaves.map(function (k) {
        return Math.round(pct(mapa[k].ok, mapa[k].n));
      }) }]
    }), dicas);
  }

  /* ---------------- tela ---------------- */
  function montar() {
    app.innerHTML = "";
    var w = el("div", "tela");

    var h = global.HISTORICO ? global.HISTORICO.ler() : { itens: [], disc: [] };
    var r = global.HISTORICO ? global.HISTORICO.resumo() : { porArea: {}, porObjeto: {}, total: 0, acertos: 0 };

    /* --- cabeçalho --- */
    w.appendChild(el("div", "",
      '<span class="eyebrow">Painel de desempenho</span>' +
      "<h1>Onde você erra mais.</h1>"));

    if (!h.itens.length && !h.disc.length) {
      w.appendChild(el("p", "lede",
        "Este painel se preenche sozinho conforme você corrige simulados. Ainda não há nada " +
        "registrado neste navegador."));
      var vazio = el("div", "card key");
      vazio.innerHTML =
        "<h3>Como começar</h3>" +
        "<p>Faça um simulado e clique em corrigir. A partir daí, cada correção grava uma linha por " +
        "questão — com área, objeto de conhecimento oficial e acerto — e este painel passa a mostrar " +
        "a sua evolução e os pontos fracos.</p>";
      w.appendChild(vazio);
      var acao = el("div", "acoes");
      acao.innerHTML =
        '<a class="btn" href="simulado-ia.html">Gerar uma prova</a>' +
        '<a class="btn ghost" href="simulado-01.html">Fazer o simulado 1</a>';
      w.appendChild(acao);
      app.appendChild(w);
      window.scrollTo(0, 0);
      return;
    }

    w.appendChild(el("p", "lede",
      "Tudo abaixo vem das suas correções neste navegador. As barras vão da mais fraca para a " +
      "mais forte, então o topo de cada lista é sempre o que merece a próxima semana de estudo."));

    /* --- panorama --- */
    var ses = sessoes(h.itens);
    var geral = pct(r.acertos, r.total);
    var objetosMedidos = OBJETOS.todos().filter(function (o) {
      var d = r.porObjeto[o.id];
      return d && d.n >= MIN_AMOSTRA;
    }).sort(function (a, b) {
      return pct(r.porObjeto[a.id].ok, r.porObjeto[a.id].n) - pct(r.porObjeto[b.id].ok, r.porObjeto[b.id].n);
    });
    var pior = objetosMedidos[0];

    var fichas = el("div", "placar");
    [[r.total, "questões corrigidas"],
     [r.total ? Math.round(geral) + "%" : "—", "de acerto no total"],
     [ses.length, ses.length === 1 ? "correção registrada" : "correções registradas"],
     [pior ? Math.round(pct(r.porObjeto[pior.id].ok, r.porObjeto[pior.id].n)) + "%" : "—",
      pior ? "no seu ponto mais fraco: " + pior.curto.toLowerCase()
           : "faça mais questões para medir"]]
      .forEach(function (p, k) {
        fichas.appendChild(el("div", "pcell" + (k === 0 ? " destaque" : ""),
          "<b>" + p[0] + "</b><span>" + p[1] + "</span>"));
      });
    w.appendChild(fichas);

    /* --- recomendação --- */
    if (objetosMedidos.length) {
      var fracos = objetosMedidos.filter(function (o) {
        return pct(r.porObjeto[o.id].ok, r.porObjeto[o.id].n) < BOM;
      }).slice(0, 3);

      var card = el("div", "card " + (fracos.length ? "flag" : "key"));
      if (fracos.length) {
        card.innerHTML = "<h3>Comece por aqui</h3><p>Com amostra suficiente para concluir, os " +
          "objetos em que você vai pior são <strong>" +
          fracos.map(function (o) {
            return esc(o.curto.toLowerCase()) + " (" +
              Math.round(pct(r.porObjeto[o.id].ok, r.porObjeto[o.id].n)) + "%)";
          }).join(", ") + "</strong>. " +
          "No Simulado IA, o treino por área devolve questões só desses assuntos, com a explicação " +
          "na hora — é o modo mais rápido de fechar uma lacuna identificada.</p>";
      } else {
        card.innerHTML = "<h3>Nenhuma lacuna consistente</h3><p>Em todos os objetos com amostra " +
          "suficiente você está em 75% ou mais. A partir daqui o ganho vem de ampliar a cobertura: " +
          "os objetos ainda sem medida, mais abaixo, são os que o exame pode cobrar e você ainda " +
          "não testou.</p>";
      }
      w.appendChild(card);
      var ac = el("div", "acoes");
      ac.innerHTML = '<a class="btn" href="simulado-ia.html">Treinar por área</a>' +
        '<a class="btn ghost" href="revisao.html">Revisar o que errei</a>' +
        '<a class="btn ghost" href="plano.html#plano">Rever o cronograma</a>';
      w.appendChild(ac);
    }

    /* --- por objeto oficial --- */
    var temObjeto = Object.keys(r.porObjeto).length > 0;
    if (temObjeto) {
      w.appendChild(secao("Por objeto de conhecimento",
        "A lista oficial das portarias: 12 objetos de formação geral e 20 do componente " +
        "específico. Só as questões do Simulado IA trazem essa classificação."));
      w.appendChild(legenda());

      [["Formação geral", OBJETOS.FG], ["Componente específico", OBJETOS.CE]].forEach(function (par) {
        var medidos = par[1].filter(function (o) { return r.porObjeto[o.id]; });
        if (!medidos.length) return;
        w.appendChild(el("h3", "", par[0]));
        var caixa = el("div", "areas");
        medidos.sort(function (a, b) {
          return doPiorAoMelhor(r.porObjeto[a.id], r.porObjeto[b.id]);
        }).forEach(function (o) {
          var d = r.porObjeto[o.id];
          caixa.appendChild(linhaBarra(o.nome, o.num, d.ok, d.n, "orow"));
        });
        w.appendChild(caixa);
      });

      var semMedida = OBJETOS.todos().filter(function (o) { return !r.porObjeto[o.id]; });
      if (semMedida.length) {
        w.appendChild(el("p", "fine",
          "<strong>Ainda sem nenhuma questão respondida:</strong> " +
          semMedida.map(function (o) { return esc(o.curto.toLowerCase()); }).join(", ") +
          ". O exame pode cobrar qualquer um deles."));
      }
    }

    /* --- por área --- */
    var areas = Object.keys(r.porArea);
    if (areas.length) {
      w.appendChild(secao("Por área",
        "Classificação própria do material, mais grossa que a oficial — mas é a única que " +
        "alcança também os simulados 1 a 4, com as questões reais do Inep."));
      var cx = el("div", "areas");
      areas.sort(function (a, b) {
        return doPiorAoMelhor(r.porArea[a], r.porArea[b]);
      }).forEach(function (k) {
        var d = r.porArea[k];
        cx.appendChild(linhaBarra(AREA[k] || k, null, d.ok, d.n));
      });
      w.appendChild(cx);
    }

    /* --- por habilidade --- */
    var gHab = graficoHabilidade(r);
    if (gHab) {
      w.appendChild(secao("Por habilidade cobrada",
        "O que a questão pediu que você fizesse, não sobre o que ela era. Conceito puro " +
        "cobra definição; interpretação de artefato cobra ler um diagrama, uma tabela ou um " +
        "trecho de código; asserção-razão cobra julgar duas proposições e o nexo entre elas. " +
        "É o corte que separa saber a matéria de saber responder à banca — e só existe para " +
        "as questões do Simulado IA, que declaram a habilidade."));
      var cxHab = el("div", "graficos");
      cxHab.appendChild(gHab);
      w.appendChild(cxHab);
    }

    /* --- evolução --- */
    if (ses.length > 1) {
      w.appendChild(secao("Evolução",
        "Uma coluna por correção, na ordem em que aconteceram. O que interessa é a inclinação, " +
        "não o valor de um dia isolado."));
      var ev = el("div", "evolucao");
      ses.forEach(function (s) {
        var p = pct(s.ok, s.n);
        var col = el("div", "ecol");
        col.title = (FONTES[s.f] || s.f) + " · " + data(s.t) + " · " +
          s.ok + " de " + s.n + " (" + Math.round(p) + "%)";
        var barra = el("div", "ebar");
        barra.style.height = Math.max(2, p) + "%";
        barra.style.background = cor(p);
        col.appendChild(barra);
        col.appendChild(el("div", "ecap", Math.round(p) + "%"));
        col.appendChild(el("div", "ecap", data(s.t)));
        ev.appendChild(col);
      });
      w.appendChild(ev);
    } else if (ses.length === 1) {
      w.appendChild(el("p", "sembase",
        "A evolução aparece a partir da segunda correção — com uma só, não há o que comparar."));
    }

    /* --- ritmo e origem --- */
    var gRitmo = graficoRitmo(h.itens);
    var gFonte = graficoFonte(h.itens);
    if (gRitmo || gFonte) {
      w.appendChild(secao("Ritmo e origem",
        "A evolução acima mede acerto; estes dois medem outra coisa. À esquerda, quanto você " +
        "estudou por semana — semana de acerto alto com três questões não é semana de estudo. " +
        "À direita, o acerto por origem: se o banco autoral está muito acima das provas reais " +
        "do Inep, as questões que escrevi estão fáceis demais e o número do Simulado IA está " +
        "otimista."));
      var cxG = el("div", "graficos");
      if (gRitmo) cxG.appendChild(gRitmo);
      if (gFonte) cxG.appendChild(gFonte);
      w.appendChild(cxG);
    }

    /* --- discursivas --- */
    if (h.disc.length) {
      /* Leituras — padrão aberto antes de haver resposta — ficam fora da média. */
      var valem = h.disc.filter(function (d) { return !d.c; });
      var leituras = h.disc.length - valem.length;
      var somaD = 0, totalD = 0;
      valem.forEach(function (d) { somaD += d.nota; totalD += d.total; });

      w.appendChild(secao("Discursivas",
        "Notas que você mesmo atribuiu pela rubrica. Na prova de 2026 é uma questão só, mas " +
        "vale 11,25% — mais que qualquer objetiva isolada."));
      var fd = el("div", "placar");
      var celulas = [
        [valem.length, valem.length === 1 ? "tentativa registrada" : "tentativas registradas"],
        [totalD ? Math.round(somaD / totalD * 100) + "%" : "—", "de aproveitamento na rubrica"]
      ];
      if (leituras) {
        celulas.push([leituras, leituras === 1
          ? "leitura do padrão, fora da média" : "leituras do padrão, fora da média"]);
      }
      celulas.forEach(function (p) {
        fd.appendChild(el("div", "pcell", "<b>" + p[0] + "</b><span>" + p[1] + "</span>"));
      });
      w.appendChild(fd);
    }

    /* --- manutenção --- */
    var rodape = el("div", "acoes");
    var bz = el("button", "btn ghost mini", "Apagar o histórico do painel");
    bz.type = "button";
    bz.onclick = function () {
      if (!confirm("Apagar o histórico de desempenho?\n\n" +
        "Isso remove as " + r.total + " questões e as " + h.disc.length + " discursivas " +
        "registradas. Os simulados em andamento e as suas notas nas discursivas continuam " +
        "intactos — o que se perde é a série histórica do painel. Não dá para desfazer.")) return;
      global.HISTORICO.limpar();
      montar();
    };
    rodape.appendChild(bz);
    rodape.appendChild(el("span", "fine",
      "não apaga simulados nem notas das discursivas — só a série que alimenta este painel"));
    w.appendChild(rodape);

    app.appendChild(w);
    window.scrollTo(0, 0);
  }

  global.abrirPainel = function () {
    app = document.getElementById("app");
    try { localStorage.setItem("enade26.t", "1"); localStorage.removeItem("enade26.t"); }
    catch (e) {
      var a = document.getElementById("avisoArmazenamento");
      if (a) a.style.display = "block";
    }
    montar();
  };
})(window);
