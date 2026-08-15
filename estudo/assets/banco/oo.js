/* Banco IA — UML, projeto OO, padrões e arquitetura (61 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- casos de uso (10) ---------- */
["OO","UML: casos de uso","No diagrama de casos de uso, o relacionamento «include» indica que",
["o comportamento incluído é opcional e ocorre sob condição.","o comportamento incluído é obrigatório e sempre executado pelo caso de uso base.","o caso de uso incluído substitui integralmente o comportamento do caso base.","os dois casos de uso são executados por atores diferentes.","o caso base herda os atributos e as operações declarados no caso incluído."],1,
"«include» é dependência obrigatória: o caso base sempre executa o incluído. A seta parte do caso BASE em direção ao INCLUÍDO. O comportamento opcional e condicional é «extend».",null],

["OO","UML: casos de uso","Em um diagrama de casos de uso, a seta do relacionamento «extend» aponta",
["do caso de uso base para o caso de uso que o estende.","do caso de uso que estende para o caso de uso base.","do ator para o caso de uso que ele aciona diretamente no sistema.","do caso de uso para o ator que recebe o resultado da interação.","não há direção definida, cabendo à ferramenta de modelagem decidir."],1,
"É o inverso do «include» e a troca entre os dois é a pegadinha mais frequente do tema: em «extend» a seta parte do caso ESTENDIDO para o BASE; em «include», do BASE para o INCLUÍDO.",null],

["OO","UML: casos de uso","O ponto de extensão (extension point) declarado em um caso de uso serve para",
["listar os atributos manipulados pelo caso de uso.","indicar em que momento do fluxo o comportamento da extensão pode ser inserido.","definir a prioridade de implementação do caso de uso no cronograma.","nomear o ator primário responsável por acionar aquele caso de uso.","registrar as pré-condições que devem valer antes da execução do fluxo."],1,
"Sem o ponto de extensão, «extend» não diz ONDE o comportamento adicional entra. Ele nomeia a posição no fluxo em que a inserção condicional acontece.",null],

["OO","UML: casos de uso","Sobre atores em um diagrama de casos de uso, avalie:\nI. Um ator representa um papel, não uma pessoa específica.\nII. Um sistema externo pode ser modelado como ator.\nIII. Um mesmo indivíduo pode desempenhar mais de um papel de ator.\nÉ correto o que se afirma em",
["I, apenas.","I e II, apenas.","II e III, apenas.","I e III, apenas.","I, II e III."],4,
"Todas corretas. Ator é papel: um funcionário pode ser Vendedor e Gerente; um gateway de pagamento é ator não humano. Modelar pessoas em vez de papéis produz diagramas que envelhecem mal.",null],

["OO","UML: casos de uso","A generalização entre atores é adequada quando",
["dois atores nunca interagem simultaneamente com o mesmo caso de uso.","um ator especializado realiza tudo o que o ator geral realiza, e mais alguma coisa.","dois atores recebem o mesmo nome no diagrama e precisam ser distinguidos.","um dos atores é humano e o outro é um sistema externo que consome dados.","os atores pertencem a departamentos distintos."],1,
"É a herança aplicada a papéis: se o Gerente faz tudo o que o Atendente faz e ainda aprova descontos, modela-se Gerente como especialização de Atendente, evitando repetir associações.",null],

["OO","UML: casos de uso","Um erro comum na modelagem de casos de uso é decompô-los funcionalmente até o nível de operações como “validar CPF” ou “gravar registro”. O problema dessa prática é que",
["tornar o diagrama grande demais para ser impresso em uma única folha de papel de tamanho padrão.","casos de uso devem representar objetivos de valor para o ator, não passos internos de implementação.","a UML estabelecer um limite máximo de dez casos de uso por diagrama, para preservar sua legibilidade.","impedir o uso dos relacionamentos «include» e «extend» entre os casos de uso assim decompostos.","exigir a associação de pelo menos um ator a cada caso de uso desenhado no diagrama do sistema."],1,
"Caso de uso existe para expressar objetivo do ator, não decomposição funcional. Descer ao nível de operação transforma o diagrama em fluxograma e perde a comunicação com o cliente.",null],

["OO","UML: casos de uso","No fluxo de um caso de uso, o item que descreve o que deve ser verdadeiro ANTES de sua execução é",
["a pós-condição.","a pré-condição.","o fluxo alternativo.","o ponto de extensão.","o gatilho."],1,
"Pré-condição é o estado exigido para iniciar; pós-condição é o estado garantido ao terminar com sucesso. O gatilho é o evento que dispara o caso de uso.",null],

