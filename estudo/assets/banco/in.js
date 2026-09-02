/* Banco IA — Sistemas operacionais, redes e sistemas distribuídos (25 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- sistemas operacionais (8) ---------- */
["IN","Sistemas operacionais","A multiprogramação permite que",
["vários processadores executem simultaneamente o mesmo processo, dividindo entre si as instruções do programa.","vários processos permaneçam na memória, alternando o uso da CPU e aproveitando os períodos de espera por E/S.","um único processo utilize toda a memória disponível.","o sistema operacional opere sem qualquer sistema de arquivos, mantendo dados apenas na memória volátil da máquina.","todos os processos compartilhem por padrão o mesmo espaço de endereçamento, o que agiliza a troca de dados."],1,
"A ideia central é aproveitar o tempo ocioso da CPU durante operações de entrada e saída. Com um processador só, há pseudoparalelismo — a alternância é rápida demais para ser percebida.",null,
 {id:"in-0001",hab:"C"}],

["IN","Sistemas operacionais","O escalonador de processos do tipo round-robin caracteriza-se por",
["executar sempre o processo de maior prioridade até que ele conclua ou bloqueie.","atribuir a cada processo uma fatia de tempo (quantum), alternando ciclicamente entre eles.","executar primeiro o processo de menor tempo estimado, reduzindo a espera média.","conceder a CPU sem preempção, devolvendo-a apenas quando o processo a libera.","distribuir os processos entre vários processadores, um para cada núcleo disponível."],1,
"Round-robin é preemptivo e equitativo. Quantum muito curto aumenta a sobrecarga de troca de contexto; muito longo aproxima o comportamento do FIFO.",null,
 {id:"in-0002",hab:"C"}],

["IN","Sistemas operacionais","As duas threads abaixo podem entrar em impasse. A forma mais simples de eliminar esse risco é",
["remover a sincronização dos dois métodos, eliminando a disputa pelos objetos de bloqueio.","fazer as duas threads adquirirem os bloqueios sempre na mesma ordem, quebrando a espera circular.","elevar a prioridade da primeira thread no escalonador do sistema operacional.","executar as duas threads em processadores diferentes, o que elimina a disputa pelos recursos.","substituir os objetos de bloqueio por variáveis inteiras controladas diretamente pelo próprio programa."],1,
"Se a thread 1 obtém A e espera B enquanto a thread 2 obtém B e espera A, forma-se a espera circular. Impor uma ordem global de aquisição quebra essa condição — e basta quebrar UMA das quatro condições de Coffman (exclusão mútua, posse e espera, ausência de preempção, espera circular) para prevenir o impasse. Remover a sincronização criaria condição de corrida.",
"// thread 1\nsynchronized (recursoA) {\n    synchronized (recursoB) {\n        transferir();\n    }\n}\n\n// thread 2\nsynchronized (recursoB) {\n    synchronized (recursoA) {\n        transferir();\n    }\n}",
 {id:"in-0003",hab:"I"}],

["IN","Sistemas operacionais","A memória virtual permite que",
["o sistema opere sem qualquer memória RAM instalada, usando o disco como memória principal.","programas maiores que a memória física sejam executados, com páginas transferidas entre memória e disco.","todos os processos compartilharem o mesmo endereço físico de memória, o que reduz o consumo total do sistema.","o disco substitua integralmente a memória principal, dispensando módulos de RAM na configuração.","o processador execute instruções mais rapidamente, por acessar diretamente as páginas gravadas em disco."],1,
"Paginação sob demanda dá a cada processo um espaço de endereçamento próprio e maior que a memória física. Excesso de trocas de página leva ao thrashing, com queda severa de desempenho.",null,
 {id:"in-0004",hab:"C"}],

