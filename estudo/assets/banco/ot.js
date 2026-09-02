/* Banco IA — Arquitetura de computadores e inteligência artificial (15 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["OT","Arquitetura de computadores","Na arquitetura de von Neumann, a característica central é que",
["dados e instruções ficam em memórias fisicamente separadas.","dados e instruções compartilham a mesma memória e o mesmo barramento.","a unidade de controle é dispensada, cabendo à memória sequenciar as instruções.","o processamento das instruções ocorre de forma paralela por construção.","a memória é somente de leitura, sendo os dados mantidos em registradores."],1,
"Memória única para dados e instruções é o que define von Neumann — e origina o gargalo de mesmo nome, já que ambos disputam o barramento. Memórias separadas caracterizam a arquitetura Harvard.",null,
 {id:"ot-0001",hab:"C"}],

["OT","Arquitetura de computadores","A memória cache existe para",
["substituir permanentemente a memória principal, que passa a guardar apenas os dados de acesso menos frequente do sistema.","armazenar dados de forma persistente mesmo após o desligamento da máquina, preservando o estado corrente do sistema.","reduzir o tempo médio de acesso, guardando os dados mais recentemente ou frequentemente usados perto do processador.","aumentar a capacidade total de armazenamento disponível para os processos em execução.","controlar o barramento de endereços, arbitrando o acesso simultâneo de vários dispositivos."],2,
"A cache explora localidade temporal e espacial. Ela é pequena e cara por byte; sua função é diminuir a latência média, não ampliar a capacidade.",null,
 {id:"ot-0002",hab:"C"}],

["OT","Inteligência artificial","Um sistema especialista baseado em regras de produção representa o conhecimento na forma",
["de uma rede de neurônios artificiais cujos pesos são ajustados durante o treinamento.","de regras SE-ENTÃO, avaliadas por um motor de inferência sobre uma base de fatos.","de tabelas relacionais normalizadas, consultadas por comandos de um banco de dados.","de uma população de soluções que evolui por seleção, cruzamento e mutação sucessivos.","de árvores de decisão binárias induzidas automaticamente a partir de dados históricos."],1,
"A tríade do sistema especialista é base de conhecimento (regras), base de fatos e motor de inferência. O encadeamento pode ser progressivo (dos fatos às conclusões) ou regressivo (da hipótese aos fatos).",
"SE temperatura > 38 E dor_de_garganta = sim\nENTAO suspeita <- \"infeccao\" (confianca 0,8)",
 {id:"ot-0003",hab:"I"}],

["OT","Inteligência artificial","No aprendizado de máquina, o overfitting ocorre quando o modelo",
["não consegue aprender os padrões nem sobre os próprios dados de treinamento.","é treinado com um volume de dados muito superior ao necessário para aquela tarefa.","usa poucos parâmetros para representar o fenômeno, o que o impede de capturar padrões relevantes.","ajusta-se em excesso aos dados de treino, incluindo o ruído, e generaliza mal para dados novos.","não possui função de custo definida para orientar o ajuste dos parâmetros."],3,
"Sinal típico: acurácia alta no treino e baixa na validação. Combate-se com mais dados, regularização, validação cruzada ou modelos menos complexos. O oposto é o underfitting.",null,
 {id:"ot-0004",hab:"C"}],

["OT","Inteligência artificial","A diferença entre aprendizado supervisionado e não supervisionado é que, no supervisionado,",
["não há dados de treinamento, sendo o modelo construído por regras manuais.","o modelo aprende sem função objetivo definida, por tentativa e erro puro.","os dados de treinamento vêm rotulados com a resposta esperada.","não é possível realizar classificação, apenas agrupamento por similaridade.","o resultado é sempre determinístico, independente da inicialização."],2,
"Supervisionado aprende de exemplos rotulados (classificação e regressão). Não supervisionado busca estrutura em dados sem rótulo — agrupamento e redução de dimensionalidade são os casos típicos.",null,
 {id:"ot-0005",hab:"C"}],
/* ---------- arquitetura e organização de computadores (10) ---------- */
["OT","Memória e cache","A hierarquia de memória de um computador combina registradores, cache, memória principal e disco. Essa organização é vantajosa porque",
["a memória mais rápida é também a mais barata, o que permite ampliá-la sem elevar o custo total da máquina montada.","programas exibem localidade de referência, e manter perto do processador o que foi usado há pouco atende à maioria dos acessos.","cada nível armazena um tipo distinto de dado, cabendo ao programador indicar em qual deles cada variável deve residir.","o sistema operacional distribui os dados igualmente entre os níveis, equilibrando a carga de acesso dirigida a cada um dos dispositivos.","a soma das capacidades dos níveis é o que determina a memória total disponível para os processos em execução."],1,
"Localidade temporal e espacial é o que faz a hierarquia funcionar: o que foi acessado tende a ser acessado de novo, e o vizinho tende a vir logo depois. Sem esse comportamento dos programas, cache seria só memória cara e inútil.",null,
 {id:"ot-0006",hab:"C"}],

