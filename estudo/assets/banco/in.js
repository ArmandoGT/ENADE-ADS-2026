/* Banco IA — Sistemas operacionais, redes e sistemas distribuídos (25 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- sistemas operacionais (8) ---------- */
["IN","Sistemas operacionais","A multiprogramação permite que",
["vários processos permaneçam na memória, alternando o uso da CPU e aproveitando os períodos de espera por E/S.","vários processadores executem simultaneamente o mesmo processo, dividindo entre si as instruções do programa.","um único processo utilize toda a memória disponível.","o sistema operacional opere sem qualquer sistema de arquivos, mantendo dados apenas na memória volátil da máquina.","todos os processos compartilhem por padrão o mesmo espaço de endereçamento, o que agiliza a troca de dados."],0,
"A ideia central é aproveitar o tempo ocioso da CPU durante operações de entrada e saída. Com um processador só, há pseudoparalelismo — a alternância é rápida demais para ser percebida.",null,
 {id:"in-0001",hab:"C"}],

["IN","Sistemas operacionais","O escalonador de processos do tipo round-robin caracteriza-se por",
["executar sempre o processo de maior prioridade até que ele conclua ou bloqueie.","executar primeiro o processo de menor tempo estimado, reduzindo a espera média.","atribuir a cada processo uma fatia de tempo (quantum), alternando ciclicamente entre eles.","conceder a CPU sem preempção, devolvendo-a apenas quando o processo a libera.","distribuir os processos entre vários processadores, um para cada núcleo disponível."],2,
"Round-robin é preemptivo e equitativo. Quantum muito curto aumenta a sobrecarga de troca de contexto; muito longo aproxima o comportamento do FIFO.",null,
 {id:"in-0002",hab:"C"}],

["IN","Sistemas operacionais","As duas threads abaixo podem entrar em impasse. A forma mais simples de eliminar esse risco é",
["remover a sincronização dos dois métodos, eliminando a disputa pelos objetos de bloqueio.","executar as duas threads em processadores diferentes, o que elimina a disputa pelos recursos.","elevar a prioridade da primeira thread no escalonador do sistema operacional.","fazer as duas threads adquirirem os bloqueios sempre na mesma ordem, quebrando a espera circular.","substituir os objetos de bloqueio por variáveis inteiras controladas diretamente pelo próprio programa."],3,
"Se a thread 1 obtém A e espera B enquanto a thread 2 obtém B e espera A, forma-se a espera circular. Impor uma ordem global de aquisição quebra essa condição — e basta quebrar UMA das quatro condições de Coffman (exclusão mútua, posse e espera, ausência de preempção, espera circular) para prevenir o impasse. Remover a sincronização criaria condição de corrida.",
"// thread 1\nsynchronized (recursoA) {\n    synchronized (recursoB) {\n        transferir();\n    }\n}\n\n// thread 2\nsynchronized (recursoB) {\n    synchronized (recursoA) {\n        transferir();\n    }\n}",
 {id:"in-0003",hab:"I"}],

["IN","Sistemas operacionais","A memória virtual permite que",
["o sistema opere sem qualquer memória RAM instalada, usando o disco como memória principal.","programas maiores que a memória física sejam executados, com páginas transferidas entre memória e disco.","todos os processos compartilharem o mesmo endereço físico de memória, o que reduz o consumo total do sistema.","o disco substitua integralmente a memória principal, dispensando módulos de RAM na configuração.","o processador execute instruções mais rapidamente, por acessar diretamente as páginas gravadas em disco."],1,
"Paginação sob demanda dá a cada processo um espaço de endereçamento próprio e maior que a memória física. Excesso de trocas de página leva ao thrashing, com queda severa de desempenho.",null,
 {id:"in-0004",hab:"C"}],

["IN","Sistemas operacionais","A proteção de memória entre processos é garantida principalmente",
["pelo compilador, que verifica em tempo de compilação se cada acesso a vetor ou ponteiro respeita os limites declarados no código.","pelo sistema de arquivos, que controla as permissões de leitura e escrita atribuídas a cada processo em execução na máquina.","pela unidade de gerência de memória (MMU), que traduz endereços e impede o acesso fora do espaço do processo.","pelo antivírus residente, que monitora tentativas de acesso indevido à memória de outros programas.","pelo escalonador, que impede que dois processos ocupem simultaneamente a mesma região de memória."],2,
"O isolamento é imposto por hardware: a MMU traduz o endereço lógico e verifica a permissão, gerando falha de proteção caso um processo tente acessar área alheia.",null,
 {id:"in-0005",hab:"C"}],

