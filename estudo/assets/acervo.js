/* O acervo oficial do Inep, 2008 a 2021 — as 200 questões classificadas.

   Este é o mesmo conteúdo de questoes_mapeadas.csv, na forma que o navegador lê.
   Estava até aqui declarado dentro do <script> do plano.html, servindo só ao gráfico
   de incidência daquela página. Foi extraído porque é a régua de todo o material:

     • plano.html          desenha a incidência por área e o mapa filtrável;
     • sorteio.js          deriva daqui a cota por habilidade de cada prova sorteada;
     • ferramentas/auditar.js compara o banco autoral contra este acervo;
     • auditoria.html      mostra os dois lado a lado.

   O ponto de ter uma fonte só: a composição da prova simulada não é uma opinião
   sobre como deveria ser o ENADE, é a medida do que o ENADE foi. Corrigir uma linha
   aqui reacomoda a cota, o auditor e os relatórios de uma vez.

   Linha: [ano, número, bloco, tipo, área, tema, habilidade, formato, gabarito]
   Habilidade e formato vêm em código de uma letra; ACERVO.HAB e ACERVO.FMT traduzem.

   API:
     ACERVO.linhas               as 200 linhas, cruas
     ACERVO.AREA / .HAB / .FMT   rótulos legíveis dos códigos
     ACERVO.objetivas(bloco)     as objetivas, opcionalmente de um bloco ("FG"|"CE")
     ACERVO.mix(bloco)           proporção por habilidade, em pontos percentuais
     ACERVO.cota(bloco, n)       a mesma proporção convertida em n vagas inteiras
*/
(function (global) {
  "use strict";

  var AREA = {
    ES:"Engenharia de Software", OO:"UML, projeto OO e arquitetura", AL:"Algoritmos e estruturas de dados",
    BD:"Banco de dados", GP:"Gestão de projetos e empreendedorismo", IN:"SO, redes e distribuídos",
    ML:"Matemática, lógica e estatística", IH:"IHC e acessibilidade",
    SG:"Segurança, governança e legislação", OT:"Arquitetura de computadores e IA", FG:"Formação geral"
  };
  var HAB = {
    J:"Julgamento de itens", I:"Interpretação de artefato", C:"Conceito puro",
    A:"Asserção-razão", X:"Cálculo ou traço", E:"Estudo de caso ou produção de artefato"
  };
  var FMT = {
    T:"Texto", K:"Código", P:"Pseudocódigo", U:"Diagrama UML", R:"Modelo ER",
    Q:"SQL", B:"Tabela", G:"Gráfico ou figura", S:"Cenário"
  };

  var D = [
    // ---------- 2008 ----------
    [2008,"1","FG","obj","FG","Literatura e história: Machado de Assis e a Proclamação da República","I","G","C"],
    [2008,"2","FG","obj","FG","Meio ambiente: biodiversidade e responsabilidade humana","I","G","E"],
    [2008,"3","FG","obj","FG","Matemática aplicada: fator de proteção solar (FPS)","X","T","D"],
    [2008,"4","FG","obj","FG","Cidadania: direitos das mulheres e inclusão social","C","T","A"],
    [2008,"5","FG","obj","FG","História e arte: Grande Depressão e contradições do capitalismo","I","G","D"],
    [2008,"6","FG","obj","FG","Sustentabilidade urbana: atuação estratégica em rede","I","G","B"],
    [2008,"7","FG","obj","FG","Desigualdade de renda: leitura da curva de Lorenz","X","G","D"],
    [2008,"8","FG","obj","FG","Filosofia e arte: Nietzsche e o expressionismo","I","G","C"],
    [2008,"9","FG","disc","FG","Direitos humanos: integralidade e indivisibilidade da Declaração Universal","E","T","-"],
    [2008,"10","FG","disc","FG","Educação brasileira: avaliações oficiais x percepção social","E","G","-"],
    [2008,"11","CE","obj","ES","Modelos de ciclo de vida: cascata, prototipação e incremental","J","S","D"],
    [2008,"12","CE","obj","OO","POO: herança como reúso e extensão de código validado","C","S","B"],
    [2008,"13","CE","obj","OO","UML: diagrama de sequência, linhas de vida, criação e destruição","I","U","D"],
    [2008,"14","CE","obj","ES","Teste de software: caixa-branca x caixa-preta e teste de mesa","J","P","A"],
    [2008,"15","CE","obj","IN","Sistemas operacionais: máquinas virtuais e emulação","C","T","C"],
    [2008,"16","CE","obj","ES","RUP: iterações, fases, disciplinas e artefatos","A","T","D"],
    [2008,"17","CE","obj","ES","Requisitos: técnicas de elicitação (brainstorming, JAD, FAST)","C","S","E"],
    [2008,"18","CE","obj","ES","Qualidade: interoperabilidade, portabilidade e usabilidade","J","S","A"],
    [2008,"19","CE","obj","OO","UML: classe abstrata, sobrescrita, agregação e acoplamento","J","B","X"],
    [2008,"20","CE","obj","AL","Ordenação: traço do bubble sort","J","P","E"],
    [2008,"21","CE","obj","AL","Tipos de dados: erros de atribuição e expressão relacional inválida","I","P","B"],
    [2008,"22","CE","obj","AL","Estrutura de dados: completar a busca binária","I","P","A"],
    [2008,"23","CE","obj","ES","RUP: em que fase ocorre a análise de requisitos","C","T","C"],
    [2008,"24","CE","obj","OO","UML: diagrama de atividades com raias e fork/join","I","U","E"],
    [2008,"25","CE","obj","OO","UML: diagrama de casos de uso, include e extend","E","S","D"],
    [2008,"26","CE","obj","AL","Projeto de algoritmos: divisão e conquista, dinâmica e guloso","C","T","X"],
    [2008,"27","CE","obj","AL","Recursividade: Fibonacci, condição de parada e ineficiência","I","P","C"],
    [2008,"28","CE","obj","ML","Matemática discreta: teoria dos conjuntos e diagrama de Venn","J","G","A"],
    [2008,"29","CE","obj","ML","Lógica proposicional: formalização de sentença em linguagem natural","I","T","C"],
    [2008,"30","CE","obj","BD","SQL: SELECT com junção, WHERE e ORDER BY DESC","I","Q","X"],
    [2008,"31","CE","obj","GP","Empreendedorismo: plano de negócios e papéis do empreendedor","C","T","D"],
    [2008,"32","CE","obj","OO","POO: private, construtores, classe abstrata e polimorfismo","J","T","C"],
    [2008,"33","CE","obj","GP","PMBOK: gerenciamento do tempo, sequenciamento e cronograma","C","S","B"],
    [2008,"34","CE","obj","BD","Modelagem relacional: cardinalidade, chave primária composta e FK","I","B","A"],
    [2008,"35","CE","obj","BD","Banco de dados: transações e propriedades ACID","J","B","E"],
    [2008,"36","CE","obj","ES","Manutenção adaptativa: mudança de legislação em ERP","C","S","B"],
    [2008,"37","CE","obj","IN","Redes: domínio de colisão, hub x switch em LAN Ethernet","I","G","B"],
    [2008,"38","CE","disc","OO","UML: casos de uso, descrição do fluxo principal e exceções","E","S","-"],
    [2008,"39","CE","disc","OO","UML: diagrama de classes com atributos, métodos e visibilidade","E","S","-"],
    [2008,"40","CE","disc","AL","Algoritmos: traço de matriz bidimensional","X","P","X"],

    // ---------- 2011 ----------
    [2011,"1","FG","obj","FG","Literatura e sociologia: trabalho escravo e privilégio","I","T","D"],
    [2011,"2","FG","obj","FG","Exclusão digital, TICs e direito à informação","J","T","A"],
    [2011,"3","FG","obj","FG","Cibercultura (Pierre Lévy) e os valores do Iluminismo","I","T","E"],
    [2011,"4","FG","obj","FG","Educação e cidadania: LDB e Constituição de 1988","A","T","A"],
    [2011,"5","FG","obj","FG","Meio ambiente: desmatamento na Amazônia Legal","X","G","C"],
    [2011,"6","FG","obj","FG","Educação e trabalho: escolaridade, desemprego e salário","I","G","B"],
    [2011,"7","FG","obj","FG","Desenvolvimento sustentável: eixos ambiental, econômico e sociopolítico","C","T","B"],
    [2011,"8","FG","obj","FG","Sociologia: desigualdade social e responsabilização individual","J","T","E"],
    [2011,"D1","FG","disc","FG","Educação a distância: enumerar e justificar três vantagens","E","B","-"],
    [2011,"D2","FG","disc","FG","Analfabetismo e empregabilidade: políticas e proposta de solução","E","B","-"],
    [2011,"9","CE","obj","ES","Requisitos: workshop, cenário, entrevista e prototipação","J","T","B"],
    [2011,"10","CE","obj","ES","Métodos ágeis: XP, programação em pares e integração contínua","C","T","A"],
    [2011,"11","CE","obj","OO","UML: diagrama de casos de uso e obtenção de requisitos","A","U","B"],
    [2011,"12","CE","obj","OO","UML: linguagem x metodologia, extend e diagramas de comportamento","J","T","B"],
    [2011,"13","CE","obj","ES","Modelagem de processos de negócio: notação EPC/ARIS","C","T","E"],
    [2011,"14","CE","obj","OO","UML: diagrama de atividades com decisão, laço e fork/join","I","U","C"],
    [2011,"15","CE","obj","IH","IHC: mapas de navegação e projeto centrado no usuário","A","T","B"],
    [2011,"16","CE","obj","IN","IDE, JavaBeans e máquina virtual: bytecode e linguagem intermediária","A","T","B"],
    [2011,"17","CE","obj","ES","BPM: gestão de processos de negócio e fase de otimização","C","T","E"],
    [2011,"18","CE","obj","ES","Manutenção (ISO/IEC 14764): corretiva, preventiva, adaptativa e perfectiva","J","T","C"],
    [2011,"19","CE","obj","ML","Lógica proposicional: identificação de tautologias","X","T","B"],
    [2011,"20","CE","obj","OO","Padrões de projeto GoF: padrões de criação e Abstract Factory","C","T","A"],
    [2011,"21","CE","obj","OO","POO: herança, reúso, extensão e herança múltipla","J","T","C"],
    [2011,"22","CE","obj","BD","SQL: INNER JOIN encadeado de três tabelas a partir do DER","I","Q","D"],
    [2011,"23","CE","obj","BD","Modelagem ER e normalização: contagem de chaves estrangeiras","X","R","E"],
    [2011,"24","CE","obj","ES","Gerência de configuração: baselines, releases e controle de mudanças","J","T","E"],
    [2011,"25","CE","obj","ES","Teste de software: definição de teste de regressão","C","T","D"],
    [2011,"26","CE","obj","GP","Gestão de projetos: método do caminho crítico (CPM) e folga","X","B","C"],
    [2011,"27","CE","obj","ES","Modelo cascata: etapas sequenciais e aspectos gerenciais","A","T","D"],
    [2011,"28","CE","obj","IN","Virtualização: máquinas virtuais, memória e testes multiplataforma","J","T","C"],
    [2011,"29","CE","obj","AL","Estrutura de dados: pilha (LIFO), traço de push e pop","X","P","A"],
    [2011,"30","CE","obj","ES","Qualidade: revisões técnicas formais e controle de defeitos","A","T","A"],
    [2011,"31","CE","obj","SG","Segurança: ataque DDoS, botnets e o atributo disponibilidade","J","S","C"],
    [2011,"32","CE","obj","ES","Qualidade de processo: MPS.BR e níveis de maturidade","C","T","C"],
    [2011,"33","CE","obj","ES","Métricas: disponibilidade, POFOD e MTBF","X","B","D"],
    [2011,"34","CE","obj","GP","Empreendedorismo: plano de negócios como instrumento de gestão","A","T","A"],
    [2011,"35","CE","obj","OO","POO: objeto, mensagem, método, herança e encapsulamento","J","T","E"],
    [2011,"D3","CE","disc","OO","UML: diagrama de classes de domínio e três requisitos funcionais","E","S","-"],
    [2011,"D4","CE","disc","AL","Algoritmos: teste de mesa de vetores vetA e vetB","X","P","-"],
    [2011,"D5","CE","disc","AL","Algoritmos: construir algoritmo de progressão geométrica em vetor","E","P","-"],

    // ---------- 2014 ----------
    [2014,"1","FG","obj","FG","Tecnologia digital e democratização da produção artística","A","T","A"],
    [2014,"2","FG","obj","FG","Terceiro setor, ONGs e responsabilidade social corporativa","J","T","C"],
    [2014,"3","FG","obj","FG","Pegada ecológica x biocapacidade do planeta","I","G","E"],
    [2014,"4","FG","obj","FG","Redes sociais, privacidade e processos seletivos de emprego","I","T","B"],
    [2014,"5","FG","obj","FG","Inovação de baixo custo na saúde e responsabilidade social","J","T","D"],
    [2014,"6","FG","obj","FG","Relações de gênero: jornada total de trabalho","J","G","C"],
    [2014,"7","FG","obj","FG","Mobilidade urbana: tempo de deslocamento casa-trabalho","J","B","E"],
    [2014,"8","FG","obj","FG","Industrialização, êxodo rural e transformação do espaço urbano","I","T","D"],
    [2014,"D1","FG","disc","FG","Mobilidade urbana e desenvolvimento sustentável: ações pró-bicicleta","E","B","-"],
    [2014,"D2","FG","disc","FG","Violência urbana: duas causas e dois fatores de prevenção","E","T","-"],
    [2014,"9","CE","obj","GP","PMBOK: EAP/WBS e pacotes de trabalho terceirizados","I","G","A"],
    [2014,"10","CE","obj","AL","Java: método recursivo de contagem e identificação do defeito","I","K","C"],
    [2014,"11","CE","obj","BD","SQL: EXCEPT, INNER JOIN e IS NULL sobre modelo ER","I","Q","A"],
    [2014,"12","CE","obj","SG","Governança de TI: plano de contingência e continuidade","C","S","C"],
    [2014,"13","CE","obj","SG","Legislação: Marco Civil da Internet (Lei 12.965/2014)","A","T","B"],
    [2014,"14","CE","obj","AL","Estrutura de dados: lista duplamente encadeada x árvores","J","K","A"],
    [2014,"15","CE","obj","IN","Sistemas distribuídos: transparência entre entidades","I","G","A"],
    [2014,"16","CE","obj","AL","Recursividade em C: soma dos elementos positivos de um vetor","X","K","C"],
    [2014,"17","CE","obj","OO","UML: casos de uso, generalização, include e extend","J","T","B"],
    [2014,"18","CE","obj","OO","Arquitetura: mainframe, cliente-servidor e três camadas","J","T","C"],
    [2014,"19","CE","obj","ES","Requisitos não funcionais x funcionais","J","T","B"],
    [2014,"20","CE","obj","AL","Árvore binária: percurso in-ordem","X","P","D"],
    [2014,"21","CE","obj","BD","Modelo lógico: entidade fraca, N:M, FK e relacionamento ternário","I","R","A"],
    [2014,"22","CE","obj","BD","Banco de dados: integridade semântica implementada por triggers","C","T","E"],
    [2014,"23","CE","obj","GP","Inovação, empreendedorismo e empreendedorismo social","J","T","D"],
    [2014,"24","CE","obj","ES","RUP: fases x fluxos de trabalho e momento dos diagramas","C","T","B"],
    [2014,"25","CE","obj","ES","Requisitos não funcionais: usabilidade, segurança e desempenho","C","T","C"],
    [2014,"26","CE","obj","IN","Redes: DNS, cache, IPv6 e banco de dados distribuído","J","T","D"],
    [2014,"27","CE","obj","OT","Arquitetura de computadores: barramentos de dados e endereços","X","T","E"],
    [2014,"28","CE","obj","ES","Testes de aplicação web: interface, usabilidade e compatibilidade","J","T","E"],
    [2014,"29","CE","obj","OO","Engenharia reversa: de código Java para diagrama de classes","I","K","A"],
    [2014,"30","CE","obj","ES","Gerência de configuração: auditoria, baseline e item de configuração","J","T","D"],
    [2014,"31","CE","obj","ES","Teste caixa-branca: caminhos independentes e complexidade ciclomática","I","G","C"],
    [2014,"32","CE","obj","IH","IHC: as três regras de ouro do projeto de interface","J","T","E"],
    [2014,"33","CE","obj","ES","Qualidade: V&V, gerência de configuração e gerenciamento de mudanças","J","T","B"],
    [2014,"34","CE","obj","GP","Gestão de projetos: rede de precedências e caminho crítico","X","B","D"],
    [2014,"35","CE","obj","ML","Lógica proposicional: negação de uma condicional","I","T","B"],
    [2014,"D3","CE","disc","OO","UML: diagrama de classes com composição e multiplicidade 10..15","E","S","-"],
    [2014,"D4","CE","disc","AL","Estrutura de dados: pilha — push, pop e palavra invertida","E","P","-"],
    [2014,"D5","CE","disc","AL","Algoritmos: teste de mesa com matrizes 3×3","X","P","-"],

    // ---------- 2017 ----------
    [2017,"1","FG","obj","FG","Brexit: contribuições ao orçamento da União Europeia","X","G","C"],
    [2017,"2","FG","obj","FG","Agricultura familiar, segurança alimentar e sustentabilidade","J","T","C"],
    [2017,"3","FG","obj","FG","Tarifação de energia elétrica e consumo de eletrodomésticos","X","B","B"],
    [2017,"4","FG","obj","FG","Televisão: fragmentação e excesso de informação","I","G","B"],
    [2017,"5","FG","obj","FG","Hidrogéis e polímeros superabsorventes na agricultura","I","G","C"],
    [2017,"6","FG","obj","FG","Imigração haitiana, xenofobia e discriminação social","I","T","E"],
    [2017,"7","FG","obj","FG","Patrimônio cultural imaterial: paneleiras de Goiabeiras","I","T","A"],
    [2017,"8","FG","obj","FG","ODS e Agenda 2030: economia, sociedade e biosfera","J","G","D"],
    [2017,"D1","FG","disc","FG","Sífilis congênita e relações de gênero: ações para o público masculino","E","T","-"],
    [2017,"D2","FG","disc","FG","Pessoas transgêneras: nome social e proposta de política pública","E","T","-"],
    [2017,"9","CE","obj","ML","Estatística descritiva: média, mediana, desvio padrão e quartil","X","B","B"],
    [2017,"10","CE","obj","ML","Álgebra booleana: tabela-verdade e precedência de operadores","X","B","C"],
    [2017,"11","CE","obj","OO","UML: diagrama de classes e multiplicidades como regras de negócio","I","U","C"],
    [2017,"12","CE","obj","ES","Requisitos: distinguir não funcionais de funcionais","C","S","D"],
    [2017,"13","CE","obj","ES","Qualidade de processo: modelo de maturidade CMMI","A","T","C"],
    [2017,"14","CE","obj","GP","Gestão de projetos: método do caminho crítico (CPM)","X","B","C"],
    [2017,"15","CE","obj","SG","Segurança: políticas de senha, backup e uso aceitável","E","S","X"],
    [2017,"16","CE","obj","OO","UML: classe abstrata, composição e auto-associação","I","U","A"],
    [2017,"17","CE","obj","ES","Manutenção de software e ciclo de vida em cascata","J","T","D"],
    [2017,"18","CE","obj","IN","Sistemas distribuídos: exemplos atuais","C","T","A"],
    [2017,"19","CE","obj","IN","Sistemas operacionais: multiprogramação e pseudoparalelismo","C","T","C"],
    [2017,"20","CE","obj","OO","UML: caso de uso com extend, ponto de extensão e include","I","U","E"],
    [2017,"21","CE","obj","ES","Modelos de processo: incremental, espiral e cascata","J","T","D"],
    [2017,"22","CE","obj","ES","Controle de versão: checkout, commit, conflito, tag e branch","J","S","B"],
    [2017,"23","CE","obj","ES","Testes e V&V: funcional, desempenho, aceitação e instalação","J","T","B"],
    [2017,"24","CE","obj","ES","Reengenharia de sistemas legados e refatoração para OO","J","S","E"],
    [2017,"25","CE","obj","AL","Árvore binária: percurso em pré-ordem em C++","I","K","A"],
    [2017,"26","CE","obj","OO","Padrões de projeto: Strategy, MVC e Adapter","I","K","A"],
    [2017,"27","CE","obj","OO","Padrão Strategy: interfaces, herança e composição","I","K","D"],
    [2017,"28","CE","obj","ES","Requisitos: atribuições da etapa de especificação","C","T","E"],
    [2017,"29","CE","obj","ML","Teoria dos conjuntos e lógica traduzidas em condicionais em C","I","K","D"],
    [2017,"30","CE","obj","OO","POO: polimorfismo, classe abstrata e ordem de execução","X","K","A"],
    [2017,"31","CE","obj","IH","IHC: segurança, usabilidade, confiabilidade e acessibilidade","J","T","B"],
    [2017,"32","CE","obj","BD","SQL: junção, SUM e GROUP BY a partir de diagrama ER","I","Q","C"],
    [2017,"33","CE","obj","AL","Ordenação: correção do defeito no insertion sort","X","P","D"],
    [2017,"34","CE","obj","BD","Modelo ER: cardinalidade, chave primária e participação","I","R","B"],
    [2017,"35","CE","obj","IH","Acessibilidade web: atributo alt e leitores de tela","E","K","C"],
    [2017,"D3","CE","disc","AL","Algoritmos: matriz 40×40 e vetor contador de produtos","E","P","-"],
    [2017,"D4","CE","disc","AL","Estrutura de dados: fila — desenfileirar e mostrarFila","E","P","-"],
    [2017,"D5","CE","disc","OO","UML: diagrama de classes a partir de protótipos de tela","E","S","-"],

    // ---------- 2021 ----------
    [2021,"1","FG","obj","FG","Sociologia: mobilidade social e desigualdade","I","T","E"],
    [2021,"2","FG","obj","FG","Segurança alimentar: desperdício de hortaliças e padrão estético","A","G","C"],
    [2021,"3","FG","obj","FG","Mobilidade urbana: bicicletas, ciclovias e qualidade de vida","J","G","B"],
    [2021,"4","FG","obj","FG","Mundo do trabalho: gig economy e proteção social","A","T","B"],
    [2021,"5","FG","obj","FG","Direitos humanos: suicídio entre crianças e adolescentes indígenas","J","G","A"],
    [2021,"6","FG","obj","FG","Covid-19: expectativa de vida e vulnerabilidade social","A","T","A"],
    [2021,"7","FG","obj","FG","Saúde e comunicação: busca de informação médica na internet","J","T","C"],
    [2021,"8","FG","obj","FG","Ciência política: democracia majoritária x consensual","J","T","D"],
    [2021,"D1","FG","disc","FG","Arte, cultura e censura: liberdade artística e duas ações educativas","E","T","-"],
    [2021,"D2","FG","disc","FG","Cidades inteligentes: sustentabilidade e proposta de intervenção","E","T","-"],
    [2021,"9","CE","obj","ES","Requisitos: funcional x não funcional","C","T","C"],
    [2021,"10","CE","obj","AL","C: matriz bidimensional e passagem por ponteiro","I","K","D"],
    [2021,"11","CE","obj","AL","Estrutura de dados: pilha encadeada, implementação do push","I","K","E"],
    [2021,"12","CE","obj","ES","Métodos ágeis: Scrum, XP com TDD e Kanban","J","S","C"],
    [2021,"13","CE","obj","AL","Estrutura de dados: rastreio de operações de pilha e fila","X","K","C"],
    [2021,"14","CE","obj","GP","Gerência de projetos: áreas de conhecimento e partes interessadas","E","S","E"],
    [2021,"15","CE","obj","OO","UML: classes com herança, agregação e classe de associação","I","U","B"],
    [2021,"16","CE","obj","OO","UML: diagrama de sequência com create e destruição de objetos","I","U","E"],
    [2021,"17","CE","obj","BD","SQL: INNER JOIN, AVG, GROUP BY e ORDER BY DESC","I","Q","C"],
    [2021,"18","CE","obj","ES","Requisitos: artefatos de elicitação, especificação e validação","C","S","A"],
    [2021,"19","CE","obj","OO","Arquitetura de software: monolítica, MVC e microsserviços","J","T","A"],
    [2021,"20","CE","obj","IH","IHC e web: usabilidade, responsividade e design participativo","J","S","E"],
    [2021,"21","CE","obj","ES","Gerência de configuração: identificação, controle e auditoria","C","T","B"],
    [2021,"22","CE","obj","ES","Gerência de configuração: controle de versão e relatório de status","J","T","A"],
    [2021,"23","CE","obj","ES","Manutenção de software e sistemas legados","I","G","B"],
    [2021,"24","CE","obj","ES","Testes: unitário, caixa-branca e preta, carga e teste alfa","J","S","D"],
    [2021,"25","CE","obj","ES","Modelos de processo: cascata, espiral, incremental e RAD","J","S","E"],
    [2021,"26","CE","obj","SG","Legislação: LGPD (Lei 13.709/2018) e seus fundamentos","C","T","E"],
    [2021,"27","CE","obj","OT","Sistemas de numeração: conversão entre bases 2, 8, 10 e 16","X","B","C"],
    [2021,"28","CE","obj","IN","Sistemas operacionais: gerência de memória e proteção de processos","C","T","B"],
    [2021,"29","CE","obj","AL","Algoritmos: matriz 3×5 e somatório por linha","X","P","D"],
    [2021,"30","CE","obj","IN","Redes: endereçamento IP, máscara de sub-rede e gateway","E","G","C"],
    [2021,"31","CE","obj","OO","UML: casos de uso com include, extend e generalização","I","U","D"],
    [2021,"32","CE","obj","GP","Empreendedorismo: Business Model Canvas, startups e MVP","C","T","B"],
    [2021,"33","CE","obj","ES","Qualidade de processo: CMMi e maturidade da capacidade","J","T","D"],
    [2021,"34","CE","obj","OT","Inteligência artificial: sistemas especialistas e regras de produção","I","P","A"],
    [2021,"35","CE","obj","ML","Lógica de predicados x implementação em C","J","K","A"],
    [2021,"D3","CE","disc","AL","Algoritmos: vetor de 1000 alturas — maior, menor, média e contagem","E","P","-"],
    [2021,"D4","CE","disc","OO","UML: diagrama de classes a partir de histórias de usuário","E","S","-"],
    [2021,"D5","CE","disc","AL","Estrutura de dados: lista encadeada com inserção por prioridade","E","K","-"]
  ];

  function objetivas(bloco) {
    return D.filter(function (r) {
      return r[3] === "obj" && (!bloco || r[2] === bloco);
    });
  }

  /* Proporção por habilidade, em pontos percentuais. */
  function mix(bloco) {
    var linhas = objetivas(bloco), c = {};
    linhas.forEach(function (r) { c[r[6]] = (c[r[6]] || 0) + 1; });
    var p = {};
    Object.keys(c).forEach(function (k) { p[k] = 100 * c[k] / linhas.length; });
    return p;
  }

  /* Converte a proporção em n vagas inteiras pelo método dos maiores restos, que é
     o que impede 12,5% de 15 vagas virar zero por truncamento. A ordem de desempate
     é estável: maior resto primeiro, e entre restos iguais, a habilidade mais
     frequente no acervo. */
  function cota(bloco, n) {
    var p = mix(bloco);
    var chaves = Object.keys(p).sort(function (a, b) { return p[b] - p[a]; });
    var bruto = {}, saida = {}, soma = 0;
    chaves.forEach(function (k) {
      bruto[k] = p[k] * n / 100;
      saida[k] = Math.floor(bruto[k]);
      soma += saida[k];
    });
    var porResto = chaves.slice().sort(function (a, b) {
      var d = (bruto[b] - saida[b]) - (bruto[a] - saida[a]);
      return d !== 0 ? d : p[b] - p[a];
    });
    for (var i = 0; soma < n; i++, soma++) saida[porResto[i % porResto.length]]++;
    return saida;
  }

  global.ACERVO = {
    linhas: D,
    AREA: AREA, HAB: HAB, FMT: FMT,
    objetivas: objetivas,
    mix: mix,
    cota: cota
  };
})(window);