["OT","Memória e cache","Um programa percorre uma matriz de inteiros somando seus elementos. A versão que varre a matriz linha a linha executa mais rápido que a versão que varre coluna a coluna, embora ambas façam o mesmo número de somas. A explicação está",
["no compilador, que otimiza laços com incremento crescente e ignora os de ordem decrescente na geração do código.","na quantidade de instruções executadas, já que percorrer a matriz por coluna exige mais operações aritméticas para calcular cada índice acessado.","na localidade espacial: em memória a matriz é contígua por linha, e cada falta de cache traz também os vizinhos que serão usados em seguida.","no sistema operacional, que concede prioridade de escalonamento aos processos com padrão de acesso sequencial à memória.","no tamanho do tipo inteiro, que ocupa mais espaço quando os elementos são lidos fora da ordem de armazenamento."],2,
"Mesmo número de somas, número muito diferente de faltas de cache. A linha de cache traz um bloco inteiro; varrendo por linha, os próximos elementos já vêm junto. Por coluna, cada acesso pula um trecho e desperdiça o bloco.",null,
 {id:"ot-0007",hab:"C"}],

["OT","Representação de dados","Em complemento de dois com 8 bits, a faixa de valores inteiros representáveis é",
["de 0 a 255, pois cada um dos oito bits contribui com uma potência de dois para o valor final armazenado.","de -127 a 127, com duas representações distintas para o valor zero, uma positiva e outra negativa.","de -128 a 127.","de -255 a 255, já que o bit mais significativo apenas indica o sinal e os demais indicam a magnitude.","de 0 a 128, metade da faixa sendo reservada para o registro de valores negativos em outra área."],2,
"São 256 combinações, distribuídas de forma assimétrica: metade para negativos, e a metade positiva perde uma posição para o zero. Complemento de dois tem representação única do zero, e é justamente essa a vantagem sobre sinal-magnitude.",null,
 {id:"ot-0008",hab:"C"}],

["OT","Representação de dados","Em um sistema financeiro, a soma de 0,1 com 0,2 armazenados em ponto flutuante não resulta exatamente em 0,3. Esse comportamento decorre de",
["impossibilidade de representar exatamente essas frações em base dois, o que introduz aproximação já no armazenamento.","erro de implementação da biblioteca matemática da linguagem, corrigível com atualização do compilador utilizado.","perda de precisão que ocorre apenas na exibição do valor, permanecendo o número correto na memória do processo.","arredondamento aplicado pelo processador ao converter o resultado para a base decimal antes de devolvê-lo ao programa.","excesso de casas decimais no resultado, que ultrapassa o limite suportado pelo tipo de dado escolhido."],0,
"0,1 em binário é dízima periódica, como 1/3 em decimal. O erro nasce na conversão, antes de qualquer conta. Por isso valor monetário se guarda em inteiro de centavos ou em tipo decimal — não em ponto flutuante.",null,
 {id:"ot-0009",hab:"C"}],

