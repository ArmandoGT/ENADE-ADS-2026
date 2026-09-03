#!/usr/bin/env node
/* Teste dos artefatos que estão no banco, e não do renderizador.

   `testar-artefatos.js` prova que artefato.js desenha certo o que recebe. Ninguém
   provava que o banco lhe entrega coisa desenhável. A diferença importa desde que o
   banco passou a trazer SVG escrito à mão: diagrama malformado não dá erro nenhum —
   `limpar()` poda o que não reconhece e a questão chega ao estudante como uma caixa
   vazia, sem que a auditoria acuse. Todas as metas de auditar.js tratam `art` como
   opaco; esta ferramenta abre.

   O que se verifica, artefato por artefato:

     • monta (ARTEFATO.montar não devolve null);
     • não declara cor em número, que no tema escuro some;
     • SVG livre: marcação bem formada, com descrição textual, e sem elemento,
       atributo ou classe que o navegador vá descartar em silêncio;
     • tabela: toda linha com o mesmo número de células do cabeçalho;
     • gráfico: toda série com um valor por categoria, e eixo com marcas suficientes
       para se ler valor da barra.

       node ferramentas/testar-artefatos-do-banco.js

   Sai com código 1 se algo falhar, para servir de porteiro junto com a auditoria.
*/
"use strict";

var fs = require("fs");
var path = require("path");

var RAIZ = path.resolve(__dirname, "..");
var BANCO = path.join(RAIZ, "estudo", "assets", "banco");
var AREAS = ["es", "oo", "al", "bd", "gp", "in", "ml", "ih", "sg", "ot", "fg"];

/* As mesmas listas de artefato.js. Ficam repetidas aqui de propósito: o teste não
   deve perguntar ao módulo testado o que ele aceita. */
var TAGS = ["g", "rect", "circle", "ellipse", "line", "polyline", "polygon", "path",
            "text", "tspan", "marker", "defs", "use", "title", "desc"];
var ATRIB = /^(x|y|x1|y1|x2|y2|cx|cy|r|rx|ry|d|points|width|height|class|transform|fill|stroke|stroke-width|stroke-dasharray|stroke-linecap|text-anchor|dominant-baseline|font-size|font-weight|font-family|marker-end|marker-start|id|viewBox|refX|refY|markerWidth|markerHeight|orient|opacity|dy|dx)$/;
/* Classes que simulado.css define para diagrama livre. Classe fora daqui existe no
   arquivo e não existe na folha de estilo: o elemento sai sem traço nem preenchimento. */
var CLASSES = ["a-caixa", "a-linha", "a-rot", "a-fraco"];

/* -------------------------------------------------------------- DOM de mentira */

function No(tag) {
  this.tag = tag; this.className = ""; this.textContent = "";
  this.innerHTML = ""; this.filhos = []; this.attrs = {};
}
No.prototype.appendChild = function (f) { this.filhos.push(f); return f; };
Object.defineProperty(No.prototype, "scope", {
  set: function (v) { this.attrs.scope = v; }, get: function () { return this.attrs.scope; }
});
function marcacao(no) {
  if (!no) return "";
  return "<" + no.tag + ' class="' + no.className + '">' + no.innerHTML + no.textContent +
         no.filhos.map(marcacao).join("") + "</" + no.tag + ">";
}

function carregar() {
  var janela = { document: { createElement: function (t) { return new No(t); } } };
  new Function("window", fs.readFileSync(path.join(RAIZ, "estudo/assets/artefato.js"), "utf8"))(janela);
  return janela.ARTEFATO;
}

function banco() {
  var w = { BANCO_IA: [] };
  AREAS.forEach(function (a) {
    new Function("window", fs.readFileSync(path.join(BANCO, a + ".js"), "utf8"))(w);
  });
  return w.BANCO_IA;
}

/* ------------------------------------------------------------ marcação do SVG */

/* Analisador mínimo: só procura tag aberta e não fechada, e "<" solto. Entre duas
   tags pode haver texto — é o conteúdo de <text>. */
