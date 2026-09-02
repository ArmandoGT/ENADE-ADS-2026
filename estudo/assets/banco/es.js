/* Banco IA — Engenharia de software (94 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- requisitos (16) ---------- */
["ES","Requisitos","O cliente de um sistema de matrícula determinou que nenhuma tela pode levar mais de dois segundos para responder. Essa exigência caracteriza um requisito",
["funcional, porque descreve uma ação executada pelo sistema.","não funcional de desempenho, porque restringe a qualidade do serviço prestado.","de domínio, porque deriva das regras da área de aplicação.","funcional de qualidade, porque combina ação e restrição.","não funcional de usabilidade, porque afeta a percepção do usuário."],1,
"Requisito funcional diz o QUE o sistema faz; não funcional diz COMO ou com que qualidade. Tempo de resposta é atributo de desempenho. Cuidado com a pegadinha: afetar a percepção do usuário não transforma a exigência em usabilidade — a métrica é tempo, logo desempenho.",null,
 {id:"es-0001",hab:"C"}],

["ES","Requisitos","Considere os requisitos levantados para um sistema hospitalar:\nI. O sistema deve permitir o agendamento de consultas.\nII. O sistema deve estar disponível 99,5% do tempo.\nIII. O sistema deve emitir receituário em duas vias.\nIV. O sistema deve ser operável por funcionários sem formação técnica após duas horas de treinamento.\nSão requisitos NÃO funcionais apenas",
["I e III.","II e IV.","I, II e III.","III e IV.","II, III e IV."],1,
"II é disponibilidade e IV é usabilidade — ambos atributos de qualidade. I e III descrevem ações do sistema, logo são funcionais. Note que IV é não funcional apesar de mencionar uma tarefa: o que se restringe é a facilidade de operação, não a função.",null,
 {id:"es-0002",hab:"J"}],

["ES","Requisitos","A etapa de validação de requisitos tem como propósito principal verificar se",
["os requisitos foram escritos na notação adotada pela organização.","os requisitos descrevem o sistema que o cliente realmente deseja.","os requisitos podem ser implementados com a tecnologia disponível.","os requisitos foram aprovados pelo gerente de projeto.","os requisitos estão rastreados até os casos de teste."],1,
"Validação responde “estamos construindo o sistema certo?”. Verificação responde “estamos construindo o sistema corretamente?”. A alternativa sobre viabilidade tecnológica descreve o estudo de viabilidade, não a validação.",null,
 {id:"es-0003",hab:"C"}],

["ES","Requisitos","Um analista reuniu usuários de três departamentos numa sala, com um facilitador e um escriba, para produzir em conjunto a especificação de um módulo em dois dias de trabalho intensivo. A técnica de elicitação empregada é",
["entrevista estruturada.","observação em campo (etnografia).","workshop de requisitos (JAD).","prototipação evolutiva.","análise de documentos."],2,
"JAD (Joint Application Design) é exatamente a sessão conjunta e facilitada com papéis definidos. Entrevista é individual; etnografia é observação sem intervenção; prototipação produz artefato executável, não especificação em sessão.",null,
 {id:"es-0004",hab:"C"}],

["ES","Requisitos","Sobre rastreabilidade de requisitos, avalie as afirmações:\nI. Permite identificar quais componentes de projeto serão afetados por uma mudança em um requisito.\nII. É condição para a análise de impacto no controle de mudanças.\nIII. Só é aplicável a requisitos funcionais.\nÉ correto o que se afirma em",
["I, apenas.","I e II, apenas.","II e III, apenas.","I e III, apenas.","I, II e III."],1,
"Rastreabilidade liga requisitos a artefatos de projeto, código e teste, sustentando a análise de impacto. Ela vale igualmente para requisitos não funcionais — daí III ser falsa.",null,
 {id:"es-0005",hab:"J"}],

["ES","Requisitos","Requisitos de domínio distinguem-se dos demais porque",
["são invariavelmente não funcionais, por descreverem restrições e não ações.","derivam do ambiente de aplicação e podem ser omitidos pelo cliente por parecerem óbvios.","são definidos pela equipe técnica, que conhece as limitações da plataforma.","descrevem restrições de hardware impostas pelo ambiente de implantação.","substituem os requisitos funcionais em sistemas críticos."],1,
"Requisitos de domínio nascem da área de negócio e são justamente os mais arriscados: por serem evidentes para o especialista, costumam não ser verbalizados, e sua ausência gera retrabalho.",null,
 {id:"es-0006",hab:"C"}],

["ES","Requisitos","Um documento de especificação afirma: “o sistema deve ser rápido e amigável”. O principal defeito desse requisito é a falta de",
["completude.","consistência.","verificabilidade.","rastreabilidade.","priorização."],2,
"Sem critério mensurável não há como testar se o requisito foi atendido. Requisito bom é verificável: “responder em até 2 s no percentil 95” é testável, “ser rápido” não.",null,
 {id:"es-0007",hab:"C"}],

["ES","Requisitos","Na engenharia de requisitos, a atividade de negociação é necessária principalmente porque",
["os requisitos precisam ser traduzidos para linguagem formal.","diferentes partes interessadas têm expectativas conflitantes e recursos são limitados.","o cliente raramente conhece as próprias regras de negócio em detalhe suficiente.","a equipe técnica precisa aprovar formalmente o escopo antes da contratação.","a legislação exige o registro documentado de todas as decisões de escopo."],1,
"Conflito entre stakeholders é a regra, não a exceção: usuário quer função, financeiro quer custo, operação quer estabilidade. Negociar é priorizar dentro de restrições de prazo e orçamento.",null,
 {id:"es-0008",hab:"C"}],

["ES","Requisitos","Considere a asserção e a razão:\nI. Protótipos descartáveis são úteis na elicitação de requisitos.\nPORQUE\nII. Usuários costumam expressar melhor o que desejam ao reagir a algo concreto do que ao descrever necessidades em abstrato.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"O protótipo funciona como instrumento de elicitação exatamente pelo mecanismo descrito em II: é mais fácil criticar algo pronto do que imaginar do zero. Há nexo causal, logo a II justifica a I.",null,
 {id:"es-0009",hab:"A"}],

["ES","Requisitos","O documento que registra, para cada caso de uso, o ator, a pré-condição, o fluxo principal e os fluxos alternativos é conhecido como",
["matriz de rastreabilidade entre requisitos, componentes e casos de teste.","especificação suplementar, que reúne os requisitos não funcionais do sistema.","descrição (ou narrativa) de caso de uso.","documento de visão, que apresenta o escopo e os objetivos gerais do produto.","backlog do produto, com os itens priorizados pelo responsável pelo produto."],2,
"A narrativa de caso de uso detalha textualmente o que o diagrama apenas nomeia. A especificação suplementar guarda os requisitos não funcionais que não cabem em nenhum caso de uso.",null,
 {id:"es-0010",hab:"C"}],

["ES","Requisitos","Em uma reunião, o cliente afirma: “quando o estoque de um item ficar abaixo do ponto de ressuprimento, o sistema deve gerar automaticamente uma ordem de compra”. Trata-se de um requisito",
["não funcional de confiabilidade, por tratar da continuidade do abastecimento.","funcional, com uma regra de negócio associada.","de domínio, por descrever uma prática consolidada da área de suprimentos.","de interface externa, por envolver comunicação com o sistema do fornecedor.","de restrição de projeto, por condicionar a solução técnica a ser adotada."],1,
"Gerar ordem de compra é ação do sistema (funcional); o gatilho “abaixo do ponto de ressuprimento” é a regra de negócio que a condiciona. Regras de negócio frequentemente acompanham requisitos funcionais.",null,
 {id:"es-0011",hab:"C"}],

["ES","Requisitos","A técnica de elicitação mais adequada para descobrir como um operador realmente executa uma tarefa, incluindo desvios não documentados do procedimento oficial, é",
["questionário fechado.","observação direta no ambiente de trabalho.","análise do manual de procedimentos.","brainstorming com a gerência.","revisão do contrato de serviço."],1,
"Só a observação revela a diferença entre o processo prescrito e o processo praticado. Questionários e manuais capturam o que se acredita fazer; a gerência frequentemente desconhece os atalhos do operador.",null,
 {id:"es-0012",hab:"C"}],

