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
 {id:"ih-0012",hab:"C"}]

]);
