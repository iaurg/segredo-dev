---
title: O Programador pragmático
slug: o-programador-pragmatico
date: "2023-10-27T02:27:06.000Z"
description: "A ideia principal é que você como programador pragmático seja observador nas ações que toma, além de possuir uma responsabilidade e atenção nos detalhes dos problemas."
categories: [estudos, tecnologia, livro]
---

# The Pragmatic Programmer

Eu já li este livro uma vez quando estava iniciando na programação e lembro que muitos conceitos e palavras eram vagas e eu sequer conseguia compreender, vou reler ele com uma nova visão e recapitular os aprendizados.

O objetivo do livro é fazer com que você se torne um programador melhor.

A sua experiência e melhoria como um programador virá de uma grande gama de projetos executados. Teoria e prática são combinadas para fazer você ficar melhor.

> Sua confiança nasce da sua experiência
> 

O livro trás algumas dicas em blocos como “bordões” para que um conceito possa ser lembrado de forma simples, vou usar a mesma nomenclatura (Tip) e numeração do livro para listar todos

**Tip 1:** Se importe com seu trabalho

**Tip 2:** Pense! Sobre seu trabalho

## 1 - A Pragmatic Philosophy

A ideia principal da filosofia pragmática é que você como programador seja excelente e observador nas ações que toma, além de possuir uma responsabilidade e atenção nos detalhes dos desafios que estão em seu contexto.

### The Cat Ate My Source Code

Seja responsável por tudo que você fizer, quando algo der errado ou sair do controle tenha ciência de que você está participando ativamente e haja de forma coerente e sensata, não tente se esquivar ou arrumar desculpas, seja honesto.

**Tip 3:** Dê opções, não dê desculpas esfarrapadas.

### Software Entropy

Como o software é imune a quase todas as leis da física, existe uma delas que ataca fortemente todo e qualquer código, a entropia. Também conhecida como deterioração de código, o seu projeto vai perdendo o “brilho” e se torna uma bagunça.

Esse conceito porém, pode ser relacionado com as casas de uma cidade, quando uma casa é abandonada ela só começa a ser deteriorada e depredada a partir do momento que a primeira janela é quebrada e fica um tempo sem concerto, com esse gatilho inicial os demais vandalismos começam a surgir.

Relacionando esse conceito com programação, sempre que você identificar algo em desacordo em seu código arrume o quanto antes, design mal feito, decisões erradas, código inutilizado… Arrume todos.

**Tip 4:** Não viva com janelas quebradas

### Stone Soup and Boiled Frogs

Ao querer fazer algo novo comece você mesmo, e vá mostrando para as pessoas as necessidades aos poucos de forma que elas sintam interesse em participar.

**Tip 5:** Seja um catalisador de mudanças

Cuidado para não cair em uma “sopa de sapos” onde você vai cozinhando um problema até que ele acabe com sua vida. Esteja sempre atento ao que está acontecendo ao redor e ajeite o caminho.

**Tip 6:** Lembre-se do todo

### Good Enough Software

Faça software que seja bom o suficiente, para você, para a equipe, para o futuro e para o usuário.

Cuide para não sair dos limites para que atenda as necessidades de seu projeto.

**Tip 7:** Torne a qualidade um requisito

### Your Knowledge Portfolio

> Um investimento em conhecimento sempre rende os melhores juros.
> 

**Tip 8:** Invista regularmente em seu portfólio de conhecimento

> Isolamento pode ser matador para a sua carreira; Saia e veja o que está acontecendo no mundo.
> 

O autor faz um paralelo de investimento a longo prazo no mercado financeiro com o investimento em seu conhecimento, de forma simples ele compara que assim como no investimento financeiro você deve fazer aportes frequentes em seu repertório de habilidades e conhecimentos, seguindo a ideia do seguinte:
- **Invista regularmente:** Você deve investir regularmente em seu portfolio de conhecimento. Mesmo que seja apenas um pouco, o hábito em si é o mais importante.
- **Diversifique**: Quanto mais “coisas” diferentes você sabe, mais valioso você é. Como uma base, você precisa saber os prós e contras da tecnologia em particular que você está utilizando. Mas não fique estagnado nela, a área de tecnologia está em constante evolução, a sua tecnologia pode ser “ultrapassada” amanhã. Quanto mais tecnologias você for confortável de utilizar, mais fácil será sua adaptação.
- **Controle o risco:** Não coloque todo o seu conhecimento técnico em apenas uma cesta. Assim como no mercado financeiro, se você investir todo o seu tempo em apenas uma ferramenta ou tecnologia, pode ser que você esteja arriscado demais. Equilibre entre tecnologias arriscadas e estáveis.
- **Compre na baixa, venda na alta**: Aprender uma tecnologia que está começando a “nascer” antes de ela se tornar popular pode ser muito difícil, mas o retorno pode valer a pena. Os early adopters de uma tecnologia que cresce muito tendem a ganhar mais. 
- **Reveja e balanceie:**  Esteja sempre analisando e validando as tecnologias que você utiliza e as versões rodando no mercado, a indústria de tecnologia é muito dinâmica, as coisas mudam muito rápido, não fique para trás.

Objetivos para manter seus investimentos:

- Aprenda pelo menos uma nova linguagem todo ano
- Leia um livro técnico a cada 4 meses
- Leia livros não técnicos também
- Participe de cursos
- Participe de grupos locais
- Experimente ambientes diferentes (OS, IDE, plugins…)
- Assine newsletters e portais
- Navegue na internet e esteja por dentro dos assuntos

Tenha um pensamento crítico nos conteúdos que você consome, cuidado para não cair em propagandas ou “hypes” do momento.

**Tip 9**: Analise de forma crítica o que você lê e escuta