["IN","Sistemas operacionais","A proteção de memória entre processos é garantida principalmente",
["pelo compilador, que verifica em tempo de compilação se cada acesso a vetor ou ponteiro respeita os limites declarados no código.","pela unidade de gerência de memória (MMU), que traduz endereços e impede o acesso fora do espaço do processo.","pelo sistema de arquivos, que controla as permissões de leitura e escrita atribuídas a cada processo em execução na máquina.","pelo antivírus residente, que monitora tentativas de acesso indevido à memória de outros programas.","pelo escalonador, que impede que dois processos ocupem simultaneamente a mesma região de memória."],1,
"O isolamento é imposto por hardware: a MMU traduz o endereço lógico e verifica a permissão, gerando falha de proteção caso um processo tente acessar área alheia.",null,
 {id:"in-0005",hab:"C"}],

["IN","Sistemas operacionais","A diferença entre processo e thread é que threads",
["possuem espaços de endereçamento independentes entre si, isolados pelo sistema operacional por meio da MMU.","compartilham o espaço de endereçamento do processo ao qual pertencem, tendo pilha e contexto próprios.","não poderem executar em paralelo, mesmo em máquinas equipadas com vários núcleos de processamento.","serem gerenciadas exclusivamente pelo hardware, sem qualquer participação do sistema operacional.","substituírem completamente os processos nos sistemas operacionais modernos, que já não os utilizam."],1,
"Compartilhar memória torna a comunicação barata e a troca de contexto mais leve — e é também o que exige sincronização, sob pena de condição de corrida.",null,
 {id:"in-0006",hab:"C"}],

["IN","Sistemas operacionais","Duas threads executam simultaneamente o método abaixo, cada uma chamando-o 1.000 vezes sobre o mesmo objeto. O saldo final",
["será 2.000, porque a atribuição a uma variável de instância é operação atômica na especificação da linguagem.","pode ser menor que 2.000, porque a linha 02 não é atômica e as threads podem sobrescrever a leitura uma da outra.","pode ser maior que 2.000, porque uma thread pode ler um valor já incrementado pela outra e contá-lo duas vezes.","será 1.000, pois a segunda thread encontra o objeto em uso e descarta a própria execução do método.","causará erro de compilação, porque métodos acessados por várias threads exigem a palavra synchronized."],1,
"saldo = saldo + 1 são três operações: ler, somar, gravar. Se a segunda thread lê antes de a primeira gravar, um dos incrementos se perde. O resultado passa a depender do escalonamento — daí a natureza intermitente desses defeitos e a dificuldade de reproduzi-los. A correção é exclusão mútua na região crítica.",
"01  public void depositar() {\n02      saldo = saldo + 1;\n03  }",
 {id:"in-0007",hab:"I"}],

["IN","Virtualização","Um contêiner difere de uma máquina virtual porque o contêiner",
["virtualiza o hardware por completo, inclusive o núcleo do sistema operacional convidado.","compartilha o núcleo do sistema operacional hospedeiro, isolando apenas o espaço de usuário.","exigir um hipervisor de tipo 1 instalado diretamente sobre o hardware da máquina.","não permitir replicação, já que cada instância fica presa à máquina física em que foi criada.","não isolar os processos entre si, deixando visível a árvore completa do sistema hospedeiro."],1,
"Por compartilhar o núcleo, o contêiner inicia em segundos e consome menos recursos. Em contrapartida, não permite executar um sistema operacional de núcleo diferente do hospedeiro.",null,
 {id:"in-0008",hab:"C"}],

/* ---------- redes (8) ---------- */
["IN","Redes","No modelo OSI, a camada responsável pelo roteamento de pacotes entre redes distintas é a",
["camada física.","camada de enlace.","camada de rede.","camada de transporte.","camada de aplicação."],2,
"Camada 3 (rede) é onde atuam o IP e os roteadores. A camada de enlace entrega dentro do mesmo segmento; a de transporte cuida da comunicação fim a fim entre processos.",null,
 {id:"in-0009",hab:"C"}],