["OT","Desempenho","Um processador com pipeline de cinco estágios executa a sequência abaixo. A dependência entre as instruções 01 e 02 caracteriza",
["conflito estrutural, causado pela disputa de duas instruções pela mesma unidade funcional do processador em um mesmo ciclo.","conflito de dados, pois a segunda instrução precisa de um resultado que a primeira ainda não gravou no registrador.","conflito de controle, decorrente da incerteza sobre qual instrução deve ser buscada após um desvio condicional.","ausência de conflito, já que o pipeline processa as instruções em estágios distintos e simultâneos entre si.","erro de compilação, que deveria ter sido detectado na análise semântica antes da geração do código de máquina."],1,
"É o hazard clássico de leitura após escrita. O pipeline pode resolvê-lo com adiantamento do resultado ou, na falta disso, inserindo bolhas — que é onde o ganho teórico do pipeline se perde na prática.",
"01  ADD  R3, R1, R2     ; R3 <- R1 + R2\n02  SUB  R5, R3, R4     ; R5 <- R3 - R4",
 {id:"ot-0010",hab:"I"}],

["OT","Desempenho","Um sistema gasta 80% do tempo em uma rotina paralelizável e 20% em trecho estritamente sequencial. Ainda que a parte paralelizável se torne instantânea, o ganho máximo de desempenho do sistema é",
["de 80%, proporcional à fração do tempo que pôde ser distribuída entre os núcleos disponíveis na máquina.","impossível de estimar sem conhecer o número exato de núcleos disponíveis no processador utilizado.","ilimitado, bastando acrescentar núcleos suficientes para reduzir o tempo total tanto quanto se queira.","de 4 vezes, correspondente à razão entre a parte paralelizável e a parte que permanece sequencial no programa.","de 5 vezes."],4,
"Zerando os 80%, restam os 20% sequenciais: o tempo cai para um quinto, e o teto é 5x. É a lei de Amdahl — quem limita o ganho não é o que se paraleliza, é o que sobra sem paralelizar.",null,
 {id:"ot-0011",hab:"C"}],

["OT","Arquitetura de computadores","A distinção entre as arquiteturas RISC e CISC está principalmente em que",
["RISC executa apenas números inteiros, cabendo às arquiteturas CISC o processamento de operações em ponto flutuante.","CISC é mais rápida em qualquer cenário, por resolver em uma única instrução o que RISC precisa de várias para completar a mesma tarefa.","RISC é usada exclusivamente em dispositivos móveis e de baixo consumo, e CISC exclusivamente em servidores e computadores de mesa de uso geral.","RISC adota conjunto reduzido de instruções simples e regulares, favorecendo pipeline; CISC oferece instruções mais complexas por instrução.","RISC dispensa o uso de memória cache, já que suas instruções têm largura fixa e tempo de execução previsível."],3,
"Regularidade é o ponto: instruções de largura fixa e poucos formatos tornam o pipeline previsível. A contrapartida é precisar de mais instruções para a mesma tarefa — a disputa entre as duas famílias é sobre onde pagar essa conta.",null,
 {id:"ot-0012",hab:"C"}],

["OT","Arquitetura de computadores","Em uma transferência de grande volume de dados entre disco e memória, o uso de DMA em vez de E/S programada tem como principal benefício",
["eliminar a possibilidade de erro na transmissão, pois os dados deixam de passar pelo barramento do sistema.","liberar o processador durante a transferência, que passa a ser conduzida por controlador próprio e sinalizada ao final.","aumentar a capacidade de armazenamento do disco, por dispensar as áreas reservadas ao controle da transferência.","reduzir o consumo de memória principal, já que os dados transferidos não precisam ser copiados para ela.","dispensar a intermediação do sistema operacional, uma vez que a aplicação passa a acessar o dispositivo diretamente durante a transferência."],1,
"A economia é de tempo de CPU, não de barramento nem de memória. Sem DMA o processador copia palavra a palavra e fica indisponível para outra coisa; com DMA ele só é avisado quando o bloco terminou.",null,
 {id:"ot-0013",hab:"C"}],

