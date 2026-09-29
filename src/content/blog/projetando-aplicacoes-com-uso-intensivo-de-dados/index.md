---
title: 'Projetando Aplicações com Uso Intensivo de Dados: notas de estudo'
slug: projetando-aplicacoes-com-uso-intensivo-de-dados
description: 'Minhas anotações e comentários enquanto leio a segunda edição do livro de Martin Kleppmann e Chris Riccomini.'
date: '2026-09-27T13:00:00.000Z'
topico: back-end-e-arquitetura
authors: ['iaurg']
image: ./projetando-aplicacoes-com-uso-intensivo-de-dados.jpg
draft: false
---

A ideia principal na leitura deste livro é eu aprofundar meus conhecimentos em sistemas complexos e que precisam ser escaláveis, além de expandir meu conhecimento teórico em outro "lado" da computação que lida com dados de forma intensiva.

Já no inicio do livro temos uma diferenciação bem útil que descreve:

> Uma aplicação faz uso intensivo de dados quando o gerenciamento de dados é um dos principais desafios em seu desenvolvimento. Enquanto em sistemas com uso intensivo de computação o desafio está em paralelizar um cálculo muito grande.

Uma visão que espero ter é aumentar o meu arsenal de ferramentas e soluções para saber escolher o que e quando utilizar cada uma das soluções que existem disponiveis, não quero saber usar apenas martelo e tratar todo problema como um prego.

## Capítulo 1: Trade-offs na arquitetura de sistemas de dados

Sistemas operacionas vs analiticos: no conceito do livro o sistema operacional é onde o engenheiro de backend trabalha e implementa as funções que irão de fato modificar os dados, inserir dados, apagar dados... O sistema analitico normalmente é utilizado por um grupo diferente de profissional, usualmente um analista de negócio e/ou um cientista de dados que normalmente desejam consumir os dados (read-only) montados previamente pelo sistema operacional no time de backend, seu objetivo é entender os dados que já existem no sistema.

No primeiro bloco do capitulo o foco principal do autor é colocar todo mundo no mesmo barco, ele traz diversos conceitos e técnicas utilizadas no mercado explicando de maneira muito simples e didática, termos que normalmente são explicados de forma complexa em diversos materiais são apresentados de forma simples e concisa, em poucas páginas é possível ter uma visão ampla de várias ferramentas e soluções para problemas comuns. 

Ainda não temos de fato um aprofundamento, mas sim comparativos e "quando usar o que" geral. O grande ponto é deixar claro como os dados são tratados, organizados e de onde eles surgem para que possam ser trabalhados. Já é perceptível o porque existem sub-grupos de profissionais dentro da área de dados, várias das camadas existentes desdes o sistema que gera o dado até a sua análise envolvem cada um suas técnicas e trade-offs. 

### Pontos de marcação no capítulo:

> O código da aplicação frequentemente é sem estado (stateless), ou seja, ao concluir o tratamento de uma solicitação HTTP, não mantém nenhuma informação sobre ela. Qualquer informação que precise persistir entre uma solicitação e outra deve ser armazenada no cliente ou na infraestrutura de dados do lado do servidor.

> Geralmente não é desejavel que analistas de negócios e cientistas de dados consultem diretamente os sistemas OLTP.

> Sistemas de uso geral conseguem lidar confortavelmente com pequenos volumes de dados, mas, à medida que a escala aumenta, tender a se tornar mais especializados.

> Ao deixar explicito quais dados derivam de quais outros, torna-se possível trazer clareza a uma arquitetura de sistema que facilmente se tornaria confusa.

## Glossário

Alguns termos aqui podem ter definições diferentes em outros contextos, as descrições listadas são com base no contexto de dados e cenários apresentados pelo livro.

sistema operacional: serviços de backend onde os dados são gerados e modificados. Normalmente gerenciado por engenheiros de backend. (OLTP)

sistema analitico: idealmente uma copia read-only dos dados para serviços de analise de dados consultarem. Normalmente gerenciado por analistas de negócio ou cientista de dados. (OLAP)

sistema de registro: é o banco de dados onde o dado foi criado originalmente, a fonte da verdade. O local onde caso algo de errado será consultado para validar a discrepancia. Normalmente os sistemas OLTP escrevem no sistema de registro.

sistema de dados derivados: normalmente consomem os dados do sistema de registro e criam informações derivadas do sistema original, conceitualmente eles podem ser apagados e recriados, pois usam o sistema de registro como fonte da informação.

serverless: é um servidor que "levanta" apenas para servir a sua demanda e depois desliga, diferente de um servidor tradicional que está sempre disponivel mesmo quando não é utilizado. Essa mesma solução as vezes pode ser chamada de Function-as-a-Service (FaaS), similar ao conceito de edge functions.

OLTP (online transaction processing): é o processo onde os dados são modificados atráves de entradas do usuários, as transações possuem ações vindas de "fora" que modificam os dados. O mais comum nesse tipo de operação é trabalhar com registros limitados e normalmente focados em um usuário ou grupo limitado de dados (point queries).

OLAP (online analytical processing): neste tipo de processo a ideia é trabalhar com análise de dados ao inves de modificar os dados em si, o foco aqui normalmente é cruzar informações e responder perguntas que cruzam diversos usuários/grupos, normalmente realizando cálculos para responder uma pergunta analítica.

Data warehouse: É basicamente um (ou vários) banco de dados separado onde os analistas podem realizar operações sem afetar o sistema OLTP e suas transações.

Data lake: É o dado já tratado e pronto para uso sem impor tipo de arquivo ou modelo de dados. São quaisquer dados uteis para analises obtidos pro ETL dos sistemas operacionais.

ETL (extract-transform-load): É o processo de extrair os dados de um banco de dados de sistema operacional para um sistema analitico, as vezes pode ser invertido ELT (extract-load-transform), o objetivo aqui é termos um data warehouse separado para consumo dos dados.

HTPA (Hybrid Transaction/Analytical Processing): Permitir OLTP e analise em um unico sistema, sem a necessidade de ETL

## Ferramentas

Lista de ferramentas mencionadas no livro

Bancos de dados: DuckDB

Visualização de dados: Tableau, Looker, Power BI

Real time analytics: Pinot, Druid, ClickHouse

ETL de APIs: Fivetran, Singer, Airbyte

Bibliotecas de análise de dados: Spark, Pandas, scikit-learn, R (linguagem)

Formatos de arquivo: Avro, Parquet

Machine learning: TFX, Kubeflow, MLflow

## Links

Manifesto DataOps: https://dataopsmanifesto.org/
