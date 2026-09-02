/* Banco IA — Lógica, matemática discreta e estatística (26 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["ML","Lógica proposicional","O sistema deve recusar a operação exatamente quando a regra “se o valor excede o limite, então exige aprovação” for VIOLADA. A condição que a linha 01 deve conter é",
["valor <= limite && !temAprovacao","valor > limite && !temAprovacao","valor > limite || !temAprovacao","!(valor > limite) || temAprovacao","valor <= limite || temAprovacao"],1,
"A negação de p → q é p ∧ ¬q. A regra é violada quando a hipótese ocorre e a conclusão falha: o valor excede o limite E não há aprovação. Trocar a ordem produziria a recíproca, e usar OU no lugar do E recusaria operações perfeitamente válidas.",
"01  if ( /* condicao */ ) {\n02      recusarOperacao();\n03  }",
 {id:"ml-0001",hab:"I"}],

["ML","Lógica proposicional","A proposição p → q é logicamente equivalente a",
["p ∧ q","¬p ∨ q","p ∨ ¬q","¬p ∧ q","q → p"],1,
"É a equivalência mais cobrada do tema: a condicional só é falsa quando p é verdadeira e q é falsa, exatamente o comportamento de ¬p ∨ q.",null,
 {id:"ml-0002",hab:"C"}],

["ML","Lógica proposicional","A contrapositiva de “se x é par, então x² é par” é",
["se x² é par, então x é par.","se x² não é par, então x não é par.","se x não é par, então x² não é par.","x é par e x² não é par.","se x é ímpar, então x² é par."],1,
"A contrapositiva de p → q é ¬q → ¬p, e é sempre equivalente à original. A recíproca (q → p) e a inversa (¬p → ¬q) não são equivalentes — confundi-las é o erro clássico.",null,
 {id:"ml-0003",hab:"C"}],

["ML","Lógica proposicional","A expressão (p ∨ ¬p) é classificada como",
["contradição.","tautologia.","contingência.","equivalência.","implicação."],1,
"É o princípio do terceiro excluído: verdadeira para qualquer valor de p. Contradição é sempre falsa (p ∧ ¬p); contingência depende dos valores atribuídos.",null,
 {id:"ml-0004",hab:"C"}],

["ML","Lógica proposicional","Considere a tabela-verdade abaixo. A expressão que a produz é",
["p ∧ q","p ∨ q","p → q","p ↔ q","¬(p ∧ q)"],3,
"A saída é verdadeira exatamente quando p e q têm o mesmo valor — comportamento da bicondicional. A conjunção só seria verdadeira na primeira linha.",
"  p   |   q   |  saída\n  V   |   V   |    V\n  V   |   F   |    F\n  F   |   V   |    F\n  F   |   F   |    V",
 {id:"ml-0005",hab:"I"}],

["ML","Lógica proposicional","A condição da linha 01 pode ser reescrita, sem alterar o comportamento do programa, como",
["!(ativo && semDebito)","!(ativo || semDebito)","ativo && semDebito","!ativo && semDebito","ativo || !semDebito"],0,
"Pelas Leis de De Morgan, ¬p ∨ ¬q equivale a ¬(p ∧ q): negar a disjunção das negações vira a negação da conjunção. Simetricamente, ¬p ∧ ¬q = ¬(p ∨ q). O erro típico é manter o conectivo ao distribuir a negação — ele sempre troca.",
"01  if (!ativo || !semDebito) {\n02      bloquearAcesso();\n03  }",
 {id:"ml-0006",hab:"I"}],

["ML","Lógica proposicional","Na condição em C abaixo, o bloco é executado quando",
["idade for maior que 18 e renda for maior que 3000.","idade for menor ou igual a 18 ou renda for menor ou igual a 3000.","idade for menor ou igual a 18 e renda for menor ou igual a 3000.","idade for maior que 18 ou renda for maior que 3000.","nunca."],2,
"Aplicando De Morgan: !(a > 18 || b > 3000) equivale a (a <= 18 && b <= 3000). A negação de uma disjunção vira conjunção das negações — cuidado com a troca do conectivo.",
"if ( !(idade > 18 || renda > 3000) ) {\n    /* bloco */\n}",
 {id:"ml-0007",hab:"I"}],