["IN","Sistemas operacionais","A diferença entre processo e thread é que threads",
["possuem espaços de endereçamento independentes entre si, isolados pelo sistema operacional por meio da MMU.","serem gerenciadas exclusivamente pelo hardware, sem qualquer participação do sistema operacional.","não poderem executar em paralelo, mesmo em máquinas equipadas com vários núcleos de processamento.","compartilham o espaço de endereçamento do processo ao qual pertencem, tendo pilha e contexto próprios.","substituírem completamente os processos nos sistemas operacionais modernos, que já não os utilizam."],3,
"Compartilhar memória torna a comunicação barata e a troca de contexto mais leve — e é também o que exige sincronização, sob pena de condição de corrida.",null,
 {id:"in-0006",hab:"C"}],

["IN","Sistemas operacionais","Duas threads executam simultaneamente o método abaixo, cada uma chamando-o 1.000 vezes sobre o mesmo objeto. O saldo final",
["será 2.000, porque a atribuição a uma variável de instância é operação atômica na especificação da linguagem.","pode ser maior que 2.000, porque uma thread pode ler um valor já incrementado pela outra e contá-lo duas vezes.","pode ser menor que 2.000, porque a linha 02 não é atômica e as threads podem sobrescrever a leitura uma da outra.","será 1.000, pois a segunda thread encontra o objeto em uso e descarta a própria execução do método.","causará erro de compilação, porque métodos acessados por várias threads exigem a palavra synchronized."],2,
"saldo = saldo + 1 são três operações: ler, somar, gravar. Se a segunda thread lê antes de a primeira gravar, um dos incrementos se perde. O resultado passa a depender do escalonamento — daí a natureza intermitente desses defeitos e a dificuldade de reproduzi-los. A correção é exclusão mútua na região crítica.",
"01  public void depositar() {\n02      saldo = saldo + 1;\n03  }",
 {id:"in-0007",hab:"I"}],

["IN","Virtualização","Um contêiner difere de uma máquina virtual porque o contêiner",
["virtualiza o hardware por completo, inclusive o núcleo do sistema operacional convidado.","não isolar os processos entre si, deixando visível a árvore completa do sistema hospedeiro.","exigir um hipervisor de tipo 1 instalado diretamente sobre o hardware da máquina.","não permitir replicação, já que cada instância fica presa à máquina física em que foi criada.","compartilha o núcleo do sistema operacional hospedeiro, isolando apenas o espaço de usuário."],4,
"Por compartilhar o núcleo, o contêiner inicia em segundos e consome menos recursos. Em contrapartida, não permite executar um sistema operacional de núcleo diferente do hospedeiro.",null,
 {id:"in-0008",hab:"C"}],

/* ---------- redes (8) ---------- */
["IN","Redes","No modelo OSI, a camada responsável pelo roteamento de pacotes entre redes distintas é a",
["camada física.","camada de rede.","camada de enlace.","camada de transporte.","camada de aplicação."],1,
"Camada 3 (rede) é onde atuam o IP e os roteadores. A camada de enlace entrega dentro do mesmo segmento; a de transporte cuida da comunicação fim a fim entre processos.",null,
 {id:"in-0009",hab:"C"}],

["IN","Redes","A principal diferença entre TCP e UDP é que o TCP",
["é mais rápido que o UDP em qualquer cenário, porque dispensa a verificação de erros nos pacotes que transmite pela rede.","é orientado a conexão, garantindo entrega ordenada e confiável por meio de confirmações e retransmissões.","opera na camada de rede do modelo OSI, sendo o responsável pelo roteamento dos pacotes entre redes fisicamente distintas.","não utiliza números de porta, identificando as aplicações apenas pelo endereço IP de destino.","é usado apenas em redes locais, onde a latência baixa dispensa mecanismos de retransmissão."],1,
"TCP entrega confiabilidade ao custo de latência e sobrecarga. UDP é sem conexão e sem garantia, adequado a streaming, jogos e DNS, onde perder um pacote é melhor que esperar por ele.",null,
 {id:"in-0010",hab:"C"}],

