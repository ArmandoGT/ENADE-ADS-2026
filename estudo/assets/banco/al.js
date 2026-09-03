/* Banco IA — Algoritmos e estruturas de dados (45 questões, maioria com código).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- traço de código (10) ---------- */
["AL","Traço de código","Após a execução do trecho, o valor impresso é",
["10","21","15","28","36"],1,
"O laço acumula 1+2+3+4+5+6 = 21, porque a condição é i <= 6 e o corpo executa seis vezes. Trocar <= por < produziria 15, a soma até 5, e é o erro de limite que a questão persegue. Somar até 7 daria 28, e até 8 daria 36 — ambos supõem mais iterações do que o laço faz. E 10 é a soma até 4, de quem interrompe cedo demais. Em laço com contador, o valor final depende inteiramente de o limite ser inclusivo ou não.",
"01  soma <- 0\n02  para i de 1 ate 6 faca\n03      soma <- soma + i\n04  fim-para\n05  escreva(soma)",
 {id:"al-0001",hab:"I"}],

["AL","Traço de código","O valor final de x após a execução é",
["3","5","13","8","21"],3,
"É Fibonacci iterativo. Partindo de a=1, b=1, após 4 iterações temos os pares (1,2), (2,3), (3,5), (5,8). O valor de b ao final, atribuído a x, é 8.",
"01  a <- 1\n02  b <- 1\n03  para i de 1 ate 4 faca\n04      t <- a + b\n05      a <- b\n06      b <- t\n07  fim-para\n08  x <- b\n09  escreva(x)",
 {id:"al-0002",hab:"I"}],

["AL","Traço de código","Considere a matriz M 3×3 preenchida pelo trecho abaixo. O valor de M[2][3] é",
["5","7","6","8","9"],1,
"A fórmula é M[i][j] = i + j + 2. Para i=2 e j=3: 2 + 3 + 2 = 7. Ler os índices em base 0, tomando M[2][3] como i=1 e j=2, dá 5. Trocar a constante por 1 dá 6. O 8 é o valor de M[3][3], de quem toma o último elemento em vez do pedido, e 9 sairia de i + j + 4. Verifique sempre se o índice do enunciado é base 1 ou base 0 — aqui os laços vão de 1 a 3, então a base é 1.",
"01  para i de 1 ate 3 faca\n02      para j de 1 ate 3 faca\n03          M[i][j] <- i + j + 2\n04      fim-para\n05  fim-para",
 {id:"al-0003",hab:"I"}],

["AL","Traço de código","Após a execução, o vetor v contém",
["[1, 2, 3, 4, 5]","[5, 3, 1, 4, 2]","[1, 3, 5, 2, 4]","[5, 4, 3, 2, 1]","[2, 4, 6, 8, 10]"],3,
"O laço percorre i de 1 a 5 gravando na posição espelhada 6-i, o que inverte a ordem: v fica [5, 4, 3, 2, 1]. Quem ignora o espelhamento e lê a linha como v[i] <- i obtém [1, 2, 3, 4, 5]. As sequências [5, 3, 1, 4, 2] e [1, 3, 5, 2, 4] correspondem a saltos alternados, que nenhum passo do trecho produz. E [2, 4, 6, 8, 10] seria o resultado de gravar 2i em vez de i. É o padrão de inversão de vetor sem estrutura auxiliar.",
"01  para i de 1 ate 5 faca\n02      v[6 - i] <- i\n03  fim-para",
 {id:"al-0004",hab:"I"}],

["AL","Traço de código","O trecho a seguir conta quantos elementos do vetor são pares. O valor final de c é",
["1","2","3","4","5"],2,
"Os elementos são 4, 7, 10, 3 e 8. São pares 4, 10 e 8, logo c = 3. O teste resto(x, 2) = 0 é o de paridade: trocá-lo por resto(x, 2) = 1 conta os ímpares, 7 e 3, e devolve 2. Considerar par apenas o que tem um dígito deixaria 4 e 8, também 2. Incluir o 7 por engano daria 4. E 5 é o tamanho do vetor, resposta de quem conta elementos em vez de aplicar a condição.",
"01  v <- [4, 7, 10, 3, 8]\n02  c <- 0\n03  para i de 1 ate 5 faca\n04      se resto(v[i], 2) = 0 entao\n05          c <- c + 1\n06      fim-se\n07  fim-para\n08  escreva(c)",
 {id:"al-0005",hab:"I"}],

["AL","Traço de código","A função abaixo é chamada com n = 4. O valor retornado é",
["24","10","16","4","64"],0,
"Fatorial recursivo: f(4) = 4 × f(3) = 4 × 3 × 2 × 1 = 24. A condição de parada n <= 1 devolve 1 e encerra a recursão; sem ela a chamada desceria indefinidamente. Somar em vez de multiplicar daria 10, que é 4+3+2+1. Elevar ao quadrado daria 16, e 64 sai de 4³ — os dois trocam recursão por potência. E 4 é o próprio argumento, resposta de quem imagina que a função devolve n já na primeira chamada.",
"funcao f(n)\n    se n <= 1 entao\n        retorne 1\n    senao\n        retorne n * f(n - 1)\n    fim-se\nfim-funcao",
 {id:"al-0006",hab:"I"}],

["AL","Traço de código","Considere a sequência de operações sobre uma pilha inicialmente vazia. O valor desempilhado por último é",
["10","20","30","40","a pilha fica vazia antes"],0,
"Pilha é LIFO. Entram 10, 20 e 30; o primeiro desempilhar retira o 30; entra o 40; os desempilhamentos seguintes retiram 40, depois 20, e por fim 10. O primeiro a entrar é o último a sair. A pilha não fica vazia antes do quarto desempilhar: foram quatro inserções contra quatro remoções, e é justamente a última que devolve o 10.",
"empilha(10)\nempilha(20)\nempilha(30)\ndesempilha()\nempilha(40)\ndesempilha()\ndesempilha()\ndesempilha()",
 {id:"al-0007",hab:"I"}],

["AL","Traço de código","Considere a sequência de operações sobre uma fila inicialmente vazia. Após as operações, o elemento no início da fila é",
["10","30","20","40","a fila está vazia"],1,
"Fila é FIFO. Entram 10, 20 e 30; a primeira remoção retira o 10, o mais antigo; entra o 40; a segunda remoção retira o 20. Restam [30, 40], com o 30 no início. Responder 10 é esquecer que ele saiu na primeira remoção; responder 20 é contar uma remoção a menos; responder 40 é ler o fim da fila em vez do início. E a fila não está vazia: quatro entradas contra duas saídas deixam dois elementos.",
"enfileira(10)\nenfileira(20)\nenfileira(30)\ndesenfileira()\nenfileira(40)\ndesenfileira()",
 {id:"al-0008",hab:"I"}],

