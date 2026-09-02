/* Artefatos de questão: tabela, gráfico, código e diagrama.

   Por que isto existe. No acervo oficial do Inep, 42,5% das questões de Formação Geral
   trazem gráfico ou figura, e no componente específico o enunciado puramente textual é
   minoria — há cenário, tabela, código, pseudocódigo, diagrama UML e modelo ER. O banco
   autoral tinha, para 468 questões, sessenta blocos de código e mais nada. A questão que
   se resolve lendo uma definição mede outra coisa que a prova mede.

   Como, sem imagem e sem dependência. Tudo é marcação gerada aqui: <table> de verdade
   para tabela, SVG embutido para gráfico e diagrama. Nada de arquivo binário para
   versionar, nada de biblioteca para carregar, e o texto continua selecionável,
   pesquisável e legível por leitor de tela.

   Cor. Nenhum artefato declara cor própria: tudo sai de currentColor e das variáveis de
   base.css, e portanto acompanha o tema claro e o escuro sem nada a mais. O auditor
   reprova artefato com cor fixa — no tema escuro ela vira texto preto sobre fundo preto,
   e o defeito não aparece para quem escreveu a questão de dia.

   Tipos de bloco:

     { t:"tabela", cap, cab:[...], linhas:[[...]], al:[...] }
        `al` opcional, um por coluna: "num" alinha à direita, o resto à esquerda.

     { t:"codigo", ling, txt }
        Mesma aparência do campo `codigo` do registro, que continua valendo.

     { t:"grafico", sub:"barras"|"linha", cap, cat:[...], ser:[{nome,val:[...]}], eixoY }
        Declarativo: os números ficam no registro, auditáveis. Quem escreve a questão
        não desenha eixo nem calcula escala, e dez gráficos saem parecidos entre si.

     { t:"svg", cap, desc, vb:"0 0 L A", d:"<rect .../>..." }
        Livre, para UML e modelo ER, onde nada declarativo ajudaria. Quem escreve dá só
        os filhos; o invólucro <svg>, o título e a descrição são montados aqui, para que
        não se possa errá-los. Classes disponíveis: a-caixa, a-linha, a-rot, a-fraco.

   API:
     ARTEFATO.montar(bloco)   -> Node, ou null se o bloco não for reconhecido
     ARTEFATO.limpar(d)       -> os filhos de SVG, sem elemento ou atributo fora da lista
*/
(function (global) {
  "use strict";

  var doc = global.document;

  /* Elementos e atributos aceitos dentro de um bloco `svg`. Não é barreira de
     segurança — o conteúdo é escrito por quem edita o repositório, não por usuário.
     É verificação de consistência: diagrama malformado falha na auditoria em vez de
     aparecer como retângulo vazio no navegador de quem está estudando. */
  var TAGS = ["g", "rect", "circle", "ellipse", "line", "polyline", "polygon", "path",
              "text", "tspan", "marker", "defs", "use", "title", "desc"];
  var ATRIB = /^(x|y|x1|y1|x2|y2|cx|cy|r|rx|ry|d|points|width|height|class|transform|fill|stroke|stroke-width|stroke-dasharray|stroke-linecap|text-anchor|dominant-baseline|font-size|font-weight|font-family|marker-end|marker-start|id|viewBox|refX|refY|markerWidth|markerHeight|orient|opacity|dy|dx)$/;

  function el(tag, cls, texto) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (texto != null) n.textContent = texto;
    return n;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function figura(cls, cap) {
    var f = doc.createElement("figure");
    f.className = "artefato " + cls;
    return f;
  }

  function legenda(f, cap) {
    if (cap) f.appendChild(el("figcaption", null, cap));
    return f;
  }

  /* ------------------------------------------------------------------- tabela */

  function tabela(b) {
    var f = figura("art-tabela");
    var rolagem = el("div", "art-rolagem");
    var t = doc.createElement("table");

    if (b.cap) {
      var c = doc.createElement("caption");
      c.textContent = b.cap;
      t.appendChild(c);
    }
    if (b.cab && b.cab.length) {
      var thead = doc.createElement("thead");
      var tr = doc.createElement("tr");
      b.cab.forEach(function (h, i) {
        var th = doc.createElement("th");
        th.textContent = h;
        th.scope = "col";
        if (b.al && b.al[i] === "num") th.className = "num";
        tr.appendChild(th);
      });
      thead.appendChild(tr);
      t.appendChild(thead);
    }
    var tbody = doc.createElement("tbody");
    (b.linhas || []).forEach(function (linha) {
      var tr = doc.createElement("tr");
      linha.forEach(function (v, i) {
        var td = doc.createElement("td");
        td.textContent = v;
        if (b.al && b.al[i] === "num") td.className = "num";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    t.appendChild(tbody);
    rolagem.appendChild(t);
    f.appendChild(rolagem);
    return f;
  }

  /* ------------------------------------------------------------------- código */

  function codigo(b) {
    var f = figura("art-codigo");
    var pre = el("pre", "codigo");
    var cod = doc.createElement("code");
    cod.textContent = b.txt || "";
    pre.appendChild(cod);
    f.appendChild(pre);
    return legenda(f, b.cap);
  }

  /* ------------------------------------------------------------------ gráfico */

  /* Escala "bonita": passo 1, 2 ou 5 vezes potência de dez. É o que faz o eixo cair em
     20, 40, 60 em vez de 17,3 — e o que permite ler valor do gráfico, que é justamente
     o que a questão de interpretação vai cobrar. */
  function escala(max, alvoDivisoes) {
    if (!(max > 0)) return { topo: 1, passo: 1 };
    var bruto = max / (alvoDivisoes || 5);
    var mag = Math.pow(10, Math.floor(Math.log(bruto) / Math.LN10));
    var norm = bruto / mag;
    var passo = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10) * mag;
    return { topo: Math.ceil(max / passo) * passo, passo: passo };
  }

  function num(v) {
    var s = Math.abs(v) >= 1000 ? v.toLocaleString("pt-BR") : String(v).replace(".", ",");
    return s;
  }

  function grafico(b) {
    var cat = b.cat || [];
    var ser = b.ser || [];
    if (!cat.length || !ser.length) return null;

    var L = 620, A = 300;
    var mE = 62, mD = 16, mT = 22, mB = 58;
    var larg = L - mE - mD, alt = A - mT - mB;

    var max = 0;
    ser.forEach(function (s) { (s.val || []).forEach(function (v) { if (v > max) max = v; }); });
    var e = escala(max, 5);
    var y = function (v) { return mT + alt - (v / e.topo) * alt; };

    var p = [];

    /* Grade e eixo Y. */
    for (var v = 0; v <= e.topo + 1e-9; v += e.passo) {
      var yy = y(v);
      p.push('<line class="a-grade" x1="' + mE + '" y1="' + yy.toFixed(1) +
             '" x2="' + (mE + larg) + '" y2="' + yy.toFixed(1) + '"/>');
      p.push('<text class="a-eixo" x="' + (mE - 8) + '" y="' + (yy + 4).toFixed(1) +
             '" text-anchor="end">' + esc(num(v)) + "</text>");
    }
    p.push('<line class="a-eixo-linha" x1="' + mE + '" y1="' + mT +
           '" x2="' + mE + '" y2="' + (mT + alt) + '"/>');
    p.push('<line class="a-eixo-linha" x1="' + mE + '" y1="' + (mT + alt) +
           '" x2="' + (mE + larg) + '" y2="' + (mT + alt) + '"/>');

    if (b.eixoY) {
      p.push('<text class="a-eixo a-titulo-eixo" transform="translate(13,' +
             (mT + alt / 2) + ') rotate(-90)" text-anchor="middle">' + esc(b.eixoY) + "</text>");
    }

    var passoCat = larg / cat.length;

    if (b.sub === "linha") {
      ser.forEach(function (s, si) {
        var pts = (s.val || []).map(function (val, i) {
          return (mE + passoCat * (i + 0.5)).toFixed(1) + "," + y(val).toFixed(1);
        }).join(" ");
        p.push('<polyline class="a-linha-serie s' + (si + 1) + '" points="' + pts + '"/>');
        (s.val || []).forEach(function (val, i) {
          p.push('<circle class="a-ponto s' + (si + 1) + '" cx="' +
                 (mE + passoCat * (i + 0.5)).toFixed(1) + '" cy="' + y(val).toFixed(1) + '" r="3.5"/>');
        });
      });
    } else {
      var gLarg = passoCat * 0.72;
      var bLarg = gLarg / ser.length;
      cat.forEach(function (_, i) {
        ser.forEach(function (s, si) {
          var val = (s.val || [])[i] || 0;
          var x = mE + passoCat * i + (passoCat - gLarg) / 2 + bLarg * si;
          var h = Math.max(0, mT + alt - y(val));
          p.push('<rect class="a-barra s' + (si + 1) + '" x="' + x.toFixed(1) +
                 '" y="' + y(val).toFixed(1) + '" width="' + bLarg.toFixed(1) +
                 '" height="' + h.toFixed(1) + '"/>');
        });
      });
    }

    /* Rótulos de categoria. Duas linhas quando o texto não cabe — cortar rótulo de
       gráfico é destruir justamente o dado que a questão vai pedir para ler. */
    cat.forEach(function (nome, i) {
      var x = mE + passoCat * (i + 0.5);
      var partes = quebrarRotulo(String(nome), Math.max(8, Math.floor(passoCat / 6.2)));
      partes.forEach(function (linha, k) {
        p.push('<text class="a-eixo" x="' + x.toFixed(1) + '" y="' +
               (mT + alt + 18 + k * 13) + '" text-anchor="middle">' + esc(linha) + "</text>");
      });
    });

    /* Legenda, só quando há mais de uma série. */
    if (ser.length > 1) {
      var lx = mE;
      ser.forEach(function (s, si) {
        p.push('<rect class="a-chave s' + (si + 1) + '" x="' + lx + '" y="' + (A - 16) +
               '" width="10" height="10"/>');
        p.push('<text class="a-eixo" x="' + (lx + 15) + '" y="' + (A - 7) + '">' +
               esc(s.nome || "") + "</text>");
        lx += 15 + 8 + String(s.nome || "").length * 6.4;
      });
    }

    var f = figura("art-grafico");
    var cx = el("div", "art-svg-caixa");
    cx.innerHTML =
      '<svg viewBox="0 0 ' + L + " " + A + '" role="img" preserveAspectRatio="xMidYMid meet">' +
        "<title>" + esc(b.cap || "Gráfico") + "</title>" +
        "<desc>" + esc(descreverGrafico(b)) + "</desc>" +
        p.join("") +
      "</svg>";
    f.appendChild(cx);
    return legenda(f, b.cap);
  }

  function quebrarRotulo(s, max) {
    if (s.length <= max) return [s];
    var palavras = s.split(" "), linhas = [], atual = "";
    palavras.forEach(function (p) {
      if (!atual) atual = p;
      else if ((atual + " " + p).length <= max) atual += " " + p;
      else { linhas.push(atual); atual = p; }
    });
    if (atual) linhas.push(atual);
    return linhas.slice(0, 2);
  }

  /* Descrição textual do gráfico, para quem usa leitor de tela. Um gráfico sem isto é
     uma questão que a pessoa cega não tem como responder — e o material tem uma área
     inteira sobre acessibilidade. */
  function descreverGrafico(b) {
    var partes = [(b.sub === "linha" ? "Gráfico de linhas" : "Gráfico de barras")];
    if (b.eixoY) partes.push("em " + b.eixoY);
    (b.ser || []).forEach(function (s) {
      partes.push((s.nome ? s.nome + ": " : "") + (b.cat || []).map(function (c, i) {
        return c + " " + num((s.val || [])[i]);
      }).join("; "));
    });
    return partes.join(". ") + ".";
  }

  /* -------------------------------------------------------------------- svg livre */

  /* Remove elemento e atributo fora da lista. Feito com DOMParser em vez de regex
     porque marcação se analisa com analisador. */
  function limpar(d) {
    if (!global.DOMParser) return d;
    var doc2 = new global.DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg">' + d + "</svg>", "image/svg+xml");
    var raiz = doc2.documentElement;
    if (raiz.getElementsByTagName("parsererror").length) return "";

    (function podar(no) {
      var filhos = Array.prototype.slice.call(no.childNodes);
      filhos.forEach(function (f) {
        if (f.nodeType !== 1) return;
        if (TAGS.indexOf(f.nodeName.toLowerCase()) < 0) { no.removeChild(f); return; }
        Array.prototype.slice.call(f.attributes).forEach(function (a) {
          if (!ATRIB.test(a.name)) f.removeAttribute(a.name);
        });
        podar(f);
      });
    })(raiz);

    return raiz.innerHTML;
  }

  function svgLivre(b) {
    if (!b.d || !b.vb) return null;
    var f = figura("art-svg");
    var cx = el("div", "art-svg-caixa");
    /* innerHTML, e não createElement: elemento criado por createElement nasce no
       espaço de nomes do HTML e não desenha nada. É o analisador que precisa ver a
       tag <svg> para entrar no espaço de nomes certo. */
    cx.innerHTML =
      '<svg viewBox="' + esc(b.vb) + '" role="img" preserveAspectRatio="xMidYMid meet">' +
        "<title>" + esc(b.cap || "Diagrama") + "</title>" +
        "<desc>" + esc(b.desc || "") + "</desc>" +
        limpar(b.d) +
      "</svg>";
    f.appendChild(cx);
    return legenda(f, b.cap);
  }

  /* ---------------------------------------------------------------------- porta */

  var MONTADORES = { tabela: tabela, codigo: codigo, grafico: grafico, svg: svgLivre };

  global.ARTEFATO = {
    montar: function (bloco) {
      if (!bloco || !bloco.t || !MONTADORES[bloco.t] || !doc) return null;
      try { return MONTADORES[bloco.t](bloco); }
      catch (e) { return null; }
    },
    limpar: limpar,
    tipos: Object.keys(MONTADORES)
  };
})(window);