["ES","Requisitos","Sobre a priorização de requisitos pela técnica MoSCoW, é correto afirmar que a categoria “Could have” designa requisitos",
["obrigatórios para a entrega mínima, sem os quais o produto não tem valor.","importantes, mas cuja ausência não inviabiliza a entrega.","desejáveis, que serão implementados apenas se houver folga.","explicitamente excluídos do escopo do ciclo corrente, por decisão conjunta.","de origem legal ou regulatória, cuja ausência gera sanção ao contratante."],2,
"Must = obrigatório; Should = importante mas contornável; Could = desejável se sobrar tempo; Won't = fora deste ciclo. A confusão comum é entre Should e Could.",null,
 {id:"es-0013",hab:"C"}],

["ES","Requisitos","Considere as afirmações sobre a especificação de requisitos:\nI. Deve ser compreensível por usuários que não sejam da área técnica.\nII. Serve de base contratual entre cliente e fornecedor.\nIII. Deve descrever a arquitetura interna dos módulos.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","III, apenas.","I, II e III."],0,
"A especificação declara O QUE o sistema faz, em linguagem acessível ao cliente, e por isso serve de base contratual. Arquitetura interna pertence ao documento de projeto, não à especificação — se antecipar solução, o documento restringe indevidamente o projetista.",null,
 {id:"es-0014",hab:"J"}],

["ES","Requisitos","Um requisito estabelece que “o sistema deve registrar em log toda alteração de dados pessoais, com identificação do responsável e data-hora”. Além de funcional, esse requisito atende diretamente a uma exigência de",
["desempenho, dado o custo de gravar cada alteração em tempo real.","portabilidade entre diferentes plataformas de banco de dados.","auditabilidade e conformidade legal.","escalabilidade horizontal do módulo responsável pelo registro.","interoperabilidade com sistemas de terceiros que consomem o log."],2,
"Trilha de auditoria é o mecanismo que sustenta a prestação de contas exigida por normas de proteção de dados. É um caso em que o requisito funcional existe para satisfazer uma obrigação regulatória.",null,
 {id:"es-0015",hab:"C"}],

["ES","Requisitos","O principal risco de iniciar a codificação antes de estabilizar os requisitos é",
["a elevação do custo de correção, já que defeitos de requisito descobertos tarde exigem retrabalho em projeto, código e teste.","a impossibilidade de aplicar métodos ágeis, que exigem que todos os requisitos estejam congelados antes da primeira Sprint.","a perda da rastreabilidade entre o código produzido e os testes unitários escritos pela equipe ao longo do desenvolvimento.","o aumento da complexidade ciclomática dos módulos entregues, que passam a concentrar um número maior de desvios condicionais aninhados.","a violação da norma de gerência de configuração, que proíbe alterar itens sem linha de base aprovada."],0,
"É o princípio clássico: o custo de corrigir um defeito cresce por ordens de grandeza conforme ele avança pelas fases. Um erro de requisito descoberto em produção contamina tudo o que foi construído sobre ele.",null,
 {id:"es-0016",hab:"C"}],

/* ---------- modelos de processo (14) ---------- */
["ES","Modelos de processo","O modelo em cascata é considerado inadequado para projetos com requisitos voláteis porque",
["não prever a produção de documentação formal ao final de cada uma das fases previstas no modelo.","exige que cada fase seja concluída e aprovada antes do início da seguinte, encarecendo mudanças tardias.","não permitir a participação do cliente em nenhuma etapa posterior ao levantamento inicial de requisitos.","dispensar a fase de testes formais, já que a verificação ocorre ao final de cada uma das fases anteriores.","só se aplica a sistemas embarcados."],1,
"A sequência rígida é a essência do cascata — e sua fraqueza. Voltar uma fase significa refazer os artefatos aprovados de todas as posteriores. Ele continua adequado quando os requisitos são estáveis e bem compreendidos.",null,
 {id:"es-0017",hab:"C"}],

["ES","Modelos de processo","No modelo incremental, a principal vantagem em relação ao cascata é que",
["a especificação de requisitos passa a ser feita incremento a incremento, no momento de produzir cada um.","o cliente recebe versões operacionais parciais, permitindo realimentação antes da conclusão do sistema.","o custo de manutenção posterior cai, porque cada incremento é validado antes que o seguinte comece.","a arquitetura pode ser postergada, emergindo da soma dos incrementos já entregues ao cliente.","os defeitos se concentram nos incrementos finais, quando a integração entre as partes fica mais densa."],1,
"Entregar valor cedo e obter feedback é o ganho central. Note que o incremental não dispensa arquitetura: incrementos mal planejados sobre arquitetura frágil geram retrabalho estrutural.",null,
 {id:"es-0018",hab:"C"}],

["ES","Modelos de processo","O elemento que distingue o modelo espiral dos demais modelos evolutivos é",
["a entrega contínua de versões em produção ao final de cada uma das voltas do modelo.","a análise de riscos explícita ao final de cada volta, condicionando a continuidade do projeto.","a ausência de documentação formal entre as voltas, o que acelera a passagem de um ciclo ao outro.","o uso obrigatório de orientação a objetos na modelagem de cada ciclo.","a fixação definitiva dos requisitos já na primeira iteração do projeto."],1,
"Boehm construiu o espiral em torno do risco: cada ciclo passa por determinar objetivos, avaliar alternativas, analisar riscos e planejar o ciclo seguinte. Sem a análise de riscos, é apenas um iterativo qualquer.",null,
 {id:"es-0019",hab:"C"}],

["ES","Modelos de processo","No RUP, a fase em que se estabelece a arquitetura executável de referência (baseline arquitetural) e se mitigam os principais riscos técnicos é a de",
["concepção (inception).","elaboração.","construção.","transição.","manutenção."],1,
"A elaboração existe para provar a arquitetura. A concepção define escopo e viabilidade; a construção produz o grosso do código sobre a arquitetura já estabilizada; a transição entrega ao usuário.",null,
 {id:"es-0020",hab:"C"}],

["ES","Modelos de processo","Sobre o RUP, avalie:\nI. É iterativo e incremental.\nII. Cada disciplina ocorre em uma única fase.\nIII. O esforço de cada disciplina varia ao longo das fases.\nÉ correto o que se afirma em",
["I, apenas.","I e III, apenas.","II e III, apenas.","I e II, apenas.","I, II e III."],1,
"O gráfico das “baleias” do RUP mostra exatamente isto: todas as disciplinas atravessam todas as fases, mudando apenas de intensidade. Requisitos, por exemplo, pesa na concepção mas não desaparece na construção.",null,
 {id:"es-0021",hab:"J"}],

["ES","Modelos de processo","O modelo RAD (Rapid Application Development) pressupõe",
["equipes numerosas e requisitos instáveis, revistos a cada nova rodada de entrega.","sistemas modularizáveis, prazos curtos e forte reúso de componentes.","desenvolvimento conduzido sem participação do usuário, que só valida ao final.","aplicação restrita a sistemas de tempo real, com requisitos rígidos de latência.","ciclo único de desenvolvimento, sem iterações nem entregas parciais ao cliente."],1,
"RAD só funciona quando o sistema pode ser fatiado em módulos desenvolvidos em paralelo por equipes distintas, com prazo curto e muito reúso. Em sistemas fortemente acoplados ou com alto risco técnico, ele falha.",null,
 {id:"es-0022",hab:"C"}],

["ES","Modelos de processo","A prototipação evolutiva difere da prototipação descartável porque, na evolutiva,",
["o protótipo é construído em papel, sem qualquer código executável associado.","o protótipo é refinado sucessivamente até se tornar o sistema final.","o usuário não participa da avaliação, que fica a cargo da equipe técnica.","o protótipo é descartado após a validação dos requisitos.","não se produz documentação alguma, já que o protótipo a substitui integralmente."],1,
"Na evolutiva o protótipo vira produto — o que exige qualidade interna desde o início. Na descartável ele serve só para aprender e é jogado fora, o que permite construí-lo de forma tosca e rápida.",null,
 {id:"es-0023",hab:"C"}],

["ES","Modelos de processo","Considere a asserção e a razão:\nI. O modelo em cascata facilita o acompanhamento gerencial do projeto.\nPORQUE\nII. Suas fases produzem marcos documentais bem definidos, que servem de ponto de controle.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"Este é o motivo pelo qual o cascata sobrevive em contratos públicos: marcos documentais dão previsibilidade contratual. A crítica ao modelo é técnica, não gerencial — e a razão explica corretamente a asserção.",null,
 {id:"es-0024",hab:"A"}],

