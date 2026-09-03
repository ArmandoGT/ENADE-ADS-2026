/* Banco IA — Lógica, matemática discreta e estatística (37 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null,
              {id, hab, art}] · `art` é a lista de artefatos: tabela, gráfico ou SVG. */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["ML","Lógica proposicional","O sistema deve recusar a operação exatamente quando a regra “se o valor excede o limite, então exige aprovação” for VIOLADA. A condição que a linha 01 deve conter é",
["valor <= limite && !temAprovacao","!(valor > limite) || temAprovacao","valor > limite || !temAprovacao","valor > limite && !temAprovacao","valor <= limite || temAprovacao"],3,
"A negação de p → q é p ∧ ¬q: a regra é violada quando a hipótese ocorre e a conclusão falha, ou seja, o valor excede o limite E não há aprovação. Escrever valor <= limite && !temAprovacao nega a hipótese em vez de afirmá-la, e recusaria operação pequena sem aprovação, que a regra não proíbe. Trocar o E por OU, em valor > limite || !temAprovacao, recusaria qualquer operação acima do limite, mesmo aprovada. A forma !(valor > limite) || temAprovacao é a própria implicação, não a sua negação: ela é verdadeira exatamente quando a regra é respeitada. E valor <= limite || temAprovacao é a mesma implicação escrita de outro modo.",
"01  if ( /* condicao */ ) {\n02      recusarOperacao();\n03  }",
 {id:"ml-0001",hab:"I"}],

["ML","Lógica proposicional","A proposição p → q é logicamente equivalente a",
["p ∧ q","¬p ∨ q","p ∨ ¬q","¬p ∧ q","q → p"],1,
"A condicional só é falsa quando p é verdadeira e q é falsa, que é exatamente o comportamento de ¬p ∨ q — a equivalência mais cobrada do tema. A conjunção exigiria as duas verdadeiras, e a condicional também é verdadeira quando a hipótese é falsa. A forma p ∨ ¬q inverte os papéis: falha quando p é falsa e q verdadeira, caso em que a condicional vale. A expressão ¬p ∧ q é verdadeira numa única linha da tabela. E a recíproca troca hipótese por conclusão, divergindo da original sempre que os dois valores diferem.",null,
 {id:"ml-0002",hab:"C"}],

["ML","Lógica proposicional","A contrapositiva de “se x é par, então x² é par” é",
["se x² não é par, então x não é par.","se x² é par, então x é par.","se x não é par, então x² não é par.","x é par e x² não é par.","se x é ímpar, então x² é par."],0,
"A contrapositiva de p → q é ¬q → ¬p, sempre equivalente à original: se x² não é par, então x não é par. A recíproca seria “se x é par, então x é par” com os termos trocados de lado, e não é equivalente. A inversa seria “se x não é par, então x² não é par”, que nega hipótese e conclusão sem inverter a ordem — também não equivalente. Afirmar “x é par e x² não é par” é a negação da implicação, não a contrapositiva. E “se x é ímpar, então x² é par” é simplesmente falso. Confundir contrapositiva com recíproca e inversa é o erro clássico.",null,
 {id:"ml-0003",hab:"C"}],

["ML","Lógica proposicional","A expressão (p ∨ ¬p) é classificada como",
["contradição.","contingência.","tautologia.","equivalência.","implicação."],2,
"É o princípio do terceiro excluído: verdadeira para qualquer valor de p. Contradição é sempre falsa (p ∧ ¬p); contingência depende dos valores atribuídos.",null,
 {id:"ml-0004",hab:"C"}],

["ML","Lógica proposicional","Considere a tabela-verdade abaixo. A expressão que a produz é",
["p ∧ q","p ∨ q","p → q","¬(p ∧ q)","p ↔ q"],4,
"A saída é verdadeira exatamente quando p e q têm o mesmo valor, comportamento da bicondicional. A conjunção seria verdadeira só na primeira linha. A disjunção seria verdadeira nas três primeiras. A condicional seria falsa apenas na segunda, e aqui a terceira também dá falso. E a negação da conjunção seria falsa só na primeira linha, justamente onde a tabela traz verdadeiro.",
"  p   |   q   |  saída\n  V   |   V   |    V\n  V   |   F   |    F\n  F   |   V   |    F\n  F   |   F   |    V",
 {id:"ml-0005",hab:"I"}],

