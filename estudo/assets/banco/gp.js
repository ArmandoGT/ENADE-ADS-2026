/* Banco IA — Gestão de projetos e empreendedorismo (27 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["GP","Caminho crítico","Considere a tabela de atividades abaixo. A duração mínima do projeto é",
["12 dias","14 dias","16 dias","18 dias","20 dias"],2,
"Há dois caminhos: A→B→D = 4+6+3 = 13 e A→C→D = 4+9+3 = 16. O caminho crítico é o mais longo, logo o projeto não pode terminar antes de 16 dias. Atrasar C atrasa o projeto; atrasar B tem 3 dias de folga.",
"Atividade | Duração | Predecessora\n    A     |  4 dias |     —\n    B     |  6 dias |     A\n    C     |  9 dias |     A\n    D     |  3 dias |   B e C",
 {id:"gp-0001",hab:"I"}],

["GP","Caminho crítico","A folga total de uma atividade que pertence ao caminho crítico é",
["igual à sua duração.","zero.","igual à duração do projeto.","sempre maior que zero.","indefinida."],1,
"Folga zero é a definição operacional do caminho crítico: qualquer atraso ali propaga-se integralmente para o término do projeto.",null,
 {id:"gp-0002",hab:"C"}],

["GP","Caminho crítico","Considere a rede de atividades abaixo. Se a atividade C atrasar 2 dias, o projeto",
["atrasa os mesmos 2 dias, que se propagam integralmente até o término.","não atrasa, pois C tem folga suficiente.","atrasa 4 dias, pela soma do atraso com a folga consumida no caminho.","antecipa 2 dias, já que C deixa de competir por recursos com as demais.","é interrompido, pois o atraso inviabiliza a rede de precedências."],1,
"O caminho crítico é A→B→D, com 15 dias. O caminho por C soma 4+5+3 = 12, deixando 3 dias de folga. Um atraso de 2 dias é absorvido sem afetar o término.",
"Atividade | Duração | Predecessora\n    A     |  4 dias |     —\n    B     |  8 dias |     A\n    C     |  5 dias |     A\n    D     |  3 dias |   B e C",
 {id:"gp-0003",hab:"I"}],

["GP","EAP","A Estrutura Analítica do Projeto (EAP/WBS) decompõe o projeto em",
["fases cronológicas sucessivas, do início ao encerramento formal do projeto.","entregas e pacotes de trabalho, do maior para o menor nível de detalhe.","atividades agrupadas pelo responsável por sua execução dentro da equipe.","riscos identificados e as respostas planejadas para cada um deles.","custos previstos, distribuídos pelos centros contábeis da organização."],1,
"A EAP é orientada a ENTREGAS, não a atividades nem ao tempo. O menor nível é o pacote de trabalho, base para estimar custo e prazo.",null,
 {id:"gp-0004",hab:"C"}],

["GP","EAP","A regra dos 100% aplicada à EAP estabelece que",
["cada pacote de trabalho da estrutura deve consumir no máximo cem horas de esforço da equipe alocada ao projeto.","a soma dos elementos de um nível deve representar a totalidade do escopo do elemento superior, sem faltas nem excessos.","o projeto só pode ser encerrado quando a totalidade das atividades previstas estiver concluída e formalmente aceita pelo cliente.","cada entrega prevista na estrutura deve atingir 100% de conformidade com os critérios de qualidade acordados.","a estrutura deve conter no máximo cem elementos, para que continue legível e gerenciável pela equipe do projeto."],1,
"Se algo não está na EAP, não está no escopo. E nada pode aparecer num nível inferior que não decorra do superior — é o que garante a consistência da decomposição.",null,
 {id:"gp-0005",hab:"C"}],

["GP","PMBOK","A área de conhecimento responsável por identificar as partes interessadas e gerenciar seu engajamento é",
["gerenciamento do escopo.","gerenciamento das partes interessadas.","gerenciamento das comunicações.","gerenciamento dos recursos.","gerenciamento da qualidade."],1,
"Identificar, analisar e engajar stakeholders é área própria. Comunicações trata do fluxo de informação; as duas se apoiam, mas não se confundem.",null,
 {id:"gp-0006",hab:"C"}],

["GP","PMBOK","O termo de abertura do projeto (project charter) tem por função",
["detalhar o cronograma das atividades e a alocação dos recursos previstos.","autorizar formalmente o projeto e conferir ao gerente autoridade para aplicar recursos.","registrar as lições aprendidas ao longo da execução para uso futuro.","definir os critérios de aceitação de cada entrega acordada com o cliente.","estabelecer o orçamento detalhado por pacote de trabalho da estrutura."],1,
"É o documento de autorização, emitido pelo patrocinador. Cronograma e orçamento detalhados vêm depois, no planejamento.",null,
 {id:"gp-0007",hab:"C"}],

["GP","PMBOK","Na gestão do escopo, o fenômeno conhecido como scope creep refere-se a",
["redução deliberada do escopo por decisão formal do patrocinador do projeto.","crescimento não controlado do escopo, sem ajuste correspondente de prazo, custo e recursos.","divisão do escopo já aprovado em pacotes de trabalho dentro da estrutura analítica do projeto.","validação do escopo entregue pelo cliente ao término de cada fase do projeto.","documentação do escopo preliminar no termo de abertura assinado no início."],1,
"O problema não é mudar — é mudar sem passar pelo controle integrado de mudanças. Cada acréscimo “pequeno” não negociado corrói prazo e orçamento.",null,
 {id:"gp-0008",hab:"C"}],

["GP","Estimativas","Na estimativa de três pontos PERT, a duração esperada é calculada por",
["(otimista + pessimista) / 2, média simples entre os dois extremos","(otimista + 4 × mais provável + pessimista) / 6","(otimista + mais provável + pessimista) / 3","mais provável × 1,5, aplicando margem fixa de contingência","pessimista − otimista, amplitude entre os cenários extremos"],1,
"A média ponderada dá peso 4 ao valor mais provável, suavizando os extremos. A média simples dos três valores é a estimativa triangular, fórmula diferente.",null,
 {id:"gp-0009",hab:"C"}],

["GP","Estimativas","Uma atividade tem estimativas otimista de 4 dias, mais provável de 6 e pessimista de 14. Pela distribuição beta (PERT), a duração esperada é",
["6 dias","7 dias","8 dias","9 dias","10 dias"],1,
"(4 + 4×6 + 14) / 6 = (4 + 24 + 14) / 6 = 42 / 6 = 7 dias. Note que o resultado fica acima do mais provável, puxado pelo pessimista distante.",null,
 {id:"gp-0010",hab:"C"}],

["GP","Valor agregado","Em um projeto, o valor planejado (VP) é 100.000, o valor agregado (VA) é 80.000 e o custo real (CR) é 90.000. A situação do projeto é",
["adiantado e abaixo do orçamento.","atrasado e acima do orçamento.","adiantado e acima do orçamento.","no prazo e no orçamento.","atrasado e abaixo do orçamento."],1,
"Variação de prazo = VA − VP = −20.000 (atrasado). Variação de custo = VA − CR = −10.000 (gastou mais do que entregou). Valores negativos são sempre má notícia nos dois indicadores.",null,
 {id:"gp-0011",hab:"C"}],

["GP","Riscos","Um risco identificado com alta probabilidade e alto impacto deve ser tratado prioritariamente com estratégia de",
["aceitação passiva, com registro no plano e acompanhamento periódico.","mitigação ou eliminação, reduzindo probabilidade ou impacto.","transferência a terceiro por meio de apólice de seguro específica.","escalonamento ao patrocinador, por exceder a alçada do gerente.","registro no relatório final, para servir de lição aprendida."],1,
"Alta exposição exige ação. Aceitação passiva reserva-se a riscos de baixa exposição; transferência é uma opção, mas não a única, e raramente elimina o impacto reputacional.",null,
 {id:"gp-0012",hab:"C"}],

["GP","Riscos","No registro de riscos, um risco de oportunidade (positivo) pode ser tratado com a estratégia de",
["mitigar, reduzindo a probabilidade de que o evento venha efetivamente a ocorrer.","explorar, aumentando a probabilidade de que se concretize.","evitar, alterando o plano do projeto para que o evento deixe de ser possível.","transferir a um terceiro, por meio de contrato de seguro ou de terceirização.","aceitar de forma passiva, sem qualquer ação preventiva ou reserva de contingência."],1,
"Riscos positivos têm estratégias próprias: explorar, melhorar, compartilhar e aceitar. Mitigar e evitar aplicam-se apenas a riscos negativos.",null,
 {id:"gp-0013",hab:"C"}],

["GP","Gestão de equipes","Segundo o modelo de Tuckman, a fase em que os conflitos entre membros da equipe emergem é a de",
["formação (forming).","tormenta (storming).","normatização (norming).","desempenho (performing).","dissolução (adjourning)."],1,
"Storming é a fase do atrito, quando papéis e liderança são disputados. Atravessá-la — e não evitá-la — é o que leva à normatização e ao desempenho.",null,
 {id:"gp-0014",hab:"C"}],

["GP","Contratos","Em um contrato de preço fixo (fixed price), o risco financeiro de estouro de custo recai principalmente sobre",
["o cliente.","o fornecedor.","ambos igualmente.","o órgão regulador.","o usuário final."],1,
"Preço fixo transfere o risco de custo ao fornecedor, que por isso embute margem de contingência. Em contratos por administração (custo reembolsável), o risco volta para o cliente.",null,
 {id:"gp-0015",hab:"C"}],

["GP","Empreendedorismo","No Business Model Canvas, o bloco “Proposta de Valor” responde à pergunta",
["quanto custa operar o negócio e como os custos se distribuem?","que problema do cliente resolvemos e por que ele nos escolheria?","quais parceiros são indispensáveis para viabilizar a operação?","por quais canais o produto chega até o cliente e é comunicado?","quais recursos e capacidades são necessários para entregar?"],1,
"A proposta de valor é o centro do quadro, ao qual todos os outros oito blocos se conectam. Confundi-la com descrição do produto é o erro mais comum.",null,
 {id:"gp-0016",hab:"C"}],

["GP","Empreendedorismo","O Business Model Canvas é composto por",
["quatro blocos.","sete blocos.","nove blocos.","doze blocos.","quinze blocos."],2,
"São nove: segmentos de clientes, proposta de valor, canais, relacionamento, fontes de receita, recursos-chave, atividades-chave, parcerias-chave e estrutura de custos.",null,
 {id:"gp-0017",hab:"C"}],

["GP","Empreendedorismo","Um Produto Mínimo Viável (MVP) caracteriza-se por",
["ser a versão final do produto com todas as funcionalidades.","ser a menor versão capaz de gerar aprendizado validado sobre a hipótese de negócio.","ser um protótipo descartável, construído sem qualquer contato com usuários.","prescindir de métricas de acompanhamento, por ser uma versão exploratória.","exigir o investimento máximo previsto antes do primeiro lançamento."],1,
"O objetivo do MVP é APRENDER, não entregar. Ele existe para testar a hipótese mais arriscada com o menor esforço, antes que se invista em construir o produto completo.",null,
 {id:"gp-0018",hab:"C"}],

["GP","Empreendedorismo","O conceito de pivô (pivot), no vocabulário de startups, significa",
["encerrar as operações da empresa assim que a hipótese inicial do negócio se mostra falsa.","mudar de forma estruturada um elemento central do modelo de negócio, mantendo o aprendizado acumulado.","ampliar o investimento em marketing para sustentar o modelo já validado.","admitir novos sócios que tragam capital e experiência de mercado.","registrar a marca e a identidade visual da empresa antes do lançamento comercial do produto no mercado."],1,
"Pivô é correção de rota fundamentada em evidência, não desistência nem mudança aleatória. Preserva-se o aprendizado e altera-se a hipótese que se mostrou falsa.",null,
 {id:"gp-0019",hab:"C"}],

["GP","Empreendedorismo","O plano de negócios distingue-se do Canvas principalmente por",
["ser mais curto e visual, cabendo em uma única página e dispensando qualquer detalhamento financeiro.","ser um documento detalhado, com projeções financeiras e análise de mercado, adequado à captação de recursos.","não incluir análise de concorrência, que é considerada informação estratégica e por isso mantida sigilosa.","ser exclusivo de empresas de base tecnológica, cujo modelo de negócio exige projeções de crescimento acelerado.","dispensar a definição do público-alvo, que só é exigida em documentos apresentados a investidores externos."],1,
"Canvas é ferramenta de visualização e hipótese, de uma página. O plano de negócios é o documento formal e detalhado, exigido por bancos, investidores e editais.",null,
 {id:"gp-0020",hab:"C"}],

["GP","Governança","O escritório de projetos (PMO) tem como função típica",
["executar tecnicamente todos os projetos da organização, assumindo as entregas no lugar das áreas.","padronizar práticas, apoiar as equipes e consolidar informações de portfólio para a alta gestão.","substituir os gerentes de projeto na condução técnica das entregas sob responsabilidade da área.","aprovar os orçamentos financeiros dos projetos e das demais áreas da empresa.","realizar a contratação e o desligamento do pessoal alocado aos projetos da organização."],1,
"O PMO pode ser de suporte, de controle ou diretivo, mas sua função central é padronização e visão consolidada do portfólio — não a execução técnica.",null,
 {id:"gp-0021",hab:"C"}],

["GP","Métodos","A principal diferença entre gerenciamento de projetos preditivo e adaptativo é que, no adaptativo,",
["o planejamento é feito uma única vez, no início, e não sofre revisões posteriores.","o escopo é elaborado progressivamente, e prazo e custo tendem a ser fixados.","o custo total tende a ser menor, pois há menos documentação formal a produzir.","os indicadores quantitativos são substituídos por avaliações qualitativas da equipe.","a participação do cliente se limita à aprovação formal das entregas contratadas."],1,
"É a inversão do triângulo: no preditivo fixa-se o escopo e variam prazo e custo; no adaptativo fixam-se prazo e custo (a iteração) e o escopo é a variável negociada.",null,
 {id:"gp-0022",hab:"C"}],
["GP","Empreendedorismo","No Business Model Canvas, o bloco proposta de valor descreve",
["o conjunto de funcionalidades técnicas que o produto oferecerá aos usuários em sua primeira versão comercial.","o problema que o negócio resolve para um segmento específico e a razão pela qual esse segmento o escolheria.","a projeção de receitas e despesas do negócio para os primeiros exercícios após o início das operações.","a estrutura societária e a divisão de participação entre os fundadores e eventuais investidores do negócio.","os canais de distribuição pelos quais o produto chegará aos clientes nos mercados em que atuará."],1,
"Proposta de valor é sobre o cliente, não sobre o produto. Lista de funcionalidade descreve o que foi construído; proposta de valor responde por que alguém trocaria o que já usa por isso.",null,
 {id:"gp-0023",hab:"C"}],

["GP","Empreendedorismo","Uma startup desenvolve durante dezoito meses um produto completo antes de apresentá-lo ao mercado, e descobre no lançamento que o problema atacado não era relevante para o público. O conceito que orienta a prática oposta é",
["a análise de viabilidade econômica, que projeta o retorno do investimento antes do início do desenvolvimento.","o produto mínimo viável, que busca validar a hipótese central do negócio com o menor esforço de construção possível.","o planejamento estratégico de longo prazo, que define metas e marcos para os primeiros anos de operação.","a pesquisa de mercado quantitativa, que dimensiona o tamanho do público potencial antes de qualquer investimento.","a proteção da propriedade intelectual, que garante exclusividade sobre a solução desenvolvida pela empresa."],1,
"O MVP não é uma versão capenga do produto: é o menor experimento que responde à pergunta mais arriscada. Dezoito meses de construção só adiaram a descoberta que uma semana de conversa poderia ter antecipado.",null,
 {id:"gp-0024",hab:"C"}],

["GP","Empreendedorismo","O termo pivotar, no vocabulário de startups, designa",
["a substituição da equipe fundadora por gestores profissionais contratados no mercado após a entrada de investidores.","a mudança de rumo em um elemento central do modelo de negócio, mantendo o aprendizado já acumulado.","a captação de recursos junto a investidores em troca de participação societária na empresa recém-criada.","a expansão da operação para novos mercados geográficos após a consolidação no mercado de origem.","o encerramento das atividades e a devolução do capital remanescente aos investidores da empresa."],1,
"Pivotar é trocar uma hipótese, não recomeçar do zero: mantém-se o que se aprendeu sobre o cliente e muda-se o segmento, o canal ou o problema atacado. Trocar tudo ao mesmo tempo não é pivô, é outra empresa.",null,
 {id:"gp-0025",hab:"C"}],

["GP","Empreendedorismo","Uma empresa de software adota modelo de receita por assinatura em vez de venda de licença perpétua. A principal implicação dessa escolha é",
["o aumento imediato da receita, já que o valor total do contrato é reconhecido no momento da assinatura.","a receita passa a depender da retenção contínua do cliente, o que desloca o esforço da venda para o uso recorrente.","a redução dos custos de suporte, uma vez que o cliente assume a manutenção da versão instalada em seu ambiente.","a eliminação da necessidade de atualizações, pois o cliente permanece na versão contratada durante toda a vigência.","a impossibilidade de atender clientes corporativos, que exigem contratos com prazo determinado e valor fechado."],1,
"Na licença perpétua o dinheiro entra uma vez e a relação praticamente termina ali. Na assinatura, o cliente decide de novo todo mês — e é por isso que o cancelamento vira a métrica que mais importa.",null,
 {id:"gp-0026",hab:"C"}],

["GP","Empreendedorismo","Ao avaliar a oportunidade de um novo produto digital, a análise do mercado endereçável serve para",
["definir o preço de venda do produto com base nos valores praticados pelos concorrentes já estabelecidos no setor.","dimensionar o tamanho do público que efetivamente pode ser alcançado, evitando decisões apoiadas em números irreais.","identificar as funcionalidades que os concorrentes oferecem e que precisam constar da primeira versão do produto.","estimar o prazo necessário para o desenvolvimento completo da solução até a sua disponibilização ao mercado.","selecionar a tecnologia mais adequada às características do público que será atendido pelo produto proposto."],1,
"O erro clássico é multiplicar a população do país por um ticket e chamar isso de mercado. O que interessa é a parcela que o negócio consegue alcançar com o canal e o preço que realmente pratica.",null,
 {id:"gp-0027",hab:"C"}],

]);