["OO","UML: casos de uso","Considere a asserção e a razão:\nI. O diagrama de casos de uso é adequado para comunicação com usuários não técnicos.\nPORQUE\nII. Sua notação é reduzida e expressa o sistema pela perspectiva do que o usuário obtém dele.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"A simplicidade da notação (bonecos, elipses, linhas) somada à perspectiva externa é exatamente o que torna o diagrama comunicável ao usuário. Nexo causal direto.",null],

["OO","UML: casos de uso","Em um sistema bancário, “Sacar dinheiro” e “Transferir valores” exigem ambos a autenticação do correntista. A forma correta de modelar isso é",
["duplicar os passos de autenticação em cada caso de uso do sistema.","criar um caso de uso “Autenticar correntista” relacionado aos demais por «include».","criar um caso de uso “Autenticar correntista” relacionado por «extend».","transformar a autenticação em um ator.","usar generalização entre “Sacar” e “Transferir”."],1,
"Comportamento comum e obrigatório em vários casos de uso é o caso típico de «include» — evita duplicação e concentra a manutenção. «extend» seria errado porque a autenticação não é opcional.",null],

["OO","UML: casos de uso","A fronteira do sistema (system boundary) desenhada em um diagrama de casos de uso serve para",
["separar os atores humanos dos não humanos.","delimitar o que é responsabilidade do sistema em construção, deixando os atores do lado de fora.","indicar a arquitetura em camadas adotada pelo sistema e a distribuição de suas responsabilidades.","agrupar os casos de uso por prioridade.","representar a rede corporativa e os servidores em que o sistema será implantado em produção."],1,
"A caixa define o escopo: dentro, o que o sistema faz; fora, quem interage com ele. É um instrumento de negociação de escopo tão importante quanto os próprios casos de uso.",null],

/* ---------- diagrama de classes (14) ---------- */
["OO","UML: classes","Em um diagrama de classes, a multiplicidade 0..* na extremidade da classe Pedido, em uma associação com Cliente, indica que",
["todo pedido pertence a exatamente um cliente.","um cliente pode ter nenhum, um ou muitos pedidos.","todo cliente tem pelo menos um pedido.","um pedido pode ter muitos clientes.","a associação é opcional dos dois lados."],1,
"A multiplicidade escrita em uma extremidade informa quantos objetos DAQUELA classe se ligam a um objeto da outra. Ler no sentido errado é o erro mais comum em modelagem.",null],

["OO","UML: classes","A diferença entre agregação e composição é que, na composição,",
["as partes continuam existindo mesmo depois que o objeto todo é destruído.","a destruição do objeto todo implica a destruição das partes.","a multiplicidade das extremidades não precisa ser declarada no diagrama.","o losango da extremidade do todo é desenhado vazio, e não preenchido.","o relacionamento é necessariamente de um para um nas duas extremidades."],1,
"Composição é todo-parte com dependência existencial e losango preenchido: destruído o pedido, morrem seus itens. Agregação (losango vazio) admite que a parte sobreviva ao todo.",null],

["OO","UML: classes","Uma classe abstrata em UML é representada com o nome",
["sublinhado.","em itálico.","entre chaves.","precedido de sinal negativo.","em maiúsculas."],1,
"Itálico marca abstrato (classe ou método). Sublinhado indica membro estático — confusão frequente. Chaves delimitam restrições (constraints).",null],

["OO","UML: classes","O símbolo # antes de um atributo em um diagrama de classes indica visibilidade",
["pública.","privada.","protegida.","de pacote.","estática."],2,
"A convenção é: + público, − privado, # protegido, ~ pacote. Protegido dá acesso à própria classe e às suas subclasses.",null],

["OO","UML: classes","Uma classe de associação é utilizada quando",
["duas classes do modelo possuem o mesmo nome e precisam ser diferenciadas entre si.","o próprio relacionamento entre duas classes possui atributos ou comportamento próprios.","é necessário representar herança múltipla, não suportada pela linguagem de destino.","a multiplicidade entre as duas classes é de um para um nas duas extremidades.","uma das classes envolvidas é abstrata e por isso não pode ser instanciada."],1,
"Caso clássico: Aluno e Disciplina ligados por Matrícula, que carrega data e nota — atributos que não pertencem nem ao aluno nem à disciplina, e sim ao vínculo entre eles.",null],

["OO","UML: classes","Considere o modelo: Curso 1 —— 1..* Turma, e Turma 1 —— 5..40 Aluno. Uma leitura correta é:",
["um curso pode existir sem nenhuma turma.","toda turma pertence a um único curso e comporta de 5 a 40 alunos.","um aluno pode estar em muitas turmas.","uma turma pode pertencer a vários cursos.","o número de alunos por turma é ilimitado."],1,
"A multiplicidade 1 no lado do Curso significa exatamente um curso por turma; 5..40 restringe a lotação. Restrições numéricas assim costumam ser quesito pontuado nas discursivas.",null],

["OO","UML: classes","A auto-associação (associação reflexiva) em uma classe Funcionário, com os papéis “gerente” e “subordinado”, serve para",
["indicar que a classe é abstrata e não pode gerar instâncias diretas.","representar que objetos da mesma classe se relacionam entre si, com papéis distintos.","estabelecer herança de uma classe para ela mesma, criando um ciclo.","definir um atributo estático compartilhado por todas as instâncias.","impedir a instanciação da classe fora do próprio pacote de origem."],1,
"Hierarquias organizacionais, estruturas de árvore e listas encadeadas se modelam assim. Nomear os papéis é obrigatório: sem eles, não se sabe qual extremidade é o gerente.",null],

["OO","UML: classes","Em um diagrama de classes, uma dependência (linha tracejada com seta aberta) de A para B significa que",
["A herda de B todos os atributos e operações não privados, especializando o comportamento herdado em tempo de compilação.","A utiliza B de forma transitória, por exemplo como parâmetro ou variável local, sem manter referência permanente.","A mantém internamente uma coleção de objetos B como atributo, sendo responsável por criar e destruir cada um deles.","A e B representam o mesmo conceito de domínio, modelado duas vezes por engano no diagrama.","A destrói os objetos B assim que a operação termina, liberando a memória que eles ocupavam."],1,
"Dependência é o vínculo mais fraco: uso passageiro, sem atributo que guarde a referência. Se A guardasse um B como atributo, seria associação.",null],

["OO","UML: classes","Considere as afirmações sobre generalização em UML:\nI. A subclasse herda atributos e operações da superclasse.\nII. A subclasse pode redefinir (sobrescrever) operações herdadas.\nIII. A generalização é representada por linha tracejada com seta preenchida.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, apenas.","I, II e III."],0,
"III é falsa: generalização usa linha CONTÍNUA com triângulo vazio. Linha tracejada com triângulo vazio é realização de interface — notação vizinha e frequentemente confundida.",null],