["ML","Lógica proposicional","A condição da linha 01 pode ser reescrita, sem alterar o comportamento do programa, como",
["!ativo && semDebito","!(ativo || semDebito)","ativo && semDebito","!(ativo && semDebito)","ativo || !semDebito"],3,
"Pelas Leis de De Morgan, ¬p ∨ ¬q equivale a ¬(p ∧ q): a negação distribuída sobre a disjunção vira negação da conjunção, e o conectivo sempre troca. Escrever !ativo && semDebito muda o conectivo e ainda deixa uma das variáveis sem negar. A forma !(ativo || semDebito) é ¬p ∧ ¬q, que bloquearia só quem estivesse inativo E com débito — mais restritiva que a original. A expressão ativo && semDebito é a condição oposta, a de liberar o acesso. E ativo || !semDebito nega apenas uma das duas partes. Simetricamente, ¬p ∧ ¬q equivale a ¬(p ∨ q).",
"01  if (!ativo || !semDebito) {\n02      bloquearAcesso();\n03  }",
 {id:"ml-0006",hab:"I"}],

["ML","Lógica proposicional","Na condição em C abaixo, o bloco é executado quando",
["idade for maior que 18 e renda for maior que 3000.","idade for menor ou igual a 18 ou renda for menor ou igual a 3000.","idade for maior que 18 ou renda for maior que 3000.","idade for menor ou igual a 18 e renda for menor ou igual a 3000.","nunca."],3,
"Aplicando De Morgan, !(idade > 18 || renda > 3000) equivale a (idade <= 18 && renda <= 3000): a negação de uma disjunção vira conjunção das negações, e o conectivo troca. Exigir que a idade seja maior que 18 e a renda maior que 3000 é a condição sem negação alguma, exatamente o oposto. Exigir uma OU outra maior é a disjunção original, igualmente sem negar. Manter as negações mas conservar o OU — idade for menor ou igual a 18 ou renda for menor ou igual a 3000 — executaria o bloco em casos que a expressão original exclui, como o de quem tem 20 anos e renda baixa. E dizer que nunca executa ignora que basta ter os dois valores abaixo dos limites.",
"if ( !(idade > 18 || renda > 3000) ) {\n    /* bloco */\n}",
 {id:"ml-0007",hab:"I"}],

["ML","Lógica de predicados","A negação de “todo aluno foi aprovado” é",
["nenhum aluno foi aprovado.","pelo menos um aluno não foi aprovado.","todo aluno não foi aprovado.","alguns alunos foram aprovados.","todos os alunos foram reprovados."],1,
"¬(∀x P(x)) equivale a ∃x ¬P(x): basta um contraexemplo para derrubar uma afirmação universal. Dizer que nenhum aluno foi aprovado é muito mais forte do que a negação exige — negar “todos” não é afirmar o oposto para todos. “Todo aluno não foi aprovado” diz o mesmo que nenhum, apenas com outra ordem de palavras. Dizer que alguns foram aprovados é compatível com a afirmação original e por isso não a nega. E dizer que todos foram reprovados repete a mesma sobrecarga, agora com o antônimo.",null,
 {id:"ml-0008",hab:"C"}],

["ML","Conjuntos","Sejam A = {1, 2, 3, 4} e B = {3, 4, 5}. O conjunto A − B é",
["{3, 4}","{1, 2, 3, 4, 5}","{1, 2, 5}","{5}","{1, 2}"],4,
"A diferença A − B mantém os elementos de A que não estão em B: {1, 2}. A interseção seria {3, 4}, o que os dois têm em comum. A diferença simétrica seria {1, 2, 5}, reunindo o que está em um e não no outro, nos dois sentidos. A união seria {1, 2, 3, 4, 5}. E {5} é B − A, a diferença na ordem inversa — a operação não é comutativa, e é essa a armadilha.",null,
 {id:"ml-0009",hab:"C"}],

["ML","Conjuntos","Em uma turma de 40 alunos, 25 estudam Java, 18 estudam Python e 8 estudam ambas. Quantos não estudam nenhuma das duas?",
["3","5","7","10","12"],1,
"Pelo princípio da inclusão-exclusão: |A ∪ B| = 25 + 18 − 8 = 35, logo 40 − 35 = 5 alunos não estudam nenhuma das duas. Somar 25 e 18 sem descontar a interseção dá 43, e a diferença para o total leva ao 3 — é o erro típico, contar duas vezes quem estuda as duas. O 7 é apenas 25 − 18, comparação que não responde à pergunta. O 10 é 18 − 8, o número dos que estudam só Python. E 12 não corresponde a combinação alguma dos números do enunciado.",null,
 {id:"ml-0010",hab:"X"}],

["ML","Conjuntos","O número de subconjuntos de um conjunto com 5 elementos é",
["32","10","25","5","120"],0,
"São 2⁵ = 32, contando o conjunto vazio e o próprio conjunto: cada elemento pertence ou não pertence, duas escolhas independentes. O 10 é a quantidade de subconjuntos de exatamente dois elementos, que responde a outra pergunta. O 25 é 5², de quem troca a base pelo expoente. O 120 é 5!, o total de permutações dos cinco elementos, que ordena em vez de escolher. E 5 é a quantidade de elementos, não de subconjuntos.",null,
 {id:"ml-0011",hab:"C"}],