["OT","Representação de dados","Um disco anunciado como de 1 TB é exibido pelo sistema operacional com cerca de 931 GB. A diferença ocorre porque",
["parte do espaço é consumida pela formatação, que reserva blocos inteiros para a tabela de alocação do sistema de arquivos.","a compressão aplicada pelo sistema de arquivos altera a contagem de bytes efetivamente disponíveis ao usuário.","o fabricante inclui na medida anunciada a área reservada para substituição de setores defeituosos ao longo da vida útil do disco.","o sistema operacional oculta uma partição de recuperação, criada automaticamente durante a instalação do sistema.","o fabricante usa potências de dez e o sistema operacional exibe o valor em potências de dois, sem que haja perda real de espaço."],4,
"10^12 contra 2^40: são unidades diferentes para o mesmo número de bytes. Formatação e setores reservados consomem algo, mas explicam pouco perto dessa diferença de quase 7%.",null,
 {id:"ot-0014",hab:"C"}],

["OT","Memória e cache","Ordenando por tempo de acesso, do mais rápido ao mais lento, os componentes registrador, memória principal, cache L1 e disco de estado sólido ficam na sequência",
["registrador, cache L1, memória principal, disco de estado sólido.","cache L1, registrador, memória principal, disco de estado sólido, já que a cache antecede o registrador no caminho do dado.","registrador, memória principal, cache L1, disco de estado sólido, pois a cache é consultada apenas quando a memória falha.","memória principal, registrador, cache L1, disco de estado sólido, porque o dado é sempre carregado da memória para o registrador.","registrador, cache L1, disco de estado sólido, memória principal, uma vez que discos de estado sólido superam a memória volátil."],0,
"A ordem acompanha a distância até a unidade de execução, e a diferença entre os extremos é de várias ordens de grandeza. Cache existe justamente para ficar entre o registrador e a memória principal, não depois dela.",null,
 {id:"ot-0015",hab:"C"}],

["OT","Memória e cache","Sobre a hierarquia de memória, avalie as afirmações a seguir.\nI. A memória cache é menor e mais rápida que a memória principal.\nII. O princípio da localidade é o que torna a cache eficaz.\nIII. Aumentar o tamanho da cache elimina as faltas (misses) de memória.\nÉ correto apenas o que se afirma em",
["I.","II.","I e II.","II e III.","I, II e III."],2,
"III confunde reduzir com eliminar. Nem a maior das caches evita a falta compulsória — o primeiro acesso a um dado sempre erra, porque ele ainda não foi trazido. Além disso, cache maior costuma ser mais lenta e mais cara, o que é a razão de existir uma hierarquia em vez de um nível só. II nomeia o que faz a cache funcionar: programas reacessam o que acabaram de acessar e o que está ao lado.",null,
 {"id":"ot-0016","hab":"J"}],

["OT","Representação de dados","Sobre representação de dados em computadores, avalie as afirmações a seguir.\nI. Com n bits é possível representar 2ⁿ valores distintos.\nII. O padrão de ponto flutuante IEEE 754 representa exatamente qualquer número decimal.\nIII. A representação em complemento de dois permite somar números com sinal usando o mesmo circuito da soma sem sinal.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I e III.","I, II e III."],3,
"II é falsa e é a origem de uma classe inteira de defeitos: 0,1 não tem representação finita em base dois, e por isso 0,1 + 0,2 não dá exatamente 0,3 em ponto flutuante. É por essa razão que valor monetário se guarda em inteiro de centavos ou em tipo decimal próprio. III é o motivo de o complemento de dois ter vencido as outras representações com sinal.",null,
 {"id":"ot-0017","hab":"J"}],

["OT","Arquitetura de computadores","Sobre organização de processadores, avalie as afirmações a seguir.\nI. O pipeline reduz o tempo de execução de uma instrução isolada.\nII. O pipeline aumenta a vazão de instruções ao sobrepor etapas de instruções sucessivas.\nIII. Desvios condicionais podem provocar bolhas no pipeline, tratadas por predição de desvio.\nÉ correto apenas o que se afirma em",
["I.","II.","I e III.","I, II e III.","II e III."],4,
"I confunde vazão com latência. Uma instrução isolada não fica mais rápida no pipeline — pode até ficar ligeiramente mais lenta, pelos registradores entre estágios. O ganho é de vazão: várias instruções em etapas diferentes ao mesmo tempo. É a mesma distinção entre uma lavanderia atender mais roupa por hora e cada peça ficar pronta mais cedo.",null,
 {"id":"ot-0018","hab":"J"}]

]);
