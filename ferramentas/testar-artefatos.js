#!/usr/bin/env node
/* Teste do renderizador de artefatos.

   O que se verifica aqui não é aparência — é o que costuma passar despercebido de dia,
   no tema claro, na máquina de quem escreveu a questão:

     • cor fixa em número, que no tema escuro vira texto invisível;
     • gráfico sem descrição textual, que exclui quem usa leitor de tela — num material
       que tem uma área inteira sobre acessibilidade;
     • escala de eixo em número quebrado, que impede ler o valor da barra, que é
       justamente o que a questão de interpretação vai cobrar;
     • marcação malformada, que aparece como retângulo vazio e não como erro.

       node ferramentas/testar-artefatos.js

   O DOM daqui é de mentirinha e propositalmente burro: guarda o que recebeu para o
   teste conferir. Não pretende ser navegador, só o suficiente para artefato.js rodar.
*/
"use strict";

var fs = require("fs");
var path = require("path");

var RAIZ = path.resolve(__dirname, "..");
var falhas = 0, testes = 0;

function conferir(nome, condicao, detalhe) {
  testes++;
  if (condicao) { console.log("  ok  " + nome); return; }
  falhas++;
  console.log("  --  " + nome + (detalhe ? "\n        " + String(detalhe).slice(0, 300) : ""));
}

/* -------------------------------------------------------------- DOM de mentira */

function No(tag) {
  this.tag = tag;
  this.className = "";
  this.textContent = "";
  this.innerHTML = "";
  this.filhos = [];
  this.attrs = {};
}
No.prototype.appendChild = function (f) { this.filhos.push(f); return f; };
Object.defineProperty(No.prototype, "scope", {
  set: function (v) { this.attrs.scope = v; }, get: function () { return this.attrs.scope; }
});

/* Devolve a marcação aproximada da subárvore, que é o que os testes inspecionam. */
function texto(no) {
  if (!no) return "";
  var dentro = no.innerHTML + no.textContent + no.filhos.map(texto).join("");
  return "<" + no.tag + " class=\"" + no.className + "\">" + dentro + "</" + no.tag + ">";
}

function carregar() {
  var janela = {};
  janela.document = { createElement: function (t) { return new No(t); } };
  new Function("window", fs.readFileSync(path.join(RAIZ, "estudo/assets/artefato.js"), "utf8"))(janela);
  return janela.ARTEFATO;
}

var ARTEFATO = carregar();

console.log("\n  RENDERIZADOR DE ARTEFATOS\n");

conferir("os quatro tipos de bloco existem",
  ARTEFATO.tipos.sort().join(",") === "codigo,grafico,svg,tabela", ARTEFATO.tipos.join(","));

/* ---------------------------------------------------------------- 1. gráfico */

var g = ARTEFATO.montar({
  t: "grafico", sub: "barras",
  cap: "Emissões por setor",
  eixoY: "Mt CO₂e",
  cat: ["Energia", "Agropecuária", "Transporte", "Indústria"],
  ser: [{ nome: "2015", val: [420, 510, 200, 180] },
        { nome: "2023", val: [380, 560, 240, 175] }]
});
var mg = texto(g);

conferir("gráfico de barras é montado", !!g);
conferir("gráfico sai como SVG com viewBox", /<svg viewBox="0 0 620 300"/.test(mg));
conferir("gráfico se anuncia como imagem", /role="img"/.test(mg));
conferir("gráfico tem título", /<title>Emissões por setor<\/title>/.test(mg));

var desc = (mg.match(/<desc>([^<]*)<\/desc>/) || [])[1] || "";
conferir("gráfico descreve os dados para leitor de tela",
  desc.indexOf("Energia 420") >= 0 && desc.indexOf("560") >= 0, desc);

