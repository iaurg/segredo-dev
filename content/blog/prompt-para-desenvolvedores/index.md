---
title: Engenharia de Prompt para Iniciantes
slug: engenharia-de-prompt-iniciante
description: "Como escrever prompts mais eficientes com técnicas simples"
date: "2025-02-23T12:52:43.000Z"
---

Este material são as anotações e entedimentos do curso [Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/). O foco principal deste curso é direcionar para uma criação de prompts mais eficientes para que suas respostas e dados gerados sejam melhores estruturados para resolverem seus problemas.

## Principios

A maioria dos modelos [LLM](https://www.ibm.com/br-pt/think/topics/large-language-models) que estão ficando mais "comuns" usam o principio de Instruction Tuned LLM, que basicamente é um modelo treinado para seguir instruções e dar respostas, comumente treinado a partir de Reinforcement learning from human feedback (RLHF), o ChatGPT é um exemplo de aplicação que segue esses principios.

Para extrairmos o máximo desses modelos o ideal é termos alguns padrões e boas práticas que ajudam eles a trabalharem melhor.

### Escreva regras claras e especificas

Imagine que você está dando instruções para alguém que nunca fez a tarefa que você está solicitando, seguindo essa premissa, ao dar instruções (prompts) para um modelo, seja o mais claro e específico possível. Isso não quer dizer que você precisa de prompts curtos, em alguns casos para sua ideia e necessidade ficar totalmente clara você precisará estender a sua explicação.

Para isso tome cuidado ao assumir coisas que possam ser "básicas" ou "óbvias", o modelo não irá pensar ou ter esse tipo de raciocinio, ele tentará seguir de forma randômica (por mais que acerte) com base no que ele possui de conhecimento treinado.

### Delimitadores

Para ajudar a definir as regras de seu prompt e detalhar de forma concisa para o modelo o que você precisa, você pode usar delimitadores/marcadores para definir o que uma parte do prompt significa ou o que é esperado em determinado momento.

Por exemplo:

```python
comentario = "Adorei este produto"

prompt = """
Com base no texto do comentário entre <> defina o humor do cliente em uma palavra.

<comentario>
"""
```

Com isso você garante que o modelo irá considerar como comentário do cliente apenas o que está entre "<>" e saberá que o restante do texto faz parte da instrução.

### Peça output estruturado

Para ter um controle e um tratamento melhor da informações e resultados do prompt você pode pedir respostas estruturadas com base na análise do modelo, assim você consegue trabalhar melhor com os resultados.

```python

prompt = """
Gere uma lista 10 de livros estruturados em json com os campos:
book_id, title, author, genre.
"""

```

Dessa forma você terá um resultado mais previsivel.

```json
[
  {
    "book_id": 1,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian"
  },
  {
    "book_id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Classic"
  }
]
```

A vantagem desse tipo de saida é que você pode utilizar o resultado para trabalhar com alguma API ou ferramentas auxiliares.

### Especifique detalhes necessários

Todos os detalhes fazem a diferença na hora de montar seu prompt, uma palavra pode mudar totalmente o que será retornado. Certifique-se de que esta sendo claro no texto fornecido, um exemplo que é simples mas serve para ilustrar, se você deseja gerar uma imagem de uma pessoa com camiseta azul, especifique "pessoa com camiseta azul", apenas usar como prompt "pessoa com camiseta" é um leque infinito de como pode ser essa camiseta.

"Mulher elegante com cabelos longos castanhos, vestindo terno cinza e camisa branca, posando em um corredor iluminado com janelas grandes."

vs

"Mulher elegante"

![Imagem de mulheres elegantes geradas por IA](/images/posts/exemplo-prompt-image.jpg)

### Dê exemplos para o modelo

Se você precisa que seu resultado seja de uma forma específica dê exemplos de o que você espera que o modelo retorne para você, construa a estrutura desejada como exemplo após detalhar as regras necessárias.

Isso ajuda o modelo a estruturar as informações da forma que você espera e que ele consiga entender melhor o contexto que receberá.

```python
prompt = """
Você é responsável por organizar todas as avaliações de nosso site, preciso que retorne cada avaliação de maneira organizada, precisamos apenas das notas para a nossa análise.

Exemplo de input: "Adorei esse produto foi uma maravilha - Larissa - Curitiba - 4 estrelas"

Exemplo de output:
Nome do cliente: Larissa
Nota: 4
Cidade: Curitiba
"""

```

Dessa forma o modelo conseguirá entender o que ele receberá e como você espera que essa informação seja tratada. Isso é próximo de uma técnica chamada "few-shot prompting", que é uma maneira de se trabalhar com prompts que fornecem poucos exemplos para um modelo e ele é capaz de seguir de forma consistente.

### Detalhe os passos da tarefa

Para tarefas que possam ser detalhes em etapas que o modelo precisa seguir a melhor abordagem é criar um processo de como o modelo deve agir em cima do dado, assim ele poderá trabalhar da maneira que você espera, digamos que você queira traduzir um texto para inglês e deseja ter cada frase em uma posição de um array por algum motivo.

```python
prompt = """
Com o seguinte parágrafo que está entre <> execute os passos a seguir:
1 - Traduza o parágrafo para inglês
2 - Separe cada frase delimitada por pontuação
3 - Adicione cada uma das frases em um array, exemplo: ["Olá, tudo bem?", "Como você está?", "Estou bem."]

<
O que é uma vulnerabilidade XSS?

O XSS é uma vulnerabilidade que permite que um atacante injete um script malicioso em uma página e interaja nessa página com todos os privilégios do usuário original. Certo, e qual é o perigo disso?
>
"""
```
Resultado:
```js
[  
  "What is an XSS vulnerability?",
  "XSS is a vulnerability that allows an attacker to inject a malicious script into a page and interact on that page with all the privileges of the original user.",
  "Right, and what is the danger of that?"
]
```

### Peça ao modelo para ele validar o próprio contexto antes da resposta final

Em alguns casos você precisará que o resultado de seu prompt retorne ao inicio do contexto para confirmar que está dando o resultado correto, pois deseja que ele tenha certeza do que está acontecendo.

Dependendo do contexto e prompt fornecido pode ser o que modelo se confunda durante algum cálculo ou comparação, ao final do prompt peça para ele mesmo revalidar as informações para garantir que está correto antes da respostas final.

### Hallucination

Muito comum de acontecer em modelos, principalmente os conversacionais, por ser um modelo treinado para conversar e criar frases que sejam "reais" esses tipos de modelos são muito bons em inventar coisas de uma forma que pareçam reais, isso quer dizer que o texto retornado por ele parecerá muito correto e real, mas pode ser algo totalmente sem sentido no mundo real. 

```python
prompt = "Descreva para mim um tchumbirombas em 1 frase, é um animal brasileiro"
```

Resultado: _O tchumbirombas é um animal brasileiro raro e arisco, parecido com um tamanduá-bandeira, mas com o pelo azulado e uma longa cauda felpuda que usa para se camuflar entre as árvores._

A resposta foi boa, mas esse animal não existe.

Durante seus prompts e retornos sempre fique atento para quando seu modelo começar a inventar coisas, pode ser necessário você implementar um processo de limitação das respostas, algo como "Se não souber sobre, não responda", isso já faz com que o prompt trave um pouco os retornos.

### Defina o tom

Ao estruturar seu prompt você pode definir o tom e forma que ele irá responder para você, isso te ajuda a ter um modelo respondendo da forma que você precisa. Digamos que você queira respostas mais diretas, com mais emojis, como se fosse um personagem de filme, de forma mais amigável... Tudo isso fará com que você defina um tom de retorno.

## Criação interativa de prompt



## Capacidade dos modelos

### Resumir

### Inferir

### Transformar

### Expandir