["ML","Estatística","O trecho abaixo calcula a mediana de um vetor já ordenado de tamanho par. Para o vetor [4, 6, 7, 7, 9, 10], o valor impresso é",
["6","6,5","8","7,17","7"],4,
"Com n = 6, o código faz (v[3] + v[4]) / 2 em base 1, ou seja (7 + 7) / 2 = 7. A média aritmética do conjunto seria 43/6 ≈ 7,17 — valor distinto, conceito distinto, e é o distrator que a questão persegue. O 6,5 sai de tomar v[2] e v[3], deslocando o par central em uma posição. O 8 é o ponto médio entre o menor e o maior, (4 + 10) / 2, que não é mediana nem média. E 6 é apenas o segundo elemento do vetor. Em vetor de tamanho ímpar bastaria o elemento central.",
"01  n <- 6\n02  v <- [4, 6, 7, 7, 9, 10]\n03  se resto(n, 2) = 0 entao\n04      m <- (v[n div 2] + v[n div 2 + 1]) / 2\n05  senao\n06      m <- v[(n div 2) + 1]\n07  fim-se\n08  escreva(m)",
 {id:"ml-0012",hab:"I"}],

["ML","Estatística","No conjunto 2, 3, 3, 5, 8, 9, 40, a medida menos afetada pelo valor 40 é",
["a média.","a amplitude.","o desvio padrão.","a mediana.","a variância."],3,
"A mediana é robusta a valores extremos, pois depende apenas da posição central. Média, desvio padrão, variância e amplitude são todos sensíveis a outliers.",null,
 {id:"ml-0013",hab:"C"}],

["ML","Estatística","O desvio padrão de um conjunto de dados mede",
["a diferença entre o maior e o menor valor.","a dispersão dos valores em torno da média.","o valor mais frequente.","a posição central dos dados.","a assimetria da distribuição."],1,
"Desvio padrão é dispersão em torno da média, na mesma unidade dos dados. Amplitude é a diferença entre extremos; moda é o mais frequente; mediana é posição central.",null,
 {id:"ml-0014",hab:"C"}],

["ML","Estatística","Um conjunto de dados em que nenhum valor se repete é classificado como",
["amodal.","bimodal.","multimodal.","unimodal.","simétrico."],0,
"Sem repetição não há moda, e o conjunto é amodal. Um valor mais frequente caracteriza unimodal; dois, bimodal.",null,
 {id:"ml-0015",hab:"C"}],

["ML","Matemática","O valor de (1010)₂ + (12)₈ + (A)₁₆ em base decimal é",
["20","26","34","30","40"],3,
"(1010)₂ = 8 + 0 + 2 = 10; (12)₈ = 1×8 + 2 = 10; (A)₁₆ = 10. Somando, 30. O erro conceitual que a questão persegue é tratar o octal como decimal, o que colocaria 12 no lugar de 10. O 20 é o que sobra ao ignorar uma das três parcelas — em geral a hexadecimal, por parecer símbolo e não número. E 26, 34 e 40 não saem de nenhuma leitura consistente das três bases: são âncoras de ordem de grandeza, que só apanham quem estima em vez de converter.",null,
 {id:"ml-0016",hab:"X"}],

["ML","Matemática","Um barramento de endereços com 16 linhas permite endereçar, no máximo,",
["16 posições","256 posições","1.024 posições","65.536 posições","32.768 posições"],3,
"Cada linha é um bit, então 2¹⁶ = 65.536 posições distintas. O 256 é 2⁸, o que se endereçaria com metade das linhas. O 1.024 é 2¹⁰. O 32.768 é 2¹⁵, resultado de contar uma linha a menos — o erro mais fácil de cometer aqui. E 16 é o número de linhas, não de posições: confundir os dois é ler o expoente como se fosse o resultado. A relação é sempre 2 elevado ao número de linhas.",null,
 {id:"ml-0017",hab:"C"}],

["ML","Matemática","Quantas senhas distintas de 4 dígitos podem ser formadas com os algarismos de 0 a 9, permitindo repetição?",
["10.000","210","5.040","40","24"],0,
"Com repetição, cada posição tem 10 possibilidades independentes: 10⁴ = 10.000. Sem repetição seriam arranjos, 10 × 9 × 8 × 7 = 5.040 — o distrator que a questão persegue, e que só se descarta lendo “permitindo repetição”. O 210 é a combinação de 10 elementos tomados 4 a 4, que ignora a ordem, e senha tem ordem. O 40 é 10 × 4, tratando as posições como alternativas em vez de escolhas encadeadas. E 24 é 4!, permutação de quatro elementos fixos.",null,
 {id:"ml-0018",hab:"X"}],
