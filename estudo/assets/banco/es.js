/* Banco IA — Engenharia de software (94 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- requisitos (16) ---------- */
["ES","Requisitos","O cliente de um sistema de matrícula determinou que nenhuma tela pode levar mais de dois segundos para responder. Essa exigência caracteriza um requisito",
["não funcional de desempenho, porque restringe a qualidade do serviço prestado.","funcional, porque descreve uma ação executada pelo sistema.","de domínio, porque deriva das regras da área de aplicação.","funcional de qualidade, porque combina ação e restrição.","não funcional de usabilidade, porque afeta a percepção do usuário."],0,
"Requisito funcional diz o QUE o sistema faz; não funcional diz com que qualidade. Dois segundos é limite de tempo de resposta, atributo de desempenho. Não é funcional, porque não descreve ação executada pelo sistema: nenhuma tela deixa de existir se o limite mudar. Não é de domínio, porque não deriva das regras da área de matrícula — a exigência valeria para qualquer sistema interativo. Não é de usabilidade só porque afeta a percepção do usuário: usabilidade se mede em erro, aprendizado e satisfação, e aqui a métrica é o relógio. E “funcional de qualidade” não existe como categoria; a taxonomia opõe os dois tipos, não os combina.",null,
 {id:"es-0001",hab:"C"}],

["ES","Requisitos","Considere os requisitos levantados para um sistema hospitalar:\nI. O sistema deve permitir o agendamento de consultas.\nII. O sistema deve estar disponível 99,5% do tempo.\nIII. O sistema deve emitir receituário em duas vias.\nIV. O sistema deve ser operável por funcionários sem formação técnica após duas horas de treinamento.\nSão requisitos NÃO funcionais apenas",
["I e III.","II, III e IV.","I, II e III.","III e IV.","II e IV."],4,
"II é disponibilidade e IV é usabilidade — ambos atributos de qualidade. I e III descrevem ações do sistema, logo são funcionais. Note que IV é não funcional apesar de mencionar uma tarefa: o que se restringe é a facilidade de operação, não a função.",null,
 {id:"es-0002",hab:"J"}],

["ES","Requisitos","A etapa de validação de requisitos tem como propósito principal verificar se",
["os requisitos foram escritos na notação adotada pela organização.","os requisitos estão rastreados até os casos de teste.","os requisitos podem ser implementados com a tecnologia disponível.","os requisitos foram aprovados pelo gerente de projeto.","os requisitos descrevem o sistema que o cliente realmente deseja."],4,
"Validação responde “estamos construindo o sistema certo?” — se o que está escrito é o que o cliente de fato quer. Conferir a notação adotada pela organização é revisão de forma, e um documento impecavelmente formatado pode descrever o sistema errado. Rastrear requisito até caso de teste é rastreabilidade, e só faz sentido depois que o requisito já foi validado. Perguntar se a tecnologia disponível comporta o requisito é estudo de viabilidade. Aprovação pelo gerente de projeto é ato administrativo: quem diz se o requisito descreve a necessidade é o cliente, não a hierarquia.",null,
 {id:"es-0003",hab:"C"}],

["ES","Requisitos","Um analista reuniu usuários de três departamentos numa sala, com um facilitador e um escriba, para produzir em conjunto a especificação de um módulo em dois dias de trabalho intensivo. A técnica de elicitação empregada é",
["workshop de requisitos (JAD).","observação em campo (etnografia).","entrevista estruturada.","prototipação evolutiva.","análise de documentos."],0,
"JAD (Joint Application Design) é exatamente a sessão conjunta e facilitada com papéis definidos. Entrevista é individual; etnografia é observação sem intervenção; prototipação produz artefato executável, não especificação em sessão.",null,
 {id:"es-0004",hab:"C"}],

["ES","Requisitos","Sobre rastreabilidade de requisitos, avalie as afirmações:\nI. Permite identificar quais componentes de projeto serão afetados por uma mudança em um requisito.\nII. É condição para a análise de impacto no controle de mudanças.\nIII. Só é aplicável a requisitos funcionais.\nÉ correto o que se afirma em",
["I, apenas.","I, II e III.","II e III, apenas.","I e III, apenas.","I e II, apenas."],4,
"Rastreabilidade liga requisitos a artefatos de projeto, código e teste, sustentando a análise de impacto. Ela vale igualmente para requisitos não funcionais — daí III ser falsa.",null,
 {id:"es-0005",hab:"J"}],

["ES","Requisitos","Requisitos de domínio distinguem-se dos demais porque",
["são invariavelmente não funcionais, por descreverem restrições e não ações.","são definidos pela equipe técnica, que conhece as limitações da plataforma.","derivam do ambiente de aplicação e podem ser omitidos pelo cliente por parecerem óbvios.","descrevem restrições de hardware impostas pelo ambiente de implantação.","substituem os requisitos funcionais em sistemas críticos."],2,
"Requisito de domínio nasce da área de negócio e é o mais arriscado justamente por parecer óbvio ao especialista, que não o verbaliza; a ausência reaparece como retrabalho. Ele não é invariavelmente não funcional: “todo laudo deve ser assinado por dois peritos” é ação, portanto funcional. Não é definido pela equipe técnica — quem parte das limitações da plataforma produz restrição de projeto, que é outra categoria, e restrição de hardware do ambiente de implantação cai na mesma. E domínio não substitui requisito funcional em sistema crítico: soma-se a ele, quase sempre endurecendo-o.",null,
 {id:"es-0006",hab:"C"}],

["ES","Requisitos","Um documento de especificação afirma: “o sistema deve ser rápido e amigável”. O principal defeito desse requisito é a falta de",
["completude.","consistência.","priorização.","rastreabilidade.","verificabilidade."],4,
"“Rápido e amigável” não tem critério mensurável: não existe teste capaz de decidir se foi atendido. Requisito verificável troca o adjetivo por número — “responder em até 2 s no percentil 95”. Não falta completude, que seria requisito ausente, e este está escrito; nem consistência, que seria conflito com outro requisito, e não há outro em jogo. Priorização e rastreabilidade são atributos do conjunto — em que ordem atender, a que origem cada um se liga —, e nenhuma das duas se corrigiria reescrevendo esta frase.",null,
 {id:"es-0007",hab:"C"}],

["ES","Requisitos","Na engenharia de requisitos, a atividade de negociação é necessária principalmente porque",
["diferentes partes interessadas têm expectativas conflitantes e recursos são limitados.","os requisitos precisam ser traduzidos para linguagem formal.","o cliente raramente conhece as próprias regras de negócio em detalhe suficiente.","a equipe técnica precisa aprovar formalmente o escopo antes da contratação.","a legislação exige o registro documentado de todas as decisões de escopo."],0,
"Conflito entre partes interessadas é a regra: o usuário quer função, o financeiro quer custo, a operação quer estabilidade, e o orçamento não paga os três. Negociar é decidir o que entra. Traduzir para linguagem formal é especificação, atividade seguinte e independente do conflito. Que o cliente raramente conheça as próprias regras de negócio em detalhe é motivo para elicitar mais, não para negociar. Aprovação formal do escopo pela equipe técnica antes da contratação é ato contratual, e registro documentado exigido por legislação é gerência de configuração — nenhum dos dois explica por que há disputa a resolver.",null,
 {id:"es-0008",hab:"C"}],

["ES","Requisitos","Considere a asserção e a razão:\nI. Protótipos descartáveis são úteis na elicitação de requisitos.\nPORQUE\nII. Usuários costumam expressar melhor o que desejam ao reagir a algo concreto do que ao descrever necessidades em abstrato.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"As duas são verdadeiras e há nexo entre elas: o protótipo descartável serve à elicitação exatamente porque o usuário reage a algo concreto melhor do que descreve necessidades em abstrato — criticar uma tela pronta é mais fácil do que imaginá-la do zero. Quem marca que a II não justifica a I aceita o mecanismo e nega que ele seja a causa da utilidade, o que deixa o protótipo sem explicação para funcionar. E negar a I ou a II exigiria sustentar que protótipo não ajuda a levantar requisito, contra a prática corrente.",null,
 {id:"es-0009",hab:"A"}],

["ES","Requisitos","O documento que registra, para cada caso de uso, o ator, a pré-condição, o fluxo principal e os fluxos alternativos é conhecido como",
["matriz de rastreabilidade entre requisitos, componentes e casos de teste.","especificação suplementar, que reúne os requisitos não funcionais do sistema.","documento de visão, que apresenta o escopo e os objetivos gerais do produto.","descrição (ou narrativa) de caso de uso.","backlog do produto, com os itens priorizados pelo responsável pelo produto."],3,
"A narrativa de caso de uso detalha textualmente o que o diagrama apenas nomeia. A especificação suplementar guarda os requisitos não funcionais que não cabem em nenhum caso de uso.",null,
 {id:"es-0010",hab:"C"}],

["ES","Requisitos","Em uma reunião, o cliente afirma: “quando o estoque de um item ficar abaixo do ponto de ressuprimento, o sistema deve gerar automaticamente uma ordem de compra”. Trata-se de um requisito",
["não funcional de confiabilidade, por tratar da continuidade do abastecimento.","funcional, com uma regra de negócio associada.","de domínio, por descrever uma prática consolidada da área de suprimentos.","de interface externa, por envolver comunicação com o sistema do fornecedor.","de restrição de projeto, por condicionar a solução técnica a ser adotada."],1,
"Gerar ordem de compra é ação do sistema, logo funcional; o gatilho “abaixo do ponto de ressuprimento” é a regra de negócio que a condiciona. Não é de confiabilidade: continuidade do abastecimento é efeito no estoque da empresa, não atributo de qualidade do software. Não é de domínio — a prática de suprimentos explica de onde veio a regra, mas o que se classifica aqui é o requisito, e ele descreve comportamento. Interface externa exigiria que a ordem trafegasse até o sistema do fornecedor, e o enunciado só manda gerá-la. Restrição de projeto condicionaria a solução técnica, e nada aqui diz como implementar.",null,
 {id:"es-0011",hab:"C"}],

["ES","Requisitos","A técnica de elicitação mais adequada para descobrir como um operador realmente executa uma tarefa, incluindo desvios não documentados do procedimento oficial, é",
["questionário fechado.","análise do manual de procedimentos.","observação direta no ambiente de trabalho.","brainstorming com a gerência.","revisão do contrato de serviço."],2,
"Só a observação revela a diferença entre o processo prescrito e o processo praticado. Questionários e manuais capturam o que se acredita fazer; a gerência frequentemente desconhece os atalhos do operador.",null,
 {id:"es-0012",hab:"C"}],

["ES","Requisitos","Sobre a priorização de requisitos pela técnica MoSCoW, é correto afirmar que a categoria “Could have” designa requisitos",
["obrigatórios para a entrega mínima, sem os quais o produto não tem valor.","importantes, mas cuja ausência não inviabiliza a entrega.","desejáveis, que serão implementados apenas se houver folga.","explicitamente excluídos do escopo do ciclo corrente, por decisão conjunta.","de origem legal ou regulatória, cuja ausência gera sanção ao contratante."],2,
"Must = obrigatório; Should = importante mas contornável; Could = desejável se sobrar tempo; Won't = fora deste ciclo. A confusão comum é entre Should e Could.",null,
 {id:"es-0013",hab:"C"}],

["ES","Requisitos","Considere as afirmações sobre a especificação de requisitos:\nI. Deve ser compreensível por usuários que não sejam da área técnica.\nII. Serve de base contratual entre cliente e fornecedor.\nIII. Deve descrever a arquitetura interna dos módulos.\nÉ correto o que se afirma em",
["III, apenas.","I e III, apenas.","II e III, apenas.","I e II, apenas.","I, II e III."],3,
"A especificação declara O QUE o sistema faz, em linguagem acessível a quem não é da área técnica — daí I —, e é esse documento que as partes assinam, daí II. III é falsa: arquitetura interna dos módulos pertence ao documento de projeto. Antecipá-la na especificação amarra o projetista a uma solução antes de existir razão técnica para escolhê-la, e ainda torna o documento ilegível para o cliente, contrariando I.",null,
 {id:"es-0014",hab:"J"}],

["ES","Requisitos","Um requisito estabelece que “o sistema deve registrar em log toda alteração de dados pessoais, com identificação do responsável e data-hora”. Além de funcional, esse requisito atende diretamente a uma exigência de",
["desempenho, dado o custo de gravar cada alteração em tempo real.","portabilidade entre diferentes plataformas de banco de dados.","escalabilidade horizontal do módulo responsável pelo registro.","auditabilidade e conformidade legal.","interoperabilidade com sistemas de terceiros que consomem o log."],3,
"Registrar quem alterou o quê e quando é trilha de auditoria: existe para prestar contas, e é o que a norma de proteção de dados cobra. O custo de gravar cada alteração é consequência de desempenho, não a exigência atendida — cumprir o requisito piora o desempenho, não o promove. Portabilidade entre plataformas de banco e escalabilidade horizontal do módulo nada têm com o conteúdo do registro: o log seria o mesmo em qualquer plataforma e sob qualquer carga. Interoperabilidade só entraria se o enunciado dissesse que terceiros consomem o log, e ele não diz.",null,
 {id:"es-0015",hab:"C"}],