["IN","Redes","Um host com endereço 192.168.10.37 e máscara 255.255.255.0 pertence à rede",
["192.168.0.0","192.0.0.0","192.168.10.37","192.168.10.0","255.255.255.0"],3,
"A máscara /24 fixa os três primeiros octetos como identificador de rede e deixa o último para os hosts. Logo, a rede é 192.168.10.0 e o intervalo utilizável vai de .1 a .254.",null,
 {id:"in-0011",hab:"C"}],

["IN","Redes","Dois computadores configurados como 192.168.1.10/24 e 192.168.2.20/24 não conseguem se comunicar diretamente porque",
["os dois endereços IP são idênticos entre si, o que provoca conflito de endereçamento na rede.","a máscara de sub-rede está incorretamente configurada em ambas as estações.","estão em redes lógicas diferentes, sendo necessário um roteador ou gateway para interligá-las.","o protocolo TCP foi desativado em pelo menos uma das duas estações envolvidas na comunicação.","192.168 ser uma faixa reservada para uso interno, que não pode ser roteada entre sub-redes."],2,
"Com máscara /24, .1.x e .2.x são redes distintas. O tráfego entre elas precisa passar por um roteador — e cada host precisa ter o gateway padrão corretamente configurado.",null,
 {id:"in-0012",hab:"C"}],

["IN","Redes","O protocolo DNS tem como função principal",
["atribuir dinamicamente endereços IP aos hosts que ingressam na rede local.","rotear pacotes entre sistemas autônomos distintos, escolhendo o melhor caminho entre as redes.","criptografar o tráfego trocado entre cliente e servidor antes que ele seja encaminhado pela rede pública.","traduzir nomes de domínio em endereços IP, operando como banco de dados distribuído e hierárquico.","controlar o congestionamento da rede, ajustando a taxa de envio conforme a capacidade disponível."],3,
"Atribuir IP dinamicamente é DHCP — confusão frequente. O DNS é hierárquico (raiz, TLD, autoritativo) e usa cache intensivo para reduzir latência e carga.",null,
 {id:"in-0013",hab:"C"}],

["IN","Redes","A substituição de um hub por um switch em uma rede local melhora o desempenho porque o switch",
["encaminha o quadro apenas à porta de destino, segmentando os domínios de colisão.","amplifica o sinal elétrico recebido, estendendo o alcance físico da rede local.","opera na camada de rede, roteando os pacotes conforme o endereço IP de destino.","dispensa o uso de endereços MAC, identificando as estações pela porta física.","eleva a velocidade nominal do cabeamento instalado entre as estações da rede."],0,
"O hub repete o sinal para todas as portas, mantendo um único domínio de colisão. O switch aprende os endereços MAC e comuta ponto a ponto, dando a cada porta seu próprio domínio.",null,
 {id:"in-0014",hab:"C"}],

["IN","Redes","O protocolo HTTPS acrescenta ao HTTP",
["uma camada de segurança (TLS) que provê confidencialidade, integridade e autenticação do servidor.","a compressão dos dados transmitidos, o que reduz o consumo de banda na conexão.","o suporte à transferência de arquivos maiores, por meio da fragmentação automática do conteúdo.","o roteamento dinâmico das requisições, escolhendo o caminho mais curto até o servidor de destino.","o balanceamento automático de carga entre os servidores que respondem pelo mesmo endereço de domínio."],0,
"TLS cifra o tráfego, verifica integridade e autentica o servidor pelo certificado digital. Não garante, por si só, que a aplicação seja segura — apenas o canal.",null,
 {id:"in-0015",hab:"C"}],

["IN","Redes","O endereço IPv4 192.168.0.0/16 pertence a uma faixa",
["pública e roteável na internet, atribuída por autoridade regional de registro.","de broadcast global, que atinge todos os hosts da rede local.","reservada para tráfego multicast, destinado a grupos de receptores.","de loopback, usada pelo host para comunicar-se consigo mesmo.","privada, não roteável na internet pública."],4,
"As faixas privadas da RFC 1918 são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Para acessar a internet, precisam de tradução de endereços (NAT).",null,
 {id:"in-0016",hab:"C"}],