["ES","Modelos de processo","Em um projeto com requisitos bem compreendidos, tecnologia dominada e forte exigência regulatória de documentação por fase, o modelo de processo mais adequado é",
["Scrum, com Sprints de duas semanas e revisão ao fim de cada ciclo.","cascata ou uma de suas variantes com verificação.","XP, com releases semanais e programação em pares desde o início.","Kanban, com fluxo contínuo e limite de trabalho em progresso.","prototipação descartável, seguida da reescrita completa do sistema."],1,
"A escolha do modelo depende do contexto, não da moda. Requisitos estáveis somados a exigência documental favorecem o cascata; não há mérito em forçar agilidade onde o ganho de feedback é irrelevante.",null,
 {id:"es-0025",hab:"C"}],

["ES","Modelos de processo","O conceito de “entrega contínua” (continuous delivery) refere-se à capacidade de",
["implantar automaticamente em produção toda alteração aprovada nos testes, sem revisão humana.","manter o software sempre em estado implantável, com a decisão de implantar sendo de negócio.","gerar builds noturnos sem executar testes.","substituir os testes de aceitação por testes unitários.","dispensar o controle de versão do código, já que cada entrega substitui integralmente a anterior."],1,
"A distinção que costuma cair: entrega contínua garante que o software está SEMPRE pronto para ir a produção; a decisão de implantar é de negócio. Quando essa decisão também é automatizada, tem-se implantação contínua (continuous deployment).",null,
 {id:"es-0026",hab:"C"}],

["ES","Modelos de processo","No contexto de DevOps, a prática de integração contínua consiste em",
["integrar o código de todos os desenvolvedores uma única vez por release, na véspera da entrega ao cliente.","integrar frequentemente ao ramo principal, com build e testes automatizados a cada integração.","manter ramos de longa duração por desenvolvedor, integrando-os apenas na véspera da entrega.","adiar a compilação e a execução dos testes até o encerramento da iteração em andamento.","separar as equipes de desenvolvimento e de operação em ciclos independentes."],1,
"O valor da IC está na frequência: integrar várias vezes ao dia mantém pequeno o conflito de merge e faz o defeito aparecer minutos depois de ter sido introduzido, quando ainda é barato corrigir.",null,
 {id:"es-0027",hab:"C"}],

["ES","Modelos de processo","O principal problema de se manter um ramo de funcionalidade (feature branch) por vários meses é",
["a impossibilidade de gerar tags de release enquanto o ramo permanecer aberto no repositório compartilhado.","o acúmulo de divergência com o ramo principal, tornando a integração final custosa e arriscada.","a perda do histórico de commits do ramo, que é compactado no momento da integração final.","a violação do modelo em cascata, que exige integração apenas ao final da fase de codificação.","a incompatibilidade do ramo com a suíte de testes unitários mantida no principal."],1,
"É o oposto da integração contínua: quanto mais tempo o ramo vive isolado, maior a divergência acumulada e mais dolorosa a integração — o chamado “merge hell”.",null,
 {id:"es-0028",hab:"C"}],

["ES","Modelos de processo","Um processo de software é definido, em essência, como",
["o conjunto de ferramentas de apoio adotadas pela equipe de desenvolvimento.","um arcabouço de atividades, ações e tarefas necessárias à construção de software de qualidade.","a documentação produzida e formalmente aprovada ao longo da execução do projeto pela equipe.","o cronograma de atividades aprovado pelo cliente no início dos trabalhos e revisado a cada fase.","a arquitetura do sistema, com seus componentes, interfaces e decisões estruturais registradas."],1,
"Processo é o arcabouço de atividades — ferramentas e documentos são consequência, não definição. Confundir processo com ferramenta é erro comum: trocar de ferramenta não muda o processo.",null,
 {id:"es-0029",hab:"C"}],

["ES","Modelos de processo","Modelos de processo prescritivos são assim chamados porque",
["proíbem qualquer adaptação ao contexto do projeto, devendo ser seguidos exatamente como foram publicados por seus autores.","prescrevem um conjunto de elementos de processo — atividades, artefatos e pontos de controle — a serem seguidos.","são impostos por norma legal às empresas que prestam serviço de desenvolvimento para a administração pública federal.","dispensam a fase de planejamento, já que as atividades vêm previamente definidas pelo modelo.","aplicam-se apenas a projetos de software livre, cujo processo é público e auditável por terceiros."],1,
"Prescritivo significa que o modelo indica o caminho a seguir, com artefatos e marcos definidos. Isso não impede adaptação (tailoring), que aliás é recomendada.",null,
 {id:"es-0030",hab:"C"}],

/* ---------- testes e V&V (16) ---------- */
["ES","Testes","O teste de caixa-branca distingue-se do teste de caixa-preta porque o primeiro",
["é conduzido a partir da especificação funcional, sem qualquer acesso ao código-fonte do componente.","utiliza o conhecimento da estrutura interna do código para derivar os casos de teste.","deriva os casos de teste da experiência do testador, sem apoio em documento ou em código.","aplica-se somente a sistemas web, onde a interface pode ser inspecionada pelo navegador.","exercita o sistema pela interface do usuário, percorrendo os fluxos que ele disponibiliza."],1,
"Caixa-branca (estrutural) enxerga o código e cobre caminhos, condições e laços. Caixa-preta (funcional) parte só da especificação. As duas são complementares, não excludentes.",null,
 {id:"es-0031",hab:"C"}],

["ES","Testes","Considere o trecho de pseudocódigo. A complexidade ciclomática do fluxo é",
["2.","3.","4.","5.","6."],2,
"Pela fórmula V(G) = número de decisões + 1: há três decisões (as duas condições do se e o enquanto), logo V(G) = 4. Esse número indica quantos caminhos independentes precisam ser cobertos e serve de limite superior para o esforço de teste estrutural.",
"01  leia(a, b)\n02  se (a > 0) entao\n03      se (b > 0) entao\n04          escreva(\"ambos positivos\")\n05      fim-se\n06  fim-se\n07  enquanto (a > b) faca\n08      a <- a - 1\n09  fim-enquanto\n10  escreva(a)",
 {id:"es-0032",hab:"I"}],

["ES","Testes","O teste de regressão tem por objetivo",
["encontrar defeitos ainda não descobertos no código recém-escrito, antes que ele chegue à produção.","verificar se alterações recentes reintroduziram defeitos em funcionalidades que já operavam corretamente.","medir o desempenho do sistema sob carga elevada, identificando o ponto em que o tempo de resposta degrada.","validar a interface com o usuário final.","aferir a conformidade do sistema com as normas de segurança da informação adotadas pela organização."],1,
"Regressão é sobre o que já funcionava: reexecutar a bateria existente após cada mudança. Por isso é o candidato natural à automação — sua característica é a repetição.",null,
 {id:"es-0033",hab:"C"}],

["ES","Testes","A função abaixo deveria aceitar quantidades de 1 a 100, inclusive. Aplicando análise de valor-limite, o caso de teste que revela o defeito é",
["quantidade = 50","quantidade = 100","quantidade = 0","quantidade = 101","quantidade = 1"],1,
"O operador da segunda condição é < em vez de <=, então 100 é indevidamente rejeitado. Só o teste no limite superior revela isso: 50 passa, 0 e 101 já são rejeitados corretamente, e 1 está no limite inferior, que está certo. Defeitos se concentram justamente nas fronteiras, por erro de operador relacional.",
"boolean quantidadeValida(int quantidade) {\n    if (quantidade > 0 && quantidade < 100) {\n        return true;\n    }\n    return false;\n}",
 {id:"es-0034",hab:"I"}],

["ES","Testes","Sobre os níveis de teste, avalie:\nI. O teste de unidade verifica o menor componente testável isoladamente.\nII. O teste de integração verifica a interação entre componentes já testados isoladamente.\nIII. O teste de sistema verifica o software completo contra os requisitos especificados.\nÉ correto o que se afirma em",
["I, apenas.","I e II, apenas.","II e III, apenas.","I e III, apenas.","I, II e III."],4,
"As três definições estão corretas e formam a progressão clássica unidade → integração → sistema → aceitação. O teste de aceitação, que fecha a sequência, é conduzido sob a ótica do cliente.",null,
 {id:"es-0035",hab:"J"}],