### Communicate!

Comunique-se de forma eficiente e no momento certo para que suas ideias sejam ouvidas, aprenda a ter uma comunicação eficaz.

Framework para falar com a audiência:
- O que você deseja que eles aprendam?
- Qual é o interesse deles no que você tem a dizer?
- Qual sofisticado eles são? (quanto entendem do assunto…)
- Quanto detalhe eles desejam saber?
- Quem você deseja que tenha a informação?
- Como você pode motivá-los a te ouvir?

**Tip 10**: É sobre o que e como você fala

> A menos que você trabalhe em uma caverna, você precisa ser capaz de se comunicar. Quanto mais efetiva for sua comunicação, mais influente você se torna.
> 

## 2 - A Pragmatic Approach

Conhecimentos e regras nunca serão estáveis em programação, tudo está em constante mudança e adaptação, ter que recriar ou redesenhar um algoritmo é algo comum no dia a dia de um programador.

### The Evils of Duplication

Muitos pensam que a manutenção de um código só acontece quando existe alguma falha no sistema, porém, o que ocorre é que o código está em constante manutenção o programador está sempre ajustando algo, a manutenção é uma rotina.

> Cada pedaço de conhecimento deve ter uma representação única, não ambígua e autoritativa dentro de um sistema
> 

**Tip 11:** DRY - Don't repeat yourself (não repita as coisas)

A maioria das duplicações de código surgem de um dos quatro motivos:

- Duplicação imposta: Desenvolvedores sentem que eles não tem escolha — o ambiente parece precisar de duplicação
- Duplicação inadvertida: Desenvolvedores não percebem que estão duplicando informação
- Duplicação impaciente: Desenvolvedores ficam com preguiça e duplicam porque parece mais fácil
- Duplicação entre desenvolvedores: Várias pessoas trabalhando no mesmo projeto duplicam informação entre elas sem saberem

**Tip 12:** Faça seu código ser fácil de ser reutilizado

### Orthogonality

Um sistema consistente é composto de elementos que não se destroem, uma alteração no item A não pode afetar o item B não relacionado. Ex: uma mudança de servidor de banco de dados não pode impactar a interface do usuário.

Quando os componentes de um sistemas são totalmente interdependentes, não existe o conceito de arrumar algo em apenas um lugar.

**Tip 13**: Elimine efeitos entre coisas não relacionadas

O objetivo aqui então é desenvolver componentes que sejam independentes, e com um propósito único contido bem definido.

Com a construção de componentes isolados você ganha produtividade e reduz os riscos de seu projeto.

Um sistema com código organizados e constantemente monitorados para se manterem organizados é mais simples de trabalhar e evoluir.

### Reversibility

Possibilidade de reversão, os sistema que você desenvolve devem estar preparados ao máximo para “reviravoltas”, troca de vendedor, mudança de plataforma, troca de paradigmas…

Ter essa possibilidade de troca em sua mente lhe ajuda durante o desenvolvimento do projeto, pois normalmente as nossas primeiras escolhas podem não ser as melhores, por exemplo, você escolhe o banco de dados X e hospeda ele em um provedor Y, porém caso esse provedor Y não atenda as suas demandas você precisará trocar, essa troca não pode ser muito dolorosa.

**Tip 14:** Não existem decisões definitivas

### Tracer Bullets

Quando você está programando em um ambiente desconhecido uma solução que ainda não possui certeza de como será o resultado, você pode utilizar o conceito de “balas traçantes” para validar o seu caminho. Ao invés de calcular cada detalhe do seu projeto, você pode desenvolver a solução de forma mais simples e rápida para validar o seu caminho.

Desta forma teremos um avanço rápido, visível e com feedbacks constantes.

**Tip 15**: Use balas traçantes para encontrar o alvo

Código desenvolvido neste modelo não necessariamente é um código mal feito, ele apenas está sendo desenvolvido em etapas, porém com todo o controle de qualidade necessário para solucionar o problema. A ideia de desenvolver e analisar de forma rápida segue o conceito de que um projeto nunca está terminado, sempre haverá melhorias e mudanças que precisam ser feitas para alcançar o objetivo.

Algumas vantagens de utilizar este modelo:
- Usuários conseguem ver algo funcionando rapidamente
- Desenvolvedores constroem uma estrutura para trabalhar
- Você tem uma plataforma de integração/teste/validação
- Você tem algo para mostrar
- Você tem uma melhor sensação de progresso

"Tracer code" é diferente de protótipo, o protótipo possui o objetivo de ser descartado, o "tracer code" é uma base para o seu projeto.

## 3 - Prototypes and Post-it Notes
O protótipo deve ser construido com o objetivo de ser descartado, normalmente utilizado para pesquisar e experimentar conceitos desconhecidos do projeto de uma forma mais rápida e barata.

Prototipar é uma experiência de aprendizado. O seu valor não está no código produzido, mas sim no conhecimento adquirido.

**Tip 16:** Prototipe para aprender

Itens que você pode ignorar em um protótipo:
- Qualidade e validação
- Funcionalidades completas
- Robustez
- Estilo

Diferente do "tracer code" não é necessário se preocupar se o código do protótipo funciona. De fato, alguns protótipos nem código utilizam.

Sempre que for embarcar em um protótipo baseado em código deixe bem claro para todos que se trata de um protótipo e ele será descartado após a validação, isso evita que o código seja utilizado como base para o projeto final. É muito comum durante a apresentação de um protótipo os usuários ficarem animados e pedirem para você "lançar" o protótipo, porém, o protótipo não foi desenvolvido para ser lançado.

Caso esteja em um ambiente que saiba que isso possa acontecer opte pela estratégia de "tracer code".