["OO","UML: classes","O estereótipo «interface» aplicado a uma classe indica que ela",
["encapsula os próprios atributos como privados, expondo-os apenas por métodos de acesso.","declara operações sem implementá-las, servindo de contrato para as classes que a realizam.","não pode ser estendida por herança, devendo ser reaproveitada somente por composição.","concentra a responsabilidade de persistir e recuperar os objetos do domínio no banco.","assegura a existência de uma única instância compartilhada por toda a aplicação."],1,
"Interface é contrato puro. A relação entre a classe concreta e a interface é a realização, desenhada com linha tracejada e triângulo vazio.",null],

["OO","UML: classes","Em um sistema de biblioteca, o requisito “um exemplar pertence a um único título, e o título deixa de existir se não houver mais nenhum exemplar catalogado” sugere modelar a relação Título–Exemplar como",
["associação simples com multiplicidade 1 para muitos.","composição, com Título como todo.","agregação, com Exemplar como todo.","generalização de Exemplar para Título.","dependência."],1,
"A dependência existencial descrita (a parte não faz sentido sem o todo, e o todo desaparece com elas) é o critério da composição. Note que o enunciado define o todo como Título.",null],

["OO","UML: classes","O que distingue um atributo derivado (notado com /) em um diagrama de classes é que ele",
["não pode ser lido pelos clientes da classe, sendo de uso estritamente interno.","é calculado a partir de outros atributos, em vez de armazenado.","pertence à classe e não às instâncias, tendo valor único compartilhado.","tem visibilidade privada obrigatória, por depender de outros atributos.","identifica unicamente cada instância, funcionando como chave primária."],1,
"“/idade”, calculada da data de nascimento, é o exemplo canônico. Marcar como derivado documenta que não há redundância a manter sincronizada.",null],

["OO","UML: classes","Em uma discursiva de modelagem, o enunciado exige “no máximo seis classes, com multiplicidades e pelo menos três métodos na classe Pedido”. Segundo o padrão de correção do exame, essas restrições",
["são sugestões de estilo, que orientam a resposta sem afetar a pontuação atribuída.","são quesitos de correção e sua violação implica perda de pontos.","só precisam ser observadas se houver tempo restante após a resposta principal.","aplicam-se somente ao diagrama de casos de uso, e não ao diagrama de classes.","podem ser substituídas por um texto que justifique a escolha feita pelo estudante."],1,
"Restrição numérica no comando é rubrica: “máximo seis classes” e “pelo menos três métodos” são conferidas item a item. Espelhar literalmente o comando é a conduta mais segura.",null],

["OO","UML: classes","Considere a asserção e a razão:\nI. Em diagramas de classes de domínio, classes de interface gráfica devem ser omitidas.\nPORQUE\nII. O modelo de domínio representa os conceitos do negócio, independentemente da tecnologia de apresentação.\nA respeito dessas asserções, assinale a alternativa correta.",
["As duas são verdadeiras e a II justifica a I.","As duas são verdadeiras, mas a II não justifica a I.","A I é verdadeira e a II é falsa.","A I é falsa e a II é verdadeira.","As duas são falsas."],0,
"O padrão oficial de resposta de uma das edições do exame diz literalmente que classes que não sejam de negócio devem ser ignoradas. A razão explica corretamente por quê.",null],

/* ---------- outros diagramas UML (8) ---------- */
["OO","UML: sequência","No diagrama de sequência, a linha vertical tracejada abaixo de um objeto representa",
["o tempo de vida (linha de vida) do objeto.","a ordem alfabética das mensagens.","a herança entre objetos.","o fluxo de dados persistidos.","o limite do sistema."],0,
"A linha de vida indica a existência do objeto ao longo do tempo. O retângulo estreito sobre ela é a ativação — o período em que o objeto executa uma operação.",null],

["OO","UML: sequência","Em um diagrama de sequência, um X ao final da linha de vida de um objeto indica",
["que o objeto está bloqueado.","a destruição do objeto.","um erro de execução.","o retorno de um valor nulo.","o fim do diagrama."],1,
"O X marca a destruição. A criação é indicada por mensagem com estereótipo «create» apontando para o objeto, que passa a aparecer mais abaixo no eixo do tempo.",null],

["OO","UML: sequência","O fragmento combinado com operador “loop” em um diagrama de sequência serve para",
["representar mensagens assíncronas, que não bloqueiam o remetente até o retorno.","delimitar um conjunto de mensagens repetidas enquanto uma condição for satisfeita.","delimitar o tratamento de uma exceção lançada durante a execução do fragmento.","separar visualmente os atores externos dos objetos internos do sistema.","marcar as mensagens de retorno que devolvem valor ao objeto que fez a chamada."],1,
"Os fragmentos combinados (alt, opt, loop, par) trouxeram controle de fluxo para o diagrama de sequência a partir da UML 2. “alt” é escolha, “opt” é opcional, “par” é paralelismo.",null],