["ES","Testes","O teste alfa distingue-se do teste beta porque o alfa é realizado",
["por usuários finais, no ambiente do cliente, sem supervisão.","por usuários, no ambiente do desenvolvedor, com acompanhamento da equipe.","por ferramentas automatizadas, sem participação de usuários reais na execução.","após a entrada em produção, com base nos incidentes efetivamente relatados.","apenas em projetos de software livre, cuja comunidade assume os testes."],1,
"Alfa: ambiente do desenvolvedor, com observação. Beta: ambiente do cliente, uso real, sem supervisão, com relato de problemas. A troca entre os dois é pegadinha frequente.",null,
 {id:"es-0036",hab:"C"}],

["ES","Testes","Um sistema de vendas apresentou lentidão ao ser acessado por dois mil usuários simultâneos na Black Friday. O tipo de teste que deveria ter antecipado esse comportamento é o teste de",
["unidade, aplicado a cada componente de forma isolada dos demais.","carga (desempenho sob volume esperado).","instalação, executado no ambiente definitivo do cliente final.","usabilidade, com usuários reais observados durante a operação.","portabilidade, entre diferentes navegadores e dispositivos."],1,
"Teste de carga submete o sistema ao volume previsto. Levar além do limite para descobrir o ponto de ruptura é teste de estresse — distinção que costuma ser cobrada.",null,
 {id:"es-0037",hab:"C"}],

["ES","Testes","O caso de teste classificar(75) executa todas as linhas da função abaixo que são alcançáveis por ele, mas não atinge cobertura de decisão. O número MÍNIMO de casos de teste adicionais para cobrir todas as decisões nos dois sentidos é",
["nenhum, um caso basta","1","2","3","4"],2,
"São duas decisões (nota >= 90 e nota >= 60). Com 75, a primeira é falsa e a segunda verdadeira. Faltam: a primeira verdadeira (por exemplo 95) e a segunda falsa (por exemplo 40). Logo, dois casos adicionais. Cobertura de comando é mais fraca que a de decisão: executar a linha não garante ter exercitado o desvio nos dois sentidos.",
"01  String classificar(int nota) {\n02      if (nota >= 90) {\n03          return \"A\";\n04      }\n05      if (nota >= 60) {\n06          return \"B\";\n07      }\n08      return \"reprovado\";\n09  }",
 {id:"es-0038",hab:"I"}],

["ES","Testes","Verificação e validação diferem porque a verificação avalia se",
["o produto atende ao uso pretendido; a validação, se está conforme a especificação.","o produto está sendo construído corretamente; a validação, se o produto certo está sendo construído.","o produto apresenta defeitos internos; a validação, se esses defeitos chegam a se manifestar em falhas.","ambas serem sinônimos na norma ISO, que trata verificação e validação como uma única atividade.","a verificação é feita pelo cliente e a validação pela equipe."],1,
"O par clássico de Boehm: verificação = “construindo certo o produto”; validação = “construindo o produto certo”. Um sistema pode passar em toda a verificação e ainda assim ser inútil ao cliente.",null,
 {id:"es-0039",hab:"C"}],

["ES","Testes","Considere as afirmações sobre teste de software:\nI. Testes podem demonstrar a presença de defeitos, mas não sua ausência.\nII. Testar exaustivamente todas as entradas é impraticável na maioria dos sistemas.\nIII. A ausência de defeitos encontrados garante que o software atende às necessidades do usuário.\nÉ correto o que se afirma em",
["I, apenas.","I e II, apenas.","II e III, apenas.","I e III, apenas.","I, II e III."],1,
"I e II são princípios consagrados. III é a falácia da “ausência de erros”: um software pode passar em todos os testes e ainda assim não servir, se os requisitos estiverem errados.",null,
 {id:"es-0040",hab:"J"}],

["ES","Testes","No teste abaixo, a classe GatewayFalso foi criada porque o gateway real de pagamento ainda não está disponível. Esse recurso é chamado de",
["driver, usado no teste de integração ascendente.","stub, usado no teste de integração descendente.","fixture de banco de dados, usada para preparar o estado antes do teste.","teste de carga, que mede o comportamento sob volume elevado de requisições.","análise estática, que examina o código sem executá-lo em nenhum ambiente."],1,
"O objeto substitui um módulo de nível INFERIOR ainda ausente, devolvendo resposta previsível para que o módulo superior possa ser testado: é um stub, típico da integração descendente. Driver é o inverso — simula o CHAMADOR ainda ausente, na integração ascendente. Trocar os dois é o erro mais comum do tema.",
"class GatewayFalso implements Gateway {\n    public Recibo cobrar(double valor) {\n        return new Recibo(\"OK\", valor);   // resposta fixa\n    }\n}\n\n@Test\npublic void finalizaCompraComPagamentoAprovado() {\n    Checkout checkout = new Checkout(new GatewayFalso());\n    assertTrue(checkout.finalizar(150.0));\n}",
 {id:"es-0041",hab:"I"}],

["ES","Testes","Seguindo o ciclo do TDD, um desenvolvedor escreveu primeiro o teste abaixo, que falha porque a classe Carrinho ainda não tem o método desconto(). O passo seguinte correto é",
["refatorar o teste até que ele passe.","escrever o código mínimo que faça o teste passar, e só depois refatorar.","escrever todos os demais testes da classe antes de implementar.","implementar a regra completa de descontos, com todas as faixas previstas.","remover o teste e implementar a funcionalidade primeiro."],1,
"Red-green-refactor: o teste falha (red), escreve-se o mínimo para passar (green), e então melhora-se a estrutura (refactor). Implementar a regra completa de uma vez abandona o ciclo e produz código não coberto por teste — é o erro mais comum de quem está aprendendo TDD.",
"@Test\npublic void aplicaDezPorCentoAcimaDeCem() {\n    Carrinho c = new Carrinho();\n    c.adicionar(new Item(\"livro\", 150.0));\n    assertEquals(15.0, c.desconto(), 0.01);\n}",
 {id:"es-0042",hab:"I"}],

["ES","Testes","Um defeito (defect) difere de uma falha (failure) porque o defeito",
["é a manifestação observável do problema durante a execução, percebida por quem usa o sistema.","é a imperfeição presente no artefato, que pode ou não vir a se manifestar em execução.","é o engano cometido por quem escreveu o artefato, anterior a qualquer execução do programa.","é a interrupção do serviço causada por indisponibilidade da infraestrutura de hardware.","é o desvio entre o resultado obtido e o esperado, registrado no relatório de execução."],1,
"Cadeia causal: engano humano (error) → defeito no artefato (defect/fault) → falha observável na execução (failure). Um defeito em trecho nunca executado jamais produz falha.",null,
 {id:"es-0043",hab:"C"}],

["ES","Testes","O teste de fumaça (smoke test) é aplicado para",
["exercitar exaustivamente todas as regras de negócio implementadas, garantindo a cobertura completa do sistema.","verificar rapidamente se as funções essenciais da build estão operacionais, antes de testes mais profundos.","medir a cobertura estrutural do código alcançada pela suíte de testes automatizados executada na integração.","avaliar a acessibilidade da interface.","validar a documentação do usuário."],1,
"É a triagem: se a build não passa no smoke, não vale gastar tempo com a bateria completa. Por isso costuma rodar automaticamente a cada integração.",null,
 {id:"es-0044",hab:"C"}],

["ES","Testes","Sobre a automação de testes, avalie:\nI. Testes de regressão são bons candidatos por serem repetitivos.\nII. Testes exploratórios dependem de julgamento humano e são pouco automatizáveis.\nIII. Automatizar elimina a necessidade de manutenção dos casos de teste.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, apenas.","I, II e III."],0,
"III é falsa e cara: a suíte automatizada é código e envelhece como código. Suíte sem manutenção acumula testes frágeis e falsos alarmes, até a equipe passar a ignorá-los.",null,
 {id:"es-0045",hab:"J"}],

["ES","Testes","Em um sistema de folha de pagamento, verificar se o cálculo do INSS observa as faixas 0–1.412, 1.412,01–2.666,68 e acima disso é aplicação da técnica de",
["particionamento em classes de equivalência.","teste de estresse, levando o sistema além do volume previsto.","teste de instalação no ambiente definitivo de produção.","análise estática do código-fonte que implementa o cálculo.","inspeção formal do algoritmo conduzida por pares da equipe."],0,
"Cada faixa é uma classe de equivalência: valores dentro dela devem ser tratados igualmente, bastando um representante por classe. Combinando com valor-limite, testam-se também as fronteiras entre faixas.",null,
 {id:"es-0046",hab:"C"}],

