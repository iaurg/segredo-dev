---
title: O que é imutabilidade?
slug: o-que-e-imutabilidade
description: "Entenda o que é imutabilidade em programação e como este recurso pode auxiliar no seu dia-a-dia desenvolvendo."
date: "2019-05-15T22:49:21.000Z"
categories: [programação, conceito]
image:
  feature: /images/posts/thumbs/o-que-e-imutabilidade.png
---

![O que é imutabilidade?](/images/posts/thumbs/o-que-e-imutabilidade.png)

Imutabilidade em seu conceito mais simples é algo que não pode ser alterado. No conceito de programação a imutabilidade se aplica normalmente a objetos/variáveis que não podem ter seu estado modificado após serem criados, mas isso não garante que os seus valores serão sempre os mesmos.

Avançando no livro "[The Road to Learn React](https://leanpub.com/the-road-to-learn-react-portuguese)" me deparei com o conceito de Imutabilidade que parece simples analisando pelo nome, mas tentando aplicá-lo fica um pouco mais complexo, as explicações online são bem abstratas e variadas, neste post abordarei meu entendimento sobre o tema.

Criar uma variável imutável permite que a referência ao valor na memória seja direta e não exija muito processamento para ser consultado.

A utilização do conceito de imutabilidade permite que você tenha um controle maior do que está sendo realizado em seu programa e na maioria das vezes previne que sejam redeclarados valores à variáveis que não poderiam ser alteradas. Manter os valores constantes economiza processamento de sua aplicação pois ela não precisa consultar sempre este item, após alocado uma vez na memória o estado se mantém.

Por exemplo em Javascript os itens imutáveis podem ser declarados como [const](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const) (constante) cujo o conteúdo não deve ser alterado (mas pode ser copiado e modificado).

    const especie = "humano"
    
    // Caso tente redeclarar o valor
    
    const especie = "alien"
    
    // Receberá o erro SyntaxError: redeclaration of const especie, informando que a constante não pode ser alterada

Não é possível alterar um objeto imutável,  você pode copiá-lo e modificar seu valor. Porém existe uma desvantagem em alterar objetos imutáveis, toda vez que é feita uma cópia para redeclarar o valor, um espaço é alocado na memória para este novo valor, isso em grande escala pode consumir uma grande quantidade de recursos. 

Temos algumas das vantagens de utilizar imutabilidade listadas pelo [Maniero](https://pt.stackoverflow.com/users/101/maniero):

- Facilita muito o uso de threads, afinal se o estado nunca muda, todos algoritmos são livres para acessar os objetos sem preocupações de serem mudados no meio do caminho ou de mudá-los e causar problemas para outras partes da aplicação. Facilita a concorrência e paralelização. São livres de efeitos colaterais. Ou seja, o compartilhamento fica livre;
- Ela é ótima como chave para diversas estruturas de dados em diversas aplicações. Chaves mutáveis são sempre complicadas de manipular, porque uma mudança no objeto que foi usado como chave pode mudar toda a estrutura de dados;
- podem ser usados em cache sem maiores preocupações, o objeto tem está único;

os códigos ficam mais fáceis de acompanhar. Mudança de estado sempre foi o maior complicador da programação, eliminando elimina complexidade e evita bugs;

testar objetos imutáveis é mais fácil;
- objetos imutáveis podem ser considerados automaticamente atômicos, consistentes e isolados, características que todo objeto deveria possuir;
- eles possuem uma durabilidade no sentido de que nunca são sobrepostos, a informação original sempre está disponível. Claro que isso não quer dizer que seja permanente. Se não houver referências para o objeto, eles podem ser descartados. E obviamente não há durabilidade permanente em dispositivos de armazenamento temporário, como é o caso da memória RAM;
- como o estado é que é importante, várias referências para o mesmo objeto podem economizar memória evitando ter cópias com dados repetidos. Isso pode ser vantajoso em alguns cenários de grande duplicação de objetos de mesma identidade.

Fontes:

[http://avancesolucoes.com.br/imutabilidade/](http://avancesolucoes.com.br/imutabilidade/)

[https://pt.wikipedia.org/wiki/Objeto_imut%C3%A1vel](https://pt.wikipedia.org/wiki/Objeto_imut%C3%A1vel)

[https://pt.stackoverflow.com/questions/103460/o-uso-de-imutabilidade](https://pt.stackoverflow.com/questions/103460/o-uso-de-imutabilidade)

[https://www.youtube.com/watch?v=5qQQ3yzbKp8](https://www.youtube.com/watch?v=5qQQ3yzbKp8)