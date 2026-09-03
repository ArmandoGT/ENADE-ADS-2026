/* Sorteio de provas a partir do banco IA.

   Formato oficial de 2026: 15 objetivas de formação geral (Portaria Inep 154/2026,
   art. 2º) + 30 objetivas do componente específico + 1 discursiva (Portaria Inep
   169/2026, art. 3º) = 46 itens em 4 horas. A formação geral não tem mais discursiva.

   window.SORTEIO.prova()          -> 46 itens no formato oficial de 2026
   window.SORTEIO.treino(a, n, h)  -> n questões da área a, opcionalmente da habilidade h
   window.SORTEIO.cobertura()      -> { vistas, total } do banco
   window.SORTEIO.disponivel()     -> { ES: 92, ... } contagem por área
   window.SORTEIO.viabilidade()    -> estoque por célula contra o que uma prova consome
   window.SORTEIO.ultimoDiag       -> desvio da última prova em relação ao alvo

   Regras:
   • as alternativas são embaralhadas em cada sorteio, com remapeamento da correta;
   • dá preferência a questões ainda não vistas, reiniciando o ciclo por área quando esgota;
   • nunca repete a mesma questão dentro de uma mesma prova;
   • a prova é composta em duas dimensões — de que assunto trata (cota por área) e o que
     pede (cota por habilidade). A segunda vem medida do acervo oficial e cede quando o
     banco não tem estoque, registrando o desvio em vez de escondê-lo.
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

  /* Fonte de aleatoriedade injetável. O padrão é Math.random; a auditoria substitui
     por um gerador com semente para poder simular centenas de sorteios e comparar o
     resultado com o alvo, o que com Math.random seria irreprodutível. */
  var rnd = function () { return Math.random(); };

  function embaralhar(a) {
    var v = a.slice();
    for (var i = v.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
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

  /* ------------------------------------------------- cota por habilidade ------

     A cota por área acima diz de que ASSUNTO a prova trata. Ela não diz nada sobre o
     que a prova PEDE — e era aí que o simulado se afastava do exame: no acervo oficial
     do Inep, conceito puro é 5% da Formação Geral e 20,7% do componente específico,
     enquanto o banco autoral é feito quase só disso. Sortear por área e ignorar a
     habilidade produz uma prova com os assuntos certos e a tarefa errada.

     A cota sai de ACERVO.cota(), ou seja, é medida nas 175 objetivas oficiais de 2008
     a 2021 — não escrita à mão aqui. Corrigir uma linha de questoes_mapeadas.csv
     reacomoda a composição sozinha.

     No componente específico as duas cotas incidem sobre as mesmas 30 vagas, o que é
     um problema de atribuição. A regra de precedência é deliberada:

       • a cota de ÁREA é dura — é a proporção que a Portaria 169 sustenta e é o que
         alguém confere ao olhar a prova;
       • a cota de HABILIDADE é meta — enquanto o banco não tiver estoque em todas as
         células, ela cede, e o desvio é registrado e mostrado na tela em vez de
         silenciosamente alisado.

     Essa segunda parte importa: uma prova que finge estar no formato do ENADE sem
     estar é pior que uma que avisa o quanto ainda falta. */

  function cotaHabilidade(bloco, vagas) {
    if (global.ACERVO && global.ACERVO.cota) return global.ACERVO.cota(bloco, vagas);
    return null;                              // sem o acervo: sorteia só por área
  }

  function celulas(pool) {
    var c = {};
    (pool || []).forEach(function (x) {
      var h = (x.reg[7] || {}).hab || "?";
      (c[h] = c[h] || []).push(x);
    });
    return c;
  }

  function copiar(o) {
    var c = {};
    Object.keys(o).forEach(function (k) { c[k] = o[k]; });
    return c;
  }

  /* Preenche `vagas` distribuídas por área (cotaArea, dura) tentando respeitar a
     distribuição por habilidade (cotaHab, meta).

     Enche sempre a célula mais escassa primeiro. A razão é concreta: IH e OT têm uma
     vaga só na prova; se as áreas grandes forem servidas antes, essa vaga única acaba
     exigindo uma habilidade cuja cota já se esgotou, e o sorteio falha por ordem de
     atendimento, não por falta de questão. */
  function sortearBloco(porArea, cotaArea, cotaHab, vistas, usados) {
    var restA = copiar(cotaArea);
    var restH = cotaHab ? copiar(cotaHab) : null;
    var alvo = Object.keys(cotaArea).reduce(function (s, k) { return s + cotaArea[k]; }, 0);

    var porCelula = {};
    Object.keys(cotaArea).forEach(function (a) { porCelula[a] = celulas(porArea[a]); });

    var saida = [];
    var livre = function (x) { return !usados.has(x.i); };
    var chave = function (x) { return qidDe(x.reg, x.i); };

    function tirar(pool) {
      var q = escolher(pool.filter(livre), 1, vistas, chave)[0];
      if (q) { saida.push(q); usados.add(q.i); }
      return q;
    }

    if (restH) {
      while (saida.length < alvo) {
        var cands = [];
        Object.keys(restA).forEach(function (a) {
          if (restA[a] <= 0) return;
          Object.keys(restH).forEach(function (h) {
            if (restH[h] <= 0) return;
            var pool = (porCelula[a][h] || []).filter(livre);
            if (pool.length) cands.push({ a: a, h: h, n: pool.length, pool: pool });
          });
        });
        if (!cands.length) break;             // impasse: cai no reparo abaixo

        /* Escassez primeiro; empate pela habilidade que ainda falta mais; empate final
           por ordem alfabética, para não depender da ordem de Object.keys. */
        cands.sort(function (x, y) {
          return (x.n - y.n) || (restH[y.h] - restH[x.h]) ||
                 (x.a + x.h < y.a + y.h ? -1 : 1);
        });

        var c = cands[0];
        if (!tirar(c.pool)) break;
        restA[c.a]--; restH[c.h]--;
      }
    }

    /* Reparo: completa as vagas de área que sobraram, ignorando a habilidade. */
    var faltas = [];
    Object.keys(restA).forEach(function (a) {
      while (restA[a] > 0) {
        var q = tirar((porArea[a] || []).filter(livre));
        if (!q) { faltas.push(a); break; }
        if (restH) {
          var h = (q.reg[7] || {}).hab || "?";
          if (restH[h] > 0) restH[h]--;
          else faltas.push(a + "/" + h);
        }
        restA[a]--;
      }
    });

    return { itens: saida, restH: restH, faltas: faltas };
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
      var usados = new Set();
      var itens = [];
      var n = 1;

      var cotaFG = cotaHabilidade("FG", FG_POR_PROVA);
      var cotaCE = cotaHabilidade("CE", 30);

      var fg = sortearBloco(porArea, { FG: FG_POR_PROVA }, cotaFG, vistas, usados);
      var ce = sortearBloco(porArea, COTA, cotaCE, vistas, usados);

      /* Diagnóstico do sorteio, para a tela poder dizer o quanto esta prova ainda
         difere do exame real. Enquanto o banco não tiver estoque em todas as células,
         o desvio existe — e escondê-lo seria vender como simulado do ENADE uma prova
         que não está no formato do ENADE. */
      var diag = { alvoFG: cotaFG, alvoCE: cotaCE, saiu: {}, desvio: [], faltas: fg.faltas.concat(ce.faltas) };
      fg.itens.concat(ce.itens).forEach(function (x) {
        var h = (x.reg[7] || {}).hab || "?";
        diag.saiu[h] = (diag.saiu[h] || 0) + 1;
      });
      [["FG", cotaFG], ["CE", cotaCE]].forEach(function (par) {
        var alvo = par[1];
        if (!alvo) return;
        var bloco = par[0];
        var saiuBloco = {};
        (bloco === "FG" ? fg.itens : ce.itens).forEach(function (x) {
          var h = (x.reg[7] || {}).hab || "?";
          saiuBloco[h] = (saiuBloco[h] || 0) + 1;
        });
        Object.keys(alvo).forEach(function (h) {
          var d = (saiuBloco[h] || 0) - alvo[h];
          if (d !== 0) diag.desvio.push({ bloco: bloco, hab: h, alvo: alvo[h], saiu: saiuBloco[h] || 0 });
        });
      });
      global.SORTEIO.ultimoDiag = diag;

      fg.itens.concat(ce.itens).forEach(function (x) {
        itens.push(montarObjetiva(x.reg, x.i, n++));
        vistas.add(qidDe(x.reg, x.i));
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

    /* Estoque por célula (área × habilidade) contra o que uma prova consome.

       É a leitura que diz se um desvio veio do banco ou do algoritmo: se falta
       estoque, nenhuma ordem de atendimento resolve. Serve à auditoria e à tela de
       diagnóstico; não participa do sorteio. */
    viabilidade: function () {
      var porArea = indexar();
      var cotaCE = cotaHabilidade("CE", 30);
      var cotaFG = cotaHabilidade("FG", FG_POR_PROVA);
      var linhas = [];

      function medir(area, vagas, cota, total) {
        var c = celulas(porArea[area]);
        Object.keys(cota || {}).forEach(function (h) {
          var demanda = Math.ceil(vagas * cota[h] / total);
          if (!demanda) return;
          linhas.push({ area: area, hab: h, demanda: demanda, estoque: (c[h] || []).length });
        });
      }
      Object.keys(COTA).forEach(function (a) { medir(a, COTA[a], cotaCE, 30); });
      medir("FG", FG_POR_PROVA, cotaFG, FG_POR_PROVA);
      return linhas;
    },

    /* Troca a fonte de aleatoriedade. Só a auditoria usa, para simular sorteios com
       semente e poder comparar o resultado com o alvo de forma reprodutível. */
    _semente: function (fn) { rnd = fn || function () { return Math.random(); }; },

    /* Treino por área: n questões objetivas de uma única área. Com `hab`, restringe a
       uma habilidade — útil para atacar a célula em que o painel apontar fraqueza. */
    treino: function (area, n, hab) {
      var porArea = indexar();
      var vistas = lerVistas();
      var pool = porArea[area] || [];
      if (hab) {
        pool = pool.filter(function (x) { return (x.reg[7] || {}).hab === hab; });
      }
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