["OO","UML: atividades","No diagrama de atividades, a barra grossa que divide um fluxo em vários fluxos concorrentes é chamada de",
["nó de decisão, que escolhe um entre vários caminhos mutuamente exclusivos.","bifurcação (fork).","junção (join).","nó inicial, que marca o ponto de partida do fluxo representado.","raia, que separa as atividades conforme o responsável por executá-las."],1,
"Fork divide em fluxos paralelos; join sincroniza e os reúne. O losango é decisão (escolha exclusiva) ou merge, e não implica paralelismo.",null],

["OO","UML: atividades","As raias (swimlanes) em um diagrama de atividades servem para",
["indicar a ordem cronológica das atividades.","associar cada atividade ao responsável por executá-la.","representar as exceções que podem interromper o fluxo de atividades.","numerar as mensagens trocadas entre os participantes do processo.","delimitar os trechos do fluxo que devem ser repetidos em iteração."],1,
"Raias respondem “quem faz o quê”. São especialmente úteis na modelagem de processos de negócio, quando a atividade atravessa vários departamentos.",null],

["OO","UML: estados","O diagrama de máquina de estados é mais adequado para modelar",
["a estrutura estática das classes do sistema e os relacionamentos que elas mantêm entre si no domínio.","o comportamento de um objeto que reage a eventos, passando por estados distintos ao longo de sua vida.","a distribuição física dos componentes pelos servidores e dispositivos em que serão implantados em produção.","a sequência temporal de mensagens trocadas entre os objetos durante a realização de uma operação.","os requisitos funcionais do sistema, organizados conforme a prioridade atribuída por cada interessado."],1,
"Objetos com ciclo de vida rico — Pedido (aberto, pago, enviado, entregue, cancelado) — são os candidatos naturais. Para interação entre objetos, usa-se sequência ou comunicação.",null],

["OO","UML: componentes/implantação","O diagrama de implantação (deployment) representa",
["as classes do domínio e os relacionamentos estruturais que elas mantêm entre si.","os nós de hardware ou ambientes de execução e os artefatos neles implantados.","a sequência temporal das mensagens trocadas entre os objetos em uma operação.","os estados pelos quais um objeto passa ao longo de todo o seu ciclo de vida.","os objetivos de valor que cada ator obtém ao interagir com o sistema."],1,
"É a visão física: servidores, contêineres, dispositivos, e quais artefatos rodam em cada um. Muito usado para documentar arquiteturas distribuídas e em nuvem.",null],

["OO","UML: geral","Sobre a UML, avalie:\nI. É uma linguagem de modelagem, não uma metodologia de desenvolvimento.\nII. Define diagramas estruturais e comportamentais.\nIII. Prescreve um processo de software a ser seguido.\nÉ correto o que se afirma em",
["I e II, apenas.","I e III, apenas.","II e III, apenas.","I, apenas.","I, II e III."],0,
"III é falsa e é a confusão mais cobrada: a UML é notação, não processo. Quem prescreve processo é o RUP, que usa a UML como notação.",null],

/* ---------- POO (10) ---------- */
["OO","POO","Analise a classe abaixo. O principal defeito de projeto nela é",
["a ausência de um método construtor, o que impede a inicialização do saldo no momento da criação.","a exposição direta do atributo saldo, que permite burlar a regra de negócio implementada em sacar().","o uso do tipo double para representar valores monetários, sujeito a erro de arredondamento em operações sucessivas.","o método sacar() não devolver valor algum, impedindo que o chamador saiba se a operação teve êxito.","a classe não implementar nenhuma interface, o que impede seu uso polimórfico por outros módulos."],1,
"Com o atributo público, qualquer código pode escrever conta.saldo = -5000 e contornar inteiramente a validação do método. Encapsular não é preciosismo: é o que garante que a regra de negócio seja o único caminho para alterar o estado.",
"public class Conta {\n    public double saldo;\n\n    public void sacar(double valor) {\n        if (valor <= saldo) {\n            saldo = saldo - valor;\n        } else {\n            System.out.println(\"Saldo insuficiente\");\n        }\n    }\n}"],

["OO","POO","Polimorfismo, em orientação a objetos, é a capacidade de",
["uma classe herdar simultaneamente de várias superclasses distintas.","objetos de tipos distintos responderem à mesma mensagem de formas específicas.","um atributo assumir valores de tipos diferentes conforme o contexto de uso.","um mesmo método aceitar listas de parâmetros distintas na mesma classe.","uma classe ser instanciada várias vezes, gerando objetos independentes."],1,
"É o que permite tratar Círculo e Quadrado uniformemente como Forma, chamando desenhar() sem saber o tipo concreto. Ter vários parâmetros é sobrecarga, mecanismo distinto.",null],

["OO","POO","Considere o código a seguir. A saída produzida é",
["Animal Animal","Cachorro Cachorro","Animal Cachorro","Cachorro Animal","erro de compilação"],2,
"O primeiro objeto é um Animal e usa a implementação da própria classe; o segundo é um Cachorro referenciado como Animal, e o polimorfismo faz valer a implementação sobrescrita. A decisão é pelo tipo do OBJETO, não pelo tipo da REFERÊNCIA.",
"class Animal {\n    void falar() { System.out.println(\"Animal\"); }\n}\nclass Cachorro extends Animal {\n    void falar() { System.out.println(\"Cachorro\"); }\n}\npublic class Main {\n    public static void main(String[] a) {\n        Animal x = new Animal();\n        Animal y = new Cachorro();\n        x.falar();\n        y.falar();\n    }\n}"],