["ES","Requisitos","O principal risco de iniciar a codificação antes de estabilizar os requisitos é",
["o aumento da complexidade ciclomática dos módulos entregues, que passam a concentrar um número maior de desvios condicionais aninhados.","a impossibilidade de aplicar métodos ágeis, que exigem que todos os requisitos estejam congelados antes da primeira Sprint.","a perda da rastreabilidade entre o código produzido e os testes unitários escritos pela equipe ao longo do desenvolvimento.","a elevação do custo de correção, já que defeitos de requisito descobertos tarde exigem retrabalho em projeto, código e teste.","a violação da norma de gerência de configuração, que proíbe alterar itens sem linha de base aprovada."],3,
"Defeito de requisito descoberto tarde obriga a refazer projeto, código e teste construídos sobre ele — é o custo que cresce por ordem de grandeza a cada fase vencida. Complexidade ciclomática mede desvios condicionais dentro do módulo e não depende de quando o requisito estabilizou. Dizer que métodos ágeis exigem requisitos congelados antes da primeira Sprint inverte o ágil, que existe para conviver com requisito móvel. Rastreabilidade entre código e teste unitário se mantém por disciplina de registro, não por estabilidade de requisito. E gerência de configuração controla alteração de item com linha de base aprovada, o que é outro assunto: codificar cedo não é proibido, caro é errar cedo e descobrir tarde.",null,
 {id:"es-0016",hab:"C"}],

/* ---------- modelos de processo (14) ---------- */
["ES","Modelos de processo","O modelo em cascata é considerado inadequado para projetos com requisitos voláteis porque",
["não prever a produção de documentação formal ao final de cada uma das fases previstas no modelo.","exige que cada fase seja concluída e aprovada antes do início da seguinte, encarecendo mudanças tardias.","não permitir a participação do cliente em nenhuma etapa posterior ao levantamento inicial de requisitos.","dispensar a fase de testes formais, já que a verificação ocorre ao final de cada uma das fases anteriores.","só se aplica a sistemas embarcados."],1,
"A sequência rígida é a essência do cascata e também sua fraqueza: voltar uma fase obriga a refazer os artefatos já aprovados de todas as seguintes, e por isso mudança tardia sai cara. As demais descrevem um cascata que não existe. Ele prevê documentação formal ao fim de cada fase — é o modelo mais documental que há — e prevê fase de testes formais própria, em vez de dispensá-la. Não proíbe a participação do cliente em etapa posterior ao levantamento inicial; apenas a concentra no começo, que é justamente o problema. E restringi-lo a sistemas embarcados é falso: ele segue adequado a qualquer domínio de requisitos estáveis.",null,
 {id:"es-0017",hab:"C"}],

["ES","Modelos de processo","No modelo incremental, a principal vantagem em relação ao cascata é que",
["a especificação de requisitos passa a ser feita incremento a incremento, no momento de produzir cada um.","os defeitos se concentram nos incrementos finais, quando a integração entre as partes fica mais densa.","o custo de manutenção posterior cai, porque cada incremento é validado antes que o seguinte comece.","a arquitetura pode ser postergada, emergindo da soma dos incrementos já entregues ao cliente.","o cliente recebe versões operacionais parciais, permitindo realimentação antes da conclusão do sistema."],4,
"Entregar valor cedo e obter feedback é o ganho central. Note que o incremental não dispensa arquitetura: incrementos mal planejados sobre arquitetura frágil geram retrabalho estrutural.",null,
 {id:"es-0018",hab:"C"}],

["ES","Modelos de processo","O elemento que distingue o modelo espiral dos demais modelos evolutivos é",
["a entrega contínua de versões em produção ao final de cada uma das voltas do modelo.","a fixação definitiva dos requisitos já na primeira iteração do projeto.","a ausência de documentação formal entre as voltas, o que acelera a passagem de um ciclo ao outro.","o uso obrigatório de orientação a objetos na modelagem de cada ciclo.","a análise de riscos explícita ao final de cada volta, condicionando a continuidade do projeto."],4,
"Boehm construiu o espiral em torno do risco: cada ciclo passa por determinar objetivos, avaliar alternativas, analisar riscos e planejar o ciclo seguinte. Sem a análise de riscos, é apenas um iterativo qualquer.",null,
 {id:"es-0019",hab:"C"}],

["ES","Modelos de processo","No RUP, a fase em que se estabelece a arquitetura executável de referência (baseline arquitetural) e se mitigam os principais riscos técnicos é a de",
["concepção (inception).","manutenção.","construção.","transição.","elaboração."],4,
"A elaboração existe para provar a arquitetura. A concepção define escopo e viabilidade; a construção produz o grosso do código sobre a arquitetura já estabilizada; a transição entrega ao usuário.",null,
 {id:"es-0020",hab:"C"}],

["ES","Modelos de processo","Sobre o RUP, avalie:\nI. É iterativo e incremental.\nII. Cada disciplina ocorre em uma única fase.\nIII. O esforço de cada disciplina varia ao longo das fases.\nÉ correto o que se afirma em",
["I, apenas.","I e III, apenas.","II e III, apenas.","I e II, apenas.","I, II e III."],1,
"I e III descrevem o RUP: iterativo e incremental, com o esforço de cada disciplina variando ao longo das fases — é o que o gráfico das “baleias” mostra. II é falsa: nenhuma disciplina se confina a uma única fase. Requisitos pesa na concepção e continua presente na construção; teste começa cedo em vez de esperar o fim. Confundir disciplina com fase é ler o RUP como um cascata de outro nome.",null,
 {id:"es-0021",hab:"J"}],

["ES","Modelos de processo","O modelo RAD (Rapid Application Development) pressupõe",
["equipes numerosas e requisitos instáveis, revistos a cada nova rodada de entrega.","ciclo único de desenvolvimento, sem iterações nem entregas parciais ao cliente.","desenvolvimento conduzido sem participação do usuário, que só valida ao final.","aplicação restrita a sistemas de tempo real, com requisitos rígidos de latência.","sistemas modularizáveis, prazos curtos e forte reúso de componentes."],4,
"RAD só fecha quando o sistema é modularizável em partes construídas em paralelo, o prazo é curto e há muito componente a reusar. Equipe numerosa com requisitos instáveis é o oposto disso: paralelismo exige interface estável entre os módulos. Ciclo único, sem iterações nem entrega parcial, é cascata. Desenvolvimento sem participação do usuário, que só valida ao final, contraria o próprio RAD, que depende de retorno rápido. E sistema de tempo real com requisito rígido de latência é onde o RAD mais falha: acoplamento forte e risco técnico alto não se fatiam em módulos paralelos.",null,
 {id:"es-0022",hab:"C"}],

["ES","Modelos de processo","A prototipação evolutiva difere da prototipação descartável porque, na evolutiva,",
["o protótipo é construído em papel, sem qualquer código executável associado.","o usuário não participa da avaliação, que fica a cargo da equipe técnica.","o protótipo é refinado sucessivamente até se tornar o sistema final.","o protótipo é descartado após a validação dos requisitos.","não se produz documentação alguma, já que o protótipo a substitui integralmente."],2,
"Na evolutiva o protótipo é refinado até virar o sistema final, e por isso precisa de qualidade interna desde a primeira versão. Ser descartado após a validação dos requisitos é a definição da outra, a descartável — que por isso pode ser construída de forma tosca e rápida. Protótipo em papel, sem código executável, é técnica de elicitação e não distingue as duas. Que o usuário não participe da avaliação, deixada à equipe técnica, contraria as duas, que existem para colher reação. E nenhuma dispensa documentação: na evolutiva ela pesa mais, porque o protótipo vira produto.",null,
 {id:"es-0023",hab:"C"}],

["ES","Modelos de processo","Considere a asserção e a razão:\nI. O modelo em cascata facilita o acompanhamento gerencial do projeto.\nPORQUE\nII. Suas fases produzem marcos documentais bem definidos, que servem de ponto de controle.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras, mas a II não justifica a I.","As duas são verdadeiras e a II justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],1,
"Este é o motivo pelo qual o cascata sobrevive em contratos públicos: marcos documentais dão previsibilidade contratual. A crítica ao modelo é técnica, não gerencial — e a razão explica corretamente a asserção.",null,
 {id:"es-0024",hab:"A"}],

["ES","Modelos de processo","Em um projeto com requisitos bem compreendidos, tecnologia dominada e forte exigência regulatória de documentação por fase, o modelo de processo mais adequado é",
["Scrum, com Sprints de duas semanas e revisão ao fim de cada ciclo.","cascata ou uma de suas variantes com verificação.","XP, com releases semanais e programação em pares desde o início.","Kanban, com fluxo contínuo e limite de trabalho em progresso.","prototipação descartável, seguida da reescrita completa do sistema."],1,
"Requisito estável, tecnologia dominada e exigência regulatória de documentação por fase são as condições em que o cascata rende: não há feedback a comprar, e há auditoria a satisfazer. Scrum com Sprints de duas semanas e XP com release semanal e programação em pares otimizam adaptação a mudança que aqui não existe, e documentam por iteração, não por fase — que é o que o regulador pede. Kanban, com fluxo contínuo e limite de trabalho em progresso, governa vazão de demanda e não impõe marco documental algum. E prototipação descartável seguida de reescrita completa gastaria duas construções para aprender o que já se sabe.",null,
 {id:"es-0025",hab:"C"}],

["ES","Modelos de processo","O conceito de “entrega contínua” (continuous delivery) refere-se à capacidade de",
["implantar automaticamente em produção toda alteração aprovada nos testes, sem revisão humana.","substituir os testes de aceitação por testes unitários.","gerar builds noturnos sem executar testes.","manter o software sempre em estado implantável, com a decisão de implantar sendo de negócio.","dispensar o controle de versão do código, já que cada entrega substitui integralmente a anterior."],3,
"Entrega contínua é manter o software sempre em estado implantável; a decisão de implantar é de negócio. Implantar automaticamente em produção toda alteração aprovada nos testes, sem revisão humana, já é implantação contínua — o passo seguinte, e a distinção que costuma cair. Substituir os testes de aceitação por unitários destrói justamente a evidência de que o estado é implantável. Build noturno sem executar testes produz pacote sobre o qual nada se sabe. E dispensar o controle de versão inviabiliza a prática inteira: sem saber qual versão está pronta, não há o que implantar.",null,
 {id:"es-0026",hab:"C"}],

["ES","Modelos de processo","No contexto de DevOps, a prática de integração contínua consiste em",
["integrar frequentemente ao ramo principal, com build e testes automatizados a cada integração.","integrar o código de todos os desenvolvedores uma única vez por release, na véspera da entrega ao cliente.","manter ramos de longa duração por desenvolvedor, integrando-os apenas na véspera da entrega.","adiar a compilação e a execução dos testes até o encerramento da iteração em andamento.","separar as equipes de desenvolvimento e de operação em ciclos independentes."],0,
"O valor da integração contínua está na frequência: integrando várias vezes ao dia, o conflito de merge fica pequeno e o defeito aparece minutos depois de introduzido. Integrar o código de todos uma única vez por release, na véspera da entrega, é exatamente o cenário que a prática existe para eliminar, e manter ramos de longa duração por desenvolvedor é a causa desse conflito, e não o remédio contra ele. Adiar a compilação e os testes até o encerramento da iteração desfaz o retorno rápido, único motivo de automatizar o build. E separar as equipes de desenvolvimento e de operação em ciclos independentes contraria o DevOps inteiro; não descreve integração contínua.",null,
 {id:"es-0027",hab:"C"}],

["ES","Modelos de processo","O principal problema de se manter um ramo de funcionalidade (feature branch) por vários meses é",
["a impossibilidade de gerar tags de release enquanto o ramo permanecer aberto no repositório compartilhado.","a perda do histórico de commits do ramo, que é compactado no momento da integração final.","o acúmulo de divergência com o ramo principal, tornando a integração final custosa e arriscada.","a violação do modelo em cascata, que exige integração apenas ao final da fase de codificação.","a incompatibilidade do ramo com a suíte de testes unitários mantida no principal."],2,
"É o oposto da integração contínua: quanto mais tempo o ramo vive isolado, maior a divergência acumulada e mais arriscada a integração final — o “merge hell”. Nada impede gerar tags de release no principal enquanto o ramo permanece aberto; tag e ramo são independentes. O histórico de commits não se perde nem é compactado na integração, a menos que se escolha um squash, e essa é decisão de quem integra. O cascata não exige integração ao final da codificação nem se pronuncia sobre ramos. E a suíte de testes unitários do principal roda no ramo sem incompatibilidade: o problema é que ela passa dos dois lados e a junção quebra assim mesmo.",null,
 {id:"es-0028",hab:"C"}],