/* ---------- princípios de estatística e análise de dados (8) ---------- */
["ML","Estatística","Os salários de uma equipe de sete pessoas são, em milhares de reais: 4, 5, 5, 6, 7, 8 e 45. Para descrever o salário típico dessa equipe, a medida mais adequada é",
["a média, por considerar todos os valores observados e distribuir entre eles o peso de cada salário registrado.","a moda, uma vez que representa o salário mais frequente e por isso resume melhor o conjunto de observações.","a mediana, porque o valor extremo desloca a média para longe do que a maioria efetivamente recebe.","a amplitude, que expressa a distância entre o menor e o maior salário praticados no interior da equipe.","o desvio padrão, medida que sintetiza em um único número a dispersão dos salários em torno do valor central."],2,
"A média dá 11,4 mil — valor que ninguém recebe e que seis das sete pessoas não alcançam; a mediana é 6 mil. Escolher a média por considerar todos os valores observados é justamente o problema: o salário de 45 mil passa a pesar como se fosse típico. A moda, o salário mais frequente, é 5 mil aqui e acerta por acaso; em valores contínuos ela costuma nem existir. A amplitude expressa a distância entre o menor e o maior, e o desvio padrão sintetiza a dispersão em torno do centro — as duas são úteis e nenhuma descreve o valor típico. Distribuição assimétrica com valor extremo é exatamente o caso em que a média engana.",null,
 {id:"ml-0019",hab:"C"}],

["ML","Estatística","Um relatório afirma que cidades com mais bibliotecas apresentam maior expectativa de vida e conclui que construir bibliotecas aumenta a longevidade. O erro dessa conclusão está em",
["usar dados de cidades diferentes, quando o correto seria acompanhar a mesma cidade ao longo de vários anos consecutivos.","apresentar o resultado em números absolutos, quando deveria expressá-lo como proporção da população de cada cidade.","calcular a expectativa de vida sem considerar a diferença de faixa etária entre as populações analisadas no estudo.","tomar correlação por causalidade, ignorando que a renda do município pode explicar tanto uma variável quanto a outra.","não informar o tamanho da amostra, o que impede avaliar se o número de cidades observadas é suficiente."],3,
"Cidades ricas têm mais bibliotecas e também mais saneamento, mais médicos e melhor alimentação: a renda é a variável de confusão, que move as duas pontas sem que uma cause a outra. Usar dados de cidades diferentes, em vez de acompanhar a mesma ao longo de anos consecutivos, não é o defeito central — o desenho longitudinal ajudaria, mas a confusão poderia persistir. Apresentar em números absolutos em vez de proporção da população é problema de normalização, que muda a magnitude e não a inferência. Não considerar a diferença de faixa etária é ajuste relevante, e ainda assim um ajuste dentro do mesmo salto causal indevido. E não informar o tamanho da amostra afeta a confiança no dado, não a validade da conclusão.",null,
 {id:"ml-0020",hab:"C"}],

["ML","Estatística","Uma pesquisa de satisfação é respondida espontaneamente por usuários que acessam um banner no site. O resultado indica 92% de aprovação. A principal limitação desse dado é",
["o tamanho da amostra, insuficiente para representar o total de usuários cadastrados na plataforma avaliada.","a ausência de perguntas abertas, que impede compreender as razões por trás das notas atribuídas pelos respondentes.","o viés de autosseleção: quem responde espontaneamente costuma ter opinião mais intensa que a média dos usuários.","o período de coleta, que deveria estender-se por pelo menos doze meses para captar variações sazonais de uso.","a escala utilizada, que precisaria ter número par de opções para evitar a concentração de respostas no ponto médio."],2,
"O problema não é quantos responderam, é quem decidiu responder. Amostra que se autosseleciona não representa a população, e aumentar o número de respostas não corrige isso — só dá mais confiança em um número enviesado.",null,
 {id:"ml-0021",hab:"X"}],

["ML","Estatística","Em uma distribuição aproximadamente normal, com média 100 e desvio padrão 15, espera-se que aproximadamente 95% das observações estejam entre",
["70 e 130.","85 e 115, faixa correspondente a um desvio padrão para cada lado do valor médio da distribuição.","55 e 145, intervalo que corresponde a três desvios padrão em torno do valor central observado.","95 e 105, por ser a região de maior concentração de observações em qualquer distribuição simétrica.","100 e 130, já que a metade inferior da distribuição não é considerada no cálculo do intervalo."],0,
"A regra prática: cerca de 68% das observações cabem em um desvio, 95% em dois e 99,7% em três. Dois desvios de 15 são 30 para cada lado da média, logo 70 e 130. A faixa de 85 a 115 é um desvio padrão para cada lado, que cobre 68%. A de 55 a 145 é três desvios, cobrindo 99,7%. A de 95 a 105 é estreita demais e não corresponde a desvio algum: proximidade do centro não define percentual. E tomar 100 e 130, deixando de fora a metade inferior, esquece que o intervalo é simétrico em torno da média.",null,
 {id:"ml-0022",hab:"C"}],

