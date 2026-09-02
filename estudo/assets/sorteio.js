/* Sorteio de provas a partir do banco IA.

   Formato oficial de 2026: 15 objetivas de formação geral (Portaria Inep 154/2026,
   art. 2º) + 30 objetivas do componente específico + 1 discursiva (Portaria Inep
   169/2026, art. 3º) = 46 itens em 4 horas. A formação geral não tem mais discursiva.

   window.SORTEIO.prova()        -> 46 itens no formato oficial de 2026
   window.SORTEIO.treino(a, n)   -> n questões da área a
   window.SORTEIO.cobertura()    -> { vistas, total } do banco
   window.SORTEIO.disponivel()   -> { ES: 92, ... } contagem por área

   Regras:
   • as alternativas são embaralhadas em cada sorteio, com remapeamento da correta;
   • dá preferência a questões ainda não vistas, reiniciando o ciclo por área quando esgota;
   • nunca repete a mesma questão dentro de uma mesma prova.
*/
(function (global) {
  "use strict";

  var VISTAS = "enade26.ia.vistas";
  var LETRAS = ["A", "B", "C", "D", "E"];

  var FG_POR_PROVA = 15;   // Portaria 154/2026, art. 2º

  /* Cota por área do componente específico — soma 30 (Portaria 169/2026, art. 3º).
     Base: a incidência histórica das 135 objetivas de componente específico mapeadas
     em questoes_mapeadas.csv (ES 31,1%, OO 18,5%, AL 11,9%, BD 8,1%, IN e GP 7,4%...).
     Três desvios deliberados dessa proporção, que a Portaria 169 justifica ao dar
     status de objeto de conhecimento próprio a temas antes diluídos:
       SG 1 -> 2   "segurança cibernética" e "legislação, normas, ética e
                    responsabilidade socioambiental" são dois objetos distintos;
       AL 3 -> 4   "estruturas de dados" separa-se de "algoritmos e programação";
       BD 2 -> 3   "banco de dados" é objeto único e recorrente. */
  var COTA = { ES: 8, OO: 5, AL: 4, BD: 3, IN: 2, GP: 2, ML: 2, SG: 2, IH: 1, OT: 1 };

  /* O estoque de já-vistas guardava índices de window.BANCO_IA, e portanto sofria do
     mesmo problema do histórico: qualquer edição no banco deslocava tudo e a
     preferência por questões inéditas passava a mentir sem dar sinal. Migra para o id
     estável na primeira leitura, traduzindo pela tabela congelada.

     O conjunto sempre foi de tipo misto — número para objetiva, string para discursiva
     ("ia-fg-01"). A regra segue a mesma: número traduz, string permanece. Sem a tabela
     carregada, devolve o que havia; não migrar é sempre melhor que migrar errado. */
  function lerVistas() {
    var bruto;
    try { bruto = JSON.parse(localStorage.getItem(VISTAS) || "[]"); }
    catch (e) { return new Set(); }
    if (!Array.isArray(bruto)) return new Set();

    var tabela = global.BANCO_LEGADO_IDS;
    if (!tabela) return new Set(bruto);

    var migrou = false;
    var saida = bruto.map(function (v) {
      if (typeof v !== "number") return v;
      migrou = true;
      return tabela[v] || null;
    }).filter(function (v) { return v !== null; });

    var s = new Set(saida);
    if (migrou) gravarVistas(s);
    return s;
  }
  function gravarVistas(s) {
    try { localStorage.setItem(VISTAS, JSON.stringify([...s])); } catch (e) {}
  }

  /* Id estável de um registro. Só recorre ao índice em banco ainda não migrado. */
  function qidDe(reg, i) {
    return (reg[7] || {}).id || (global.BANCO_LEGADO_IDS || [])[i] || String(i);
  }

  function embaralhar(a) {
    var v = a.slice();
    for (var i = v.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = v[i]; v[i] = v[j]; v[j] = t;
    }
    return v;
  }

  /* Escolhe n elementos de `pool`, priorizando os que ainda não foram vistos.
     `chave` extrai o identificador estável de cada elemento. */
  function escolher(pool, n, vistas, chave) {
    var novos = pool.filter(function (x) { return !vistas.has(chave(x)); });
    var usados = pool.filter(function (x) { return vistas.has(chave(x)); });
    var saida = embaralhar(novos).slice(0, n);
    if (saida.length < n) {
      // estoque inédito esgotado nesta área: reinicia o ciclo com as já vistas
      saida = saida.concat(embaralhar(usados).slice(0, n - saida.length));
    }
    return saida;
  }

  /* Converte um registro do banco em item do motor, com alternativas embaralhadas. */
  function montarObjetiva(reg, idxBanco, rotulo) {
    var ordem = embaralhar([0, 1, 2, 3, 4]);
    var alternativas = ordem.map(function (k) { return reg[3][k]; });
    var novaCorreta = ordem.indexOf(reg[4]);
    var obj = global.OBJETOS ? global.OBJETOS.de(reg[0], reg[1]) : null;
    var m = reg[7] || {};
    return {
      fonte: "autoral", tipo: "obj", rotulo: String(rotulo),
      area: reg[0], subtema: reg[1], tema: reg[1],
      objeto: obj ? obj.id : null,
      hab: m.hab || null,
      bloco: reg[0] === "FG" ? "FG" : "CE",
      enunciado: reg[2], alternativas: alternativas,
      gab: LETRAS[novaCorreta], explicacao: reg[5], codigo: reg[6] || null,
      artefatos: m.art || null,
      /* A permutação viaja junto com o item porque o gabarito não é a única coisa que
         depende dela: gravar qual alternativa a pessoa marcou só faz sentido no slot
         original, e é `ordem` que traduz a letra vista de volta para ele. */
      ordem: ordem,
      qid: m.id || (global.BANCO_LEGADO_IDS || [])[idxBanco] || null,
      idBanco: idxBanco
    };
  }

  function montarDiscursiva(d, idxBanco, rotulo) {
    return {
      fonte: "autoral", tipo: "disc", rotulo: rotulo,
      area: d.area, subtema: d.tema, tema: d.tema, tipoDisc: d.tipo,
      bloco: d.bloco,
      enunciado: d.enunciado, valor: d.valor.toFixed(1).replace(".", ",") + " pontos",
      valorNum: d.valor, rubrica: d.rubrica, codigo: d.codigo || null,
      idBanco: d.id
    };
  }

  function indexar() {
    var banco = global.BANCO_IA || [];
    var porArea = {};
    banco.forEach(function (reg, i) {
      (porArea[reg[0]] = porArea[reg[0]] || []).push({ reg: reg, i: i });
    });
    return porArea;
  }

  global.SORTEIO = {

    disponivel: function () {
      var porArea = indexar(), c = {};
      Object.keys(porArea).forEach(function (k) { c[k] = porArea[k].length; });
      return c;
    },

    cobertura: function () {
      var total = (global.BANCO_IA || []).length + (global.BANCO_IA_DISC || []).length;
      var vistas = lerVistas();
      // conta apenas o que existe hoje no banco
      return { vistas: Math.min(vistas.size, total), total: total };
    },

    zerarCobertura: function () {
      try { localStorage.removeItem(VISTAS); } catch (e) {}
    },

    /* Prova completa no formato 2026: 15 FG + 30 CE + 1 discursiva */
    prova: function () {
      var porArea = indexar();
      var vistas = lerVistas();
      var chave = function (x) { return qidDe(x.reg, x.i); };
      var itens = [];
      var n = 1;

      // formação geral
      escolher(porArea.FG || [], FG_POR_PROVA, vistas, chave).forEach(function (x) {
        itens.push(montarObjetiva(x.reg, x.i, n++));
        vistas.add(qidDe(x.reg, x.i));
      });

      // componente específico, área por área
      Object.keys(COTA).forEach(function (area) {
        escolher(porArea[area] || [], COTA[area], vistas, chave).forEach(function (x) {
          itens.push(montarObjetiva(x.reg, x.i, n++));
          vistas.add(qidDe(x.reg, x.i));
        });
      });

      /* Discursiva: uma só, do componente específico. A Portaria 154/2026 tirou as duas
         discursivas de formação geral e a 169/2026 reduziu as três técnicas a uma — o
         sorteio escolhe entre os três tipos que restaram no rol do específico. */
      var disc = (global.BANCO_IA_DISC || []).filter(function (d) {
        return d.tipo !== "fg";
      });
      var idx = disc.map(function (d, i) { return { reg: d, i: i }; });
      var chaveD = function (x) { return x.reg.id; };

      escolher(idx, 1, vistas, chaveD).forEach(function (x) {
        itens.push(montarDiscursiva(x.reg, x.i, "D1"));
        vistas.add(x.reg.id);
      });

      gravarVistas(vistas);
      return itens;
    },

    /* Remonta questões específicas do banco, pelo id estável que o histórico guardou.
       Serve à revisão espaçada, que precisa devolver exatamente as questões que a
       pessoa errou — e não questões novas do mesmo assunto. Não mexe em "vistas":
       rever o que já se viu não consome estoque inédito.

       Ids que não existem mais no banco simplesmente somem do baralho. É o
       comportamento certo: uma questão reescrita a ponto de mudar de id é outra
       questão, e devolvê-la como se fosse a mesma seria mentir sobre o que se errou. */
    porQids: function (qids) {
      var banco = global.BANCO_IA || [];
      var pos = {};
      banco.forEach(function (reg, i) {
        var id = (reg[7] || {}).id;
        if (id) pos[id] = i;
      });
      return (qids || [])
        .filter(function (q) { return pos[q] !== undefined; })
        .map(function (q, k) { return montarObjetiva(banco[pos[q]], pos[q], k + 1); });
    },

    /* Treino por área: n questões objetivas de uma única área */
    treino: function (area, n) {
      var porArea = indexar();
      var vistas = lerVistas();
      var pool = porArea[area] || [];
      var qtd = Math.min(n, pool.length);
      var itens = escolher(pool, qtd, vistas, function (x) { return x.i; })
        .map(function (x, k) {
          vistas.add(qidDe(x.reg, x.i));
          return montarObjetiva(x.reg, x.i, k + 1);
        });
      gravarVistas(vistas);
      return itens;
    }
  };
})(window);
