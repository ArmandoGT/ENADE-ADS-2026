/* Banco IA — Banco de dados (25 questões, maioria com SQL ou modelo).
   Registro: [area, subtema, enunciado, [5 alternativas], índice da correta, explicação, código|null] */
(window.BANCO_IA = window.BANCO_IA || []).push(...[

/* ---------- SQL (11) ---------- */
["BD","SQL","Considere as tabelas abaixo. A consulta que retorna o nome de cada cliente e o total gasto por ele, listando apenas quem gastou mais de 1.000, é",
["SELECT c.nome, SUM(p.valor) FROM cliente c JOIN pedido p ON c.id = p.cliente_id GROUP BY c.nome HAVING SUM(p.valor) > 1000;",
 "SELECT c.nome, SUM(p.valor) FROM cliente c JOIN pedido p ON c.id = p.cliente_id WHERE SUM(p.valor) > 1000 GROUP BY c.nome;",
 "SELECT c.nome, p.valor FROM cliente c JOIN pedido p ON c.id = p.cliente_id WHERE p.valor > 1000 ORDER BY c.nome, p.valor DESC;",
 "SELECT c.nome, COUNT(p.valor) FROM cliente c, pedido p GROUP BY c.nome HAVING COUNT(*) > 1000;",
 "SELECT c.nome, SUM(p.valor) FROM cliente c LEFT JOIN pedido p ON c.id = p.cliente_id ORDER BY SUM(p.valor) > 1000;"],0,
"Filtro sobre resultado de função de agregação vai em HAVING, nunca em WHERE — o WHERE é avaliado antes do agrupamento. Essa distinção é a pegadinha mais frequente em SQL.",
"cliente(id, nome, cidade)\npedido(id, cliente_id, valor, data)",
 {id:"bd-0001",hab:"I"}],

["BD","SQL","A cláusula HAVING difere da WHERE porque a HAVING",
["filtra as linhas individuais antes que o agrupamento seja aplicado ao resultado.","ordena o resultado final segundo as colunas indicadas na cláusula de agrupamento.","filtra grupos após a aplicação do GROUP BY e das funções de agregação.","limita o número de linhas devolvidas, descartando as que excedem o total definido.","combina duas tabelas pela coluna comum, produzindo o conjunto de linhas resultante."],2,
"A ordem lógica de execução é FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Por isso a WHERE não enxerga o resultado de SUM ou COUNT.",null,
 {id:"bd-0002",hab:"C"}],

["BD","SQL","A consulta abaixo retorna",
["todos os clientes, com seus pedidos quando houver.","apenas os clientes que nunca fizeram nenhum pedido.","apenas os clientes que já fizeram pedidos.","todos os pedidos sem cliente associado.","nenhuma linha, pois a condição é contraditória."],1,
"O LEFT JOIN preserva todos os clientes e preenche com nulo as colunas de pedido de quem não tem nenhum. O filtro IS NULL sobre a chave da tabela à direita seleciona exatamente essas linhas. É o idioma padrão para achar registros sem correspondência — e o motivo de a condição não ser contraditória: o nulo vem do JOIN, não da tabela.",
"SELECT c.nome\n  FROM cliente c\n  LEFT JOIN pedido p ON c.id = p.cliente_id\n WHERE p.id IS NULL;",
 {id:"bd-0003",hab:"I"}],

["BD","SQL","Considere o comando abaixo. Ele retorna",
["todos os produtos cadastrados, ordenados de forma crescente pelo preço.","os produtos cujo preço não foi informado, isto é, cujo campo é nulo.","o preço médio dos produtos, em uma única linha de resultado agregado.","os cinco produtos de maior preço, conforme a ordenação decrescente.","os produtos cujo preço é superior à média geral de preços."],4,
"A subconsulta calcula a média e a consulta externa compara cada linha com ela. Subconsulta escalar no WHERE é padrão recorrente nas provas.",
"SELECT nome, preco\n  FROM produto\n WHERE preco > (SELECT AVG(preco) FROM produto);",
 {id:"bd-0004",hab:"I"}],

["BD","SQL","O comando que remove a estrutura de uma tabela, e não apenas seus dados, é",
["DELETE FROM tabela;","TRUNCATE TABLE tabela;","DROP TABLE tabela;","ALTER TABLE tabela DROP COLUMN;","UPDATE tabela SET campo = NULL;"],2,
"DROP é DDL e elimina a definição da tabela. DELETE (DML) remove linhas e pode ter WHERE; TRUNCATE remove todas as linhas mantendo a estrutura, sem gerar log linha a linha.",null,
 {id:"bd-0005",hab:"C"}],

["BD","SQL","Em SQL, a comparação campo = NULL",
["retorna verdadeiro quando o campo é nulo.","retorna sempre falso, mesmo com IS NULL.","gera erro de sintaxe.","é equivalente a campo <> NULL.","nunca retorna verdadeiro; deve-se usar campo IS NULL."],4,
"NULL representa ausência de valor e não é comparável por igualdade — qualquer comparação com ele resulta em desconhecido. Daí a existência dos operadores IS NULL e IS NOT NULL.",null,
 {id:"bd-0006",hab:"C"}],

["BD","SQL","O comando abaixo retorna quantas linhas, considerando que a tabela funcionario tem 10 registros e a tabela departamento tem 3?",
["3","10","13","0","30"],4,
"Sem cláusula de junção, a vírgula no FROM produz o produto cartesiano: 10 × 3 = 30 linhas. É o erro clássico de esquecer a condição de junção.",
"SELECT f.nome, d.nome\n  FROM funcionario f, departamento d;",
 {id:"bd-0007",hab:"I"}],

["BD","SQL","Considerando que a cidade São Paulo aparece em ambas as tabelas, as consultas A e B retornam, respectivamente,",
["o mesmo número de linhas, já que ambas percorrem as duas tabelas por inteiro.","A com uma linha a mais que B, por incluir o cabeçalho do conjunto resultante.","A com uma linha a menos que B, pois elimina a duplicata.","erro de sintaxe na consulta A, pois UNION exige a cláusula ORDER BY.","apenas a cidade São Paulo, que é a única presente nas duas tabelas."],2,
"UNION elimina duplicatas, e para isso precisa ordenar ou aplicar hash sobre o resultado — daí ser mais caro. UNION ALL apenas concatena, sendo mais rápido quando as duplicatas não importam ou não existem. Como São Paulo consta nas duas tabelas, ela aparece uma vez em A e duas em B.",
"-- consulta A\nSELECT cidade FROM cliente\nUNION\nSELECT cidade FROM fornecedor;\n\n-- consulta B\nSELECT cidade FROM cliente\nUNION ALL\nSELECT cidade FROM fornecedor;",
 {id:"bd-0008",hab:"I"}],

["BD","SQL","Considere o comando abaixo. Ele expressa a operação relacional de",
["diferença entre conjuntos.","junção natural.","projeção seguida de seleção.","interseção.","produto cartesiano."],0,
"EXCEPT (ou MINUS, em alguns bancos) devolve as linhas do primeiro conjunto que não estão no segundo — a diferença. Aqui, os clientes que nunca fizeram pedido.",
"SELECT id FROM cliente\nEXCEPT\nSELECT cliente_id FROM pedido;",
 {id:"bd-0009",hab:"I"}],

["BD","SQL","Um índice sobre a coluna cpf da tabela cliente melhora principalmente o desempenho de",
["consultas que filtram ou ordenam por cpf.","inserções em massa, que passam a localizar mais rápido a posição de gravação.","exclusões de grandes volumes, por dispensar a varredura completa da tabela.","criação de novas colunas, por reorganizar fisicamente o armazenamento.","rotinas de backup, que percorrem a tabela na ordem definida pelo índice."],0,
"Índice acelera a leitura por aquela coluna e, em contrapartida, encarece escrita, pois precisa ser mantido a cada inserção, alteração ou remoção. Esse é o trade-off central.",null,
 {id:"bd-0010",hab:"C"}],

["BD","SQL","A cláusula ON DELETE CASCADE em uma chave estrangeira determina que",
["a exclusão de um registro filho remova também o registro pai correspondente.","a chave estrangeira dos filhos seja preenchida com nulo quando o pai é excluído.","a exclusão do pai seja bloqueada enquanto existirem filhos referenciando-o.","a exclusão do registro pai remova automaticamente os registros filhos associados.","toda exclusão seja registrada em tabela de log antes de ser efetivada."],3,
"CASCADE propaga a exclusão do pai para os filhos. As alternativas descrevem outras opções reais: RESTRICT/NO ACTION bloqueia, e SET NULL anula a chave estrangeira.",null,
 {id:"bd-0011",hab:"C"}],

/* ---------- modelagem (9) ---------- */
["BD","Modelagem ER","Uma entidade fraca caracteriza-se por",
["não possuir atributos próprios, servindo apenas para ligar duas outras entidades quando o relacionamento é muitos-para-muitos.","depender de uma entidade forte para sua identificação, formando chave composta com a chave da entidade proprietária.","não se relacionar com nenhuma outra entidade do modelo, existindo de forma isolada e sendo convertida em tabela independente.","possuir apenas atributos multivalorados, que precisam ser desmembrados na conversão relacional.","participar de forma opcional em todos os relacionamentos em que aparece no modelo conceitual."],1,
"Dependente de funcionário é o exemplo clássico: identificado por (matrícula do funcionário + número do dependente). Notação: retângulo duplo, com relacionamento identificador em losango duplo.",null,
 {id:"bd-0012",hab:"C"}],

["BD","Modelagem ER","Ao transformar um relacionamento N:M do modelo conceitual para o modelo relacional, obtém-se",
["uma nova tabela associativa contendo as chaves estrangeiras das duas entidades.","uma tabela única resultante da fusão das duas entidades, com chave primária composta.","uma chave estrangeira em cada uma das duas tabelas, apontando reciprocamente para a outra.","um atributo multivalorado em uma das tabelas, guardando as chaves da entidade relacionada.","duas tabelas independentes, já que o relacionamento é resolvido em tempo de consulta."],0,
"Relacionamentos muitos-para-muitos sempre viram tabela própria. Se o relacionamento tiver atributos (data, quantidade), eles vão para essa mesma tabela.",null,
 {id:"bd-0013",hab:"C"}],

["BD","Modelagem ER","Considere o modelo abaixo. O número total de chaves estrangeiras no esquema relacional resultante é",
["1","2","3","5","4"],4,
"Os dois relacionamentos 1:N geram uma FK cada (em pedido e em item, apontando para cliente e para pedido). O relacionamento N:M gera uma tabela associativa com duas FKs. Total: 4.",
"CLIENTE (1) ---- (N) PEDIDO\nPEDIDO  (1) ---- (N) ITEM\nPRODUTO (N) ---- (M) FORNECEDOR",
 {id:"bd-0014",hab:"I"}],

["BD","Modelagem ER","A cardinalidade (1,1) em uma das extremidades de um relacionamento indica que a entidade",
["pode participar de nenhuma ou de várias ocorrências do relacionamento.","participa obrigatoriamente e de exatamente uma ocorrência do relacionamento.","é uma entidade fraca, identificada pela chave da entidade proprietária.","possui chave primária composta por atributos de ambas as entidades.","participa de forma opcional, podendo não estar associada a ocorrência alguma."],1,
"O par (mínimo, máximo) informa participação e grau: (1,1) é obrigatória e única; (0,1) é opcional e única; (0,n) é opcional e múltipla; (1,n) é obrigatória e múltipla.",null,
 {id:"bd-0015",hab:"C"}],

["BD","Normalização","Uma tabela está na Primeira Forma Normal (1FN) quando",
["não apresenta dependência funcional parcial em relação à chave primária.","possui chave primária composta por duas ou mais colunas do esquema.","não apresenta dependência transitiva entre os atributos não chave da tabela.","todos os seus atributos são atômicos, sem grupos repetitivos ou valores multivalorados.","não possui chaves estrangeiras apontando para outras tabelas do banco."],3,
"1FN trata da atomicidade. Guardar “telefone1, telefone2, telefone3” em uma coluna, ou vários valores separados por vírgula, viola a 1FN.",null,
 {id:"bd-0016",hab:"C"}],

["BD","Normalização","A Segunda Forma Normal (2FN) exige que a tabela esteja na 1FN e que",
["todo atributo não chave dependa da totalidade da chave primária, e não apenas de parte dela.","não haja dependência transitiva entre os atributos que não compõem a chave.","não existam valores nulos em nenhuma das colunas que compõem a chave primária da tabela.","exista apenas uma chave candidata na tabela, evitando ambiguidade na identificação dos registros.","todas as colunas estejam indexadas, para garantir desempenho nas consultas."],0,
"Dependência parcial só é possível quando a chave é composta — daí tabelas com chave simples já estarem em 2FN automaticamente. Dependência transitiva é problema da 3FN.",null,
 {id:"bd-0017",hab:"C"}],

["BD","Normalização","A tabela definida abaixo, cuja chave primária é num_pedido, viola a",
["1FN, por conter atributos multivalorados que armazenam mais de um valor em uma mesma coluna da tabela.","forma normal de Boyce-Codd, por existirem duas chaves candidatas sobrepostas que determinam o mesmo atributo.","2FN, por conter dependência parcial de uma chave primária composta por mais de uma coluna da tabela.","3FN, porque nome_cliente e cidade_cliente dependem de cod_cliente, e não diretamente da chave primária.","4FN, por conter dependência multivalorada entre atributos que não guardam relação funcional entre si."],3,
"A dependência é transitiva: num_pedido determina cod_cliente, que por sua vez determina nome e cidade. A 2FN não é violada porque a chave é simples — dependência parcial só ocorre com chave composta. A correção é mover os dados do cliente para a tabela CLIENTE, deixando em PEDIDO apenas a chave estrangeira.",
"CREATE TABLE pedido (\n    num_pedido     INT PRIMARY KEY,\n    cod_cliente    INT,\n    nome_cliente   VARCHAR(100),\n    cidade_cliente VARCHAR(60),\n    data_pedido    DATE\n);",
 {id:"bd-0018",hab:"I"}],

["BD","Normalização","A desnormalização deliberada de um esquema pode ser justificada quando",
["se deseja garantir a integridade dos dados.","a tabela possui poucos registros.","o ganho de desempenho em leitura compensa a redundância introduzida e o risco de inconsistência.","não existem chaves estrangeiras no esquema, o que dispensa a verificação de integridade referencial.","o banco de dados é relacional, arquitetura em que a redundância não compromete a integridade."],2,
"É decisão de engenharia, não descuido: em cenários de leitura intensa (relatórios, data warehouse) evita-se junções custosas ao preço de redundância controlada e atualização mais complexa.",null,
 {id:"bd-0019",hab:"C"}],

["BD","Modelagem ER","Um atributo multivalorado no modelo conceitual, ao ser convertido para o modelo relacional, deve",
["permanecer como uma única coluna com valores separados por vírgula.","originar uma nova tabela relacionada à entidade original por chave estrangeira.","ser descartado na conversão, por não ter equivalente no modelo relacional.","tornar-se parte da chave primária, garantindo unicidade dos registros.","ser convertido em atributo derivado, calculado a partir dos demais."],1,
"Manter vários valores numa coluna viola a 1FN e inviabiliza consultas. A solução é a tabela satélite (por exemplo, TELEFONE_CLIENTE).",null,
 {id:"bd-0020",hab:"C"}],

/* ---------- transações e integridade (5) ---------- */
["BD","Transações","A propriedade ACID que garante que uma transação ocorre por inteiro ou não ocorre é a",
["consistência.","concorrência.","isolamento.","durabilidade.","atomicidade."],4,
"Atomicidade é o tudo-ou-nada, sustentado por commit e rollback. Consistência preserva as regras de integridade; isolamento oculta estados intermediários; durabilidade garante persistência após o commit.",null,
 {id:"bd-0021",hab:"C"}],

["BD","Transações","A propriedade que garante que os efeitos de uma transação confirmada sobrevivem a uma falha do sistema é a",
["durabilidade.","consistência.","isolamento.","atomicidade.","serialização."],0,
"Durabilidade é assegurada pelo log de transações: após o commit, o registro em log permite refazer as operações na recuperação, mesmo que os dados ainda não tenham ido para o disco.",null,
 {id:"bd-0022",hab:"C"}],

["BD","Transações","O fenômeno da leitura suja (dirty read) ocorre quando uma transação",
["é abortada pelo gerenciador.","lê o mesmo dado duas vezes com resultados diferentes.","não consegue obter bloqueio sobre um registro.","lê um dado que outra transação alterou mas ainda não confirmou.","grava sobre a alteração de outra transação."],3,
"Leitura suja lê alteração não confirmada, que pode sofrer rollback. Ler duas vezes com resultados distintos é leitura não repetível; níveis de isolamento mais altos previnem cada anomalia.",null,
 {id:"bd-0023",hab:"C"}],

["BD","Integridade","O objeto de banco de dados definido abaixo tem por finalidade",
["impedir automaticamente que qualquer alteração deixe o saldo negativo, rejeitando a operação.","criar um índice sobre a coluna saldo, acelerando as consultas que filtram por esse valor específico.","normalizar a tabela conta até a terceira forma normal, eliminando dependências transitivas.","gerar uma cópia de segurança integral da tabela a cada alteração efetivada nos registros.","definir a chave primária da tabela e a restrição de unicidade associada."],0,
"É uma trigger: dispara automaticamente antes de cada alteração e aborta a operação que violaria a regra. Triggers implementam integridade semântica que não cabe em restrição declarativa simples — e valem para qualquer caminho de acesso, inclusive alterações feitas fora da aplicação.",
"CREATE TRIGGER trg_saldo_negativo\nBEFORE UPDATE ON conta\nFOR EACH ROW\nBEGIN\n    IF NEW.saldo < 0 THEN\n        SIGNAL SQLSTATE '45000'\n        SET MESSAGE_TEXT = 'Saldo nao pode ficar negativo';\n    END IF;\nEND;",
 {id:"bd-0024",hab:"I"}],

["BD","Integridade","A integridade referencial garante que",
["nenhuma coluna da tabela aceite valores nulos, o que garante o preenchimento completo de todos os registros inseridos.","os tipos de dados sejam compatíveis entre colunas relacionadas, evitando conversões implícitas.","todas as tabelas do esquema tenham chave primária definida, ainda que ela seja composta por duas ou mais colunas.","não existam registros duplicados em nenhuma tabela, o que é assegurado por restrições de unicidade.","todo valor de chave estrangeira corresponda a um valor existente na chave primária referenciada, ou seja nulo."],4,
"É a regra que impede o registro órfão. A chave estrangeira pode ser nula (relacionamento opcional), mas se tiver valor, esse valor precisa existir na tabela referenciada.",null,
 {id:"bd-0025",hab:"C"}],

["BD","Normalização","Sobre formas normais, avalie as afirmações a seguir.\nI. Uma tabela está na 1FN quando todos os seus atributos são atômicos.\nII. Uma tabela com chave primária simples pode violar a 2FN por dependência parcial.\nIII. A 3FN elimina dependências transitivas entre atributos não chave.\nÉ correto apenas o que se afirma em",
["I.","II.","II e III.","I, II e III.","I e III."],4,
"II é impossível por construção: dependência parcial é dependência de PARTE da chave, e chave simples não tem partes. Toda tabela na 1FN com chave primária de um único atributo já está automaticamente na 2FN. Quem marca II costuma ter decorado o enunciado da 2FN sem perceber a condição que o ativa.",null,
 {"id":"bd-0026","hab":"J"}],

["BD","Transações","Sobre as propriedades ACID das transações, avalie as afirmações a seguir.\nI. Atomicidade garante que a transação seja executada integralmente ou não deixe efeito algum.\nII. Consistência garante que a transação leve o banco de um estado válido a outro estado válido.\nIII. Durabilidade garante que transações concorrentes não interfiram umas nas outras.\nÉ correto apenas o que se afirma em",
["I e II.","I.","II.","II e III.","I, II e III."],0,
"III descreve isolamento, não durabilidade. Durabilidade é a garantia de que, uma vez confirmada, a transação sobrevive a queda de energia ou falha do servidor — é sobre persistência, não sobre concorrência. Trocar as duas é o erro mais comum na sigla, porque ambas soam como promessas de segurança.",null,
 {"id":"bd-0027","hab":"J"}],

["BD","Integridade","Sobre restrições de integridade em bancos relacionais, avalie as afirmações a seguir.\nI. A chave primária pode conter valor nulo, desde que seja única na tabela.\nII. A integridade referencial exige que todo valor de chave estrangeira exista na tabela referenciada ou seja nulo.\nIII. A cláusula ON DELETE CASCADE propaga a exclusão para os registros que referenciam a linha removida.\nÉ correto apenas o que se afirma em",
["I.","II e III.","II.","I e III.","I, II e III."],1,
"I viola a integridade de entidade: chave primária não admite nulo, porque nulo significa valor desconhecido e não serve para identificar linha nenhuma. Unicidade e não nulidade são duas exigências, e a afirmação concede uma para dispensar a outra. Quem hesita costuma estar pensando em chave candidata declarada como UNIQUE, que de fato admite nulo.",null,
 {"id":"bd-0028","hab":"J"}]

]);