["OO","POO","No código abaixo, os métodos calcular da classe Calculadora e o método calcular da classe Cientifica ilustram, respectivamente,",
["sobrescrita e sobrecarga.","sobrecarga e sobrescrita.","sobrecarga e sobrecarga.","sobrescrita e sobrescrita.","polimorfismo e encapsulamento."],1,
"Dentro de Calculadora há dois métodos de mesmo nome com listas de parâmetros diferentes: sobrecarga, resolvida em tempo de compilação. Em Cientifica, o método tem a MESMA assinatura da superclasse e substitui sua implementação: sobrescrita, resolvida em tempo de execução.",
"class Calculadora {\n    int calcular(int a, int b) { return a + b; }\n    int calcular(int a, int b, int c) { return a + b + c; }\n}\n\nclass Cientifica extends Calculadora {\n    int calcular(int a, int b) { return a * b; }\n}"],

["OO","POO","Uma classe abstrata difere de uma interface (no modelo clássico) porque a classe abstrata",
["não pode conter métodos implementados, declarando apenas as assinaturas a realizar.","pode conter estado (atributos) e implementação parcial, além de operações abstratas.","admite herança múltipla, permitindo que uma classe estenda várias delas ao mesmo tempo.","não pode ser estendida por outras classes, encerrando a hierarquia naquele ponto.","não pode declarar construtor, já que não é possível criar instâncias diretamente."],1,
"Classe abstrata compartilha estado e código comum entre subclasses; interface é contrato. Herança múltipla de classes não é permitida em Java e C#, mas múltiplas interfaces sim.",null],

["OO","POO","O código abaixo imprime um valor inesperado quando recebe um Quadrado. O princípio de projeto violado é",
["responsabilidade única.","substituição de Liskov.","segregação de interfaces.","inversão de dependência.","aberto/fechado."],1,
"O teste espera área 50 (5 × 10), mas o Quadrado força largura e altura iguais e devolve 100. A subclasse não pode substituir a superclasse sem quebrar a expectativa de quem a usa — é exatamente a violação de Liskov, e o caso é o exemplo canônico do princípio.",
"class Retangulo {\n    protected int largura, altura;\n    void setLargura(int l) { largura = l; }\n    void setAltura(int a)  { altura = a; }\n    int area() { return largura * altura; }\n}\n\nclass Quadrado extends Retangulo {\n    void setLargura(int l) { largura = altura = l; }\n    void setAltura(int a)  { largura = altura = a; }\n}\n\n// uso\nRetangulo r = new Quadrado();\nr.setLargura(5);\nr.setAltura(10);\nSystem.out.println(r.area());"],

["OO","POO","O princípio “aberto/fechado” (open/closed) preconiza que uma classe deve estar",
["aberta a modificações e fechada a extensões.","aberta a extensões e fechada a modificações.","fechada tanto a extensões quanto a modificações após ser validada.","aberta a extensões e também a modificações, conforme a necessidade.","aberta a modificações apenas para as classes do mesmo pacote."],1,
"Deve-se poder acrescentar comportamento sem editar o código já testado — em geral por herança, composição ou injeção de estratégias. Editar classe estável reintroduz risco de regressão.",null],

["OO","POO","Compare as duas soluções abaixo. A vantagem da versão B sobre a versão A é que a B",
["executa mais rápido em tempo de execução, por evitar a resolução dinâmica do método a cada chamada feita.","permite trocar o comportamento em tempo de execução, sem criar uma subclasse para cada combinação.","dispensa o uso de interfaces, já que o comportamento fica definido diretamente na classe concreta.","reduz o número de arquivos do projeto, concentrando o comportamento em menos classes.","ser a única abordagem compatível com a notação prevista pela UML para hierarquias de classes."],1,
"A herança fixa o comportamento em tempo de compilação: cada nova combinação exige uma subclasse, e a hierarquia explode combinatoriamente. A composição delega a um colaborador que pode ser substituído em execução — é a base do padrão Strategy e a razão da máxima “prefira composição a herança”.",
"// versão A — herança\nclass Pato { void nadar() { } }\nclass PatoQueVoa extends Pato { void voar() { } }\nclass PatoDeBorracha extends Pato { }\nclass PatoDeBorrachaQueVoa extends PatoDeBorracha { /* ... */ }\n\n// versão B — composição\nclass Pato {\n    private ComportamentoVoo voo;\n    void setVoo(ComportamentoVoo v) { this.voo = v; }\n    void voar() { voo.executar(); }\n}"],

["OO","POO","O acoplamento entre dois módulos é considerado indesejável quando é alto porque",
["aumenta a coesão interna dos módulos, que passam a concentrar mais responsabilidades.","uma alteração em um módulo tende a propagar mudanças no outro, elevando o custo de manutenção.","impede a compilação do projeto, já que os módulos passam a depender circularmente um do outro.","reduz o número total de classes do sistema, concentrando o código em menos arquivos.","violar as regras de sintaxe da linguagem, o que impede a validação estática do projeto na compilação."],1,
"A dupla clássica: baixo acoplamento e alta coesão. Alto acoplamento significa que mexer aqui quebra ali, o que é exatamente o que encarece manutenção.",null],

