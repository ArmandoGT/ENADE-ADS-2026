# ENADE 2026 — Tecnologia em Análise e Desenvolvimento de Sistemas

Material de estudo para o Exame Nacional de Desempenho dos Estudantes, edição de 2026, área
de Tecnologia em Análise e Desenvolvimento de Sistemas. Reúne o acervo oficial do Inep das
cinco edições anteriores, o mapeamento questão a questão desse acervo, um banco autoral de
questões calibrado sobre a incidência observada, e um sistema local de simulados, revisão e
medição de desempenho.

Funciona inteiramente no navegador, sem internet e sem servidor de aplicação. Nenhum dado sai
da máquina.

---

## 1. A prova de 2026

A estrutura do exame mudou nesta edição. As provas de 2008 a 2021 tinham 40 questões — oito
objetivas e duas discursivas de Formação Geral, mais 27 objetivas e três discursivas do
componente específico. A partir de 2026 vigora outra composição:

| Componente | Objetivas | Discursivas |
|---|---|---|
| Formação Geral | 15 | — |
| Componente específico de TADS | 30 | 1 |
| **Total** | **45** | **1** |

Duração de quatro horas. Aplicação em 29 de novembro de 2026, domingo.

### Fontes normativas

| Documento | Objeto |
|---|---|
| Portaria Inep nº 154, de 14/04/2026 | Diretrizes do componente de Formação Geral. Fixa as 15 questões de múltipla escolha e lista doze objetos de conhecimento. |
| Portaria Inep nº 169, de 14/04/2026 | Diretrizes do componente específico de TADS. Fixa 30 objetivas e uma discursiva, duas competências e vinte objetos de conhecimento. |
| Edital Inep nº 61, de 15/05/2026 | Confirma a composição e a duração. O item 3.8 determina que os itens de Formação Geral sejam concebidos segundo os princípios dos Direitos Humanos. O item 3.9.1 acrescenta à correção da discursiva os critérios de clareza, coerência, coesão, estratégias argumentativas e vocabulário. |

O item 16.5 do edital remete o cálculo da nota a nota técnica ainda não publicada. **Não
existe, portanto, peso oficial divulgado para 2026.** Onde este material exibe pontuação
ponderada, aplica a proporção histórica do exame — 25% para a Formação Geral e 75% para o
componente específico, este subdividido em 85% de objetivas e 15% de discursiva. A premissa
está isolada em uma única constante (`PESOS`, em `estudo/assets/simulado.js`) e sinalizada
como provisória em toda tela que a utiliza.

---

## 2. Conteúdo do pacote

```
provas/                      cadernos oficiais das cinco edições, em PDF
gabaritos_oficiais/          gabaritos oficiais das objetivas
padroes_resposta/            padrões oficiais de resposta das discursivas
questoes_mapeadas.csv        as 200 questões do acervo, classificadas uma a uma
manifesto_enade_tads.csv     procedência de cada arquivo, com a URL de origem no Inep
estudo/                      o sistema de estudo
```

Acervo oficial: edições de 2008, 2011, 2014, 2017 e 2021 — 200 questões, sendo 175 objetivas
e 25 discursivas, das quais cinco anuladas. As páginas dos cadernos e dos padrões de resposta
foram extraídas em imagem (168 e 31 arquivos, respectivamente) para exibição junto às questões
nos simulados.

O arquivo `questoes_mapeadas.csv` classifica cada questão por ano, número, bloco, tipo, área,
tema, habilidade cobrada, formato do enunciado e gabarito. É a base empírica de que derivam a
proporção por área dos simulados e a cota de sorteio do banco autoral.

---

## 3. O sistema de estudo

Em `estudo/`, dez páginas independentes que compartilham estado local:

| Página | Função |
|---|---|
| `index.html` | Porta de entrada e contagem regressiva. |
| `plano.html` | Análise de incidência do acervo, mapa filtrável das 200 questões, gestão do tempo de prova e cronograma de estudo. |
| `simulado-01.html` a `simulado-04.html` | Quatro provas montadas com questões reais do Inep, exibidas como imagem da página original do caderno. |
| `simulado-ia.html` | Prova gerada a cada clique a partir do banco autoral, no formato de 2026, ou treino restrito a uma área. |
| `discursivas.html` | Acervo de discursivas com autocorreção por rubrica, ensaio cronometrado e modo de volume. |
| `painel.html` | Consolidação do desempenho por objeto de conhecimento oficial, por área e ao longo do tempo. |
| `revisao.html` | Revisão espaçada das questões erradas. |

### Simulados com questões oficiais

Os simulados 1 a 4 reproduzem a montagem vigente até 2021 e **não foram reestruturados para
o formato de 2026**. A decisão é deliberada: a questão do Inep é a que caiu, e adaptá-la ao
novo caderno destruiria o valor de treinar com o item original. Cada um exibe tarja explicando
a diferença de formato e remetendo ao Simulado IA para ensaiar a composição atual.

### Banco autoral

644 questões objetivas e 36 discursivas escritas como previsão para 2026, distribuídas por
onze áreas:

| Área | Questões | Área | Questões |
|---|---|---|---|
| Formação geral | 156 | Banco de dados | 40 |
| Engenharia de software | 107 | SO, redes e distribuídos | 40 |
| UML e projeto orientado a objetos | 74 | Segurança e legislação | 36 |
| Algoritmos e estruturas de dados | 60 | Arquitetura de computadores | 28 |
| Gestão de projetos | 41 | IHC e acessibilidade | 25 |
| Lógica e matemática | 37 | | |

A cota de sorteio do componente específico — oito questões de engenharia de software, cinco de
orientação a objetos, quatro de algoritmos, e assim por diante — reproduz a incidência
histórica medida no acervo, com três desvios que as portarias justificam: segurança sobe de
uma para duas questões, porque a Portaria 169 nomeia "segurança cibernética" e "legislação,
normas, ética e responsabilidade socioambiental" como objetos distintos; algoritmos e banco de
dados sobem uma questão cada, porque "estruturas de dados" passa a ser objeto próprio.

### Discursivas

24 discursivas oficiais do Inep e 36 autorais, com 296 itens de rubrica no total. Onde o
padrão oficial declara o valor de cada item, a rubrica usa esse valor; onde apenas enumera o
que se espera, a divisão dos pontos é interpretativa e está sinalizada na questão.

O ensaio cronometrado reproduz a prova de 2026 — uma discursiva em 40 minutos. Um segundo
modo enfileira quatro questões, sem correspondência com o exame, para acumular repertório. As
discursivas de Formação Geral permanecem no acervo como treino de escrita, marcadas como
formato anterior a 2026.

Cada questão traz ainda uma conferência de expressão — clareza, coerência, coesão,
argumentação e vocabulário — derivada do item 3.9.1 do edital. Ela não pontua: as rubricas são
as do Inep, com os pontos que ele de fato distribuiu, e acrescentar pontos de linguagem
falsearia o padrão oficial.

---

## 4. Metodologia

### Classificação por objeto de conhecimento

As onze áreas do material são uma classificação própria, construída por recorrência. Sobre
elas foi mapeada a nomenclatura oficial: os doze objetos de Formação Geral da Portaria 154 e
os vinte do componente específico da Portaria 169, num total de 32. O mapeamento
`(área, subtema) → objeto oficial` está em `estudo/assets/objetos.js` e permite auditar
cobertura e reportar desempenho na linguagem em que o Inep descreve a prova.

Nenhum dos 32 objetos tem menos de oito questões no banco. Duas classificações do material
ficam fora do rol oficial e estão registradas como divergência: "interpretação de dados", que
descreve o formato do item e não um tema, e "inteligência artificial", que não consta em
nenhuma das duas portarias.

### Calibração contra o chute

Um banco de questões mal escrito é resolvível sem conhecer a matéria. Dois vícios foram
medidos e mantidos sob meta:

**Chutar pelo tamanho.** Quando a alternativa correta é sistematicamente a mais longa, quem
chuta a maior acerta muito acima do acaso. A medida considera apenas a diferença perceptível
— margem de quinze caracteres sobre a segunda colocada —, porque diferença de quatro
caracteres não é pista para ninguém. Resultado atual: 7,4% de acerto chutando a visivelmente
mais longa e 3,7% chutando a mais curta, contra 20% de acaso. Em cerca de 89% das questões as
cinco alternativas têm tamanho semelhante.

**Resolver por eliminação.** Quando três ou mais alternativas são absurdos descartáveis
("nunca erram", "garante ausência de defeitos"), a questão vira escolha entre duas. Resultado
atual: zero questões. A medida distingue marcador de absurdo de quantificador de escopo —
"todos os titulares", "qualquer tratamento" são linguagem precisa, e um bom distrator
frequentemente descreve com exatidão a coisa errada.

**Explicação que justifica sem refutar.** A explicação que só demonstra por que o gabarito
está certo não diz ao estudante por que a alternativa que ele marcou está errada — e é essa
a informação que ele foi buscar. A medida pergunta se a explicação fala do que cada distrator
afirma: cada um tem vocabulário próprio, termos que estão nele e não estão na correta nem no
enunciado, e quem escreve sobre aquele distrator acaba usando algum deles. Onde a alternativa
é um valor — "13 dias.", "56%." — o distrator é o número, e citá-lo conta como discuti-lo;
em julgamento de itens e asserção-razão, cujas alternativas são rótulos fixos, o que se exige
é nomear a afirmativa falsa. Exige-se discutir ao menos dois dos quatro distratores.
Resultado atual: 99,2%. Cinco questões em 644 ficam fora do alcance da régua, porque seus
distratores são valores pequenos que o próprio enunciado usa, e o número aparece declarado ao
lado da medida.

Nas discursivas, a hipótese equivalente seria a rubrica com itens não falsificáveis, do tipo
"demonstra compreensão do conceito", que se pode marcar como cumprido independentemente do que
se escreveu. A auditoria dos 296 itens encontrou 2,7% de candidatos, todos falso positivo na
leitura: o verbo vago vem sempre seguido do que exatamente conferir. O vício ali não estava na
redação das rubricas, e sim no fluxo — ver a seção seguinte.

