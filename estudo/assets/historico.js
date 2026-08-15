/* Histórico persistente de desempenho.

   Até aqui, nada de acerto ou erro sobrevivia ao fim de um simulado: cada prova
   guardava as respostas na sua própria chave, sem data e sem consolidação, e o
   único registro entre sessões era "enade26.ia.vistas", que só sabe dizer se uma
   questão já apareceu. Resultado: era impossível responder "onde eu erro mais".

   Este módulo grava, a cada correção, uma linha por questão — com área, objeto de
   conhecimento oficial, acerto e data. É a matéria-prima do painel de desempenho e,
   depois, da revisão espaçada.

   Cobertura do campo `o` (objeto oficial): as questões do banco IA trazem o objeto
   resolvido no sorteio. As dos simulados 1 a 4 declaram o tema em texto livre, que
   não casa com o vocabulário de objetos.js — nessas, `o` fica null e a análise por
   objeto usa só o banco IA. A área, essa, existe em todas.

   API:
     HISTORICO.gravarObjetivas(fonte, linhas)  linhas: [{area, subtema, objeto, ok, id}]
     HISTORICO.gravarDiscursiva(fonte, {id, nota, total})
     HISTORICO.ler()            -> { v, itens, disc }
     HISTORICO.resumo()         -> { porArea, porObjeto, total, acertos }
     HISTORICO.limpar(escopo)   -> "tudo" | "disc"
*/
(function (global) {
  "use strict";

  var KEY = "enade26.historico";
  var VERSAO = 1;
  var TETO = 5000;          // linhas de objetivas mantidas; o excedente sai pelo começo
  var TETO_DISC = 500;

  function vazio() { return { v: VERSAO, itens: [], disc: [] }; }

  function ler() {
    var h;
    try { h = JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { h = null; }
    if (!h || h.v !== VERSAO) return vazio();
    if (!Array.isArray(h.itens)) h.itens = [];
    if (!Array.isArray(h.disc)) h.disc = [];
    return h;
  }

  function gravar(h) {
    if (h.itens.length > TETO) h.itens = h.itens.slice(h.itens.length - TETO);
    if (h.disc.length > TETO_DISC) h.disc = h.disc.slice(h.disc.length - TETO_DISC);
    try { localStorage.setItem(KEY, JSON.stringify(h)); } catch (e) {}
    return h;
  }

  global.HISTORICO = {

    ler: ler,

    /* Acrescenta uma correção. Append-only: cada refazimento vira novo registro, com
       data própria, para que a evolução ao longo das semanas continue legível. */
    gravarObjetivas: function (fonte, linhas) {
      if (!linhas || !linhas.length) return;
      var h = ler();
      var agora = Date.now();
      linhas.forEach(function (l) {
        h.itens.push({
          t: agora,
          f: String(fonte),
          a: l.area || null,
          s: l.subtema || null,
          o: l.objeto || null,
          ok: !!l.ok,
          id: (l.id === 0 || l.id) ? l.id : null
        });
      });
      gravar(h);
    },

    /* `consultada` marca a tentativa em que o padrão de resposta foi aberto antes de
       haver resposta escrita. Fica registrada, mas fora de qualquer média: nota tirada
       com o gabarito à vista não mede conhecimento. */
    gravarDiscursiva: function (fonte, d) {
      if (!d || !d.total) return;
      var h = ler();
      var linha = {
        t: Date.now(),
        f: String(fonte),
        id: d.id != null ? d.id : null,
        nota: d.nota,
        total: d.total
      };
      if (d.consultada) linha.c = true;
      h.disc.push(linha);
      gravar(h);
    },

    /* Consolidado para o painel. Conta tentativas, não questões distintas: refazer a
       mesma questão entra de novo, que é o comportamento certo para medir evolução. */
    resumo: function () {
      var h = ler();
      var porArea = {}, porObjeto = {}, acertos = 0;

      h.itens.forEach(function (r) {
        if (r.ok) acertos++;
        if (r.a) {
          var a = porArea[r.a] || (porArea[r.a] = { n: 0, ok: 0 });
          a.n++; if (r.ok) a.ok++;
        }
        if (r.o) {
          var o = porObjeto[r.o] || (porObjeto[r.o] = { n: 0, ok: 0 });
          o.n++; if (r.ok) o.ok++;
        }
      });

      return { porArea: porArea, porObjeto: porObjeto, total: h.itens.length, acertos: acertos };
    },

    limpar: function (escopo) {
      if (escopo === "disc") {
        var h = ler();
        h.disc = [];
        gravar(h);
        return;
      }
      try { localStorage.removeItem(KEY); } catch (e) {}
    }
  };
})(window);