["ML","Lógica de predicados","A negação de “todo aluno foi aprovado” é",
["nenhum aluno foi aprovado.","pelo menos um aluno não foi aprovado.","todo aluno não foi aprovado.","alguns alunos foram aprovados.","todos os alunos foram reprovados."],1,
"¬(∀x P(x)) equivale a ∃x ¬P(x). Basta um contraexemplo para derrubar uma afirmação universal — negar não significa afirmar o oposto para todos.",null,
 {id:"ml-0008",hab:"C"}],

["ML","Conjuntos","Sejam A = {1, 2, 3, 4} e B = {3, 4, 5}. O conjunto A − B é",
["{3, 4}","{1, 2}","{1, 2, 5}","{5}","{1, 2, 3, 4, 5}"],1,
"A diferença A − B mantém os elementos de A que não estão em B, ou seja {1, 2}. A interseção seria {3, 4} e a diferença simétrica, {1, 2, 5}.",null,
 {id:"ml-0009",hab:"C"}],

["ML","Conjuntos","Em uma turma de 40 alunos, 25 estudam Java, 18 estudam Python e 8 estudam ambas. Quantos não estudam nenhuma das duas?",
["3","5","7","10","12"],1,
"Pelo princípio da inclusão-exclusão: |A ∪ B| = 25 + 18 − 8 = 35. Logo, 40 − 35 = 5 alunos não estudam nenhuma. Esquecer de subtrair a interseção é o erro típico.",null,
 {id:"ml-0010",hab:"X"}],

["ML","Conjuntos","O número de subconjuntos de um conjunto com 5 elementos é",
["5","10","25","32","120"],3,
"São 2⁵ = 32, contando o conjunto vazio e o próprio conjunto. Cada elemento tem duas possibilidades: pertencer ou não ao subconjunto.",null,
 {id:"ml-0011",hab:"C"}],

["ML","Estatística","O trecho abaixo calcula a mediana de um vetor já ordenado de tamanho par. Para o vetor [4, 6, 7, 7, 9, 10], o valor impresso é",
["6","6,5","7","7,17","8"],2,
"Com n = 6, o código faz (v[3] + v[4]) / 2 em base 1, ou seja (7 + 7) / 2 = 7. A média aritmética do conjunto seria 43/6 ≈ 7,17 — valor distinto, conceito distinto. Em vetor de tamanho ímpar bastaria o elemento central.",
"01  n <- 6\n02  v <- [4, 6, 7, 7, 9, 10]\n03  se resto(n, 2) = 0 entao\n04      m <- (v[n div 2] + v[n div 2 + 1]) / 2\n05  senao\n06      m <- v[(n div 2) + 1]\n07  fim-se\n08  escreva(m)",
 {id:"ml-0012",hab:"I"}],

["ML","Estatística","No conjunto 2, 3, 3, 5, 8, 9, 40, a medida menos afetada pelo valor 40 é",
["a média.","a mediana.","o desvio padrão.","a amplitude.","a variância."],1,
"A mediana é robusta a valores extremos, pois depende apenas da posição central. Média, desvio padrão, variância e amplitude são todos sensíveis a outliers.",null,
 {id:"ml-0013",hab:"C"}],

["ML","Estatística","O desvio padrão de um conjunto de dados mede",
["a diferença entre o maior e o menor valor.","a dispersão dos valores em torno da média.","o valor mais frequente.","a posição central dos dados.","a assimetria da distribuição."],1,
"Desvio padrão é dispersão em torno da média, na mesma unidade dos dados. Amplitude é a diferença entre extremos; moda é o mais frequente; mediana é posição central.",null,
 {id:"ml-0014",hab:"C"}],

["ML","Estatística","Um conjunto de dados em que nenhum valor se repete é classificado como",
["unimodal.","bimodal.","multimodal.","amodal.","simétrico."],3,
"Sem repetição não há moda, e o conjunto é amodal. Um valor mais frequente caracteriza unimodal; dois, bimodal.",null,
 {id:"ml-0015",hab:"C"}],

["ML","Matemática","O valor de (1010)₂ + (12)₈ + (A)₁₆ em base decimal é",
["20","26","30","34","40"],2,
"(1010)₂ = 8+0+2 = 10. (12)₈ = 1×8 + 2 = 10. (A)₁₆ = 10. Somando: 30. O erro comum é tratar o octal como decimal, o que daria 12 em vez de 10.",null,
 {id:"ml-0016",hab:"X"}],

