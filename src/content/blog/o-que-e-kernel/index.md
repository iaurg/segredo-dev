---
title: 'O que é kernel e para que serve'
slug: o-que-e-kernel
description: 'Kernel é o núcleo do sistema operacional: a ponte entre os programas e o hardware. Entenda o que ele faz e por que todo sistema depende dele.'
date: "2021-11-28T03:20:50.000Z"
updated: "2026-09-20T00:00:00.000Z"
topico: fundamentos
destaque: true
authors: ['iaurg']
image: ./o-que-e-kernel.jpg
---

Kernel (em português, núcleo) é a parte central do sistema operacional: o programa que fica entre os aplicativos e o hardware. Ele é carregado logo depois do boot e controla o uso da CPU, da memória e dos dispositivos, decidindo quais processos rodam e como cada programa acessa os recursos da máquina.

Abaixo eu explico o que ele faz no dia a dia, qual a diferença entre kernel e sistema operacional, quais são os tipos de kernel e onde ele está no Linux, no Windows e no seu celular.

## O que é kernel?

Todo programa que você abre precisa de alguma coisa da máquina: memória para guardar dados, tempo de processador para executar, acesso ao disco, à rede, ao teclado. Quem entrega esses recursos é o kernel.

Ele é o primeiro programa carregado depois do bootloader, antes de qualquer coisa que você vê na tela. A partir daí ele fica no meio do caminho: quando o navegador precisa de mais memória, ele não pega memória sozinho, ele pede. O kernel decide quanta memória liberar, de onde, e o que fazer quando não tem mais.

O nome ajuda a entender a ideia. Kernel em inglês é o miolo, a parte de dentro da semente ou da noz. É o centro do sistema operacional, a parte que não dá para trocar enquanto a máquina roda.

## Kernel e sistema operacional: qual a diferença?

Essa é a confusão mais comum, e a resposta curta é: o kernel é uma parte do sistema operacional, não o sistema inteiro.

O sistema operacional é o pacote completo que você instala e usa: o kernel, mais o [shell](/blog/o-que-e-shell/), os utilitários de linha de comando, a interface gráfica, o gerenciador de janelas, os aplicativos que já vêm junto.

Pensa num restaurante. O kernel é a cozinha: é lá que a comida é feita e onde os recursos são controlados. O shell e a interface gráfica são o garçom, quem recebe o seu pedido e leva até a cozinha. Você nunca entra na cozinha, e é bom que seja assim.

Por isso o Linux, tecnicamente, não é um sistema operacional. Ele é um kernel. O que você instala na sua máquina é uma distribuição: kernel Linux mais um monte de software em volta.

## Quais as funções do kernel?

No fim das contas o trabalho do kernel é decidir quem usa o quê, e quando:

- Decidir qual processo roda em qual núcleo da CPU e por quanto tempo. Isso é o escalonamento, e é o motivo de você conseguir ouvir música enquanto compila código.
- Entregar memória para quem pede, tomar de volta quando o programa fecha e manter cada processo dentro do seu próprio espaço.
- Conversar com placa de vídeo, disco, teclado e rede através dos drivers.
- Transformar um `abrir arquivo` em leitura de blocos no disco, checando permissões no meio do caminho.
- Receber as system calls, que são os pedidos que os programas fazem para tudo isso.
- Impedir que um programa leia a memória de outro ou derrube a máquina inteira.

## Kernel space e user space

A memória é dividida em duas áreas, e essa separação é o que segura a máquina de pé.

O kernel roda no **kernel space**, com acesso direto ao hardware. Seus programas rodam no **user space**, sem esse acesso. Navegador, editor de texto, Spotify: todos ali, isolados uns dos outros.

Quando um programa precisa de algo que só o kernel pode fazer, ele faz uma **system call**. É a porta entre os dois mundos, e ela é estreita de propósito: o programa pede, o kernel decide se atende.

O ganho aparece quando algo dá errado. Um programa que trava no user space morre sozinho, e o resto continua. Se o problema acontece dentro do kernel, aí não tem para onde correr: é o kernel panic no Linux e no macOS, ou a tela azul no Windows.

## Tipos de kernel

No kernel monolítico tudo roda dentro do kernel, drivers e sistema de arquivos incluídos. É rápido, porque não precisa ficar trocando de contexto o tempo todo, mas um driver com bug derruba o sistema. O Linux é monolítico, com módulos que dá para carregar e descarregar sem reiniciar.

No microkernel o kernel faz o mínimo e o resto roda fora, no user space. Fica mais difícil de derrubar, já que um driver quebrado não leva tudo junto, e mais lento, por causa da conversa constante entre as partes. MINIX e QNX seguem esse caminho.

O híbrido fica no meio: parte dos serviços dentro do kernel, parte fora. É o caso do Windows NT e do XNU, da Apple.

Nenhum dos três é o certo. É escolha de projeto, e ela foi discutida por anos: em 1992 Linus Torvalds e Andrew Tanenbaum, autor do MINIX, brigaram publicamente sobre isso numa lista de e-mails. Tanenbaum achava o design monolítico do Linux ultrapassado. Trinta anos depois o debate nunca foi resolvido de verdade, e os dois designs continuam em uso.

## Onde está o kernel que você usa

Se você usa Linux, o kernel é o próprio Linux, anunciado por Linus Torvalds em agosto de 1991 numa mensagem em que ele dizia ser só um hobby, nada "grande e profissional como o GNU".

No Windows é o kernel NT, o arquivo `ntoskrnl.exe`, que existe desde o Windows NT 3.1 em 1993 e continua sendo a base de tudo que veio depois. No macOS e no iOS é o XNU, que junta um microkernel Mach com partes do BSD.

E no seu celular Android também é o Linux. Em Configurações → Sobre o telefone dá para ver a versão do kernel, que é diferente da versão do Android.


Uma camada acima daqui está o [shell](/blog/o-que-e-shell/), que é quem leva seus comandos até o kernel. E depois que os dados saem da sua máquina, quem assume é [a internet](/blog/como-a-internet-funciona/).
