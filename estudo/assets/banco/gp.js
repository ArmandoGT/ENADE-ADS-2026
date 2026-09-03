/* Banco IA — Gestão de projetos e empreendedorismo (27 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["GP","Caminho crítico","Considere a tabela de atividades abaixo. A duração mínima do projeto é",
["16 dias","14 dias","12 dias","18 dias","20 dias"],0,
"Há dois caminhos: A→B→D = 4+6+3 = 13 e A→C→D = 4+9+3 = 16. O caminho crítico é o mais longo, logo o projeto não pode terminar antes de 16 dias. O 12 é C + D, deixando A de fora; o 18 é B + C + D, também sem A. O 14 e o 20 não correspondem a caminho algum do diagrama — 20 se aproxima da soma de todas as durações, 22, que seria o prazo se nada pudesse ocorrer em paralelo, e é justamente o paralelismo entre B e C que o caminho crítico captura. Atrasar C atrasa o projeto; atrasar B tem 3 dias de folga.",
"Atividade | Duração | Predecessora\n    A     |  4 dias |     —\n    B     |  6 dias |     A\n    C     |  9 dias |     A\n    D     |  3 dias |   B e C",
 {id:"gp-0001",hab:"I"}],

["GP","Caminho crítico","A folga total de uma atividade que pertence ao caminho crítico é",
["igual à sua duração.","indefinida.","igual à duração do projeto.","sempre maior que zero.","zero."],4,
"Folga zero é a definição operacional do caminho crítico: qualquer atraso ali se propaga integralmente para o término do projeto. Ser igual à própria duração da atividade não faz sentido, porque folga é margem de atraso e não medida de trabalho. Ser igual à duração do projeto descreveria uma atividade que pode atrasar tudo sem consequência, o oposto de crítica. Ser indefinida confunde folga com dado ausente: ela é sempre calculável a partir das datas mais cedo e mais tarde. E ser sempre maior que zero é precisamente a característica das atividades que não estão no caminho crítico.",null,
 {id:"gp-0002",hab:"C"}],

["GP","Caminho crítico","Considere a rede de atividades abaixo. Se a atividade C atrasar 2 dias, o projeto",
["atrasa os mesmos 2 dias, que se propagam integralmente até o término.","não atrasa, pois C tem folga suficiente.","atrasa 4 dias, pela soma do atraso com a folga consumida no caminho.","antecipa 2 dias, já que C deixa de competir por recursos com as demais.","é interrompido, pois o atraso inviabiliza a rede de precedências."],1,
"O caminho crítico é A→B→D, com 15 dias. O caminho por C soma 4+5+3 = 12, deixando 3 dias de folga. Um atraso de 2 dias é absorvido sem afetar o término.",
"Atividade | Duração | Predecessora\n    A     |  4 dias |     —\n    B     |  8 dias |     A\n    C     |  5 dias |     A\n    D     |  3 dias |   B e C",
 {id:"gp-0003",hab:"I"}],

["GP","EAP","A Estrutura Analítica do Projeto (EAP/WBS) decompõe o projeto em",
["fases cronológicas sucessivas, do início ao encerramento formal do projeto.","atividades agrupadas pelo responsável por sua execução dentro da equipe.","entregas e pacotes de trabalho, do maior para o menor nível de detalhe.","riscos identificados e as respostas planejadas para cada um deles.","custos previstos, distribuídos pelos centros contábeis da organização."],2,
"A EAP é orientada a ENTREGAS, não a atividades nem ao tempo. O menor nível é o pacote de trabalho, base para estimar custo e prazo.",null,
 {id:"gp-0004",hab:"C"}],

["GP","EAP","A regra dos 100% aplicada à EAP estabelece que",
["cada pacote de trabalho da estrutura deve consumir no máximo cem horas de esforço da equipe alocada ao projeto.","o projeto só pode ser encerrado quando a totalidade das atividades previstas estiver concluída e formalmente aceita pelo cliente.","a soma dos elementos de um nível deve representar a totalidade do escopo do elemento superior, sem faltas nem excessos.","cada entrega prevista na estrutura deve atingir 100% de conformidade com os critérios de qualidade acordados.","a estrutura deve conter no máximo cem elementos, para que continue legível e gerenciável pela equipe do projeto."],2,
"A soma dos elementos de um nível tem de representar todo o escopo do elemento superior, sem faltas nem excessos: se algo não está na EAP, não está no escopo, e nada aparece num nível inferior que não decorra do de cima. Limitar cada pacote de trabalho a cem horas de esforço é regra prática de decomposição adotada por algumas equipes, e não o que o nome designa. Encerrar o projeto só com a totalidade das atividades concluída e aceita pelo cliente é encerramento, não estrutura. Exigir 100% de conformidade com critérios de qualidade é outra área de conhecimento. E limitar a estrutura a cem elementos, por legibilidade, troca completude por contagem.",null,
 {id:"gp-0005",hab:"C"}],

["GP","PMBOK","A área de conhecimento responsável por identificar as partes interessadas e gerenciar seu engajamento é",
["gerenciamento das partes interessadas.","gerenciamento do escopo.","gerenciamento das comunicações.","gerenciamento dos recursos.","gerenciamento da qualidade."],0,
"Identificar, analisar e engajar as partes interessadas é área própria. O gerenciamento do escopo trata do que entra e do que fica de fora do trabalho. O das comunicações trata do fluxo de informação — quem recebe o quê, quando e por qual meio —, e é a confusão mais frequente, mas engajar não é informar. O de recursos trata das pessoas e dos materiais alocados, sob a ótica da disponibilidade, e não do interesse no resultado. E o da qualidade trata da conformidade das entregas com os requisitos.",null,
 {id:"gp-0006",hab:"C"}],

["GP","PMBOK","O termo de abertura do projeto (project charter) tem por função",
["autorizar formalmente o projeto e conferir ao gerente autoridade para aplicar recursos.","detalhar o cronograma das atividades e a alocação dos recursos previstos.","registrar as lições aprendidas ao longo da execução para uso futuro.","definir os critérios de aceitação de cada entrega acordada com o cliente.","estabelecer o orçamento detalhado por pacote de trabalho da estrutura."],0,
"É o documento de autorização, emitido pelo patrocinador. Cronograma e orçamento detalhados vêm depois, no planejamento.",null,
 {id:"gp-0007",hab:"C"}],

["GP","PMBOK","Na gestão do escopo, o fenômeno conhecido como scope creep refere-se a",
["crescimento não controlado do escopo, sem ajuste correspondente de prazo, custo e recursos.","redução deliberada do escopo por decisão formal do patrocinador do projeto.","divisão do escopo já aprovado em pacotes de trabalho dentro da estrutura analítica do projeto.","validação do escopo entregue pelo cliente ao término de cada fase do projeto.","documentação do escopo preliminar no termo de abertura assinado no início."],0,
"Scope creep é o escopo crescer sem controle, sem ajuste correspondente de prazo, custo e recursos. Reduzir o escopo por decisão formal do patrocinador é mudança aprovada — o contrário do descontrole. Dividir o escopo já aprovado em pacotes de trabalho é a decomposição feita na estrutura analítica. Validar o escopo entregue com o cliente ao término de cada fase é o processo de validação, que aceita entregas. E documentar o escopo preliminar no termo de abertura é o começo formal do projeto. O problema nunca é mudar: é mudar sem passar pelo controle integrado de mudanças.",null,
 {id:"gp-0008",hab:"C"}],

["GP","Estimativas","Na estimativa de três pontos PERT, a duração esperada é calculada por",
["(otimista + 4 × mais provável + pessimista) / 6","(otimista + pessimista) / 2, média simples entre os dois extremos","(otimista + mais provável + pessimista) / 3","mais provável × 1,5, aplicando margem fixa de contingência","pessimista − otimista, amplitude entre os cenários extremos"],0,
"A média ponderada dá peso 4 ao valor mais provável, suavizando os extremos. A média simples dos três valores é a estimativa triangular, fórmula diferente.",null,
 {id:"gp-0009",hab:"C"}],

["GP","Estimativas","Uma atividade tem estimativas otimista de 4 dias, mais provável de 6 e pessimista de 14. Pela distribuição beta (PERT), a duração esperada é",
["6 dias","7 dias","8 dias","9 dias","10 dias"],1,
"(4 + 4×6 + 14) / 6 = (4 + 24 + 14) / 6 = 42 / 6 = 7 dias. O resultado fica acima do mais provável, puxado pelo pessimista distante — quem responde 6 toma o valor mais provável como se fosse a duração esperada. O 8 é a média aritmética simples dos três, (4 + 6 + 14) / 3, que ignora o peso quádruplo do mais provável. O 9 é a média entre otimista e pessimista, (4 + 14) / 2. E 10 não corresponde a combinação alguma dos três valores.",null,
 {id:"gp-0010",hab:"C"}],

["GP","Valor agregado","Em um projeto, o valor planejado (VP) é 100.000, o valor agregado (VA) é 80.000 e o custo real (CR) é 90.000. A situação do projeto é",
["adiantado e abaixo do orçamento.","atrasado e acima do orçamento.","adiantado e acima do orçamento.","no prazo e no orçamento.","atrasado e abaixo do orçamento."],1,
"Variação de prazo = VA − VP = 80.000 − 100.000 = −20.000: entregou-se menos do que se planejou, logo o projeto está atrasado. Variação de custo = VA − CR = 80.000 − 90.000 = −10.000: gastou-se mais do que se entregou, logo acima do orçamento. Dizer adiantado inverte o sinal da primeira variação; dizer abaixo do orçamento inverte o da segunda. Estar no prazo e no orçamento exigiria as duas variações em zero. Valor negativo é sempre má notícia nos dois indicadores, e a armadilha é ler custo real maior como sinal de que se trabalhou mais.",null,
 {id:"gp-0011",hab:"C"}],

["GP","Riscos","Um risco identificado com alta probabilidade e alto impacto deve ser tratado prioritariamente com estratégia de",
["mitigação ou eliminação, reduzindo probabilidade ou impacto.","aceitação passiva, com registro no plano e acompanhamento periódico.","transferência a terceiro por meio de apólice de seguro específica.","escalonamento ao patrocinador, por exceder a alçada do gerente.","registro no relatório final, para servir de lição aprendida."],0,
"Alta exposição exige ação. Aceitação passiva reserva-se a riscos de baixa exposição; transferência é uma opção, mas não a única, e raramente elimina o impacto reputacional.",null,
 {id:"gp-0012",hab:"C"}],

["GP","Riscos","No registro de riscos, um risco de oportunidade (positivo) pode ser tratado com a estratégia de",
["explorar, aumentando a probabilidade de que se concretize.","mitigar, reduzindo a probabilidade de que o evento venha efetivamente a ocorrer.","evitar, alterando o plano do projeto para que o evento deixe de ser possível.","transferir a um terceiro, por meio de contrato de seguro ou de terceirização.","aceitar de forma passiva, sem qualquer ação preventiva ou reserva de contingência."],0,
"Riscos positivos têm estratégias próprias: explorar, melhorar, compartilhar e aceitar. Mitigar e evitar aplicam-se apenas a riscos negativos.",null,
 {id:"gp-0013",hab:"C"}],

["GP","Gestão de equipes","Segundo o modelo de Tuckman, a fase em que os conflitos entre membros da equipe emergem é a de",
["formação (forming).","desempenho (performing).","normatização (norming).","tormenta (storming).","dissolução (adjourning)."],3,
"Storming é a fase do atrito, quando papéis e liderança são disputados. Atravessá-la — e não evitá-la — é o que leva à normatização e ao desempenho.",null,
 {id:"gp-0014",hab:"C"}],

["GP","Contratos","Em um contrato de preço fixo (fixed price), o risco financeiro de estouro de custo recai principalmente sobre",
["o cliente.","o fornecedor.","ambos igualmente.","o órgão regulador.","o usuário final."],1,
"Preço fixo transfere o risco de custo ao fornecedor: o preço não muda, e o excedente sai da margem dele, razão de embutir contingência. O cliente assume esse risco no contrato por administração, de custo reembolsável, em que paga o que for gasto. Dividir igualmente entre ambos descreve contratos de incentivo com partilha, que são um terceiro arranjo. O órgão regulador não é parte do contrato. E o usuário final não responde por custo de contrato do qual não participa.",null,
 {id:"gp-0015",hab:"C"}],

["GP","Empreendedorismo","No Business Model Canvas, o bloco “Proposta de Valor” responde à pergunta",
["quanto custa operar o negócio e como os custos se distribuem?","quais parceiros são indispensáveis para viabilizar a operação?","que problema do cliente resolvemos e por que ele nos escolheria?","por quais canais o produto chega até o cliente e é comunicado?","quais recursos e capacidades são necessários para entregar?"],2,
"A proposta de valor responde que problema do cliente se resolve e por que ele escolheria a sua solução — é o centro do quadro, ao qual os outros oito blocos se conectam. Quanto custa operar o negócio e como os custos se distribuem é a estrutura de custos. Quais parceiros são indispensáveis para viabilizar a operação é o bloco de parcerias-chave. Por quais canais o produto chega até o cliente e é comunicado é o bloco de canais. E quais recursos e capacidades são necessários para entregar é o de recursos-chave. Confundir a proposta de valor com a descrição do produto é o erro mais comum.",null,
 {id:"gp-0016",hab:"C"}],

["GP","Empreendedorismo","O Business Model Canvas é composto por",
["quatro blocos.","sete blocos.","doze blocos.","nove blocos.","quinze blocos."],3,
"São nove: segmentos de clientes, proposta de valor, canais, relacionamento, fontes de receita, recursos-chave, atividades-chave, parcerias-chave e estrutura de custos. O 4 corresponde às quatro áreas em que o quadro costuma ser agrupado — oferta, cliente, infraestrutura e finanças —, que não são blocos. O 7 e o 12 não correspondem a versão alguma do modelo. E 15 confunde o Canvas com quadros derivados, mais detalhados, que fragmentam esses mesmos nove.",null,
 {id:"gp-0017",hab:"C"}],

["GP","Empreendedorismo","Um Produto Mínimo Viável (MVP) caracteriza-se por",
["ser a versão final do produto com todas as funcionalidades.","exigir o investimento máximo previsto antes do primeiro lançamento.","ser um protótipo descartável, construído sem qualquer contato com usuários.","prescindir de métricas de acompanhamento, por ser uma versão exploratória.","ser a menor versão capaz de gerar aprendizado validado sobre a hipótese de negócio."],4,
"O MVP é a menor versão capaz de gerar aprendizado validado sobre a hipótese de negócio: existe para APRENDER, não para entregar. Ser a versão final do produto com todas as funcionalidades é o oposto — construir tudo antes de saber se alguém quer. Exigir o investimento máximo antes do primeiro lançamento inverte a lógica de arriscar pouco enquanto a hipótese é incerta. Ser protótipo descartável construído sem qualquer contato com usuários contradiz o essencial, porque sem usuário não há aprendizado validado. E prescindir de métricas de acompanhamento destruiria a única saída útil do experimento, que é a medida.",null,
 {id:"gp-0018",hab:"C"}],

["GP","Empreendedorismo","O conceito de pivô (pivot), no vocabulário de startups, significa",
["encerrar as operações da empresa assim que a hipótese inicial do negócio se mostra falsa.","admitir novos sócios que tragam capital e experiência de mercado.","ampliar o investimento em marketing para sustentar o modelo já validado.","mudar de forma estruturada um elemento central do modelo de negócio, mantendo o aprendizado acumulado.","registrar a marca e a identidade visual da empresa antes do lançamento comercial do produto no mercado."],3,
"Pivô é mudar de forma estruturada um elemento central do modelo de negócio, preservando o aprendizado acumulado: correção de rota fundamentada em evidência. Encerrar as operações assim que a hipótese inicial se mostra falsa é desistir, e é justamente a alternativa ao pivô. Admitir novos sócios que tragam capital e experiência é captação, e não altera o modelo. Ampliar o investimento em marketing para sustentar um modelo já validado é escalar, movimento oposto ao de trocar a hipótese. E registrar a marca e a identidade visual antes do lançamento é providência jurídica, sem relação com o modelo.",null,
 {id:"gp-0019",hab:"C"}],

["GP","Empreendedorismo","O plano de negócios distingue-se do Canvas principalmente por",
["ser mais curto e visual, cabendo em uma única página e dispensando qualquer detalhamento financeiro.","não incluir análise de concorrência, que é considerada informação estratégica e por isso mantida sigilosa.","ser um documento detalhado, com projeções financeiras e análise de mercado, adequado à captação de recursos.","ser exclusivo de empresas de base tecnológica, cujo modelo de negócio exige projeções de crescimento acelerado.","dispensar a definição do público-alvo, que só é exigida em documentos apresentados a investidores externos."],2,
"Canvas é ferramenta de visualização e hipótese, de uma página. O plano de negócios é o documento formal e detalhado, exigido por bancos, investidores e editais.",null,
 {id:"gp-0020",hab:"C"}],

["GP","Governança","O escritório de projetos (PMO) tem como função típica",
["padronizar práticas, apoiar as equipes e consolidar informações de portfólio para a alta gestão.","executar tecnicamente todos os projetos da organização, assumindo as entregas no lugar das áreas.","substituir os gerentes de projeto na condução técnica das entregas sob responsabilidade da área.","aprovar os orçamentos financeiros dos projetos e das demais áreas da empresa.","realizar a contratação e o desligamento do pessoal alocado aos projetos da organização."],0,
"A função central do PMO é padronizar práticas, apoiar as equipes e consolidar informações de portfólio para a alta gestão — ele pode ser de suporte, de controle ou diretivo. Executar tecnicamente todos os projetos, assumindo as entregas no lugar das áreas, é o que ele não faz nem com o mandato mais forte. Substituir os gerentes de projeto na condução técnica confunde apoio com execução. Aprovar os orçamentos financeiros dos projetos e das demais áreas é atribuição da diretoria ou do comitê. E realizar a contratação e o desligamento do pessoal é do RH, ainda que o PMO aponte a necessidade.",null,
 {id:"gp-0021",hab:"C"}],

["GP","Métodos","A principal diferença entre gerenciamento de projetos preditivo e adaptativo é que, no adaptativo,",
["o planejamento é feito uma única vez, no início, e não sofre revisões posteriores.","o custo total tende a ser menor, pois há menos documentação formal a produzir.","o escopo é elaborado progressivamente, e prazo e custo tendem a ser fixados.","os indicadores quantitativos são substituídos por avaliações qualitativas da equipe.","a participação do cliente se limita à aprovação formal das entregas contratadas."],2,
"É a inversão do triângulo: no preditivo fixa-se o escopo e variam prazo e custo; no adaptativo fixam-se prazo e custo — a iteração — e o escopo é elaborado progressivamente. Planejar uma única vez, no início, sem revisões posteriores, é caricatura até do preditivo, que também replaneja. Custo total menor por haver menos documentação formal a produzir não é característica nem promessa do adaptativo. Substituir os indicadores quantitativos por avaliações qualitativas da equipe é falso: velocidade e burndown são medidas numéricas. E limitar a participação do cliente à aprovação formal das entregas contratadas é exatamente o que o adaptativo abandona, ao pedir presença contínua.",null,
 {id:"gp-0022",hab:"C"}],
["GP","Empreendedorismo","No Business Model Canvas, o bloco proposta de valor descreve",
["o conjunto de funcionalidades técnicas que o produto oferecerá aos usuários em sua primeira versão comercial.","o problema que o negócio resolve para um segmento específico e a razão pela qual esse segmento o escolheria.","a projeção de receitas e despesas do negócio para os primeiros exercícios após o início das operações.","a estrutura societária e a divisão de participação entre os fundadores e eventuais investidores do negócio.","os canais de distribuição pelos quais o produto chegará aos clientes nos mercados em que atuará."],1,
"Proposta de valor é sobre o cliente, não sobre o produto. Lista de funcionalidade descreve o que foi construído; proposta de valor responde por que alguém trocaria o que já usa por isso.",null,
 {id:"gp-0023",hab:"C"}],

["GP","Empreendedorismo","Uma startup desenvolve durante dezoito meses um produto completo antes de apresentá-lo ao mercado, e descobre no lançamento que o problema atacado não era relevante para o público. O conceito que orienta a prática oposta é",
["a análise de viabilidade econômica, que projeta o retorno do investimento antes do início do desenvolvimento.","o planejamento estratégico de longo prazo, que define metas e marcos para os primeiros anos de operação.","o produto mínimo viável, que busca validar a hipótese central do negócio com o menor esforço de construção possível.","a pesquisa de mercado quantitativa, que dimensiona o tamanho do público potencial antes de qualquer investimento.","a proteção da propriedade intelectual, que garante exclusividade sobre a solução desenvolvida pela empresa."],2,
"O produto mínimo viável busca validar a hipótese central do negócio com o menor esforço de construção: é o menor experimento capaz de responder à pergunta mais arriscada. A análise de viabilidade econômica projeta o retorno de um problema cuja relevância continua não verificada — calcula bem o que talvez ninguém queira. O planejamento estratégico de longo prazo define metas e marcos para os primeiros anos, e nada nele testa a hipótese. A pesquisa de mercado quantitativa dimensiona o público potencial, o que ajuda, mas mede intenção declarada e não uso real. E a proteção da propriedade intelectual garante exclusividade sobre uma solução que pode não ter demanda. Dezoito meses de construção só adiaram a descoberta que uma semana de conversa antecipava.",null,
 {id:"gp-0024",hab:"C"}],

["GP","Empreendedorismo","O termo pivotar, no vocabulário de startups, designa",
["a substituição da equipe fundadora por gestores profissionais contratados no mercado após a entrada de investidores.","a captação de recursos junto a investidores em troca de participação societária na empresa recém-criada.","a mudança de rumo em um elemento central do modelo de negócio, mantendo o aprendizado já acumulado.","a expansão da operação para novos mercados geográficos após a consolidação no mercado de origem.","o encerramento das atividades e a devolução do capital remanescente aos investidores da empresa."],2,
"Pivotar é trocar uma hipótese, não recomeçar do zero: mantém-se o que se aprendeu sobre o cliente e muda-se o segmento, o canal ou o problema atacado. Trocar tudo ao mesmo tempo não é pivô, é outra empresa.",null,
 {id:"gp-0025",hab:"C"}],

["GP","Empreendedorismo","Uma empresa de software adota modelo de receita por assinatura em vez de venda de licença perpétua. A principal implicação dessa escolha é",
["o aumento imediato da receita, já que o valor total do contrato é reconhecido no momento da assinatura.","a redução dos custos de suporte, uma vez que o cliente assume a manutenção da versão instalada em seu ambiente.","a receita passa a depender da retenção contínua do cliente, o que desloca o esforço da venda para o uso recorrente.","a eliminação da necessidade de atualizações, pois o cliente permanece na versão contratada durante toda a vigência.","a impossibilidade de atender clientes corporativos, que exigem contratos com prazo determinado e valor fechado."],2,
"Na licença perpétua o dinheiro entra uma vez e a relação praticamente se encerra; na assinatura o cliente decide de novo a cada ciclo, e a receita passa a depender da retenção contínua, deslocando o esforço da venda para o uso. Não há aumento imediato de receita pelo reconhecimento do valor total do contrato no momento da assinatura: o reconhecimento é distribuído pela vigência, e o caixa inicial costuma cair. Os custos de suporte não se reduzem — crescem, porque o fornecedor passa a operar o serviço em vez de entregá-lo instalado. As atualizações não deixam de ser necessárias; entregá-las é parte do que sustenta a renovação. E clientes corporativos assinam contratos desse tipo rotineiramente, com prazo e valor definidos.",null,
 {id:"gp-0026",hab:"C"}],

["GP","Empreendedorismo","Ao avaliar a oportunidade de um novo produto digital, a análise do mercado endereçável serve para",
["dimensionar o tamanho do público que efetivamente pode ser alcançado, evitando decisões apoiadas em números irreais.","definir o preço de venda do produto com base nos valores praticados pelos concorrentes já estabelecidos no setor.","identificar as funcionalidades que os concorrentes oferecem e que precisam constar da primeira versão do produto.","estimar o prazo necessário para o desenvolvimento completo da solução até a sua disponibilização ao mercado.","selecionar a tecnologia mais adequada às características do público que será atendido pelo produto proposto."],0,
"O que interessa é a parcela do público que o negócio consegue efetivamente alcançar com o canal e o preço que pratica — o erro clássico é multiplicar a população do país por um ticket e chamar isso de mercado. Definir o preço de venda com base nos valores dos concorrentes é precificação, decisão posterior e distinta. Identificar as funcionalidades que os concorrentes oferecem é análise competitiva de produto. Estimar o prazo necessário até a disponibilização é planejamento de desenvolvimento. E selecionar a tecnologia mais adequada ao público é decisão de arquitetura. Nenhuma dessas responde à pergunta de tamanho, que é a que decide se vale a pena começar.",null,
 {id:"gp-0027",hab:"C"}],

["GP","Riscos","Sobre gerência de riscos em projetos, avalie as afirmações a seguir.\nI. O risco é caracterizado por probabilidade e impacto, e a combinação dos dois orienta a priorização.\nII. Mitigar um risco é agir para reduzir sua probabilidade, seu impacto, ou ambos.\nIII. Aceitar um risco significa deixar de monitorá-lo, por se ter decidido não agir sobre ele.\nÉ correto apenas o que se afirma em",
["I e II.","I.","II.","II e III.","I, II e III."],0,
"III confunde aceitação com omissão. Aceitar é uma resposta deliberada — decide-se não gastar agora para tratar —, e vem acompanhada de monitoramento e, quando o caso pede, de reserva de contingência. Risco aceito que ninguém acompanha não foi aceito: foi esquecido, e a diferença aparece no dia em que ele se materializa.",null,
 {"id":"gp-0028","hab":"J"}],

["GP","Métodos","Sobre métodos ágeis, avalie as afirmações a seguir.\nI. No Scrum, o Product Owner responde pela priorização do backlog do produto.\nII. Métodos ágeis dispensam documentação, conforme estabelece o Manifesto Ágil.\nIII. A entrega incremental antecipa a validação com o cliente e reduz o custo de mudar de rumo.\nÉ correto apenas o que se afirma em",
["I.","I e III.","II.","II e III.","I, II e III."],1,
"II distorce o Manifesto, que diz preferir software em funcionamento A documentação abrangente — e acrescenta explicitamente que, embora haja valor nos itens à direita, valoriza-se mais os da esquerda. Preferir não é dispensar. É a leitura equivocada mais difundida do texto, e costuma servir de justificativa para não documentar nada.",null,
 {"id":"gp-0029","hab":"J"}],

["GP","Valor agregado","Em um projeto controlado por valor agregado, avalie as afirmações a seguir.\nI. O valor agregado (VA) corresponde ao valor efetivamente desembolsado no período.\nII. O índice de desempenho de custo (IDC) menor que 1 indica que se gastou mais do que o previsto para o trabalho realizado.\nIII. O índice de desempenho de prazo (IDP) menor que 1 indica atraso em relação ao planejado.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I e III.","I, II e III."],2,
"I descreve o custo real (CR), não o valor agregado. VA é o valor orçado do trabalho que foi de fato concluído — mede entrega, não desembolso. Confundir os dois esvazia a técnica inteira, porque é justamente a distância entre o que se entregou e o que se gastou que os índices medem.",null,
 {"id":"gp-0030","hab":"J"}],

["GP","EAP","Avalie a asserção a seguir e a razão proposta para ela.\nI. A estrutura analítica do projeto (EAP) facilita a estimativa de prazo e custo.\nPORQUE\nII. A EAP é representada graficamente em forma de árvore hierárquica.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],1,
"As duas são verdadeiras, mas a segunda é sobre a forma de representação, não sobre a causa do benefício. O que torna a estimativa mais confiável é a decomposição em pacotes de trabalho pequenos o bastante para serem estimados com alguma segurança — estimar dez tarefas de dois dias erra menos que estimar uma de vinte. A árvore é como se desenha o resultado, não o que o produz.",null,
 {"id":"gp-0031","hab":"A"}],

["GP","Caminho crítico","Avalie a asserção a seguir e a razão proposta para ela.\nI. Atrasar uma atividade do caminho crítico atrasa a data final do projeto.\nPORQUE\nII. O caminho crítico é aquele que reúne as atividades de maior custo orçado dentro do projeto.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],2,
"A I é verdadeira e é a própria definição de criticidade: atrasar uma atividade de folga zero atrasa a data final do projeto. A II é falsa porque troca duração por custo — o caminho crítico é a sequência mais longa em DURAÇÃO entre o início e o fim, e não a que reúne as atividades de maior custo orçado. Atividade cara pode estar fora dele e atividade barata pode estar dentro; orçamento e cronograma são dimensões distintas, e confundi-las leva a proteger o que não precisa de proteção.",null,
 {"id":"gp-0032","hab":"A"}],

["GP","PMBOK","Avalie a asserção a seguir e a razão proposta para ela.\nI. O escopo de um projeto, uma vez aprovado na linha de base, não pode ser alterado.\nPORQUE\nII. Qualquer mudança de escopo caracteriza falha de planejamento e deve ser recusada pelo gerente do projeto.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],4,
"As duas são falsas, e a segunda é a crença que sustentaria a primeira. O escopo aprovado na linha de base pode, sim, ser alterado: existe processo formal para isso — o controle integrado de mudanças, com solicitação, análise de impacto e decisão. E nem toda mudança caracteriza falha de planejamento a ser recusada pelo gerente do projeto; o que se combate é a mudança não avaliada e não registrada, o aumento silencioso de escopo. Recusar tudo entrega no prazo um produto que já não serve.",null,
 {"id":"gp-0033","hab":"A"}],

["GP","Valor agregado","Com base nos valores da tabela, o projeto está",
["adiantado e abaixo do orçamento.","no prazo e dentro do orçamento.","adiantado, porém acima do orçamento.","atrasado e acima do orçamento, com IDP de 0,8 e IDC de aproximadamente 0,89.","atrasado, porém abaixo do orçamento."],3,
"IDP = VA / VP = 240 / 300 = 0,80: entregou-se 80% do que estava planejado para a data, logo há atraso, e nada permite chamar o projeto de adiantado. IDC = VA / CR = 240 / 270 ≈ 0,89: gastaram-se R$ 270 mil para entregar R$ 240 mil de trabalho, logo há estouro, e não se está abaixo do orçamento. Estar no prazo e dentro do orçamento exigiria os dois índices em 1. Índice menor que 1 é má notícia nas duas medidas, e o erro comum é comparar CR com VP: 270 contra 300 daria impressão de economia, porque compara gasto com plano em vez de gasto com entrega.",null,
 {"id":"gp-0034","hab":"I","art":[{"t":"tabela","cap":"Situação de um projeto ao final do terceiro mês","cab":["Medida","Valor (R$ mil)"],"al":["","num"],"linhas":[["Valor planejado (VP)","300"],["Valor agregado (VA)","240"],["Custo real (CR)","270"]]}]}],

["GP","Caminho crítico","A duração do caminho crítico do projeto é de",
["18 dias.","12 dias.","15 dias.","21 dias.","14 dias."],0,
"Há dois caminhos: A→B→D→F = 4 + 6 + 5 + 3 = 18 dias, e A→C→E→F = 4 + 3 + 2 + 3 = 12 dias. O crítico é o mais LONGO, 18 dias, e é ele que define a data de término; o outro tem 6 dias de folga. A alternativa de 12 escolhe o caminho mais curto, que é o erro de ler “crítico” como “mínimo”, e a de 21 soma todas as durações como se não houvesse paralelismo.",null,
 {"id":"gp-0035","hab":"X","art":[{"t":"tabela","cap":"Atividades de um projeto","cab":["Atividade","Duração (dias)","Predecessora"],"al":["","num",""],"linhas":[["A","4","—"],["B","6","A"],["C","3","A"],["D","5","B"],["E","2","C"],["F","3","D, E"]]}]}],

["GP","Valor agregado","A estimativa no término (ENT), calculada como ONT dividido pelo índice de desempenho de custo, é de",
["R$ 1.000 mil.","R$ 1.250 mil.","R$ 800 mil.","R$ 1.100 mil.","R$ 1.500 mil."],1,
"IDC = VA / CR = 400 / 500 = 0,80. ENT = ONT / IDC = 1.000 / 0,80 = 1.250. Mantido o desempenho de custo observado até aqui, o projeto termina 25% acima do orçado. R$ 1.000 mil apenas repete o ONT, supondo que o estouro já ocorrido não se projete no restante — hipótese que só se sustenta se a causa for reconhecidamente pontual, e nesse caso a fórmula usada é outra. R$ 800 mil multiplica o ONT pelo índice em vez de dividir, invertendo o sentido do ajuste. R$ 1.100 mil soma ao orçamento apenas a diferença já gasta, sem projetá-la até o fim. E R$ 1.500 mil superestima, como se o índice fosse 0,67.",null,
 {"id":"gp-0036","hab":"X","art":[{"t":"tabela","cap":"Situação de um projeto no quinto mês","cab":["Medida","Valor (R$ mil)"],"al":["","num"],"linhas":[["Orçamento no término (ONT)","1.000"],["Valor agregado (VA)","400"],["Custo real (CR)","500"]]}]}],

["GP","Estimativas","Considerando jornada de 8 horas por dia e atividade de 10 dias úteis, o custo total da equipe na atividade é de",
["R$ 13.400.","R$ 22.400.","R$ 12.400.","R$ 17.600.","R$ 11.200."],0,
"Horas efetivas em 10 dias de 8 horas: analista 0,50 × 80 = 40 h; desenvolvedor 80 h; testador 0,25 × 80 = 20 h. Custos: 40 × 120 = 4.800; 80 × 90 = 7.200; 20 × 70 = 1.400. Total 13.400. O 22.400 ignora a dedicação parcial e cobra os três em tempo integral — o erro de orçar por cabeça em vez de por hora alocada. O 17.600 comete o mesmo erro só com o testador. E 12.400 e 11.200 ficam abaixo por deixar trabalho de fora: omitir o testador daria 12.000, e nenhum dos dois sai de uma conta completa. Conferir a unidade de cada fator antes de multiplicar é o que evita os quatro.",null,
 {"id":"gp-0037","hab":"X","art":[{"t":"tabela","cap":"Equipe alocada a uma atividade","cab":["Recurso","Dedicação","Custo/hora (R$)"],"al":["","num","num"],"linhas":[["Analista","50%","120"],["Desenvolvedor","100%","90"],["Testador","25%","70"]]}]}],

["GP","Gestão de equipes","Em uma equipe de oito pessoas, duas concentram o conhecimento de um módulo crítico e são as únicas que conseguem corrigir defeitos nele. Elas estão sobrecarregadas, e o restante da equipe tem ociosidade em alguns períodos. Uma delas comunicou que sairá da empresa em dois meses. O gerente considera contratar um substituto com perfil semelhante.\nA medida mais adequada, além da eventual contratação, é",
["documentar o módulo em detalhe antes da saída, transferindo o conhecimento por meio do documento.","redistribuir imediatamente todas as tarefas do módulo para os demais membros, para forçar o aprendizado.","iniciar programação em par e revisão cruzada no módulo crítico, difundindo o conhecimento antes da saída.","isolar o módulo crítico e congelar alterações nele até a contratação do substituto.","oferecer aumento salarial para reter a pessoa que anunciou a saída."],2,
"O problema não é a saída de uma pessoa, é o conhecimento estar concentrado em duas — e continuaria concentrado mesmo se ela ficasse. Programação em par e revisão cruzada transferem entendimento em uso, que é como conhecimento de código de fato se transmite, e usam a ociosidade que já existe. Documento ajuda e não substitui: descreve o que se sabe dizer, não o que se sabe fazer. Redistribuir tudo de uma vez, sem acompanhamento, troca o risco de saída pelo risco de defeito. Congelar alterações num módulo crítico só adia.",null,
 {"id":"gp-0038","hab":"E"}],

["GP","Contratos","Uma prefeitura contratará o desenvolvimento de um sistema cujo escopo detalhado ainda não é conhecido: sabe-se o objetivo geral e há incerteza sobre integrações com sistemas legados de terceiros, cuja documentação é incompleta. O prazo total é de dezoito meses e o orçamento é limitado, mas há flexibilidade quanto ao conjunto exato de funcionalidades entregues.\nA modalidade contratual mais adequada é",
["preço fechado global, com escopo integralmente especificado antes da assinatura.","contrato por administração, sem qualquer vínculo entre pagamento e entrega.","preço fechado por entrega, com escopo detalhado apenas do primeiro trimestre e replanejamento a cada ciclo.","contrato de risco, em que o fornecedor só recebe se o sistema for integralmente aceito ao final dos dezoito meses.","compra de licença de produto pronto, adaptando o processo da prefeitura ao software."],2,
"Com escopo incerto e orçamento limitado mas escopo flexível, preço fechado por ciclo curto alinha os incentivos: cada trimestre tem escopo conhecido o bastante para ser precificado, e o replanejamento incorpora o que se aprendeu sobre as integrações. Preço fechado global sobre escopo desconhecido transfere ao fornecedor um risco que ele precifica em sobrepreço ou disputa em aditivos. Administração pura remove o incentivo à entrega, e contrato de risco a dezoito meses concentra todo o risco no fim.",null,
 {"id":"gp-0039","hab":"E"}],

["GP","Empreendedorismo","Uma startup desenvolveu, em nove meses, uma plataforma completa de gestão para pequenas clínicas, com agendamento, prontuário, faturamento e integração com convênios. Ao lançar, encontrou baixa adesão: as clínicas visitadas afirmam que já resolvem agendamento com aplicativos de mensagem e que o problema que realmente as incomoda é a glosa de convênios, funcionalidade que a plataforma trata de forma superficial. O caixa suporta mais quatro meses.\nA conduta mais adequada é",
["ampliar o investimento em marketing, uma vez que o produto está completo e o problema é de divulgação.","encerrar a operação, já que a hipótese inicial do negócio se mostrou incorreta.","manter o roteiro de produto e aguardar a maturação do mercado nos próximos meses.","acrescentar novas funcionalidades ao produto, ampliando o valor entregue às clínicas.","pivotar, concentrando o produto na gestão de glosas, que é o problema que os clientes declaram ter."],4,
"A evidência de campo é específica: o problema que dói é a glosa, e o produto atual o trata de forma superficial. Pivotar é mudar de forma estruturada um elemento central do modelo, preservando o aprendizado e a base de clientes já mapeada — não é desistir nem mudar ao acaso. Investir em marketing com quatro meses de caixa é acelerar a queima para vender o que o cliente disse não querer. Acrescentar funcionalidades agravaria o mesmo erro que produziu nove meses de construção sem validação.",null,
 {"id":"gp-0040","hab":"E"}]

]);
