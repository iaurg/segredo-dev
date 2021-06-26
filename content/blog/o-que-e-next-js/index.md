---
title: O que é e para que serve o Next.js?
slug: o-que-e-next-js
description: "Saiba o que é e para o que serve o Next.js, um framework, com foco em acelerar a criação de sites e aplicações web com React."
date: "2020-09-07T23:59:45.000Z"
categories: [javascript, front-end]
image:
  feature: /images/posts/thumbs/o-que-e-next-js.jpg
---

![O que é e para que serve o Next.js?](/images/posts/thumbs/o-que-e-next-js.jpg)

[Next.js](https://nextjs.org) é um framework React com foco em produção e eficiência criado e mantido pela equipe da [Vercel](https://vercel.com), o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto. 

O Next.js é um framework de código aberto hospedado no [github](https://github.com/vercel/next.js/) sob a licença MIT. Veja [quem está utilizando o Next.js](https://nextjs.org/showcase) e tendo um bom crescimento no mercado.

Com todas essas facilidades pré-configuradas ele se assimila a um create react app onde você inicia o projeto muito rápido e sem preocupação com configurações de webpack, estruturas de pastas, configuração de rotas e etc.

Sobre o **Next.js**:

- [Principais funcionalidades do Next.js](#principais-funcionalidades-do-next-js)
- [Next.js e Server Side Rendering](#next-js-e-server-side-rendering)
- [Mini Aula introdutória sobre Next.js](#mini-aula-introdut-ria-sobre-next-js)
- [Como instalar o Next.js](#como-iniciar-um-projeto-com-next-js)?
- [Indicação de plugins e pacotes](#indica-o-de-plugins-e-pacotes)

## Principais funcionalidades do Next.js

- **Hibrido SSG e SSR:** Renderize as páginas durante a build (Static Site Generation) ou em cada request (Server-side Rendering) no mesmo projeto.
- **Hot Code Reloading**: Qualquer alteração feita em seu código durante o desenvolvimento será refletida na aplicação local em tempo real, atualizando de forma automática.
- **Roteamento Automático**: As URL's no Next js são mapeadas com base na pasta `pages`, então qualquer arquivo nesta pasta se torna uma página, sem a necessidade de uma configuração extra. (é possível personalizar isto caso precise)
- **Code Splitting Automático**: Essa funcionalidade permite que as páginas sejam renderizadas apenas com os pacotes que elas precisam. Digamos que apenas uma página de seu site utilize o Ant Design, este pacote será atrelado apenas a esta página. Isso garante que cada página tenha apenas o código necessário para sua renderização, diminuindo o tamanho (kB) de cada página e melhorando a velocidade de renderização. Houve uma [contribuição do time do Google](https://www.techrepublic.com/article/insiders-look-at-googles-web-framework-contributions-to-next-js-and-more/) para melhorar esta funcionalidade recentemente.
- **Suporte a TypeScript**: Configuração e compilação automáticos integrados similar a uma IDE.
- **Internacionalização:** Como padrão o Next.js já possui uma estrutura para identificação de idiomas diferentes, trabalhando com rotas exclusivas e traduções via locale.
- **Otimização de Imagem**: Componente nativo do Next para otimização de suas imagens com redimensionamento, lazyload, imagens em formato moderno e de fácil implementação.

## Next.js e Server Side Rendering

O grande diferencial no começo do Next.js foi a possibilidade de utilizar a renderização na parte do servidor (SSR) isto resolve um problema em aplicações e sites construídos com React que necessitam principalmente de SEO. Em algumas aplicações React você acabará percebendo que nem sempre é eficiente carregar todo o conteúdo na parte do cliente (client-side) que é o padrão do React. Atualmente o Next js consegue trabalhar de forma hibrida com SSG e SSR.

Veja neste vídeo como funciona a construção de uma página com SSR:
Server Side Rendering Animado
## Mini Aula introdutória sobre Next.js

Uma ótima introdução para saber como utilizar o Next.js feita pelo [Willian Justen](https://willianjusten.com.br/?utm_source=segredodev&amp;utm_medium=post&amp;utm_campaign=o_que_e_nextjs), recomendo que assista para conseguir fixar melhor e entender os conceitos do Next js e quando usá-lo.

## Como instalar o Next.js?

É bem simples iniciar um projeto com o Next.js, a forma mais rápida é utilizando:

    npx create-next-app
    # ou
    yarn create next-app

Após executar um dos comandos acima será solicitado que você informe o nome de seu projeto e o restante será executado automaticamente. Depois que concluir a instalação basta acessar a pasta de seu projeto e executar `npm run dev` ou `yarn run dev` para iniciar o ambiente de desenvolvimento no endereço localhost:3000.

Você terá um projeto com alguns exemplos e uma estrutura do [Next.js](https://nextjs.org/docs/getting-started) configurado. Experimente. Lembrando que para executar os comandos é necessário que você tenha o [Node.js](https://nodejs.org/en/) instalado em sua máquina e um gerenciador de pacotes como [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/getting-started/install).

Caso queira se aprofundar em mais funcionalidades recomendo verificar o [passo a passo disponibilizado na documentação](https://nextjs.org/learn/basics/create-nextjs-app).

## Indicação de plugins e pacotes

O Next.js já faz bastante coisa mas sempre tem algum pacote que pode ser útil para dar aquele up no desenvolvimento, vou indicar alguns que já utilizei/utilizo e que me ajudam bastante:

- [next-seo](https://github.com/garmeeh/next-seo): Para trabalhar com SEO, Open Graph, JSON-LD ele simplifica alguns processos e automatiza configurações globais para SEO.
- [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer): Em algum momento pode ser necessário você [analisar sua build](/nextjs-analise-de-bundle/) para entender o que depende de que e como está construída a sua estrutura. Muito útil para achar arquivos e módulos pesados que podem afetar a velocidade.
- [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins): Trabalhar com vários plugins dentro do "module.exports" do next.config em algum momento ficará muito complexo. Esse plugin abstrai a configuração dos plugins melhorando a visualização e organização.
- [swr](https://swr.vercel.app/): Do mesmo time que criou o Next.js esta é uma biblioteca que cria um hook para data fetching, caso seja necessário fazer algum data fetching na parte do cliente.

Tradução de termos e glossário:

**Build:** Neste  caso é a "compilação" do site, esse processo disponibiliza uma pasta com  os arquivos prontos para integrar a versão oficial do site. Normalmente  é realizado após um comando no terminal como: "next build" - Next JS ou "npm run build" - Create React App.

**Static Site Generator (SSG)**:  Gerador de site estático, uma ferramenta que gera arquivos de um site  prontos para serem acessados pelo usuário, normalmente sem a necessidade  de uma consulta ao servidor.

**Search Engine Optimization (SEO)**:  Otimização de um site, estrutura e seu conteúdo para aparecer em posições  superiores de buscadores como o Google.

**Create React App (CRA)**: É um facilitador para a  criação de sites utilizando a biblioteca React, permite que você inicie  um novo projeto em React com o mínimo de configurações.

**React**: Uma biblioteca JavaScript para criar interfaces de usuário.

**Node.js**:  É um ambiente para execução de códigos JavaScript no lado do servidor (backend)

**npm/yarn: **São gerenciadores de pacotes normalmente utilizados para instalar novos plugins/pacotes em seus projetos.

**[TypeScript](https://github.com/iaurg/mini-curso-typescript#o-que-%C3%A9-typescript)**: Superset de Javascript que permite utilizar tipagem estática no Javascript. Escreve em Typescript e compila para Javascript.

**Data Fetching**: Buscar dados de uma fonte, normalmente um servidor que responde através da API.