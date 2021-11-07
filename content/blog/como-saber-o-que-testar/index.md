---
title: Como saber o que testar
slug: como-saber-o-que-testar
description: "Como saber o que testar no Front-end? Teste é importante e ótimo. Testes precisam lhe trazer confiança. Confira o que diz Kent C Dodds."
date: "2020-02-12T10:50:36.000Z"
categories: [front-end, teste]
image:
  feature: /images/posts/thumbs/como-saber-o-que-testar.png
---

![Como saber o que testar](/images/posts/thumbs/como-saber-o-que-testar.png)

Esse post é uma tradução do artigo "[How to known what to test](https://kentcdodds.com/blog/how-to-know-what-to-test)" do Kent C. Dodds.

Conselhos práticos para ajudá-lo a decidir o que testar.

Saber testar é importante e ótimo. O Kent criou diversos artigos ensinando os fundamentos dos testes, como configurar ferramentas, como escrever testes para cenários específicos, e muito mais. Mas saber como escrever testes é apenas metade da batalha para ganhar confiança na sua aplicação. Saber *o que *testar é a outra metade importante.

Nos materiais de [Workshop](https://kentcdodds.com/workshops?utm_source=segredo_dev&utm_medium=post&utm_campaign=translated_ptbr_how_to_know_what_to_test) e no [testingjavascript.com](https://testingjavascript.com/?utm_source=segredo_dev&utm_medium=post&utm_campaign=translated_ptbr_how_to_know_what_to_test), Kent explica sobre como saber o que testar, porém é questionado diversas vezes sobre este assunto, então decidiu abordar este tema nesta postagem.

## Relembrando porque nós testamos

Nós escrevemos testes para estarmos confiantes de que nossa aplicação irá funcionar quando o usuário precisar utilizá-la. Algumas pessoas escrevem testes para melhorar o fluxo de trabalho e isso é ótimo, porém ultimamente estou interessado em confiança. Sendo este o caso, o que testamos deve ser mapeado para aumentar nossa confiança. Este é o ponto que quero que você considere quando escrever testes:

> Pense menos sobre o código que você está testando e mais nos casos de uso que seu código suporta.

Quando você pensa no código em sí, é muito fácil e natural começar a testar detalhes de implementação ([o que é um caminho para o desastre](https://kentcdodds.com/blog/testing-implementation-details?utm_source=segredo_dev&utm_medium=post&utm_campaign=translated_ptbr_how_to_know_what_to_test)).

Pensar em casos de uso nos aproxima de escrever testes da maneira que o usuário usa a aplicação.

> Quanto mais seu teste assemelha-se da forma como o software é utilizado, mais confiança ele pode dar à você. Kent C. Dodds 🧢 (@kentcdodds) [March 23, 2018](https://twitter.com/kentcdodds/status/977018512689455106)

Código _Coverage _< Caso de uso _Coverage_

Cobertura de código (code coverage) é uma métrica que nos mostra quais linhas de nosso código estão sendo executadas durante os testes. Vamos usar o código abaixo como exemplo:

    function arrayify(maybeArray) {
      if (Array.isArray(maybeArray)) {
        return maybeArray
      } else if (!maybeArray) {
        return []
      } else {
        return [maybeArray]
      }
    }

Neste momento, nós não temos testes para essa função, então nossa cobertura de código indica que temos 0% de cobertura dessa função. O resultado de cobertura de código nesse caso nos ajuda com a ideia de que testes são necessário, mas isso não nos diz o que é importante sobre essa função, nem nos diz os casos de uso que essa função suporta, que é a consideração mais importante para termos em mente quando escrevemos testes.

Em fato, quando consideramos um aplicativo inteiro e pensamos sobre o que testar, a cobertura de código nos retorna um relatório bem pobre sobre onde devemos investir o nosso tempo.

O relatório de cobertura de código nos ajuda a identificar quais códigos em nossa base estão sem testes. Então quando você olhar para um relatório de cobertura de código e encontrar linhas que estão sem testes, não pense em if/elses, loops, ou lifecycles. Ao invés disso pergunte à você mesmo:

> Quais casos de uso essas linhas de código suportam e que testes posso criar para dar suporte a esses casos de uso?

Caso de Uso *Coverage *nos informa quantos casos de uso nossos testes suportam. Infelizmente, não há algo que possa nos fornecer automaticamente um relatório de "Casos de Uso _Coverage_". Nós mesmos precisamos fazer isso. Mas o relatório de cobertura de código (code coverage) as vezes pode nos ajudar a identificar casos de uso que não estamos cobrindo. Vamos tentar isso.

Se lermos o código e considerarmos por um minuto, podemos identificar nosso primeiro suporte ao caso de uso: "Isto deve retornar uma *array *se for fornecido uma _array_". Esse caso de uso é um bom titulo para o nosso teste.

    test('retorne uma array se for fornecido uma array', () => {
      expect(arrayify(['Elephant', 'Giraffe'])).toEqual(['Elephant', 'Giraffe'])
    })

E com esse teste, nosso relatório de cobertura se parece com isso (as 3 primeiras linhas são cobertas):

    function arrayify(maybeArray) {
      if (Array.isArray(maybeArray)) {
        return maybeArray
      } else if (!maybeArray) {
        return []
      } else {
        return [maybeArray]
      }
    }

Agora, podemos olhar para as linhas restantes e determinar que existem mais dois casos de uso que o nosso teste não suporta ainda:

- Retorna uma array vazia se for fornecido um valor falso
- Retorna uma array com o argumento fornecido se não for uma array ou falso

Vamos adicionar testes para esses casos de uso e ver como isso afeta a cobertura de código.

    test('retorne uma array vazia se for falso', () => {
      expect(arrayify()).toEqual([])
    })



    function arrayify(maybeArray) {
      if (Array.isArray(maybeArray)) {
        return maybeArray
      } else if (!maybeArray) {
        return []
      } else {
        return [maybeArray]
      }
    }

Ótimo, quase lá!

    test(`retorne uma array com o argumento fornecido se o argumento não for uma array ou falso`, () => {
      expect(arrayify('Leopard')).toEqual(['Leopard'])
    })



    function arrayify(maybeArray) {
      if (Array.isArray(maybeArray)) {
        return maybeArray
      } else if (!maybeArray) {
        return []
      } else {
        return [maybeArray]
      }
    }

Legal! Agora podemos ter certeza que, desde que não precisemos mudar os casos de uso dessa função, nossos testes continuarão passando.

Cobertura de código não é uma métrica perfeita, mas pode ser uma ferramenta útil para identificar que partes de nossa base de código estão sem "cobertura de caso de uso".

## Cobertura de código pode esconder caso de uso

As vezes, nosso relatório de cobertura de código pode indicar 100% de cobertura, mas não ter 100% de cobertura de caso de uso. É por isso que as vezes eu tento pensar em todos os casos de uso antes de começar a escrever testes.

Por exemplo, vamos imaginar que a função `arrayify` foi implementada dessa maneira:

    function arrayify(maybeArray) {
      if (Array.isArray(maybeArray)) {
        return maybeArray
      } else {
        return [maybeArray].filter(Boolean)
      }
    }

Sendo assim, nós podemos conseguir 100% de cobertura de código com os dois casos seguintes:

- Retorna uma array se for fornecido uma array
- Retorna uma array se o argumento fornecido não for uma array

Mas pudéssemos olhar para um relatório de cobertura de casos de uso, veríamos que estamos deixando passar um caso de uso:

- Retorna uma array vazia se for fornecido um valor falso

Isso pode ser ruim porque agora os nossos testes não estão nos fornecendo muita confiança de que o nosso código funcionará quando os usuários o usarem assim: `arrayify()`. No momento, tudo bem, porque embora não tenhamos um teste, nosso código suporta esse caso de uso. Mas o motivo de termos testes é garantir que o código continue suportando os casos de uso mesmo quando as coisas mudarem.

Então, um exemplo de como a falta desse teste pode dar errado, alguém pode ver este código `.filter(Boolean)` e pensar: "Uhm, isso é estranho... Será que realmente precisamos disso?". Então ele remove isso, e nossos testes continuam passando, porém qualquer código que se baseou no comportamento falso estará quebrado.

Lembre-se: **Teste casos de uso, não código**

## Como isto se aplica ao React?

Testar no front-end pode ser um pouco diferente das práticas aplicadas no back-end, por mais que a teoria siga o mesmo princípio, vou deixar um vídeo que pode ajudar no entendimento:

Continuando...

Quando estiver escrevendo código lembre-se que você tem dois usuários que precisa suportar: Usuários finais e desenvolvedores. Novamente, se você pensar no código ao invés de pensar nos casos de uso, torna-se perigoso e natural começar a testar detalhes de implementação. Quando você faz isso, seu código ganha um terceiro usuário.

Existem alguns aspectos do React que as pessoas pensam em testar e que acabam resultando em testes de detalhe de implementação. Para todos esses, ao invés de pensar sobre o código, pense sobre o efeito observável que esse código tem para o usuário final e o desenvolvedor, esse é seu caso de uso, teste ele.

- Métodos de _Lifecycle_
- Elementos de _event handler_
- Estado interno do componente

Por outro lado, aqui estão algumas coisas que você deve testar porque elas atendem aos seus dois usuários. Cada um deles podem mudar o DOM, fazer requisições HTTP, fazer uma chamada *callback, *ou executar vários outros efeitos colaterais observáveis que podem ser úteis no teste.

- Interação de usuário (usando `fireEvent` do [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)): O usuário final é capaz de interagir com o elemento que este componente renderiza?
- Mudando _props _(usando *rerender *do React Testing Library): O que acontece quando o desenvolvedor renderiza novamente seu componente com novas props?
- Mudança de contexto (usando _rerender _ do React Testing Library): O que acontece quando o desenvolvedor muda o contexto renderizando novamente seu componente?
- Mudanças de assinaturas: O que acontece quando um emissor de eventos muda as assinaturas do componente? (Como Firebase, uma store do Redux, uma rota, um media query ou uma assinatura baseada na DOM como status de online)

## Como eu sei por onde começar em uma aplicação?

Então nós sabemos como pensar sobre "o que testar" para componentes individuais e até para páginas de sua aplicação, mas por onde começamos? É um pouco estressante. Especialmente se você está começando a testar uma aplicação grande.

Então, considere a aplicação do ponto de vista do usuário e pergunte:

> Qual parte desta aplicação me deixaria mais chateado se não estivesse funcionando?

De outro modo, e mais comum:

> Qual seria a pior coisa para quebrar nessa aplicação?

Eu recomendo que você faça uma lista das funcionalidades que sua aplicação suporta e as priorize com base nesses critérios. É um ótimo exercício para fazer com seu time e gerente. Esse encontro pode ter um efeito colateral ajudando todos na sala a entender a importância de testar e talvez até os convença que devem priorizar os testes em todos os outros recursos que forem desenvolvidos.

Quando você estiver com a lista de itens prioritários, sugiro que escreva um teste *end to end (E2E) *para cobrir o "caminho feliz" que a maioria dos usuários irá passar em um caso específico. Normalmente, você pode cobrir a maioria das funcionalidades de sua lista dessa maneira. Isso pode levar um pouco de tempo para ser configurado, porém lhe dará um GRANDE retorno econômico.

Os testes *E2E *não irão lhe garantir 100% de cobertura dos casos de uso (e você nem deve tentar cobrir 100%), muito menos fornecerão 100% de cobertura de código (e você nem deve se importar com isso em testes E2E), mas fornecerá um ótimo ponto de partida e aumentará muito a sua confiança.

Assim que tiver alguns testes E2E, você pode começar a escrever testes de integração para casos que você está deixando passar em seus testes E2E e testes de unidade para a lógica de negócios mais complexa que esses recursos estão usando. A partir daqui, você adicionará testes ao longo do tempo. Só não se preocupe em focar no *100%\*\*code coverage, *não vale a pena.

> Para estabelecer uma cultura de testes e metas de cobertura de código razoáveis, sugiro que assista a palestra do [Aaron Abramov](https://twitter.com/aarondjents) - [Establishing testing patterns with software design principles](https://youtu.be/_pnW-JjmyXE?list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw)

> Leia mais sobre as diferenças entre os tipos de teste aqui: [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)

## Conclusão

Se ainda estiver com dúvidas sobre como testar e busca um material de apoio indico o [Curso Aprenda a testar Aplicações Javascript](https://hotm.art/xZBUR1) do Vedovelli.

Com tempo e experiência suficientes, você desenvolverá uma intuição para saber o que deve testar. Você provavelmente cometerá erros e sofrerá um pouco. Não desista! Continue. Boa sorte.

E ai, o que achou desse modelo? Comente abaixo ou me chame no [Twitter](https://twitter.com/iaurg) caso queira indicar algo.