["AL","Traço de código","O trecho procura o maior valor do vetor, mas contém um defeito. A correção adequada é",
["trocar a condição da linha 04 por v[i] < maior.","inicializar maior com v[1] em vez de 0, na linha 02.","iniciar o laço em i = 2, na linha 03.","trocar a atribuição da linha 05 por maior <- i.","remover o fim-se da linha 06."],1,
"Inicializar com zero falha quando todos os elementos são negativos: o algoritmo devolveria 0, valor que sequer está no vetor. Inicializar com o primeiro elemento é a forma robusta. Trocar a condição por v[i] < maior transformaria a busca do maior na busca do menor, e com a variável em 0 devolveria -9. Iniciar o laço em i = 2 deixaria de comparar o primeiro elemento, o que só serviria se ele já fosse a referência — que é exatamente a correção certa, feita no lugar errado. Trocar a atribuição por maior <- i guardaria o índice em vez do valor. E remover o fim-se produz erro de sintaxe, não conserto.",
"01  v <- [-5, -2, -9, -1]\n02  maior <- 0\n03  para i de 1 ate 4 faca\n04      se v[i] > maior entao\n05          maior <- v[i]\n06      fim-se\n07  fim-para\n08  escreva(maior)",
 {id:"al-0009",hab:"I"}],

["AL","Traço de código","O código percorre a matriz e acumula apenas os elementos da diagonal principal. O valor de s é",
["6","18","15","25","45"],2,
"A diagonal principal reúne os elementos em que i = j: 1, 5 e 9, cuja soma é 15. O 45 é a soma dos nove elementos, de quem ignora o teste da linha 05. O 18 é a soma da terceira coluna (3 + 6 + 9). O 25 não corresponde a linha, coluna nem diagonal alguma. E 6 seria 1 + 5, parando antes do terceiro termo. Note que a diagonal secundária, em que i + j = 4, também soma 15 nesta matriz — coincidência que não vale em geral.",
"01  M <- [[1,2,3],[4,5,6],[7,8,9]]\n02  s <- 0\n03  para i de 1 ate 3 faca\n04      para j de 1 ate 3 faca\n05          se i = j entao\n06              s <- s + M[i][j]\n07          fim-se\n08      fim-para\n09  fim-para",
 {id:"al-0010",hab:"I"}],

/* ---------- ordenação e busca (8) ---------- */
["AL","Ordenação","No algoritmo bubble sort, após a primeira passagem completa sobre o vetor [5, 1, 4, 2, 8], o resultado é",
["[1, 2, 4, 5, 8]","[8, 5, 4, 2, 1]","[1, 5, 4, 2, 8]","[5, 1, 4, 2, 8]","[1, 4, 2, 5, 8]"],4,
"Comparando pares adjacentes: (5,1) troca → [1,5,4,2,8]; (5,4) troca → [1,4,5,2,8]; (5,2) troca → [1,4,2,5,8]; (5,8) não troca. Ao fim da primeira passagem só o maior elemento está garantidamente no lugar. O vetor [1, 2, 4, 5, 8] é o resultado de todas as passagens, não da primeira. O vetor [1, 5, 4, 2, 8] para logo após a primeira troca. O vetor [5, 1, 4, 2, 8] é a entrada intocada. E [8, 5, 4, 2, 1] é ordem decrescente, que a comparação por maior não produz.",null,
 {id:"al-0011",hab:"X"}],

["AL","Ordenação","A complexidade de tempo do bubble sort no pior caso é",
["O(1)","O(log n)","O(n)","O(n log n)","O(n²)"],4,
"Dois laços aninhados sobre n elementos dão O(n²) no pior caso e no caso médio. O(1) seria tempo constante, independente do tamanho — impossível para um algoritmo que precisa ao menos percorrer o vetor. O(log n) é o custo de dividir o problema pela metade a cada passo, como na busca binária, e o bubble sort não divide nada. O(n) é o melhor caso, quando o vetor já está ordenado e a otimização interrompe na primeira passagem sem troca. E O(n log n) é o patamar do mergesort e do quicksort, que a comparação par a par não alcança.",null,
 {id:"al-0012",hab:"C"}],

["AL","Ordenação","O insertion sort é particularmente eficiente quando",
["o vetor está em ordem inversa.","o vetor é muito grande.","o vetor tem elementos repetidos.","o vetor já está quase ordenado.","os elementos são do tipo texto."],3,
"Em vetor quase ordenado o laço interno quase não desloca elementos, e o desempenho se aproxima de O(n). Em ordem inversa cai para o pior caso, O(n²).",null,
 {id:"al-0013",hab:"C"}],

["AL","Ordenação","A complexidade média do quicksort e a do mergesort são, respectivamente,",
["O(n²) e O(n²)","O(n log n) e O(n²)","O(n) e O(n log n)","O(n log n) e O(n log n)","O(log n) e O(n)"],3,
"Ambos são O(n log n) no caso médio. A diferença aparece nos extremos: o quicksort degrada para O(n²) com pivô ruim, enquanto o mergesort garante O(n log n) sempre, ao custo de memória adicional O(n). Responder O(n²) e O(n²) atribui ao mergesort uma degradação que ele não tem. Responder O(n log n) e O(n²) inverte as fragilidades dos dois. O(n) e O(n log n) suporia ordenação linear por comparação, impossível abaixo de n log n. E O(log n) e O(n) propõe custos menores do que o de simplesmente ler o vetor inteiro.",null,
 {id:"al-0014",hab:"C"}],

["AL","Busca","A busca binária exige, como pré-condição, que",
["o vetor tenha tamanho par.","não existam elementos repetidos.","o vetor esteja ordenado.","o vetor seja de inteiros.","o valor procurado exista no vetor."],2,
"Sem ordenação não há como decidir para qual metade seguir — e o algoritmo devolve resultado errado silenciosamente, sem acusar nada. O tamanho não precisa ser par: a divisão inteira trata o ímpar sem problema. Elementos repetidos são admitidos; o que se perde é a garantia de qual ocorrência será encontrada. Não precisa ser vetor de inteiros, basta existir ordem total entre os elementos, o que vale para texto e para data. E o valor procurado não precisa existir no vetor: é justamente para responder “não está” que o algoritmo devolve -1.",null,
 {id:"al-0015",hab:"C"}],

["AL","Busca","Em um vetor ordenado com 1.000 elementos, o número máximo de comparações da busca binária é aproximadamente",
["100","50","10","500","1000"],2,
"São ⌈log₂(1000)⌉ ≈ 10 comparações, porque cada passo descarta metade do espaço de busca. O 500 é a metade do vetor, de quem imagina que a busca binária corta o trabalho pela metade uma única vez. O 100 é um décimo e 50 um vigésimo: os dois supõem redução proporcional, e não logarítmica. E 1000 é o custo da busca sequencial no pior caso — o contraste que a questão quer estabelecer, já que dobrar o vetor acrescenta uma comparação à binária e mil à sequencial.",null,
 {id:"al-0016",hab:"C"}],