["ES","Modelos de processo","Um processo de software é definido, em essência, como",
["o conjunto de ferramentas de apoio adotadas pela equipe de desenvolvimento.","a documentação produzida e formalmente aprovada ao longo da execução do projeto pela equipe.","um arcabouço de atividades, ações e tarefas necessárias à construção de software de qualidade.","o cronograma de atividades aprovado pelo cliente no início dos trabalhos e revisado a cada fase.","a arquitetura do sistema, com seus componentes, interfaces e decisões estruturais registradas."],2,
"Processo é o arcabouço de atividades, ações e tarefas — o que se faz e em que ordem. As ferramentas de apoio adotadas pela equipe são instrumento: trocar de ferramenta não muda o processo, e essa é a confusão mais frequente do tema. A documentação produzida e aprovada é saída do processo, não sua definição; um processo pode gerar pouco documento e continuar existindo. Cronograma pertence a um projeto específico, enquanto o mesmo processo atende a vários projetos. E a arquitetura, com componentes, interfaces e decisões estruturais, descreve o produto, não o modo de construí-lo.",null,
 {id:"es-0029",hab:"C"}],

["ES","Modelos de processo","Modelos de processo prescritivos são assim chamados porque",
["proíbem qualquer adaptação ao contexto do projeto, devendo ser seguidos exatamente como foram publicados por seus autores.","aplicam-se apenas a projetos de software livre, cujo processo é público e auditável por terceiros.","são impostos por norma legal às empresas que prestam serviço de desenvolvimento para a administração pública federal.","dispensam a fase de planejamento, já que as atividades vêm previamente definidas pelo modelo.","prescrevem um conjunto de elementos de processo — atividades, artefatos e pontos de controle — a serem seguidos."],4,
"Prescritivo significa que o modelo indica o caminho a seguir, com artefatos e marcos definidos. Isso não impede adaptação (tailoring), que aliás é recomendada.",null,
 {id:"es-0030",hab:"C"}],

/* ---------- testes e V&V (16) ---------- */
["ES","Testes","O teste de caixa-branca distingue-se do teste de caixa-preta porque o primeiro",
["é conduzido a partir da especificação funcional, sem qualquer acesso ao código-fonte do componente.","exercita o sistema pela interface do usuário, percorrendo os fluxos que ele disponibiliza.","deriva os casos de teste da experiência do testador, sem apoio em documento ou em código.","aplica-se somente a sistemas web, onde a interface pode ser inspecionada pelo navegador.","utiliza o conhecimento da estrutura interna do código para derivar os casos de teste."],4,
"Caixa-branca é estrutural: enxerga o código e deriva casos para cobrir caminhos, condições e laços. Conduzir o teste a partir da especificação funcional, sem acesso ao código-fonte, é a definição da caixa-preta; e exercitar o sistema pela interface do usuário, percorrendo os fluxos que ele disponibiliza, é o modo típico de aplicá-la. Derivar casos da experiência do testador, sem apoio em documento nem em código, é teste exploratório, que não é nem uma coisa nem outra. E restringir a técnica a sistemas web, porque o navegador permite inspecionar, confunde inspecionar interface com ler código. As duas são complementares.",null,
 {id:"es-0031",hab:"C"}],

["ES","Testes","Considere o trecho de pseudocódigo. A complexidade ciclomática do fluxo é",
["4.","3.","2.","5.","6."],0,
"V(G) = número de decisões + 1. São três decisões — o se externo, o se aninhado e o enquanto —, logo V(G) = 4. Quem responde 3 conta as decisões e esquece a parcela que representa o caminho em que nenhuma condição é satisfeita. Quem responde 2 trata os dois se aninhados como um só, ou ignora o laço. Os valores 5 e 6 aparecem quando se contam também os fim-se e o fim-enquanto, que fecham bloco e não abrem desvio. O resultado é o número de caminhos independentes a cobrir, e serve de limite superior ao esforço de teste estrutural.",
"01  leia(a, b)\n02  se (a > 0) entao\n03      se (b > 0) entao\n04          escreva(\"ambos positivos\")\n05      fim-se\n06  fim-se\n07  enquanto (a > b) faca\n08      a <- a - 1\n09  fim-enquanto\n10  escreva(a)",
 {id:"es-0032",hab:"I"}],

["ES","Testes","O teste de regressão tem por objetivo",
["encontrar defeitos ainda não descobertos no código recém-escrito, antes que ele chegue à produção.","medir o desempenho do sistema sob carga elevada, identificando o ponto em que o tempo de resposta degrada.","verificar se alterações recentes reintroduziram defeitos em funcionalidades que já operavam corretamente.","validar a interface com o usuário final.","aferir a conformidade do sistema com as normas de segurança da informação adotadas pela organização."],2,
"Regressão olha para o que já funcionava: reexecuta a bateria existente depois de cada mudança, para ver se ela quebrou algo antigo. Encontrar defeito ainda não descoberto no código recém-escrito é objetivo do teste do próprio código novo, exatamente o oposto do alvo aqui. Medir o desempenho sob carga elevada, achando o ponto em que o tempo de resposta degrada, é teste de carga. Validar a interface com o usuário final é usabilidade ou aceitação. E aferir a conformidade com normas de segurança da informação é auditoria. Nenhum desses reexecuta o que já passava — e é essa repetição que faz da regressão a candidata natural à automação.",null,
 {id:"es-0033",hab:"C"}],

["ES","Testes","A função abaixo deveria aceitar quantidades de 1 a 100, inclusive. Aplicando análise de valor-limite, o caso de teste que revela o defeito é",
["quantidade = 50","quantidade = 100","quantidade = 0","quantidade = 101","quantidade = 1"],1,
"O operador da segunda condição é < em vez de <=, então 100 é indevidamente rejeitado. Só o teste no limite superior revela isso: 50 passa, 0 e 101 já são rejeitados corretamente, e 1 está no limite inferior, que está certo. Defeitos se concentram justamente nas fronteiras, por erro de operador relacional.",
"boolean quantidadeValida(int quantidade) {\n    if (quantidade > 0 && quantidade < 100) {\n        return true;\n    }\n    return false;\n}",
 {id:"es-0034",hab:"I"}],

["ES","Testes","Sobre os níveis de teste, avalie:\nI. O teste de unidade verifica o menor componente testável isoladamente.\nII. O teste de integração verifica a interação entre componentes já testados isoladamente.\nIII. O teste de sistema verifica o software completo contra os requisitos especificados.\nÉ correto o que se afirma em",
["I, apenas.","I e II, apenas.","II e III, apenas.","I e III, apenas.","I, II e III."],4,
"As três estão corretas e formam a progressão clássica. I define unidade como o menor componente testável isoladamente; II põe a integração verificando a interação entre componentes já testados um a um; III leva o software completo contra os requisitos especificados. Não há afirmativa a descartar. O que fecha a sequência, o teste de aceitação, é conduzido sob a ótica do cliente e ficou fora da lista.",null,
 {id:"es-0035",hab:"J"}],

["ES","Testes","O teste alfa distingue-se do teste beta porque o alfa é realizado",
["por usuários finais, no ambiente do cliente, sem supervisão.","por ferramentas automatizadas, sem participação de usuários reais na execução.","por usuários, no ambiente do desenvolvedor, com acompanhamento da equipe.","após a entrada em produção, com base nos incidentes efetivamente relatados.","apenas em projetos de software livre, cuja comunidade assume os testes."],2,
"Alfa: usuários no ambiente do desenvolvedor, com a equipe acompanhando. Usuários finais no ambiente do cliente, sem supervisão, é a definição do beta — e trocar os dois é a pegadinha do tema. Execução por ferramentas automatizadas, sem participação de usuários reais, não é nem um nem outro: ambos existem justamente para colher uso humano. Analisar os incidentes relatados após a entrada em produção é monitoramento pós-implantação, quando os dois já terminaram. E restringir a prática a projetos de software livre, cuja comunidade assumiria os testes, confunde quem executa com o que se mede.",null,
 {id:"es-0036",hab:"C"}],

["ES","Testes","Um sistema de vendas apresentou lentidão ao ser acessado por dois mil usuários simultâneos na Black Friday. O tipo de teste que deveria ter antecipado esse comportamento é o teste de",
["carga (desempenho sob volume esperado).","unidade, aplicado a cada componente de forma isolada dos demais.","instalação, executado no ambiente definitivo do cliente final.","usabilidade, com usuários reais observados durante a operação.","portabilidade, entre diferentes navegadores e dispositivos."],0,
"Teste de carga submete o sistema ao volume esperado — os dois mil usuários simultâneos — e mostra onde o tempo de resposta degrada. Levar além do limite, até a ruptura, seria estresse, distinção que costuma ser cobrada. Teste de unidade isola cada componente e, por construção, não enxerga concorrência entre usuários. Teste de instalação verifica se o sistema sobe no ambiente definitivo do cliente, o que é anterior e independente do volume. Usabilidade observa usuários reais operando, mas mede dificuldade de uso, não latência sob concorrência. E portabilidade entre navegadores e dispositivos nada diria sobre a Black Friday.",null,
 {id:"es-0037",hab:"C"}],

["ES","Testes","O caso de teste classificar(75) executa todas as linhas da função abaixo que são alcançáveis por ele, mas não atinge cobertura de decisão. O número MÍNIMO de casos de teste adicionais para cobrir todas as decisões nos dois sentidos é",
["nenhum, um caso basta","2","1","3","4"],1,
"São duas decisões: nota >= 90 e nota >= 60. Com 75, a primeira dá falso e a segunda, verdadeiro. Faltam a primeira verdadeira (95, por exemplo) e a segunda falsa (40), logo 2 casos adicionais. Dizer que nenhum é necessário, que um caso basta, confunde cobertura de comando com cobertura de decisão: executar a linha não garante ter percorrido o desvio nos dois sentidos. Com 1 caso adicional cobre-se apenas uma das duas metades que faltam. E 3 ou 4 casos cobrem tudo, mas o enunciado pede o mínimo, e os excedentes não acrescentam cobertura alguma.",
"01  String classificar(int nota) {\n02      if (nota >= 90) {\n03          return \"A\";\n04      }\n05      if (nota >= 60) {\n06          return \"B\";\n07      }\n08      return \"reprovado\";\n09  }",
 {id:"es-0038",hab:"I"}],

["ES","Testes","Verificação e validação diferem porque a verificação avalia se",
["o produto atende ao uso pretendido; a validação, se está conforme a especificação.","o produto apresenta defeitos internos; a validação, se esses defeitos chegam a se manifestar em falhas.","o produto está sendo construído corretamente; a validação, se o produto certo está sendo construído.","ambas serem sinônimos na norma ISO, que trata verificação e validação como uma única atividade.","a verificação é feita pelo cliente e a validação pela equipe."],2,
"Par clássico: verificação pergunta se o produto está sendo construído corretamente, contra a especificação; validação, se é o produto certo, contra a necessidade. A alternativa que põe a verificação avaliando o uso pretendido e a validação a conformidade com a especificação inverte precisamente os dois. Distinguir defeito interno de falha manifesta é outro par — defeito e falha — e não separa verificação de validação. Tratá-las como sinônimos, uma única atividade na norma, contraria a própria norma, que as define em separado. E atribuir a verificação ao cliente e a validação à equipe troca os papéis: quem valida se o sistema serve é quem tem a necessidade.",null,
 {id:"es-0039",hab:"C"}],

["ES","Testes","Considere as afirmações sobre teste de software:\nI. Testes podem demonstrar a presença de defeitos, mas não sua ausência.\nII. Testar exaustivamente todas as entradas é impraticável na maioria dos sistemas.\nIII. A ausência de defeitos encontrados garante que o software atende às necessidades do usuário.\nÉ correto o que se afirma em",
["I, apenas.","II e III, apenas.","I e II, apenas.","I e III, apenas.","I, II e III."],2,
"I e II são princípios consagrados. III é a falácia da “ausência de erros”: um software pode passar em todos os testes e ainda assim não servir, se os requisitos estiverem errados.",null,
 {id:"es-0040",hab:"J"}],

["ES","Testes","No teste abaixo, a classe GatewayFalso foi criada porque o gateway real de pagamento ainda não está disponível. Esse recurso é chamado de",
["driver, usado no teste de integração ascendente.","fixture de banco de dados, usada para preparar o estado antes do teste.","stub, usado no teste de integração descendente.","teste de carga, que mede o comportamento sob volume elevado de requisições.","análise estática, que examina o código sem executá-lo em nenhum ambiente."],2,
"GatewayFalso substitui um módulo de nível INFERIOR ainda ausente, devolvendo resposta previsível para que o Checkout possa ser exercitado: é stub, típico da integração descendente. Driver é o inverso — simula o CHAMADOR que falta, na integração ascendente —, e trocar os dois é o erro mais comum do tema. Fixture de banco de dados prepara estado antes do teste; aqui não há estado a preparar, e sim colaborador a substituir. Teste de carga mede comportamento sob volume elevado de requisições, e este teste faz uma chamada só. E análise estática examina o código sem executá-lo em ambiente algum, enquanto o trecho acima executa.",
"class GatewayFalso implements Gateway {\n    public Recibo cobrar(double valor) {\n        return new Recibo(\"OK\", valor);   // resposta fixa\n    }\n}\n\n@Test\npublic void finalizaCompraComPagamentoAprovado() {\n    Checkout checkout = new Checkout(new GatewayFalso());\n    assertTrue(checkout.finalizar(150.0));\n}",
 {id:"es-0041",hab:"I"}],

