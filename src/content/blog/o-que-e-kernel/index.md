---
title: O que é Kernel e qual sua função?
slug: o-que-e-kernel
description: "O kernel é quem gerencia todas as comunicações entre software e hardware, uma das principais partes do computador, literalmente o cérebro do computador."
date: "2021-11-28T03:20:50.000Z"
authors: ['iaurg']
image: ./o-que-e-kernel.jpg
---

## O que é Kernel?

É um programa de computador que gerencia todos os processos e comunicações para o hardware. A camada mais baixa de comunicação acima do hardware. Toda vez que você desejar se comunicar com o hardware ou algum driver da máquina você precisará passar pelo kernel.

O kernel gerencia os recursos da CPU, de memória, de drivers, de processos, etc. Sua função é manter tudo sob controle. Para gerir estes processos o kernel é iniciado após o processo de bootloader na maioria do sistemas, antes de quaisquer programas de nível de usuário.

Por exemplo, caso algum aplicativo de sua máquina precise de mais memória é o kernel quem irá gerenciar a alocação dessa memória e disponibilizá-la para seu aplicativo.

Apesar de sua fama ter sido construida grande parte pelo Linux ele está presente em todos os sistemas operacionais e dispositivos, pois basicamente ele é o núcleo de comunicação entre software e hardware, logo, qualquer dispositivo precisará de algum tipo de kernel.

Por segurança a parte crítica do kernel normalmente é carregada em um espaço reservado na memória de seu computador, para que não exista o risco de algum programa entrar em conflito com o kernel, programas como gerenciadores de texto, navegadores e afins são carregados em um espaço reservado de memória conhecido como user space, esse tipo de separação previne que os dados do usuário e do kernel entrem em conflito causando instabilidades e erros.

## Quais as funções do kernel?

A principal função do kernel é gerenciar, organizar e separar processos para que eles sejam executados em ordem e de forma correta. Organizando sequência de execução de processos, gerenciando recursos de hardware, gerenciando processos, etc. Assim a sua função é garantir que a comunicação entre software e hardware seja feita de maneira correta e segura.