["ML","Matemática","Um barramento de endereços com 16 linhas permite endereçar, no máximo,",
["16 posições","256 posições","1.024 posições","32.768 posições","65.536 posições"],4,
"Cada linha é um bit, então 2¹⁶ = 65.536 posições distintas. A relação é sempre 2 elevado ao número de linhas.",null,
 {id:"ml-0017",hab:"C"}],

["ML","Matemática","Quantas senhas distintas de 4 dígitos podem ser formadas com os algarismos de 0 a 9, permitindo repetição?",
["40","210","5.040","10.000","24"],3,
"Com repetição, cada posição tem 10 possibilidades independentes: 10⁴ = 10.000. Sem repetição seriam arranjos: 10×9×8×7 = 5.040.",null,
 {id:"ml-0018",hab:"X"}],
/* ---------- princípios de estatística e análise de dados (8) ---------- */
["ML","Estatística","Os salários de uma equipe de sete pessoas são, em milhares de reais: 4, 5, 5, 6, 7, 8 e 45. Para descrever o salário típico dessa equipe, a medida mais adequada é",
["a média, por considerar todos os valores observados e distribuir entre eles o peso de cada salário registrado.","a mediana, porque o valor extremo desloca a média para longe do que a maioria efetivamente recebe.","a moda, uma vez que representa o salário mais frequente e por isso resume melhor o conjunto de observações.","a amplitude, que expressa a distância entre o menor e o maior salário praticados no interior da equipe.","o desvio padrão, medida que sintetiza em um único número a dispersão dos salários em torno do valor central."],1,
"A média dá 11,4 mil — valor que ninguém recebe e que seis das sete pessoas não alcançam. A mediana é 6 mil. Distribuição assimétrica com valor extremo é exatamente o caso em que a média engana.",null,
 {id:"ml-0019",hab:"C"}],

["ML","Estatística","Um relatório afirma que cidades com mais bibliotecas apresentam maior expectativa de vida e conclui que construir bibliotecas aumenta a longevidade. O erro dessa conclusão está em",
["usar dados de cidades diferentes, quando o correto seria acompanhar a mesma cidade ao longo de vários anos consecutivos.","tomar correlação por causalidade, ignorando que a renda do município pode explicar tanto uma variável quanto a outra.","calcular a expectativa de vida sem considerar a diferença de faixa etária entre as populações analisadas no estudo.","apresentar o resultado em números absolutos, quando deveria expressá-lo como proporção da população de cada cidade.","não informar o tamanho da amostra, o que impede avaliar se o número de cidades observadas é suficiente."],1,
"Cidades ricas têm mais bibliotecas e mais saneamento, mais médicos e melhor alimentação. A renda é a variável de confusão: ela move as duas pontas, e a associação entre elas aparece sem que uma cause a outra.",null,
 {id:"ml-0020",hab:"C"}],

["ML","Estatística","Uma pesquisa de satisfação é respondida espontaneamente por usuários que acessam um banner no site. O resultado indica 92% de aprovação. A principal limitação desse dado é",
["o tamanho da amostra, insuficiente para representar o total de usuários cadastrados na plataforma avaliada.","o viés de autosseleção: quem responde espontaneamente costuma ter opinião mais intensa que a média dos usuários.","a ausência de perguntas abertas, que impede compreender as razões por trás das notas atribuídas pelos respondentes.","o período de coleta, que deveria estender-se por pelo menos doze meses para captar variações sazonais de uso.","a escala utilizada, que precisaria ter número par de opções para evitar a concentração de respostas no ponto médio."],1,
"O problema não é quantos responderam, é quem decidiu responder. Amostra que se autosseleciona não representa a população, e aumentar o número de respostas não corrige isso — só dá mais confiança em um número enviesado.",null,
 {id:"ml-0021",hab:"X"}],

["ML","Estatística","Em uma distribuição aproximadamente normal, com média 100 e desvio padrão 15, espera-se que aproximadamente 95% das observações estejam entre",
["85 e 115, faixa correspondente a um desvio padrão para cada lado do valor médio da distribuição.","70 e 130.","55 e 145, intervalo que corresponde a três desvios padrão em torno do valor central observado.","95 e 105, por ser a região de maior concentração de observações em qualquer distribuição simétrica.","100 e 130, já que a metade inferior da distribuição não é considerada no cálculo do intervalo."],1,
"A regra prática: cerca de 68% cabem em um desvio, 95% em dois, 99,7% em três. Dois desvios de 15 são 30 para cada lado da média.",null,
 {id:"ml-0022",hab:"C"}],