["ES","Testes","Seguindo o ciclo do TDD, um desenvolvedor escreveu primeiro o teste abaixo, que falha porque a classe Carrinho ainda não tem o método desconto(). O passo seguinte correto é",
["refatorar o teste até que ele passe.","escrever o código mínimo que faça o teste passar, e só depois refatorar.","escrever todos os demais testes da classe antes de implementar.","implementar a regra completa de descontos, com todas as faixas previstas.","remover o teste e implementar a funcionalidade primeiro."],1,
"Red-green-refactor: o teste falha (red), escreve-se o mínimo para passar (green), e então melhora-se a estrutura (refactor). Implementar a regra completa de uma vez abandona o ciclo e produz código não coberto por teste — é o erro mais comum de quem está aprendendo TDD.",
"@Test\npublic void aplicaDezPorCentoAcimaDeCem() {\n    Carrinho c = new Carrinho();\n    c.adicionar(new Item(\"livro\", 150.0));\n    assertEquals(15.0, c.desconto(), 0.01);\n}",
 {id:"es-0042",hab:"I"}],

["ES","Testes","Um defeito (defect) difere de uma falha (failure) porque o defeito",
["é a manifestação observável do problema durante a execução, percebida por quem usa o sistema.","é o desvio entre o resultado obtido e o esperado, registrado no relatório de execução.","é o engano cometido por quem escreveu o artefato, anterior a qualquer execução do programa.","é a interrupção do serviço causada por indisponibilidade da infraestrutura de hardware.","é a imperfeição presente no artefato, que pode ou não vir a se manifestar em execução."],4,
"Cadeia causal: engano humano (error) → defeito no artefato (defect/fault) → falha observável na execução (failure). Um defeito em trecho nunca executado jamais produz falha.",null,
 {id:"es-0043",hab:"C"}],

["ES","Testes","O teste de fumaça (smoke test) é aplicado para",
["exercitar exaustivamente todas as regras de negócio implementadas, garantindo a cobertura completa do sistema.","verificar rapidamente se as funções essenciais da build estão operacionais, antes de testes mais profundos.","medir a cobertura estrutural do código alcançada pela suíte de testes automatizados executada na integração.","avaliar a acessibilidade da interface.","validar a documentação do usuário."],1,
"É a triagem: se a build não passa no smoke, não vale gastar tempo com a bateria completa. Por isso costuma rodar automaticamente a cada integração.",null,
 {id:"es-0044",hab:"C"}],

["ES","Testes","Sobre a automação de testes, avalie:\nI. Testes de regressão são bons candidatos por serem repetitivos.\nII. Testes exploratórios dependem de julgamento humano e são pouco automatizáveis.\nIII. Automatizar elimina a necessidade de manutenção dos casos de teste.\nÉ correto o que se afirma em",
["II e III, apenas.","I e III, apenas.","I e II, apenas.","I, apenas.","I, II e III."],2,
"III é falsa e cara: a suíte automatizada é código e envelhece como código. Suíte sem manutenção acumula testes frágeis e falsos alarmes, até a equipe passar a ignorá-los.",null,
 {id:"es-0045",hab:"J"}],

["ES","Testes","Em um sistema de folha de pagamento, verificar se o cálculo do INSS observa as faixas 0–1.412, 1.412,01–2.666,68 e acima disso é aplicação da técnica de",
["teste de estresse, levando o sistema além do volume previsto.","particionamento em classes de equivalência.","teste de instalação no ambiente definitivo de produção.","análise estática do código-fonte que implementa o cálculo.","inspeção formal do algoritmo conduzida por pares da equipe."],1,
"Cada faixa do INSS é uma classe de equivalência: valores dentro dela devem ser tratados igualmente, e basta um representante por classe. Teste de estresse leva o sistema além do volume previsto, o que nada tem a ver com escolher valores de entrada. Teste de instalação verifica o ambiente definitivo de produção, não o cálculo. Análise estática do código-fonte e inspeção formal conduzida por pares examinam o programa sem executá-lo — podem até achar a faixa errada na leitura, mas não são a técnica de derivar casos que o enunciado descreve. Combinada com valor-limite, a técnica cobre ainda as fronteiras entre as faixas, onde mora o erro de operador.",null,
 {id:"es-0046",hab:"C"}],

/* ---------- qualidade e maturidade (10) ---------- */
["ES","Qualidade","No CMMI por estágios, o nível de maturidade em que os processos são medidos e controlados quantitativamente é o",
["nível 2 — gerenciado.","nível 3 — definido.","nível 5 — em otimização.","nível 4 — quantitativamente gerenciado.","nível 1 — inicial."],3,
"O nível 4 introduz o controle estatístico: subprocessos medidos e mantidos dentro de limites quantitativos, o que torna o resultado previsível. No 2, a gestão é por projeto — requisitos, planejamento e configuração sob controle —, sem medição estatística. No 3, os processos são padronizados na organização, o que dá uniformidade e não previsibilidade numérica. O 5 pressupõe o 4 e usa aqueles dados para melhoria contínua, mudando o processo de propósito. E o 1 é o estágio inicial, em que o resultado depende de esforço individual.",null,
 {id:"es-0047",hab:"C"}],

["ES","Qualidade","A diferença essencial entre garantia da qualidade (QA) e controle da qualidade (QC) é que a garantia",
["atua sobre o produto acabado, identificando os defeitos antes da entrega ao cliente.","prescinde de métricas, apoiando-se no julgamento técnico de quem conduz a revisão.","ocorre depois da entrega, a partir dos incidentes relatados pelos usuários finais.","é atribuição da equipe de testes, que a executa ao final de cada ciclo de construção.","é orientada ao processo, buscando prevenir a ocorrência de defeitos."],4,
"QA atua no processo, para prevenir; QC atua no produto, para detectar. Testar é QC; definir e auditar o processo de revisão é QA.",null,
 {id:"es-0048",hab:"C"}],

["ES","Qualidade","Uma revisão técnica formal (inspeção de Fagan) caracteriza-se por",
["ser conduzida informalmente pelo autor do artefato.","ter papéis definidos, roteiro de checagem e registro dos defeitos encontrados, sem discutir soluções.","substituir integralmente os testes de sistema, já que os defeitos são identificados antes da execução.","ocorrer somente após a implantação do sistema, quando os defeitos em produção já foram catalogados.","dispensar preparação prévia dos participantes."],1,
"A regra de ouro da inspeção: identifica-se o defeito e registra-se; discutir a solução ali desvia o foco e consome a reunião. Papéis (moderador, leitor, autor, inspetores) e preparação prévia são obrigatórios.",null,
 {id:"es-0049",hab:"C"}],

["ES","Qualidade","O MPS.BR foi concebido principalmente para",
["substituir a ISO/IEC 12207 no território brasileiro, tornando-a inaplicável às empresas nacionais que desenvolvem software.","adequar a melhoria de processo à realidade das micro, pequenas e médias empresas brasileiras, com níveis mais graduais.","certificar profissionais individualmente, atestando por meio de exame a sua competência técnica em engenharia de software.","normatizar as linguagens de programação usadas em contratos com a administração pública federal.","regular a contratação pública de software, definindo preços de referência por ponto de função."],1,
"Os sete níveis do MPS.BR, de G a A, tornam a escalada mais gradual e mais barata que a do CMMI — e era o custo da escalada a barreira das empresas menores. Ele é compatível com a ISO/IEC 12207 e a 15504: não as substitui no território brasileiro nem as torna inaplicáveis às empresas nacionais. Não certifica profissionais individualmente por exame de competência técnica; o que se avalia é o processo da organização. E não normatiza linguagens de programação em contratos com a administração pública federal, nem define preços de referência por ponto de função — regular a contratação pública é objeto de legislação, não de um modelo de maturidade.",null,
 {id:"es-0050",hab:"C"}],

["ES","Qualidade","Segundo a ISO/IEC 25010, a característica que mede o grau em que o software pode ser transferido de um ambiente para outro é",
["confiabilidade.","manutenibilidade.","portabilidade.","eficiência de desempenho.","compatibilidade."],2,
"Portabilidade, na 25010, agrega adaptabilidade, capacidade de instalação e substituibilidade: é a característica que mede levar o software de um ambiente a outro. Confiabilidade trata de manter o serviço de pé — maturidade, tolerância a falhas, recuperabilidade. Manutenibilidade é a facilidade de modificar o produto, não de movê-lo. Eficiência de desempenho olha tempo de resposta e uso de recursos. E compatibilidade, a mais confundida com esta, cobre coexistência e interoperabilidade com outros sistemas no mesmo ambiente, e não a mudança de ambiente.",null,
 {id:"es-0051",hab:"C"}],

["ES","Qualidade","Considere a asserção e a razão:\nI. Revisões de artefatos devem ocorrer ao longo de todo o desenvolvimento, não apenas ao final.\nPORQUE\nII. O custo de remoção de um defeito cresce à medida que ele permanece sem ser detectado nas fases seguintes.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são falsas.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são verdadeiras e a II justifica a I."],4,
"As duas são verdadeiras, e a segunda é a razão econômica da primeira: como o custo de remoção de um defeito cresce enquanto ele permanece sem ser detectado nas fases seguintes, revisar artefatos ao longo de todo o desenvolvimento sai mais barato do que revisar apenas no fim. Marcar que a II não justifica a I seria aceitar a curva de custo e negar que ela recomende antecipar a revisão — sobraria a prática sem o motivo que a sustenta.",null,
 {id:"es-0052",hab:"A"}],

["ES","Qualidade","A métrica “densidade de defeitos” é usualmente expressa como",
["número de defeitos dividido pelo tempo de desenvolvimento.","número de defeitos por mil linhas de código ou por ponto de função.","percentual de casos de teste automatizados em relação ao total previsto.","média de defeitos introduzidos por cada desenvolvedor da equipe do projeto.","número de compilações concluídas com sucesso por dia de desenvolvimento."],1,
"Densidade é defeito por tamanho — por mil linhas de código ou por ponto de função —, e é essa normalização que torna o número comparável entre módulos e projetos de portes diferentes. Dividir pelo tempo de desenvolvimento mede velocidade de descoberta, e faria um módulo grande parecer pior só por ter levado mais tempo. O percentual de casos de teste automatizados descreve a suíte, não o produto. A média de defeitos por desenvolvedor mede pessoa, o que além de não ser densidade destrói o registro honesto de defeito. E compilações concluídas com sucesso por dia é métrica de build, indiferente à quantidade de defeitos no código.",null,
 {id:"es-0053",hab:"C"}],

["ES","Qualidade","MTBF, MTTR e disponibilidade relacionam-se de modo que a disponibilidade é dada por",
["MTBF − MTTR.","MTBF / (MTBF + MTTR).","MTTR / MTBF.","MTBF × MTTR.","(MTBF + MTTR) / MTBF."],1,
"Disponibilidade é a fração do tempo em que o sistema está operante: o tempo médio entre falhas dividido pelo ciclo completo, operação mais reparo. A subtração MTBF − MTTR devolve um tempo, não uma fração entre 0 e 1, e cresceria sem limite. MTTR / MTBF é a razão inversa: mede quanto do tempo se passa consertando, e tende a zero justamente quando o sistema é bom. O produto MTBF × MTTR premia o reparo demorado, o que é absurdo. E (MTBF + MTTR) / MTBF é sempre maior que 1, valor que nenhuma disponibilidade pode assumir. Reduzir o MTTR eleva a disponibilidade tanto quanto aumentar o MTBF.",null,
 {id:"es-0054",hab:"C"}],

["ES","Qualidade","Uma ferramenta de análise estática examina o método abaixo sem executá-lo. O problema que ela apontaria é",
["desempenho insuficiente da consulta ao banco executada dentro do método.","ausência de comentários explicativos que documentem o contrato do método.","violação do padrão de nomenclatura adotado pela linguagem para métodos públicos.","possível dereferência de referência nula, já que buscar() pode devolver null.","uso excessivo de memória pelo objeto Cliente mantido em escopo do método."],3,
"A ferramenta rastreia o fluxo e percebe que buscar() tem retorno anulável, mas o resultado é usado sem verificação. Esse é o valor da análise estática: encontra classes inteiras de defeito (nulo, variável não inicializada, código morto, injeção de SQL) sem executar nada, muito antes e mais barato que o teste dinâmico. Desempenho e uso de memória exigiriam execução.",
"public String nomeDoCliente(int id) {\n    Cliente c = repositorio.buscar(id);   // pode devolver null\n    return c.getNome().toUpperCase();\n}",
 {id:"es-0055",hab:"I"}],

["ES","Qualidade","Dívida técnica pode ser definida como",
["o custo financeiro das licenças de software adquiridas ao longo do projeto.","o passivo trabalhista acumulado pela equipe de desenvolvimento ao longo da execução do projeto.","o atraso acumulado do cronograma em relação à linha de base aprovada no início da execução do projeto.","o número de defeitos ainda abertos no rastreador de problemas ao final de cada iteração.","o custo futuro implícito de retrabalho decorrente de soluções expedientes adotadas no presente."],4,
"A metáfora é financeira: a solução expediente de hoje é um empréstimo que cobra juros na forma de manutenção mais cara amanhã. O custo financeiro das licenças adquiridas é despesa contratada e registrada, não passivo implícito. O passivo trabalhista acumulado pela equipe é obrigação jurídica, e a semelhança com o termo é só de palavra. O atraso do cronograma contra a linha de base mede prazo, e um projeto pode estar rigorosamente em dia justamente por ter contraído dívida. E os defeitos ainda abertos no rastreador de problemas são falhas conhecidas — coisa distinta de código que funciona e que vai custar caro para mudar. Nem toda dívida é ruim; ruim é contraí-la sem consciência nem plano de pagamento.",null,
 {id:"es-0056",hab:"C"}],

