---
title: O que é Shell e qual sua função?
slug: o-que-e-shell
description: "Shell é um programa que permite o usuário acessar e enviar informações ao sistema operacional através de um terminal ou interface gráfica."
date: "2021-11-28T03:21:50.000Z"
---

- [O que é shell?](#o-que-e-shell)
- [Qual a função do Shell?](#qual-a-funcao-do-shell)
- [Tipos de Shell?](#tipos-de-shell)
- [Como o shell funciona?](#como-o-shell-funciona)

<h2 id="o-que-e-shell">O que é Shell?</h2>

Shell é um programa especial disponibilizado ao usuário ou algum programa para que este possa se comunicar diretamente com o sistema operacional. O Shell aceita comandos simples e de fácil entendimento para o usuário e os interpreta para que o [Kernel](/o-que-e-kernel) possa executar as ações desejadas. É um interpretador de comandos que aceita inputs vindos do teclado ou através de arquivos.

<h2 id="qual-a-funcao-do-shell">Qual a função do Shell?</h2>

A função do Shell é executar comandos e informações para o sistema operacional. Normalmente esses comandos são enviados pelo usuário utilizando uma CLI (Command Line Interface) através de um Terminal/Command Prompt. Ele é responsável pela comunicação entre usuário e sistema operacional.

Trabalhar com o Shell pode ser complicado para iniciantes pois é dificil memorizar e entender tantos comandos de uma vez, mas esta é uma ferramenta muito poderosa e vale a pena aprender. Com os conhecidos shell scripts você é capaz de automatizar tarefas e executar comandos em sequência programada em diversas situações.

<h2 id="tipos-de-shell">Tipos de Shell</h2>

No Linux, existem diversos tipos de Shells, o Shell padrão é o Bash, mas existem outros tipos de Shells como o Korn, o Batch, o CMD, o PowerShell, o Tcsh, o Zsh, o Fish, etc. Normalmente eles são muito similares, mas cada um possuí suas peculiaridades e recursos.

<h2 id="como-o-shell-funciona">Como o shell funciona?</h2>

A implementação do shell é dividida em três partes: o parser, o executor e os shell subsystems.

O parser é o software que lê os comandos como "ls -la" recebidos através do input e os adiciona em uma estrutura de dados chamada Command Table, que guarda todos os comandos que serão executados.

O executor irá pegar a Command Table gerada pelo parser e para cada comando na array criará um novo processo para execução de cada comando. Se for necessário o executor também criará pipes para se comunicar com o output de um processo e input de outro. Também é possivel que o executor redirecione o stdin, stdout e stderr para um arquivo se houver qualquer redirecionamento.

Os shell subsystems são outros comandos e estruturas dentro da execução como:
Environmet Variables, Shell Variables, History, Jobs, wildcards, subshells etc.
