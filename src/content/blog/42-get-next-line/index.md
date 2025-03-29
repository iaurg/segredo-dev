---
title: Get Next Line
slug: 42-get-next-line
description: 'Neste projeto você vai aprender a analisar leaks de memória.'
date: '2024-05-06T03:09:39.000Z'
authors: ['iaurg']
---

Um projeto que você analisa e pensa: "Hm, parece simples. É só printar uma linha após a outra...", até que você percebe que existem memory leaks para todo lado. Prepare-se para conhecer uma ferramenta que ficará com você por muito tempo durante os projetos, o [valgrind](https://valgrind.org/).

## Principais desafios

Neste projeto você começa a analisar diversas funções e ferramentas que serão úteis.

![Get Next Line](https://github.com/iaurg/42-get-next-line/raw/main/assets/draw-gnl.png)

**file descriptor**: A primeira vez que você utilizará esse recursos do unix, ele basicamente é um informativo sobre algum arquivo ou processo. Ele vai te dizer se um arquivo está aberto ou sendo utilizado por exemplo. É o registro da "porta de entrada" dos arquivos que são abertos no sistema.

**read, open**: A utilização dessas funções é simples, literalmente você abre e lê os arquivos utilizando elas. A sua maior dificuldade aqui será na utilização do read() para encaixar ele no buffer correto sem perder memória.

**buffer**: O buffer, este será o precursor dos seus problemas, o buffer é um espaço de memória temporário que você reserva para uma determinada operação. O problema será, qual o tamanho desse buffer? E se não utilizar ele todo? Quanto de memória irei alocar? Como não perder a referência do buffer?

**valgrind**: Você começará a utilizar essa ferramenta de análise de fato a partir de agora, reserve um tempo para entender os logs retornados pela análise, principalmente os que envolvem de memória. Você consegue acompanhar o log completo retornado pelo valgrind para descobrir qual função está cometendo o erro.

Exemplo de comando para iniciar o seu projeto validando com valgrind:

```sh
clang -Wall -Wextra -Werror -g -D BUFFER_SIZE=42 *.c && valgrind --tool=memcheck -q --leak-check=full --show-leak-kinds=all -s --track-origins=yes ./a.out | cat -e
```

Atenção as flags do valgrind, elas são bastante úteis em diversas situações para que você tenha a visão correta dos erros e análises.

**free**: Vimos bastante sobre malloc na libft, porém utilizamos pouco o seu parceiro free(), pense nele como o inverso do malloc. Um irá alocar a memória e o outro irá desalocar a memória, o free em sí é simples basta executar a função passando o ponteiro que deve ser liberado, o problema neste projeto é fazer o free dos itens corretos sem perder referência.

## Conclusão

Apesar de ter uma função simples esse projeto ensina muito sobre organização de fluxos de desenvolvimento, algoritmos, análise de erros e comportamentos padrões do sistema operacional, é um projeto de detalhes, você literalmente raspa "bits" para solucioná-lo.

Tu sofre, mas vale a pena.

Meu repositório do GNL: [42-get-next-line](https://github.com/iaurg/42-get-next-line)

Até mais!
