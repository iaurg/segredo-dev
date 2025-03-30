---
title: O que é um componente reutilizável?
slug: o-que-e-um-componente-reutilizavel
description: 'Componentes reutilizáveis visam manter uma linha tênue entre utilidade e complexidade. Podem ser facilmente replicados, configurados e mantidos.'
date: '2020-06-25T00:01:08.000Z'
tags: ['conceito', 'programação']
image: ./componentes-reutilizaveis.png
---

O foco principal no conceito de componentes reutilizáveis é manter uma linha tênue entre utilidade e complexidade. Construir componentes que podem ser facilmente replicados, configurados e mantidos é uma qualidade que pode beneficiar um projeto ou biblioteca por completo.

Objetivo principal no conceito de componente é a separação de responsabilidades para que cada elemento seja útil e funcional por si só. Podemos pegar esta ideia do "S" do [SOLID](https://en.wikipedia.org/wiki/SOLID) que remete ao conceito de responsabilidade única, a criação de um componente deve ser concentrada dentro dele mesmo (exceto em casos de interdependência).

Uma boa analogia com o mundo real é considerar um componente reutilizável como a peça de um carro, por exemplo, a porta do carro X é projetada e construída uma vez e aplicada em incontáveis carros. Essa é a reutilização. Em alguns momentos essa porta pode passar por melhorias ou ajustes, mas o foco principal dela é ser replicável.

Ao criar componentes reutilizáveis você consegue otimizar o trabalho, gerar uma maior consistência em sua base, melhorar o fluxo de ajustes, cortar custos desnecessários, facilitar a colaboração, permitir escalonamento de projetos e acelerar o desenvolvimento.

## Criando o componente

Provavelmente nas primeiras vezes que você tentar escrever um componente reutilizável ele não se adaptará muito bem, mas sem problemas, vá polindo seu componente conforme você o utiliza.

Ao criar um componente reutilizável é necessário pensar em alguns aspectos comuns que irão guiar seu componente durante o desenvolvimento.

### Audiência

Por quem e onde será utilizado seu componente? Existem alguns cenários comuns que são:
1 - Projeto: Seu componente será compartilhado entre páginas de um mesmo projeto apenas.
2 - Time: Você irá distribuir o componente através de vários projetos e será utilizado pelo seu time
3 - Empresa: Um componente construído para ser utilizado em todo o contexto da empresa
4 - Público: Criado para ser utilizado por qualquer pessoa, normalmente utilizado e em bibliotecas de UI

O nível de dificuldade de construção desses componentes aumenta gradativamente(1-4), sendo que em cada contexto o número de problemas e conflitos que podem aparecer são muito maiores. Afinal construir um componente para utilizar em uma página dentro de um contexto é bem mais simples do que um componente público que se adeque a todo tipo de projeto. O recomendado é iniciar com construção dentro de projetos (1) e aumentar gradativamente. Viu um componente em seu projeto que pode ser reutilizado em outra página? Adapte ele para atender esse contexto.

### Flexível ou rígido?

Ao criar um componente reutilizável você acabará se deparando com a decisão de fazer um componente rígido ou flexível. Mas o que difere um elemento rígido de um flexível?

Componente flexível é mutável e adaptável, normalmente em componentes são propriedades que definem:

- Estilos
- Layouts (horizontal, vertical, breakpoints...)
- Funções

Um componente rígido é menos customizável e possui uma quantidade menor de variações.

A comparação entre um e outro é que quanto mais flexível mais complexo.

Rigido ===================================> Flexível

Menos complexo ===================================> Mais complexo

Normalmente componentes rígidos serão mais fáceis de criar e manter, menos opções e variações, menos código para administrar, rápido para criar, simples de entender, fácil de testar. E como componentes rígidos utilizam menos _props_ ficam mais fáceis de serem mantidos, props são fáceis de adicionar porém difíceis de remover quando o componente já está sendo utilizado no projeto.

Os componentes flexíveis possuem suas vantagens que são mais adaptáveis em diversos contextos, podem ser mais personalizados, atendem diversas necessidades de uma vez.

Ao criar componentes reutilizáveis opte por iniciar com componentes rígidos e adicione flexibilidade aos poucos e quando necessário. Foque em equilibrar as necessidades em cada elemento, usuários tendem a preferir componentes mais flexíveis pois atendem melhor as necessidades únicas de cada um, mas cabe a você definir se vale a pena trocar facilidade de utilização por complexidade de desenvolvimento.

### Dicas na construção de componente

1 - Cuidado com elementos de [marcação fracos](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) como `<p>``<i>` e afins. Ao criar um componente que receba um `{children}` imagine o seguinte cenário:

    // Evite isso!
    <p>
    {children}
    </p>

Caso alguém passe uma `<div>` como children o seu componente terá um [erro na validação HTML](https://stackoverflow.com/questions/10763780/putting-div-inside-p-is-adding-an-extra-p). Prefira a utilização de estruturas como:

    // Ai sim :D
    <div>
    {children}
    </div>

2 - Determine os tipos das propriedades passadas ao componente utilizando [prop-types](https://www.npmjs.com/package/prop-types) de preferência com alertas no sistema de lint, isso irá prevenir diversos erros e auxiliar na utilização do componente por outras pessoas deixando o seu componente mais claro e didático sobre quais dados ele necessita.

3 - Evite utilizar manualmente ID's no HTML de seus componentes, eles podem facilmente ser replicados através da estrutura dando uma duplicidade de HTML ID que pode desestabilizar sua estrutura. Caso seja necessário um ID passe ele via _props_.

4 - Declare valores de propriedades padrões em seus componentes, elas ajudarão quem utiliza o componente a entender melhor o funcionamento e irão prevenir erros de renderização caso nenhum valor seja passado.

5 - Preocupe-se com a acessibilidade de seu componente declarando tags semânticas e marcações corretas para os elementos. Muitos usuários navegam utilizando leitores de tela e podem se beneficiar com esses detalhes.

6 - Se o seu component utilizar diversas _props_ considere passá-las como um objeto configurável para facilitar na utilização do componente e evitar o desgaste por excesso de declaração. Por exemplo em um component de usuário:

    // São poucas props mas podem crescer conforme seu contexto
    <Usuario
        nome="Italo"
        cidade="Porto"
        planeta="Terra"
        cor="Preto"
        vivo={true}
    />

    // Neste caso podemos passá-las como config. Caso os dados retornados da API sejam iguais suas props você apenas passa o objeto, simples.

    <Usuario
        dados={{
            nome:"Italo",
            cidade:"Porto",
            planeta:"Terra",
            cor:"Preto",
            vivo:true
        }}
    />

7 - Sempre que possível foque em ter componentes que podem ser renderizados via Server Side Rendering, no caso de sites que se beneficiam dessa tecnologia. Isso fará com que você deixe de utilizar propriedades que dependam do navegador para serem funcionais como document, window, setTimeout...

8 - Foque na responsabilidade de cada componente ter um propósito. Quanto maior e mais complexo for o componente mais difícil será administrá-lo. Componentes simples e diretos serão fáceis de editar, manter e criar.

## Atomic Design

O conceito de _atomic design_ divide as estruturas em átomos, moléculas, organismos, templates e páginas. Criando uma hierarquia entre os elementos da interface e desacoplando cada um para que possam ser reutilizados de maneira eficiente. Essa conceito facilita a visualização e separação de componentes. Novamente o exemplo da indústria automobilística se adequa aqui, um carro é um sistema construído com milhares de pequenas peças e sistemas em conjunto, podemos abstraí-lo como um sistema de átomos unidos.

### Átomos

Os átomos são as menores frações de uma interface, normalmente se aproximam de tags HTML padrões. Podemos considerar átomos componentes de botões, inputs, títulos, ícone. Normalmente possuem responsabilidade única e são construídos sozinhos.

### Moléculas

Moléculas podem ser interpretadas como a junção de 2+ átomos para criar um novo elemento. Como um botão com ícone, ou um input seguido de um botão. O ideal é mantê-los com uma responsabilidade simples para que possam ser mesclados com outras moléculas facilmente.

### Organismos

São grupos de moléculas e átomos trabalhando em conjunto para criar uma função específica, um organismo tende a ser mais complexo e estruturado. Um formulário completo, um cabeçalho com botões.

## Formas de estilizar componentes

Na criação de componentes reutilizáveis teremos a escolha de definir como iremos aplicar estilos aos componentes, quais padrões seguir, qual nivel de hierarquia. O padrão que for definido em seu projeto inicialmente pode beneficiar ou melhorar o fluxo de trabalho futuro.

### CSS padrão

Utilizar o CSS padrão na criação de componentes reutilizáveis pode ser aceitável caso haja um controle e separação de hierarquias bem definido ou seja um projeto pequeno. A utilização de algum padrão de nomenclatura como o BEM pode ajudar neste caso. Como muitos componentes e estilos são utilizados em uma mesma página é fácil um estilo global de um elemento afetar a hierarquia do outro e criar alguns problemas.

### CSS Compilado

Trabalhar com compiladores CSS lhe dará algumas funcionalidades para escrever o CSS de forma mais dinâmica. Variáveis, elementos atrelados, funções entre diversas outras melhorias agradam quem deseja criar projetos mais complexos. Pré-processadores irão garantir que você tenha um código adequado para diversas versões de navegadores e permitirão que você use funcionalidades mais recentes do CSS.

### React Inline Styles

Com essa abordagem o seu CSS estará extremamente próximo do componente e será escrito em JSX, existem algumas diferenças do CSS padrão, porém são facilmente aplicadas. Aqui o CSS será encapsulado e poderá ser escrito sem a preocupação de efeitos colaterais hierárquicos. Uma vantagem é poder trabalhar com propriedades e alterações de estados enviando mudanças para CSS. O que pode incomodar algumas pessoas é a utilização de estilos como objetos JavaScript.

### CSS Modules

A utilização de CSS Modules permite que você escreva CSS de forma padrão, SASS ou Less escopada para um elemento sem o risco de conflitos. A configuração do CSS Modules é feita em conjunto com o Webpack, essa configuração fará com que o Webpack crie um nome único para cada classe criada evitando conflito de nomes. Então você pode escrever o CSS de forma padrão sem se preocupar com o conflito de nomenclatura pois toda estilização se mantem no escopo do componente.

### CSS no JS

Existem diversas bibliotecas para se trabalhar com essa opção, porém a que está em destaque atualmente é o Styled Components que cria classes únicas com hashes para que evite o conflito de CSS, permite a inserção de manipulação via propriedades, você consegue criar tags semânticas estilizadas para replicá-las através do código.

## Testando componentes

Ao criar componente é importante se preocupar com testes para que você tenha uma estrutura que seja coerente no decorrer do desenvolvimento. Com testes você terá uma estrutura que lhe dará uma confiança durante o desenvolvimento.

No começo não se preocupe com qual framework utilizar para fazer o teste, apenas pegue um e faça. Foque em melhorar a estrutura e qualidade de seu código com testes, caso precise mudar de framework provavelmente serão similares.

### Tipos de testes

#### Testes unitários

Esse tipo de teste focar em testar a menor porção do componente, normalmente utilizado para validar a lógica. O foco é validar lógicas, cálculos, funções do componente.

#### Testes de interação

Focado em testar a interatividade de seus componentes, como eles se comportam quando são utilizados. Coisas como garantir que um clique retorna o esperado ou uma mensagem aparece após o envio de um formulário.

#### Testes estruturais

Servem para validar se a estrutura de um componente está como o esperado. Normalmente utilizadas técnicas como snapshot para tirar uma "foto" do componente e comparar com versões futuras/passadas. Snapshot não são estruturados para se trabalhar pensando em TDD, eles são testados depois do desenvolvimento.

### Continuos Integration (CI)

A principal função de uma ferramenta de CI é garantir que o funcionamento do código estará de acordo em outra máquina. É uma forma de garantir a qualidade de código, testes e verificações serão realizadas automaticamente pelo servidor e retornarão um relatório para você, tendo assim um feedback mais rápido do funcionamento de sua aplicação no "mundo real". CI é uma verificação para garantir que o código novo que você escreveu não irá entrar em conflito com o código em produção.

### Formas de distribuição

Ao desenvolver um pacote/módulo/biblioteca você precisará decidir como irá distribuir esse material, alguns dos pontos a se pensar podem ser:

- Open Source, Privado ou Interno
- Onde irá hospedar seus pacotes? (NPM, Yarn, Packagers...)
- Tipo de importação (Named, Import from /lib, Package root)
- Decidir como irá distribuir os arquivos (UMD, ES5 (CommonJS), ES Modules)
- Hospedar a documentação

Esse post é um estudo com base no curso [Creating Reusable React Components](https://app.pluralsight.com/library/courses/react-creating-reusable-components)
