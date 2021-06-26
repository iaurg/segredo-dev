---
title: Erro teste Next JS com Ant Design
slug: erro-test-jest-antd
description: "Erro SyntaxError: Invalid or unexpected token ao tentar utilizar Ant Design ao realizar testes no Next Js"
date: "2020-01-17T14:45:32.000Z"
categories: [javascript]
image:
  feature: /images/posts/thumbs/test-nextjs-antd.png
---

![Erro teste Next JS com Ant Design](/images/posts/thumbs/test-nextjs-antd.png)

Presenciei diversos erros ao tentar executar testes com o Jest utilizando a biblioteca Ant Design em componentes. Minha solução foi utilizando o Next.Js, porém creio que funcione para qualquer aplicação React.

A primeira aparição do erro foi quando eu importei o component  do Ant e tentei executar um teste básico, porém quando eu utilizava a biblioteca (Ant) o Jest entrava em conflito. O erro era sempre relacionado a algum @import ou syntax.
`Syntax Error: Invalid or unexpected token`

Fui mexendo e alterando para testar novas configurações no jest.config e no próprio babel.config, porém eu acabava encontrando outros erros como:
`Plugin/Preset files are not allowed to export objects, only functions` ou ` SyntaxError: Cannot use import statement outside a module`, fiquei muitas horas para encontrar uma solução e aparentemente é um problema comum entre muitos desenvolvedores: [Issue 1](https://github.com/vuejs/vue-cli/issues/1584), [Issue 2](https://github.com/facebook/jest/issues/6933), [Issue 3](https://github.com/facebook/jest/issues/2081)

Muitos comentavam sobre a utilização de módulos do babel es2015, es6... Enfim, porém estes continuavam tendo conflito no transpilador.

A solução que encontrei veio através [deste comentário](https://github.com/facebook/jest/issues/2663#issuecomment-317109798)

## Como rodar testes no NextJs com Ant Design

Primeiro verifique se os seus testes funcionam normalmente sem importar componentes do Ant, se tudo estiver de acordo tente importar um component do Ant e realizar um teste passando por esse component, se houver erro provavelmente será resolvido desta maneira:

Caso ainda não possua esses módulos instale-os:
`yarn add babel-plugin-import babel-jest @babel/core`

Após a instalação crie um arquivo com o nome de `assetsTransformer.js` na pasta raiz de seu projeto, este arquivo será utilizado como padrão pela configuração do jest, e adicione o seguinte conteúdo nele:
  ```js
    const path = require('path');
    
    module.exports = {
      process(src, filename, config, options) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
      },
    };
  ```

Dentro de sua configuração do Jest no package.json ou no jest.config.js adicione o seguinte:
  ```js
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
      }
  ```

Isso fará com que o Jest procure pelos padrões e acerte de acordo com o regex quando for realizar os testes. Fazendo com que os arquivos de less/css do Ant sejam lidos normalmente.

Seguindo esses passos consegui resolver meu problema e executar testes em componentes com a biblioteca Ant Design sendo carregada.

Caso tenha alguma dificuldade comente abaixo.

Até mais!