["OO","POO","Alta coesão em uma classe significa que",
["a classe concentra um número elevado de métodos públicos em sua interface.","os elementos da classe estão fortemente relacionados a um único propósito bem definido.","a classe depende de muitas outras para cumprir as responsabilidades que assume.","a classe é abstrata e delega às subclasses a implementação de seu comportamento.","a classe implementa várias interfaces distintas, atendendo a diferentes clientes."],1,
"Coesão mede foco. A classe que faz cálculo fiscal, gera PDF e envia e-mail tem baixa coesão e três motivos para mudar — violando também o princípio da responsabilidade única.",null],

/* ---------- padrões de projeto (7) ---------- */
["OO","Padrões de projeto","O código abaixo implementa um padrão de projeto. Os dois elementos que o caracterizam são",
["o método estático de acesso e o atributo público que guarda a referência compartilhada.","o construtor privado e o método estático que controla a instância única.","a herança da superclasse e a sobrescrita do método responsável pela criação do objeto.","a declaração da interface e a classe abstrata que fornece a implementação parcial.","o laço de repetição e a condição de parada que encerram a criação de novas instâncias."],1,
"O construtor privado impede que qualquer código execute new; o método estático passa a ser o único ponto de acesso e devolve sempre a mesma instância. É o Singleton. Cuidado: usado em excesso, vira variável global disfarçada e dificulta o teste, por não permitir substituir a instância.",
"public class Configuracao {\n    private static Configuracao instancia;\n\n    private Configuracao() { }\n\n    public static Configuracao obter() {\n        if (instancia == null) {\n            instancia = new Configuracao();\n        }\n        return instancia;\n    }\n}"],

["OO","Padrões de projeto","O código abaixo apresenta um encadeamento de condicionais que cresce a cada nova modalidade de frete. O padrão de projeto indicado para reestruturá-lo é",
["Singleton, criando uma instância única de calculadora.","Strategy, encapsulando cada cálculo em uma classe com interface comum.","Adapter, convertendo a interface do cálculo.","Observer, notificando os interessados no frete.","Facade, escondendo o cálculo atrás de uma fachada."],1,
"O sintoma é clássico: cada nova modalidade obriga a editar um método já testado, violando o princípio aberto/fechado. Strategy transforma cada ramo em uma classe própria, e acrescentar modalidade passa a ser criar classe, não alterar código existente.",
"public double calcularFrete(String tipo, double peso) {\n    if (tipo.equals(\"SEDEX\")) {\n        return peso * 2.5 + 10;\n    } else if (tipo.equals(\"PAC\")) {\n        return peso * 1.2 + 5;\n    } else if (tipo.equals(\"RETIRADA\")) {\n        return 0;\n    }\n    throw new IllegalArgumentException(\"tipo desconhecido\");\n}"],

["OO","Padrões de projeto","O padrão Observer resolve o problema de",
["adaptar interfaces incompatíveis entre classes já existentes, sem alterar o código de nenhuma delas.","notificar automaticamente múltiplos objetos dependentes quando o estado de um objeto observado muda.","controlar o acesso a um objeto custoso.","compor objetos em estruturas de árvore.","separar a construção de um objeto complexo de sua representação final, permitindo variar o resultado."],1,
"É a base do modelo de eventos e da ligação de dados em interfaces gráficas. O observado não conhece os observadores concretos, apenas a interface de notificação.",null],

["OO","Padrões de projeto","O padrão Adapter tem por finalidade",
["garantir que exista uma única instância da classe em toda a aplicação, oferecendo um ponto global de acesso controlado a ela.","converter a interface de uma classe em outra interface esperada pelo cliente, permitindo a colaboração entre classes incompatíveis.","acrescentar responsabilidades a um objeto em tempo de execução, envolvendo-o sucessivamente em camadas que ampliam seu comportamento.","definir o esqueleto de um algoritmo na superclasse, deixando passos específicos para as subclasses.","encapsular uma requisição como objeto, permitindo enfileirá-la, registrá-la em log ou desfazê-la."],1,
"É o padrão da integração com bibliotecas de terceiros e sistemas legados: em vez de alterar o código existente, envolve-se a classe com um adaptador que fala a interface esperada.",null],

["OO","Padrões de projeto","Os padrões GoF classificam-se em três categorias:",
["estruturais, comportamentais e arquiteturais.","de criação, estruturais e comportamentais.","de análise, de projeto e de implementação.","funcionais, não funcionais e mistos.","simples, compostos e complexos."],1,
"Criação (Factory Method, Abstract Factory, Builder, Prototype, Singleton), estruturais (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy) e comportamentais (os demais).",null],

["OO","Padrões de projeto","O padrão MVC separa a aplicação de modo que o Controller seja responsável por",
["concentrar as regras de negócio e o estado dos dados manipulados pela aplicação.","interpretar a entrada do usuário e coordenar a atualização do modelo e da visão.","renderizar a interface gráfica e formatar os dados recebidos para exibição ao usuário.","persistir os dados no banco e recuperar os registros solicitados pela aplicação.","validar o esquema do banco de dados antes de cada operação de leitura ou escrita."],1,
"Modelo guarda dados e regras; visão apresenta; controlador recebe a entrada e orquestra. Colocar regra de negócio no controlador é o desvio mais comum, e produz o “controlador gordo”.",null],