["AL","Busca","O trecho implementa a busca binária, mas contém um defeito. A correção correta é",
["trocar a linha 03 por enquanto ini < fim faca.","trocar a condição da linha 05 por v[meio] >= x.","na linha 08, atribuir fim <- meio.","inicializar meio antes do laço.","na linha 06, atribuir ini <- meio + 1."],4,
"Atribuir ini <- meio não reduz o intervalo quando meio coincide com ini, e o laço nunca termina; o correto é ini <- meio + 1, porque a posição meio acabou de ser descartada. Trocar a linha 03 por ini < fim faria a busca ignorar o intervalo de um único elemento, perdendo o valor quando ele está justamente ali. Trocar a condição de igualdade por v[meio] >= x devolveria a primeira posição maior ou igual, que responde a outra pergunta. Atribuir fim <- meio na linha 08 é o espelho do mesmo defeito e trava do mesmo modo. E inicializar meio antes do laço não muda nada: a variável é recalculada na primeira iteração.",
"01  ini <- 1\n02  fim <- n\n03  enquanto ini <= fim faca\n04      meio <- (ini + fim) div 2\n05      se v[meio] = x entao retorne meio\n06      senao se v[meio] < x entao ini <- meio\n07      senao fim <- meio - 1\n08      fim-se\n09  fim-enquanto\n10  retorne -1",
 {id:"al-0017",hab:"I"}],

["AL","Complexidade","A notação O(1) indica que o tempo de execução",
["cresce proporcionalmente ao tamanho da entrada processada pelo algoritmo.","cresce de forma logarítmica, dobrando a entrada a cada passo adicional.","é constante, independentemente do tamanho da entrada.","permanece sempre abaixo de um segundo, qualquer que seja a entrada.","depende principalmente do hardware em que o algoritmo é executado."],2,
"O(1) fala da taxa de crescimento, não de velocidade absoluta: acessar v[i] custa o mesmo com 10 ou com 10 milhões de elementos. Crescer proporcionalmente ao tamanho da entrada é O(n). Crescer de forma logarítmica é O(log n), e a alternativa ainda descreve o mecanismo ao contrário: é o passo que corta a entrada pela metade, não a entrada que dobra a cada passo. Permanecer abaixo de um segundo é promessa de tempo absoluto, que notação assintótica nenhuma faz. E depender do hardware vale para o tempo medido de qualquer algoritmo — é exatamente o que a notação abstrai.",null,
 {id:"al-0018",hab:"C"}],

/* ---------- estruturas de dados (11) ---------- */
["AL","Pilha","A estrutura de dados adequada para implementar o mecanismo de “desfazer” (undo) de um editor é",
["pilha.","fila.","árvore binária de busca.","tabela hash.","grafo."],0,
"A última ação realizada é a primeira a ser desfeita: comportamento LIFO, que é o da pilha. A fila devolveria a ação mais antiga, desfazendo o trabalho pelo começo. A árvore binária de busca organiza por chave, e a ordem que importa aqui é a cronológica. A tabela hash dá acesso direto por chave, mas não guarda ordem nenhuma. E o grafo modela relações entre elementos, sem noção de topo nem de sequência de retirada.",null,
 {id:"al-0019",hab:"C"}],

["AL","Fila","O comportamento de uma fila é descrito pela sigla",
["LIFO.","RANDOM.","LILO.","FILO.","FIFO."],4,
"FIFO é First In, First Out: o primeiro a entrar é o primeiro a sair, como numa fila de atendimento. LIFO, Last In First Out, é a pilha. FILO é outro nome para essa mesma pilha, dito do ponto de vista da saída. LILO descreveria o mesmo comportamento do FIFO por outro ângulo, mas não é termo consagrado. E RANDOM não nomeia disciplina de atendimento alguma: estrutura que devolve elemento arbitrário deixa de ser fila.",null,
 {id:"al-0020",hab:"C"}],

["AL","Fila","Uma fila circular sobre um vetor de tamanho fixo é usada para",
["reaproveitar as posições liberadas no início, evitando o deslocamento de todos os elementos a cada remoção.","permitir a remoção de elementos em qualquer posição da fila, e não apenas na extremidade em que eles foram inseridos.","ordenar os elementos automaticamente conforme entram, de modo que a remoção sempre devolva o menor deles.","permitir a atribuição de prioridade entre os elementos, alterando a ordem natural de atendimento.","armazenar elementos de tipos distintos na mesma estrutura, sem necessidade de declaração prévia do tipo."],0,
"Na fila linear sobre vetor, ou se deslocam todos os elementos a cada remoção, ao custo de O(n), ou o espaço do início se perde. A circular resolve com aritmética modular sobre os índices. Ela não permite a remoção de elementos em qualquer posição: continua havendo uma única extremidade de saída. Não ordena os elementos conforme entram nem faz a remoção devolver o menor deles — isso é fila de prioridade ou heap. Atribuir prioridade, alterando a ordem natural de atendimento, é da mesma fila de prioridade e não da circular. E armazenar tipos distintos sem declaração prévia é propriedade da linguagem, não da estrutura.",null,
 {id:"al-0021",hab:"C"}],

["AL","Lista encadeada","A principal vantagem da lista encadeada sobre o vetor é",
["a inserção e a remoção sem deslocar os demais elementos, com alocação dinâmica.","o acesso direto a qualquer posição em tempo constante, pelo índice do elemento.","o menor consumo de memória por elemento, por não armazenar referências extras.","a manutenção automática dos elementos em ordem crescente após cada inserção.","a melhor localidade de cache, por manter os elementos contíguos na memória."],0,
"A lista troca acesso direto por inserção e remoção baratas. Note que os outros itens são vantagens do VETOR: acesso O(1), menor consumo por elemento (sem ponteiros) e melhor localidade de cache.",null,
 {id:"al-0022",hab:"C"}],

["AL","Lista encadeada","Em uma lista simplesmente encadeada, para remover um nó é necessário conhecer",
["apenas a referência ao próprio nó que será removido da estrutura.","a referência ao último nó da lista, usada para percorrer de trás para frente.","o nó anterior ao que será removido, para religar as referências.","o tamanho total da lista, para verificar se a remoção deixa a estrutura vazia.","o valor guardado no nó seguinte, que passará a ocupar a posição liberada."],2,
"Sem o nó anterior não há como religar a cadeia, porque é ele quem aponta para o removido. Ter apenas a referência ao próprio nó basta em lista duplamente encadeada, que guarda o antecessor; na simplesmente encadeada, não. A referência ao último nó não permite percorrer de trás para frente, já que não existem ponteiros nesse sentido. O tamanho total da lista serve para saber se ela ficou vazia, e não para efetuar a remoção. E copiar o valor guardado no nó seguinte é um truque que remove o atual sem o anterior, mas falha no último elemento e troca a identidade dos nós. Por isso os algoritmos percorrem com dois ponteiros, anterior e atual.",null,
 {id:"al-0023",hab:"C"}],