/* ---------- gerência de configuração (10) ---------- */
["ES","Gerência de configuração","Uma linha de base (baseline) caracteriza-se por ser uma configuração",
["provisória e alterável livremente por qualquer desenvolvedor da equipe, sem qualquer registro formal da alteração.","formalmente revisada e aprovada, que só pode ser alterada por procedimento formal de controle de mudanças.","gerada automaticamente a cada commit enviado ao repositório central pelos membros da equipe.","exclusiva do código-fonte do sistema, não abrangendo documentos, scripts de implantação nem ambientes.","válida apenas durante a fase de testes, sendo descartada quando o sistema é liberado para produção."],1,
"A linha de base é o ponto de referência estável: formalmente revisada, aprovada e, daí em diante, alterável só por procedimento de controle de mudanças. Ser provisória e alterável livremente por qualquer desenvolvedor, sem registro formal, é a negação exata disso — descreve uma cópia de trabalho. Gerar uma a cada commit enviado ao repositório confunde baseline com snapshot: o repositório guarda todos os estados, e baseline é o estado que alguém decidiu tornar referência. Não é exclusiva do código-fonte: documentos, scripts de implantação e ambientes entram nela. E não vale apenas durante a fase de testes; é ao liberar para produção que ela passa a dizer o que está em uso.",null,
 {id:"es-0057",hab:"C"}],

["ES","Gerência de configuração","São atividades da gerência de configuração de software:",
["estimativa, cronograma, orçamento e gestão dos riscos identificados.","codificação, teste, implantação e manutenção do sistema entregue ao cliente.","elicitação, análise, especificação e validação dos requisitos levantados.","identificação, controle de versões e de alterações, auditoria e relato de situação.","modelagem, projeto, construção e entrega dos artefatos previstos no plano."],3,
"As quatro atividades canônicas são identificação, controle de versões e de alterações, auditoria e relato de situação. Estimativa, cronograma, orçamento e gestão dos riscos são gerência de projeto. Codificação, teste, implantação e manutenção, assim como modelagem, projeto, construção e entrega, são fases do ciclo de vida: descrevem o que se produz, não o que se controla sobre o produzido. Elicitação, análise, especificação e validação são engenharia de requisitos. O erro típico da questão é esse — trocar a disciplina que governa a mudança pelas atividades que geram o artefato.",null,
 {id:"es-0058",hab:"C"}],

["ES","Gerência de configuração","Em um sistema de controle de versão, a operação de merge pode gerar conflito quando",
["dois desenvolvedores alteram arquivos diferentes dentro do mesmo diretório.","um desenvolvedor cria um novo ramo a partir da versão mais recente do principal.","dois desenvolvedores alteram as mesmas linhas de um mesmo arquivo em ramos distintos.","um arquivo é renomeado em apenas um dos ramos envolvidos na integração.","o repositório é clonado por um desenvolvedor que ainda não fez alterações."],2,
"O conflito surge quando a ferramenta não consegue decidir sozinha qual alteração prevalece: as mesmas linhas do mesmo arquivo, mudadas de modo divergente em ramos distintos. Alterar arquivos diferentes dentro do mesmo diretório mescla sem intervenção, porque a unidade de comparação é o arquivo e não a pasta. Criar um novo ramo a partir da versão mais recente do principal não altera conteúdo algum e por isso nada tem a conflitar. Renomear um arquivo em apenas um dos ramos é tratado pela detecção de renomeação, e quando ela falha o sintoma é outro: arquivo duplicado, não conflito de linha. E clonar o repositório sem ter feito alterações é operação de leitura.",null,
 {id:"es-0059",hab:"C"}],

["ES","Gerência de configuração","O propósito de uma tag (rótulo) em um repositório é",
["marcar de forma imutável um ponto específico do histórico, tipicamente uma versão liberada.","criar uma linha de desenvolvimento paralela a partir do ponto marcado.","desfazer o último commit enviado, revertendo o repositório ao estado anterior.","compactar o histórico do repositório, reduzindo o espaço ocupado em disco.","bloquear o acesso de escrita dos demais desenvolvedores àquele ponto do histórico do repositório."],0,
"Tag é marcador imutável — serve para reencontrar exatamente o que foi liberado. Criar linha paralela é branch; desfazer é revert ou reset.",null,
 {id:"es-0060",hab:"C"}],

["ES","Gerência de configuração","Um item de configuração é",
["apenas o código-fonte do sistema, único artefato que efetivamente sofre alteração ao longo do ciclo de desenvolvimento.","qualquer artefato do projeto submetido ao controle de configuração, incluindo documentos, scripts e ambientes.","somente os executáveis entregues ao cliente, que precisam ser rastreados e arquivados a cada liberação de nova versão.","o registro de defeitos abertos, mantido pela equipe de testes durante todo o desenvolvimento.","o cronograma do projeto, revisado periodicamente pelo gerente para acompanhar os prazos."],1,
"Item de configuração é qualquer artefato submetido ao controle: especificações, casos de teste, scripts de build, definições de ambiente. Restringir ao código-fonte, como se fosse o único artefato que sofre alteração, deixa de fora justamente o que costuma quebrar a reprodutibilidade — ambiente fora do controle é a origem clássica do “na minha máquina funciona”. Limitar aos executáveis entregues ao cliente confunde item com entregável. O registro de defeitos abertos é informação sobre o produto, não uma versão dele. E o cronograma revisado pelo gerente é artefato de projeto: pode entrar sob controle, mas não é o que define a categoria.",null,
 {id:"es-0061",hab:"C"}],

["ES","Gerência de configuração","A auditoria de configuração funcional tem por objetivo verificar se",
["o item de configuração está fisicamente completo em seus arquivos.","o repositório do item está com cópia de segurança atualizada e verificada.","o item de configuração atende aos requisitos funcionais especificados.","a equipe seguiu o padrão de codificação definido pela organização no artefato.","as licenças dos componentes de terceiros incorporados foram devidamente pagas."],2,
"A auditoria funcional confere se o item de configuração atende aos requisitos funcionais especificados. Verificar se ele está fisicamente completo em seus arquivos é a auditoria física, o par que se confunde com esta. Conferir se o repositório tem cópia de segurança atualizada é rotina de operação, e não auditoria de configuração. Verificar se a equipe seguiu o padrão de codificação da organização é revisão de código ou análise estática. E conferir se as licenças dos componentes de terceiros foram pagas é conformidade jurídica, que nada diz sobre o item cumprir o que foi especificado.",null,
 {id:"es-0062",hab:"C"}],

["ES","Gerência de configuração","Sobre estratégias de ramificação, avalie:\nI. Um ramo estável (por exemplo, main) deve conter sempre código apto a ser liberado.\nII. Ramos de correção emergencial (hotfix) partem da versão em produção.\nIII. Quanto mais tempo um ramo permanece isolado, menor o risco de conflito.\nÉ correto o que se afirma em",
["II e III, apenas.","I e III, apenas.","I e II, apenas.","I, apenas.","I, II e III."],2,
"III é falsa e inverte a realidade: isolamento prolongado aumenta a divergência acumulada e, com ela, o risco e o custo do merge.",null,
 {id:"es-0063",hab:"J"}],

["ES","Gerência de configuração","O relato de situação (status accounting) na gerência de configuração destina-se a",
["avaliar e decidir sobre a aprovação ou a rejeição dos pedidos de mudança recebidos.","reexecutar a bateria de testes de regressão após cada alteração incorporada.","executar a compilação e a geração dos artefatos entregáveis a cada versão liberada.","definir a estratégia de ramificação adotada pela equipe no repositório de código.","registrar e comunicar o estado dos itens de configuração e das mudanças ao longo do tempo."],4,
"Relato de situação é a função de informação da disciplina: registrar e comunicar o estado dos itens e das mudanças ao longo do tempo — o que mudou, quando, por quê e em que versão está cada item. Avaliar e decidir sobre a aprovação ou a rejeição dos pedidos de mudança é papel do comitê de controle. Reexecutar a bateria de regressão após cada alteração é atividade de teste. Executar a compilação e gerar os artefatos entregáveis a cada versão é construção e integração. E definir a estratégia de ramificação do repositório é decisão da equipe sobre o fluxo de trabalho. Todas produzem fatos; só o relato de situação existe para contá-los.",null,
 {id:"es-0064",hab:"C"}],

["ES","Gerência de configuração","Um pedido de mudança (change request) aprovado pelo comitê de controle de mudanças deve, obrigatoriamente,",
["ser implementado imediatamente por qualquer desenvolvedor disponível, para reduzir o tempo de atendimento.","passar por análise de impacto antes da aprovação, com registro da decisão e atualização dos itens afetados.","gerar automaticamente uma nova linha de base, sem necessidade de revisão posterior dos itens afetados.","dispensar a execução de testes de regressão, uma vez que a mudança já foi aprovada pelo comitê responsável.","ser mantido fora do controle de versão até a conclusão, para que o repositório principal permaneça estável durante a mudança."],1,
"Análise de impacto antes, rastreabilidade depois: sem saber o que a mudança afeta, não há como estimar custo nem escolher a regressão a reexecutar. Implementá-la imediatamente por qualquer desenvolvedor disponível reduz o tempo de atendimento e perde exatamente esse cálculo. Gerar automaticamente uma nova linha de base, sem revisão posterior dos itens afetados, transforma em referência algo que ninguém conferiu. Dispensar os testes de regressão porque o comitê já aprovou confunde autorizar com verificar: o comitê aprova a mudança, não garante que ela não quebrou o resto. E manter o pedido fora do controle de versão até a conclusão é o que produz alteração sem rastro, o oposto do que a disciplina existe para impedir.",null,
 {id:"es-0065",hab:"C"}],

["ES","Gerência de configuração","O versionamento semântico (MAJOR.MINOR.PATCH) prevê que se incremente o número MAJOR quando",
["forem corrigidos defeitos sem alterar a interface.","houver alteração incompatível com versões anteriores.","forem adicionadas funcionalidades compatíveis com versões anteriores.","o build for reexecutado.","a documentação for atualizada."],1,
"MAJOR sinaliza quebra de compatibilidade: quem consome a biblioteca terá de mudar o próprio código. Corrigir defeitos sem alterar a interface incrementa o PATCH. Acrescentar funcionalidades compatíveis com versões anteriores incrementa o MINOR. Reexecutar o build não muda versão alguma — é o mesmo código compilado outra vez. E atualizar a documentação não altera contrato de uso. A numeração é promessa a quem depende do pacote; inflá-la ou omiti-la destrói a única informação que ela carrega.",null,
 {id:"es-0066",hab:"C"}],

/* ---------- manutenção e evolução (8) ---------- */
["ES","Manutenção","Uma alteração no sistema de folha de pagamento motivada por mudança na legislação tributária classifica-se como manutenção",
["corretiva.","adaptativa.","perfectiva.","preventiva.","emergencial."],1,
"Adaptativa é a resposta a mudança no ambiente externo — legislação, sistema operacional, versão de banco. Não há defeito a corrigir, o que descarta a corretiva, e essa é a troca mais frequente do tema: o cálculo antigo estava certo enquanto a lei antiga valia. Não é perfectiva, porque ninguém pediu função nova nem melhor desempenho. Não é preventiva, que reestrutura o código sem mudar o comportamento, e aqui o comportamento tem de mudar por obrigação legal. E emergencial não é categoria dessa classificação: descreve a urgência do atendimento, que pode acompanhar qualquer um dos tipos.",null,
 {id:"es-0067",hab:"C"}],

["ES","Manutenção","A manutenção preventiva (ou de reengenharia) tem por objetivo",
["corrigir os defeitos relatados pelos usuários após a entrada em produção.","reduzir o tempo de resposta observado nas operações mais utilizadas.","acrescentar as funcionalidades que o cliente solicitou depois da entrega.","adaptar o sistema a uma nova versão do hardware ou do sistema operacional.","melhorar a manutenibilidade futura do software, sem alterar seu comportamento externo."],4,
"Preventiva é investimento em manutenibilidade: refatorar, documentar, reestruturar, mantendo idêntico o comportamento externo. Corrigir os defeitos relatados pelos usuários após a entrada em produção é corretiva. Reduzir o tempo de resposta das operações mais utilizadas e acrescentar funcionalidades solicitadas depois da entrega são perfectivas — mudam o que o usuário percebe. Adaptar o sistema a uma nova versão do hardware ou do sistema operacional é adaptativa. Por não alterar nada visível, a preventiva é a mais difícil de justificar perante o cliente e a primeira a ser adiada.",null,
 {id:"es-0068",hab:"C"}],

