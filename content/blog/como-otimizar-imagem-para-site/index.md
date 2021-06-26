---
title: Como otimizar imagens para site
slug: como-otimizar-imagem-para-site
description: "Saiba como Otimizar Imagens de seu site, um dos fatores que mais influenciam na velocidade e tempo de carregamento de uma página web."
date: "2019-09-07T18:25:00.000Z"
categories: [front-end, otimização]
image:
  feature: /images/posts/thumbs/como-otimizar-imagens-para-site.png
---

![Como otimizar imagens para site](/images/posts/thumbs/como-otimizar-imagens-para-site.png)

Saiba como **otimizar imagens** de seu site e aumente a velocidade de carregamento de sua página.

Em algum momento você precisará **otimizar as imagens** de seu site ou aplicação web, afinal este é um dos itens que mais consomem recursos quando o usuário acessa seu site. Imagens se não forem configuradas corretamente, otimizadas e dispostas em formatos corretos podem consumir muito da banda de seu usuário, caso ele esteja usando um 3G/4G isso será uma tragédia!
![](/images/posts/otimizar-imagem-para-site.png)
Explicação em vídeo sobre métodos de otimizar imagens para seu site carregar mais rápido e utilizar recursos de forma eficiente:

As formas de otimização de imagem são:

- [Otimizar imagem com compressor](#otimizar-imagem-compressor)
- [Otimizar imagem removendo data](#otimizar-imagem-removendo-data)
- [Otimizar imagem utilizando o formato certo](#otimizar-imagem-utilizando-formato-correto)
- [Otimização de imagem com CDN](#otimizar-imagem-com-cdn)
- [Otimizando imagem com media queries (CSS)](#otimizar-imagem-com-media-queries)

### Otimizar imagem com compressor de imagem

![imagem-otimizada-para-site-comprimida](/images/posts/imagem-otimizada-para-site-comprimida.png)

Uma das formas para otimizar imagens para seu site é utilizando compressores que podem ser instalados diretamente no editor de imagem ou com ferramenas online de otimização.

O compressor faz o trabalho de "limpar" dados e informações desnecessárias ou que podem ser otimizadas em sua imagem diminuindo muito o peso e mantendo a qualidade com uma variação imperceptível.

Normalmente são mais utilizados os compressores online, onde basta você enviar a imagem que deseja otimizar, aguardar a otimização e fazer o download da nova imagem otimizada.

Sites para otimizar imagem online:

[Tiny PNG](https://tinypng.com): Apesar do nome ele otimiza imagens em .PNG e .JPG, possui um limite de 20 imagens por envio (se carregar a página pode enviar +20) e imagens de até 5MB, mas creio que para otimizações de imagens em site ele atende bem.

[JPEG Otimizer](http://www.jpeg-optimizer.com/): A função dele é similar ao TinyPNG porém ele oferece opção de escolher o nível da compressão e qualidade além de redimensionar a imagem para você caso seja necessário.

[Compress PNG](https://compresspng.com/): Envio e download de imagens em JPEG, PNG, SVG e GIF.

### Otimizar imagem removendo data

Essa é uma otimização mais específica mas pode ser necessária em seu caso. Uma grande parte de imagens que são registradas por celulares ou câmeras fotográficas guardam informações dentro das imagens para que possam ser consultadas posteriormente, dados como hora da foto, abertura da câmera, tipo de flash, quantidade de cores... A não ser que seu site utilize essas informações elas são totalmente desnecessárias e ocupam uma quantidade de bytes em sua imagem.

Utilizando o [Verexfi](https://www.verexif.com) para remover esses dados extras da imagem ([dancing](https://flic.kr/p/UEahaD)) consegui diminuir de 1.66MB para 1.63MB, como são informações em texto a diferença é pequena, mas 0.03MB em milhares de imagens pode ter um impacto bem grande.

### Otimizar imagem utilizando o formato certo

Atualmente na web os formatos mais utilizados são JPG, PNG, GIF e SVG. Existe um gráfico divertido que realmente pode te ajudar na escolha do que utilizar em seu site ou aplicação:

![Why image type to choose](https://miro.medium.com/max/1828/1*krupUwPRAO-t3CfGRTPttA.png)
Allen Hsu / [UX Collective](https://uxdesign.cc/jpg-vs-png-vs-gif-vs-svg-aefeca89f61)

A escolha do formato e onde ele será utilizado pode impactar muito na velocidade de site. Digamos que você esteja utilizando uma imagem em alta definição com o formato JPG de 4MB apenas em um pequeno detalhe no site, será que é realmente necessária toda essa qualidade? Os detalhes são perceptiveis? Faz diferença para seus usuários? Talvez essa imagem possa ser substituida por uma de menor qualidade sem ter muita diferença?

Ou por exemplo, você possui uma logo que é apenas uma maçã mordida com uma cor. Porque utilizar uma imagem de alta definição e PNG se você pode utilizar GIF ou SVG neste caso com o mesmo resultado?

Resumidamente para você fazer a escolha correta da imagem pode seguir os seguintes critérios.

#### JPG:

- Pode mostrar mais de 16.8 milhões de cores
- Compressão com perdas
- Não pode ser animado
- Bom para imagens fixas e fotografias

#### GIF

- Pode mostrar 265 cores
- Compressão sem perdas
- Suporta transparência na imagem (sem fundo)
- Bom para animações simples
- Bom para gráficos com cores únicas e sem degradê

#### PNG

- PNG-8:Pode mostrar 256 cores
- PNG-24:Pode mostrar milhões de cores
- Compressão sem perdas
- Imagens com transparência melhor que o GIF
- Não pode ser animado
- Bom para ícones, pode ser utilizado quando você não possuir o SVG

#### SVG

- Muito escalável e bom para designs responsivos
- Pode ser modificado utilizando CSS ou JavaScript
- Normalmente são arquivos leves
- Pode animado
- Bom para logos, icones, gráficos...
- Não é bom para imagens e fotografias

Pensar nesse ponto pode ser apenas um detalhe quando seu site possui poucas visitas, mas com o crescimento de acessos com certeza cada imagem e detalhe farão a diferença na quantidade de banda que será utilizada.

### Otimização de imagem com CDN

Uma ótima técnica que você pode utilizar em conjunto com as demais para otimizar as imagens de seu site é a distribuição de arquivos via CDN (Content Delivery Network) ou Rede de Distribuição de Conteúdo. Basicamente esta técnica utiliza um grupo de servidores distrbuidos para disponibilizar seus arquivos de forma rápida e segura.

Diversos serviços de CDN realizam a otimização e compressão das imagens automaticamente para você e disponibilizam a imagem "pronta" para você.

Alguns serviços como o [ImgIX](https://www.imgix.com) oferecem algumas opções a mais para você tratar especificamente com CDN de imagens, eles disponibilizam uma API mais robusta com diversas opções que você pode utilizar quando realizada a consulta da imagem passando parâmetros via URL.

Por exemplo você pode ter uma imagem:

![imagem-imgix](https://assets.imgix.net/hp/snowshoe.jpg?q=70&amp;auto=compress&amp;w=900&amp;h=600)

E utilizando parâmetros via URL na consulta criar algo como:

`https://assets.imgix.net/hp/snowshoe.jpg?q=70&auto=compress&w=900&h=600&fit=crop&crop=focalpoint&fp-x=.41&fp-y=.43&fp-z=1.59&blend64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3NhbGUtYmx1ZS5wbmc_aD02MDE&bx=0&bm=normal&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3dhbmRlci1sb2dvLmFpP3c9MzAwJmZtPXBuZw&markscale=8&markpad=20&markalign=top`

![imagem-imgix](https://assets.imgix.net/hp/snowshoe.jpg?q=70&amp;auto=compress&amp;w=900&amp;h=600&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.41&amp;fp-y=.43&amp;fp-z=1.59&amp;blend64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3NhbGUtYmx1ZS5wbmc_aD02MDE&amp;bx=0&amp;bm=normal&amp;mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L2hwL3dhbmRlci1sb2dvLmFpP3c9MzAwJmZtPXBuZw&amp;markscale=8&amp;markpad=20&amp;markalign=top)

Legal né? Você pode utilizar muitas opções com essa API.

A CDN dá uma liberdade maior no controle de arquivos que são fornecidos em seu site, normalmente começa a ser utilizada quando o projeto começa a criar grandes proporções, mas não seria nada mal utilizar desde o começo uma CDN básica.

### Otimizando imagens via media queries

Uma ótima forma de trabalhar com imagens em diversos dispositivos é utilizando media queries para alterar a imagem de acordo com a resolução. Esta propriedade permite que uma imagem seja carregada apenas na resolução escolhida.

Ao invés de você redimensionar uma imagem grande para ela se ajustar no mobile por exemplo, você pode ter uma imagem grande e outra menor carregando cada uma quando for necessária.

Com isso você evita que imagens sejam carregadas e redimensionadas.

Exemplo de aplicação de media queries:
  ```css
    /*Imagem que será carregada apenas em dispositivos com largura menor que 425px*/
    @media only screen and (max-width: 425px) {
      body {
        background: url('./imagem-pequena.jpg');
      }
    }
    
    /*Imagem que será carregada apenas em dispositivos com largura maior que 1024px*/
    @media only screen and (min-width: 1024px) {
      body {
        background: url('./imagem-grande.jpg');
      }
    }
  ``` 

Você pode utilizar diversas diferenças de media queries e aplicações de estilo para distribuir de maneira correta as imagens para seu site.

### Conclusão

Estas são as técnicas mais utilizadas para otimização de imagens em site, espero que consiga aplicar e melhorar a velocidade de seu site ou aplicação. Se souber alguma outra técnica ou quiser complementar alguma citada coloca nos comentários. Toda evolução é sempre bem vinda.

Qualquer dúvida é só avisar.