/* ---------- sistemas distribuídos e nuvem (6) ---------- */
["IN","Sistemas distribuídos","A transparência de localização, em um sistema distribuído, significa que",
["o usuário sabe exatamente em qual servidor o recurso está armazenado.","todos os recursos ficam concentrados em um único servidor central.","o usuário acessa o recurso sem precisar saber onde ele está fisicamente armazenado.","o sistema não replica dados, mantendo cópia única de cada recurso.","a topologia da rede permanece invisível também ao administrador."],2,
"Transparência é esconder a distribuição. Além da de localização, há a de replicação, de falha, de concorrência e de migração — cada uma ocultando um aspecto da complexidade.",null,
 {id:"in-0017",hab:"C"}],

["IN","Sistemas distribuídos","O teorema CAP afirma que um sistema distribuído não pode garantir simultaneamente",
["custo, agilidade e portabilidade.","cache, API e paralelismo.","confidencialidade, autenticidade e privacidade.","concorrência, atomicidade e persistência.","consistência, disponibilidade e tolerância a partição."],4,
"Diante de uma partição de rede — que é inevitável —, é preciso escolher entre manter a consistência ou a disponibilidade. Bancos NoSQL costumam privilegiar disponibilidade.",null,
 {id:"in-0018",hab:"C"}],

["IN","Sistemas distribuídos","Em uma arquitetura cliente-servidor, o balanceador de carga tem por função",
["armazenar permanentemente os dados manipulados pela aplicação, funcionando como camada de persistência compartilhada.","compilar o código da aplicação a cada implantação, gerando os artefatos executáveis do sistema.","criptografar todo o tráfego trocado entre cliente e servidor, o que dispensa o uso de certificados digitais na aplicação.","distribuir as requisições entre várias instâncias do servidor, melhorando disponibilidade e escalabilidade.","gerenciar o banco de dados, distribuindo as tabelas entre os servidores conforme o volume."],3,
"Balanceamento pressupõe aplicação sem estado no servidor; se houver sessão local, é preciso afinidade de sessão ou armazenamento externo compartilhado.",null,
 {id:"in-0019",hab:"C"}],

["IN","Nuvem","No modelo de serviço PaaS (Plataforma como Serviço), o provedor é responsável por",
["apenas pelo datacenter físico e pela conectividade de rede, cabendo ao cliente todo o restante.","apenas pela conectividade de rede e pelo fornecimento de energia elétrica ao datacenter contratado.","por toda a pilha de execução, inclusive pela aplicação e pelos dados que o cliente nela manipula.","pelo sistema operacional, tempo de execução e middleware, cabendo ao cliente a aplicação e os dados.","exclusivamente pela realização das cópias de segurança dos dados armazenados pela aplicação."],3,
"A escala de responsabilidade: IaaS entrega infraestrutura (você gerencia o SO); PaaS entrega a plataforma pronta (você só implanta a aplicação); SaaS entrega o software pronto para uso.",null,
 {id:"in-0020",hab:"C"}],

["IN","Nuvem","A escalabilidade horizontal difere da vertical porque a horizontal",
["aumenta a capacidade do servidor existente (mais CPU e memória).","funciona apenas em redes locais, onde a latência entre nós é desprezível.","reduz o número de servidores, concentrando a carga em máquinas mais potentes.","exige hardware proprietário do mesmo fabricante em todas as instâncias.","acrescenta mais instâncias de servidor, distribuindo a carga entre elas."],4,
"Vertical é crescer para cima e esbarra num limite físico; horizontal é crescer para os lados e, em princípio, não tem teto — desde que a aplicação suporte a distribuição.",null,
 {id:"in-0021",hab:"C"}],