["IN","Redes","A principal diferença entre TCP e UDP é que o TCP",
["é mais rápido que o UDP em qualquer cenário, porque dispensa a verificação de erros nos pacotes que transmite pela rede.","é orientado a conexão, garantindo entrega ordenada e confiável por meio de confirmações e retransmissões.","opera na camada de rede do modelo OSI, sendo o responsável pelo roteamento dos pacotes entre redes fisicamente distintas.","não utiliza números de porta, identificando as aplicações apenas pelo endereço IP de destino.","é usado apenas em redes locais, onde a latência baixa dispensa mecanismos de retransmissão."],1,
"TCP entrega confiabilidade ao custo de latência e sobrecarga. UDP é sem conexão e sem garantia, adequado a streaming, jogos e DNS, onde perder um pacote é melhor que esperar por ele.",null,
 {id:"in-0010",hab:"C"}],

["IN","Redes","Um host com endereço 192.168.10.37 e máscara 255.255.255.0 pertence à rede",
["192.168.0.0","192.168.10.0","192.168.10.37","192.0.0.0","255.255.255.0"],1,
"A máscara /24 fixa os três primeiros octetos como identificador de rede e deixa o último para os hosts. Logo, a rede é 192.168.10.0 e o intervalo utilizável vai de .1 a .254.",null,
 {id:"in-0011",hab:"C"}],

["IN","Redes","Dois computadores configurados como 192.168.1.10/24 e 192.168.2.20/24 não conseguem se comunicar diretamente porque",
["os dois endereços IP são idênticos entre si, o que provoca conflito de endereçamento na rede.","estão em redes lógicas diferentes, sendo necessário um roteador ou gateway para interligá-las.","a máscara de sub-rede está incorretamente configurada em ambas as estações.","o protocolo TCP foi desativado em pelo menos uma das duas estações envolvidas na comunicação.","192.168 ser uma faixa reservada para uso interno, que não pode ser roteada entre sub-redes."],1,
"Com máscara /24, .1.x e .2.x são redes distintas. O tráfego entre elas precisa passar por um roteador — e cada host precisa ter o gateway padrão corretamente configurado.",null,
 {id:"in-0012",hab:"C"}],

["IN","Redes","O protocolo DNS tem como função principal",
["atribuir dinamicamente endereços IP aos hosts que ingressam na rede local.","traduzir nomes de domínio em endereços IP, operando como banco de dados distribuído e hierárquico.","criptografar o tráfego trocado entre cliente e servidor antes que ele seja encaminhado pela rede pública.","rotear pacotes entre sistemas autônomos distintos, escolhendo o melhor caminho entre as redes.","controlar o congestionamento da rede, ajustando a taxa de envio conforme a capacidade disponível."],1,
"Atribuir IP dinamicamente é DHCP — confusão frequente. O DNS é hierárquico (raiz, TLD, autoritativo) e usa cache intensivo para reduzir latência e carga.",null,
 {id:"in-0013",hab:"C"}],

["IN","Redes","A substituição de um hub por um switch em uma rede local melhora o desempenho porque o switch",
["amplifica o sinal elétrico recebido, estendendo o alcance físico da rede local.","encaminha o quadro apenas à porta de destino, segmentando os domínios de colisão.","opera na camada de rede, roteando os pacotes conforme o endereço IP de destino.","dispensa o uso de endereços MAC, identificando as estações pela porta física.","eleva a velocidade nominal do cabeamento instalado entre as estações da rede."],1,
"O hub repete o sinal para todas as portas, mantendo um único domínio de colisão. O switch aprende os endereços MAC e comuta ponto a ponto, dando a cada porta seu próprio domínio.",null,
 {id:"in-0014",hab:"C"}],

["IN","Redes","O protocolo HTTPS acrescenta ao HTTP",
["a compressão dos dados transmitidos, o que reduz o consumo de banda na conexão.","uma camada de segurança (TLS) que provê confidencialidade, integridade e autenticação do servidor.","o suporte à transferência de arquivos maiores, por meio da fragmentação automática do conteúdo.","o roteamento dinâmico das requisições, escolhendo o caminho mais curto até o servidor de destino.","o balanceamento automático de carga entre os servidores que respondem pelo mesmo endereço de domínio."],1,
"TLS cifra o tráfego, verifica integridade e autentica o servidor pelo certificado digital. Não garante, por si só, que a aplicação seja segura — apenas o canal.",null,
 {id:"in-0015",hab:"C"}],