["ES","Manutenção","Segundo estudos clássicos de engenharia de software, a maior parcela do custo total do ciclo de vida de um sistema concentra-se",
["no levantamento de requisitos.","na codificação inicial.","na implantação.","nos testes de aceitação.","na manutenção após a entrega."],4,
"A manutenção após a entrega costuma responder por 60% a 80% do custo total, e a razão é aritmética: ela dura enquanto o sistema existir, ao passo que as demais terminam. O levantamento de requisitos e os testes de aceitação são baratos em comparação, ainda que decisivos para o resultado. A codificação inicial, que é o que se costuma imaginar como sendo “o projeto”, responde por fatia bem menor do que a intuição sugere. E a implantação é evento pontual. Daí decorre que investir em manutenibilidade durante a construção é decisão econômica, não preciosismo técnico.",null,
 {id:"es-0069",hab:"C"}],

["ES","Manutenção","Reengenharia de software difere de engenharia reversa porque a reengenharia",
["limita-se a extrair modelos a partir do código existente.","dispensar o entendimento do sistema legado, partindo diretamente para a construção do substituto.","aplicar-se somente a sistemas escritos em linguagens orientadas a objetos, e não a sistemas procedurais.","envolve a reconstrução do sistema a partir do entendimento obtido, produzindo uma nova implementação.","ser sinônimo de refatoração, diferindo apenas na escala do trecho de código que é reestruturado."],3,
"Engenharia reversa entende e documenta o que existe; a reengenharia usa esse entendimento para reconstruir, produzindo nova implementação. Limitar-se a extrair modelos a partir do código existente é precisamente a engenharia reversa, o par que a questão testa. Dispensar o entendimento do sistema legado e partir direto para o substituto não é reengenharia, e sim reescrita do zero, com o risco de repetir os erros que ninguém leu. Restringi-la a linguagens orientadas a objetos é falso: sistema procedural legado é o caso clássico de reengenharia. E não é sinônimo de refatoração, que muda a estrutura interna preservando o comportamento, em escala menor e sem trocar a implementação.",null,
 {id:"es-0070",hab:"C"}],

["ES","Manutenção","As leis de Lehman sobre evolução de software afirmam, entre outras coisas, que",
["um sistema em uso precisa evoluir continuamente, sob pena de se tornar progressivamente menos útil.","sistemas em uso tendem a permanecer estáveis, sem necessidade de alteração após a entrega.","a complexidade de um sistema diminui com o tempo.","a manutenção reduz progressivamente o tamanho do código, à medida que trechos obsoletos são removidos.","a qualidade melhora automaticamente a cada versão."],0,
"Lei da mudança contínua: o ambiente muda, e o software em uso que não acompanha perde utilidade progressivamente. Dizer que sistemas tendem a permanecer estáveis, sem necessidade de alteração após a entrega, é a negação direta dessa lei. A complexidade não diminui com o tempo — a lei da complexidade crescente afirma o oposto, salvo trabalho deliberado para reduzi-la. A manutenção também não reduz o tamanho do código à medida que remove trechos obsoletos: ele cresce, porque acrescentar sai mais barato do que remover com segurança. E a qualidade não melhora automaticamente a cada versão; a observação de Lehman é de declínio, a menos que se invista para contê-lo.",null,
 {id:"es-0071",hab:"C"}],

["ES","Manutenção","Um sistema legado escrito em COBOL, sem documentação e sem testes automatizados, precisa incorporar uma nova regra fiscal. A estratégia de menor risco imediato é",
["reescrever integralmente o sistema em linguagem moderna antes de qualquer alteração.","alterar diretamente o código, sem testes, para ganhar tempo.","envolver o trecho afetado com testes de caracterização e então aplicar a alteração pontual.","descontinuar o sistema legado e migrar toda a operação para uma solução pronta de mercado.","migrar o banco de dados antes de tratar a regra."],2,
"Testes de caracterização registram o comportamento atual (ainda que estranho) e criam a rede de segurança que permite mexer no código. Reescrever tudo antes de uma mudança urgente é trocar risco conhecido por risco maior.",null,
 {id:"es-0072",hab:"C"}],

["ES","Manutenção","O padrão “estrangulamento” (strangler fig) na modernização de sistemas consiste em",
["substituir o sistema legado de uma só vez, em janela única de indisponibilidade, com o novo sistema já integralmente pronto.","duplicar o legado em outro servidor, dividindo a carga entre as duas instâncias em produção.","congelar o legado e proibir qualquer alteração nele, mantendo-o em operação até o encerramento natural de sua vida útil.","construir gradualmente o novo sistema ao redor do legado, redirecionando funcionalidades aos poucos até desativá-lo.","reescrever apenas a camada de banco de dados, preservando intactas a lógica e a interface."],3,
"A migração incremental reduz o risco: cada fatia migrada é validada em produção antes da seguinte, e há caminho de volta. A substituição big bang concentra todo o risco em um único evento.",null,
 {id:"es-0073",hab:"C"}],

["ES","Manutenção","Manutenção perfectiva (ou evolutiva) é aquela que",
["corrige falhas encontradas em produção após o relato dos usuários que utilizam o sistema.","adapta o software a uma nova versão do sistema operacional ou do banco de dados utilizado em produção.","atende a solicitações de novas funcionalidades ou de melhoria de desempenho pedidas pelo usuário.","reestrutura internamente o código sem alterar em nada o comportamento observável.","recupera o sistema após um desastre, restaurando os dados a partir da última cópia de segurança."],2,
"Perfectiva atende a solicitação do usuário por função nova ou por melhor desempenho. Corrigir falhas encontradas em produção, após o relato dos usuários, é corretiva. Adaptar o software a uma nova versão do sistema operacional ou do banco de dados é adaptativa. Reestruturar internamente o código sem alterar em nada o comportamento observável é preventiva. E recuperar o sistema após um desastre, restaurando os dados da última cópia de segurança, não é manutenção de software: é operação e continuidade de negócio, e não toca o código.",null,
 {id:"es-0074",hab:"C"}],

/* ---------- métodos ágeis (10) ---------- */
["ES","Ágil","No Scrum, o responsável por maximizar o valor do produto e por ordenar o Product Backlog é o",
["Scrum Master.","gerente de projeto.","Product Owner.","arquiteto de software.","time de desenvolvimento."],2,
"O PO é o dono do “o quê” e do “por quê”. O Scrum Master remove impedimentos e zela pelo processo; o time decide o “como”. Não há gerente de projeto no framework.",null,
 {id:"es-0075",hab:"C"}],

["ES","Ágil","A Sprint Retrospective tem por finalidade",
["apresentar o incremento construído aos interessados e recolher sua realimentação.","refinar e reordenar os itens do Product Backlog junto ao Product Owner.","planejar as tarefas e selecionar os itens que comporão a Sprint seguinte.","inspecionar o processo de trabalho da equipe e definir melhorias para a próxima Sprint.","avaliar o desempenho individual de cada membro para fins de acompanhamento."],3,
"A Retrospective inspeciona o processo de trabalho da equipe e termina com melhorias definidas para a próxima Sprint. Apresentar o incremento construído aos interessados e recolher realimentação é a Review, que olha o produto — trocar as duas é o erro clássico. Refinar e reordenar os itens do Product Backlog junto ao Product Owner é refinamento, atividade contínua. Planejar as tarefas e selecionar os itens da Sprint seguinte é a Planning. E avaliar o desempenho individual de cada membro não pertence a evento algum do Scrum: a inspeção é do processo, e transformá-la em avaliação de pessoa é o modo mais rápido de fazer o time calar.",null,
 {id:"es-0076",hab:"C"}],

["ES","Ágil","Sobre o Kanban, avalie:\nI. Limita explicitamente o trabalho em progresso (WIP).\nII. Prescreve iterações de duração fixa.\nIII. Torna o fluxo de trabalho visível em um quadro com colunas por etapa.\nÉ correto o que se afirma em",
["I e III, apenas.","I e II, apenas.","II e III, apenas.","I, apenas.","I, II e III."],0,
"Kanban é fluxo contínuo, sem timebox obrigatório — daí II ser falsa. Seus pilares são visualizar o fluxo, limitar o WIP e gerenciar o tempo de atravessamento.",null,
 {id:"es-0077",hab:"J"}],

["ES","Ágil","A prática de programação em pares, do XP, sustenta-se na ideia de que",
["dois desenvolvedores no mesmo teclado produzem o dobro de linhas de código.","um dos desenvolvedores apenas observa, sem interferir no que está sendo escrito.","a revisão contínua durante a escrita reduz defeitos e dissemina conhecimento na equipe.","a revisão em par dispensa qualquer outra forma de revisão ou de teste posterior.","a integração contínua se torna desnecessária, pois o código já nasce revisado."],2,
"O par é inspeção em tempo real, mais difusão de conhecimento e menor dependência de indivíduos. O ganho não é de volume de código — é de qualidade e de redução do fator caminhão.",null,
 {id:"es-0078",hab:"C"}],

["ES","Ágil","No Manifesto Ágil, a formulação correta de um dos valores é",
["software em funcionamento acima de documentação abrangente.","processos e ferramentas acima de indivíduos e interações.","negociação de contratos acima de colaboração com o cliente.","seguir um plano acima de responder a mudanças.","documentação abrangente acima de software em funcionamento."],0,
"O Manifesto valoriza mais os itens à esquerda sem anular os da direita: software em funcionamento acima de documentação abrangente. As demais invertem os pares. Processos e ferramentas acima de indivíduos e interações, negociação de contratos acima de colaboração com o cliente e seguir um plano acima de responder a mudanças são os outros três valores escritos ao contrário. E documentação abrangente acima de software em funcionamento inverte este mesmo. Documentar continua necessário; o que se rejeita é documentar em vez de entregar software que funcione.",null,
 {id:"es-0079",hab:"C"}],

["ES","Ágil","O termo “Definition of Done” refere-se a",
["um critério de aceitação escrito pelo Product Owner para uma história de usuário específica, válido apenas para aquele item do backlog.","a data-limite da Sprint, a partir da qual nenhum item novo pode ser incorporado ao trabalho.","a estimativa em pontos que o time atribui a cada item durante o planejamento, usada depois para calcular a velocidade da equipe.","um acordo compartilhado pela equipe sobre as condições que todo incremento deve satisfazer para ser considerado concluído.","o contrato assinado com o cliente, que define as entregas previstas para o final do projeto."],3,
"A Definition of Done é acordo do time e vale para todo incremento, qualquer que seja o item. O critério de aceitação escrito pelo Product Owner é específico de uma história do backlog e responde “esta funcionalidade faz o que se pediu?”, ao passo que a DoD responde “tudo o que chamamos de pronto foi testado, revisado e integrado?”. A data-limite da Sprint é o timebox e nada diz sobre qualidade. A estimativa em pontos atribuída no planejamento, usada depois para calcular a velocidade, mede tamanho e não conclusão. E o contrato assinado com o cliente define as entregas do projeto, em outro nível e por outro instrumento. Sem DoD explícita, “pronto” significa coisa diferente para cada membro da equipe.",null,
 {id:"es-0080",hab:"C"}],

["ES","Ágil","Em uma Sprint de duas semanas, o time percebe no quinto dia que não conseguirá concluir todos os itens. A conduta correta segundo o Scrum é",
["estender a duração da Sprint até concluir os itens.","reduzir a Definition of Done para caber no prazo.","cancelar a Sprint imediatamente.","conversar com o Product Owner para renegociar o escopo da Sprint.","trabalhar horas extras até o fim da Sprint."],3,
"O timebox é fixo e o escopo é a variável: renegociar com o Product Owner o que entra na Sprint é o mecanismo previsto. Estender a duração até concluir os itens destrói a cadência que torna a velocidade comparável de uma Sprint a outra. Reduzir a Definition of Done para caber no prazo apenas transfere o problema — a entrega passa a parecer pronta sem estar. Cancelar a Sprint imediatamente é prerrogativa do Product Owner e cabe só quando o objetivo se torna obsoleto, que não é o caso de um atraso no quinto dia. E trabalhar horas extras compra prazo com defeito e com a velocidade da Sprint seguinte.",null,
 {id:"es-0081",hab:"C"}],

["ES","Ágil","Velocidade (velocity), no Scrum, deve ser entendida como",
["uma métrica de produtividade comparável entre equipes diferentes da mesma organização ao longo do tempo.","o número de horas efetivamente trabalhadas pela equipe ao longo de cada Sprint.","um indicador de desempenho individual de cada membro, usado nas avaliações periódicas.","uma referência histórica da própria equipe, útil para planejar a capacidade das próximas Sprints.","a quantidade de defeitos corrigidos pela equipe durante a Sprint, medida ao final de cada ciclo."],3,
"Velocity é referência histórica da própria equipe, útil para planejar a capacidade das próximas Sprints. Não é métrica comparável entre equipes diferentes da mesma organização, porque a escala de pontos é relativa e cada time calibra a sua. Não é o número de horas efetivamente trabalhadas: ponto mede tamanho e incerteza, não tempo. Não é indicador de desempenho individual — usá-la em avaliação periódica ensina o time a inflar estimativa. E não é a quantidade de defeitos corrigidos ao final do ciclo, que é outra medida inteiramente. Qualquer um desses usos corrompe a estimativa, que deixa de ser previsão e vira negociação.",null,
 {id:"es-0082",hab:"C"}],