/* ---------- qualidade e maturidade (10) ---------- */
["ES","Qualidade","No CMMI por estágios, o nível de maturidade em que os processos são medidos e controlados quantitativamente é o",
["nível 2 — gerenciado.","nível 3 — definido.","nível 4 — quantitativamente gerenciado.","nível 5 — em otimização.","nível 1 — inicial."],2,
"Nível 4 introduz o controle estatístico do processo. O nível 5 usa esses dados para melhoria contínua. Nível 3 padroniza na organização; nível 2 gerencia por projeto.",null,
 {id:"es-0047",hab:"C"}],

["ES","Qualidade","A diferença essencial entre garantia da qualidade (QA) e controle da qualidade (QC) é que a garantia",
["atua sobre o produto acabado, identificando os defeitos antes da entrega ao cliente.","é orientada ao processo, buscando prevenir a ocorrência de defeitos.","ocorre depois da entrega, a partir dos incidentes relatados pelos usuários finais.","é atribuição da equipe de testes, que a executa ao final de cada ciclo de construção.","prescinde de métricas, apoiando-se no julgamento técnico de quem conduz a revisão."],1,
"QA atua no processo, para prevenir; QC atua no produto, para detectar. Testar é QC; definir e auditar o processo de revisão é QA.",null,
 {id:"es-0048",hab:"C"}],

["ES","Qualidade","Uma revisão técnica formal (inspeção de Fagan) caracteriza-se por",
["ser conduzida informalmente pelo autor do artefato.","ter papéis definidos, roteiro de checagem e registro dos defeitos encontrados, sem discutir soluções.","substituir integralmente os testes de sistema, já que os defeitos são identificados antes da execução.","ocorrer somente após a implantação do sistema, quando os defeitos em produção já foram catalogados.","dispensar preparação prévia dos participantes."],1,
"A regra de ouro da inspeção: identifica-se o defeito e registra-se; discutir a solução ali desvia o foco e consome a reunião. Papéis (moderador, leitor, autor, inspetores) e preparação prévia são obrigatórios.",null,
 {id:"es-0049",hab:"C"}],

["ES","Qualidade","O MPS.BR foi concebido principalmente para",
["substituir a ISO/IEC 12207 no território brasileiro, tornando-a inaplicável às empresas nacionais que desenvolvem software.","adequar a melhoria de processo à realidade das micro, pequenas e médias empresas brasileiras, com níveis mais graduais.","certificar profissionais individualmente, atestando por meio de exame a sua competência técnica em engenharia de software.","normatizar as linguagens de programação usadas em contratos com a administração pública federal.","regular a contratação pública de software, definindo preços de referência por ponto de função."],1,
"Seus sete níveis (de G a A) tornam a escalada mais gradual e barata que a do CMMI, o que era a barreira para as empresas menores. Ele é compatível com a ISO/IEC 12207 e 15504, não as substitui.",null,
 {id:"es-0050",hab:"C"}],

["ES","Qualidade","Segundo a ISO/IEC 25010, a característica que mede o grau em que o software pode ser transferido de um ambiente para outro é",
["confiabilidade.","portabilidade.","manutenibilidade.","eficiência de desempenho.","compatibilidade."],1,
"Portabilidade agrega adaptabilidade, capacidade de instalação e substituibilidade. Não confundir com compatibilidade, que trata de coexistência e interoperabilidade com outros sistemas.",null,
 {id:"es-0051",hab:"C"}],

["ES","Qualidade","Considere a asserção e a razão:\nI. Revisões de artefatos devem ocorrer ao longo de todo o desenvolvimento, não apenas ao final.\nPORQUE\nII. O custo de remoção de um defeito cresce à medida que ele permanece sem ser detectado nas fases seguintes.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"A curva de custo de correção é precisamente o argumento econômico que sustenta a revisão precoce e contínua. Nexo causal direto.",null,
 {id:"es-0052",hab:"A"}],

["ES","Qualidade","A métrica “densidade de defeitos” é usualmente expressa como",
["número de defeitos dividido pelo tempo de desenvolvimento.","número de defeitos por mil linhas de código ou por ponto de função.","percentual de casos de teste automatizados em relação ao total previsto.","média de defeitos introduzidos por cada desenvolvedor da equipe do projeto.","número de compilações concluídas com sucesso por dia de desenvolvimento."],1,
"Normalizar pelo tamanho (KLOC ou pontos de função) é o que torna a métrica comparável entre módulos e projetos de portes diferentes.",null,
 {id:"es-0053",hab:"C"}],

["ES","Qualidade","MTBF, MTTR e disponibilidade relacionam-se de modo que a disponibilidade é dada por",
["MTBF − MTTR.","MTBF / (MTBF + MTTR).","MTTR / MTBF.","MTBF × MTTR.","(MTBF + MTTR) / MTBF."],1,
"Disponibilidade é a fração do tempo em que o sistema está operante: tempo médio entre falhas dividido pelo ciclo completo (operação mais reparo). Reduzir o MTTR eleva a disponibilidade tanto quanto aumentar o MTBF.",null,
 {id:"es-0054",hab:"C"}],

["ES","Qualidade","Uma ferramenta de análise estática examina o método abaixo sem executá-lo. O problema que ela apontaria é",
["desempenho insuficiente da consulta ao banco executada dentro do método.","possível dereferência de referência nula, já que buscar() pode devolver null.","violação do padrão de nomenclatura adotado pela linguagem para métodos públicos.","ausência de comentários explicativos que documentem o contrato do método.","uso excessivo de memória pelo objeto Cliente mantido em escopo do método."],1,
"A ferramenta rastreia o fluxo e percebe que buscar() tem retorno anulável, mas o resultado é usado sem verificação. Esse é o valor da análise estática: encontra classes inteiras de defeito (nulo, variável não inicializada, código morto, injeção de SQL) sem executar nada, muito antes e mais barato que o teste dinâmico. Desempenho e uso de memória exigiriam execução.",
"public String nomeDoCliente(int id) {\n    Cliente c = repositorio.buscar(id);   // pode devolver null\n    return c.getNome().toUpperCase();\n}",
 {id:"es-0055",hab:"I"}],

["ES","Qualidade","Dívida técnica pode ser definida como",
["o custo financeiro das licenças de software adquiridas ao longo do projeto.","o custo futuro implícito de retrabalho decorrente de soluções expedientes adotadas no presente.","o atraso acumulado do cronograma em relação à linha de base aprovada no início da execução do projeto.","o número de defeitos ainda abertos no rastreador de problemas ao final de cada iteração.","o passivo trabalhista acumulado pela equipe de desenvolvimento ao longo da execução do projeto."],1,
"A metáfora é financeira: a solução rápida é um empréstimo que cobra juros na forma de manutenção mais cara. Nem toda dívida é ruim — ruim é contraí-la sem consciência nem plano de pagamento.",null,
 {id:"es-0056",hab:"C"}],

/* ---------- gerência de configuração (10) ---------- */
["ES","Gerência de configuração","Uma linha de base (baseline) caracteriza-se por ser uma configuração",
["provisória e alterável livremente por qualquer desenvolvedor da equipe, sem qualquer registro formal da alteração.","formalmente revisada e aprovada, que só pode ser alterada por procedimento formal de controle de mudanças.","gerada automaticamente a cada commit enviado ao repositório central pelos membros da equipe.","exclusiva do código-fonte do sistema, não abrangendo documentos, scripts de implantação nem ambientes.","válida apenas durante a fase de testes, sendo descartada quando o sistema é liberado para produção."],1,
"A baseline é o ponto de referência estável. Depois de estabelecida, mudanças passam pelo comitê de controle de mudanças (CCB) — é isso que a distingue de um simples snapshot.",null,
 {id:"es-0057",hab:"C"}],

["ES","Gerência de configuração","São atividades da gerência de configuração de software:",
["identificação, controle de versões e de alterações, auditoria e relato de situação.","codificação, teste, implantação e manutenção do sistema entregue ao cliente.","elicitação, análise, especificação e validação dos requisitos levantados.","estimativa, cronograma, orçamento e gestão dos riscos identificados.","modelagem, projeto, construção e entrega dos artefatos previstos no plano."],0,
"As quatro atividades canônicas. Confundi-las com as fases do ciclo de vida ou com as atividades de requisitos é o erro típico da questão.",null,
 {id:"es-0058",hab:"C"}],

