---
title: Configurar testes no Next.js
slug: configurar-testes-no-nextjs
description: "Aprenda como configurar testes usando Jest e Testing Library no Next.js"
date: "2019-12-18T21:05:06.000Z"
categories: [javascript, teste]
image:
  feature: /images/posts/thumbs/nextjs-jest-test.png
---

![Configurar testes no Next.js](/images/posts/thumbs/nextjs-jest-test.png)

Olá, neste post vou detalhar como configurar o [Jest](https://jestjs.io/pt-BR/) + [Testing Library](https://testing-library.com/) em seu projeto [Next.js](https://nextjs.org/).

Existe um [repositório](https://github.com/zeit/next.js/tree/canary/examples/with-jest-react-testing-library) oficial da equipe do Nextjs com uma configuração inicial utilizando esses pacotes, porém neste tutorial irei detalhar como iniciar sua própria configuração com algumas melhorias que julgo necessárias para um processo de testes eficiente.

Caso queira o projeto com tudo configurado clone o [repositório no Github](https://github.com/iaurg/nextjs-jest)

## Iniciando o seu projeto

Estou considerando que você já possui um conhecimento básico no assunto e possui o [Node.js](https://nodejs.org/en/) e [NPM](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/pt-BR/) instalado em sua máquina.

Primeiro vamos iniciar um projeto Next padrão inserindo o comando `npx create-next-app` em seu terminal, após rodar esse comando será feita a seguinte pergunta:

- What is your project name? (Qual o nome do seu projeto)

Preencha com o nome que quer utilizar em sua pasta e aperte Enter. Eu utilizei o nome nextjs-jest.

Assim que o comando terminar de executar todos os serviços, será exibido em seu terminal o seguinte:

![nextjs-jest-start](/content/images/2019/12/nextjs-jest-start.png)

Execute os dois último comandos apresentados `cd nome-de-seu-projeto` e depois `yarn dev` ou `npm run dev`. Se tudo deu certo você poderá acessar seu projeto no endereço [http://localhost:3000](http://localhost:3000) e verá uma tela de boas vindas.

Pronto, iniciamos um projeto básico de Next.js.

## Instalando pacotes

Para que possamos executar testes em nosso projeto de maneira eficiente precisaremos de alguns pacotes que facilitem esse processo. Execute o seguinte comando dentro da pasta do projeto Next que você deseja realizar testes:

    yarn add jest @testing-library/react @types/jest @testing-library/jest-dom babel-jest @babel/core -D
    

ou caso utilize npm

    npm install jest @testing-library/react @types/jest @testing-library/jest-dom babel-jest @babel/core --save-dev
    

## Arquivos de configuração

Para definirmos as configurações do Jest utilizaremos alguns arquivos de configuração padrão que podem ser criados com o comando `touch jest.config.js .babelrc` na pasta raiz de seu projeto e o adicionaremos alguns scripts no package.json.

### jest.config.js

Este arquivo faz o controle das configurações e padrões que o Jest irá seguir dentro do seu projeto, você pode preenchê-lo com os seguintes valores:

    module.exports = {
      testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
      bail: 1,
      clearMocks: true,
      collectCoverage: true,
      collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
      coverageReporters: ['lcov', 'text'],
    };

Caso queira colocar mais configurações ou itens específicos você pode consultar a [documentação do Jest](https://jestjs.io/docs/pt-BR/configuration)

### .babelrc

Este arquivo informa para que o babel passe por dentro das pastas do Next, você pode preenchê-lo com os seguintes valores:

    {
      "presets": ["next/babel"]
    }
    

### package.json

No package iremos adicionar novos scripts para que possamos rodar os testes no terminal, seus scripts ficarão assim:

    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
    	"test": "jest --watch",
        "coverage": "jest --coverage",
     }

E pronto, o ambiente básico para testes em Nextjs está criado.

## Testando

Vamos criar um test simples para ver se as configurações e pacotes estão funcionando.

Primeiro crie um arquivo chamado Header.test.js dentro da pasta components e depois crie o arquivo Header.js na mesma pasta. Você pode usar o comando `touch components/Header.js components/Header.test.js` no terminal para criar esses arquivos.

Depois adicione dentro do arquivo Header.test.js:

    import React from 'react';
    import { render } from '@testing-library/react';
    import '@testing-library/jest-dom/extend-expect';
    import Header from './Header';
    
    it('should render Header', () => {
      const { getByText } = render(<Header />);
      expect(getByText('Header')).toBeInTheDocument();
    });
    

E no arquivo de Header.js:

    import React from 'react';
    
    export default function Header() {
      return <p>Header</p>;
    }
    
    

Salve os dois arquivo e no terminal rode o comando `yarn test` ou `npm run test`, se tudo deu certo você terá um tela como essa:
![nextjs-jest-tested](/content/images/2019/12/nextjs-jest-tested.png)

Esse post faz parte do conceito [Learn in Public](https://www.swyx.io/writing/learn-in-public/), estou ensinando enquanto aprendo. Então caso você veja algum erro ou saiba como fazer de uma maneira mais eficiente me chama no [Twitter](https://twitter.com/iaurg) ou comenta aqui embaixo.

Provavelmente haverão atualizações neste conteúdo, estou procurando uma maneira de usar o @testing-library/jest-dom/extend-expect globalmente para pular a declaração em todo documento.

Até.