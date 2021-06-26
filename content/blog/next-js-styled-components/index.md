---
title: Next.js + Styled Components, guia simples
slug: next-js-styled-components
description: "Como configurar Next.js com Styled Components."
date: "2019-11-28T14:01:05.000Z"
categories: [javascript]
image:
  feature: /images/posts/thumbs/nextjs-styled-components.png
---

![Next.js + Styled Components](/images/posts/thumbs/nextjs-styled-components.png)

Olá,

Neste post irei detalhar como utilizar o [Next.js](https://nextjs.org/) com o [Styled Components](https://styled-components.com/)[,](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c) basicamente você irá trabalhar com 3 arquivos _document, _app e .babelrc.

Se quiser ver a configuração funcionando[:](https://codesandbox.io/s/post-nextjs-styled-components-3pml6)

Considerando que você já está utilizando o [Next.js](https://nextjs.org/docs/getting-started) e possui ele instalado, rode um dos seguintes comandos em seu projeto para adicionar o styled-components:
  ```bash
    npm i styled-components
    ----- ou ------
    yarn add styled-components
  ```
E precisaremos do pacote [babel-plugin-styled-components](https://styled-components.com/docs/tooling#babel-plugin) para rodarmos o Styled Components no servidor (SSR)
  ```bash
    npm i babel-plugin-styled-components -D
    ----- ou -----
    yarn add babel-plugin-styled-components -D
  ```
Dentro de sua pasta 'pages' que faz parte da criação do Next.js para construção de página crie 2 arquivos [_document.js](https://nextjs.org/docs/advanced-features/custom-document) e [_app.js](https://nextjs.org/docs/advanced-features/custom-app), eles são utilizados normalmente para injetar e configurar dependências globais dentro do Next.js.

Dentro de seu _document.js aplique o código:
  ```js
    import Document from 'next/document'
    import { ServerStyleSheet } from 'styled-components'
    
    export default class MyDocument extends Document {
      static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    }
  ```
E em seu _app.js:
  ```js
    import App from 'next/app'
    
    export default class MyApp extends App {
      render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
      }
    }
  ```
Agora no arquivo .babelrc (caso não exista, crie ele) na raiz de seu projeto adicione a configuração informando que deseja usar o Styled Components com SSR:
  ```js
    {
      "presets": ["next/babel"],
      "plugins": [["styled-components", { "ssr": true }]]
    }
  ```
Essa é a configuração básica inicial para ter o Styled Components junto com o Next.js, você pode extender outras configurações do plugin babel ou adicionar mais elementos em seu _app ou _document, como um Theme Provider por exemplo.