["ML","Análise de dados","Um modelo de classificação para detectar fraude apresenta 99% de acurácia em uma base em que 1% das transações são fraudulentas. Esse resultado",
["comprova a qualidade do modelo, que errou apenas uma em cada cem transações submetidas à sua avaliação.","indica sobreajuste, pois acurácia acima de 95% em qualquer base sinaliza memorização dos dados de treinamento.","é compatível com um modelo que classifica tudo como legítimo, e por isso a acurácia é insuficiente para avaliar bases desbalanceadas.","depende do algoritmo empregado, sendo aceitável em árvores de decisão e insuficiente em redes neurais profundas.","só teria valor se a base contivesse número igual de transações fraudulentas e legítimas no conjunto de treinamento."],2,
"Um modelo que sempre responde legítimo acerta 99% e não detecta fraude alguma: em base desbalanceada o que interessa é precisão e revocação sobre a classe rara. Tomar o resultado como prova de qualidade, contando que errou uma em cada cem, é exatamente o engano, porque o erro está inteiro na classe que importa. Falar em sobreajuste inverte o diagnóstico — sobreajuste é ir bem no treino e mal no teste, e aqui o modelo falha onde importa em qualquer conjunto. Dizer que depende do algoritmo, aceitável em árvore de decisão e insuficiente em rede neural, confunde métrica com modelo: a acurácia mede a mesma coisa nos dois. E exigir base com número igual de fraudes e transações legítimas confunde avaliação com balanceamento de treino.",null,
 {id:"ml-0023",hab:"X"}],

["ML","Análise de dados","No preparo de uma base para análise, verifica-se que 30% dos registros têm o campo renda em branco. Substituir todos esses valores pela média das rendas informadas",
["é a prática recomendada, pois preserva o tamanho da amostra sem alterar a estatística central do conjunto analisado.","reduz artificialmente a variabilidade do campo e pode distorcer análises, especialmente se a ausência não for aleatória.","é indiferente para o resultado, uma vez que a média não se altera com a inclusão de novos valores iguais a ela.","corrige o problema apenas se a base tiver mais de mil registros, quando o efeito da substituição se dilui no total.","deve ser feita com a média dos registros vizinhos, técnica que preserva a ordem original das observações coletadas."],1,
"A média não muda, mas o desvio padrão despenca e as correlações se achatam. E há o problema maior: se quem não informou renda for justamente quem ganha menos, a imputação apaga o padrão que a análise procurava. Chamar a prática de recomendada, por preservar o tamanho da amostra sem alterar a estatística central, olha só para a média e ignora a variabilidade. Dizer que é indiferente porque a média não se altera com valores iguais a ela é verdade sobre a média e falso sobre todo o resto. Condicionar o efeito a bases com mais de mil registros inverte a lógica: com 30% de ausência o problema não se dilui, cresce. E imputar pela média dos registros vizinhos só faz sentido em série ordenada no tempo ou no espaço.",null,
 {id:"ml-0024",hab:"C"}],

["ML","Análise de dados","Um gráfico de barras exibe o faturamento de dois produtos, com o eixo vertical começando em 950 em vez de zero. Os valores reais são 1.000 e 1.050. A leitura visual sugere que o segundo produto fatura o dobro do primeiro. Esse gráfico",
["está correto, pois o recorte do eixo é recurso legítimo para destacar diferenças pequenas entre as categorias comparadas.","distorce a comparação, porque em gráfico de barras a área é lida como proporcional ao valor representado.","seria adequado apenas se os valores fossem expressos em percentual em vez de unidades monetárias absolutas.","deveria usar escala logarítmica no eixo vertical, o que tornaria a diferença entre os produtos mais perceptível.","é inconclusivo, já que a comparação exigiria a série histórica dos dois produtos ao longo de vários períodos."],1,
"Barra comunica magnitude pelo comprimento. Cortar a base quebra essa correspondência e transforma 5% de diferença em 100% de diferença visual. Em gráfico de linhas, que comunica variação, o recorte do eixo é aceitável.",null,
 {id:"ml-0025",hab:"C"}],

