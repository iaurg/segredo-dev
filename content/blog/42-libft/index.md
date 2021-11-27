---
title: O primeiro projeto na 42, o libft!
slug: 42-libft
description: "O processo de desenvolvimento do primeiro projeto na 42, uma biblioteca completa em C"
date: "2021-11-27T03:09:39.000Z"
---

Após o basecamp este é o primeiro desafio dentro do curso da 42, resumi-se a um projeto para que você crie uma biblioteca em C que possa ser usada em projetos futuros.

Normalmente você precisará sempre fazer as mesmas coisas, alocar memoria, copiar memória, printar strings, contar caracteres, etc. E isso se torna repetitivo, esse é o problema que a libft visa resolver, uma solução para problemas recorrentes.

De primeira visão é um projeto grande, mas você perceberá que muitas das funções solicitadas utilizam uma lógica e as vezes até a mesma solução de funções feitas durante o basecamp.

## Principais desafios

De todos os desafios neste projeto creio que alguns deles se destacam e merecem atenção.

**Makefile**: Como durante o basecamp nunca trabalhamos com esse tipo de arquivo até a lista C09 talvez você ainda não o conheça, então provavelmente aqui será a primeira vez que você criará um Makefile, recomendo que veja os videos na lista C09 do basecamp e busque alguns materiais para entender melhor sobre este arquivo de configuração, ele será utilizado em quase todos os projetos daqui pra frente, você não precisa virar um especialista do Makefile, mas entendendo e conseguindo construir um, você conseguirá avançar. Até o momento eu basicamente copio e colo o Makefile da libft nos demais projetos e apenas ajusto um detalhe ou outro, então, se o seu primeiro estiver bem feito, facilitará nos futuros.

**header**: Esta é outra configuração que será utilizada muito nos próximos projetos e caso não tenha visto além da lista C08 no basecamp provavelmente não terá criado um até o momento. Teoricamente ele é simples, um arquivo para declarar suas funções, structs, bibliotecas extras de forma que possam ser utilizadas em quaisquer arquivos da sua biblioteca. É uma configuração que você aprenderá aqui e irá utilizar nos demais projeto, de forma muito similar.

**biblioteca de comparação**: Neste projeto você precisará desenvolver algumas funções que tenham o comportamento e estrutura similares as funções da "libc", mas atente-se que a correção utilizada pela moulinette se baseia em uma versão específica, no caso atualmente a versão [FreeBSD+11.3-RELEASE](https://www.freebsd.org/cgi/man.cgi?query=February+26%2C+20&apropos=0&sektion=0&manpath=FreeBSD+11.3-RELEASE&arch=default&format=html), e para que isso importa? As funções podem mudar seu protótipo ou lógica em cada versão da biblioteca, compare a versão utilizada na máquina de correção para que você desenvolva com base na correta.

**funções que envolvem memória**: Algumas funções nesse projeto envolvem a movimentação de ponteiros e malloc, nessas o principal ponto a ficar atento é sobre para onde essa memória está sendo movida, o que acontece com o espaço dela depois de mover, e onde estará o ponto nulo ou limite.

**malloc**: Este é outro tema que aparece apenas na lista C07+ no basecamp e talvez ainda não foi estudado por você, recomendo que entenda sobre como ele funciona, não apenas para esse projeto em específico, mas para os próximos, malloc será amplamente utilizado. Lembrando que quando se trabalha com alocação de memória você tem "novos" problemas, o vazamento dessa memória ou memórias perdidas, o valgrind te ajuda nesse caso, mas no segundo projeto (GNL) isso ficará mais claro.

**listas**: Estas fazem parte do bônus desse projeto, é um conceito que poderá ser reaproveitado em alguns projetos, creio que após entender a "lógica" da lista linkada, implementar as funções solicitadas será tranquilo. Vale a pena desenvolver aqui, mas caso esteja com dificuldades você terá outras oportunidades para estudar o assunto.

**ft_split**: Parece fácil, mas é difícil, fique tranquilo. Esta é uma das funções que normalmente os cadetes demoram mais para desenvolver, ela reune vários conceitos e exige uma lógica mais complicada para ser solucionada, don't panic.

## Conclusão

É um projeto desafiador para quem veio do basecamp mas ele é muito importante para os próximos projetos, acredite ele será útil. Dedique-se em solucioná-lo de maneira que seja proveitosa e te ajude futuramente.

Todos passaram por esse projeto e continuaram evoluindo esta biblioteca para ser reaproveitada em outros projetos, com certeza muitos podem te ajudar caso tenha dúvida.

Meu repositório da libft: [42-libft](https://github.com/iaurg/42-libft)

Até mais!