["AL","Lista encadeada","O código insere um nó no início de uma lista encadeada. A ordem correta das linhas 03 e 04 é",
["indiferente, o resultado é o mesmo.","como está: primeiro novo->prox recebe a cabeça, depois a cabeça recebe novo.","invertida: primeiro a cabeça recebe novo, depois novo->prox recebe a cabeça.","é preciso percorrer a lista inteira até o último nó antes.","é preciso liberar a cabeça antes."],1,
"A ordem importa: reatribuindo a cabeça primeiro, perde-se a referência ao resto da lista e novo->prox passaria a apontar para o próprio nó recém-criado. Ligar o novo nó antes de mover a cabeça é obrigatório, de modo que a ordem não é indiferente nem produz o mesmo resultado. A ordem invertida é exatamente o defeito descrito. Não é preciso percorrer a lista inteira até o último nó: inserir no início custa O(1), e essa é a vantagem da estrutura. E liberar a cabeça destruiria o primeiro elemento, que a inserção precisa preservar.",
"01  Nodo* novo = malloc(sizeof(Nodo));\n02  novo->valor = x;\n03  novo->prox = cabeca;\n04  cabeca = novo;\n05  return cabeca;",
 {id:"al-0024",hab:"I"}],

["AL","Árvore","Em uma árvore binária de busca, o percurso que produz os elementos em ordem crescente é",
["pré-ordem.","em-ordem (in-ordem).","pós-ordem.","por nível (em largura).","por profundidade à direita."],1,
"Em-ordem visita esquerda, raiz, direita, o que numa árvore de busca devolve a sequência ordenada — é a propriedade que torna a estrutura útil para listagens. Pré-ordem visita a raiz antes das subárvores e serve para copiar ou serializar a árvore preservando a forma. Pós-ordem visita a raiz por último e serve para liberar memória ou avaliar expressão. O percurso por nível, em largura, sai por camadas e ignora a ordem das chaves. E “por profundidade à direita” não é percurso consagrado: espelharia o em-ordem e devolveria a ordem decrescente.",null,
 {id:"al-0025",hab:"C"}],

["AL","Árvore","Considere a árvore binária com raiz 8, filhos 3 e 10; filhos de 3 são 1 e 6; filho direito de 10 é 14. O percurso em pré-ordem produz",
["8, 3, 1, 6, 10, 14","1, 3, 6, 8, 10, 14","1, 6, 3, 14, 10, 8","8, 10, 14, 3, 6, 1","3, 1, 6, 8, 10, 14"],0,
"Pré-ordem visita raiz, esquerda, direita: 8, depois a subárvore esquerda (3, 1, 6) e por fim a direita (10, 14). A sequência 1, 3, 6, 8, 10, 14, crescente, é o percurso em-ordem. A sequência 1, 6, 3, 14, 10, 8 é o pós-ordem, que deixa a raiz para o final. A sequência 8, 10, 14, 3, 6, 1 visita a direita antes da esquerda, invertendo a convenção. E 3, 1, 6, 8, 10, 14 começa pela subárvore esquerda, como se a raiz não viesse primeiro.",null,
 {id:"al-0026",hab:"C"}],

["AL","Árvore","A altura de uma árvore binária de busca com n nós, no pior caso, é",
["O(1)","O(log n)","O(n log n)","O(n)","O(n²)"],3,
"Inserindo valores já ordenados, a árvore degenera em lista encadeada e a altura chega a n. O(1) suporia altura fixa, independente da quantidade de nós, o que nenhuma árvore com n chaves distintas alcança. O(log n) é a altura da árvore equilibrada — o caso médio, e o pior caso é exatamente a perda desse equilíbrio. O(n log n) sequer é uma altura possível: com n nós, a estrutura mais alta é a linha de n níveis, e nada passa disso. É esse risco que motiva as árvores balanceadas, AVL e rubro-negra, que garantem O(log n).",null,
 {id:"al-0027",hab:"C"}],

["AL","Hash","Em uma tabela hash, a colisão ocorre quando",
["a tabela atinge sua capacidade máxima e não aceita novas inserções.","o fator de carga chega a zero após a remoção de todos os elementos.","a chave procurada não existe na tabela e a busca retorna vazio.","duas chaves distintas produzem o mesmo índice pela função de espalhamento.","a função de espalhamento é injetora, mapeando cada chave a um índice."],3,
"Colisão é duas chaves distintas caindo no mesmo índice pela função de espalhamento; é inevitável quando o universo de chaves supera o de posições, e se trata por encadeamento ou por endereçamento aberto. A tabela atingir a capacidade máxima e recusar inserções é saturação, que no encadeamento nem ocorre. Fator de carga zero após a remoção de todos os elementos descreve tabela vazia. A chave procurada não existir e a busca retornar vazio é resultado normal de consulta. E função de espalhamento injetora, mapeando cada chave a um índice próprio, é precisamente a ausência de colisão: a alternativa define o oposto do termo.",null,
 {id:"al-0028",hab:"C"}],

["AL","Grafos","Em um grafo, o algoritmo de busca em largura (BFS) utiliza internamente uma",
["pilha.","tabela hash.","árvore binária.","fila.","lista ordenada."],3,
"A BFS usa fila e visita por camadas, o que garante alcançar o destino pelo menor número de arestas. A pilha é a estrutura da DFS — explícita ou na forma da pilha de recursão —, que aprofunda antes de retroceder. A tabela hash costuma acompanhar o algoritmo para marcar vértices já visitados, mas não determina a ordem de visita. A árvore binária não tem papel no percurso de um grafo qualquer. E a lista ordenada só entraria se houvesse peso a ordenar, que é o caso do Dijkstra e não o da busca em largura.",null,
 {id:"al-0029",hab:"C"}],

/* ---------- matriz e vetor (5) ---------- */
["AL","Matriz","Em uma matriz M declarada como [1..40][1..40], o número total de posições é",
["1.600","80","160","40","3.200"],0,
"São 40 linhas por 40 colunas, logo 1.600 posições. O 80 é 40 + 40, de quem soma as dimensões em vez de multiplicá-las. O 160 é 4 × 40, e 3.200 é o dobro do total, de quem conta a matriz duas vezes. E 40 é apenas uma das dimensões, não o total de posições. Percorrer a matriz exige laços aninhados, com custo quadrático em relação à dimensão.",null,
 {id:"al-0030",hab:"X"}],

