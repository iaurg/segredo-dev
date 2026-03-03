---
title: Como uma LLM é treinada?
slug: como-uma-llm-e-treinada
description: 'Como é o processo de treinamento de uma LLM antes de chegar até nós.'
date: '2026-03-02T16:06:00.000Z'
tags: ['ia', 'machine-learning']
authors: ['iaurg']
image: ./como-uma-llm-e-treinada.jpg
---

O processo teoricamente é algo simples de entender, mas na prática é algo extremamente complexo e custoso.

Temos uma quantidade massiva de dados > Eles são tokenizados > Um algoritmo de machine learning processa constantemente esses tokens tentando prever o próximo token > Os parâmetros são ajustados > Repete

Esse processo é contínuo até a porcetagem de acerto ser satisfatória para o objetivo do treinamento.

## De onde vem os dados?

Os dados vem principalmente a partir de crawlers públicos ou customizados que tem como objetivo varrer toda a internet e coletar o máximo de informações possíveis, páginas web, livros, artigos, redes sociais, comentários, etc. 

Todos esses dados posteriormente passam por um processo de filtragem e organização para que possam ser removidos duplicatas, dados indesejados, informações sensíveis, etc.

O objetivo é claro, vá para a internet e colete o máximo de informações possíveis. Depois organize e filtre esses dados para que tenhamos um dado de qualidade para as próximas etapas.

Alguns crawlers públicos são: Common Crawl e FineWeb.

## De texto para tokens

Aqui é onde a mágica começa a acontecer, os dados extraidos na etapa anterior precisam passar de texto puro para uma forma que seja melhor compreendida pelo algoritmo de machine learning.

Aqui o processo que ocorre é basicamente agrupamentos que passam de palavras, binários até o token.

A partir desse momento entra o trabalho do transformer que precisa identificar a probabilide de cada token aparecer na cadeia de texto.

## Pré Treinamento

O treinamento é basicamente um trabalho de força bruta, aqui o modelo recebe uma sequência de tokens e tenta prever o próximo token, se ele errar, os parâmetros são ajustados para que ele acerte na próxima vez. Mas esse processo é repetido bilhões de vezes, até que o resultado seja satisfatório.

O transformer trabalha com probabilidade baseada no input e configurações dos parâmetros, o treinamento será basicamente calibrar esses parâmetros da melhor maneira possivel. O grande desafio aqui é que cada pequena mudança em um parâmetro altera a probabilidade de toda a cadeia, multiplique isso por bilhões de parametros e você entenderá porque as big techs gastam tanto dinheiro em treinamento de LLMs, o poder computacional necessário para calcular todas as possibilidades é absurdo.

A partir daqui temos um modelo base treinado, ainda não é o que conhecemos em um chat conversacional, ele é apenas uma máquina de prever o próximo token, parece não muito útil se você conversar com ele

## Ajuste Fino Supervisionado (Supervised Fine-tuning)

De forma muito resumida, esse ajuste é feito injetando novos tokens controlados dentro do modelo e treinando ele dentro de um cenário específico para que responda de forma mais adequada ao que se espera dele. É basicamente ensinar um "nicho" muito específico para o modelo e ele ficar mais direcionado a responder de acordo dentro deste nicho.

Sendo muito leviano, é como se ensinássemos o modelo que "isso é certo" e "isso é errado".

## Conclusão

Este é o processo, existe muita teoria e cada empresa possui os seus "segredos" de como treinar e calibrar seus modelos, por isso temos resultados diferentes entre os modelos. Mas o processo é basicamente esse.

Este vídeo do Karpathy explica de forma muito didática todo o processo:

<iframe width="100%" height="415" src="https://www.youtube.com/embed/7xTGNNLPyMI?si=8nC8B8vEZqc1s5R5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Referências

- https://commoncrawl.org/
- https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1
- https://arxiv.org/pdf/1706.03762
- https://arxiv.org/pdf/2203.02155
- https://developers.openai.com/api/docs/guides/supervised-fine-tuning/
- https://huggingface.co/datasets/OpenAssistant/oasst1