["IN","Redes","O endereço IPv4 192.168.0.0/16 pertence a uma faixa",
["pública e roteável na internet, atribuída por autoridade regional de registro.","privada, não roteável na internet pública.","reservada para tráfego multicast, destinado a grupos de receptores.","de loopback, usada pelo host para comunicar-se consigo mesmo.","de broadcast global, que atinge todos os hosts da rede local."],1,
"As faixas privadas da RFC 1918 são 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Para acessar a internet, precisam de tradução de endereços (NAT).",null,
 {id:"in-0016",hab:"C"}],

/* ---------- sistemas distribuídos e nuvem (6) ---------- */
["IN","Sistemas distribuídos","A transparência de localização, em um sistema distribuído, significa que",
["o usuário sabe exatamente em qual servidor o recurso está armazenado.","o usuário acessa o recurso sem precisar saber onde ele está fisicamente armazenado.","todos os recursos ficam concentrados em um único servidor central.","o sistema não replica dados, mantendo cópia única de cada recurso.","a topologia da rede permanece invisível também ao administrador."],1,
"Transparência é esconder a distribuição. Além da de localização, há a de replicação, de falha, de concorrência e de migração — cada uma ocultando um aspecto da complexidade.",null,
 {id:"in-0017",hab:"C"}],

["IN","Sistemas distribuídos","O teorema CAP afirma que um sistema distribuído não pode garantir simultaneamente",
["custo, agilidade e portabilidade.","consistência, disponibilidade e tolerância a partição.","confidencialidade, autenticidade e privacidade.","concorrência, atomicidade e persistência.","cache, API e paralelismo."],1,
"Diante de uma partição de rede — que é inevitável —, é preciso escolher entre manter a consistência ou a disponibilidade. Bancos NoSQL costumam privilegiar disponibilidade.",null,
 {id:"in-0018",hab:"C"}],

["IN","Sistemas distribuídos","Em uma arquitetura cliente-servidor, o balanceador de carga tem por função",
["armazenar permanentemente os dados manipulados pela aplicação, funcionando como camada de persistência compartilhada.","distribuir as requisições entre várias instâncias do servidor, melhorando disponibilidade e escalabilidade.","criptografar todo o tráfego trocado entre cliente e servidor, o que dispensa o uso de certificados digitais na aplicação.","compilar o código da aplicação a cada implantação, gerando os artefatos executáveis do sistema.","gerenciar o banco de dados, distribuindo as tabelas entre os servidores conforme o volume."],1,
"Balanceamento pressupõe aplicação sem estado no servidor; se houver sessão local, é preciso afinidade de sessão ou armazenamento externo compartilhado.",null,
 {id:"in-0019",hab:"C"}],

["IN","Nuvem","No modelo de serviço PaaS (Plataforma como Serviço), o provedor é responsável por",
["apenas pelo datacenter físico e pela conectividade de rede, cabendo ao cliente todo o restante.","pelo sistema operacional, tempo de execução e middleware, cabendo ao cliente a aplicação e os dados.","por toda a pilha de execução, inclusive pela aplicação e pelos dados que o cliente nela manipula.","apenas pela conectividade de rede e pelo fornecimento de energia elétrica ao datacenter contratado.","exclusivamente pela realização das cópias de segurança dos dados armazenados pela aplicação."],1,
"A escala de responsabilidade: IaaS entrega infraestrutura (você gerencia o SO); PaaS entrega a plataforma pronta (você só implanta a aplicação); SaaS entrega o software pronto para uso.",null,
 {id:"in-0020",hab:"C"}],