["IN","Sistemas distribuídos","Em uma arquitetura orientada a mensagens, o uso de uma fila entre produtor e consumidor traz como benefício principal",
["a eliminação da dependência de rede entre os dois lados da comunicação.","a dispensa do tratamento de erros, que passam a ser absorvidos pela própria infraestrutura.","a garantia de entrega instantânea das mensagens, já que a fila elimina a latência da rede entre as partes.","a redução do consumo de memória do produtor, que delega o buffer à fila.","o desacoplamento temporal: o produtor continua operando mesmo que o consumidor esteja indisponível."],4,
"A fila absorve picos e sobrevive à indisponibilidade do consumidor, que processa no seu ritmo. Em troca, introduz consistência eventual e exige tratar mensagens duplicadas ou fora de ordem.",null,
 {id:"in-0022",hab:"C"}],
["IN","Sistemas operacionais","Um processo em estado bloqueado, em um sistema operacional multitarefa, encontra-se",
["ocupando o processador enquanto executa uma operação de entrada e saída sobre um dispositivo periférico.","suspenso por decisão do usuário, que interrompeu manualmente a execução por meio de um comando do sistema.","encerrado pelo escalonador por ter ultrapassado o tempo máximo de execução previsto para a sua classe.","na fila de prontos, disputando o processador com os demais processos que se encontram no mesmo estado.","aguardando um evento externo, como a conclusão de uma leitura em disco, e por isso não concorre pela CPU."],4,
"Bloqueado é diferente de pronto: o processo bloqueado não quer a CPU, ele espera algo. Só depois que o evento ocorre ele volta para a fila de prontos e recomeça a disputar o processador.",null,
 {id:"in-0023",hab:"C"}],

["IN","Sistemas operacionais","A memória virtual permite que um processo utilize um espaço de endereçamento maior que a memória física disponível. Isso é possível porque",
["páginas menos utilizadas são transferidas para o disco, e trazidas de volta quando referenciadas pelo processo.","o sistema operacional compacta as páginas do processo, reduzindo o espaço que cada uma ocupa na memória principal.","o processador amplia dinamicamente a capacidade dos módulos de memória instalados na máquina em execução.","cada processo recebe uma fração igual da memória física, calculada pelo escalonador no momento da sua criação.","os endereços lógicos coincidem com os físicos, o que dispensa qualquer tradução durante o acesso à memória."],0,
"O disco entra como extensão da memória, ao custo de latência muito maior. Quando o padrão de acesso não cabe na memória física, o sistema passa mais tempo trocando páginas que executando — é o thrashing.",null,
 {id:"in-0024",hab:"C"}],

["IN","Sistemas operacionais","Duas condições necessárias para a ocorrência de impasse entre processos são",
["preempção de recursos e escalonamento por prioridade fixa entre os processos que disputam o mesmo dispositivo.","fragmentação da memória principal e esgotamento do espaço reservado à área de troca em disco.","paralelismo real em múltiplos núcleos e ausência de memória virtual configurada no sistema operacional.","uso de memória compartilhada e execução de processos pertencentes a usuários distintos no mesmo sistema.","exclusão mútua e espera circular, entre as quatro condições que precisam ocorrer simultaneamente."],4,
"São quatro, e todas precisam valer ao mesmo tempo: exclusão mútua, posse e espera, ausência de preempção e espera circular. Quebrar qualquer uma delas resolve — e é assim que as estratégias de prevenção funcionam.",null,
 {id:"in-0025",hab:"C"}],

["IN","Sistemas operacionais","Sobre processos e threads, avalie as afirmações a seguir.\nI. Threads de um mesmo processo compartilham o espaço de endereçamento.\nII. A troca de contexto entre threads de um mesmo processo é geralmente mais barata que entre processos.\nIII. Um impasse (deadlock) ocorre sempre que dois processos disputam o mesmo recurso.\nÉ correto apenas o que se afirma em",
["I.","II.","I e II.","II e III.","I, II e III."],2,
"III confunde disputa com impasse. Disputa por recurso é o caso comum e se resolve com espera: um processo aguarda, o outro libera. O impasse exige as quatro condições de Coffman ao mesmo tempo — exclusão mútua, posse e espera, ausência de preempção e espera circular —, e é a espera circular que fecha o ciclo. I e II decorrem do mesmo fato: compartilhar memória é o que torna a thread mais barata.",null,
 {"id":"in-0026","hab":"J"}],

