---
title: O que é o dominio em arquitetura de software?
slug: o-que-e-dominio-em-arquitetura-de-software
description: 'Entenda o conceito de dominio em arquitetura de software e o que ele representa em seu código'
date: '2026-01-03T13:49:21.000Z'
tags: ['arquitetura de software', 'conceito']
authors: ['iaurg']
image: ./o-que-e-dominio-em-arquitetura-de-software.jpg
---

O "dominio" no contexto de arquitetura de software vem principalmente do Domain Driver Design (DDD), o conceito principal é termos os domínios de negócio guiando o código.

Normalmente o software que você desenvolve representa algum problema da empresa para qual você está trabalhando. Como programador o seu papel é entender o problema e representá-lo no código, os procesoss de um negócio são os dominios do negócio.

Para mim era muito comum chamar esse tipo de "processo" de regra de negócio. Eu gosto de entender o que o negócio faz, quem ele atende, o que o usuário espera e principalmente o que dá dinheiro para a empresa (Qual problema/solução mexe na última linha da DRE de uma empresa (Lucro/Prejuízo Operacional)?). Esse entendimento permite você visualizar os problemas e processos que já existem no negócio de uma forma mais clara antes de ir direto para o código.

Obviamente uma empresa pode ter vários dominios e sub-dominios dentro do seu contexto e você representará vários deles no seu código. Entender que existe um padrão comum que é compartilhado pela empresa e pelo software te ajuda a ter um código estruturado de acordo com o contexto do negócio.

Então o dominio nada mais é do que o problema ou processo que é implementado no software de acordo com uma abstração do contexto real do negócio, preferencialmente seguindo as mesmas regras e principalmente a mesma forma de expressar "verbalmente" (Ubiquitous Language).

Exemplo:

```ruby
# Dominio Financeiro
Financeiro
  Pagador (Cliente)
  Contas
  Detalhes do pagamento

# Dominio Livraria
Livraria
  Comprador (Cliente)
  Livros
  Detalhes da venda

# Dominio Entrega
Entrega
  Recebedor (Cliente)
  Produtos
  Detalhes do pedido
  Status
  Data de entrega
  Data de recebimento
  Data de cancelamento
```

Referências:

- [Domain Driven Design: What You Need To Know](https://www.youtube.com/watch?v=4rhzdZIDX_k)
- [Domain Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Domain Driven Boldness](https://world.hey.com/jorge/code-i-like-i-domain-driven-boldness-71456476)