["AL","Matriz","O trecho conta quantas vezes cada código de produto (de 0 a 5) aparece na matriz Estante. A linha que faz a contagem corretamente é",
["Contador[i] <- Contador[i] + 1","Estante[i][j] <- Contador[i] + 1","Contador[j] <- Contador[j] + 1","Contador[Estante[i][j]] <- Contador[Estante[i][j]] + 1","Contador[i][j] <- Contador[i][j] + 1"],3,
"O truque é usar o próprio valor lido como índice do vetor contador: Contador[Estante[i][j]] <- Contador[Estante[i][j]] + 1. A linha Contador[i] <- Contador[i] + 1 conta linhas percorridas, não códigos, e deixaria 40 em cada posição visitada. Contador[j] <- Contador[j] + 1 faz o mesmo com as colunas. Contador[i][j] <- Contador[i][j] + 1 trata o contador como matriz, quando ele é um vetor de seis posições, de 0 a 5. E Estante[i][j] <- Contador[i] + 1 escreve na estante em vez de contar, destruindo o dado que se queria medir. Esse padrão — vetor de contagem indexado pelo conteúdo — caiu literalmente na discursiva de 2017.",
"01  para i de 1 ate 40 faca\n02      para j de 1 ate 40 faca\n03          // linha da contagem\n04      fim-para\n05  fim-para",
 {id:"al-0031",hab:"I"}],

["AL","Vetor","Para calcular a média dos elementos de um vetor de 1.000 posições e depois contar quantos estão abaixo dela, é necessário",
["dois percursos: um para somar e calcular a média, outro para comparar cada elemento com ela.","um único percurso pelo vetor, acumulando soma, contagem e comparação na mesma iteração.","ordenar previamente o vetor, de modo que a média corresponda ao elemento da posição central.","uma pilha auxiliar que preserve os elementos já lidos para nova comparação.","usar recursão para percorrer o vetor, calculando a média e a contagem na mesma chamada."],0,
"A média só é conhecida após somar tudo, então a comparação exige um segundo percurso. Esse foi exatamente o enunciado da discursiva de 2021.",null,
 {id:"al-0032",hab:"X"}],

["AL","Vetor","Ao inicializar as variáveis maior e menor para percorrer um vetor de alturas, a prática correta é",
["inicializar ambas com zero.","inicializar maior com zero e menor com um valor muito grande.","inicializar ambas com o primeiro elemento do vetor.","não inicializar, deixando o valor padrão.","inicializar ambas com o tamanho do vetor."],2,
"Inicializar as duas com o primeiro elemento é sempre correto e dispensa suposição sobre a faixa de valores. Inicializar ambas com zero falha com dados negativos e, mesmo em alturas, deixaria o menor parado em zero, valor que não está no vetor. Pôr maior em zero e menor num valor muito grande funciona por acaso, porque depende de o domínio caber abaixo do limite escolhido à mão. Não inicializar, deixando o valor padrão, entrega o resultado ao acaso da linguagem. E inicializar ambas com o tamanho do vetor mistura grandezas sem relação: quantidade de elementos não é altura de ninguém.",null,
 {id:"al-0033",hab:"C"}],

["AL","Matriz","Em uma matriz quadrada de ordem n, os elementos da diagonal secundária satisfazem a condição",
["i = j","i > j","i + j = n + 1","i × j = n","i − j = n"],2,
"Para n = 3, a diagonal secundária é composta por M[1][3], M[2][2] e M[3][1] — em todos, i + j = 4 = n + 1. Base 0 mudaria a fórmula para i + j = n − 1.",null,
 {id:"al-0034",hab:"C"}],

/* ---------- recursão (3) ---------- */
["AL","Recursão","Toda função recursiva precisa obrigatoriamente ter",
["pelo menos dois parâmetros, sendo um deles o acumulador do resultado parcial.","uma variável global que preserve o estado entre as chamadas sucessivas.","um laço interno que percorra os valores intermediários gerados a cada chamada.","retorno de tipo numérico, para que o resultado parcial possa ser acumulado.","pelo menos uma condição de parada (caso base)."],4,
"Sem caso base a recursão não termina e estoura a pilha de chamadas. O caso base e a redução do problema a cada chamada são os dois requisitos para a recursão convergir.",null,
 {id:"al-0035",hab:"C"}],

["AL","Recursão","A ineficiência do cálculo recursivo ingênuo de Fibonacci decorre de",
["consumir memória excessiva a cada chamada, pela cópia integral dos parâmetros na pilha.","não possuir condição de parada bem definida, o que estende a recursão além do necessário.","recalcular repetidamente os mesmos subproblemas, gerando número exponencial de chamadas.","exigir um vetor auxiliar de tamanho proporcional ao termo que se deseja calcular.","depender da ordem em que os termos anteriores foram calculados e armazenados."],2,
"fib(5) recalcula fib(3) duas vezes, fib(2) três vezes, e o número de chamadas cresce exponencialmente — é aí que mora a ineficiência. Consumir memória pela cópia dos parâmetros na pilha é custo de qualquer recursão e cresce apenas com a profundidade, que aqui é linear. A condição de parada existe e é bem definida. Exigir um vetor auxiliar proporcional ao termo desejado descreve a versão com memoização, que é a correção e não o defeito. E depender da ordem em que os termos anteriores foram calculados e armazenados descreve a versão iterativa, que guarda apenas duas variáveis. A cura é memoizar ou iterar, reduzindo de exponencial para linear.",null,
 {id:"al-0036",hab:"C"}],

["AL","Recursão","A função abaixo, chamada com f(5), retorna",
["5","15","10","20","25"],1,
"É o somatório de 1 a 5: 5 + 4 + 3 + 2 + 1 = 15, com caso base em n = 0. O 10 é a soma até 4, de quem encerra uma chamada antes. O 20 sairia de 5 × 4, trocando acumulação por produto, e 25 é 5², de quem confunde recursão com potência. E 5 é o próprio argumento, resposta de quem imagina que o caso base devolve n em vez de zero.",
"funcao f(n)\n    se n = 0 entao\n        retorne 0\n    senao\n        retorne n + f(n - 1)\n    fim-se\nfim-funcao",
 {id:"al-0037",hab:"I"}],
/* ---------- estruturas de dados (8) ---------- */
["AL","Pilha","O trecho abaixo processa uma sequência de caracteres para verificar o balanceamento de parênteses. A estrutura de dados adequada para essa tarefa é a pilha porque",
["o último parêntese aberto é sempre o primeiro que precisa ser fechado, correspondência que a ordem LIFO reproduz.","permite acesso direto a qualquer posição da sequência, o que agiliza a localização do parêntese correspondente.","mantém os elementos ordenados por valor, facilitando a comparação entre os símbolos de abertura e de fechamento.","ocupa menos memória que as demais estruturas lineares disponíveis para o armazenamento de caracteres.","garante tempo constante para busca de qualquer elemento armazenado, independentemente da posição em que se encontre."],0,
"O aninhamento é o argumento: em ((a+b)*c) o parêntese interno fecha antes do externo, e a ordem LIFO reproduz exatamente essa correspondência. Acesso direto a qualquer posição da sequência é próprio de vetor e não ajudaria — o problema não é localizar um caractere, é lembrar qual abertura continua pendente. Manter os elementos ordenados por valor não faz sentido para símbolos de abertura e fechamento, cuja ordem relevante é a de chegada. Ocupar menos memória que as demais estruturas lineares não é verdade nem seria o critério. E garantir tempo constante de busca em qualquer posição descreve a tabela hash, que perderia justamente a ordem que resolve o problema.",
"01  para cada caractere c da expressao faca\n02      se c = '(' entao empilha(c)\n03      senao se c = ')' entao\n04          se pilha vazia entao retorna falso\n05          desempilha()\n06  fim-para\n07  retorna pilha vazia",
 {id:"al-0038",hab:"I"}],