["ES","Gerência de configuração","Em um sistema de controle de versão, a operação de merge pode gerar conflito quando",
["dois desenvolvedores alteram arquivos diferentes dentro do mesmo diretório.","dois desenvolvedores alteram as mesmas linhas de um mesmo arquivo em ramos distintos.","um desenvolvedor cria um novo ramo a partir da versão mais recente do principal.","um arquivo é renomeado em apenas um dos ramos envolvidos na integração.","o repositório é clonado por um desenvolvedor que ainda não fez alterações."],1,
"O conflito surge quando a ferramenta não consegue decidir automaticamente qual alteração prevalece — mesmas linhas, mudanças divergentes. Alterações em arquivos ou regiões distintas são mescladas sem intervenção.",null,
 {id:"es-0059",hab:"C"}],

["ES","Gerência de configuração","O propósito de uma tag (rótulo) em um repositório é",
["criar uma linha de desenvolvimento paralela a partir do ponto marcado.","marcar de forma imutável um ponto específico do histórico, tipicamente uma versão liberada.","desfazer o último commit enviado, revertendo o repositório ao estado anterior.","compactar o histórico do repositório, reduzindo o espaço ocupado em disco.","bloquear o acesso de escrita dos demais desenvolvedores àquele ponto do histórico do repositório."],1,
"Tag é marcador imutável — serve para reencontrar exatamente o que foi liberado. Criar linha paralela é branch; desfazer é revert ou reset.",null,
 {id:"es-0060",hab:"C"}],

["ES","Gerência de configuração","Um item de configuração é",
["apenas o código-fonte do sistema, único artefato que efetivamente sofre alteração ao longo do ciclo de desenvolvimento.","qualquer artefato do projeto submetido ao controle de configuração, incluindo documentos, scripts e ambientes.","somente os executáveis entregues ao cliente, que precisam ser rastreados e arquivados a cada liberação de nova versão.","o registro de defeitos abertos, mantido pela equipe de testes durante todo o desenvolvimento.","o cronograma do projeto, revisado periodicamente pelo gerente para acompanhar os prazos."],1,
"Escopo amplo: especificações, casos de teste, scripts de build e definições de ambiente também são itens de configuração. Deixar o ambiente fora do controle é causa clássica do “na minha máquina funciona”.",null,
 {id:"es-0061",hab:"C"}],

["ES","Gerência de configuração","A auditoria de configuração funcional tem por objetivo verificar se",
["o item de configuração está fisicamente completo em seus arquivos.","o item de configuração atende aos requisitos funcionais especificados.","o repositório do item está com cópia de segurança atualizada e verificada.","a equipe seguiu o padrão de codificação definido pela organização no artefato.","as licenças dos componentes de terceiros incorporados foram devidamente pagas."],1,
"Auditoria funcional confere conformidade com os requisitos; auditoria física confere se a estrutura documental e os arquivos do item estão completos e consistentes.",null,
 {id:"es-0062",hab:"C"}],

["ES","Gerência de configuração","Sobre estratégias de ramificação, avalie:\nI. Um ramo estável (por exemplo, main) deve conter sempre código apto a ser liberado.\nII. Ramos de correção emergencial (hotfix) partem da versão em produção.\nIII. Quanto mais tempo um ramo permanece isolado, menor o risco de conflito.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, apenas.","I, II e III."],0,
"III é falsa e inverte a realidade: isolamento prolongado aumenta a divergência acumulada e, com ela, o risco e o custo do merge.",null,
 {id:"es-0063",hab:"J"}],

["ES","Gerência de configuração","O relato de situação (status accounting) na gerência de configuração destina-se a",
["avaliar e decidir sobre a aprovação ou a rejeição dos pedidos de mudança recebidos.","registrar e comunicar o estado dos itens de configuração e das mudanças ao longo do tempo.","executar a compilação e a geração dos artefatos entregáveis a cada versão liberada.","definir a estratégia de ramificação adotada pela equipe no repositório de código.","reexecutar a bateria de testes de regressão após cada alteração incorporada."],1,
"É a função de informação da disciplina: quem precisa saber o que mudou, quando, por quê e em que versão está cada item. Aprovar mudanças é papel do CCB.",null,
 {id:"es-0064",hab:"C"}],

["ES","Gerência de configuração","Um pedido de mudança (change request) aprovado pelo comitê de controle de mudanças deve, obrigatoriamente,",
["ser implementado imediatamente por qualquer desenvolvedor disponível, para reduzir o tempo de atendimento.","passar por análise de impacto antes da aprovação, com registro da decisão e atualização dos itens afetados.","gerar automaticamente uma nova linha de base, sem necessidade de revisão posterior dos itens afetados.","dispensar a execução de testes de regressão, uma vez que a mudança já foi aprovada pelo comitê responsável.","ser mantido fora do controle de versão até a conclusão, para que o repositório principal permaneça estável durante a mudança."],1,
"Análise de impacto antes, rastreabilidade depois: sem saber o que a mudança afeta, não há como estimar custo nem selecionar a regressão a reexecutar.",null,
 {id:"es-0065",hab:"C"}],

["ES","Gerência de configuração","O versionamento semântico (MAJOR.MINOR.PATCH) prevê que se incremente o número MAJOR quando",
["forem corrigidos defeitos sem alterar a interface.","forem adicionadas funcionalidades compatíveis com versões anteriores.","houver alteração incompatível com versões anteriores.","o build for reexecutado.","a documentação for atualizada."],2,
"MAJOR sinaliza quebra de compatibilidade; MINOR, funcionalidade nova compatível; PATCH, correção compatível. É contrato com quem consome a biblioteca.",null,
 {id:"es-0066",hab:"C"}],

/* ---------- manutenção e evolução (8) ---------- */
["ES","Manutenção","Uma alteração no sistema de folha de pagamento motivada por mudança na legislação tributária classifica-se como manutenção",
["corretiva.","adaptativa.","perfectiva.","preventiva.","emergencial."],1,
"Adaptativa é a resposta a mudança no ambiente externo — legislação, sistema operacional, versão de banco. Não há defeito a corrigir, o que descarta a corretiva: esta é a pegadinha mais frequente do tema.",null,
 {id:"es-0067",hab:"C"}],

["ES","Manutenção","A manutenção preventiva (ou de reengenharia) tem por objetivo",
["corrigir os defeitos relatados pelos usuários após a entrada em produção.","melhorar a manutenibilidade futura do software, sem alterar seu comportamento externo.","acrescentar as funcionalidades que o cliente solicitou depois da entrega.","adaptar o sistema a uma nova versão do hardware ou do sistema operacional.","reduzir o tempo de resposta observado nas operações mais utilizadas."],1,
"É o investimento em manutenibilidade — refatorar, documentar, reestruturar. O comportamento externo permanece idêntico, o que a torna difícil de justificar perante o cliente e, por isso, frequentemente adiada.",null,
 {id:"es-0068",hab:"C"}],

["ES","Manutenção","Segundo estudos clássicos de engenharia de software, a maior parcela do custo total do ciclo de vida de um sistema concentra-se",
["no levantamento de requisitos.","na codificação inicial.","na manutenção após a entrega.","nos testes de aceitação.","na implantação."],2,
"Manutenção costuma responder por 60% a 80% do custo total. Daí decorre que investir em manutenibilidade durante a construção é decisão econômica, não preciosismo técnico.",null,
 {id:"es-0069",hab:"C"}],

["ES","Manutenção","Reengenharia de software difere de engenharia reversa porque a reengenharia",
["limita-se a extrair modelos a partir do código existente.","envolve a reconstrução do sistema a partir do entendimento obtido, produzindo uma nova implementação.","aplicar-se somente a sistemas escritos em linguagens orientadas a objetos, e não a sistemas procedurais.","dispensar o entendimento do sistema legado, partindo diretamente para a construção do substituto.","ser sinônimo de refatoração, diferindo apenas na escala do trecho de código que é reestruturado."],1,
"Engenharia reversa é entender e documentar o que existe; reengenharia usa esse entendimento para reconstruir. Refatorar é mudar estrutura interna preservando comportamento, em escala menor.",null,
 {id:"es-0070",hab:"C"}],

["ES","Manutenção","As leis de Lehman sobre evolução de software afirmam, entre outras coisas, que",
["sistemas em uso tendem a permanecer estáveis, sem necessidade de alteração após a entrega.","um sistema em uso precisa evoluir continuamente, sob pena de se tornar progressivamente menos útil.","a complexidade de um sistema diminui com o tempo.","a manutenção reduz progressivamente o tamanho do código, à medida que trechos obsoletos são removidos.","a qualidade melhora automaticamente a cada versão."],1,
"Lei da mudança contínua: o ambiente muda, e o software que não acompanha perde utilidade. A lei da complexidade crescente completa o quadro — a complexidade aumenta, salvo trabalho deliberado para reduzi-la.",null,
 {id:"es-0071",hab:"C"}],

