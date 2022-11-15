---
title: O que é HTML, como funciona e para que serve
slug: html
description: "O HTML define o conteúdo das páginas da internet, marcando o conteúdo com tags HTML para informar ao navegador como diferentes elementos devem se comportar."
date: "2022-11-14T10:55:41.000Z"
---

E ai, tudo certo?

Hoje vamos entender o que é HTML, um dos elementos mais presentes na web, você com certeza já deve ter visto ou usado um código HTML, pois a internet é composta em sua grande parte por ele.

Neste artigo sobre o que é o HTML:

- [O que é HTML?](#o-que-e-html)
- [O que o HTML faz no site?](#o-que-e-o-html-faz-no-site)
- [Como funciona o HTML](#como-funciona-o-html)
- [Principais tags do HTML](#principais-tags-do-html)
- [Estrutura básica de um documento HTML](#estrutura-basica-de-um-documento-html)
- [Como surgiu o HTML?](#como-surgiu-o-html)
- [Evolução do HTML](#evolucao-do-html)
- [A relação entre HTML, CSS e JavaScript](#relacao-html-css-js)
- [Como entender HTML?](#como-entender-html)

<h2 id="o-que-e-html">O que é HTML?</h2>

**HTML é a sigla para HyperText Markup Language**, traduzindo é uma linguagem de marcação de texto, onde você definirá em um conteúdo o que cada bloco representa de forma estrutural. É uma das tecnologias básicas para construção de páginas web, está presente na maioria dos sites e é a **linguagem de marcação mais utilizada na internet**.

Definindo os termos do HTML de forma detalhada:

**HyperText**: Significa basicamente "texto dentro de texto", uma palavra com um link é um hipertexto. É uma forma de conectar textos que possuem relação.

**Markup**: Uma forma de marcar a classificar textos dentro de um conteúdo específico, definindo formatações ou funções para um texto selecionado.

**Language**: Normalmente um conjunto de regras para que um interpretador possa ler e entender como processar todos os elementos de acordo com o proposto.

Então resumidamente o HTML é um conjunto de textos e regras de marcação utilizadas para organizar e estruturar um conjunto de conteúdo.

<h3 id="o-que-e-o-html-faz-no-site">O que o HTML faz no site?</h3>

O HTML irá estruturar e organizar todo o conteúdo dentro do site de acordo com as regras definidas.

A **principal função do HTML é marcar os elementos dentro de uma página web** para que ela possa ser organizada e estruturada de uma forma específica, tendo cada elemento disposto e carregado exatamente onde ele precisa estar de acordo com a marcação que ele recebeu.

O HTML define o conteúdo de todas as páginas da internet, marcando um conteúdo com tags HTML para informar ao navegador como diferentes elementos devem se comportar. Criar um documento HTML com as marcações apropriadas é o primeiro passo no desenvolvimento de um site.

Ele está presente na web normalmente em conjunto com o CSS e o JavaScript, que compõem a maioria dos sites que você conhece.

<h2 id="como-funciona-o-html">Como funciona o HTML</h2>

 O HTML funciona de maneira muito simples, basicamente você irá definir o que cada elemento representa dentro do seu site, e o navegador irá ler e interpretar essas marcações para que ele possa exibir o conteúdo de forma correta. Cada elemento HTML possui uma função específica, e você irá definir qual função ele irá ter dentro do seu site para que possa atender as suas necessidaes.

 Imagine como se fosse um livro, onde cada palavra representa um elemento HTML, e você irá definir qual função cada palavra terá dentro do seu livro, se ela será um título, um subtítulo, um parágrafo, uma imagem, um link, etc. E assim o navegador irá ler e interpretar essas marcações para que ele possa exibir o conteúdo de forma correta para o seu usuário.

 De forma técnica o código HTML é interpretado pelo browser como uma árvore de elementos HTML chamada de DOM (Document Object Model), onde cada elemento HTML é um nó da árvore, e cada nó possui um pai e filhos, onde o pai é o elemento pai do nó e os filhos são os elementos filhos do nó, esses elementos filhos podem ser outros elementos HTML ou texto, assim como na imagem abaixo:

 ![Árvore HTML](/images/posts/arvore-html.jpg)

 O parsing do HTML envolve tokenização e construção da árvore, os tokens são os elementos HTML definidos pelas marcações de abertura e fechamento e a árvore é o conjunto desses elementos em hierarquia. O parser do browser irá interpretar cada nó da árvore e se tudo estiver de acordo com as regras do HTML ele irá exibir o conteúdo de forma correta na tela, normalmente este processo é muito rápido.

<h2 id="principais-tags-do-html">Principais tags do HTML</h2>

Abaixo você irá encontrar as principais tags do HTML, que são as tags mais utilizadas na construção de sites, e que você irá utilizar na maioria das vezes. Como no exemplo anterior com o livro, você verá muita semelhança entre as tags e elementos gráficos de formatação de texto.

<h3>Tags de Cabeçalho</h3>

As tags de cabeçalho são utilizadas para definir títulos e subtítulos dentro do seu site, comumente utilizadas para organizar o conteúdo de forma hierárquica, onde o título principal é o h1, o subtítulo é o h2, e assim por diante. É uma das tags mais utilizadas dentro do HTML principalmente pelo fato de seu conteúdo ser indexado pelos buscadores, e por isso é muito importante que você utilize as tags de cabeçalho de forma correta.

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Subtítulo</h3>
<h4>Subtítulo</h4>
...
```

<h3>Tags de Parágrafo</h3>

As tags de parágrafo são utilizadas para definir parágrafos, que são blocos de texto separados por uma linha em branco, normalmente utilizados em conjunto com cabeçalhos para definir o conteúdo de forma semântica.

```html
<p>Parágrafo principal</p>
<p>Parágrafo</p>
```

<h3>Tags de lista</h3>

As tags de lista são utilizadas para definir listas ordenadas e não ordenadas, normalmente separadas por um marcador, como um número ou um ponto, e são muito utilizadas para definir menus de navegação, listas de produtos, etc.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Essas são algumas das tags mais utilizadas, mas existem muitas outras tags que você pode e deve utilizar para construir seu site, você pode encontrar todas elas na [documentação do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element). Recomendo que analise as tags e entenda o contexto de cada uma delas, para que você possa utilizar da forma correta, isso terá um impacto muito grande na forma como seu site será indexado pelos buscadores. A semântica do HTML é muito importante.

<h2 id="estrutura-basica-de-um-documento-html">Estrutura básica de um documento HTML</h2>

Abaixo você irá encontrar a estrutura básica de um documento HTML, que é a estrutura mínima que você precisa para criar um site, e que você irá utilizar na maioria das vezes. A estrutura básica de um documento HTML é composta por 3 partes principais, que são o cabeçalho, o corpo e o documento em sí, e cada uma delas possui uma função específica.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>segredo dev</title>
  </head>
  <body>
    <h1>Como o HTML funciona?</h1>
    <p>Um documento de marcação!</p>
  </body>
</html>
```

Dentro desta estrutura básica normalmente você irá editar apenas o conteúdo do corpo, que é o conteúdo que será exibido na tela, e o cabeçalho, que é onde você irá definir o título do seu site, scripts e estilos personalizados, e outras informações que serão utilizadas para a construção de seu site.

Neste estrutura temos o seguinte:

-   **```<!DOCTYPE html>```**: Define o tipo de documento, que no caso é o HTML, e que é utilizado para que o browser saiba como interpretar o documento.
-   **```<html>```**: Define o início e o fim do documento HTML, e é onde você irá definir o idioma do seu site.
-   **```<head>```**: Define o início e o fim do cabeçalho do documento, e é onde você irá definir o título do seu site, scripts e estilos personalizados, e outras informações que serão utilizadas para a construção de seu site.
-   **```<meta charset="UTF-8">```**: Define o tipo de codificação de caracteres que será utilizado no documento, que no caso é o UTF-8, que é o padrão utilizado na maioria dos sites.
-   **```<title>segredo dev</title>```**: Define o título do seu site, que é o título que será exibido na aba do browser.
-   **```<body>```**: Define o início e o fim do corpo do documento, e é onde você irá definir todo o conteúdo que será exibido na tela.
-   **```<h1>Como o HTML funciona?</h1>```**: Define o título principal do seu site, que é o título que será exibido na tela.
-   **```<p>Um documento de marcação!</p>```**: Define um parágrafo, que é um bloco de texto que será exibido na tela.

<iframe width="560" height="315"
src="https://www.youtube.com/embed/WYvkOfOWNNI"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

<h2 id="como-surgiu-o-html">Como surgiu o HTML?</h2>

O HTML surgiu em 1991, quando Tim Berners-Lee, um físico britânico, criou a World Wide Web, que é a internet que conhecemos hoje, e que é composta por milhões de sites, e que é utilizada por bilhões de pessoas em todo o mundo. O HTML foi criado para que os documentos da World Wide Web pudessem ser estruturados e organizados, e para que os documentos pudessem ser compartilhados entre os usuários da World Wide Web.

A primeira aparição do HTML foi em 1993, quando Tim Berners-Lee publicou o <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank" rel="nofollow">primeiro documento HTML intitulado The Project</a>, que era um documento curto explicando sobre o que era a World Wide Web, e que foi publicado no site do CERN, que é um laboratório de física de partículas localizado na Suíça.

A documentação inicial do HTML foi publicada em 1995, e foi intitulada <a href="http://info.cern.ch/hypertext/WWW/MarkUp/MarkUp.html" target="_blank" rel="nofollow">HTML Tags</a>, e foi publicada no site do CERN, foi a primeira documentação oficial do HTML, descrevendo as primeiras 18 tags da linguagem que iriam evoluir muito com o tempo.

O HTML é a base da World Wide Web, e é utilizado para criar todos os sites que você visita.

<h2 id="evolucao-do-html">Evolução do HTML</h2>

O HTML evoluiu muito desde a sua criação, e hoje em dia ele é uma linguagem muito poderosa utilizada para criar sites e aplicativos web por milhões de desenvolvedores em todo o mundo.

<h3>1995 – Versão 2.0</h3>

A versão 2.0 do HTML foi publicada em 1995, e foi a primeira versão oficial do HTML, e foi publicada pela W3C, que é a World Wide Web Consortium, que é uma organização sem fins lucrativos que é responsável por manter o HTML e o CSS, e que é responsável por manter a compatibilidade entre os browsers. Esta versão já possuia todos os elementos da versão 1.0, foi a versão utilizada como padrão para desenvolimento de sites até 1997. Refinou diversos conceitos da versão original que continuariam evoluindo.

<h3>1997 – Versão 3.0</h3>

Nesta versão Dave Raggett introduziu novos conceitos na linguagem adicionando mais poderes para os desenvolvedores, porém esses novos recursos diminuiram a performance dos browsers, e por isso esta versão não foi muito utilizada.

<h3>1999 – Versão 4.01</h3>

A versão onde o HTML realmente começou a evoluir, e foi a versão que foi utilizada como padrão para desenvolvimento de sites até 2006. Esta versão foi publicada em 1999, e foi a primeira versão do HTML que foi publicada pela W3C, trazendo grandes diferenciais para a linguagem, como a possibilidade de criar sites mais dinâmicos, e a possibilidade de criar sites mais acessíveis. Stylesheets, scripts, iframes, embeds, e outros recursos foram adicionados nesta versão, e foi a versão que trouxe o HTML para o mundo dos desenvolvedores.

<h3>2000 – XHTML 1.0</h3>

A versão XHTML 1.0 foi publicada em 2000, e foi a primeira versão do XHTML, que é uma versão do HTML que é baseada em XML, que é uma linguagem de marcação que é utilizada para criar documentos estruturados. Foi uma extensão do HTML 4 para utilização de XML.

<h3>2006 – Versão 5</h3>

A versão 5 do HTML foi publicada em 2006, e foi a primeira versão do HTML que foi publicada pela WHATWG, que é a Web Hypertext Application Technology Working Group, que é uma organização sem fins lucrativos que é responsável por manter o HTML e o CSS, constituida por grandes membros da tecnologia como Google, Apple, Microsoft e Mozilla Foundation. É considerada a versão mais avançada do HTML, e é a versão que está sendo utilizada atualmente para desenvolvimento de sites. Nesta versão foram adicionados diversos elementos, porém o principal foi a adição de APIs para a linguagem, que possibilitou a criação de sites mais dinâmicos e interativos.

<h2 id="relacao-html-css-js">A relação entre HTML, CSS e JavaScript</h2>

Vimos aqui que a maioria dos sites da internet utilizam HTML, porém raramente você encontrará um site construido apenas com HTML, o mais comum é termos um conjunto de 3 linguagens na criação de um site, que são o HTML, CSS e JavaScript. Essas linguagens são capazes de criar sites como os que você encontra na internet, e são utilizadas por milhões de desenvolvedores em todo o mundo. A maioria das bibliotecas ou frameworks se baseiam nessa tríade para criar sites e aplicativos web.

<h3>CSS</h3>

O CSS é a linguagem de estilo que é utilizada para estilizar os elementos que são criados com o HTML, e é a linguagem que é responsável por criar a aparência dos elementos que são exibidos na tela, como cores, fontes, tamanhos, etc.

<h3>Javascript</h3>

O JavaScript é a linguagem de programação que é utilizada para criar a interatividade dos sites, e é a linguagem que é responsável por criar a interatividade dos elementos que são exibidos na tela, como animações, efeitos, etc.

<h2 id="como-entender-html">Como entender o HTML?</h2>

A melhor forma de entender o HTML é desenvolvendo em HTML, quanto mais sites e funcionalidades você desenvolver em HTML, mais você irá entender a linguagem, e mais você irá entender como ela funciona. O HTML é uma linguagem muito simples e fácil de aprender, mas requer treino e prática para dominar a linguagem.

Com o tempo você começará a identificar e entender os padrões em cada elemento que precisa criar e será muito mais dinâmico o seu desenvolvimento.

Alguns sites que podem te ajudar a entender o HTML:

- [https://www.w3schools.com/html/](https://www.w3schools.com/html/)
- [https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [https://www.w3.org/standards/webdesign/htmlcss](https://www.w3.org/standards/webdesign/htmlcss)

<h2>Conclusão</h2>

Espero que você tenha gostado do artigo, e que tenha entendido um pouco mais sobre o HTML, e sobre a sua importância na criação de sites e aplicativos web. Essa é uma linguagem que é muito importante para o desenvolvimento web, e é uma das linguagens mais utilizadas no mundo, entender o HTML é essencial para qualquer desenvolvedor web.

Até mais!