["AL","Fila","Em um sistema de atendimento, chegam as senhas A, B, C e D nessa ordem. São chamados dois atendimentos, chega a senha E e é chamado mais um atendimento. Usando uma fila, a próxima senha a ser chamada é",
["a senha D.","a senha E, por ser a que ingressou mais recentemente na estrutura de atendimento do sistema.","a senha B, uma vez que apenas a primeira senha da sequência foi efetivamente removida da fila.","a senha C, que permanece no início da fila após as remoções realizadas durante o atendimento.","não é possível determinar sem conhecer a prioridade atribuída a cada uma das senhas emitidas."],0,
"Saem A e B nos dois primeiros atendimentos; entra E, deixando C, D, E; o terceiro atendimento chama C. A próxima é D. Responder E é supor que quem ingressou mais recentemente passa à frente, o que descreve pilha e não fila. Responder B é contar apenas a primeira remoção da sequência, esquecendo a segunda. Responder C ignora que ela permanece no início só até o terceiro atendimento, que a remove. E dizer que não é possível determinar sem conhecer a prioridade atribuída às senhas introduz uma fila de prioridade que o enunciado não menciona.",null,
 {id:"al-0039",hab:"C"}],

["AL","Hash","Uma tabela hash com tratamento de colisão por encadeamento tem seu desempenho degradado quando",
["o número de elementos armazenados é menor que o número de posições disponíveis na tabela de dispersão.","as chaves inseridas são numéricas, tipo para o qual a dispersão apresenta comportamento menos uniforme que o textual.","a função de dispersão concentra muitas chaves nas mesmas posições, transformando as listas encadeadas em buscas lineares.","a tabela é redimensionada periodicamente, operação que reorganiza todas as chaves já inseridas na estrutura.","os elementos são removidos com frequência, o que fragmenta o espaço ocupado pela estrutura na memória."],2,
"O caso médio O(1) pressupõe distribuição uniforme; quando a função concentra muitas chaves nas mesmas posições, a lista daquela posição cresce e a busca vira linear — o pior caso da hash é uma lista encadeada disfarçada. Ter menos elementos armazenados do que posições disponíveis é o cenário favorável, não o ruim. As chaves serem numéricas não degrada nada: a qualidade da dispersão depende da função, e não do tipo, de modo que chave textual não é intrinsecamente melhor. O redimensionamento periódico custa caro no instante em que ocorre, mas existe para preservar o desempenho, e seu custo amortizado é constante. E remover elementos com frequência não fragmenta o encadeamento: a posição liberada volta a ser usada.",null,
 {id:"al-0040",hab:"C"}],

["AL","Grafos","Para encontrar o menor número de conexões entre duas pessoas em uma rede social, modelada como grafo não ponderado, o algoritmo adequado é",
["a busca em largura, que visita os vértices por camadas de distância e alcança o destino pelo menor número de arestas.","a busca em profundidade, que percorre cada ramo até o fim antes de retroceder e por isso encontra o caminho mais curto.","o algoritmo de Dijkstra, indispensável sempre que se deseja obter o caminho mínimo entre dois vértices quaisquer.","a ordenação topológica, que organiza os vértices de modo a revelar a menor sequência de ligações entre eles.","o algoritmo de Kruskal, que constrói a árvore geradora mínima e, com ela, o caminho mais curto entre os pares."],0,
"Em grafo sem peso, a busca em largura resolve: esgota os vizinhos a distância 1 antes de olhar os de distância 2, e a primeira vez que alcança o destino já é pelo menor número de arestas. A busca em profundidade percorre cada ramo até o fim antes de retroceder e pode chegar ao destino por caminho longo — ela não garante o mais curto. Dijkstra também funcionaria, mas é maquinário para pesos que aqui não existem, e por isso não é indispensável. A ordenação topológica só se define em grafo dirigido acíclico e não mede distância. E Kruskal constrói a árvore geradora mínima, que conecta tudo com peso total mínimo, mas o caminho entre dois vértices dentro dela não é necessariamente o mais curto do grafo.",null,
 {id:"al-0041",hab:"C"}],

["AL","Complexidade","Um algoritmo executa, para uma entrada de tamanho n, um laço externo de n repetições e, dentro dele, uma busca binária sobre um vetor ordenado de n elementos. A complexidade de tempo é",
["O(n log n).","O(n), pois a busca binária tem custo constante e não altera a ordem de grandeza do laço externo do algoritmo.","O(n²), já que o algoritmo combina dois laços aninhados que percorrem o mesmo conjunto de dados de entrada.","O(log n), correspondente ao custo da busca binária, que domina o comportamento assintótico do procedimento.","O(2^n), porque a cada repetição do laço externo o espaço de busca é dividido sucessivamente ao meio."],0,
"n repetições, cada uma custando log n: o produto é n log n. O erro frequente é tratar a busca binária como custo constante, o que rebaixaria o resultado para O(n).",null,
 {id:"al-0042",hab:"C"}],

["AL","Árvore","Em uma árvore binária de busca, a inserção das chaves 10, 20, 30, 40 e 50 nessa ordem produz uma estrutura em que a busca por 50 custa",
["O(log n), desempenho característico das árvores binárias de busca em qualquer ordem de inserção das chaves.","O(1), já que a última chave inserida permanece acessível diretamente a partir da raiz da estrutura.","O(n), porque a inserção em ordem crescente degenera a árvore em uma lista encadeada à direita.","O(n log n), custo de percorrer a árvore inteira comparando cada nó com a chave procurada na busca.","O(n²), decorrente da necessidade de reorganizar a árvore a cada comparação realizada durante a busca."],2,
"Cada chave é maior que a anterior e vai sempre para a direita: a árvore vira uma linha de cinco nós, e buscar 50 percorre todos eles. O(log n) só vale com a árvore equilibrada, e não em qualquer ordem de inserção, que é o que a alternativa afirma. O(1) suporia a última chave inserida acessível diretamente a partir da raiz, e a busca continua descendo nó a nó. O(n log n) é custo de ordenação, não de uma busca. E O(n²) suporia reorganizar a árvore a cada comparação, coisa que a busca não faz. É o pior caso da BST e a razão de existirem AVL e rubro-negra.",null,
 {id:"al-0043",hab:"C"}],