["OO","Padrões de projeto","O padrão Factory Method difere do Abstract Factory porque o Factory Method",
["cria famílias inteiras de produtos relacionados entre si, garantindo que os objetos produzidos sejam coerentes uns com os outros.","define uma operação para criar um objeto, deixando às subclasses a decisão de qual classe concreta instanciar.","garante que a classe tenha uma única instância em toda a aplicação e oferece um ponto global de acesso a essa instância.","adapta interfaces incompatíveis, permitindo que classes já existentes colaborem entre si.","é um padrão comportamental, voltado à distribuição de responsabilidades entre os objetos."],1,
"Factory Method cria UM produto e delega a decisão à subclasse. Abstract Factory cria FAMÍLIAS de produtos coerentes entre si, tipicamente por meio de vários Factory Methods.",null],

/* ---------- arquitetura de software (6) ---------- */
["OO","Arquitetura","A arquitetura em microsserviços caracteriza-se por",
["um único artefato implantável contendo todas as funcionalidades.","serviços pequenos, implantáveis de forma independente, cada um com sua responsabilidade de negócio.","ausência de comunicação entre componentes.","proibir o uso de contêineres, que introduziriam uma camada de isolamento desnecessária entre serviços.","banco de dados único, compartilhado obrigatoriamente por todos os serviços da aplicação."],1,
"Implantação independente é o traço definidor. Compartilhar um banco entre serviços é justamente o antipadrão que recria o acoplamento que a arquitetura pretendia eliminar.",null],

["OO","Arquitetura","Uma desvantagem real da arquitetura em microsserviços frente à monolítica é",
["a impossibilidade de escalar componentes isoladamente, já que todos compartilham o mesmo processo em execução.","o aumento da complexidade operacional, com latência de rede, consistência distribuída e observabilidade.","a obrigatoriedade de usar uma única linguagem de programação em todos os serviços da aplicação.","a impossibilidade de adotar implantação contínua, já que cada serviço depende da liberação dos demais.","a perda da modularidade do sistema, que passa a ser tratado como um bloco único de responsabilidades."],1,
"A questão de 2021 já apontava esse trade-off. Microsserviços trocam complexidade de código por complexidade de operação — vantajoso apenas acima de certa escala organizacional.",null],

["OO","Arquitetura","Na arquitetura em três camadas (apresentação, negócio e dados), o principal benefício é",
["reduzir o número total de linhas de código escritas, já que a lógica fica concentrada em um só ponto.","permitir que cada camada evolua com impacto limitado nas demais, graças à separação de responsabilidades.","dispensar o uso de banco de dados.","garantir a ausência de defeitos na camada de negócio, que passa a ser validada de forma isolada das demais.","eliminar a necessidade de testes de integração, pois cada camada é validada isoladamente na construção."],1,
"Separar responsabilidades limita o raio de propagação da mudança: trocar a interface web por um aplicativo móvel não deveria exigir reescrever regra de negócio.",null],

["OO","Arquitetura","Uma API REST é considerada stateless quando",
["os dados manipulados pela aplicação ficam apenas em memória durante a execução, sem qualquer persistência em banco de dados no servidor.","cada requisição contém toda a informação necessária para ser processada, sem depender de estado de sessão no servidor.","todas as operações são realizadas exclusivamente com o método GET, o que dispensa o envio de corpo nas requisições e simplifica o cliente.","as respostas não trazem códigos de status HTTP, cabendo ao cliente interpretar o conteúdo devolvido.","apenas um cliente por vez pode consumir a API, o que evita conflitos de concorrência no servidor."],1,
"Ausência de estado no servidor é o que permite escalar horizontalmente: qualquer instância atende qualquer requisição. Não confundir com não persistir dados — o recurso continua no banco.",null],

["OO","Arquitetura","Analise as rotas abaixo. A única que segue corretamente as convenções REST é",
["a rota 1","a rota 2","a rota 3","a rota 4","a rota 5"],2,
"REST usa o VERBO HTTP para expressar a operação e a URI para identificar o recurso, no plural. As rotas 1, 4 e 5 colocam o verbo na URI; a rota 2 usa GET para produzir efeito colateral, o que quebra a idempotência esperada do método. Só a rota 3 combina DELETE com o identificador do recurso.",
"1)  POST   /excluirCliente?id=42\n2)  GET    /clientes/42/excluir\n3)  DELETE /clientes/42\n4)  PUT    /clientes/excluir/42\n5)  GET    /api/removerCliente/42"],

