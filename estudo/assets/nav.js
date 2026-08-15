/* Navegação compartilhada + alternador de tema.
   Cada página define window.PAGINA = 'index' | 'plano' | 'sim1' | 'sim2'
   antes de carregar este arquivo. */
(function () {
  "use strict";

  var TEMA_KEY = "enade26.tema";

  /* ---------- tema ---------- */
  function lerTema() {
    try { return localStorage.getItem(TEMA_KEY) || "auto"; } catch (e) { return "auto"; }
  }
  function aplicarTema(t) {
    var raiz = document.documentElement;
    if (t === "auto") raiz.removeAttribute("data-theme");
    else raiz.setAttribute("data-theme", t);
  }
  // aplica o quanto antes, para não piscar
  aplicarTema(lerTema());

  var ROTULO = { auto: "Tema: automático", light: "Tema: claro", dark: "Tema: escuro" };
  var CICLO = { auto: "light", light: "dark", dark: "auto" };

  /* ---------- barra ---------- */
  var PAGINAS = [
    { id: "index", href: "index.html", texto: "Início" },
    { id: "plano", href: "plano.html", texto: "Plano de ação" },
    { id: "sim1", href: "simulado-01.html", texto: "Simulado 1" },
    { id: "sim2", href: "simulado-02.html", texto: "Simulado 2" },
    { id: "sim3", href: "simulado-03.html", texto: "Simulado 3" },
    { id: "sim4", href: "simulado-04.html", texto: "Simulado 4" },
    { id: "simIA", href: "simulado-ia.html", texto: "Simulado IA" },
    { id: "disc", href: "discursivas.html", texto: "Discursivas" },
    { id: "painel", href: "painel.html", texto: "Painel" },
    { id: "revisao", href: "revisao.html", texto: "Revisão" }
  ];

  function montar() {
    var atual = window.PAGINA || "index";
    var nav = document.createElement("nav");
    nav.className = "top";

    var links = PAGINAS.map(function (p) {
      var marca = p.id === atual ? ' aria-current="page"' : "";
      return '<a href="' + p.href + '"' + marca + ">" + p.texto + "</a>";
    }).join("");

    nav.innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="index.html">ENADE&nbsp;26 · TADS</a>' +
        '<div class="links">' + links + "</div>" +
        '<span class="navsp"></span>' +
        '<button class="tema" type="button" id="btnTema"></button>' +
      "</div>";

    document.body.insertBefore(nav, document.body.firstChild);

    var btn = nav.querySelector("#btnTema");
    function pintar() { btn.textContent = ROTULO[lerTema()]; }
    pintar();
    btn.addEventListener("click", function () {
      var proximo = CICLO[lerTema()] || "auto";
      try { localStorage.setItem(TEMA_KEY, proximo); } catch (e) {}
      aplicarTema(proximo);
      pintar();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar);
  else montar();
})();