["ML","Análise de dados","Um modelo de classificação para detectar fraude apresenta 99% de acurácia em uma base em que 1% das transações são fraudulentas. Esse resultado",
["comprova a qualidade do modelo, que errou apenas uma em cada cem transações submetidas à sua avaliação.","é compatível com um modelo que classifica tudo como legítimo, e por isso a acurácia é insuficiente para avaliar bases desbalanceadas.","indica sobreajuste, pois acurácia acima de 95% em qualquer base sinaliza memorização dos dados de treinamento.","depende do algoritmo empregado, sendo aceitável em árvores de decisão e insuficiente em redes neurais profundas.","só teria valor se a base contivesse número igual de transações fraudulentas e legítimas no conjunto de treinamento."],1,
"Um modelo que sempre responde legítimo acerta 99% e não detecta nenhuma fraude. Em base desbalanceada, o que interessa é precisão e revocação sobre a classe rara — a acurácia esconde exatamente o erro que importa.",null,
 {id:"ml-0023",hab:"X"}],

["ML","Análise de dados","No preparo de uma base para análise, verifica-se que 30% dos registros têm o campo renda em branco. Substituir todos esses valores pela média das rendas informadas",
["é a prática recomendada, pois preserva o tamanho da amostra sem alterar a estatística central do conjunto analisado.","reduz artificialmente a variabilidade do campo e pode distorcer análises, especialmente se a ausência não for aleatória.","é indiferente para o resultado, uma vez que a média não se altera com a inclusão de novos valores iguais a ela.","corrige o problema apenas se a base tiver mais de mil registros, quando o efeito da substituição se dilui no total.","deve ser feita com a média dos registros vizinhos, técnica que preserva a ordem original das observações coletadas."],1,
"A média não muda, mas o desvio padrão despenca e as correlações se achatam. E há o problema maior: se quem não informou renda for justamente quem ganha menos, a imputação apaga o padrão que a análise procurava.",null,
 {id:"ml-0024",hab:"C"}],

["ML","Análise de dados","Um gráfico de barras exibe o faturamento de dois produtos, com o eixo vertical começando em 950 em vez de zero. Os valores reais são 1.000 e 1.050. A leitura visual sugere que o segundo produto fatura o dobro do primeiro. Esse gráfico",
["está correto, pois o recorte do eixo é recurso legítimo para destacar diferenças pequenas entre as categorias comparadas.","distorce a comparação, porque em gráfico de barras a área é lida como proporcional ao valor representado.","seria adequado apenas se os valores fossem expressos em percentual em vez de unidades monetárias absolutas.","deveria usar escala logarítmica no eixo vertical, o que tornaria a diferença entre os produtos mais perceptível.","é inconclusivo, já que a comparação exigiria a série histórica dos dois produtos ao longo de vários períodos."],1,
"Barra comunica magnitude pelo comprimento. Cortar a base quebra essa correspondência e transforma 5% de diferença em 100% de diferença visual. Em gráfico de linhas, que comunica variação, o recorte do eixo é aceitável.",null,
 {id:"ml-0025",hab:"C"}],

["ML","Análise de dados","Considere os dados abaixo, de tempo de resposta em milissegundos. A afirmação sustentada por eles é que",
["o servidor B é mais rápido, pois apresenta o menor tempo mediano entre os dois servidores comparados no teste.","o servidor A oferece desempenho mais previsível, com dispersão bem menor, ainda que a mediana dos dois seja próxima.","os servidores são equivalentes, uma vez que a diferença entre as medianas é pequena diante da ordem de grandeza medida.","o servidor B deve ser descartado, já que registrou o maior tempo individual observado durante a execução do teste.","não é possível comparar, pois a média aritmética dos tempos não foi informada para nenhum dos dois servidores."],1,
"Mediana quase igual, dispersão muito diferente: o B tem casos de 480 ms que o usuário sente. Em desempenho, o que dói é a cauda — por isso a prática de medir percentil 95 ou 99, e não só a média ou a mediana.",
"Servidor A | mediana 120 ms | mínimo 110 | máximo 140\nServidor B | mediana 115 ms | mínimo  40 | máximo 480",
 {id:"ml-0026",hab:"I"}],

]);