["IN","Redes","Sobre o modelo TCP/IP, avalie as afirmações a seguir.\nI. O protocolo TCP oferece entrega confiável e ordenada, com controle de fluxo e de congestionamento.\nII. O protocolo UDP oferece as mesmas garantias do TCP, com cabeçalho menor.\nIII. O endereçamento lógico entre redes distintas é responsabilidade da camada de rede.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I e III.","I, II e III."],3,
"II inverte a razão de existir do UDP: ele é mais leve exatamente porque NÃO garante entrega, ordem nem controle de congestionamento. É a troca deliberada que o torna adequado a voz, vídeo ao vivo e DNS, onde retransmitir tarde é pior que perder. Cabeçalho menor é consequência de dispensar essas garantias, não um bônus somado a elas.",null,
 {"id":"in-0027","hab":"J"}],

["IN","Nuvem","Sobre modelos de serviço em nuvem, avalie as afirmações a seguir.\nI. No SaaS, o cliente é responsável por aplicar as correções de segurança do software que utiliza.\nII. No IaaS, o cliente administra o sistema operacional e as aplicações, e o provedor cuida da infraestrutura física.\nIII. No PaaS, o provedor oferece o ambiente de execução, e o cliente se ocupa do código e dos dados.\nÉ correto apenas o que se afirma em",
["I.","II.","I e III.","I, II e III.","II e III."],4,
"I inverte a divisão de responsabilidade do SaaS, que é justamente o modelo em que o cliente só usa: quem corrige, atualiza e opera o software é o provedor. A afirmação descreve o que caberia ao cliente no IaaS. A régua para os três modelos é sempre a mesma pergunta — até onde vai a camada que o provedor administra.",null,
 {"id":"in-0028","hab":"J"}],

["IN","Redes","Avalie a asserção a seguir e a razão proposta para ela.\nI. A tradução de endereços de rede (NAT) dificulta a comunicação iniciada de fora para dentro da rede local.\nPORQUE\nII. O NAT mantém uma tabela de associações criada a partir de conexões que partem de dentro, e um pacote que chega sem entrada correspondente não tem para onde ser encaminhado.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],0,
"As duas são verdadeiras e a segunda é o mecanismo que produz a primeira. É por isso que servidor atrás de NAT precisa de redirecionamento de porta configurado à mão, e é também parte da razão de o IPv6, com endereço para cada dispositivo, dispensar a tradução.",null,
 {"id":"in-0029","hab":"A"}],

["IN","Sistemas operacionais","Avalie a asserção a seguir e a razão proposta para ela.\nI. A memória virtual permite executar programas cujo espaço de endereçamento excede a memória física disponível.\nPORQUE\nII. O sistema operacional carrega antecipadamente todas as páginas do programa em memória principal antes de iniciar a execução.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],2,
"A primeira é verdadeira; a segunda descreve exatamente o oposto do que a memória virtual faz. O mecanismo é a paginação por demanda: carregam-se páginas conforme são referenciadas, e páginas pouco usadas voltam para o disco. Se todas fossem carregadas antes, o espaço de endereçamento não poderia exceder a memória física — a razão dada destruiria a asserção que pretende justificar.",null,
 {"id":"in-0030","hab":"A"}],

["IN","Sistemas distribuídos","Avalie a asserção a seguir e a razão proposta para ela.\nI. O teorema CAP demonstra que um sistema distribuído pode garantir simultaneamente consistência, disponibilidade e tolerância a partição.\nPORQUE\nII. Em uma rede sujeita a partições, um sistema que continue respondendo a requisições pode devolver dados desatualizados a parte dos clientes.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],3,
"A segunda é verdadeira e é justamente o que o teorema afirma; a primeira inverte o resultado. O CAP diz que, HAVENDO partição de rede, é preciso escolher entre consistência e disponibilidade — não se garantem as três ao mesmo tempo. Como partição é fato da vida em rede, a escolha real é entre as duas primeiras, e é isso que separa um banco relacional distribuído de um sistema eventualmente consistente.",null,
 {"id":"in-0031","hab":"A"}],

