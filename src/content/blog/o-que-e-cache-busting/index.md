---
title: O que é Cache Busting? Entenda como funciona.
slug: o-que-e-cache-busting
description: 'O que é cache busting? A técnica para forçar o carregamento de versões atualizadas de um arquivo'
date: '2025-08-17T07:25:50.000Z'
tags: ['cache', 'programação', 'conceito']
image: ./o-que-e-cache-busting.jpg
authors: ['iaurg']
---

## O que é Cache Busting?

**Cache busting é uma técnica utilizada para forçar o carregamento** de uma nova versão de um arquivo no browser, normalmente através de query strings. Essa técnica é comumente utilizada em arquivos estáticos como CSS, JS, HTML e imagens.

## Como funciona o cache busting?

Como os browsers por padrão utilizam o caminho do arquivo como chave para armazenar o cache ao enviarmos uma nova requisição com uma query string atrelada a url de solicitação do arquivo o browser entenderá que este é um novo arquivo, por exemplo:

```sh
GET /thumbnail.jpg # Browser baixa a imagem e guarda em cache com a chave 'thumbnail.jpg'

GET /thumbnail.jpg # Browser retorna a mesma imagem, pois a chave no cache ainda é a mesma

GET /thumbnail.jpg?v=1 # Browser baixa novamente a imagem pois agora temos uma nova chave 'thumbnail.jpg?v=1'
```

Como a maioria dos servers ignoram a query string para o carregamento de arquivos estáticos o usuário visualizará a imagem de thumbnail normalmente no browser e o servidor ta

## Quando utilizar o cache busting?

Sempre que for necessário recarregar **forçadamente** a última versão de um arquivo estático, obviamente por ser uma técnica que teoricamente não armazena o arquivo em cache ela é prejudicial para o desempenho de velocidade do site, pois o cache serve justamente para você utilizar um arquivo em cache e não ficar solicitando novos arquivos do servidor todas as vezes. O ideal é utilizar regras de [cache-control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) para que seus arquivos sejam entregues da melhor forma para seu usuário.