### Integridade da autocorreção

A correção das discursivas é feita pelo próprio estudante contra a rubrica. Abrir o padrão de
resposta antes de escrever anula o exercício, e a nota obtida assim corromperia a medida que a
aba existe para produzir.

O material admite responder no papel e admite ler o padrão para estudar. A trava, portanto,
não bloqueia: torna a escolha explícita e registrada. Com resposta escrita, a revelação é um
clique. Com o editor vazio, o sistema pergunta se a resposta foi feita no papel ou se é
apenas leitura; no segundo caso a tentativa é gravada como **leitura**, aparece rotulada no
histórico e fica fora de toda média.

### Verificação

O sistema é verificado por uma bateria de 215 asserções sobre DOM real, cobrindo composição e
cota do sorteio, pontuação ponta a ponta pela interface, agregação do painel, promoção e
rebaixamento das caixas de revisão, os dois vetores de calibração do banco, as rotas de
navegação e a carga das dez páginas sem erro de console. Inclui uma jornada completa a partir
do estado vazio — gerar prova, responder, corrigir, revisar e conferir se as telas contam a
mesma história. O arnês de teste não é distribuído com o pacote.

---

## 5. Registro de desempenho

O sistema grava, a cada correção, uma linha por questão, com área, objeto de conhecimento
oficial, acerto e data. Sobre esse registro operam o painel e a revisão espaçada.

O painel reporta por objeto oficial e por área, ordenando do pior para o melhor. Duas regras
governam a leitura: nada é diagnosticado com menos de cinco questões, e o que não tem amostra
suficiente vai para o fim da lista, não para o topo — zero em três questões é ruído com
aparência de diagnóstico. O percentual e a fração aparecem em toda linha, de modo que a
informação nunca depende apenas da cor.

A revisão espaçada aplica caixas de Leitner. Uma questão errada entra no baralho e retorna no
dia seguinte; a cada acerto o intervalo cresce — 1, 3, 7 e 16 dias — e quatro acertos seguidos
a retiram do baralho. Um erro devolve a questão à primeira caixa. O baralho não tem estado
próprio: é derivado do histórico a cada abertura, o que evita duas versões da mesma verdade.

A revisão cobre o banco autoral, cujas questões o histórico identifica individualmente. As
objetivas dos simulados 1 a 4 são imagens de página de caderno, sem identificador individual;
o sistema informa quantas foram erradas e remete ao simulado correspondente.

### Armazenamento

Tudo reside no `localStorage` do navegador, sob o prefixo `enade26.`:

| Chave | Conteúdo |
|---|---|
| `enade26.historico` | série consolidada de desempenho, base do painel e da revisão |
| `enade26.simulado1.v2` … `simulado4.v2` | respostas de cada simulado oficial |
| `enade26.ia.prova`, `enade26.ia.respostas`, `enade26.ia.vistas` | prova gerada, respostas e estoque já sorteado |
| `enade26.revisao.sessao`, `enade26.revisao.respostas` | sessão de revisão em andamento |
| `enade26.discursivas` | textos escritos, marcações de rubrica e notas |
| `enade26.progresso` | checklist do cronograma |
| `enade26.tema` | preferência de tema claro ou escuro |

Nada é transmitido. Copiar a pasta para outra máquina leva o material, não o progresso.

---

## 6. Execução

O material funciona ao abrir `estudo/index.html` com dois cliques. Alguns navegadores, porém,
bloqueiam o armazenamento local em páginas abertas diretamente do disco, e nesse caso as
marcações não sobrevivem ao fechamento da página. O atalho `estudo/abrir.cmd` resolve: serve o
diretório em `http://localhost:8000` e abre o navegador na página inicial. Requer Python
instalado; equivale a executar, dentro de `estudo/`:

```
python -m http.server 8000
```

Não há dependências, etapa de compilação ou processo de instalação.

---

## 7. Limitações

**As questões autorais não são do Inep.** Foram escritas como previsão a partir dos padrões
identificados no acervo. Gabaritos e explicações são interpretativos e podem conter erro. Onde
houver divergência, prevalece o material oficial em `provas/`, `gabaritos_oficiais/` e
`padroes_resposta/`.

**Os pesos são provisórios.** Enquanto a nota técnica prevista no item 16.5 do edital não for
publicada, a pontuação ponderada exibida é extrapolação da regra histórica.

**A classificação por área e habilidade é interpretativa.** Gabaritos e questões anuladas são
oficiais; o agrupamento temático serve para priorizar o estudo e não tem estatuto normativo.

**A correção das discursivas é do próprio estudante.** Nenhum sistema corrige texto livre com
segurança. O que o material faz é fornecer a régua oficial e obrigar a conferência item a
item.

---

## 8. Procedência

Cadernos de prova, gabaritos e padrões de resposta são do Inep, obtidos na página oficial de
Provas e Gabaritos do ENADE; `manifesto_enade_tads.csv` registra a URL de origem de cada
arquivo. A estrutura da prova de 2026 segue as Portarias Inep nº 154 e nº 169, de 14 de abril
de 2026, e o Edital Inep nº 61, de 15 de maio de 2026.
