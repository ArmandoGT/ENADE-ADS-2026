/* Banco IA — 36 discursivas autorais, escritas prevendo o ENADE 2026.
   Seguem o molde dos padrões oficiais: cota numérica de itens na formação geral,
   e produção de artefato (diagrama, código, teste de mesa) no componente específico.

   tipo: "fg" | "uml" (modelagem) | "estrutura" | "algoritmo"
   A rubrica é minha — não há padrão oficial para questão que eu mesmo escrevi.
*/
window.BANCO_IA_DISC = [

/* ================= formação geral (12) ================= */
{
  id: "ia-fg-01", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Inteligência artificial e mundo do trabalho",
  enunciado: "A adoção de inteligência artificial generativa vem alterando tarefas em diversas ocupações, com efeitos desiguais entre setores e níveis de renda. Redija um texto dissertativo em que você: a) analise dois impactos dessa transformação sobre o mundo do trabalho; b) apresente duas ações, no âmbito de políticas públicas ou educacionais, capazes de reduzir os efeitos negativos sobre os trabalhadores mais vulneráveis.",
  codigo: null,
  rubrica: [
    { item: "(a) Primeiro impacto analisado, entre: substituição de tarefas rotineiras; exigência de requalificação; ampliação da desigualdade entre quem domina e quem não domina a ferramenta; mudança na natureza da supervisão; pressão sobre remuneração", pontos: 2.5 },
    { item: "(a) Segundo impacto, distinto do primeiro e também analisado, não apenas citado", pontos: 2.5 },
    { item: "(b) Primeira ação concreta: requalificação pública, letramento em IA no currículo, formação continuada, proteção social na transição, regulação do uso em seleção", pontos: 2.5 },
    { item: "(b) Segunda ação, distinta da primeira", pontos: 2.5 }
  ]
},
{
  id: "ia-fg-02", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Mudanças climáticas e desigualdade urbana",
  enunciado: "Eventos climáticos extremos têm atingido de forma desigual os diferentes grupos sociais nas cidades brasileiras. Redija um texto em que você: a) explique por que as populações de menor renda são as mais afetadas; b) proponha duas intervenções urbanas capazes de reduzir essa vulnerabilidade.",
  codigo: null,
  rubrica: [
    { item: "(a) Relaciona a ocupação de áreas de risco e a precariedade da moradia", pontos: 2 },
    { item: "(a) Aponta a ausência de drenagem e saneamento e a menor capacidade de recuperação após o evento", pontos: 2 },
    { item: "(a) Mobiliza corretamente a noção de vulnerabilidade socioambiental ou de justiça climática", pontos: 1 },
    { item: "(b) Primeira intervenção: áreas verdes e pavimento permeável, drenagem e retenção, habitação em áreas seguras, alerta precoce, requalificação de encostas", pontos: 2.5 },
    { item: "(b) Segunda intervenção, distinta da primeira", pontos: 2.5 }
  ]
},
{
  id: "ia-fg-03", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Desinformação e debate público",
  enunciado: "A circulação de desinformação em plataformas digitais tem sido apontada como risco ao debate público. Discorra sobre o tema e apresente duas ações educativas capazes de fortalecer a capacidade crítica dos cidadãos diante de conteúdos falsos.",
  codigo: null,
  rubrica: [
    { item: "Explica o papel dos mecanismos de recomendação otimizados por engajamento", pontos: 2 },
    { item: "Aponta a assimetria de velocidade entre a informação falsa e a correção", pontos: 2 },
    { item: "Relaciona o fenômeno ao incentivo econômico e ao efeito sobre a confiança nas instituições", pontos: 2 },
    { item: "Primeira ação EDUCATIVA: educação midiática no currículo, oficinas de checagem, campanhas de letramento digital, formação de professores", pontos: 2 },
    { item: "Segunda ação educativa, distinta da primeira (medidas apenas punitivas ou de remoção não atendem ao comando)", pontos: 2 }
  ]
},
{
  id: "ia-fg-04", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Exclusão digital e acesso a direitos",
  enunciado: "A digitalização de serviços públicos ampliou a eficiência do atendimento, mas trouxe riscos de exclusão. Redija um texto em que você: a) analise duas formas pelas quais a exclusão digital pode se converter em exclusão de direitos; b) proponha duas medidas para mitigar esse risco.",
  codigo: null,
  rubrica: [
    { item: "(a) Primeira forma: impossibilidade de agendar atendimento, perda de prazos de benefício, dificuldade de comprovar direitos, dependência de intermediários, exposição a fraudes", pontos: 2.5 },
    { item: "(a) Segunda forma, distinta da primeira", pontos: 2.5 },
    { item: "(b) Primeira medida: canais presenciais e telefônicos, pontos públicos de acesso assistido, simplificação de linguagem, letramento digital, acessibilidade nos aplicativos", pontos: 2 },
    { item: "(b) Segunda medida, distinta da primeira", pontos: 2 },
    { item: "Distingue acesso à internet de acesso significativo (qualidade, dispositivo, letramento)", pontos: 1 }
  ]
},
{
  id: "ia-fg-05", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Saúde mental de adolescentes e redes sociais",
  enunciado: "O aumento dos indicadores de sofrimento psíquico entre adolescentes tem mobilizado escolas e serviços de saúde. Discorra sobre o tema, relacionando-o ao uso intensivo de redes sociais, e apresente duas ações no âmbito escolar capazes de contribuir para o enfrentamento do problema.",
  codigo: null,
  rubrica: [
    { item: "Aponta ao menos dois mecanismos: comparação social, exposição a conteúdo nocivo, privação de sono, cyberbullying, redução da sociabilidade presencial", pontos: 3 },
    { item: "Evita determinismo: trata a relação como associação, não como causa única", pontos: 2 },
    { item: "Primeira ação ESCOLAR: rodas de conversa e acolhimento, formação de professores para identificar sinais, articulação com a rede de saúde, educação para uso consciente, combate ao bullying", pontos: 2.5 },
    { item: "Segunda ação escolar, distinta da primeira (ações fora do âmbito escolar não atendem ao comando)", pontos: 2.5 }
  ]
},
{
  id: "ia-fg-06", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Envelhecimento populacional",
  enunciado: "A população brasileira envelhece em ritmo acelerado. Redija um texto em que você: a) apresente dois desafios que essa transição demográfica impõe às políticas públicas; b) proponha duas ações para enfrentá-los.",
  codigo: null,
  rubrica: [
    { item: "(a) Primeiro desafio: financiamento da previdência, demanda por saúde e cuidados de longa duração, adaptação das cidades, escassez de cuidadores, isolamento social", pontos: 2.5 },
    { item: "(a) Segundo desafio, distinto do primeiro", pontos: 2.5 },
    { item: "(b) Primeira ação: política nacional de cuidados, formação de cuidadores, acessibilidade urbana, convivência intergeracional, permanência qualificada no trabalho", pontos: 2 },
    { item: "(b) Segunda ação, distinta da primeira", pontos: 2 },
    { item: "Trata o envelhecimento como transição a ser gerida, e não como problema em si", pontos: 1 }
  ]
},
{
  id: "ia-fg-07", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Equidade de gênero no mercado de trabalho",
  enunciado: "Apesar de terem escolaridade média superior à dos homens, as mulheres brasileiras recebem menos e ocupam menos posições de liderança. Discorra sobre as causas dessa desigualdade e apresente duas medidas capazes de reduzi-la.",
  codigo: null,
  rubrica: [
    { item: "Aponta a divisão desigual do trabalho de cuidado e as interrupções de carreira", pontos: 2.5 },
    { item: "Aponta discriminação em seleção e promoção, segregação ocupacional ou teto de vidro", pontos: 2.5 },
    { item: "Não atribui a desigualdade a menor qualificação feminina, o que seria factualmente incorreto", pontos: 1 },
    { item: "Primeira medida: licença-paternidade ampliada, creches públicas, transparência salarial, metas de diversidade, combate ao assédio", pontos: 2 },
    { item: "Segunda medida, distinta da primeira", pontos: 2 }
  ]
},
{
  id: "ia-fg-08", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Mobilidade urbana sustentável",
  enunciado: "O transporte individual motorizado responde por parcela significativa das emissões e do congestionamento nas cidades brasileiras. Redija um texto em que você: a) analise duas consequências da priorização histórica do automóvel no planejamento urbano; b) apresente duas políticas capazes de estimular o transporte coletivo e o ativo.",
  codigo: null,
  rubrica: [
    { item: "(a) Primeira consequência: congestionamento, emissões, ocupação do espaço público, acidentes, custo de manutenção viária, demanda induzida", pontos: 2.5 },
    { item: "(a) Segunda consequência, distinta da primeira", pontos: 2.5 },
    { item: "(b) Primeira política: faixas exclusivas, integração tarifária, ciclovias segregadas, restrição de circulação, uso do solo que aproxime moradia e trabalho", pontos: 2.5 },
    { item: "(b) Segunda política, distinta da primeira", pontos: 2.5 }
  ]
},
{
  id: "ia-fg-09", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Desperdício de alimentos e segurança alimentar",
  enunciado: "O Brasil desperdiça parcela expressiva dos alimentos que produz enquanto convive com insegurança alimentar. Redija um texto em que você: a) explique duas causas do desperdício ao longo da cadeia, da colheita ao consumo; b) proponha duas medidas capazes de reduzi-lo.",
  codigo: null,
  rubrica: [
    { item: "(a) Primeira causa: perdas na colheita e no transporte, ausência de refrigeração, padrões estéticos do varejo, prazos de validade mal geridos, hábitos de consumo", pontos: 2.5 },
    { item: "(a) Segunda causa, distinta da primeira", pontos: 2.5 },
    { item: "(b) Primeira medida: bancos de alimentos, venda de produtos fora do padrão estético, melhoria da logística e refrigeração, educação alimentar, incentivo fiscal à doação", pontos: 2 },
    { item: "(b) Segunda medida, distinta da primeira", pontos: 2 },
    { item: "Estabelece a relação entre desperdício e insegurança alimentar: produzir muito não garante acesso", pontos: 1 }
  ]
},
{
  id: "ia-fg-10", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Trabalho por aplicativos e proteção social",
  enunciado: "O trabalho intermediado por plataformas digitais cresceu no Brasil e hoje ocupa milhões de pessoas. Redija um texto em que você: a) analise a tensão entre a flexibilidade prometida e a ausência de proteção social; b) apresente duas propostas de regulação ou de política pública para o setor.",
  codigo: null,
  rubrica: [
    { item: "(a) Explica a transferência de custos e riscos ao trabalhador (veículo, combustível, manutenção, acidentes)", pontos: 2.5 },
    { item: "(a) Aponta a ausência de férias, décimo terceiro, previdência ou seguro-desemprego", pontos: 2.5 },
    { item: "(b) Primeira proposta: reconhecimento de vínculo, contribuição previdenciária pela plataforma, piso por hora, transparência algorítmica, seguro de acidentes", pontos: 2 },
    { item: "(b) Segunda proposta, distinta da primeira", pontos: 2 },
    { item: "Reconhece que a flexibilidade tem valor real para parte dos trabalhadores, evitando análise unilateral", pontos: 1 }
  ]
},
{
  id: "ia-fg-11", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Patrimônio cultural imaterial",
  enunciado: "Ofícios e saberes tradicionais brasileiros são reconhecidos como patrimônio cultural imaterial, mas enfrentam pressões do mercado. Discorra sobre a importância desse reconhecimento e apresente duas ações capazes de assegurar a continuidade desses saberes.",
  codigo: null,
  rubrica: [
    { item: "Explica que o patrimônio imaterial abrange práticas vivas — saberes, ofícios, celebrações, modos de fazer —, e não objetos", pontos: 2.5 },
    { item: "Aponta a tensão entre a valorização pelo mercado e a pressão por escala e padronização, que descaracteriza o saber", pontos: 2.5 },
    { item: "Primeira ação: registro e inventário, apoio a mestres e à transmissão do ofício, denominação de origem, políticas de comercialização justa, educação patrimonial", pontos: 2.5 },
    { item: "Segunda ação, distinta da primeira", pontos: 2.5 }
  ]
},
{
  id: "ia-fg-12", origem: "autoral", bloco: "FG", area: "FG", tipo: "fg", valor: 10,
  tema: "Hesitação vacinal e saúde coletiva",
  enunciado: "A queda das coberturas vacinais em algumas regiões do país permitiu o retorno de doenças já controladas. Redija um texto em que você: a) explique por que a decisão individual de não se vacinar tem efeito coletivo; b) apresente duas ações capazes de recuperar as coberturas.",
  codigo: null,
  rubrica: [
    { item: "(a) Explica o conceito de proteção coletiva e sua dependência de cobertura elevada", pontos: 3 },
    { item: "(a) Aponta que a queda expõe quem não pode se vacinar, como bebês e imunossuprimidos", pontos: 2 },
    { item: "(b) Primeira ação: busca ativa e vacinação na escola, campanhas de comunicação com enfrentamento da desinformação, ampliação de horários das unidades, formação de agentes comunitários", pontos: 2.5 },
    { item: "(b) Segunda ação, distinta da primeira", pontos: 2.5 }
  ]
},

/* ================= modelagem — UML e ER (10) ================= */
{
  id: "ia-uml-01", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de classes de clínica veterinária",
  enunciado: "Uma clínica veterinária deseja informatizar seu atendimento. Um TUTOR possui nome, CPF e telefone, e pode cadastrar vários ANIMAIS. Cada animal tem nome, espécie e data de nascimento, e pertence a um único tutor. Cada CONSULTA registra data, hora e diagnóstico, refere-se a um animal e é realizada por um VETERINÁRIO (nome, CRMV, especialidade). As consultas podem ser de rotina ou de emergência, e as de emergência registram adicionalmente o grau de urgência. Elabore o diagrama de classes, com no máximo seis classes, contendo atributos, associações com multiplicidades e pelo menos três métodos na classe Consulta.",
  codigo: null,
  rubrica: [
    { item: "Respeita o limite de no máximo seis classes", pontos: 1 },
    { item: "Classes Tutor, Animal, Consulta e Veterinario com seus atributos", pontos: 2.5 },
    { item: "Generalização de Consulta para ConsultaRotina e ConsultaEmergencia, com grau de urgência na especialização", pontos: 2.5 },
    { item: "Multiplicidades nas duas pontas: Tutor 1 — 0..* Animal; Animal 1 — 0..* Consulta; Veterinario 1 — 0..* Consulta", pontos: 2.5 },
    { item: "Pelo menos três métodos em Consulta, como agendar(), cancelar() e registrarDiagnostico()", pontos: 1.5 }
  ]
},
{
  id: "ia-uml-02", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de classes de biblioteca com composição",
  enunciado: "Uma biblioteca universitária controla seu acervo. Um TÍTULO tem ISBN, nome e ano, e possui vários EXEMPLARES, cada um com código de tombamento e estado de conservação; um exemplar não existe sem seu título. Um USUÁRIO (matrícula, nome, tipo) realiza EMPRÉSTIMOS, e cada empréstimo registra data de retirada, data prevista de devolução e data efetiva de devolução, referindo-se a um único exemplar. Elabore o diagrama de classes com atributos, multiplicidades e pelo menos três métodos na classe Emprestimo.",
  codigo: null,
  rubrica: [
    { item: "Classes Titulo, Exemplar, Usuario e Emprestimo com seus atributos", pontos: 2.5 },
    { item: "Relação Titulo–Exemplar modelada como COMPOSIÇÃO, pois o exemplar não existe sem o título", pontos: 2.5 },
    { item: "Multiplicidades: Titulo 1 — 1..* Exemplar; Usuario 1 — 0..* Emprestimo; Exemplar 1 — 0..* Emprestimo", pontos: 2.5 },
    { item: "Pelo menos três métodos em Emprestimo, como registrarDevolucao(), calcularMulta() e prorrogar()", pontos: 1.5 },
    { item: "Reconhece que a data efetiva de devolução admite nulo enquanto o empréstimo estiver aberto", pontos: 1 }
  ]
},
{
  id: "ia-uml-03", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de casos de uso de matrícula on-line",
  enunciado: "Um sistema de matrícula on-line atende três perfis: ALUNO, COORDENADOR e SECRETÁRIO. O aluno consulta as disciplinas ofertadas e solicita matrícula; toda solicitação exige autenticação prévia. Se o aluno não tiver os pré-requisitos, o sistema registra a pendência. O coordenador aprova ou rejeita solicitações e também consulta disciplinas. O secretário emite comprovantes. Elabore o diagrama de casos de uso, indicando atores, relacionamentos «include» e «extend» e eventual generalização entre atores.",
  codigo: null,
  rubrica: [
    { item: "Identificação dos três atores", pontos: 1.5 },
    { item: "Relacionamentos ator ↔ caso de uso corretos", pontos: 2 },
    { item: "«include» de Autenticar a partir de Solicitar matrícula — comportamento obrigatório", pontos: 2.5 },
    { item: "«extend» de Registrar pendência sobre Solicitar matrícula, com ponto de extensão nomeado", pontos: 2.5 },
    { item: "Direção correta das setas: «include» aponta do base para o incluído; «extend», do estendido para o base", pontos: 1.5 }
  ]
},
{
  id: "ia-uml-04", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de classes de aplicativo de entrega",
  enunciado: "Um aplicativo de entrega de refeições precisa ser modelado. Um CLIENTE faz PEDIDOS a um RESTAURANTE; cada pedido contém vários ITENS, sendo que cada item se refere a um PRATO do cardápio e registra a quantidade. Um pedido é entregue por um ENTREGADOR. Elabore o diagrama de classes de domínio com no máximo seis classes, indicando atributos, multiplicidades e pelo menos três métodos na classe Pedido. Justifique, em uma linha, a escolha entre agregação e composição na relação Pedido–Item.",
  codigo: null,
  rubrica: [
    { item: "Exatamente as seis classes: Cliente, Restaurante, Pedido, Item, Prato, Entregador", pontos: 2 },
    { item: "Pedido–Item modelada como COMPOSIÇÃO, com a justificativa pedida", pontos: 2.5 },
    { item: "Item–Prato modelada como ASSOCIAÇÃO simples, pois o prato existe no cardápio independentemente do pedido", pontos: 2.5 },
    { item: "Multiplicidades em todas as associações", pontos: 1.5 },
    { item: "Pelo menos três métodos em Pedido, como calcularTotal(), adicionarItem() e alterarStatus()", pontos: 1.5 }
  ]
},
{
  id: "ia-uml-05", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de sequência de saque em caixa eletrônico",
  enunciado: "Descreva, por meio de um diagrama de sequência da UML, a operação de saque em um caixa eletrônico. O cliente insere o cartão e a senha; o terminal solicita a validação ao servidor de autenticação; validado o acesso, o cliente informa o valor; o terminal consulta o saldo na conta e, havendo saldo, registra o débito, cria um objeto Comprovante e o imprime, destruindo-o em seguida. Se o saldo for insuficiente, o terminal exibe mensagem e encerra. Indique as linhas de vida, as ativações, as mensagens de retorno, o fragmento de alternativa e a criação e destruição do comprovante.",
  codigo: null,
  rubrica: [
    { item: "Linhas de vida dos participantes: Cliente, Terminal, ServidorAutenticacao, Conta e Comprovante", pontos: 2 },
    { item: "Mensagens na ordem temporal correta, com as ativações representadas", pontos: 2 },
    { item: "Mensagens de retorno representadas com linha tracejada", pontos: 1.5 },
    { item: "Fragmento combinado alt para o caso de saldo suficiente e insuficiente", pontos: 2.5 },
    { item: "Criação do Comprovante com «create» e destruição marcada com X ao fim da linha de vida", pontos: 2 }
  ]
},
{
  id: "ia-uml-06", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: casos de uso de comércio eletrônico",
  enunciado: "Em uma loja virtual, o VISITANTE navega pelo catálogo e busca produtos. O CLIENTE CADASTRADO faz tudo o que o visitante faz e ainda finaliza compras; finalizar compra sempre exige calcular o frete e sempre exige autenticar-se. Se o cliente possuir cupom, o sistema aplica desconto. O ADMINISTRADOR cadastra produtos. Elabore o diagrama de casos de uso com atores, generalização entre atores, «include» e «extend».",
  codigo: null,
  rubrica: [
    { item: "Identificação dos três atores", pontos: 1.5 },
    { item: "Generalização de Cliente cadastrado a partir de Visitante, evitando repetir associações", pontos: 2.5 },
    { item: "«include» de Autenticar e de Calcular frete a partir de Finalizar compra", pontos: 2.5 },
    { item: "«extend» de Aplicar desconto sobre Finalizar compra, por ser condicional", pontos: 2.5 },
    { item: "Fronteira do sistema desenhada, com os atores do lado de fora", pontos: 1 }
  ]
},
{
  id: "ia-uml-07", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: classe de associação em escola de idiomas",
  enunciado: "Uma escola de idiomas registra ALUNOS (matrícula, nome) e TURMAS (código, idioma, nível, horário). Um aluno pode cursar várias turmas e uma turma tem vários alunos. Para cada participação de um aluno em uma turma é preciso registrar a data de inscrição, a frequência e a nota final. Elabore o diagrama de classes representando essa situação, justificando em uma linha a estrutura escolhida para guardar frequência e nota.",
  codigo: null,
  rubrica: [
    { item: "Classes Aluno e Turma com seus atributos", pontos: 2 },
    { item: "Associação muitos-para-muitos entre Aluno e Turma, com multiplicidades 0..* nas duas pontas", pontos: 2 },
    { item: "Cria classe de associação Matricula com dataInscricao, frequencia e nota", pontos: 3 },
    { item: "Justifica que esses atributos pertencem ao vínculo, e não ao aluno nem à turma", pontos: 2 },
    { item: "Solução alternativa com classe comum ligada às duas por associações 1 — 0..* também é aceita, se justificada", pontos: 1 }
  ]
},
{
  id: "ia-uml-08", origem: "autoral", bloco: "CE", area: "OO", tipo: "uml", valor: 10,
  tema: "UML: diagrama de atividades de processo de compra",
  enunciado: "Modele, em um diagrama de atividades da UML, o processo de compra de uma empresa. O SOLICITANTE registra o pedido de compra. O SETOR DE COMPRAS recebe o pedido e, em paralelo, cota preços com fornecedores e verifica o orçamento disponível. Reunidas as duas informações, o GERENTE aprova ou rejeita. Se aprovado, o setor de compras emite a ordem; se rejeitado, o solicitante é notificado. Use raias para indicar os responsáveis.",
  codigo: null,
  rubrica: [
    { item: "Três raias identificando Solicitante, Setor de compras e Gerente", pontos: 2.5 },
    { item: "Nó inicial e nós finais representados", pontos: 1 },
    { item: "Bifurcação (fork) separando cotação de preços e verificação de orçamento como fluxos paralelos", pontos: 2.5 },
    { item: "Junção (join) sincronizando os dois fluxos antes da aprovação", pontos: 2 },
    { item: "Nó de decisão após a aprovação, com os dois caminhos rotulados", pontos: 2 }
  ]
},
{
  id: "ia-uml-09", origem: "autoral", bloco: "CE", area: "BD", tipo: "uml", valor: 10,
  tema: "Modelo ER e conversão para o modelo relacional",
  enunciado: "Uma locadora de veículos precisa de um banco de dados. Um CLIENTE (CPF, nome, telefone) realiza LOCAÇÕES, cada uma com data de retirada, data de devolução e valor. Cada locação refere-se a um único VEÍCULO (placa, modelo, ano, diária), e um veículo pertence a uma CATEGORIA (código, descrição). Um veículo pode passar por várias MANUTENÇÕES, e cada manutenção só existe vinculada ao veículo, sendo identificada pelo número sequencial dentro dele. a) Desenhe o modelo entidade-relacionamento, indicando entidades, relacionamentos, cardinalidades e a entidade fraca. b) Converta o modelo para o esquema relacional, indicando chaves primárias e estrangeiras.",
  codigo: null,
  rubrica: [
    { item: "(a) Entidades Cliente, Locacao, Veiculo, Categoria e Manutencao com seus atributos", pontos: 2 },
    { item: "(a) Cardinalidades corretas: Cliente 1:N Locacao; Veiculo 1:N Locacao; Categoria 1:N Veiculo", pontos: 2 },
    { item: "(a) Manutencao representada como ENTIDADE FRACA, com retângulo duplo e relacionamento identificador", pontos: 2 },
    { item: "(b) Tabelas com chaves primárias corretas", pontos: 2 },
    { item: "(b) Chaves estrangeiras nas tabelas do lado N, e chave composta (placa + número sequencial) em Manutencao", pontos: 2 }
  ]
},
{
  id: "ia-uml-10", origem: "autoral", bloco: "CE", area: "BD", tipo: "uml", valor: 10,
  tema: "Normalização até a 3FN e consulta SQL",
  enunciado: "Uma empresa mantém a tabela abaixo para registrar atendimentos. a) Identifique as formas normais violadas e explique por quê. b) Apresente o esquema normalizado até a 3FN, indicando chaves primárias e estrangeiras. c) Escreva a consulta SQL que, sobre o esquema normalizado, retorne o nome de cada técnico e o total de atendimentos que ele realizou, listando apenas quem realizou mais de dez.",
  codigo: "ATENDIMENTO (\n    num_os,\n    cod_tecnico,\n    nome_tecnico,\n    setor_tecnico,\n    cod_cliente,\n    nome_cliente,\n    data_atendimento,\n    telefones_cliente     -- ex.: \"11 99999-0000 / 11 3333-0000\"\n)\nChave primária: num_os",
  rubrica: [
    { item: "(a) Identifica a violação da 1FN pelo atributo multivalorado telefones_cliente", pontos: 1.5 },
    { item: "(a) Identifica a violação da 3FN por dependência transitiva: num_os determina cod_tecnico, que determina nome e setor", pontos: 2 },
    { item: "(a) Reconhece que a 2FN não é violada, pois a chave primária é simples", pontos: 1 },
    { item: "(b) Tabelas TECNICO, CLIENTE, TELEFONE_CLIENTE e ATENDIMENTO com chaves primárias", pontos: 2 },
    { item: "(b) Chaves estrangeiras corretas em ATENDIMENTO e em TELEFONE_CLIENTE", pontos: 1.5 },
    { item: "(c) SQL com JOIN, COUNT, GROUP BY e o filtro em HAVING — não em WHERE", pontos: 2 }
  ]
},

/* ================= estruturas de dados (8) ================= */
{
  id: "ia-ed-01", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Pilha: operações e verificação de parênteses balanceados",
  enunciado: "Escreva, em pseudocódigo ou em uma linguagem de sua escolha, as rotinas de uma PILHA sobre um vetor de 50 posições, considerando as variáveis declaradas abaixo. a) A rotina empilhar, tratando o caso de pilha cheia — 3,0. b) A rotina desempilhar, tratando o caso de pilha vazia e devolvendo o elemento removido — 3,0. c) Uma rotina que receba uma expressão contendo apenas '(' e ')' e devolva verdadeiro se os parênteses estiverem balanceados — 4,0.",
  codigo: "Var\n  pilha: vetor [1..50] de caractere\n  topo: inteiro\n  expressao: texto",
  rubrica: [
    { item: "(a) Testa topo >= 50 antes de inserir, emitindo a mensagem de pilha cheia", pontos: 1.5 },
    { item: "(a) Incrementa o topo e grava o caractere na posição correta", pontos: 1.5 },
    { item: "(b) Testa topo <= 0, devolve o elemento e só então decrementa", pontos: 3 },
    { item: "(c) Empilha a cada '(' e desempilha a cada ')'", pontos: 2 },
    { item: "(c) Trata a tentativa de desempilhar com a pilha vazia como expressão inválida", pontos: 1 },
    { item: "(c) Ao final, exige a pilha vazia para considerar balanceada", pontos: 1 }
  ]
},
{
  id: "ia-ed-02", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Fila: atendimento por ordem de chegada",
  enunciado: "Um pronto-socorro atende pacientes por ordem de chegada. Implemente, sobre a estrutura declarada abaixo: a) a rotina enfileirar, tratando o caso de fila cheia — 3,0; b) a rotina desenfileirar, tratando o caso de fila vazia e devolvendo o paciente atendido — 4,0; c) uma rotina que informe quantos pacientes aguardam e imprima a fila na ordem de atendimento — 3,0.",
  codigo: "Var\n  fila: vetor [1..20] de texto\n  total: inteiro",
  rubrica: [
    { item: "(a) Verifica total >= 20 antes de inserir na posição total + 1", pontos: 3 },
    { item: "(b) Verifica total = 0 e guarda o elemento da posição 1", pontos: 1.5 },
    { item: "(b) Desloca os demais uma posição à esquerda e decrementa total", pontos: 1.5 },
    { item: "(b) Devolve o elemento removido", pontos: 1 },
    { item: "(c) Percorre de 1 até total imprimindo, e informa o total", pontos: 3 }
  ]
},
{
  id: "ia-ed-03", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Lista encadeada: inserção ordenada por prioridade",
  enunciado: "Considere uma lista simplesmente encadeada de tarefas, em que cada nó guarda uma descrição e uma prioridade inteira (1 = mais urgente). Escreva a função que insere um novo nó mantendo a lista ORDENADA por prioridade crescente e devolve a cabeça da lista. Trate os casos de lista vazia, inserção no início, no meio e no fim.",
  codigo: "typedef struct No {\n    char descricao[100];\n    int  prioridade;\n    struct No* prox;\n} No;\n\nNo* inserirOrdenado(No* cabeca, No* novo) {\n    /* implemente */\n}",
  rubrica: [
    { item: "Trata lista vazia e inserção no início: novo nó vira a cabeça", pontos: 3 },
    { item: "Percorre com dois ponteiros, anterior e atual, até encontrar a posição", pontos: 2.5 },
    { item: "Religa as referências: anterior aponta para o novo e o novo aponta para o atual", pontos: 2.5 },
    { item: "Reconhece que a inserção no fim é caso particular do meio, quando atual chega a nulo", pontos: 1 },
    { item: "Devolve a cabeça da lista, que pode ter mudado", pontos: 1 }
  ]
},
{
  id: "ia-ed-04", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Árvore binária de busca: inserção e percurso",
  enunciado: "Considere uma árvore binária de busca de inteiros, com a estrutura abaixo. a) Escreva a função que insere um valor mantendo a propriedade de árvore de busca — 4,0. b) Escreva a função que imprime os valores em ordem crescente — 3,0. c) Explique em duas linhas por que a inserção de valores já ordenados degrada o desempenho da estrutura — 3,0.",
  codigo: "typedef struct No {\n    int valor;\n    struct No *esq, *dir;\n} No;",
  rubrica: [
    { item: "(a) Compara com a raiz e desce à esquerda se menor, à direita se maior", pontos: 2 },
    { item: "(a) Insere quando encontra posição nula, devolvendo o nó (recursiva ou iterativa)", pontos: 2 },
    { item: "(b) Usa percurso EM-ORDEM: esquerda, raiz, direita", pontos: 3 },
    { item: "(c) Explica que a árvore degenera em lista encadeada", pontos: 1.5 },
    { item: "(c) Aponta que a altura passa de O(log n) para O(n), perdendo a eficiência da busca", pontos: 1.5 }
  ]
},
{
  id: "ia-ed-05", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Fila circular sobre vetor",
  enunciado: "Uma impressora de rede mantém no máximo 8 trabalhos em espera. Para evitar o deslocamento de todos os elementos a cada remoção, implemente a fila como FILA CIRCULAR sobre o vetor declarado abaixo. a) Escreva a rotina enfileirar — 4,0. b) Escreva a rotina desenfileirar — 4,0. c) Explique em duas linhas a vantagem da fila circular sobre a fila linear em vetor — 2,0.",
  codigo: "Var\n  fila: vetor [0..7] de texto\n  inicio, fim, total: inteiro   { inicializados em 0 }",
  rubrica: [
    { item: "(a) Verifica fila cheia comparando total com o tamanho do vetor", pontos: 1.5 },
    { item: "(a) Grava na posição fim e avança fim com aritmética modular: fim <- (fim + 1) mod 8", pontos: 2.5 },
    { item: "(b) Verifica fila vazia (total = 0) e devolve o elemento da posição inicio", pontos: 1.5 },
    { item: "(b) Avança inicio com aritmética modular e decrementa total", pontos: 2.5 },
    { item: "(c) Explica que a circular reaproveita as posições liberadas, evitando o deslocamento O(n) a cada remoção", pontos: 2 }
  ]
},
{
  id: "ia-ed-06", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Pilha: avaliação de expressão pós-fixa",
  enunciado: "Escreva um algoritmo que avalie uma expressão aritmética em notação pós-fixa (notação polonesa reversa) usando uma pilha. A expressão é dada como um vetor de símbolos, contendo números inteiros e os operadores +, -, * e /. Por exemplo, a expressão \"3 4 + 2 *\" deve resultar em 14. Trate o caso de expressão malformada.",
  codigo: "Var\n  expressao: vetor [1..100] de texto\n  n: inteiro          { quantidade de simbolos }\n  pilha: vetor [1..100] de inteiro\n  topo: inteiro",
  rubrica: [
    { item: "Percorre os símbolos da esquerda para a direita", pontos: 1.5 },
    { item: "Empilha o valor quando o símbolo é um número", pontos: 2 },
    { item: "Ao encontrar operador, desempilha DOIS operandos", pontos: 2 },
    { item: "Aplica a operação na ordem correta (o segundo desempilhado é o operando da esquerda) e empilha o resultado", pontos: 2.5 },
    { item: "Trata expressão malformada: operandos insuficientes ao desempilhar, ou pilha com mais de um valor ao final", pontos: 2 }
  ]
},
{
  id: "ia-ed-07", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Lista duplamente encadeada: remoção de nó",
  enunciado: "Considere a lista duplamente encadeada declarada abaixo, usada para o histórico de navegação de um aplicativo. a) Escreva a função que remove um nó apontado por p, religando corretamente as referências e devolvendo a nova cabeça — 6,0. b) Explique em duas linhas qual vantagem a lista duplamente encadeada oferece sobre a simplesmente encadeada nessa operação — 4,0.",
  codigo: "typedef struct No {\n    char url[200];\n    struct No *ant, *prox;\n} No;\n\nNo* remover(No* cabeca, No* p) {\n    /* implemente */\n}",
  rubrica: [
    { item: "(a) Trata o caso de p ser a cabeça, atualizando a cabeça para p->prox", pontos: 1.5 },
    { item: "(a) Religa p->ant->prox para p->prox quando existir anterior", pontos: 1.5 },
    { item: "(a) Religa p->prox->ant para p->ant quando existir próximo", pontos: 1.5 },
    { item: "(a) Libera o nó removido e devolve a cabeça", pontos: 1.5 },
    { item: "(b) Explica que o ponteiro para o anterior dispensa percorrer a lista para encontrá-lo", pontos: 2.5 },
    { item: "(b) Conclui que a remoção passa de O(n) para O(1), dado o ponteiro para o nó", pontos: 1.5 }
  ]
},
{
  id: "ia-ed-08", origem: "autoral", bloco: "CE", area: "AL", tipo: "estrutura", valor: 10,
  tema: "Tabela hash com tratamento de colisão",
  enunciado: "Um sistema guarda os dados de alunos indexados pela matrícula, usando uma tabela hash de 10 posições com função de espalhamento h(m) = m mod 10 e tratamento de colisão por encadeamento separado. a) Mostre o estado da tabela após a inserção das matrículas 21, 35, 41, 15 e 31, nessa ordem — 4,0. b) Escreva o algoritmo de busca de uma matrícula na tabela — 4,0. c) Explique em duas linhas o que acontece com o desempenho quando o fator de carga cresce muito — 2,0.",
  codigo: null,
  rubrica: [
    { item: "(a) Posição 1 com a lista 21 → 41 → 31, na ordem de inserção", pontos: 2 },
    { item: "(a) Posição 5 com a lista 35 → 15, e demais posições vazias", pontos: 2 },
    { item: "(b) Calcula o índice com a função de espalhamento", pontos: 1.5 },
    { item: "(b) Percorre a lista daquela posição comparando as chaves, devolvendo o elemento ou indicando ausência", pontos: 2.5 },
    { item: "(c) Explica que as listas ficam longas e a busca degrada de O(1) para O(n)", pontos: 2 }
  ]
},

/* ================= algoritmos com vetor e matriz (6) ================= */
{
  id: "ia-alg-01", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Vetor: estatísticas de notas de uma turma",
  enunciado: "Uma escola registrou as notas finais de 500 alunos. Escreva, em pseudocódigo ou linguagem de sua escolha, um algoritmo que leia as 500 notas e informe: a maior nota, a menor nota, a média da turma, quantos alunos ficaram acima da média e o percentual de aprovados (nota maior ou igual a 6,0).",
  codigo: null,
  rubrica: [
    { item: "Declara as variáveis com tipos coerentes (vetor de 500 posições, média real)", pontos: 1 },
    { item: "Inicializa maior e menor com o PRIMEIRO elemento lido, não com zero", pontos: 2 },
    { item: "Primeiro percurso lendo, acumulando a soma e contando os aprovados", pontos: 2 },
    { item: "Calcula a média dividindo a soma por 500", pontos: 1.5 },
    { item: "SEGUNDO percurso para contar quantos ficaram acima da média, já que a média só é conhecida depois", pontos: 2 },
    { item: "Escreve as cinco saídas exigidas", pontos: 1.5 }
  ]
},
{
  id: "ia-alg-02", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Matriz: controle de estoque por corredor",
  enunciado: "Um supermercado organiza seu estoque em uma matriz 30×30, em que cada posição guarda a quantidade de unidades de um produto. Escreva um algoritmo que: a) leia as quantidades da matriz — 3,0; b) calcule e imprima o total de unidades em estoque — 3,0; c) identifique e imprima a linha (corredor) com maior quantidade total de unidades — 4,0.",
  codigo: null,
  rubrica: [
    { item: "(a) Duplo laço de leitura de 1 a 30 em cada dimensão", pontos: 3 },
    { item: "(b) Acumulador único somando todos os elementos, e impressão do total", pontos: 3 },
    { item: "(c) Acumulador POR LINHA, reiniciado dentro do laço externo e fora do interno", pontos: 2.5 },
    { item: "(c) Compara com o maior encontrado até então e guarda o índice da linha", pontos: 1.5 }
  ]
},
{
  id: "ia-alg-03", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Matriz e vetor contador: apuração de votos",
  enunciado: "Uma urna eletrônica registra os votos de uma eleição com 6 candidatos (códigos de 1 a 6) em uma matriz 50×20, em que cada posição contém o código do candidato votado. Escreva um algoritmo que: a) percorra a matriz contando os votos de cada candidato usando um vetor contador — 4,0; b) imprima a quantidade de votos de cada candidato — 3,0; c) identifique e imprima o código do candidato vencedor — 3,0.",
  codigo: null,
  rubrica: [
    { item: "Inicializa o vetor contador com as 6 posições zeradas antes do uso", pontos: 1 },
    { item: "(a) Usa o próprio valor lido como índice: Contador[Matriz[i][j]] recebe Contador[Matriz[i][j]] + 1", pontos: 3 },
    { item: "(b) Laço de 1 a 6 imprimindo candidato e contagem", pontos: 3 },
    { item: "(c) Percorre o vetor contador guardando o maior valor e o índice correspondente", pontos: 3 }
  ]
},
{
  id: "ia-alg-04", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Teste de mesa com dois vetores",
  enunciado: "Faça o teste de mesa do algoritmo abaixo e informe: a) o conteúdo dos vetores A e B ao término da linha 09 — 4,0; b) o conteúdo dos vetores A e B ao término da linha 15 — 4,0; c) o valor impresso na linha 16 — 2,0.",
  codigo: "01  para i de 1 ate 5 faca\n02      A[i] <- i * 2\n03  fim-para\n04  para i de 1 ate 5 faca\n05      B[i] <- 0\n06  fim-para\n07  s <- 0\n08  // fim da inicializacao\n09  \n10  para i de 1 ate 5 faca\n11      se resto(i, 2) <> 0 entao\n12          B[i] <- A[i]\n13          s <- s + A[i]\n14      fim-se\n15  fim-para\n16  escreva(s)",
  rubrica: [
    { item: "(a) A = [2, 4, 6, 8, 10]", pontos: 2 },
    { item: "(a) B = [0, 0, 0, 0, 0]", pontos: 2 },
    { item: "(b) A permanece [2, 4, 6, 8, 10]", pontos: 2 },
    { item: "(b) B = [2, 0, 6, 0, 10] — apenas os índices ímpares são copiados", pontos: 2 },
    { item: "(c) s = 18, soma de 2 + 6 + 10", pontos: 2 }
  ]
},
{
  id: "ia-alg-05", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Busca binária e ordenação",
  enunciado: "Um sistema mantém um vetor de 1 000 códigos de produto. a) Escreva o algoritmo de busca binária que localiza um código e devolve sua posição, ou -1 se não existir — 5,0. b) Explique em duas linhas qual pré-condição a busca binária exige e o que acontece se ela não for satisfeita — 3,0. c) Compare, em duas linhas, o número de comparações da busca binária e da busca sequencial nesse vetor — 2,0.",
  codigo: null,
  rubrica: [
    { item: "(a) Inicializa os limites inferior e superior e repete enquanto inicio <= fim", pontos: 1.5 },
    { item: "(a) Calcula o meio e compara com o valor procurado", pontos: 1.5 },
    { item: "(a) Ajusta os limites com meio + 1 e meio - 1, evitando laço infinito", pontos: 1.5 },
    { item: "(a) Devolve a posição encontrada ou -1", pontos: 0.5 },
    { item: "(b) A pré-condição é o vetor estar ORDENADO; sem isso o algoritmo devolve resultado errado silenciosamente", pontos: 3 },
    { item: "(c) Cerca de 10 comparações na binária contra até 1 000 na sequencial, pois cada passo descarta metade do espaço", pontos: 2 }
  ]
},
{
  id: "ia-alg-06", origem: "autoral", bloco: "CE", area: "AL", tipo: "algoritmo", valor: 10,
  tema: "Matriz: somatório por linha e por coluna",
  enunciado: "Uma planilha de vendas é representada por uma matriz 12×5, em que a linha é o mês e a coluna é a filial. Escreva um algoritmo que: a) leia os valores — 2,0; b) imprima o total vendido em cada mês — 3,0; c) imprima o total vendido por cada filial — 3,0; d) identifique e imprima o mês e a filial da maior venda individual da matriz — 2,0.",
  codigo: null,
  rubrica: [
    { item: "(a) Duplo laço de leitura, 12 linhas por 5 colunas", pontos: 2 },
    { item: "(b) Acumulador por linha, reiniciado a cada mês, com laço externo em i e interno em j", pontos: 3 },
    { item: "(c) Acumulador por coluna, com laço externo em j e interno em i — inversão da ordem dos laços", pontos: 3 },
    { item: "(d) Guarda o maior valor junto com os dois índices, i e j, e os imprime", pontos: 2 }
  ]
}

];
