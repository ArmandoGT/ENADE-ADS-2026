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

   Identidade da questão: até a versão 1, o índice em window.BANCO_IA — ou seja, a
   ordem dos arquivos do banco. A versão 2 usa o id estável do registro, o que permite
   reescrever, reordenar e remover questões sem transformar o progresso de quem estudou
   em ruído. Ver migrar(), abaixo, e banco/legado-ids.js.

   API:
     HISTORICO.gravarObjetivas(fonte, linhas)
        linhas: [{area, subtema, objeto, hab, ok, q, escolha}]
     HISTORICO.gravarDiscursiva(fonte, {id, nota, total})
     HISTORICO.ler()            -> { v, itens, disc }
     HISTORICO.resumo()         -> { porArea, porObjeto, porHabilidade, total, acertos }
     HISTORICO.limpar(escopo)   -> "tudo" | "disc"
*/
(function (global) {
  "use strict";

  var KEY = "enade26.historico";
  var VERSAO = 2;
  var TETO = 5000;          // linhas de objetivas mantidas; o excedente sai pelo começo
  var TETO_DISC = 500;

  function vazio() { return { v: VERSAO, itens: [], disc: [] }; }

  /* Migração v1 -> v2.

     Na v1 a identidade de uma questão era o índice dela em window.BANCO_IA. Isso
     amarrava o progresso de quem estudou à ordem dos arquivos do banco: bastava
     inserir uma questão no meio de um arquivo para que todo o histórico e todo o
     baralho de revisão passassem a apontar para outras questões — em silêncio, sem
     erro nenhum na tela. A v2 troca o índice pelo id estável.

     A tradução usa banco/legado-ids.js, a tabela congelada com a ordem que valia
     quando esses registros foram gravados.

     Duas travas, porque o modo de falha aqui é perda silenciosa de dados:

     1. Sem a tabela carregada, NÃO migra. Devolve a v1 intacta e tenta de novo na
        próxima página. O contrário — migrar sem poder traduzir — apagaria o id de
        cada linha e o histórico viraria uma contagem anônima de acertos.
     2. `ler()` aceita a v1 em memória. Uma página que carregue historico.js sem a
        tabela continua lendo e escrevendo o histórico normalmente.

     Novos campos da v2, todos opcionais e nulos no que veio da v1: `q` (id estável,
     substitui `id`), `h` (habilidade) e `e` (slot original da alternativa marcada). */
  function migrar(h) {
    if (h.v === VERSAO) return h;
    if (h.v !== 1) return null;

    var tabela = global.BANCO_LEGADO_IDS;
    if (!tabela) return h;                      // ainda não dá para traduzir: espera

    h.itens.forEach(function (r) {
      if (typeof r.id === "number") r.q = tabela[r.id] || null;
      else if (typeof r.id === "string") r.q = r.id;
      else r.q = null;
      delete r.id;
    });
    /* As discursivas sempre usaram id textual ("2021-D2", "ia-fg-01"): nada a traduzir. */
    h.disc.forEach(function (r) { r.q = r.id != null ? r.id : null; delete r.id; });

    h.v = VERSAO;
    gravar(h);
    return h;
  }

  function ler() {
    var h;
    try { h = JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { h = null; }
    if (!h) return vazio();
    if (!Array.isArray(h.itens)) h.itens = [];
    if (!Array.isArray(h.disc)) h.disc = [];
    h = migrar(h);
    if (!h) return vazio();                     // versão que este código não conhece
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
          h: l.hab || null,
          ok: !!l.ok,
          q: l.q != null ? l.q : null,
          /* Slot ORIGINAL da alternativa marcada, 0 a 4 na ordem do banco — nunca a
             letra. sorteio.js embaralha as alternativas a cada sorteio, então "C"
             designa alternativas diferentes em sessões diferentes, e gravar a letra
             produziria uma estatística de distrator sem sentido nenhum. */
          e: (l.escolha === 0 || l.escolha) ? l.escolha : null
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
        q: d.id != null ? d.id : null,
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
      var porArea = {}, porObjeto = {}, porHabilidade = {}, acertos = 0;

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
        /* Por habilidade é o corte que nenhum relatório por área consegue dar: separa
           saber a definição de saber aplicá-la. Só existe do que foi respondido a
           partir da versão 2 — o que veio antes não tem como saber. */
        if (r.h) {
          var x = porHabilidade[r.h] || (porHabilidade[r.h] = { n: 0, ok: 0 });
          x.n++; if (r.ok) x.ok++;
        }
      });

      return { porArea: porArea, porObjeto: porObjeto, porHabilidade: porHabilidade,
               total: h.itens.length, acertos: acertos };
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
