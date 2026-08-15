/* Objetos de conhecimento oficiais do ENADE 2026.

   Fontes primárias:
   • Portaria Inep nº 154, de 14/04/2026, art. 6º — 12 objetos do componente de
     Formação Geral (comum a bacharelados e cursos de tecnologia).
   • Portaria Inep nº 169, de 14/04/2026, art. 6º — 20 objetos do componente
     específico de Tecnologia em Análise e Desenvolvimento de Sistemas.

   As 11 "áreas" do banco (FG, ES, OO, AL, BD, GP, IN, ML, IH, SG, OT) são uma
   classificação minha, feita por recorrência das provas de 2008 a 2021, e continuam
   valendo como agrupamento de navegação e como cota de sorteio. Os 32 objetos abaixo
   são a nomenclatura oficial: é por eles que se audita cobertura e se reporta
   desempenho, porque são a linguagem em que o Inep descreve a prova.

   API:
     OBJETOS.FG / OBJETOS.CE     -> listas na ordem das portarias
     OBJETOS.todos()             -> os 32
     OBJETOS.porId(id)           -> um objeto
     OBJETOS.de(area, subtema)   -> objeto oficial de uma questão do banco, ou null
     OBJETOS.auditar(banco)      -> { "ce-14": {obj, n}, ..., _semObjeto: [...] }
*/
(function (global) {
  "use strict";

  /* ---------------- Formação Geral — Portaria 154/2026, art. 6º ---------------- */
  var FG = [
    ["fg-01", "I",    "Ética, democracia, cidadania e direitos humanos", "Ética e cidadania"],
    ["fg-02", "II",   "Estado, sociedade e trabalho", "Estado e trabalho"],
    ["fg-03", "III",  "Educação e desenvolvimento humano e social", "Educação"],
    ["fg-04", "IV",   "Mudanças climáticas e questões socioambientais", "Clima e ambiente"],
    ["fg-05", "V",    "Equidade nas relações étnico-raciais, geracionais, de classe, de gênero e de sexualidade", "Equidade"],
    ["fg-06", "VI",   "Cultura, arte e comunicação", "Cultura e comunicação"],
    ["fg-07", "VII",  "Ciência, tecnologia e inovação", "Ciência e tecnologia"],
    ["fg-08", "VIII", "Processos de globalização e política internacional", "Globalização"],
    ["fg-09", "IX",   "Campo, cidade e qualidade de vida", "Campo e cidade"],
    ["fg-10", "X",    "Territórios, sociodiversidade e diversidade cultural", "Territórios e diversidade"],
    ["fg-11", "XI",   "Acessibilidade e inclusão social", "Acessibilidade e inclusão"],
    ["fg-12", "XII",  "Saúde e bem-estar", "Saúde"]
  ];

  /* ------------ Componente específico — Portaria 169/2026, art. 6º ------------- */
  var CE = [
    ["ce-01", "I",     "Algoritmos e programação", "Algoritmos"],
    ["ce-02", "II",    "Análise e arquitetura de sistemas computacionais", "Análise e arquitetura"],
    ["ce-03", "III",   "Banco de dados", "Banco de dados"],
    ["ce-04", "IV",    "Empreendedorismo", "Empreendedorismo"],
    ["ce-05", "V",     "Engenharia de requisitos", "Requisitos"],
    ["ce-06", "VI",    "Estruturas de dados", "Estruturas de dados"],
    ["ce-07", "VII",   "Gerência de configuração", "Gerência de configuração"],
    ["ce-08", "VIII",  "Gerência de projetos", "Gerência de projetos"],
    ["ce-09", "IX",    "Interação humano-computador", "IHC"],
    ["ce-10", "X",     "Legislação, normas técnicas, ética e responsabilidade socioambiental", "Legislação e ética"],
    ["ce-11", "XI",    "Lógica matemática e teoria dos conjuntos", "Lógica e conjuntos"],
    ["ce-12", "XII",   "Operações e manutenção de software", "Operações e manutenção"],
    ["ce-13", "XIII",  "Orientação a objetos", "Orientação a objetos"],
    ["ce-14", "XIV",   "Princípios de arquitetura e organização de computadores", "Arquitetura de computadores"],
    ["ce-15", "XV",    "Princípios de estatística e análise de dados", "Estatística e dados"],
    ["ce-16", "XVI",   "Princípios de redes de computadores e de sistemas distribuídos", "Redes e distribuídos"],
    ["ce-17", "XVII",  "Princípios de segurança cibernética", "Segurança cibernética"],
    ["ce-18", "XVIII", "Princípios de sistemas operacionais", "Sistemas operacionais"],
    ["ce-19", "XIX",   "Processo de software", "Processo de software"],
    ["ce-20", "XX",    "Qualidade, verificação e validação de software", "Qualidade e testes"]
  ];

  /* Mapeamento "area|subtema" -> objeto oficial.

     Duas questões de classificação que vale registrar:
     • "FG|Interpretação de dados" descreve o FORMATO do item (tabela, gráfico), não um
       tema — as portarias não têm objeto equivalente. Fica sem objeto até que cada uma
       das 8 seja reclassificada pelo assunto de fundo.
     • "OT|Inteligência artificial" não consta em nenhuma das duas listas oficiais.
       Permanece no banco como tema de fronteira, fora do rol.
     Ambas aparecem em OBJETOS.auditar() sob _semObjeto. */
  var MAPA = {
    /* --- Formação Geral --- */
    "FG|Direitos humanos": "fg-01",
    "FG|Ética e cidadania": "fg-01",
    "FG|Trabalho": "fg-02",
    "FG|Desigualdade": "fg-02",
    "FG|Educação": "fg-03",
    "FG|Sustentabilidade": "fg-04",
    "FG|Gênero": "fg-05",
    "FG|Equidade": "fg-05",
    "FG|Cultura": "fg-06",
    "FG|Comunicação": "fg-06",
    "FG|Tecnologia e sociedade": "fg-07",
    "FG|Globalização": "fg-08",
    "FG|Mobilidade urbana": "fg-09",
    "FG|Cidades": "fg-09",
    "FG|Diversidade": "fg-10",
    "FG|Territórios": "fg-10",
    "FG|Acessibilidade e inclusão": "fg-11",
    "FG|Saúde": "fg-12",

    /* --- Algoritmos e estruturas de dados ---
       A Portaria 169 separa "algoritmos e programação" (I) de "estruturas de dados" (VI),
       divisão que a área AL do banco não fazia. */
    "AL|Traço de código": "ce-01",
    "AL|Ordenação": "ce-01",
    "AL|Busca": "ce-01",
    "AL|Recursão": "ce-01",
    "AL|Matriz": "ce-01",
    "AL|Vetor": "ce-01",
    "AL|Lista encadeada": "ce-06",
    "AL|Árvore": "ce-06",
    "AL|Fila": "ce-06",
    "AL|Pilha": "ce-06",
    "AL|Hash": "ce-06",
    "AL|Grafos": "ce-06",
    "AL|Complexidade": "ce-06",

    /* --- Banco de dados --- */
    "BD|SQL": "ce-03",
    "BD|Modelagem ER": "ce-03",
    "BD|Normalização": "ce-03",
    "BD|Transações": "ce-03",
    "BD|Integridade": "ce-03",

    /* --- Engenharia de software: a área ES se reparte em cinco objetos oficiais --- */
    "ES|Requisitos": "ce-05",
    "ES|Gerência de configuração": "ce-07",
    "ES|Manutenção": "ce-12",
    "ES|Modelos de processo": "ce-19",
    "ES|Ágil": "ce-19",
    "ES|Processo": "ce-19",
    "ES|Documentação": "ce-19",
    "ES|Reúso": "ce-19",
    "ES|Testes": "ce-20",
    "ES|Qualidade": "ce-20",
    "ES|Estimativas": "ce-08",
    "ES|Riscos": "ce-08",

    /* --- Orientação a objetos e arquitetura --- */
    "OO|POO": "ce-13",
    "OO|Padrões de projeto": "ce-13",
    "OO|UML: classes": "ce-13",
    "OO|UML: casos de uso": "ce-13",
    "OO|UML: sequência": "ce-13",
    "OO|UML: atividades": "ce-13",
    "OO|UML: estados": "ce-13",
    "OO|UML: componentes/implantação": "ce-13",
    "OO|UML: geral": "ce-13",
    "OO|Arquitetura": "ce-02",
    "OO|Análise de sistemas": "ce-02",

    /* --- Gestão --- */
    "GP|Empreendedorismo": "ce-04",
    "GP|Caminho crítico": "ce-08",
    "GP|PMBOK": "ce-08",
    "GP|EAP": "ce-08",
    "GP|Estimativas": "ce-08",
    "GP|Riscos": "ce-08",
    "GP|Valor agregado": "ce-08",
    "GP|Gestão de equipes": "ce-08",
    "GP|Contratos": "ce-08",
    "GP|Métodos": "ce-08",
    "GP|Governança": "ce-08",

    /* --- IHC --- */
    "IH|Usabilidade": "ce-09",
    "IH|Acessibilidade": "ce-09",
    "IH|Interface web": "ce-09",

    /* --- Infraestrutura --- */
    "IN|Redes": "ce-16",
    "IN|Sistemas distribuídos": "ce-16",
    "IN|Nuvem": "ce-16",
    "IN|Virtualização": "ce-16",
    "IN|Sistemas operacionais": "ce-18",

    /* --- Matemática --- */
    "ML|Lógica proposicional": "ce-11",
    "ML|Lógica de predicados": "ce-11",
    "ML|Conjuntos": "ce-11",
    "ML|Matemática": "ce-11",
    "ML|Estatística": "ce-15",
    "ML|Análise de dados": "ce-15",

    /* --- Segurança, legislação e ética --- */
    "SG|Segurança": "ce-17",
    "SG|Criptografia": "ce-17",
    "SG|LGPD": "ce-10",
    "SG|Legislação": "ce-10",
    "SG|Governança": "ce-10",
    "SG|Ética profissional": "ce-10",

    /* --- Arquitetura e organização de computadores --- */
    "OT|Arquitetura de computadores": "ce-14",
    "OT|Memória e cache": "ce-14",
    "OT|Representação de dados": "ce-14",
    "OT|Desempenho": "ce-14"
  };

  function montar(linhas, bloco) {
    return linhas.map(function (l) {
      return { id: l[0], num: l[1], nome: l[2], curto: l[3], bloco: bloco };
    });
  }

  var LISTA_FG = montar(FG, "FG");
  var LISTA_CE = montar(CE, "CE");
  var TODOS = LISTA_FG.concat(LISTA_CE);

  var POR_ID = {};
  TODOS.forEach(function (o) { POR_ID[o.id] = o; });

  global.OBJETOS = {

    FG: LISTA_FG,
    CE: LISTA_CE,

    todos: function () { return TODOS.slice(); },

    porId: function (id) { return POR_ID[id] || null; },

    /* Objeto oficial de uma questão do banco. Devolve null quando o subtema não tem
       correspondente nas portarias — ver a nota sobre MAPA acima. */
    de: function (area, subtema) {
      return POR_ID[MAPA[area + "|" + subtema]] || null;
    },

    /* Contagem do banco por objeto oficial, incluindo os que estão em zero — que são
       justamente os que interessam. `banco` é o array window.BANCO_IA. */
    auditar: function (banco) {
      var saida = {}, semObjeto = {};
      TODOS.forEach(function (o) { saida[o.id] = { obj: o, n: 0 }; });

      (banco || global.BANCO_IA || []).forEach(function (reg) {
        var o = POR_ID[MAPA[reg[0] + "|" + reg[1]]];
        if (o) saida[o.id].n++;
        else semObjeto[reg[0] + "|" + reg[1]] = (semObjeto[reg[0] + "|" + reg[1]] || 0) + 1;
      });

      saida._semObjeto = semObjeto;
      return saida;
    }
  };
})(window);
