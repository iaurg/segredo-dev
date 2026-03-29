---
title: Zen da Programação com IA 
slug: zen-da-programacao-com-ia 
description: 'Reflexões sobre como a programação com agentes de IA muda a forma como desenvolvemos software.' 
date: '2026-03-28T13:00:00.000Z' 
tags: ['ia', 'programação'] 
authors: ['iaurg'] 
image: ./zen-da-programacao-com-ia.jpg
---

> O custo marginal do código está desmoronando. Esse único fato muda tudo o que vem depois.

Este post é uma adaptação do artigo [Zen of AI Coding](https://nonstructured.com/zen-of-ai-coding/) do Yoav Aviram, onde ele lista uma série de reflexões sobre como a programação com agentes de IA está mudando o jogo. Resolvi trazer essas ideias para cá com as minhas visões sobre cada ponto, pois acredito que são reflexões importantes para quem trabalha com desenvolvimento de software.

O título é uma homenagem ao [Zen of Python](https://peps.python.org/pep-0020/) do Tim Peters.

## Os princípios

- O desenvolvimento de software morreu
- Código é barato
- Refatorar é fácil
- Pagar dívida técnica também
- Todos os bugs são rasos
- Crie ciclos de feedback apertados
- Qualquer stack é a sua stack
- Agentes não servem só para programar
- O gargalo de contexto está na sua cabeça
- Construa para um mundo que muda
- Comprar vs. Construir: a resposta agora tende a ser construir
- Lixo rápido continua sendo lixo
- Software é um passivo, produto é um ativo
- Moats estão mais caros
- Construa para agentes
- Antecipe os modos de falha

## O desenvolvimento de software morreu

Você não precisa escrever mais nenhuma linha de código se não quiser. Agentes de programação conseguem realizar a maioria das tarefas com a direção correta.

O desenvolvimento de software como o ato de escrever código manualmente está morrendo. Uma nova disciplina está nascendo. O seu papel nela é vital, mas não é mais centrado em digitar código. É centrado em mapear problemas, moldar contexto, definir restrições e julgar os resultados.

Eu já falei sobre isso no post [Programando com IA](/blog/programando-com-ia/), a função do programador é resolver problemas, não escrever código. Com os agentes isso fica cada vez mais evidente.

## Código é barato

A economia do software mudou.

Quando escrever código é barato a implementação deixa de ser a restrição. Você pode construir dez coisas em paralelo. Mas não consegue decidir, validar e entregar dez coisas em paralelo, pelo menos não sem mudar o resto do pipeline.

O custo de atraso muda. Não se trata mais de dias de desenvolvedor (escrevendo código). Se trata do tempo preso em outros gargalos: decisões de produto, requisitos mal definidos, revisão de segurança, testes com usuário, processos de deploy e risco operacional. Agentes podem e estão inundando essas filas.

## Refatorar é fácil

O custo de mudar de ideia é mais baixo do que jamais foi. Decisões de arquitetura que antes pareciam permanentes agora são provisórias.

Você escolheu React. Dois meses depois se arrependeu. Peça para um agente reescrever o projeto.

Tomar decisões imperfeitas não é mais fatal. Na verdade pode ser produtivo. Uma implementação imperfeita fornece mais contexto do que uma especificação perfeita. Agentes raciocinam melhor a partir de artefatos concretos do que a partir de intenções abstratas.

Quando código é barato você pode fazer mais apostas pequenas.

## Pagar dívida técnica também

Há pouca desculpa para dependências desatualizadas ou patches de segurança ignorados. Atualizar bibliotecas, migrar APIs, modernizar padrões. Tudo isso está a um prompt de distância.

Corte e limpe seu código regularmente. Atualize agressivamente. Mantenha a superfície limpa.

A dívida técnica não desapareceu. Mas o custo de pagá-la caiu. Isso muda a estrutura de incentivos, negligenciar se torna menos defensável.

## Todos os bugs são rasos

A lei de Linus diz que "dados olhos suficientes, todos os bugs são rasos". Esses olhos agora foram multiplicados.

Peça para um modelo revisar seu código. Peça para outro. Eles podem encontrar problemas diferentes. Peça para corrigirem o que encontraram. Muitas vezes vão conseguir.

Bugs não sumiram magicamente. Agentes não alcançam perfeição. Mas na prática o fator limitante não é mais o número de revisores. É a qualidade dos seus ciclos de feedback.

A afirmação aqui é: compreensão do codebase em cada detalhe não é mais necessária. Ao mesmo tempo, confiar inteiramente nos modelos é receita para desastre. Você ainda tem um trabalho.

## Crie ciclos de feedback apertados

Agentes às vezes resolvem uma tarefa de primeira, mas na maioria dos casos operam melhor iterando em direção a um objetivo bem definido, guiados por feedback.

Bons testes são o primeiro ciclo de feedback. O agente vai iterar até os testes passarem. Sua responsabilidade é garantir que os testes sejam adequados e que o agente não trapaceie enfraquecendo ou pulando os testes.

Dê ao agente acesso ao seu CI para criar um segundo ciclo. Dê acesso aos logs do servidor para criar um terceiro. Dar ao agente uma forma de inspecionar visualmente a UI é mais um exemplo.

Seu trabalho é projetar ambientes onde a iteração converge para a corretude ao invés de derivar para um nonsense plausível.

> Velocidade sem feedback é caos.

## Qualquer stack é a sua stack

Agentes são competentes na maioria das stacks onde existem dados de treinamento. Como você não está escrevendo o código, seu apego a uma stack específica se torna menos relevante.

Não se limite ao que você pessoalmente conhece. Seu entendimento conceitual transfere mais do que você imagina.

Quando falta terminologia ou conhecimento de domínio, peça para o agente te dar um briefing. A barreira de entrada em ecossistemas desconhecidos é mais baixa do que jamais foi.

## Agentes não servem só para programar

Programar é só o começo.

Agentes podem ajudar com análise de negócio, UX, infraestrutura, operações, campanhas de marketing, configuração de analytics e até fluxos de contabilidade.

Quantas vezes você adiou uma tarefa não por dificuldade técnica mas por atenção? Agentes reduzem a energia de ativação necessária para executar trabalho tedioso mas valioso.

Conceda acesso com cuidado. Limite o escopo. Audite os resultados. Direção sem supervisão é irresponsabilidade.

## O gargalo de contexto está na sua cabeça

Context engineering melhorou. As ferramentas melhoraram.

Mas quando você roda múltiplos agentes em paralelo o verdadeiro gargalo é a coordenação humana.

Você precisa acompanhar o que cada agente está fazendo. Precisa lembrar quais premissas foram feitas. Saber quais perguntas fazer em seguida.

Conforme os agentes ficam melhores em gerenciar seu próprio contexto, sua capacidade de supervisioná-los se torna o fator limitante.

A restrição não são mais os tokens. É a cognição.

## Construa para um mundo que muda

Novos modelos. Novas capacidades. Novos frameworks. Novas habilidades.

O terreno muda diariamente. Alguns modelos são melhores em raciocínio. Alguns em código. Alguns em tradução.

Flexibilidade não é opcional. Precisa estar embutida no seu workflow e nos seus produtos. Ambos precisam ser projetados para experimentação e adaptabilidade.

## Comprar vs. Construir

Quando código era caro, comprar fazia sentido. Quando código se aproxima de custo marginal zero, o cálculo muda.

Toda API paga agora é uma pergunta: podemos replicar isso internamente? Devemos?

Isso não é um argumento contra SaaS. Manutenção, segurança e escala ainda importam. Mas muitos serviços pequenos e médios que antes exigiam fornecedores agora estão ao seu alcance. Alguns chamam isso de o fim do SaaS.

## Lixo rápido continua sendo lixo

Velocidade é intoxicante. Também é perigosa.

Você pode gerar quantidades enormes de código rapidamente. Mas velocidade e linhas de código sempre foram péssimos indicadores de progresso.

Refatorar é barato, mas é mais barato detectar uma direção errada cedo.

> Disciplina importa mais, não menos, quando a execução não tem atrito.

## Software é um passivo, produto é um ativo

Software custa dinheiro para manter. Só se torna um ativo quando produz valor para alguém.

Isso sempre foi verdade. É mais difícil de lembrar agora porque construir ficou muito fácil.

É mais tentador do que nunca adicionar features. Resista. Construa o que é usado. Mate o que não é.

## Moats estão mais caros

Gaps de features se fecham rápido. O que antes levava anos para replicar agora leva meses. O que levava meses agora leva dias.

Um conjunto de features não é mais um moat durável.

Moats se movem para distribuição, dados, marca, efeitos de rede, regulamentação e integração de ecossistema.

A barreira de entrada cai. A barreira de defensibilidade sobe.

## Construa para agentes

Existe uma nova hierarquia.

Na base estão os modelos. Em cima deles ficam os agentes. Em cima dos agentes ficam os serviços.

Hoje, agentes usam serviços projetados para humanos. Funciona, mas é ineficiente. O próximo passo são serviços projetados para agentes.

Torne seus serviços acessíveis para agentes. Exponha contexto estruturado. Forneça interfaces legíveis por máquina.

AX (Agent Experience) é o novo UX.

## Antecipe os modos de falha

Não assuma que competência implica perfeição.

Como um engenheiro supervisionando a construção de uma ponte, seu trabalho não é assentar tijolos. É garantir que a estrutura não desabe.

Agentes vão errar. Vão sair do rumo. Vão introduzir falhas sutis. Vão criar vulnerabilidades de segurança. Um dos meus tentou commitar um arquivo `.env` no git. Eles podem ser criativos na forma como se auto-sabotam.

Esteja um passo à frente. Pergunte a si mesmo como isso pode quebrar. Onde pode vazar. O que pode expor. Quais premissas o agente está fazendo silenciosamente.

Automatize verificações. Limite permissões. Isole ambientes. Adicione monitoramento. Crie caminhos de recuperação. Faça rollback ser trivial.

Lembre-se, código é barato e você tem novos superpoderes. Construa ferramentas que permitam investigar a fundo, descobrir vulnerabilidades e testar os modos de falha antecipados. Projete sistemas que esperam falha e degradam graciosamente.

> Esta é a distinção entre desenvolvimento de software e engenharia de software.

## Referências

- [Zen of AI Coding - Yoav Aviram](https://nonstructured.com/zen-of-ai-coding/)
- [Zen of Python - Tim Peters](https://peps.python.org/pep-0020/)
- [Programando com IA](/blog/programando-com-ia/)