["AL","Lista encadeada","A vantagem de uma lista duplamente encadeada sobre a simplesmente encadeada é",
["o menor consumo de memória, por dispensar o ponteiro para o próximo elemento em cada um dos nós da lista.","a ordenação automática dos elementos conforme são inseridos, mantida pelos dois ponteiros de cada nó.","o acesso direto a qualquer posição por meio de índice, recurso ausente na versão simplesmente encadeada.","permitir percurso em ambos os sentidos e remover um nó conhecido sem percorrer a lista para achar o anterior.","a garantia de que não haverá fragmentação de memória durante inserções e remoções sucessivas de elementos."],3,
"O ponteiro extra custa memória e paga com navegação nos dois sentidos. Ele resolve um incômodo concreto da lista simples: para remover um nó, era preciso varrer a lista só para descobrir quem apontava para ele.",null,
 {id:"al-0044",hab:"C"}],

["AL","Pilha","O trecho abaixo é executado com a sequência de operações indicada. O valor impresso na linha 07 é",
["10, primeiro valor inserido e por isso o primeiro a ser recuperado pela operação de desempilhamento.","30.","20, correspondente ao elemento que ocupa a posição intermediária da estrutura no momento da leitura.","40, último valor inserido antes da execução da operação de impressão presente no trecho apresentado.","indefinido, pois a pilha se encontra vazia no momento em que a operação de leitura é executada."],1,
"Empilha 10, 20 e 30; desempilha o 30 e o guarda em x; empilha 40. O que se imprime é x, não o topo. Responder 10 é aplicar a regra da fila, em que o primeiro valor inserido seria o primeiro recuperado — mas o desempilhamento tira do topo. Responder 20 é escolher o elemento da posição intermediária, que operação alguma da pilha alcança. Responder 40 é ler o topo no momento da impressão, esquecendo que x foi atribuído antes dessa última inserção. E dizer indefinido, com a pilha vazia, ignora que ainda restam dois elementos nela.",
"01  empilha(10)\n02  empilha(20)\n03  empilha(30)\n04  x <- desempilha()\n05  empilha(40)\n06  escreva(x)\n07",
 {id:"al-0045",hab:"I"}],

["AL","Complexidade","Uma equipe compara algoritmos para ordenar e buscar em um vetor de n elementos. Avalie as afirmações a seguir.\nI. A busca binária em vetor ordenado tem custo O(log n) no pior caso.\nII. O quicksort tem custo O(n log n) no pior caso, qualquer que seja o pivô escolhido.\nIII. O mergesort mantém O(n log n) no pior caso, mas exige espaço auxiliar proporcional a n.\nÉ correto apenas o que se afirma em",
["I e III.","I.","II.","II e III.","I, II e III."],0,
"O pior caso do quicksort é O(n²), e ocorre quando o pivô é sistematicamente o menor ou o maior elemento — vetor já ordenado com pivô na ponta é o exemplo clássico. A afirmação II descreve o caso MÉDIO como se fosse o pior, que é a confusão mais comum sobre o algoritmo. I e III estão corretas: a busca binária corta o espaço pela metade a cada passo, e o mergesort paga em memória a garantia que dá em tempo.",null,
 {"id":"al-0046","hab":"J"}],

["AL","Pilha","Sobre as estruturas pilha e fila, avalie as afirmações a seguir.\nI. A avaliação de expressões com parênteses aninhados é aplicação típica de fila.\nII. A pilha atende à disciplina LIFO, em que o último elemento inserido é o primeiro a sair.\nIII. Tanto a inserção quanto a remoção em uma pilha bem implementada custam O(1).\nÉ correto apenas o que se afirma em",
["I.","II e III.","II.","I e III.","I, II e III."],1,
"I troca as duas estruturas: casar parênteses exige recuperar a ÚLTIMA abertura ainda pendente, que é o comportamento da pilha. Fila é FIFO e serve a outra classe de problema — escalonamento, busca em largura, atendimento por ordem de chegada. II e III estão corretas, e a segunda decorre da primeira: mexendo só no topo, não se percorre a estrutura.",null,
 {"id":"al-0047","hab":"J"}],

["AL","Árvore","Sobre árvores binárias de busca (ABB), avalie as afirmações a seguir.\nI. O percurso em ordem (in-order) de uma ABB visita as chaves em ordem crescente.\nII. Árvores balanceadas como a AVL existem para garantir altura O(log n).\nIII. A busca em uma ABB custa O(log n) independentemente da ordem de inserção das chaves.\nÉ correto apenas o que se afirma em",
["I.","II.","I e II.","II e III.","I, II e III."],2,
"III ignora o caso degenerado: inserir chaves já ordenadas produz uma árvore que é uma lista encadeada disfarçada, com altura n e busca O(n). É precisamente esse risco que justifica II — AVL e rubro-negra rebalanceiam a cada inserção para que a altura não escape. Quem marca III costuma ter memorizado o custo médio sem a condição que o sustenta.",null,
 {"id":"al-0048","hab":"J"}],

["AL","Hash","Sobre tabelas de dispersão (hash), avalie as afirmações a seguir.\nI. Uma função de dispersão bem distribuída torna a busca O(1) no caso médio.\nII. Colisões são falhas de implementação e podem ser eliminadas por uma boa função de dispersão.\nIII. O encadeamento separado trata colisões mantendo, em cada posição, uma lista dos elementos que ali caíram.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I e III.","I, II e III."],3,
"II confunde reduzir com eliminar. Enquanto o universo de chaves possíveis for maior que o número de posições — e sempre é —, a colisão é inevitável por contagem, não por descuido: é o princípio da casa dos pombos. Boa dispersão torna a colisão rara; tratá-la continua obrigatório, e III descreve uma das formas de fazer isso.",null,
 {"id":"al-0049","hab":"J"}],

["AL","Ordenação","Sobre algoritmos de ordenação, avalie as afirmações a seguir.\nI. O insertion sort tem desempenho ruim em vetores quase ordenados, por percorrer sempre todo o vetor.\nII. Um algoritmo de ordenação é estável quando preserva a ordem relativa de elementos de mesma chave.\nIII. Nenhum algoritmo de ordenação por comparação pode ter pior caso melhor que O(n log n).\nÉ correto apenas o que se afirma em",
["I.","II.","I e III.","I, II e III.","II e III."],4,
"I inverte o comportamento do insertion sort: em vetor quase ordenado ele é excelente, chegando a O(n), porque cada elemento encontra sua posição quase de imediato. É por isso que ele aparece como etapa final de algoritmos híbridos. III é o limite inferior clássico da ordenação por comparação — counting sort e radix sort escapam dele por não comparar elementos, e sim contá-los.",null,
 {"id":"al-0050","hab":"J"}],

["AL","Grafos","Sobre percursos em grafos, avalie as afirmações a seguir.\nI. A busca em largura (BFS) encontra o caminho com menor número de arestas entre a origem e cada vértice alcançável.\nII. O algoritmo de Dijkstra pressupõe que não haja arestas de peso negativo.\nIII. A busca em profundidade (DFS) encontra sempre o caminho mais curto entre dois vértices.\nÉ correto apenas o que se afirma em",
["I e II.","I.","II.","II e III.","I, II e III."],0,
"III atribui à DFS uma garantia que ela não dá: a DFS encontra UM caminho, não o mais curto, porque desce o quanto puder antes de retroceder. Quem garante menor número de arestas é a BFS, e só em grafo não ponderado. II é a condição que separa Dijkstra de Bellman-Ford: com peso negativo, Dijkstra fecha um vértice cedo demais e erra.",null,
 {"id":"al-0051","hab":"J"}],

