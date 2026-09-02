/* Banco IA — IHC, usabilidade e acessibilidade (12 questões).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

["IH","Acessibilidade","O atributo alt em uma imagem HTML destina-se a",
["definir o alinhamento e o espaçamento da imagem em relação ao texto que a envolve na página.","criar um link para a versão da imagem em tamanho real, que se abre quando o usuário clica sobre a miniatura.","especificar a resolução e as dimensões da imagem, evitando que o navegador precise recalcular o layout.","fornecer uma descrição textual alternativa, lida por leitores de tela e exibida se a imagem não carregar.","aplicar um filtro visual à imagem, ajustando brilho e contraste conforme a preferência de quem visualiza."],3,
"É o mecanismo básico de acessibilidade para conteúdo visual. Para imagens meramente decorativas, a recomendação é alt=\"\" (vazio), para que o leitor de tela as ignore em vez de anunciar o nome do arquivo.",
"<img src=\"grafico-vendas.png\" alt=\"Gráfico de vendas trimestrais: alta de 12% no terceiro trimestre\">",
 {id:"ih-0001",hab:"I"}],

["IH","Acessibilidade","As diretrizes WCAG organizam-se em quatro princípios, resumidos pela sigla POUR:",
["performático, otimizado, único, responsivo e atualizado.","portátil, orientado, universal e relacional.","público, oficial, usável e rápido.","perceptível, operável, compreensível e robusto.","preciso, objetivo, uniforme e revisável."],3,
"Perceptível (o conteúdo chega aos sentidos), operável (a interface pode ser usada, inclusive só com teclado), compreensível (linguagem e comportamento previsíveis) e robusto (funciona com tecnologias assistivas).",null,
 {id:"ih-0002",hab:"C"}],

["IH","Acessibilidade","Um contraste insuficiente entre o texto e o fundo prejudica principalmente pessoas com",
["deficiência auditiva.","dislexia exclusivamente.","dificuldade motora.","baixa visão ou daltonismo.","deficiência cognitiva apenas."],3,
"A WCAG exige razão de contraste mínima de 4,5:1 para texto normal e 3:1 para texto grande. Cor nunca deve ser o único meio de transmitir informação — daí a necessidade de rótulo ou ícone junto.",null,
 {id:"ih-0003",hab:"C"}],

["IH","Acessibilidade","Compare os dois formulários abaixo. O problema de acessibilidade presente apenas no formulário A é que",
["o campo do formulário A não tem valor padrão definido, o que obriga o usuário a digitar do zero.","o rótulo não está associado ao campo, de modo que o leitor de tela não anuncia o que deve ser digitado.","o campo do formulário A usa o tipo text em vez de email, o que impede a validação automática do endereço.","o formulário A não possui botão de envio, o que impede a conclusão do preenchimento pelo usuário.","o campo A não tem largura definida em CSS."],1,
"Sem o atributo for apontando para o id do campo, o texto é apenas um parágrafo solto: o leitor de tela anuncia “caixa de edição” sem dizer do quê. A associação também amplia a área clicável, o que ajuda quem tem dificuldade motora. É um dos erros de acessibilidade mais comuns e mais baratos de corrigir.",
"<!-- formulário A -->\n<div>E-mail</div>\n<input type=\"text\" id=\"campo1\">\n\n<!-- formulário B -->\n<label for=\"campo2\">E-mail</label>\n<input type=\"email\" id=\"campo2\">",
 {id:"ih-0004",hab:"I"}],

["IH","Usabilidade","Segundo as heurísticas de Nielsen, exibir uma barra de progresso durante o carregamento atende à heurística de",
["correspondência entre o sistema e o mundo real.","estética e design minimalista.","prevenção de erros.","reconhecimento em vez de memorização.","visibilidade do estado do sistema."],4,
"A primeira heurística exige manter o usuário informado sobre o que está acontecendo, em tempo razoável. Sem retorno, o usuário não sabe se o sistema travou ou está processando.",null,
 {id:"ih-0005",hab:"C"}],

["IH","Usabilidade","A heurística “prevenção de erros” é mais bem exemplificada por",
["desabilitar o botão de envio até que os campos obrigatórios estejam preenchidos.","exibir uma mensagem de erro clara e específica logo após a falha ocorrer.","registrar o erro em log detalhado, para análise posterior pela equipe técnica responsável.","oferecer um manual de uso detalhado, acessível a partir de qualquer tela.","permitir desfazer a última ação executada, revertendo o estado anterior."],0,
"Prevenir é melhor que tratar: impedir a condição de erro supera a melhor das mensagens. Oferecer desfazer corresponde à heurística de controle e liberdade do usuário.",null,
 {id:"ih-0006",hab:"C"}],

["IH","Usabilidade","Reconhecimento em vez de memorização significa que a interface deve",
["exigir que o usuário memorize os comandos, o que agiliza a operação de quem já é experiente.","representar as ações por ícones sem rótulo, tornando a interface independente de idioma.","ocultar as opções secundárias, deixando na tela apenas aquilo que a maioria utiliza.","tornar visíveis objetos, ações e opções, reduzindo a carga de memória do usuário.","repetir as instruções de uso em todas as telas, para que não seja preciso consultá-las."],3,
"É a razão pela qual menus superam linhas de comando para usuários eventuais: reconhecer uma opção na tela é muito mais fácil do que lembrá-la do zero.",null,
 {id:"ih-0007",hab:"C"}],

["IH","Usabilidade","As “três regras de ouro” do projeto de interface, segundo Pressman, são",
["cor, tipografia e espaçamento, elementos que definem a identidade visual adotada em toda a tela.","modularidade, coesão e acoplamento, critérios de qualidade da estrutura interna.","velocidade, segurança e portabilidade, atributos de qualidade do sistema.","simplicidade, beleza e inovação, princípios do desenho gráfico aplicados à tela.","dar controle ao usuário, reduzir a carga de memória e manter a consistência da interface."],4,
"Essas três regras organizam boa parte das recomendações de IHC e já caíram literalmente no exame.",null,
 {id:"ih-0008",hab:"C"}],

["IH","Usabilidade","Um teste de usabilidade com cinco participantes, segundo pesquisas de Nielsen, tende a",
["ser estatisticamente conclusivo para toda a população de usuários atendidos pelo sistema.","ser insuficiente para identificar qualquer problema relevante de usabilidade.","revelar a maior parte dos problemas graves de usabilidade, com bom custo-benefício.","substituir os testes funcionais, já que os usuários exercitam as funções.","exigir laboratório especializado com equipamento de rastreamento ocular."],2,
"A curva de descoberta satura rápido: cinco usuários encontram cerca de 85% dos problemas. Vale mais rodar vários testes pequenos e iterativos do que um único teste grande.",null,
 {id:"ih-0009",hab:"C"}],

["IH","Interface web","O design responsivo caracteriza-se por",
["criar um site separado para cada família de dispositivos e resoluções.","exigir aplicativo nativo para o acesso a partir de dispositivos móveis.","reduzir a quantidade de conteúdo exibida quando a tela é pequena.","adaptar o layout ao tamanho da tela usando grades flexíveis e media queries.","fixar a largura da página em pixels, garantindo o mesmo desenho para todos os visitantes."],3,
"Um mesmo código serve a todas as larguras. Sites separados por dispositivo duplicam a manutenção; largura fixa em pixels é justamente o oposto do responsivo.",null,
 {id:"ih-0010",hab:"C"}],

["IH","Interface web","O design participativo distingue-se por",
["envolver os usuários finais como coautores ao longo do processo de projeto, e não apenas como avaliadores.","deixar todas as decisões de projeto a cargo do designer, que consolida as necessidades levantadas.","limitar-se à validação final do produto pelos usuários, antes da liberação da versão em produção.","substituir integralmente a etapa de análise de requisitos, que passa a ser feita durante o próprio projeto.","aplicar-se apenas a software livre."],0,
"A diferença está no papel do usuário: no design centrado no usuário ele é fonte de dados e avaliador; no participativo, é participante das decisões de projeto.",null,
 {id:"ih-0011",hab:"C"}],

["IH","Usabilidade","Ao projetar um sistema para pessoas idosas, uma decisão adequada é",
["reduzir o tamanho da fonte para exibir mais conteúdo por tela, diminuindo a necessidade de rolagem.","usar apenas ícones sem rótulos textuais, o que reduz a poluição visual e acelera o reconhecimento das funções.","adotar fontes maiores, alvos de toque generosos e alto contraste, evitando ações dependentes de tempo curto.","exigir gestos de múltiplos toques para as ações principais, o que reduz o número de botões visíveis na tela.","ocultar as opções menos usadas em menus profundos, deixando visível apenas o que é essencial à tarefa."],2,
"Declínio de acuidade visual e de motricidade fina pede alvos maiores e mais contraste. Ícone sem rótulo e menu profundo aumentam a carga cognitiva — vão na direção contrária.",null,
 {id:"ih-0012",hab:"C"}],

["IH","Acessibilidade","Sobre acessibilidade digital, avalie as afirmações a seguir.\nI. Texto alternativo em imagens permite que leitores de tela transmitam o conteúdo visual.\nII. A navegação por teclado deve alcançar todos os controles interativos da interface.\nIII. Usar apenas cor para indicar erro em formulário é adequado, desde que o contraste seja alto.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I, II e III.","I e II."],4,
"III contraria a diretriz de que cor nunca seja o único meio de transmitir informação. Contraste alto não resolve para quem tem daltonismo, nem para quem usa leitor de tela, que não anuncia cor: é preciso rótulo, ícone ou mensagem em texto. A armadilha da afirmação é acrescentar uma condição verdadeira — contraste importa — para validar uma prática que continua errada.",null,
 {"id":"ih-0013","hab":"J"}],

["IH","Usabilidade","Sobre as heurísticas de Nielsen, avalie as afirmações a seguir.\nI. Visibilidade do estado do sistema exige manter o usuário informado sobre o que está acontecendo.\nII. Prevenção de erros e boas mensagens de erro são a mesma heurística, com nomes diferentes.\nIII. Reconhecimento em vez de memorização recomenda deixar as opções visíveis, em vez de exigir que o usuário se lembre delas.\nÉ correto apenas o que se afirma em",
["I e III.","I.","II.","II e III.","I, II e III."],0,
"II funde duas heurísticas distintas e apaga a hierarquia entre elas. Prevenir é impedir que a condição de erro ocorra — desabilitar o botão, restringir a entrada; ajudar a reconhecer e recuperar-se do erro é o que se faz quando a prevenção falhou. A melhor mensagem de erro é a que nunca precisa aparecer.",null,
 {"id":"ih-0014","hab":"J"}],

["IH","Interface web","Sobre design responsivo, avalie as afirmações a seguir.\nI. Design responsivo consiste em manter uma versão separada do site para cada tipo de dispositivo.\nII. Media queries permitem aplicar estilos diferentes conforme características do dispositivo, como a largura da viewport.\nIII. Projetar primeiro para telas pequenas (mobile first) tende a forçar a priorização do conteúdo essencial.\nÉ correto apenas o que se afirma em",
["I.","II e III.","II.","I e III.","I, II e III."],1,
"I descreve a abordagem que o design responsivo veio substituir — o site móvel em domínio separado, com o custo de manter dois conteúdos que sempre divergem. Responsivo é um código só que se adapta ao espaço disponível. II e III descrevem o mecanismo e a disciplina que ele impõe: começar pelo menor espaço obriga a decidir o que é essencial.",null,
 {"id":"ih-0015","hab":"J"}],

["IH","Usabilidade","Avalie a asserção a seguir e a razão proposta para ela.\nI. Confirmar ações destrutivas com uma caixa de diálogo perde eficácia quando o diálogo aparece com muita frequência.\nPORQUE\nII. A repetição leva o usuário a automatizar a confirmação, respondendo sem ler, de modo que o diálogo deixa de funcionar como barreira.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],0,
"As duas são verdadeiras e a segunda explica a primeira. É o efeito conhecido como cegueira de alerta: quanto mais se pede confirmação, menos ela é lida. O corolário de projeto é que confirmação deve ser reservada ao que é raro e irreversível — e que oferecer desfazer costuma proteger mais que perguntar.",null,
 {"id":"ih-0016","hab":"A"}],

["IH","Acessibilidade","Avalie a asserção a seguir e a razão proposta para ela.\nI. Legendas em vídeos beneficiam não apenas pessoas com deficiência auditiva.\nPORQUE\nII. As diretrizes WCAG classificam a legenda como recurso exclusivo do princípio da robustez.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],2,
"A primeira é verdadeira: legenda serve a quem assiste em ambiente ruidoso, a quem estuda em segunda língua e a quem prefere ler — é o argumento do desenho universal, de que a adaptação para alguns melhora para todos. A segunda erra o princípio: legenda está sob perceptível, o primeiro dos quatro princípios POUR, e robustez trata de compatibilidade com tecnologias assistivas.",null,
 {"id":"ih-0017","hab":"A"}],

["IH","Interface web","Avalie a asserção a seguir e a razão proposta para ela.\nI. Um teste de usabilidade só produz resultado confiável com pelo menos trinta participantes.\nPORQUE\nII. A identificação de problemas de usabilidade requer significância estatística, obtida apenas com amostras grandes.\nA respeito dessas asserções, assinale a opção correta.",
["As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.","As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.","A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.","A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.","As asserções I e II são proposições falsas."],4,
"As duas são falsas. Teste de usabilidade é investigação qualitativa: procura-se descobrir QUAIS problemas existem, não estimar com que frequência ocorrem na população. A literatura da área indica que poucos participantes — em torno de cinco por perfil — já revelam a maioria dos problemas graves, e que é mais produtivo fazer várias rodadas pequenas entre correções que uma grande no fim. Exigir trinta participantes costuma resultar em nenhum teste.",null,
 {"id":"ih-0018","hab":"A"}],

["IH","Interface web","Sobre os três trechos acima, a análise correta quanto à acessibilidade é",
["os três trechos estão adequados, uma vez que o conteúdo é visualmente compreensível.","apenas a imagem apresenta problema, por não ter texto alternativo.","apenas o campo de entrada apresenta problema, por não ter valor padrão.","os problemas se resolvem com a adição de atributos de estilo (CSS) aos três elementos.","os três apresentam problemas: div não é foco de teclado nem se anuncia como botão, a imagem não tem alt, e o campo não tem rótulo associado."],4,
"Uma div com onclick não recebe foco pelo teclado nem é anunciada como botão pelo leitor de tela — o certo é <button>, ou div com role, tabindex e tratamento de tecla. A imagem sem alt é anunciada pelo nome do arquivo. E placeholder não é rótulo: ele desaparece ao digitar e muitos leitores de tela não o anunciam, o que exige <label for>. Estilo não resolve nenhum dos três, porque nenhum é problema de aparência.","<div class=\"botao\" onclick=\"enviar()\">Enviar</div>\n\n<img src=\"grafico.png\">\n\n<input type=\"text\" placeholder=\"E-mail\">",
 {"id":"ih-0019","hab":"I"}],

["IH","Usabilidade","A taxa de sucesso da tarefa com pior desempenho e a taxa média de sucesso das três tarefas são, respectivamente,",
["45% e 82%.","55% e 82%.","55% e 70%.","45% e 70%.","55% e 95%."],1,
"Cancelar pedido: 11 / 20 = 55%, a pior das três. Média das taxas: (18 + 20 + 11) / 60 = 49 / 60 ≈ 82%. A alternativa de 45% toma a taxa de FALHA da pior tarefa, confundindo o que se pede. Vale notar o que a média esconde: 82% parece razoável e convive com uma tarefa em que quase metade das pessoas não consegue cancelar o pedido.",null,
 {"id":"ih-0020","hab":"X","art":[{"t":"tabela","cap":"Teste de usabilidade com 20 participantes","cab":["Tarefa","Concluíram","Tempo médio (s)"],"al":["","num","num"],"linhas":[["Cadastrar","18","95"],["Buscar","20","22"],["Cancelar pedido","11","180"]]}]}],

["IH","Acessibilidade","Considerando os mínimos da WCAG no nível AA — 4,5:1 para texto normal e 3:1 para texto grande —, as combinações aprovadas são",
["apenas B.","A e B.","B e C.","B, C e D.","todas."],2,
"A tem 3,2:1 em texto normal, abaixo do mínimo de 4,5:1; B tem 4,8:1 em texto normal e passa; C tem 3,1:1 em texto grande, acima do mínimo de 3:1 e passa; D tem 2,4:1 e não alcança nem o mínimo de texto grande. Aprovam-se B e C. Aplicar 4,5:1 a todas as linhas reprovaria C indevidamente — o limiar depende do tamanho, porque texto maior é mais legível com menos contraste.",null,
 {"id":"ih-0021","hab":"X","art":[{"t":"tabela","cap":"Combinações de cor avaliadas","cab":["Combinação","Razão de contraste","Tamanho do texto"],"al":["","num",""],"linhas":[["A","3,2:1","normal"],["B","4,8:1","normal"],["C","3,1:1","grande"],["D","2,4:1","grande"]]}]}],

["IH","Interface web","Segundo os limites clássicos de tempo de resposta — 0,1 s para sensação de instantaneidade, 1 s para manter o fluxo de pensamento e 10 s para manter a atenção —, o retorno visual mais adequado para cada tela é, respectivamente,",
["indicador de progresso nas três telas.","nenhum retorno na listagem, indicador de progresso no detalhe e no relatório.","nenhum retorno na listagem e no detalhe, e indicador de progresso com estimativa no relatório.","indicador de progresso apenas na listagem.","mensagem de erro no relatório, por exceder o limite aceitável."],2,
"80 ms fica abaixo do limiar de instantaneidade e não pede retorno; 900 ms está sob 1 segundo, e o usuário mantém o fluxo sem precisar de indicador; 9 segundos exigem indicador, de preferência com estimativa, para segurar a atenção. Pôr indicador em tudo é o excesso oposto: ele pisca e some, e passa a poluir. E 9 segundos é lento, mas não é erro.",null,
 {"id":"ih-0022","hab":"X","art":[{"t":"tabela","cap":"Tempo de resposta percebido em três telas","cab":["Tela","Tempo (ms)"],"al":["","num"],"linhas":[["Listagem","80"],["Detalhe","900"],["Relatório","9.000"]]}]}],

["IH","Usabilidade","Um sistema de emissão de notas fiscais recebe reclamações de que os usuários perdem trabalho. Ao preencher um formulário longo, dividido em cinco etapas, um erro de validação na última etapa devolve o usuário à primeira, com todos os campos vazios. A equipe de desenvolvimento afirma que a validação está correta e que o problema é a digitação incorreta pelos usuários, que ocorre em cerca de 20% das submissões.\nA leitura mais adequada da situação é",
["o defeito de projeto está no tratamento do erro: a interface descarta trabalho válido em vez de preservar o preenchimento e apontar o campo problemático.","o problema é de treinamento dos usuários, e a medida adequada é elaborar um manual de preenchimento.","a validação deveria ser removida, já que impede a conclusão da tarefa.","o formulário deveria ser dividido em mais etapas, reduzindo a chance de erro em cada uma.","a taxa de 20% é aceitável para formulários longos, não exigindo intervenção."],0,
"Uma taxa de erro de 20% em uma tarefa recorrente é sintoma de projeto, não de usuário: o sistema é usado por quem ele tem. E a falha grave não é a validação, é o que acontece depois dela — descartar tudo transforma um erro de um campo em perda de cinco etapas de trabalho. Preservar o preenchimento, apontar o campo e permitir a correção no lugar é o comportamento esperado, e valida cedo, não só no fim. Manual e mais etapas não tocam no descarte.",null,
 {"id":"ih-0023","hab":"E"}],

["IH","Acessibilidade","Um portal de serviços públicos será auditado quanto à acessibilidade. A equipe tem quatro semanas e identificou os seguintes problemas: imagens sem texto alternativo em todo o site; contraste insuficiente em textos secundários; ausência de navegação por teclado no menu principal, que é a única forma de alcançar 80% das páginas; e falta de legenda em três vídeos institucionais da página inicial.\nA ordem de correção mais adequada, considerando o impacto sobre a possibilidade de uso do serviço, é",
["começar pelas legendas dos vídeos, por serem o conteúdo mais visível da página inicial.","começar pela navegação por teclado do menu, que hoje impede o acesso à maior parte do portal por quem não usa mouse.","começar pelo contraste, por ser a correção mais rápida de implementar.","corrigir os quatro problemas simultaneamente, dividindo a equipe em quatro frentes.","começar pelos textos alternativos, por serem o item mais citado em auditorias de acessibilidade."],1,
"O critério é impacto sobre a possibilidade de uso, e um só dos problemas torna 80% do portal inalcançável para quem navega por teclado — leitor de tela, deficiência motora, ou simplesmente mouse quebrado. Os demais degradam a experiência de partes do conteúdo; este impede o acesso ao conteúdo. Ordenar por rapidez de correção ou por frequência em auditoria são critérios reais, e nenhum deles é o que a pergunta estabelece. Dividir em quatro frentes com quatro semanas dispersa o esforço no problema bloqueante.",null,
 {"id":"ih-0024","hab":"E"}],

["IH","Interface web","Um aplicativo de banco exibe, na tela de transferência, um campo de valor, um campo de destinatário e um botão de confirmação. As reclamações mais frequentes no canal de atendimento são de transferências feitas para o destinatário errado. A análise dos registros mostra que 70% dessas ocorrências acontecem quando o usuário tem mais de um favorecido com nome parecido, e que a tela de confirmação atual exibe apenas o nome completo e o valor, em fonte pequena, com o botão de confirmar já em foco.\nA alteração de interface com maior probabilidade de reduzir o problema é",
["aumentar o tamanho da fonte na tela de confirmação, mantendo os mesmos campos.","acrescentar uma segunda tela de confirmação, com a mesma informação repetida.","exigir a digitação de senha adicional antes de concluir a transferência.","exibir uma mensagem de alerta genérica pedindo que o usuário confira os dados.","exibir na confirmação os dados que distinguem os favorecidos homônimos — banco, agência e final da conta —, e não deixar o botão de confirmar em foco inicial."],4,
"O problema é de distinção, não de atenção: nome completo em fonte maior continua igual entre dois homônimos. Mostrar o que difere — instituição, agência e final da conta — dá ao usuário a informação que a decisão exige, e tirar o foco inicial do botão evita a confirmação por reflexo. Repetir a mesma tela e pedir alerta genérico apostam na atenção que já falhou; senha adicional confirma identidade, não destinatário, e o usuário errado continuaria recebendo.",null,
 {"id":"ih-0025","hab":"E"}]

]);