["ES","Ágil","Considere a asserção e a razão:\nI. Métodos ágeis privilegiam entregas frequentes de incrementos funcionais.\nPORQUE\nII. A realimentação obtida com software em uso reduz o risco de construir o produto errado.\nA respeito dessas asserções, assinale a alternativa correta.",
["A I é falsa e a II é verdadeira.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","As duas são verdadeiras e a II justifica a I.","As duas são falsas."],3,
"A entrega frequente existe justamente para encurtar o ciclo de realimentação e reduzir o risco de mercado. Nexo causal direto entre as duas asserções.",null,
 {id:"es-0083",hab:"A"}],

["ES","Ágil","A transformação aplicada entre as versões abaixo é corretamente classificada como",
["correção de defeito, pois o resultado devolvido pelo método passou a ser outro.","reengenharia, pois o módulo foi reconstruído a partir do entendimento do legado.","manutenção adaptativa, pois o código foi ajustado a uma nova versão da linguagem.","otimização de desempenho, pois a nova versão executa em menos tempo.","refatoração, pois melhora a estrutura interna preservando o comportamento externo."],4,
"As duas versões devolvem o mesmo valor para qualquer entrada: mudou a estrutura interna, e não o comportamento externo — é a definição precisa de refatoração. Não é correção de defeito, porque o resultado devolvido pelo método não passou a ser outro. Não é reengenharia: nada foi reconstruído a partir do entendimento de um sistema legado, o mesmo método foi reescrito. Não é manutenção adaptativa, porque o código não foi ajustado a uma nova versão da linguagem imposta de fora; a escrita com stream é escolha de estilo. E não é otimização de desempenho: a nova versão não executa necessariamente em menos tempo, e o ganho pretendido é de legibilidade. É justamente por isso que refatorar exige uma suíte de testes: ela é a prova de que nada mudou.",
"// antes\ndouble calcular(List<Item> itens) {\n    double t = 0;\n    for (int i = 0; i < itens.size(); i++) {\n        if (itens.get(i).getTipo() == 1) {\n            t = t + itens.get(i).getValor() * 0.9;\n        } else {\n            t = t + itens.get(i).getValor();\n        }\n    }\n    return t;\n}\n\n// depois\ndouble calcular(List<Item> itens) {\n    return itens.stream()\n                .mapToDouble(this::valorComDesconto)\n                .sum();\n}\n\ndouble valorComDesconto(Item item) {\n    return item.ehPromocional() ? item.getValor() * 0.9 : item.getValor();\n}",
 {id:"es-0084",hab:"I"}],

/* ---------- arquitetura de processo e apoio (8) ---------- */
["ES","Estimativas","A técnica de Análise de Pontos de Função estima o tamanho do software a partir",
["do número de linhas de código previstas para a implementação de cada módulo.","do número de desenvolvedores alocados e da produtividade média da equipe.","das funcionalidades entregues ao usuário, independentemente da tecnologia empregada.","da duração estimada em meses, convertida em esforço pela produtividade histórica.","do número de tabelas e colunas previstas no modelo de dados da aplicação."],2,
"A Análise de Pontos de Função mede as funcionalidades entregues ao usuário — entradas, saídas, consultas, arquivos —, e é por independer da tecnologia empregada que serve para comparar e contratar. Contar as linhas de código previstas mede a solução, não o problema, e penaliza justamente a implementação mais concisa. Partir do número de desenvolvedores alocados e da produtividade média da equipe inverte a ordem: produtividade é o que se calcula depois de conhecer o tamanho. A duração estimada em meses é resultado, não insumo. E contar tabelas e colunas do modelo de dados mede estrutura interna, que pode ser grande num sistema de poucas funções e pequena num sistema de muitas.",null,
 {id:"es-0085",hab:"C"}],

["ES","Estimativas","No Planning Poker, o uso de uma sequência do tipo Fibonacci para as estimativas justifica-se porque",
["a sequência de Fibonacci é formada por números primos, o que evita ambiguidade.","o espaçamento crescente reflete a maior incerteza inerente a itens maiores.","o espaçamento entre os valores evita empates na votação dos participantes.","a sequência é prescrita pelo Guia do Scrum para estimativa de itens do backlog.","os valores permitem converter pontos em horas por uma razão fixa conhecida."],1,
"O espaçamento cresce porque a incerteza cresce com o tamanho do item: ninguém distingue com segurança um de 20 de um de 21 pontos, e a escala evita essa falsa exatidão. A sequência de Fibonacci não é formada por números primos — 8 e 21 estão nela —, e primalidade nada teria a ver com estimativa. Evitar empates na votação dos participantes não é o objetivo: empate é comum, e discuti-lo é o produto real da técnica. Não é prescrita pelo Guia do Scrum, que não fixa unidade nem escala. E não existe razão fixa para converter pontos em horas — se existisse, o ponto não teria razão de ser.",null,
 {id:"es-0086",hab:"C"}],

["ES","Riscos","Na gestão de riscos de software, a exposição ao risco é calculada por",
["custo × prazo.","probabilidade + impacto.","impacto / probabilidade.","probabilidade × impacto.","impacto − probabilidade."],3,
"Exposição é probabilidade × impacto, e é o produto que permite priorizar: risco improvável e catastrófico pode superar risco provável de impacto pequeno. Custo × prazo não envolve probabilidade alguma e mede tamanho de projeto, não risco. A soma probabilidade + impacto mistura grandezas incomparáveis, uma fração com um valor em dinheiro, e a subtração impacto − probabilidade faz o mesmo com o sinal trocado. A divisão impacto / probabilidade cresce à medida que o risco fica menos provável, invertendo a prioridade. Só o produto devolve a unidade que interessa: dinheiro esperado.",null,
 {id:"es-0087",hab:"C"}],

["ES","Riscos","A estratégia de resposta a risco que consiste em contratar seguro ou terceirizar a atividade para um fornecedor especializado é a de",
["mitigação.","aceitação.","transferência.","eliminação.","escalonamento."],2,
"Transferir move o impacto para um terceiro — seguradora ou fornecedor especializado — sem eliminar o risco, que continua podendo ocorrer. Mitigação reduz a probabilidade ou o impacto, agindo sobre a causa ou sobre a consequência. Aceitação é conviver conscientemente, com ou sem reserva de contingência. Eliminação remove a causa, em geral mudando escopo ou tecnologia. E escalonamento encaminha o risco a quem tem autoridade para tratá-lo, quando ele excede o alcance do projeto: o que muda de mãos ali é a responsabilidade, dentro da mesma organização, e não o impacto financeiro.",null,
 {id:"es-0088",hab:"C"}],

["ES","Reúso","Uma linha de produtos de software (software product line) baseia-se em",
["desenvolver cada produto de forma independente, a partir dos requisitos de cada cliente.","distribuir os produtos sob licença livre, permitindo que o cliente adapte o que precisar.","padronizar a interface de todos os produtos, mantendo implementações internas distintas.","explorar a variabilidade sobre uma plataforma comum de componentes compartilhados.","manter uma equipe dedicada por cliente, responsável por todo o ciclo de vida do produto."],3,
"A linha de produtos explora a variabilidade sobre uma plataforma comum: o núcleo é compartilhado e as diferenças entram por pontos de extensão previstos. Desenvolver cada produto de forma independente, a partir dos requisitos de cada cliente, é exatamente o que ela vem substituir. Distribuir sob licença livre para que o cliente adapte o que precisar é modelo de licenciamento e nada diz sobre reúso interno. Padronizar a interface de todos os produtos mantendo implementações internas distintas inverte o arranjo: o que não pode divergir é o núcleo. E manter uma equipe dedicada por cliente multiplica o custo que a plataforma existe para diluir — daí o ganho só aparecer a partir de certo número de produtos, pois a plataforma tem custo inicial alto.",null,
 {id:"es-0089",hab:"C"}],

["ES","Documentação","O documento de arquitetura de software (visão 4+1) organiza-se em visões porque",
["cada visão é destinada a um cliente diferente, conforme o que foi acordado no contrato firmado com cada um dos contratantes.","cada visão substitui a anterior à medida que o projeto avança, mantendo só a mais recente válida.","a UML determina que todo documento de arquitetura contenha exatamente cinco diagramas distintos, um para cada visão prevista.","a separação em visões reduz o número de páginas do documento, facilitando sua impressão e leitura.","diferentes interessados têm preocupações distintas, mais bem atendidas por representações separadas e complementares."],4,
"As visões existem porque os interessados têm preocupações distintas — funcionalidade, concorrência, organização do código, implantação —, mais bem atendidas por representações separadas e complementares. Não há uma visão por cliente conforme o contrato firmado: o critério é a preocupação, não o contratante. Elas não se substituem à medida que o projeto avança; todas seguem válidas ao mesmo tempo. A UML não determina que o documento contenha cinco diagramas distintos — ela oferece notação, e o 4+1 é modelo de organização, não regra da linguagem. E reduzir o número de páginas para facilitar a impressão não é razão arquitetural: separar em visões costuma aumentar o total.",null,
 {id:"es-0090",hab:"C"}],

["ES","Processo","A prática de definir um processo padrão organizacional e adaptá-lo a cada projeto é conhecida como",
["institucionalização.","tailoring (adaptação).","benchmarking.","auditoria.","certificação."],1,
"Tailoring é adaptar o processo padrão da organização a cada projeto, e é o que impede que ele vire burocracia inútil em projeto pequeno ou fique frouxo demais em projeto crítico. Institucionalização é o movimento oposto: fazer o processo pegar na organização, de modo que sobreviva à troca de pessoas. Benchmarking compara o desempenho da organização com o de outras. Auditoria verifica se o que se faz corresponde ao que está definido. E certificação é o reconhecimento externo de que certo nível foi atingido. Modelos de maturidade preveem explicitamente essa adaptação, em vez de exigir processo único.",null,
 {id:"es-0091",hab:"C"}],

["ES","Processo","A principal função de um post-mortem (lição aprendida) ao término de um projeto é",
["identificar os responsáveis pelos erros cometidos ao longo da execução.","encerrar formalmente o contrato firmado com o cliente e liberar a equipe para outro projeto.","calcular o bônus da equipe com base nos resultados obtidos no projeto.","registrar o que funcionou e o que não funcionou, alimentando a melhoria do processo organizacional.","arquivar o código-fonte e a documentação em repositório definitivo, encerrando formalmente o projeto."],3,
"A finalidade é aprendizado organizacional: registrar o que funcionou e o que não funcionou, alimentando a melhoria do processo. Identificar os responsáveis pelos erros cometidos destrói exatamente a franqueza de que o registro depende — onde se procura culpado, ninguém relata o que deu errado. Encerrar formalmente o contrato com o cliente e liberar a equipe é encerramento administrativo. Calcular o bônus com base nos resultados amarra o relato a dinheiro e produz relato conveniente. E arquivar o código-fonte e a documentação em repositório definitivo é atividade de gerência de configuração, que preserva o artefato e não a lição.",null,
 {id:"es-0092",hab:"C"}],
["ES","Manutenção","Uma equipe corrige um defeito alterando três trechos de código semelhantes, espalhados por módulos diferentes, que implementavam a mesma regra. Além da correção, a ação indicada é",
["registrar em documento os três pontos alterados, para que futuras correções sejam aplicadas nos mesmos locais.","adicionar comentários nos três trechos, alertando que qualquer alteração precisa ser replicada nos demais locais.","manter a duplicação, que reduz o acoplamento entre os módulos ao evitar dependência de um componente comum.","extrair a regra duplicada para um único ponto, eliminando a chance de correções futuras alcançarem apenas parte deles.","criar teste automatizado para cada um dos três trechos, verificando que o comportamento permanece idêntico."],3,
"Documento e comentário dependem de alguém lembrar de lê-los, e o próprio defeito mostra que a duplicação já cobrou seu preço. Testes ajudam, mas o problema estrutural continua ali esperando a próxima correção parcial.",null,
 {id:"es-0093",hab:"C"}],

["ES","Manutenção","Segundo a classificação usual dos tipos de manutenção de software, adequar um sistema a uma mudança na legislação tributária caracteriza manutenção",
["corretiva, por eliminar do sistema um comportamento que deixou de estar em conformidade com a norma vigente.","emergencial, categoria aplicável a qualquer alteração motivada por exigência legal com prazo definido.","perfectiva, uma vez que aprimora o resultado entregue ao usuário sem alterar as funcionalidades já existentes.","preventiva, pois evita que o sistema apresente falhas de conformidade em fiscalizações futuras da autoridade.","adaptativa, por ajustar o software a uma mudança ocorrida no ambiente externo em que ele opera."],4,
"A distinção é a origem da mudança: o software não tinha defeito, o mundo em volta mudou. Corretiva é para defeito preexistente, perfectiva para melhoria pedida, preventiva para risco antecipado pela equipe.",null,
 {id:"es-0094",hab:"C"}],

