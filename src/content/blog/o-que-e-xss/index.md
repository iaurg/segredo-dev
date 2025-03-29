---
title: O que é XSS?
slug: o-que-e-xss
description: Uma das vulnerabilidades mais comuns e que mais teve recompensas em programas de bug bounty nos últimos anos, o XSS.
date: '2023-09-09T00:01:08.000Z'
tags: ['hacking', 'conceito']
authors: ['iaurg']
---

Uma das falhas mais comuns de se encontrar em aplicações web segundo [análise do HackerOne](https://www.hackerone.com/top-ten-vulnerabilities), em 2020 foram pagos mais de 4 milhões de dólares em recompensas por falhas de XSS.

Seguindo a ideia da busca pela primeira falha decidi fazer um estudo sobre as top 10 vulnerabilidades para que eu consiga aumentar as chances de encontrar um bug. Nas primeira tentativas de programas irei focar em no máximo 3 tipos de falhas para iniciar as buscas.

Vamos entender neste post o que é XSS e como ele funciona.

## Vídeo sobre o que é XSS

<iframe width="100%" height="415"
src="https://www.youtube.com/embed/JCG0JNVDRTg"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

## Table of contents

## O que significa a sigla XSS?

A sigle XSS é uma abreviação do termo em inglês Cross Site Scripting, que em português pode ser entendido como "script entre sites", que basicamente possibilita a troca de informações não autorizadas entre sites, normalmente um site legítimo enviando informações para o site do invasor.

## O que é uma vulnerabilidade XSS?

O XSS é uma vulnerabilidade que permite que um atacante injete um script malicioso em uma página e interaja nessa página com todos os privilégios do usuário original. Certo, e qual é o perigo disso?

Ao ter acesso a uma página como se fosse o usuário original o atacante pode roubar informações, alterar dados, encaminhar o usuário para outra página ou até enviar informações sensíveis como chaves e cookies para um servidor externo. E dependendo do nível de permissão do usuário que sofreu o ataque, o script injetado pode fornecer acessos a níveis mais altos da aplicação fazendo com que além do ataque o atacante consiga escalar dentro dessa aplicação, comprometendo não apenas o usuário mas toda a aplicação.

## Como o XSS funciona?

De forma resumida o XSS vai tentar encontrar uma forma de inserir um código JavaScript em uma página de maneira não autorizada para que tenha um comportamento fora do esperado pela aplicação.

Por exemplo, digamos que você acessa o Facebook e alguém postou um link para um novo filme do Netflix, você verifica o link e aparentemente ele está correto:

```html
https://www.netflix.com/br/title/80100172
```

Perfeito, é só clicar e sucesso! Porém, você não percebeu que depois do número do filme foi inserido um código malicioso que redireciona você para um site de phishing:

```sh
https://www.netflix.com/br/title/80100172?redirect=<script>window.location.href="https://evil.com"</script>
```

Neste site o atacante pode fingir ser o Netflix, pois você clicou no link do Netflix, não é mesmo? E solicitar algumas informações sensíveis para você em um site que simula ser o Netflix (phishing).

Esse é apenas um exemplo das formas de atacar e de roubar informações dos usuários, a maior dificuldade para se corrigir falhas de XSS é que elas podem ser [exploradas de diversas formas](https://github.com/payloadbox/xss-payload-list) fazendo com que o atacante tenha muitas portas de entrada.

Assim ocorre o ataque de XSS, onde o atacante consegue utilizar um site oficial para extrair ou direcionar informações sensíveis de um usuário.

## Quais os tipos de XSS que existem?

Existem 3 tipos de XSS mais comuns, o Reflected, Stored e o DOM Based. Vou resumir cada um deles abaixo:

### Reflected XSS

É a forma mais simples de XSS, ele basicamente reflete o que o atacante programou, sem fazer nenhum tipo de tratativa. O código que foi construido pelo atacante é refletido de forma direta para o browser do usuário e executado.

### Stored XSS

Também conhecido como Persistent XSS ou Secord-Order XSS, ele é um pouco mais complexo pois armazena o script malicioso de alguma forma na parte do servidor e é executado por mais que nenhum link seja acessado, por exemplo em algum comentário ou descrição de um produto.

O código malicioso é injetado e todo usuário que acessa a página é afetado, por mais que não tenha clicado em nenhum link.

### DOM Based XSS

No DOM Based ou DOM XSS o código é executado diretamente no lado do browser, sem a necessidade de contato com o servidor. Normalmente ocorre quando o JavaScript de uma página processa dados de uma fonte não confiável e injeta esses dados em um elemento HTML.

Como esse dado é "construido" pelo navegador, o atacante pode manipular as tags e injetar o código necessário. Em muitos casos o DOM pode ser manipulado pelos parâmetros de URL, da mesma forma que é feito no Reflected XSS.

## Conclusão

O XSS é uma falha muito comum e que pode ser explorada de diversas formas, a probabilidade de um site possuir uma das formas de falha através de XSS é muito alta, por isso essa é uma vulnerabilidade muito explorada em diversos programas de bounty.

## Material de apoio

[Site do Google com alguns desafios de XSS](https://xss-game.appspot.com/)

[Payloads para XSS](https://github.com/payloadbox/xss-payload-list)

[Definição OWASP](https://owasp.org/www-community/attacks/xss/)

[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