["IN","Nuvem","A escalabilidade horizontal difere da vertical porque a horizontal",
["aumenta a capacidade do servidor existente (mais CPU e memória).","acrescenta mais instâncias de servidor, distribuindo a carga entre elas.","reduz o número de servidores, concentrando a carga em máquinas mais potentes.","exige hardware proprietário do mesmo fabricante em todas as instâncias.","funciona apenas em redes locais, onde a latência entre nós é desprezível."],1,
"Vertical é crescer para cima e esbarra num limite físico; horizontal é crescer para os lados e, em princípio, não tem teto — desde que a aplicação suporte a distribuição.",null,
 {id:"in-0021",hab:"C"}],

["IN","Sistemas distribuídos","Em uma arquitetura orientada a mensagens, o uso de uma fila entre produtor e consumidor traz como benefício principal",
["a eliminação da dependência de rede entre os dois lados da comunicação.","o desacoplamento temporal: o produtor continua operando mesmo que o consumidor esteja indisponível.","a garantia de entrega instantânea das mensagens, já que a fila elimina a latência da rede entre as partes.","a redução do consumo de memória do produtor, que delega o buffer à fila.","a dispensa do tratamento de erros, que passam a ser absorvidos pela própria infraestrutura."],1,
"A fila absorve picos e sobrevive à indisponibilidade do consumidor, que processa no seu ritmo. Em troca, introduz consistência eventual e exige tratar mensagens duplicadas ou fora de ordem.",null,
 {id:"in-0022",hab:"C"}],
["IN","Sistemas operacionais","Um processo em estado bloqueado, em um sistema operacional multitarefa, encontra-se",
["ocupando o processador enquanto executa uma operação de entrada e saída sobre um dispositivo periférico.","aguardando um evento externo, como a conclusão de uma leitura em disco, e por isso não concorre pela CPU.","encerrado pelo escalonador por ter ultrapassado o tempo máximo de execução previsto para a sua classe.","na fila de prontos, disputando o processador com os demais processos que se encontram no mesmo estado.","suspenso por decisão do usuário, que interrompeu manualmente a execução por meio de um comando do sistema."],1,
"Bloqueado é diferente de pronto: o processo bloqueado não quer a CPU, ele espera algo. Só depois que o evento ocorre ele volta para a fila de prontos e recomeça a disputar o processador.",null,
 {id:"in-0023",hab:"C"}],

["IN","Sistemas operacionais","A memória virtual permite que um processo utilize um espaço de endereçamento maior que a memória física disponível. Isso é possível porque",
["o sistema operacional compacta as páginas do processo, reduzindo o espaço que cada uma ocupa na memória principal.","páginas menos utilizadas são transferidas para o disco, e trazidas de volta quando referenciadas pelo processo.","o processador amplia dinamicamente a capacidade dos módulos de memória instalados na máquina em execução.","cada processo recebe uma fração igual da memória física, calculada pelo escalonador no momento da sua criação.","os endereços lógicos coincidem com os físicos, o que dispensa qualquer tradução durante o acesso à memória."],1,
"O disco entra como extensão da memória, ao custo de latência muito maior. Quando o padrão de acesso não cabe na memória física, o sistema passa mais tempo trocando páginas que executando — é o thrashing.",null,
 {id:"in-0024",hab:"C"}],

["IN","Sistemas operacionais","Duas condições necessárias para a ocorrência de impasse entre processos são",
["preempção de recursos e escalonamento por prioridade fixa entre os processos que disputam o mesmo dispositivo.","exclusão mútua e espera circular, entre as quatro condições que precisam ocorrer simultaneamente.","paralelismo real em múltiplos núcleos e ausência de memória virtual configurada no sistema operacional.","uso de memória compartilhada e execução de processos pertencentes a usuários distintos no mesmo sistema.","fragmentação da memória principal e esgotamento do espaço reservado à área de troca em disco."],1,
"São quatro, e todas precisam valer ao mesmo tempo: exclusão mútua, posse e espera, ausência de preempção e espera circular. Quebrar qualquer uma delas resolve — e é assim que as estratégias de prevenção funcionam.",null,
 {id:"in-0025",hab:"C"}],

]);