["ML","Análise de dados","Considere os dados abaixo, de tempo de resposta em milissegundos. A afirmação sustentada por eles é que",
["o servidor B é mais rápido, pois apresenta o menor tempo mediano entre os dois servidores comparados no teste.","o servidor B deve ser descartado, já que registrou o maior tempo individual observado durante a execução do teste.","os servidores são equivalentes, uma vez que a diferença entre as medianas é pequena diante da ordem de grandeza medida.","o servidor A oferece desempenho mais previsível, com dispersão bem menor, ainda que a mediana dos dois seja próxima.","não é possível comparar, pois a média aritmética dos tempos não foi informada para nenhum dos dois servidores."],3,
"Mediana quase igual, dispersão muito diferente: o servidor B tem casos de 480 ms que o usuário sente. Chamá-lo de mais rápido pelo menor tempo mediano é olhar o centro e ignorar a cauda. Descartá-lo por ter registrado o maior tempo individual é a pressa na direção oposta — um extremo isolado não condena, o que condena é a dispersão inteira. Tratar os dois como equivalentes, por ser pequena a diferença entre as medianas, é precisamente o que os dados desmentem. E dizer que não é possível comparar sem a média aritmética ignora que mediana, mínimo e máximo já dizem o essencial. Em desempenho o que dói é a cauda, daí a prática de medir percentil 95 ou 99.",
"Servidor A | mediana 120 ms | mínimo 110 | máximo 140\nServidor B | mediana 115 ms | mínimo  40 | máximo 480",
 {id:"ml-0026",hab:"I"}],

["ML","Lógica proposicional","Sobre lógica proposicional, avalie as afirmações a seguir.\nI. A proposição condicional p → q é falsa somente quando p é verdadeira e q é falsa.\nII. A contrapositiva de p → q é ¬q → ¬p, e é logicamente equivalente à original.\nIII. A negação de p ∧ q é ¬p ∧ ¬q.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I e II.","I, II e III."],3,
"III erra a lei de De Morgan: a negação da conjunção é a DISJUNÇÃO das negações, ¬p ∨ ¬q. Negar “choveu e fez frio” não é afirmar que não choveu e não fez frio — basta que uma das duas tenha falhado. Trocar o conectivo ao negar é o deslize mais comum nessa lei.",null,
 {"id":"ml-0027","hab":"J"}],

["ML","Conjuntos","Sejam A e B conjuntos finitos. Avalie as afirmações a seguir.\nI. |A ∪ B| = |A| + |B| − |A ∩ B|.\nII. Se A ⊂ B, então A ∩ B = B.\nIII. O conjunto das partes de um conjunto com n elementos tem 2ⁿ elementos.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I, II e III.","I e III."],4,
"II inverte o resultado: se A está contido em B, a interseção é o menor dos dois, ou seja A ∩ B = A. Quem responde B está pensando na UNIÃO, que nesse caso é de fato B. I é o princípio da inclusão-exclusão, e III sai de escolher, para cada elemento, entre estar ou não estar no subconjunto.",null,
 {"id":"ml-0028","hab":"J"}],

["ML","Estatística","Sobre medidas de posição e dispersão, avalie as afirmações a seguir.\nI. Duas amostras com a mesma média têm necessariamente a mesma dispersão.\nII. A mediana é menos sensível a valores extremos que a média.\nIII. O desvio padrão é expresso na mesma unidade dos dados, ao contrário da variância.\nÉ correto apenas o que se afirma em",
["II e III.","I.","II.","I e III.","I, II e III."],0,
"I é falsa por contraexemplo imediato: {5, 5, 5} e {0, 5, 10} têm média 5 e dispersões muito diferentes. É por isso que média sozinha não descreve distribuição, e que relatar média sem medida de dispersão esconde o que costuma importar. III explica a preferência prática pelo desvio padrão: variância em reais ao quadrado não se interpreta.",null,
 {"id":"ml-0029","hab":"J"}],

["ML","Estatística","Avalie a asserção a seguir e a razão proposta para ela.\nI. A mediana é preferível à média para descrever a renda de uma população.\nPORQUE\nII. A mediana é o valor que ocupa a posição central em um conjunto ordenado de observações.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],1,
"As duas são verdadeiras, mas a segunda apenas define a mediana como a que ocupa a posição central de um conjunto ordenado de observações — descreve o que ela é, não por que é preferível. O que justifica a escolha é a distribuição de renda ser fortemente assimétrica: poucos valores muito altos puxam a média para cima, e ela deixa de representar o caso típico da população. Definição não é razão, e é essa distinção que a questão cobra.",null,
 {"id":"ml-0030","hab":"A"}],

["ML","Lógica proposicional","Avalie a asserção a seguir e a razão proposta para ela.\nI. Uma tautologia é uma proposição verdadeira para toda atribuição de valores às suas variáveis.\nPORQUE\nII. Toda proposição composta por conectivos lógicos é uma tautologia, desde que não contenha negações.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],2,
"A primeira é a definição correta de tautologia; a segunda é falsa por contraexemplo trivial: p ∧ q não tem negação nenhuma e é falsa quando p é falsa. A condição inventada — ausência de negações — não tem relação com o conceito. É o tipo de razão que soa técnica e não resiste a um único caso.",null,
 {"id":"ml-0031","hab":"A"}],

