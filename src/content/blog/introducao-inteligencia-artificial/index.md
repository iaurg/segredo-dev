---
title: Introdução Inteligência Artificial
slug: introducao-inteligencia-artificial
description: 'A Inteligência Artificial (IA) é uma forma de ampliar a capacidade humana e permitir que possamos nos concentrar em atividades de nossa mente.'
date: '2020-01-16T05:16:36.000Z'
tags: ['conceito', 'inteligencia-artificial']
image: ./introducao-inteligencia-artificial.png
authors: ['iaurg']
---

Iniciei a leitura do livro "21 Lições Para o Século 21" e nele além de diversos assuntos o tema inteligência artificial e biotecnologia são muito levantados. Apesar de IA ser um tema que me chamava atenção eu nunca havia iniciado alguma pesquisa sobre.

Aproveitando esse meu interesse encontrei um curso introdutório da [Microsoft](https://www.microsoft.com/pt-br/academia) e iniciei com o básico. Seguindo o conceito de "Learn in Public" fiz as observações que julguei necessárias e reuni neste material.

A Inteligência Artificial (IA) é uma forma de ampliar a capacidade humana e permitir que possamos nos concentrar em atividades como criatividade, empatia e inventividade de nossa mente para que possamos trabalhar em um mercado futuro mais centrado.

Machine Learning é um subconjunto de IA que permite um sistema aprender através de dados, ao invés de aprender via programação explícita. No inicio do processo é feita uma Modelagem que consiste em obter os dados, trabalhar com eles e entender como esses dados funcionam, em alguns momentos são necessários alguns filtros e reestruturação para ter uma base sólida. São esses dados quem irão modelar o funcionamento de sua IA, cuide bem deles.

O algoritmo de machine learning irá analisar os dados, encontrar um padrão e retornar a resposta à sua pergunta.

Inicialmente os tipos de aprendizados são os seguintes:

### Supervisionado

No aprendizado supervisionado o ML recebe uma previsão do que ele precisa retornar.

- Regression:

Qual seria o valor? Qual seria a nota?

- Classification:

Qual classe isso pertence?

### Não supervisionada

No aprendizado não supervisionado o ML analisa os dado e define o que ele precisa retornar como resultado.

- Clustering:

Existem grupos distintos? Qual grupo pertence?

- Anomaly Detection:

Esse comportamento é estranho?

- Recomendation:

Qual opção devo escolher?

Experimento criado para prever o preço de um veículo:
![Experiments](/images/posts/Screenshot_2020-01-06-Experiments.png)

Foi fornecido uma base de dados padrão para o aprendizado da Azure, com esses dados selecionei as colunas de interesse para treinar, os campos de preço que estivessem vazios foram excluidos do treinamento para não influenciar o resultado. Com os dados tratados o treino foi feito utilizado o algoritmo de regressão linear e gerou um resultado final com 0.89 de acertividade. Ao final foi inserida um input e output para consulta web, que permite a utilização e forma de API.

## Serviços Cognitivos

Utilização de IA para realização e identificação de tarefas cognitivas como visão, fala, idioma, conhecimento, busca e diversos outros modelos de cognição.

Formas de analisar os dados que foram inseridos dentro do site com base em diversos fatores como sentimentos, frases, imagens, idiomas.

### Criação utilizando Luis AI

A intenção é identificar o interesse do usuário se ele deseja alugar/comprar um carro com base no que foi digitado.

- Ensinar o "Luis" sobre o contexto do serviço de alugar um carro, para que ele possa "entender" como tratar cada informação.
- Separar entidades importantes para que possa ser analisado e considerado como definidores da frase.

Caso já possua uma base de dados para alimentar o bot é excelente, faça uma curadoria desses dados e forneça como input, com isso o treinamento fica muito mais eficiente.
![LUIS](/images/posts/Screenshot_2020-01-06-LUIS.png)

Neste exemplo o bot criado utilizando o Luis da Microsoft com um pouco de treino é capaz de identificar as palavras-chave de uma frase e separá-las em variáveis que podem ser utilizadas para algum filtro posterior. Talvez o direcionamento para o setor de acordo, apontamento para uma página... Enfim, diversas possibilidades.

### Visão Computacional

Responsável por identificar imagens e cenas dentro de foto ou vídeos e extrair informações desse contexto.

É um conteúdo básico introdutório, com certeza verei mais sobre o tema e um dos itens que está em minha lista de estudos é o Tensorflow, que é uma biblioteca de machine learning em JS. Esses assuntos básicos serão úteis.

Até mais!