["AL","Complexidade","Avalie a asserção a seguir e a razão proposta para ela.\nI. A busca binária exige que o vetor esteja previamente ordenado.\nPORQUE\nII. O algoritmo descarta metade do espaço de busca a cada comparação, o que só é válido se a posição relativa dos elementos refletir a ordem das chaves.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],0,
"As duas são verdadeiras e a segunda é exatamente o motivo da primeira. Descartar metade do vetor só faz sentido se, ao comparar com o elemento do meio, se puder concluir que a chave procurada está inteiramente de um lado — e isso depende da ordenação. Em vetor desordenado o algoritmo roda sem erro e devolve resposta errada, que é a pior forma de falhar.",null,
 {"id":"al-0052","hab":"A"}],

["AL","Ordenação","Avalie a asserção a seguir e a razão proposta para ela.\nI. O mergesort é preferível ao quicksort quando se exige garantia de desempenho no pior caso.\nPORQUE\nII. O mergesort é um algoritmo estável, isto é, preserva a ordem relativa de elementos com chaves iguais.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],1,
"As duas são verdadeiras, mas a segunda não sustenta a primeira. O que justifica a escolha pela garantia de pior caso é o mergesort ser O(n log n) sempre, enquanto o quicksort degrada para O(n²) com pivô ruim. A estabilidade é outra propriedade do mergesort, também verdadeira, e relevante em outro contexto — ordenar por um critério preservando ordenação anterior. Duas virtudes do mesmo algoritmo, respondendo a perguntas diferentes.",null,
 {"id":"al-0053","hab":"A"}],

["AL","Recursão","Avalie a asserção a seguir e a razão proposta para ela.\nI. Todo algoritmo recursivo consome menos memória que sua versão iterativa equivalente.\nPORQUE\nII. Cada chamada recursiva empilha um novo registro de ativação, com parâmetros, variáveis locais e endereço de retorno.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],3,
"A segunda é verdadeira e desmente a primeira: é justamente a pilha de chamadas que faz a recursão consumir memória proporcional à profundidade, enquanto o laço equivalente costuma usar espaço constante. Recursão ganha em clareza quando o problema é naturalmente recursivo — percorrer árvore, dividir e conquistar —, e não em consumo. Recursão de cauda otimizada pelo compilador é a exceção que confirma o mecanismo.",null,
 {"id":"al-0054","hab":"A"}],

["AL","Complexidade","Um sistema de logística precisa, a cada consulta, verificar se um código de rastreio está em uma lista de 2 milhões de códigos. A implementação atual guarda os códigos em um vetor não ordenado e faz busca sequencial. O sistema recebe cerca de 500 consultas por segundo, e o tempo de resposta se degradou a ponto de causar tempo esgotado. A lista é atualizada uma vez por dia, em lote, fora do horário de pico.\nA alteração mais adequada é",
["paralelizar a busca sequencial em quatro threads, dividindo o vetor em quatro partes.","manter o vetor e acrescentar um cache das últimas mil consultas realizadas.","reescrever a busca sequencial em uma linguagem compilada de mais baixo nível.","carregar os códigos em uma tabela de dispersão na inicialização, passando a consulta a custo constante médio.","ordenar o vetor a cada consulta e aplicar busca binária em seguida."],3,
"A atualização diária em lote é a informação decisiva: pode-se pagar uma vez o custo de montar a estrutura e colher busca O(1) médio em 500 consultas por segundo. Paralelizar em quatro divide o tempo por quatro e mantém o custo linear, que continuará crescendo com a lista. Cache só ajuda se houver repetição de consulta, que o enunciado não afirma. Trocar de linguagem melhora a constante, não a ordem. E ordenar A CADA consulta é pior que a busca sequencial que se pretende substituir.",null,
 {"id":"al-0055","hab":"E"}],

["AL","Lista encadeada","Uma aplicação mantém uma coleção de tarefas em que as operações mais frequentes são inserir no fim e remover do início, nessa ordem de frequência, ambas ocorrendo milhares de vezes por segundo. Acesso a posição arbitrária é raro, e o número de elementos varia muito ao longo do dia, entre dezenas e centenas de milhares. A implementação atual usa um vetor dinâmico, e a remoção do primeiro elemento tem se mostrado o gargalo.\nA estrutura mais adequada para substituir o vetor é",
["uma árvore binária de busca balanceada, pelo custo logarítmico garantido.","uma tabela de dispersão, pelo custo constante médio de suas operações.","um vetor ordenado, permitindo busca binária nas consultas eventuais.","uma pilha, por ter inserção e remoção em custo constante.","uma fila implementada sobre lista duplamente encadeada, com inserção no fim e remoção no início em custo constante."],4,
"Remover do início de um vetor custa O(n), porque exige deslocar todos os demais — é exatamente o gargalo descrito. Uma lista duplamente encadeada com ponteiros para as duas pontas faz inserir no fim e remover do início em O(1), e o padrão de uso é o de uma fila. A pilha atende ao custo mas na disciplina errada: LIFO inverteria a ordem de atendimento. Árvore e tabela de dispersão resolvem problemas de busca, que aqui é raro.",null,
 {"id":"al-0056","hab":"E"}],

["AL","Ordenação","Um relatório gerencial precisa ordenar 50 mil registros de vendas por valor decrescente. Os registros já vêm quase ordenados do banco, porque a consulta os traz por data e o valor cresce ao longo do mês, ficando no máximo algumas centenas fora de posição. É obrigatório que vendas de mesmo valor preservem a ordem cronológica em que foram inseridas, porque o relatório é usado para conferência contábil e a sequência de lançamento precisa ser reproduzível. A memória disponível é folgada e o relatório roda uma vez por dia, fora do horário de pico.\nO algoritmo mais adequado é",
["insertion sort, que se aproxima de O(n) em entrada quase ordenada e é estável.","quicksort com pivô no primeiro elemento, pelo bom desempenho médio.","selection sort, por fazer o menor número de trocas entre os algoritmos elementares.","heapsort, por garantir O(n log n) no pior caso sem memória adicional.","counting sort, por não depender de comparações entre os elementos."],0,
"Duas exigências decidem: entrada quase ordenada e estabilidade obrigatória. O insertion sort atende às duas — aproxima-se de O(n) quando há poucos deslocamentos e preserva a ordem de chaves iguais. O quicksort com pivô no primeiro elemento é a pior escolha possível aqui: em entrada quase ordenada ele degrada para O(n²), e ainda não é estável. Heapsort e selection sort também não são estáveis, o que basta para eliminá-los. Counting sort pressupõe chaves inteiras em faixa limitada, que valor de venda não é.",null,
 {"id":"al-0057","hab":"E"}]

]);