["ML","Conjuntos","Avalie a asserção a seguir e a razão proposta para ela.\nI. O conjunto vazio não é subconjunto de nenhum conjunto.\nPORQUE\nII. Para que um conjunto A seja subconjunto de B, é necessário que A contenha ao menos um elemento de B.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],4,
"As duas são falsas. A definição correta é que A é subconjunto de B quando todo elemento de A pertence a B — e o vazio satisfaz isso por vacuidade, não havendo elemento algum que possa violar a condição. Daí o vazio ser subconjunto de todo conjunto, inclusive de si mesmo. A razão dada inventa uma exigência de não vacuidade que não está na definição.",null,
 {"id":"ml-0032","hab":"A"}],

["ML","Análise de dados","Uma equipe treina um modelo para prever inadimplência a partir de dados históricos de crédito. O conjunto tem 100 mil registros, dos quais 2% são inadimplentes. O primeiro modelo alcançou 98% de acurácia e foi apresentado como pronto para produção. Ao ser questionado, o analista verificou que o modelo classifica praticamente todos os casos como adimplentes.\nA leitura correta da situação e a medida adequada são",
["o modelo aprendeu a classe majoritária e a acurácia não é métrica informativa em base desbalanceada; deve-se avaliar por precisão, revocação e a matriz de confusão.","o modelo está adequado, já que 98% de acurácia é resultado alto para qualquer aplicação.","o problema é excesso de dados, e a medida adequada é reduzir a amostra de treinamento.","o problema é o número de variáveis, e a medida adequada é acrescentar mais atributos ao modelo.","o modelo está sobreajustado, e a medida adequada é aumentar a complexidade do algoritmo."],0,
"Com 2% de inadimplentes, responder sempre “adimplente” já rende 98% de acurácia sem aprender nada — é o paradoxo da acurácia em base desbalanceada. Considerar o modelo adequado porque 98% é resultado alto para qualquer aplicação é justamente o que a situação desmente. Falar em excesso de dados e reduzir a amostra de treinamento pioraria tudo, já que a classe rara é a que tem poucos exemplos. Acrescentar mais atributos ao modelo trata um problema de representação que o enunciado não aponta. E chamar de sobreajuste inverte o diagnóstico: sobreajuste é ir bem no treino e mal no teste, e aumentar a complexidade do algoritmo agravaria o quadro. O que importa se lê na matriz de confusão, em precisão e revocação.",null,
 {"id":"ml-0033","hab":"E"}],

["ML","Estatística","Um site de comércio eletrônico observou que, nos meses em que aumentou o investimento em anúncios, as vendas cresceram. A equipe de marketing propõe atribuir integralmente o crescimento aos anúncios e ampliar o orçamento. Um analista observa que os meses de maior investimento coincidem com novembro e dezembro, e que houve também redução de preços e ampliação do prazo de entrega no mesmo período.\nA objeção metodológica correta é",
["a amostra é pequena demais para qualquer conclusão sobre vendas.","a correlação observada não estabelece causalidade, e há fatores de confusão — sazonalidade, preço e prazo — que variaram junto com o investimento.","não há relação possível entre investimento em anúncios e volume de vendas.","os dados de venda precisariam ser convertidos em logaritmo antes de qualquer análise.","a análise deveria usar a mediana das vendas em vez da média."],1,
"Três variáveis mudaram ao mesmo tempo, e uma delas — o período do ano — afeta vendas por si só. Atribuir o efeito inteiro aos anúncios é tomar correlação por causalidade na presença de fatores de confusão. Dizer que a amostra é pequena demais não é a objeção: o problema não é a quantidade de meses, é a impossibilidade de separar as causas. Afirmar que não há relação possível entre investimento em anúncios e volume de vendas exagera na direção oposta, e nada nos dados sustenta isso. Converter os dados de venda em logaritmo é transformação útil em outros contextos e não desfaz confusão alguma. E usar a mediana em vez da média troca a estatística sem tocar no desenho. Separar os efeitos exigiria variar uma coisa por vez, ou um período de controle.",null,
 {"id":"ml-0034","hab":"E"}],