["ES","Manutenção","Um sistema legado escrito em COBOL, sem documentação e sem testes automatizados, precisa incorporar uma nova regra fiscal. A estratégia de menor risco imediato é",
["reescrever integralmente o sistema em linguagem moderna antes de qualquer alteração.","envolver o trecho afetado com testes de caracterização e então aplicar a alteração pontual.","alterar diretamente o código, sem testes, para ganhar tempo.","descontinuar o sistema legado e migrar toda a operação para uma solução pronta de mercado.","migrar o banco de dados antes de tratar a regra."],1,
"Testes de caracterização registram o comportamento atual (ainda que estranho) e criam a rede de segurança que permite mexer no código. Reescrever tudo antes de uma mudança urgente é trocar risco conhecido por risco maior.",null,
 {id:"es-0072",hab:"C"}],

["ES","Manutenção","O padrão “estrangulamento” (strangler fig) na modernização de sistemas consiste em",
["substituir o sistema legado de uma só vez, em janela única de indisponibilidade, com o novo sistema já integralmente pronto.","construir gradualmente o novo sistema ao redor do legado, redirecionando funcionalidades aos poucos até desativá-lo.","congelar o legado e proibir qualquer alteração nele, mantendo-o em operação até o encerramento natural de sua vida útil.","duplicar o legado em outro servidor, dividindo a carga entre as duas instâncias em produção.","reescrever apenas a camada de banco de dados, preservando intactas a lógica e a interface."],1,
"A migração incremental reduz o risco: cada fatia migrada é validada em produção antes da seguinte, e há caminho de volta. A substituição big bang concentra todo o risco em um único evento.",null,
 {id:"es-0073",hab:"C"}],

["ES","Manutenção","Manutenção perfectiva (ou evolutiva) é aquela que",
["corrige falhas encontradas em produção após o relato dos usuários que utilizam o sistema.","atende a solicitações de novas funcionalidades ou de melhoria de desempenho pedidas pelo usuário.","adapta o software a uma nova versão do sistema operacional ou do banco de dados utilizado em produção.","reestrutura internamente o código sem alterar em nada o comportamento observável.","recupera o sistema após um desastre, restaurando os dados a partir da última cópia de segurança."],1,
"Perfectiva responde a pedido do usuário por mais função ou melhor desempenho. Adaptar a novo ambiente é adaptativa; reestruturar sem mudar comportamento é preventiva.",null,
 {id:"es-0074",hab:"C"}],

/* ---------- métodos ágeis (10) ---------- */
["ES","Ágil","No Scrum, o responsável por maximizar o valor do produto e por ordenar o Product Backlog é o",
["Scrum Master.","Product Owner.","gerente de projeto.","arquiteto de software.","time de desenvolvimento."],1,
"O PO é o dono do “o quê” e do “por quê”. O Scrum Master remove impedimentos e zela pelo processo; o time decide o “como”. Não há gerente de projeto no framework.",null,
 {id:"es-0075",hab:"C"}],

["ES","Ágil","A Sprint Retrospective tem por finalidade",
["apresentar o incremento construído aos interessados e recolher sua realimentação.","inspecionar o processo de trabalho da equipe e definir melhorias para a próxima Sprint.","planejar as tarefas e selecionar os itens que comporão a Sprint seguinte.","refinar e reordenar os itens do Product Backlog junto ao Product Owner.","avaliar o desempenho individual de cada membro para fins de acompanhamento."],1,
"Review olha o PRODUTO com os stakeholders; Retrospective olha o PROCESSO, apenas com o time. Trocar as duas é o erro clássico. Avaliação individual não pertence a nenhuma delas.",null,
 {id:"es-0076",hab:"C"}],

["ES","Ágil","Sobre o Kanban, avalie:\nI. Limita explicitamente o trabalho em progresso (WIP).\nII. Prescreve iterações de duração fixa.\nIII. Torna o fluxo de trabalho visível em um quadro com colunas por etapa.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, apenas.","I, II e III."],1,
"Kanban é fluxo contínuo, sem timebox obrigatório — daí II ser falsa. Seus pilares são visualizar o fluxo, limitar o WIP e gerenciar o tempo de atravessamento.",null,
 {id:"es-0077",hab:"J"}],

["ES","Ágil","A prática de programação em pares, do XP, sustenta-se na ideia de que",
["dois desenvolvedores no mesmo teclado produzem o dobro de linhas de código.","a revisão contínua durante a escrita reduz defeitos e dissemina conhecimento na equipe.","um dos desenvolvedores apenas observa, sem interferir no que está sendo escrito.","a revisão em par dispensa qualquer outra forma de revisão ou de teste posterior.","a integração contínua se torna desnecessária, pois o código já nasce revisado."],1,
"O par é inspeção em tempo real, mais difusão de conhecimento e menor dependência de indivíduos. O ganho não é de volume de código — é de qualidade e de redução do fator caminhão.",null,
 {id:"es-0078",hab:"C"}],

["ES","Ágil","No Manifesto Ágil, a formulação correta de um dos valores é",
["processos e ferramentas acima de indivíduos e interações.","software em funcionamento acima de documentação abrangente.","negociação de contratos acima de colaboração com o cliente.","seguir um plano acima de responder a mudanças.","documentação abrangente acima de software em funcionamento."],1,
"O Manifesto valoriza mais os itens à esquerda, sem anular os da direita. Documentar continua necessário; o que se rejeita é documentar em vez de entregar software que funcione.",null,
 {id:"es-0079",hab:"C"}],

["ES","Ágil","O termo “Definition of Done” refere-se a",
["um critério de aceitação escrito pelo Product Owner para uma história de usuário específica, válido apenas para aquele item do backlog.","um acordo compartilhado pela equipe sobre as condições que todo incremento deve satisfazer para ser considerado concluído.","a estimativa em pontos que o time atribui a cada item durante o planejamento, usada depois para calcular a velocidade da equipe.","a data-limite da Sprint, a partir da qual nenhum item novo pode ser incorporado ao trabalho.","o contrato assinado com o cliente, que define as entregas previstas para o final do projeto."],1,
"DoD é transversal e vale para todo item; critério de aceitação é específico de uma história. Sem DoD explícita, “pronto” significa coisas diferentes para cada membro da equipe.",null,
 {id:"es-0080",hab:"C"}],

["ES","Ágil","Em uma Sprint de duas semanas, o time percebe no quinto dia que não conseguirá concluir todos os itens. A conduta correta segundo o Scrum é",
["estender a duração da Sprint até concluir os itens.","conversar com o Product Owner para renegociar o escopo da Sprint.","cancelar a Sprint imediatamente.","reduzir a Definition of Done para caber no prazo.","trabalhar horas extras até o fim da Sprint."],1,
"O timebox é fixo; o escopo é a variável. Renegociar com o PO é o mecanismo previsto. Cancelar a Sprint é prerrogativa do PO e só se o objetivo se tornar obsoleto; afrouxar a DoD apenas transfere o problema.",null,
 {id:"es-0081",hab:"C"}],

["ES","Ágil","Velocidade (velocity), no Scrum, deve ser entendida como",
["uma métrica de produtividade comparável entre equipes diferentes da mesma organização ao longo do tempo.","uma referência histórica da própria equipe, útil para planejar a capacidade das próximas Sprints.","um indicador de desempenho individual de cada membro, usado nas avaliações periódicas.","o número de horas efetivamente trabalhadas pela equipe ao longo de cada Sprint.","a quantidade de defeitos corrigidos pela equipe durante a Sprint, medida ao final de cada ciclo."],1,
"Velocity só faz sentido dentro de uma mesma equipe, porque a escala de pontos é relativa e própria dela. Usá-la para comparar equipes ou pressionar indivíduos corrompe a estimativa.",null,
 {id:"es-0082",hab:"C"}],

["ES","Ágil","Considere a asserção e a razão:\nI. Métodos ágeis privilegiam entregas frequentes de incrementos funcionais.\nPORQUE\nII. A realimentação obtida com software em uso reduz o risco de construir o produto errado.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"A entrega frequente existe justamente para encurtar o ciclo de realimentação e reduzir o risco de mercado. Nexo causal direto entre as duas asserções.",null,
 {id:"es-0083",hab:"A"}],