conferir("uma barra por categoria e por série",
  (mg.match(/class="a-barra/g) || []).length === 8,
  (mg.match(/class="a-barra/g) || []).length + " barras");
conferir("legenda aparece com mais de uma série",
  mg.indexOf("2015") >= 0 && mg.indexOf("2023") >= 0);
conferir("rótulo do eixo Y é escrito", mg.indexOf("Mt CO₂e") >= 0);

/* A escala tem de cair em número redondo: com máximo 560, o topo é 600 de 200 em 200. */
var marcas = (mg.match(/text-anchor="end">([^<]+)</g) || [])
  .map(function (s) { return s.replace(/.*>/, "").replace("<", ""); });
conferir("escala do eixo cai em números redondos",
  marcas.indexOf("0") >= 0 && marcas.indexOf("600") >= 0 && marcas.length === 4,
  marcas.join(" · "));

/* ---- cor fixa: o defeito que só aparece no tema escuro -------------------- */
conferir("gráfico não declara nenhuma cor em número",
  !/#[0-9a-fA-F]{3,8}\b/.test(mg) && !/\b(rgb|hsl)a?\(/.test(mg),
  (mg.match(/#[0-9a-fA-F]{3,8}/g) || []).join(" "));

var gl = texto(ARTEFATO.montar({
  t: "grafico", sub: "linha", cap: "Evolução",
  cat: ["2020", "2021", "2022"], ser: [{ nome: "Índice", val: [10, 25, 18] }]
}));
conferir("gráfico de linha é montado com polilinha e pontos",
  /class="a-linha-serie/.test(gl) && (gl.match(/class="a-ponto/g) || []).length === 3);
conferir("sem segunda série, não desenha legenda", !/a-chave/.test(gl));

conferir("gráfico sem dados devolve null",
  ARTEFATO.montar({ t: "grafico", cat: [], ser: [] }) === null);

/* ----------------------------------------------------------------- 2. tabela */

var t = ARTEFATO.montar({
  t: "tabela", cap: "Tabela PEDIDO",
  cab: ["id", "cliente", "valor"],
  linhas: [["1", "10", "250,00"], ["2", "10", "90,00"]],
  al: ["num", "num", "num"]
});
var mt = texto(t);

conferir("tabela vira <table> de verdade, não imagem", /<table/.test(mt));
conferir("cabeçalho vai em <th> com scope",
  t.filhos[0].filhos[0].filhos[1].filhos[0].filhos[0].attrs.scope === "col");
conferir("todas as células são escritas",
  mt.indexOf("250,00") >= 0 && mt.indexOf("90,00") >= 0);
conferir("tabela larga pode rolar sem esticar a página", /art-rolagem/.test(mt));
conferir("coluna numérica é marcada para alinhar à direita",
  (mt.match(/class="num"/g) || []).length >= 6);

/* ----------------------------------------------------------------- 3. código */

var c = texto(ARTEFATO.montar({ t: "codigo", ling: "sql", txt: "SELECT 1;\nSELECT 2;" }));
conferir("código reaproveita a aparência que já existia", /class="codigo"/.test(c));
conferir("código preserva a quebra de linha", c.indexOf("SELECT 1;\nSELECT 2;") >= 0);

/* -------------------------------------------------------------- 4. svg livre */

var s = ARTEFATO.montar({
  t: "svg", cap: "Diagrama de classes", desc: "Aluno associa-se a Turma.",
  vb: "0 0 420 220",
  d: '<rect class="a-caixa" x="10" y="10" width="150" height="72"/>' +
     '<text class="a-rot" x="85" y="32" text-anchor="middle">Aluno</text>'
});
var ms = texto(s);
conferir("diagrama livre é montado", !!s);
conferir("o invólucro é montado aqui, não por quem escreve a questão",
  /<svg viewBox="0 0 420 220" role="img"/.test(ms));
conferir("descrição do diagrama vira <desc>",
  /<desc>Aluno associa-se a Turma\.<\/desc>/.test(ms));

conferir("bloco svg sem viewBox devolve null",
  ARTEFATO.montar({ t: "svg", d: "<rect/>" }) === null);

/* ------------------------------------------------------------- 5. bordas */

conferir("bloco de tipo desconhecido devolve null",
  ARTEFATO.montar({ t: "sanfona" }) === null);
conferir("bloco nulo devolve null", ARTEFATO.montar(null) === null);

/* ------------------------------------------------------------------ desfecho */

console.log("");
console.log(falhas ? "  " + falhas + " de " + testes + " verificações falharam.\n"
                   : "  " + testes + " verificações, todas passaram.\n");
process.exit(falhas ? 1 : 0);