["ML","Lógica de predicados","Uma equipe especifica a regra de um sistema acadêmico: “todo aluno que cursou a disciplina obrigatória e obteve média igual ou superior a seis está aprovado”. Durante os testes de aceitação, descobriu-se que alunos que sequer se matricularam na disciplina estavam sendo marcados como aprovados pelo sistema, inclusive alunos de outros cursos. A implementação do requisito usa a expressão: se (cursou → média >= 6) então aprovado. A revisão de código anterior aprovou o trecho, por considerá-lo uma tradução literal do texto da regra.\nA causa do defeito é",
["a comparação usa maior ou igual, quando deveria usar apenas maior.","a implementação inverteu a ordem dos operandos da implicação.","a implicação é verdadeira quando o antecedente é falso, de modo que quem não cursou satisfaz a condição vacuamente; a regra exige conjunção, não implicação.","a expressão deveria usar disjunção entre as duas condições.","o defeito decorre de precedência de operadores, e resolve-se com parênteses adicionais."],2,
"A implicação p → q é verdadeira sempre que p é falsa: quem não cursou torna o antecedente falso e a expressão inteira verdadeira, aprovando o aluno. A regra exige as duas coisas ao mesmo tempo, o que em lógica é conjunção — cursou ∧ média >= 6. Trocar maior ou igual por apenas maior mudaria só o aluno com média exatamente seis, e não explica aprovados de outros cursos. Inverter a ordem dos operandos da implicação produziria outra proposição, também errada, mas não é esse o defeito descrito. Usar disjunção entre as condições pioraria, porque bastaria uma delas. E precedência de operadores não está em jogo: a expressão tem uma operação só, e parênteses adicionais não mudam nada. O defeito passa em revisão porque a expressão se lê quase como o texto da regra — e significa outra coisa.",null,
 {"id":"ml-0035","hab":"E"}],

["ML","Lógica proposicional","A tabela-verdade abaixo foi construída para três fórmulas. Com base nela, avalie as afirmações a seguir.\nI. As colunas de p → q e de ¬q → ¬p coincidem linha a linha, o que caracteriza equivalência lógica entre a condicional e sua contrapositiva.\nII. A fórmula p ∧ ¬q é verdadeira exatamente na linha em que p → q é falsa, o que a torna a negação da condicional.\nIII. Nenhuma das três fórmulas é tautologia.\nÉ correto o que se afirma em",
["I.","I e II.","I e III.","II e III.","I, II e III."],4,
"As colunas da condicional e da contrapositiva trazem V, F, V e V nas mesmas linhas, e coincidir em toda linha é a definição de equivalência — a contrapositiva não é consequência da condicional, é a mesma proposição escrita de outro modo. II observa a complementaridade: p ∧ ¬q vale V só na segunda linha, exatamente onde a condicional vale F, e duas fórmulas que se contradizem em toda linha são a negação uma da outra, o que explica por que negar uma condicional não produz outra condicional. III se confere olhando as colunas: cada uma tem ao menos um F, e tautologia é a fórmula verdadeira em toda linha da tabela. As três se sustentam, e todas se leem sem sair da tabela.",null,
 {"id":"ml-0036","hab":"J","art":[{"t":"tabela","cap":"Tabela-verdade das três fórmulas consideradas","cab":["p","q","p → q","¬q → ¬p","p ∧ ¬q"],"linhas":[["V","V","V","V","F"],["V","F","F","F","V"],["F","V","V","V","F"],["F","F","V","V","F"]]}]}],

["ML","Estatística","A tabela traz sete medições do tempo de resposta de um serviço. A média do conjunto é 30 ms e a mediana, 15 ms. Com base nesses dados, avalie as afirmações a seguir.\nI. A média superior à mediana caracteriza, neste caso, assimetria à esquerda.\nII. A mediana resiste à medição de 120 ms e, por isso, resume o comportamento típico do serviço melhor do que a média.\nIII. Excluída a medição de 120 ms, a média das seis restantes fica acima de 30 ms.\nÉ correto apenas o que se afirma em",
["I.","II.","III.","I e II.","II e III."],1,
"A mediana de 15 ms descreve o que acontece na maioria das requisições; a média de 30 ms não corresponde a medição alguma do conjunto, porque uma única observação de 120 ms a puxa sozinha. I inverte o nome da assimetria: quando a cauda longa está do lado dos valores altos, e é ela que arrasta a média para cima da mediana, a assimetria é à direita, também dita positiva. III erra a direção do efeito — sem a medição extrema sobram 11, 13, 15, 15, 17 e 19, que somam 90 e dão média de 15 ms, de modo que a média cai até a mediana em vez de subir, e é essa queda que mede o peso do valor extremo. Nada disso torna a média inútil: ela continua sendo a medida certa para dimensionar capacidade agregada, e é como resumo do caso típico que ela falha aqui.",null,
 {"id":"ml-0037","hab":"J","art":[{"t":"tabela","cap":"Tempo de resposta de sete medições de um serviço","cab":["Medição","Tempo (ms)"],"al":["num","num"],"linhas":[["1","11"],["2","13"],["3","15"],["4","15"],["5","17"],["6","19"],["7","120"]]}]}]

]);