["ES","Ágil","A transformação aplicada entre as versões abaixo é corretamente classificada como",
["correção de defeito, pois o resultado devolvido pelo método passou a ser outro.","refatoração, pois melhora a estrutura interna preservando o comportamento externo.","manutenção adaptativa, pois o código foi ajustado a uma nova versão da linguagem.","otimização de desempenho, pois a nova versão executa em menos tempo.","reengenharia, pois o módulo foi reconstruído a partir do entendimento do legado."],1,
"As duas versões devolvem exatamente o mesmo valor para qualquer entrada — o que mudou foi a legibilidade e a expressividade. Essa é a definição precisa de refatoração: comportamento externo preservado, estrutura interna melhorada. E é justamente por isso que refatorar exige uma suíte de testes: ela é a prova de que nada mudou.",
"// antes\ndouble calcular(List<Item> itens) {\n    double t = 0;\n    for (int i = 0; i < itens.size(); i++) {\n        if (itens.get(i).getTipo() == 1) {\n            t = t + itens.get(i).getValor() * 0.9;\n        } else {\n            t = t + itens.get(i).getValor();\n        }\n    }\n    return t;\n}\n\n// depois\ndouble calcular(List<Item> itens) {\n    return itens.stream()\n                .mapToDouble(this::valorComDesconto)\n                .sum();\n}\n\ndouble valorComDesconto(Item item) {\n    return item.ehPromocional() ? item.getValor() * 0.9 : item.getValor();\n}",
 {id:"es-0084",hab:"I"}],

/* ---------- arquitetura de processo e apoio (8) ---------- */
["ES","Estimativas","A técnica de Análise de Pontos de Função estima o tamanho do software a partir",
["do número de linhas de código previstas para a implementação de cada módulo.","das funcionalidades entregues ao usuário, independentemente da tecnologia empregada.","do número de desenvolvedores alocados e da produtividade média da equipe.","da duração estimada em meses, convertida em esforço pela produtividade histórica.","do número de tabelas e colunas previstas no modelo de dados da aplicação."],1,
"A independência de tecnologia é a virtude central: permite comparar e contratar sem depender da linguagem. Estimar por linhas de código penaliza justamente as soluções mais concisas.",null,
 {id:"es-0085",hab:"C"}],

["ES","Estimativas","No Planning Poker, o uso de uma sequência do tipo Fibonacci para as estimativas justifica-se porque",
["a sequência de Fibonacci é formada por números primos, o que evita ambiguidade.","o espaçamento crescente reflete a maior incerteza inerente a itens maiores.","o espaçamento entre os valores evita empates na votação dos participantes.","a sequência é prescrita pelo Guia do Scrum para estimativa de itens do backlog.","os valores permitem converter pontos em horas por uma razão fixa conhecida."],1,
"Ninguém distingue com segurança um item de 20 de um de 21 pontos. O espaçamento crescente reconhece que a precisão cai à medida que o item cresce, evitando falsa exatidão.",null,
 {id:"es-0086",hab:"C"}],

["ES","Riscos","Na gestão de riscos de software, a exposição ao risco é calculada por",
["probabilidade × impacto.","probabilidade + impacto.","impacto / probabilidade.","custo × prazo.","impacto − probabilidade."],0,
"Exposição = probabilidade × impacto. É o produto que permite priorizar: risco improvável mas catastrófico pode superar risco provável de impacto pequeno.",null,
 {id:"es-0087",hab:"C"}],

["ES","Riscos","A estratégia de resposta a risco que consiste em contratar seguro ou terceirizar a atividade para um fornecedor especializado é a de",
["mitigação.","transferência.","aceitação.","eliminação.","escalonamento."],1,
"Transferir move o impacto para terceiro sem eliminar o risco. Mitigar reduz probabilidade ou impacto; aceitar é conviver conscientemente; eliminar remove a causa, em geral mudando o escopo.",null,
 {id:"es-0088",hab:"C"}],

["ES","Reúso","Uma linha de produtos de software (software product line) baseia-se em",
["desenvolver cada produto de forma independente, a partir dos requisitos de cada cliente.","explorar a variabilidade sobre uma plataforma comum de componentes compartilhados.","padronizar a interface de todos os produtos, mantendo implementações internas distintas.","distribuir os produtos sob licença livre, permitindo que o cliente adapte o que precisar.","manter uma equipe dedicada por cliente, responsável por todo o ciclo de vida do produto."],1,
"O núcleo comum é reusado; a variabilidade é gerenciada por pontos de extensão previstos. O ganho aparece a partir de certo número de produtos, pois a plataforma tem custo inicial alto.",null,
 {id:"es-0089",hab:"C"}],

["ES","Documentação","O documento de arquitetura de software (visão 4+1) organiza-se em visões porque",
["cada visão é destinada a um cliente diferente, conforme o que foi acordado no contrato firmado com cada um dos contratantes.","diferentes interessados têm preocupações distintas, mais bem atendidas por representações separadas e complementares.","a UML determina que todo documento de arquitetura contenha exatamente cinco diagramas distintos, um para cada visão prevista.","a separação em visões reduz o número de páginas do documento, facilitando sua impressão e leitura.","cada visão substitui a anterior à medida que o projeto avança, mantendo só a mais recente válida."],1,
"Visões lógica, de processo, de desenvolvimento, física e de casos de uso atendem preocupações distintas (funcionalidade, concorrência, organização do código, implantação). São complementares, não alternativas.",null,
 {id:"es-0090",hab:"C"}],

["ES","Processo","A prática de definir um processo padrão organizacional e adaptá-lo a cada projeto é conhecida como",
["institucionalização.","tailoring (adaptação).","benchmarking.","auditoria.","certificação."],1,
"Tailoring é o que impede que o processo padrão vire burocracia inútil em projetos pequenos ou excessivamente frouxo em projetos críticos. Modelos de maturidade preveem explicitamente essa adaptação.",null,
 {id:"es-0091",hab:"C"}],

["ES","Processo","A principal função de um post-mortem (lição aprendida) ao término de um projeto é",
["identificar os responsáveis pelos erros cometidos ao longo da execução.","registrar o que funcionou e o que não funcionou, alimentando a melhoria do processo organizacional.","calcular o bônus da equipe com base nos resultados obtidos no projeto.","encerrar formalmente o contrato firmado com o cliente e liberar a equipe para outro projeto.","arquivar o código-fonte e a documentação em repositório definitivo, encerrando formalmente o projeto."],1,
"O objetivo é aprendizado organizacional, não atribuição de culpa — aliás, ambiente que busca culpados destrói a franqueza necessária ao registro útil.",null,
 {id:"es-0092",hab:"C"}],
["ES","Manutenção","Uma equipe corrige um defeito alterando três trechos de código semelhantes, espalhados por módulos diferentes, que implementavam a mesma regra. Além da correção, a ação indicada é",
["registrar em documento os três pontos alterados, para que futuras correções sejam aplicadas nos mesmos locais.","extrair a regra duplicada para um único ponto, eliminando a chance de correções futuras alcançarem apenas parte deles.","manter a duplicação, que reduz o acoplamento entre os módulos ao evitar dependência de um componente comum.","adicionar comentários nos três trechos, alertando que qualquer alteração precisa ser replicada nos demais locais.","criar teste automatizado para cada um dos três trechos, verificando que o comportamento permanece idêntico."],1,
"Documento e comentário dependem de alguém lembrar de lê-los, e o próprio defeito mostra que a duplicação já cobrou seu preço. Testes ajudam, mas o problema estrutural continua ali esperando a próxima correção parcial.",null,
 {id:"es-0093",hab:"C"}],

["ES","Manutenção","Segundo a classificação usual dos tipos de manutenção de software, adequar um sistema a uma mudança na legislação tributária caracteriza manutenção",
["corretiva, por eliminar do sistema um comportamento que deixou de estar em conformidade com a norma vigente.","adaptativa, por ajustar o software a uma mudança ocorrida no ambiente externo em que ele opera.","perfectiva, uma vez que aprimora o resultado entregue ao usuário sem alterar as funcionalidades já existentes.","preventiva, pois evita que o sistema apresente falhas de conformidade em fiscalizações futuras da autoridade.","emergencial, categoria aplicável a qualquer alteração motivada por exigência legal com prazo definido."],1,
"A distinção é a origem da mudança: o software não tinha defeito, o mundo em volta mudou. Corretiva é para defeito preexistente, perfectiva para melhoria pedida, preventiva para risco antecipado pela equipe.",null,
 {id:"es-0094",hab:"C"}],

]);
