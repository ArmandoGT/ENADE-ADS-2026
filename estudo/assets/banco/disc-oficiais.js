/* As 24 discursivas oficiais utilizáveis do acervo (2008–2021).
   A 2008/40 foi anulada e não entra.

   pesosOficiais = true  → os valores de cada item estão impressos no caderno de prova
                           e/ou declarados no padrão de resposta do Inep.
   pesosOficiais = false → o valor total é o padrão do exame (10,0), mas a divisão entre
                           os quesitos é inferência minha a partir do que o padrão exige.

   pagCaderno → página em estudo/paginas/ANO-PP.png
   pagPadrao  → página em estudo/padroes/ANO-PP.png  (null quando o acervo não traz)
*/
window.DISC_OFICIAIS = [

/* ================= 2008 ================= */
{
  id: "2008-9", origem: "oficial", ano: 2008, num: "9", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Direitos humanos: integralidade e indivisibilidade",
  comando: "A partir dos 60 anos da Declaração Universal dos Direitos Humanos, discorra sobre a integralidade e a indivisibilidade dos direitos, relacionando moradia digna, bem-estar e trabalho como ação para a vida. Texto de 8 a 10 linhas.",
  pagCaderno: 7, pagPadrao: null, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão de resposta de 2008 disponível no acervo cobre apenas as discursivas 38 e 39. Para esta questão não há rubrica oficial publicada — a divisão abaixo é minha.",
  rubrica: [
    { item: "Relaciona os direitos citados (moradia digna, bem-estar, trabalho) à Declaração Universal", pontos: 3 },
    { item: "Explora a integralidade e a indivisibilidade: os direitos se sustentam mutuamente e não podem ser hierarquizados", pontos: 4 },
    { item: "Constrói argumentação própria, e não apenas paráfrase do texto motivador", pontos: 2 },
    { item: "Respeita o limite de 8 a 10 linhas", pontos: 1 }
  ]
},
{
  id: "2008-10", origem: "oficial", ano: 2008, num: "10", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Educação brasileira: avaliações oficiais x percepção social",
  comando: "Redija um texto dissertativo-argumentativo, com dois argumentos, sobre a contradição entre os resultados das avaliações oficiais (Enem, PISA, IDEB) e a percepção de alunos, pais e professores sobre a escola. De 8 a 10 linhas.",
  pagCaderno: 8, pagPadrao: null, valor: 10, pesosOficiais: false,
  notaPadrao: "Sem rubrica oficial publicada no acervo para esta questão. A divisão abaixo é minha.",
  rubrica: [
    { item: "Identifica e nomeia a contradição entre o dado das avaliações e a percepção dos envolvidos", pontos: 3 },
    { item: "Apresenta o primeiro argumento, sustentado nos textos motivadores", pontos: 2.5 },
    { item: "Apresenta o segundo argumento, distinto do primeiro", pontos: 2.5 },
    { item: "Mantém estrutura dissertativa e o limite de 8 a 10 linhas", pontos: 2 }
  ]
},
{
  id: "2008-38", origem: "oficial", ano: 2008, num: "38", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: casos de uso, descrição de fluxo e tratamento de exceções",
  comando: "Montadora de automóveis: gerente ou operador cadastram partes e consultam disponibilidade; abaixo do mínimo, o sistema envia pedido ao fornecedor. (a) Desenhe o diagrama de casos de uso — 5,0. (b) Descreva um caso de uso em termos de ator e fluxo principal — 2,0. (c) Descreva um tratamento de exceção para cada caso de uso — 3,0.",
  pagCaderno: 19, pagPadrao: 1, valor: 10, pesosOficiais: true,
  notaPadrao: "Rubrica integralmente oficial: os valores por item vêm do caderno e os quesitos de 1 ponto cada vêm do padrão de resposta.",
  rubrica: [
    { item: "(a) Identificação dos atores", pontos: 1 },
    { item: "(a) Identificação de herança entre atores", pontos: 1 },
    { item: "(a) Relacionamento de ator com caso de uso", pontos: 1 },
    { item: "(a) Relacionamento entre casos de uso, com «include» e «extend»", pontos: 1 },
    { item: "(a) Direção correta dos relacionamentos", pontos: 1 },
    { item: "(b) Descreveu as ações do ator", pontos: 1 },
    { item: "(b) Descreveu as ações do sistema", pontos: 1 },
    { item: "(c) Pelo menos um fluxo alternativo para cada um dos três casos de uso", pontos: 3 }
  ]
},
{
  id: "2008-39", origem: "oficial", ano: 2008, num: "39", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: diagrama de classes com atributos, métodos e visibilidade",
  comando: "Montadora que produz carros de luxo e esportivos, com partes, fornecedores e características. (a) Identifique as classes — 2,0. (b) Desenhe o diagrama de classes com nomes e relacionamentos — 3,0. (c) Escreva atributos e métodos com assinatura completa e símbolos de visibilidade da UML, respeitando o encapsulamento — 5,0.",
  pagCaderno: 20, pagPadrao: 2, valor: 10, pesosOficiais: true,
  notaPadrao: "Atenção: o documento oficial do padrão de 2008 traz, sob o rótulo “Discursiva 39”, a rubrica de um preenchimento de matriz — que não corresponde a esta questão. O caderno mostra que a 39 é o diagrama de classes e que a matriz era a questão 40, anulada. Há um erro de numeração no documento do Inep. Os valores por item abaixo vêm do próprio caderno e são oficiais; a divisão dentro de cada item é minha.",
  rubrica: [
    { item: "(a) Identificou as classes do domínio: Carro, Parte, Fornecedor, CarroLuxo, CarroEsporte", pontos: 2 },
    { item: "(b) Desenhou o diagrama com os relacionamentos entre as classes", pontos: 1.5 },
    { item: "(b) Usou generalização para distinguir carro de luxo e carro esporte", pontos: 1.5 },
    { item: "(c) Atributos corretos em cada classe (marca, modelo, chassi, ano; nome, quantidade, cor, preço; CNPJ, razão social)", pontos: 2 },
    { item: "(c) Métodos com assinatura completa", pontos: 1.5 },
    { item: "(c) Símbolos de visibilidade da UML aplicados, com atributos encapsulados", pontos: 1.5 }
  ]
},

/* ================= 2011 ================= */
{
  id: "2011-D1", origem: "oficial", ano: 2011, num: "D1", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Educação a distância: três vantagens",
  comando: "A partir dos dados do Censo da Educação Superior, enumere e justifique três vantagens da modalidade de educação a distância.",
  pagCaderno: 7, pagPadrao: 1, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão oficial lista dez vantagens aceitas, mas não atribui pontos a cada uma. A divisão em três blocos iguais é minha.",
  rubrica: [
    { item: "Primeira vantagem, entre as aceitas: flexibilidade de horário e local; custo menor; capilaridade; democratização de acesso; troca de experiência a distância; educação permanente; inclusão digital; formação de quem não pode frequentar escola regular; qualificação de professores; inclusão de pessoas com comprometimento motor", pontos: 3.3 },
    { item: "Segunda vantagem, distinta da primeira e dentro do mesmo rol", pontos: 3.3 },
    { item: "Terceira vantagem, distinta das anteriores", pontos: 3.4 }
  ]
},
{
  id: "2011-D2", origem: "oficial", ano: 2011, num: "D2", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Analfabetismo, empregabilidade e políticas de erradicação",
  comando: "A partir dos dados do SIS 2010/PNAD, redija um texto sobre o analfabetismo e as desigualdades sociais, relacionando-o à dificuldade de obtenção de emprego e avaliando as políticas de erradicação.",
  pagCaderno: 8, pagPadrao: 1, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão oficial exige três movimentos no texto, mas não atribui pontos a cada um. A divisão é minha.",
  rubrica: [
    { item: "Identifica e analisa as desigualdades sociais acentuadas pelo analfabetismo, examinando criticamente o quadro da educação", pontos: 3.5 },
    { item: "Estabelece a relação entre analfabetismo e dificuldade de obtenção de emprego, apontando agentes sociais e alternativas", pontos: 3.5 },
    { item: "Avalia avanços e deficiências das políticas de erradicação, concluindo que as ações, embora importantes, ainda são insuficientes", pontos: 3 }
  ]
},
{
  id: "2011-D3", origem: "oficial", ano: 2011, num: "D3", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: diagrama de classes de domínio e requisitos funcionais",
  comando: "A partir do cenário do jogo de dados: (a) elabore o diagrama de classes de domínio; (b) liste pelo menos três requisitos funcionais do sistema.",
  pagCaderno: 19, pagPadrao: 2, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão oficial descreve os elementos esperados e admite variações na descrição dos requisitos, mas não atribui pontos. A divisão é minha.",
  rubrica: [
    { item: "(a) Destacou as classes JogoDados e Dado", pontos: 2 },
    { item: "(a) Modelou Dado como parte de JogoDados", pontos: 1.5 },
    { item: "(a) Face como atributo de negócio da classe Dado", pontos: 1.5 },
    { item: "(a) Ignorou classes que não são de domínio (interface gráfica, controle)", pontos: 1 },
    { item: "(b) Primeiro requisito funcional, entre: iniciar jogo, lançar dados, verificar resultado, mostrar valores das faces, parar jogo, exibir lançamentos restantes", pontos: 1.3 },
    { item: "(b) Segundo requisito funcional, distinto", pontos: 1.3 },
    { item: "(b) Terceiro requisito funcional, distinto", pontos: 1.4 }
  ]
},
{
  id: "2011-D4", origem: "oficial", ano: 2011, num: "D4", bloco: "CE", area: "AL", tipo: "algoritmo",
  tema: "Teste de mesa de vetores vetA e vetB",
  comando: "Faça o teste de mesa do algoritmo e informe o conteúdo dos vetores vetA e vetB: (a) ao final da linha 12; (b) ao final da linha 19.",
  pagCaderno: 20, pagPadrao: 2, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão oficial dá os valores exatos, mas não atribui pontos. A divisão em dois blocos iguais é minha.",
  rubrica: [
    { item: "(a) vetA ao final da linha 12: 2 2 6 4 10 6 14 8 18 10", pontos: 2.5 },
    { item: "(a) vetB ao final da linha 12: 0 0 0 0 0 0 0 0 0 0", pontos: 2.5 },
    { item: "(b) vetA ao final da linha 19: 1 2 3 4 5 6 7 8 9 10", pontos: 2.5 },
    { item: "(b) vetB ao final da linha 19: 2 0 4 0 6 0 8 0 10 0", pontos: 2.5 }
  ]
},
{
  id: "2011-D5", origem: "oficial", ano: 2011, num: "D5", bloco: "CE", area: "AL", tipo: "algoritmo",
  tema: "Algoritmo: progressão geométrica sobre tabuleiro",
  comando: "A partir da lenda dos grãos de trigo no tabuleiro: (a) construa o algoritmo que calcula, armazena e escreve a quantidade de grãos de cada casa; (b) some e escreva o total de grãos.",
  pagCaderno: 21, pagPadrao: 3, valor: 10, pesosOficiais: false,
  notaPadrao: "O padrão oficial indica onde está a resposta de cada item mas não atribui pontos. A divisão é minha. O padrão declara que os comentários no código são dispensáveis.",
  rubrica: [
    { item: "(a) Declarou a estrutura de armazenamento (vetor de 16 posições)", pontos: 1.5 },
    { item: "(a) Calculou corretamente as potências de 2 para cada casa", pontos: 2.5 },
    { item: "(a) Armazenou os valores na estrutura e os escreveu", pontos: 2 },
    { item: "(b) Acumulou o total em variável própria, funcionando corretamente", pontos: 2.5 },
    { item: "(b) Escreveu o total ao final", pontos: 1.5 }
  ]
},

/* ================= 2014 ================= */
{
  id: "2014-D1", origem: "oficial", ano: 2014, num: "D1", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Mobilidade urbana e desenvolvimento sustentável",
  comando: "Redija um texto dissertativo em que: (a) aborde as consequências do uso mais frequente do transporte motorizado — 5,0; (b) apresente duas ações de intervenção para incrementar o uso da bicicleta — 5,0.",
  pagCaderno: 2, pagPadrao: 1, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno. O padrão exige pelo menos duas consequências e exatamente duas intervenções, a partir de róis fechados.",
  rubrica: [
    { item: "(a) Primeira consequência, entre: emissão de poluentes e gases de efeito estufa; poluição visual e sonora; aumento de temperatura; consumo de combustíveis; problemas de saúde; congestionamentos; perda de áreas verdes; impermeabilização e enchentes; custo de manutenção das cidades", pontos: 2.5 },
    { item: "(a) Segunda consequência, distinta da primeira", pontos: 2.5 },
    { item: "(b) Primeira intervenção, entre: ciclovias e ciclofaixas; integração bicicleta–metrô–ônibus; pontos de aluguel; bicicletários; segurança pública; políticas de incentivo e educação ambiental; crédito e redução de custo das bicicletas", pontos: 2.5 },
    { item: "(b) Segunda intervenção, distinta da primeira", pontos: 2.5 }
  ]
},
{
  id: "2014-D2", origem: "oficial", ano: 2014, num: "D2", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Violência urbana: causas e prevenção",
  comando: "A partir da notícia sobre agressão a jovem morador de rua: (a) analise duas causas desse tipo de violência — 7,0; (b) mencione dois fatores que contribuiriam para evitar o fato — 3,0.",
  pagCaderno: 3, pagPadrao: 3, valor: 10, pesosOficiais: true,
  notaPadrao: "Distribuição assimétrica 7,0 / 3,0 declarada no caderno — a análise das causas pesa mais que a proposta preventiva. O padrão remete ainda ao perfil de formação geral da Portaria Inep 255/2014: atitude ética, comprometimento social e análise crítica da realidade.",
  rubrica: [
    { item: "(a) Primeira causa analisada (não apenas citada), entre: educação precária e evasão; desigualdades socioculturais; desemprego e falta de qualificação; segurança pública precária; drogas; desvalorização da vida; banalização da violência; impunidade; ausência de políticas sociais; desconhecimento de direitos humanos; desestruturação familiar", pontos: 3.5 },
    { item: "(a) Segunda causa, distinta da primeira, também analisada", pontos: 3.5 },
    { item: "(b) Primeiro fator de prevenção, entre: segurança pública efetiva; políticas socioeconômicas; consciência cidadã; distribuição de renda; melhoria da educação; emprego e qualificação; prevenção às drogas; eficácia do sistema judiciário; revisão da legislação penal; valorização de princípios éticos", pontos: 1.5 },
    { item: "(b) Segundo fator, distinto do primeiro", pontos: 1.5 }
  ]
},
{
  id: "2014-D3", origem: "oficial", ano: 2014, num: "D3", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: diagrama de classes de revista científica",
  comando: "Elabore o diagrama de classes para revista científica, edições e artigos, com atributos, associações e multiplicidades. Cada edição contém de 10 a 15 artigos.",
  pagCaderno: 9, pagPadrao: 5, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0 declarado no caderno; a divisão entre quesitos é minha. O padrão registra tolerância explícita: aceita multiplicidade 1..* no lugar de 0..* no relacionamento “publica”.",
  rubrica: [
    { item: "Classe Revista_Cientifica com titulo_revista, issn_revista e periodicidade", pontos: 2 },
    { item: "Classe Edicao com numero_edicao, volume_edicao e data_edicao", pontos: 2 },
    { item: "Classe Artigo com titulo_artigo e nome_autor", pontos: 2 },
    { item: "Relacionamento de composição “publica” entre Revista e Edicao, com multiplicidade 0..* (ou 1..*)", pontos: 2 },
    { item: "Relacionamento de composição “contem” entre Edicao e Artigo, com multiplicidade 10..15", pontos: 2 }
  ]
},
{
  id: "2014-D4", origem: "oficial", ano: 2014, num: "D4", bloco: "CE", area: "AL", tipo: "estrutura",
  tema: "Estrutura de dados: pilha, push, pop e palavra invertida",
  comando: "Sobre um vetor pilha[1..50]: (a) escreva a rotina push — 3,0; (b) a rotina pop — 3,0; (c) a rotina que lê uma palavra e a imprime invertida usando a pilha — 4,0.",
  pagCaderno: 10, pagPadrao: 7, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno. O padrão aceita português estruturado, Pascal, C ou Java, e aceita solução alternativa para a inversão sem usar push e pop.",
  rubrica: [
    { item: "(a) push testa pilha cheia (topo >= 50) e emite a mensagem antes de inserir", pontos: 1.5 },
    { item: "(a) push incrementa o topo e grava o caractere na posição correta", pontos: 1.5 },
    { item: "(b) pop testa pilha vazia (topo <= 0) e emite a mensagem", pontos: 1.5 },
    { item: "(b) pop devolve o elemento do topo e só então decrementa", pontos: 1.5 },
    { item: "(c) Inicializa o topo, lê a palavra e empilha cada caractere", pontos: 2 },
    { item: "(c) Desempilha imprimindo, produzindo a palavra invertida", pontos: 2 }
  ]
},
{
  id: "2014-D5", origem: "oficial", ano: 2014, num: "D5", bloco: "CE", area: "AL", tipo: "algoritmo",
  tema: "Teste de mesa com matrizes 3×3",
  comando: "Informe o conteúdo das matrizes m1 e m2: (a) ao término da linha 12 — 5,0; (b) ao término da linha 21 — 5,0.",
  pagCaderno: 11, pagPadrao: 9, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno. Resposta exata, célula por célula.",
  rubrica: [
    { item: "(a) m1 após a linha 12: 2 2 2 / 3 3 3 / 4 4 4", pontos: 2.5 },
    { item: "(a) m2 após a linha 12: 2 3 4 / 2 3 4 / 2 3 4", pontos: 2.5 },
    { item: "(b) m1 após a linha 21: 0 2 2 / 3 0 3 / 4 4 0", pontos: 2.5 },
    { item: "(b) m2 após a linha 21: 2 1 1 / 1 3 1 / 1 1 4", pontos: 2.5 }
  ]
},

/* ================= 2017 ================= */
{
  id: "2017-D1", origem: "oficial", ano: 2017, num: "D1", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Sífilis congênita e relações de gênero",
  comando: "Redija um texto abordando a vulnerabilidade das mulheres às IST e o papel social do homem na prevenção, e apresente duas ações voltadas ao público masculino no âmbito das políticas de saúde ou de educação.",
  pagCaderno: 2, pagPadrao: 2, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0. O padrão detalha o eixo argumentativo esperado e lista oito ações aceitas, exigindo pelo menos duas, mas não atribui pontos. A divisão é minha.",
  rubrica: [
    { item: "Aponta a proporção crescente de casos no segmento feminino como evidência epidemiológica", pontos: 1.5 },
    { item: "Explica a vulnerabilidade feminina por fatores sociais e culturais: padrões de comportamento, crenças, relações de poder", pontos: 2 },
    { item: "Aborda a hierarquia de poder que limita o espaço da mulher para negociar o uso do preservativo", pontos: 1.5 },
    { item: "Explica por que os homens não buscam atenção primária e como isso realimenta a reinfecção das gestantes", pontos: 2 },
    { item: "Primeira ação voltada ao público masculino, entre as oito do rol oficial", pontos: 1.5 },
    { item: "Segunda ação, distinta da primeira", pontos: 1.5 }
  ]
},
{
  id: "2017-D2", origem: "oficial", ano: 2017, num: "D2", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Nome social de pessoas transgêneras",
  comando: "Discorra sobre a importância do nome para as pessoas transgêneras e proponha uma medida, no âmbito das políticas públicas, que facilite o acesso dessas pessoas à cidadania.",
  pagCaderno: 4, pagPadrao: 4, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão lista sete políticas aceitas, exigindo uma, mas não atribui pontos. A divisão é minha.",
  rubrica: [
    { item: "Menciona que o nome se materializa nos documentos oficiais de identificação", pontos: 2 },
    { item: "Explica que a incompatibilidade com a identidade de gênero gera problemas de acesso à cidadania", pontos: 3 },
    { item: "Cita ao menos dois campos afetados: saúde, educação, direito ao voto, inserção no mundo do trabalho", pontos: 2 },
    { item: "Propõe uma medida de política pública, entre: facilitar a mudança de documentos; elaborar leis; ampliar o acesso à saúde pelo SUS; obrigar o uso do nome social; campanhas de conscientização; ações afirmativas; sanções a quem violar o direito à autodeterminação", pontos: 3 }
  ]
},
{
  id: "2017-D3", origem: "oficial", ano: 2017, num: "D3", bloco: "CE", area: "AL", tipo: "algoritmo",
  tema: "Matriz 40×40 de produtos com vetor contador",
  comando: "Sobre a estante de cosméticos representada por uma matriz 40×40: (a) escreva o trecho que lê os códigos dos produtos e os armazena na matriz — 4,0; (b) escreva o trecho que conta e imprime a quantidade de caixas de cada tipo de produto — 6,0.",
  pagCaderno: 13, pagPadrao: 5, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno. O padrão aceita a solução com ou sem validação da entrada, ajustando o trecho de contagem conforme a escolha.",
  rubrica: [
    { item: "(a) Duplo laço percorrendo i e j de 1 até 40", pontos: 2 },
    { item: "(a) Lê e armazena o código em Estante[i][j] (validar a entrada é opcional no padrão)", pontos: 2 },
    { item: "(b) Usa o próprio valor lido como índice: Contador[Estante[i][j]] recebe Contador[Estante[i][j]] + 1", pontos: 3 },
    { item: "(b) Laço final percorrendo os tipos e imprimindo nome do produto e quantidade", pontos: 2 },
    { item: "(b) Vetor contador inicializado em zero antes do uso", pontos: 1 }
  ]
},
{
  id: "2017-D4", origem: "oficial", ano: 2017, num: "D4", bloco: "CE", area: "AL", tipo: "estrutura",
  tema: "Estrutura de dados: fila de caminhoneiros",
  comando: "Sobre a fila caminhoneiros[1..10] já parcialmente implementada: (a) implemente a função desenfileirar, que remove e retorna um elemento ou informa fila vazia — 6,0; (b) implemente o procedimento mostrarFila — 4,0.",
  pagCaderno: 14, pagPadrao: 8, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno — o item que manipula a estrutura vale mais que o que exibe. O padrão aceita duas versões de mostrarFila, com ou sem tratamento de fila vazia.",
  rubrica: [
    { item: "(a) Testa total = 0 e devolve a mensagem “Fila vazia”", pontos: 1.5 },
    { item: "(a) Guarda o elemento da posição 1 antes de remover", pontos: 1.5 },
    { item: "(a) Desloca os demais elementos uma posição à esquerda e decrementa total", pontos: 2 },
    { item: "(a) Retorna o elemento removido", pontos: 1 },
    { item: "(b) Percorre de 1 até total imprimindo os elementos", pontos: 4 }
  ]
},
{
  id: "2017-D5", origem: "oficial", ano: 2017, num: "D5", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: diagrama de classes de rede social de projetos",
  comando: "A partir dos protótipos de tela e da lista de requisitos, elabore o diagrama de classes do sistema de projetos, com colaboradores, categorias de projeto, comentários e departamentos.",
  pagCaderno: 16, pagPadrao: 10, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão enumera quatro expectativas e declara tolerâncias (agregação no lugar das associações; classe comum no lugar da classe de associação). A divisão em pontos é minha.",
  rubrica: [
    { item: "Usa herança para distinguir as categorias de projeto (Melhoria e Social)", pontos: 2.5 },
    { item: "Especifica as duas associações entre Colaborador e Projeto, com os papéis coordenador e participante (agregação é aceita se Projeto for o todo)", pontos: 2.5 },
    { item: "Cria classe de associação Comentario com texto e dataHora (classe comum associada às duas também é aceita)", pontos: 2.5 },
    { item: "Cria a classe Departamento, exigida pelo requisito de seleção em lista", pontos: 1.5 },
    { item: "Atributos das classes Colaborador e Projeto conforme os protótipos de tela", pontos: 1 }
  ]
},

/* ================= 2021 ================= */
{
  id: "2021-D1", origem: "oficial", ano: 2021, num: "D1", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Arte, cultura e censura",
  comando: "Discorra sobre a relação entre arte, cultura e censura à luz da liberdade artística garantida pela Constituição de 1988, e apresente duas ações educativas que contribuam para minimizar essas tensões. Máximo de 15 linhas.",
  pagCaderno: 2, pagPadrao: 2, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão descreve o raciocínio esperado e dá exemplos de ações num rol aberto (“etc.”), sem atribuir pontos. A divisão é minha.",
  rubrica: [
    { item: "Reflete sobre as tensões entre arte e cultura no Brasil contemporâneo, a partir do texto motivador", pontos: 3 },
    { item: "Mobiliza a liberdade artística do artigo 5º, IX, da Constituição", pontos: 2 },
    { item: "Conclui pela ilegitimidade dos movimentos de censura", pontos: 2 },
    { item: "Primeira ação educativa (encontros de artistas em escolas, visitas a museus, debates públicos, formação de público)", pontos: 1.5 },
    { item: "Segunda ação educativa, distinta da primeira", pontos: 1.5 }
  ]
},
{
  id: "2021-D2", origem: "oficial", ano: 2021, num: "D2", bloco: "FG", area: "FG", tipo: "fg",
  tema: "Cidades inteligentes e desenvolvimento sustentável",
  comando: "(a) Explique de que modo as cidades inteligentes podem contribuir para a melhoria das questões relacionadas ao desenvolvimento sustentável — 5,0. (b) Apresente uma proposta de intervenção urbana que gere impacto social — 5,0.",
  pagCaderno: 4, pagPadrao: 2, valor: 10, pesosOficiais: true,
  notaPadrao: "Valores por item declarados no caderno. O padrão traz uma resposta-âncora para (a) e um rol aberto de exemplos para (b).",
  rubrica: [
    { item: "(a) Menciona a diminuição do impacto ambiental dos aglomerados urbanos", pontos: 2 },
    { item: "(a) Explica o mecanismo: tecnologia usada para modernizar infraestrutura e serviços", pontos: 1.5 },
    { item: "(a) Exemplifica com redução do consumo de energia e da emissão de CO₂", pontos: 1.5 },
    { item: "(b) Apresenta uma proposta concreta de intervenção urbana", pontos: 3 },
    { item: "(b) A proposta gera impacto social identificável (aplicativos de carona ou de serviços; plano de ação para grupos menos favorecidos; artefatos urbanos de mobilidade ou passagem de fauna)", pontos: 2 }
  ]
},
{
  id: "2021-D3", origem: "oficial", ano: 2021, num: "D3", bloco: "CE", area: "AL", tipo: "algoritmo",
  tema: "Vetor de 1000 alturas: maior, menor, média e contagem",
  comando: "Desenvolva o código, em pseudocódigo ou linguagem de programação, que a partir de 1 000 alturas informe: a maior, a menor, a média e quantas pessoas estão abaixo da média.",
  pagCaderno: 14, pagPadrao: 3, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão apresenta o código-modelo integral sem subdividir em pontos. A divisão é minha, seguindo as quatro saídas exigidas.",
  rubrica: [
    { item: "Declara as variáveis com tipos coerentes (vetor de 1000 posições, acumulador e média reais)", pontos: 1 },
    { item: "Inicializa maior, menor e total com o primeiro elemento lido, e não com zero", pontos: 2 },
    { item: "Percorre lendo e acumulando as 1 000 alturas", pontos: 2 },
    { item: "Calcula a média dividindo o total por 1 000", pontos: 1.5 },
    { item: "Faz um segundo percurso para contar quantos estão abaixo da média", pontos: 2 },
    { item: "Escreve as quatro saídas: maior, menor, média e quantidade abaixo da média", pontos: 1.5 }
  ]
},
{
  id: "2021-D4", origem: "oficial", ano: 2021, num: "D4", bloco: "CE", area: "OO", tipo: "uml",
  tema: "UML: diagrama de classes de reserva de passagens",
  comando: "A partir das histórias de usuário, elabore o diagrama de classes com no máximo seis classes, atributos, associações com multiplicidades, reservas de ida e volta como generalização, e pelo menos três métodos na classe Reserva.",
  pagCaderno: 15, pagPadrao: 4, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão apresenta o diagrama-modelo com as classes, atributos, métodos e associações mínimos, sem subdividir em pontos. A divisão é minha, seguindo as restrições declaradas no comando.",
  rubrica: [
    { item: "Respeita o limite de no máximo seis classes", pontos: 1 },
    { item: "Classe CLIENTE com CPF, Nome, Email, Telefone e Endereco", pontos: 1.5 },
    { item: "Classe RESERVA com Codigo, Status e Valor_Total", pontos: 1.5 },
    { item: "Pelo menos três métodos em RESERVA, como Solicitar(), Pagar() e Emitir_Check_In()", pontos: 2 },
    { item: "Generalização de RESERVA para RESERVA_IDA e RESERVA_VOLTA, com seus atributos próprios", pontos: 2 },
    { item: "Multiplicidades declaradas nas associações (Cliente 1..1 : 0..* Reserva; Forma_Pagamento; Cidade pelos papéis Ida e Volta)", pontos: 2 }
  ]
},
{
  id: "2021-D5", origem: "oficial", ano: 2021, num: "D5", bloco: "CE", area: "AL", tipo: "estrutura",
  tema: "Lista encadeada: inserção por prioridade na triagem hospitalar",
  comando: "Escreva a função inserir_prioridade que insere um novo nó na fila de triagem, mantendo os cartões amarelos à frente dos verdes, e devolve a cabeça da lista.",
  pagCaderno: 16, pagPadrao: 5, valor: 10, pesosOficiais: false,
  notaPadrao: "Item único de 10,0; o padrão explicita dois fundamentos lógicos e apresenta a função-modelo, sem subdividir em pontos. A divisão é minha. Observação: o padrão oficial usa o campo “cartao” enquanto o enunciado declara “cor” — inconsistência do próprio documento do Inep.",
  rubrica: [
    { item: "Trata a inserção no início: quando ainda não há cartão amarelo na fila, o novo nó vira o primeiro", pontos: 3 },
    { item: "Percorre com dois ponteiros (anterior e atual) enquanto houver cartões amarelos", pontos: 2.5 },
    { item: "Religa as referências corretamente: anterior aponta para o novo e o novo aponta para o atual", pontos: 2.5 },
    { item: "Reconhece que inserção no meio e no fim usam a mesma lógica", pontos: 1 },
    { item: "Devolve a cabeça da lista, que pode ter mudado", pontos: 1 }
  ]
}

];