function malformado(d) {
  var pilha = [], re = /<\/?([a-zA-Z]+)((?:\s+[a-zA-Z0-9-]+="[^"]*")*)\s*(\/?)>/g, m, pos = 0;
  while ((m = re.exec(d))) {
    var entre = d.slice(pos, m.index);
    if (entre.indexOf("<") >= 0) return "marcação solta: " + JSON.stringify(entre.slice(0, 60));
    pos = re.lastIndex;
    if (m[0][1] === "/") { if (pilha.pop() !== m[1]) return "fecha " + m[1] + " sem abrir"; }
    else if (!m[3]) pilha.push(m[1]);
  }
  if (d.slice(pos).indexOf("<") >= 0) return "marcação solta no fim";
  return pilha.length ? "não fechou: " + pilha.join(", ") : null;
}

/* ------------------------------------------------------------------- execução */

var ARTEFATO = carregar();
var B = banco();
var falhas = [], comArt = 0, blocos = 0, porTipo = {};

function erro(id, msg) { falhas.push("  --  " + id + ": " + msg); }

B.forEach(function (q) {
  var m = q[7] || {};
  if (!m.art) return;
  comArt++;

  m.art.forEach(function (b) {
    blocos++;
    porTipo[b.t] = (porTipo[b.t] || 0) + 1;

    var no = ARTEFATO.montar(b);
    if (!no) { erro(m.id, "bloco " + b.t + " não monta"); return; }

    var mk = marcacao(no);
    if (/#[0-9a-fA-F]{3,8}\b/.test(mk) || /\b(rgb|hsl)a?\(/.test(mk)) {
      erro(m.id, "cor declarada em número — some no tema escuro");
    }

    if (b.t === "svg") {
      var ruim = malformado(b.d);
      if (ruim) erro(m.id, "SVG " + ruim);
      if (!b.desc) erro(m.id, "SVG sem descrição para leitor de tela");
      (b.d.match(/<([a-zA-Z]+)/g) || []).forEach(function (t) {
        var nome = t.slice(1);
        if (TAGS.indexOf(nome) < 0) erro(m.id, "elemento que o navegador descarta: " + nome);
      });
      (b.d.match(/\s([a-zA-Z0-9-]+)="/g) || []).forEach(function (a) {
        var nome = a.trim().slice(0, -2);
        if (!ATRIB.test(nome)) erro(m.id, "atributo que o navegador descarta: " + nome);
      });
      (b.d.match(/class="([^"]*)"/g) || []).forEach(function (c) {
        var nome = c.slice(7, -1);
        if (CLASSES.indexOf(nome) < 0) erro(m.id, "classe sem estilo definido: " + nome);
      });
    }

    if (b.t === "tabela" && b.cab) {
      (b.linhas || []).forEach(function (l, i) {
        if (l.length !== b.cab.length) {
          erro(m.id, "linha " + (i + 1) + " tem " + l.length + " células para " +
                     b.cab.length + " colunas");
        }
      });
    }

    if (b.t === "grafico") {
      (b.ser || []).forEach(function (s) {
        if ((s.val || []).length !== (b.cat || []).length) {
          erro(m.id, "série \"" + s.nome + "\" tem " + (s.val || []).length +
                     " valores para " + (b.cat || []).length + " categorias");
        }
      });
      var marcas = (mk.match(/text-anchor="end">/g) || []).length;
      if (marcas < 4) erro(m.id, "eixo com " + marcas + " marcas — pouco para se ler valor");
    }
  });
});

console.log("\n  ARTEFATOS DO BANCO\n");
console.log("  " + comArt + " questões com artefato · " + blocos + " blocos · " +
  Object.keys(porTipo).sort().map(function (t) { return porTipo[t] + " " + t; }).join(" · "));
console.log("");
falhas.forEach(function (l) { console.log(l); });
console.log(falhas.length ? "  " + falhas.length + " problema(s).\n"
                          : "  Nenhum problema.\n");
process.exit(falhas.length ? 1 : 0);