["IN","Redes","Um pacote destinado ao endereço 10.20.30.40 será encaminhado",
["para 192.168.1.1, por ser a rota padrão.","diretamente na rede local, sem gateway.","para 192.168.1.254, por corresponder à rota mais específica que casa com o destino.","descartado, por não haver rota para esse destino.","para 192.168.1.1 e 192.168.1.254 simultaneamente, por haver duas rotas aplicáveis."],2,
"O destino casa com duas entradas: a rota padrão, que casa com tudo, e a de 10.0.0.0/8. O roteamento escolhe sempre a de máscara mais longa, ou seja a mais específica — /8 vence /0. A rota padrão existe justamente para o que não casa com nenhuma outra, e usá-la quando há rota específica é o erro que a questão isola.",null,
 {"id":"in-0032","hab":"I","art":[{"t":"tabela","cap":"Tabela de roteamento de um host","cab":["Destino","Máscara","Gateway","Interface"],"al":["","","",""],"linhas":[["0.0.0.0","0.0.0.0","192.168.1.1","eth0"],["192.168.1.0","255.255.255.0","0.0.0.0","eth0"],["10.0.0.0","255.0.0.0","192.168.1.254","eth0"]]}]}],

["IN","Redes","Uma rede recebe o bloco 200.10.5.0/24 e precisa ser dividida em sub-redes com pelo menos 60 hospedeiros utilizáveis cada. A máscara mais econômica que atende ao requisito e o número de sub-redes obtidas são",
["/25 e 2 sub-redes.","/27 e 8 sub-redes.","/26 e 4 sub-redes.","/28 e 16 sub-redes.","/24 e 1 sub-rede."],2,
"Com 6 bits de hospedeiro há 2⁶ − 2 = 62 endereços utilizáveis, o que atende aos 60; isso deixa 26 bits de rede, ou seja /26, e 2² = 4 sub-redes a partir de um /24. Um /27 daria 2⁵ − 2 = 30 hospedeiros, insuficiente; um /25 daria 126, que atende mas desperdiça metade do espaço em cada sub-rede. Os dois endereços subtraídos são o da própria rede e o de difusão.",null,
 {"id":"in-0033","hab":"X"}],

["IN","Sistemas operacionais","Com escalonamento por menor tarefa primeiro sem preempção (SJF não preemptivo), o tempo médio de espera é de",
["3,3 ms.","4,0 ms.","5,0 ms.","4,7 ms.","6,0 ms."],2,
"P1 chega primeiro e ocupa a CPU de 0 a 8, sem preempção. Aos 8 ms, P2 e P3 já chegaram, e escolhe-se o mais curto: P3 (2 ms) roda de 8 a 10, e P2 (4 ms) de 10 a 14. Esperas: P1 = 0; P3 = 8 − 2 = 6; P2 = 10 − 1 = 9. Média = (0 + 6 + 9) / 3 = 5,0 ms. O erro comum é aplicar preempção e interromper P1 quando P3 chega, o que daria outro valor.",null,
 {"id":"in-0034","hab":"X","art":[{"t":"tabela","cap":"Processos prontos para execução","cab":["Processo","Chegada","Duração (ms)"],"al":["","num","num"],"linhas":[["P1","0","8"],["P2","1","4"],["P3","2","2"]]}]}],

["IN","Nuvem","A diferença de custo mensal entre as duas configurações e a opção mais barata são, respectivamente,",
["R$ 200 e a nuvem.","R$ 600 e o servidor próprio.","R$ 800 e a nuvem.","R$ 1.400 e o servidor próprio.","R$ 800 e o servidor próprio."],2,
"Servidor próprio: 1.800 + 600 + 1.200 = 3.600. Nuvem: 2.100 + 700 = 2.800. A diferença é 800 a favor da nuvem. O distrator que aponta o servidor próprio como mais barato compara apenas a linha de instância com a de aquisição, ignorando energia, espaço e a diferença de custo de administração — que é exatamente a comparação incompleta que costuma decidir mal esse tipo de escolha.",null,
 {"id":"in-0035","hab":"X","art":[{"t":"tabela","cap":"Custo mensal de duas configurações","cab":["Item","Servidor próprio","Nuvem"],"al":["","num","num"],"linhas":[["Aquisição amortizada (36 meses)","1.800","0"],["Energia e espaço","600","0"],["Instância mensal","0","2.100"],["Administração","1.200","700"]]}]}],