["OO","Arquitetura","O uso de contêineres (por exemplo, Docker) na implantação de aplicações traz como principal benefício",
["a eliminação da necessidade de testes em ambiente de homologação, já que o contêiner é idêntico ao de produção.","o empacotamento da aplicação com suas dependências, garantindo comportamento consistente entre ambientes.","o aumento automático do desempenho do código.","a dispensa do controle de versão.","a substituição do sistema operacional hospedeiro, que passa a ser desnecessário na máquina que executa."],1,
"Contêiner ataca o clássico “na minha máquina funciona” ao levar as dependências junto. Ele compartilha o núcleo do sistema hospedeiro, ao contrário da máquina virtual, que virtualiza o hardware.",null],
["OO","Arquitetura","Uma equipe decide dividir um sistema monolítico em microsserviços. O ganho pretendido que melhor justifica a decisão é",
["a redução da complexidade geral do sistema, que passa a ter partes menores e mais simples de compreender isoladamente.","permitir que times evoluam e implantem partes do sistema de forma independente, sem coordenar uma entrega única.","a eliminação das falhas de integração, já que cada serviço passa a validar seus próprios dados antes de processá-los.","a redução do custo de infraestrutura, por permitir que cada serviço utilize menos memória que o sistema anterior.","o aumento automático do desempenho, decorrente da distribuição do processamento entre vários servidores da rede."],1,
"O ganho é organizacional antes de ser técnico: times que entregam sem esperar uns aos outros. A complexidade não some — ela migra do código para a rede, e aparece como latência, falha parcial e consistência distribuída.",null],

["OO","Arquitetura","Em uma arquitetura em camadas, a regra de que a camada de apresentação não deve acessar diretamente a camada de dados existe para",
["reduzir o número de classes do sistema, concentrando as responsabilidades em menos componentes de código.","preservar o encapsulamento das regras de negócio, evitando que validações sejam contornadas por caminhos alternativos.","acelerar as consultas, uma vez que o tráfego passa a ser intermediado por um componente otimizado para esse fim.","permitir a substituição do banco de dados sem qualquer alteração no restante do código-fonte da aplicação.","atender a exigência das ferramentas de mapeamento objeto-relacional, que impedem esse tipo de acesso direto."],1,
"Se a tela vai direto ao banco, a regra que estava no meio deixa de ser aplicada naquele caminho. Com o tempo o sistema passa a ter duas verdades sobre o mesmo dado, e nenhuma delas é confiável.",null],

["OO","Análise de sistemas","Durante a análise de um sistema de matrícula, o analista identifica que a regra sobre o número máximo de disciplinas varia conforme o curso. Registrar essa regra como parâmetro configurável, em vez de fixá-la no código,",
["é desaconselhável, pois aumenta a complexidade da implementação sem trazer benefício mensurável ao usuário final.","reconhece que a regra é volátil e desloca sua manutenção para quem conhece o negócio, sem exigir nova implantação.","transfere ao usuário a responsabilidade técnica pelo funcionamento correto do sistema de matrícula da instituição.","só se justifica quando o sistema atende mais de uma instituição de ensino simultaneamente na mesma instalação.","elimina a necessidade de testes sobre a regra, já que o valor deixa de estar presente no código-fonte da aplicação."],1,
"O critério é a volatilidade esperada: o que muda por decisão de negócio não deveria exigir ciclo de desenvolvimento. Vale a ressalva de que parametrizar tudo é o excesso oposto, e cobra seu preço em complexidade.",null],

["OO","Análise de sistemas","Um sistema legado precisa integrar-se a um serviço externo cuja interface é incompatível com a esperada pela aplicação. A solução estrutural mais adequada é",
["alterar o código do sistema legado em todos os pontos de chamada, adaptando-os ao formato exigido pelo serviço.","criar um adaptador que traduza entre as duas interfaces, isolando o restante do sistema da forma do serviço externo.","substituir o serviço externo por outro cuja interface coincida com a que a aplicação já utiliza internamente.","duplicar a camada de integração, mantendo uma versão para cada formato de interface envolvido na comunicação.","postergar a integração até que o fornecedor do serviço disponibilize uma interface compatível com o sistema."],1,
"O adaptador concentra o atrito em um ponto só. Espalhar a tradução pelos pontos de chamada transforma qualquer mudança futura do fornecedor em uma varredura pelo sistema inteiro.",null],

["OO","Arquitetura","O acoplamento entre dois módulos é considerado alto quando",
["ambos pertencem ao mesmo pacote e compartilham as convenções de nomenclatura adotadas pela equipe de desenvolvimento.","um depende de detalhes internos do outro, de modo que mudanças na implementação de um obrigam a alterar o outro.","os dois são chamados pelo mesmo componente controlador durante a execução de um caso de uso do sistema.","eles trocam grande volume de dados, ainda que a comunicação ocorra por interface pública bem definida entre eles.","ambos foram escritos pela mesma pessoa, o que tende a produzir soluções semelhantes em ambos os módulos."],1,
"A medida é sensibilidade à mudança, não proximidade nem volume de tráfego. Dois módulos podem trocar muitos dados com acoplamento baixo, desde que a conversa aconteça por um contrato estável.",null],

["OO","Análise de sistemas","Ao levantar requisitos, o analista ouve do cliente o pedido de um botão para exportar a planilha e enviá-la por e-mail ao gerente todo dia 5. A postura adequada é",
["implementar exatamente o que foi pedido, pois o cliente é a autoridade sobre as necessidades do seu próprio negócio.","investigar a necessidade por trás do pedido, que pode ser atendida melhor por um relatório disponível sob demanda.","recusar o pedido, por tratar-se de solução técnica proposta por quem não domina as alternativas de implementação.","registrar o pedido como requisito não funcional, uma vez que descreve uma característica operacional do sistema.","adiar a decisão para a fase de projeto, quando a equipe técnica definirá a melhor forma de atender à solicitação."],1,
"O cliente descreveu a solução que imaginou, não o problema que tem. Talvez o gerente só precise do número atualizado — e aí um painel resolve melhor que um anexo mensal que ninguém abre.",null],

]);
