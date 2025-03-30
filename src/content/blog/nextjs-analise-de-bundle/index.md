---
title: Como analisar o bundle do Next.js
slug: nextjs-analise-de-bundle
description: 'Analise um gráfico do bundle de seu site construído com Next.js de maneira fácil e rápida.'
date: '2020-02-26T21:51:57.000Z'
tags: ['front-end', 'javascript', 'otimização']
image: ./como-analisar-bundle-nextjs.png
authors: ['iaurg']
---

É hora de otimizar seu projeto, e para isso o [Next.js](https://nextjs.org/) possui um pacote integrado com o [bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), o [next-bundle-analyzer](https://github.com/zeit/next.js/tree/canary/packages/next-bundle-analyzer).

Analisar gráfico de bundle no Next.js:

1. Abra seu `package.json` e  adicione o script:

```json
  "analyze": "ANALYZE=true next build"
```

2. Ficará algo próximo disso:

```json
{
  "name": "nextproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "analyze": "ANALYZE=true next build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.1.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }
}
```

3. Agora instale o pacote de bundler do Next.js

   npm install --dev @next/bundle-analyzer

ou caso esteja usando yarn

`yarn add -D @next/bundle-analyzer`

4.  Crie um arquivo `next.config.js` na raiz de seu projeto e adicione o seguinte:
    ````js
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    })
        module.exports = withBundleAnalyzer({
        /* Caso tenha outros plugins envolva eles com o bundle */
        });
        ```
    Agora rode o comando `npm run analyze` ou `yarn analyze` e o Next.js irá gerar uma build com o bundler. No final do processo o mapa do bundle será mostrado em seu navegador e no terminal.
    ![](/images/posts/bundle-nextjs.png)Bundle server Next.js aberto no navegador
    Esta é uma ferramenta que pode ajudá-lo na análise de sua build e lhe dar uma direção de por onde começar a sua otimização.
    ````