["IN","Sistemas distribuídos","Um serviço de catálogo é consultado por quatro aplicações e atualizado uma vez por hora. Nos horários de pico, o serviço fica indisponível por alguns segundos, e as quatro aplicações passam a exibir erro ao usuário final, mesmo em telas em que o catálogo é apenas complementar. A equipe precisa reduzir o impacto dessas indisponibilidades curtas sem alterar o serviço de catálogo, que é mantido por outro time.\nA medida mais adequada é",
["aumentar o tempo limite das chamadas ao catálogo, dando ao serviço mais tempo para responder.","repetir a chamada ao catálogo indefinidamente até obter resposta.","consultar o catálogo de forma síncrona no início de cada requisição, para falhar cedo.","replicar o serviço de catálogo dentro de cada uma das quatro aplicações.","manter um cache local com o último catálogo obtido e servi-lo enquanto o serviço estiver indisponível, degradando a funcionalidade em vez de falhar."],4,
"Um dado atualizado uma vez por hora tolera bem ser servido de cache por alguns segundos — a degradação graciosa entrega uma tela levemente desatualizada em vez de um erro. Aumentar o tempo limite prolonga a espera do usuário e agrava o congestionamento; repetir indefinidamente é como se derruba um serviço que estava só lento. Falhar cedo é útil, mas aqui a questão é não falhar. Replicar o serviço em cada aplicação cria quatro cópias para manter, e o time nem é o dono dele.",null,
 {"id":"in-0036","hab":"E"}],

["IN","Virtualização","Uma equipe precisa distribuir uma aplicação que depende de uma versão específica de biblioteca de sistema, incompatível com a instalada nos servidores. A aplicação deve subir em segundos, escalar horizontalmente conforme a demanda e rodar dezenas de instâncias por servidor. Não há exigência de sistemas operacionais diferentes entre as instâncias, e todas rodam sobre o mesmo núcleo Linux.\nA tecnologia mais adequada é",
["conteinerização, que isola dependências no espaço de usuário compartilhando o núcleo do sistema hospedeiro.","virtualização completa, com uma máquina virtual por instância da aplicação.","instalação direta no sistema hospedeiro, com substituição da biblioteca do sistema.","emulação de arquitetura, para garantir isolamento máximo entre as instâncias.","compilação estática da aplicação com todas as bibliotecas do sistema embutidas."],0,
"O contêiner resolve exatamente o problema descrito: empacota a biblioteca na imagem, sobe em segundos e compartilha o núcleo, o que permite dezenas de instâncias por servidor. Máquina virtual completa daria o mesmo isolamento com um sistema operacional inteiro por instância, o que contraria o requisito de densidade e de tempo de subida. Substituir a biblioteca do hospedeiro quebra o que mais depende dela. Emulação é ainda mais cara e não há troca de arquitetura em jogo.",null,
 {"id":"in-0037","hab":"E"}],

["IN","Redes","Usuários de uma filial relatam lentidão ao acessar um sistema hospedado na matriz. O administrador verifica que o enlace entre as unidades está com 30% de utilização média, a perda de pacotes é nula e a latência média é de 180 ms. O sistema faz cerca de 40 requisições sequenciais ao servidor para montar uma única tela, cada uma aguardando a resposta da anterior. Trocar o enlace por outro de banda dupla foi orçado e está em análise.\nO diagnóstico e a medida mais adequada são",
["o gargalo é a banda do enlace, e a contratação de banda dupla resolverá a lentidão.","o gargalo é a latência combinada ao número de idas e voltas, e a medida eficaz é reduzir o número de requisições sequenciais por tela.","o gargalo é a perda de pacotes, e a medida eficaz é ajustar o controle de congestionamento.","o gargalo é a capacidade de processamento do servidor, e a medida eficaz é ampliar sua memória.","não há gargalo identificável, e a lentidão é percepção subjetiva dos usuários."],1,
"Quarenta idas e voltas a 180 ms somam mais de sete segundos só de latência, antes de qualquer processamento — e banda a 30% de utilização com perda zero não é gargalo. Dobrar a banda não reduz a latência em nada: são dimensões diferentes, e confundi-las é o erro que a questão isola. A medida eficaz é reduzir o número de idas e voltas, agrupando requisições ou trazendo mais dados por chamada.",null,
 {"id":"in-0038","hab":"E"}]

]);