["ES","Testes","Um analista deseja cobrir todas as saídas possíveis do método acima com o menor número de casos de teste, usando análise de valores-limite. O conjunto mínimo que exercita as quatro saídas e testa as fronteiras é",
["{−1, 0, 17, 18, 59, 60}.","{0, 18, 60}.","{−1, 30, 70}.","{1, 2, 3, 4}.","{0, 1, 2, 3, 4, 5}."],0,
"As fronteiras estão em 0, 18 e 60, e a análise de valores-limite exige testar imediatamente antes e depois de cada uma: −1 e 0, 17 e 18, 59 e 60. O conjunto {0, 18, 60} atinge as quatro saídas mas não exercita nenhum limite inferior, e é justamente aí que mora o erro de trocar < por <=. {−1, 30, 70} cobre três saídas com valores centrais, sem fronteira nenhuma. Os dois últimos conjuntos nem alcançam as quatro saídas.","public int classificar(int idade) {\n    if (idade < 0)   return -1;   // inválido\n    if (idade < 18)  return 0;    // menor\n    if (idade < 60)  return 1;    // adulto\n    return 2;                     // idoso\n}",
 {"id":"es-0095","hab":"I"}],

["ES","Gerência de configuração","Ao integrar o ramo ajuste em main, o sistema de controle de versão",
["aplicará automaticamente o valor mais recente por data de commit, sem intervenção.","sinalizará conflito na linha 42, por haver alterações divergentes a partir de um ancestral comum.","descartará silenciosamente as alterações do ramo ajuste, por main ser o ramo principal.","impedirá a integração até que o ramo ajuste seja recriado a partir do estado atual de main.","duplicará a linha 42, mantendo os dois valores no arquivo integrado."],1,
"Os dois ramos partem de a1b2c3 com 0.05 e alteram a MESMA linha para valores diferentes. A fusão de três vias compara cada lado com o ancestral comum: como os dois mudaram, não há como decidir sozinho, e o conflito é sinalizado para alguém resolver. Escolher pela data seria arbitrário — commit mais recente não é o mais correto —, e é exatamente por isso que a ferramenta não escolhe.",null,
 {"id":"es-0096","hab":"I","art":[{"t":"tabela","cap":"Histórico de um arquivo em dois ramos","cab":["Ramo","Commit","Alteração na linha 42"],"al":["","",""],"linhas":[["main","a1b2c3","taxa = 0.05"],["main","d4e5f6","taxa = 0.07"],["ajuste","a1b2c3","taxa = 0.05"],["ajuste","9g8h7i","taxa = 0.09"]]}]}],

["ES","Estimativas","Pela distribuição beta do PERT, cuja média é (O + 4M + P) / 6, a duração esperada da atividade é de",
["13 dias.","14 dias.","12 dias.","15 dias.","11 dias."],0,
"(6 + 4×12 + 24) / 6 = (6 + 48 + 24) / 6 = 78 / 6 = 13 dias. A alternativa de 12 dias toma o valor mais provável como se fosse a esperada, o que ignora a assimetria: o pessimista está 12 dias acima do mais provável e o otimista apenas 6 abaixo, e é essa cauda mais longa que empurra a média para cima. A média aritmética simples dos três daria 14, que é o outro distrator.",null,
 {"id":"es-0097","hab":"X","art":[{"t":"tabela","cap":"Estimativa por três pontos de uma atividade","cab":["Cenário","Duração (dias)"],"al":["","num"],"linhas":[["Otimista (O)","6"],["Mais provável (M)","12"],["Pessimista (P)","24"]]}]}],

["ES","Testes","Considerando a cobertura de condição/decisão modificada (MC/DC) para o comando acima, o número mínimo de casos de teste necessários é",
["2.","3.","4.","6.","8."],1,
"MC/DC exige que cada condição isolada demonstre afetar o resultado, mantendo as demais fixas. Com (V,V) → libera, (F,V) → bloqueia e (V,F) → bloqueia, provam-se as duas condições em três casos. Dois casos cobririam decisão, mas não isolariam cada condição; quatro é o total de combinações, que é cobertura de condição múltipla e mais do que o MC/DC pede.","if (idade >= 18 && possuiDocumento) {\n    liberar();\n} else {\n    bloquear();\n}",
 {"id":"es-0098","hab":"X"}],

["ES","Qualidade","O custo total de correção dos defeitos encontrados em produção representa, do custo total de correção do projeto, aproximadamente",
["10%.","25%.","42%.","56%.","7%."],3,
"Produção: 10 × 10.000 = 100.000. Demais: 40×100 + 30×500 + 60×1.000 = 4.000 + 15.000 + 60.000 = 79.000. Total 179.000, e 100.000 / 179.000 ≈ 0,56 — cerca de 56%. A alternativa de 7% é a proporção de defeitos (10 de 140), que troca custo por contagem, e é exatamente o que a tabela existe para desmontar: dez defeitos em produção custam mais que os cento e trinta anteriores somados. Os 42% saem de somar projeto e codificação (15.000 + 60.000 = 75.000) sobre o total, respondendo a outra pergunta. Os 25% são o palpite de quem reparte as quatro fases em partes iguais sem olhar os números. E 10% apenas repete a contagem de defeitos da última linha.",null,
 {"id":"es-0099","hab":"X","art":[{"t":"tabela","cap":"Defeitos encontrados por fase em um projeto","cab":["Fase","Defeitos","Custo médio de correção (R$)"],"al":["","num","num"],"linhas":[["Requisitos","40","100"],["Projeto","30","500"],["Codificação","60","1.000"],["Produção","10","10.000"]]}]}],

["ES","Manutenção","A manutenção perfectiva representa, do total de horas de manutenção do semestre, aproximadamente",
["21%.","30%.","43%.","53%.","62%."],3,
"Total: 180 + 120 + 420 + 80 = 800 horas, e 420 / 800 = 0,525, ou seja cerca de 53%. Antes de qualquer conta, 21%, 30% e 43% já se descartam: 420 é maior que a soma das outras três linhas (180 + 120 + 80 = 380), logo a perfectiva passa da metade do total, e nenhuma resposta abaixo de 50% pode estar certa. Restam 53% e 62%, e os 62% correspondem a somar a preventiva à perfectiva — 500 de 800 —, juntando tudo o que não é conserto e respondendo a outra pergunta. O resultado é coerente com a literatura: a maior parte do esforço de manutenção é melhoria e evolução do que já funciona, não correção de defeito.",null,
 {"id":"es-0100","hab":"X","art":[{"t":"tabela","cap":"Horas de manutenção por tipo em um semestre","cab":["Tipo","Horas"],"al":["","num"],"linhas":[["Corretiva","180"],["Adaptativa","120"],["Perfectiva","420"],["Preventiva","80"]]}]}],

["ES","Ágil","Restando 150 pontos no backlog e mantida a velocidade média das quatro sprints, o número de sprints ainda necessárias é de aproximadamente",
["3.","4.","6.","7.","5."],4,
"Velocidade média: (26 + 31 + 28 + 35) / 4 = 120 / 4 = 30 pontos por sprint. Restando 150 pontos, 150 / 30 = 5 sprints. Planejar pela maior velocidade já alcançada, 35, daria 4 sprints — o erro de projetar pelo melhor caso, e a média existe justamente porque a velocidade oscila. Planejar pela pior, 26, daria quase 6, que é o excesso de cautela simétrico. E 3 exigiria 50 pontos por sprint, acima de tudo o que a equipe já entregou, enquanto 7 sobra: nem a pior das quatro sprints justifica esse prazo. Compromisso assumido pelo pico é compromisso que a equipe não cumpre.",null,
 {"id":"es-0101","hab":"X","art":[{"t":"tabela","cap":"Velocidade da equipe nas últimas quatro sprints","cab":["Sprint","Pontos entregues"],"al":["","num"],"linhas":[["1","26"],["2","31"],["3","28"],["4","35"]]}]}],

["ES","Riscos","Ordenando os riscos pelo valor monetário esperado, do maior para o menor, obtém-se",
["A, B, C.","B, C, A.","C, A, B.","A, C, B.","B, A, C."],4,
"Valor esperado é probabilidade vezes impacto: A dá 0,10 × 200.000 = 20.000; B dá 0,40 × 60.000 = 24.000; C dá 0,25 × 80.000 = 20.000. Logo B na frente, e A e C empatados em 20.000, com A antes por ter o maior impacto no desempate. Ordenar só pelo impacto daria A, C, B; ordenar só pela probabilidade daria B, C, A; e A, B, C é apenas a ordem em que a tabela apresenta os riscos, que não é priorização nenhuma. É a combinação das duas grandezas que orienta, e o empate entre A e C mostra por quê.",null,
 {"id":"es-0102","hab":"X","art":[{"t":"tabela","cap":"Riscos identificados e suas estimativas","cab":["Risco","Probabilidade","Impacto (R$)"],"al":["","num","num"],"linhas":[["A","0,10","200.000"],["B","0,40","60.000"],["C","0,25","80.000"]]}]}],

["ES","Requisitos","Uma equipe desenvolve um sistema de agendamento para uma rede de clínicas. Durante a homologação, a coordenadora de enfermagem afirma que o sistema precisa impedir o agendamento de dois procedimentos no mesmo horário para o mesmo profissional. O documento de requisitos aprovado seis meses antes não menciona essa restrição, e a arquitetura já implementada permite agendamentos simultâneos por depender de uma fila assíncrona sem verificação de conflito. Faltam três semanas para a entrada em produção, e o contrato prevê multa por atraso. A equipe precisa decidir como proceder.\nA conduta mais adequada é",
["implementar a mudança imediatamente, sem registro formal, para não comprometer o prazo contratado.","recusar a solicitação, uma vez que a restrição não constava do documento de requisitos aprovado.","registrar a solicitação como mudança, avaliar o impacto sobre arquitetura, prazo e custo, e submeter a decisão ao patrocinador do projeto.","entrar em produção como está e tratar os conflitos manualmente, sem informar o cliente.","reiniciar o levantamento de requisitos do zero, já que o documento aprovado se mostrou incompleto."],2,
"A restrição é um requisito legítimo, e provavelmente crítico em contexto clínico — recusá-la por não constar do documento seria cumprir o contrato e entregar um sistema que agenda dois procedimentos ao mesmo tempo para o mesmo profissional. Implementá-la sem registro é o extremo oposto: some o rastro do impacto sobre prazo e a multa fica sem justificativa. O caminho é o controle de mudanças, que existe para que a decisão de trocar prazo por qualidade seja tomada por quem responde por ela. Reiniciar tudo é desproporcional a uma omissão pontual.",null,
 {"id":"es-0103","hab":"E"}],

["ES","Testes","Um sistema de folha de pagamento em produção há quatro anos não possui testes automatizados. A equipe recebeu a tarefa de alterar o cálculo de horas extras, que está distribuído por três classes com 1.200 linhas no total, sem separação clara entre regra de negócio e acesso a dados. Alterações anteriores nesse trecho provocaram defeitos em produção duas vezes no último ano. O prazo é de duas semanas e não há orçamento para reescrever o módulo.\nA estratégia mais adequada é",
["reescrever o módulo inteiro com arquitetura limpa antes de tocar na regra de horas extras.","alterar diretamente o cálculo e ampliar a bateria de testes manuais na homologação.","adiar a alteração até que haja orçamento para a reescrita completa do módulo.","escrever testes de caracterização que fixem o comportamento atual do cálculo, alterar em seguida e usar esses testes como rede de proteção.","isolar o módulo atrás de uma nova interface, sem escrever testes, e sinalizar o trecho como legado."],3,
"Teste de caracterização — capturar o que o código faz hoje, sem julgar se é o que deveria fazer — é a técnica canônica para mexer em código legado sem cobertura: primeiro a rede, depois o salto. Reescrever antes de ter testes é trocar um risco conhecido por um maior, sem meio de saber se o comportamento foi preservado. Confiar em teste manual é repetir o que já falhou duas vezes. E adiar não é opção quando a regra de negócio mudou.",null,
 {"id":"es-0104","hab":"E"}],

["ES","Processo","Uma equipe de seis pessoas mantém um produto com entregas quinzenais. As últimas quatro entregas atrasaram, e a retrospectiva apontou sempre a mesma causa: itens começados que ficam parados aguardando revisão de código, às vezes por três dias. O quadro de tarefas mostra, em média, onze itens simultaneamente em andamento. A equipe já tenta trabalhar mais rápido e faz horas extras.\nA intervenção mais promissora é",
["contratar mais duas pessoas, para aumentar a capacidade de revisão da equipe.","eliminar a etapa de revisão de código, que é o gargalo identificado no fluxo.","aumentar a duração da iteração de duas para quatro semanas, para acomodar o tempo de revisão.","estabelecer prioridade de revisão sobre início de tarefa nova, para que o trabalho pare de se acumular.","limitar o trabalho em andamento, de modo que a equipe termine o que começou antes de puxar item novo."],4,
"Onze itens em andamento para seis pessoas significa que quase todo mundo tem duas frentes, e a fila de revisão é consequência disso, não causa. Limitar o trabalho em andamento é a intervenção que ataca o mecanismo: com menos itens abertos, revisar deixa de competir com começar. Priorizar revisão ajuda e é meio caminho, mas sem limite o acúmulo volta. Contratar aumenta a vazão e também o número de itens abertos; eliminar a revisão troca atraso por defeito; e alongar a iteração esconde o problema em vez de resolvê-lo.",null,
 {"id":"es-0105","hab":"E"}]

]);
