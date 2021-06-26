---
title: Introdução Web Hacking
slug: introducao-web-hacking
description: "Conheça as principais vulnerabilidades que podem ser exploradas em aplicações. Segurança nunca é demais."
date: "2021-01-27T22:10:02.000Z"
image:
  feature: /images/posts/thumbs/introducao-web-hacking.jpg
---

![Introdução Web Hacking](/images/posts/thumbs/introducao-web-hacking.jpg)

Este post é um resumo de minha leitura do livro [Web Hacking 101](https://www.hackerone.com/blog/Hack-Learn-Earn-with-a-Free-E-Book) do [Peter Yaworksi](https://www.torontowebsitedeveloper.com/) onde a ideia do livro é introduzir os principais tipos de falhas de segurança que normalmente são exploradas em programas de bug bounty por [Hackers Éticos](https://en.wikipedia.org/wiki/White_hat_(computer_security)). Aqui trago as seções sobre tipos de vulnerabilidades onde cada uma é apresentada de forma rápida.

Cada tipo de vulnerabilidade possui muito conteúdo, exemplo, passo-a-passo que pode ser encontrado em diversos sites, a ideia aqui é ter um acesso ao "o que existe de vulnerabilidade" como uma introdução.

## Tipos de Vulnerabilidades

- [Open Redirect Vulnerabilities](#open-redirect-vulnerabilities)
- [HTTP Parameter Pollution](#http-parameter-pollution)
- [Cross Site Request Forgery (CSRF)](#cross-site-request-forgery-csrf-)
- [HTML Injection](#html-injection)
- [CRLF Injection](#crlf-injection)
- [Cross-Site Scripting](#cross-site-scripting)
- [Template Injection](#template-injection)
- [SQL Injection](#sql-injection)
- [Server Side Request Forgery (SSRF)](#server-side-request-forgery-ssrf-)
- [XML External Entity Vulnerability](#xml-external-entity-vulnerability)
- [Remote Code Execution](#remote-code-execution)
- [Sub Domain Takeover](#sub-domain-takeover)
- [Race Conditions](#race-conditions)
- [Insecure Direct Object References (IDOR)](#insecure-direct-object-references-idor-)
- [Application Logic Vulnerabilities](#application-logic-vulnerabilities)

<h3 id="open-redirect-vulnerabilities">Open Redirect Vulnerabilities</h3>

Alguns sites utilizam redirecionamento através da url para encaminhar o usuário à algum lugar, por exemplo encaminhar o usuário para uma página após o login. É possível modificar esses valores e verificar se o servidor faz algum tratamento antes de executar esta ação, caso não, esses valores podem ser alterados e com isso enviar o usuário para qualquer página/url sem que o usuário perceba.

Os parâmetros de redirecionamento nem sempre terão um nome obvio como ?redirect=, então vale tentar. Caso o parâmetro encaminhe para uma url interna, tente utilizar caracteres especiais como "," ou "@" para ver o que retorna.
Quando estiver buscando por vulnerabilidades sempre busque por serviços de terceiros que um site possa estar utilizando, eles podem criar novos vetores de invasão.

Este tipo de vulnerabilidade acontece por causa do excesso de confiança, o usuário acessa uma url que ele acredita ser confiável e é redirecionado para uma página maliciosa.

> Aprenda a invadir, invadindo.

<h3 id="http-parameter-pollution">HTTP Parameter Pollution</h3>

Essa invasão funciona manipulando os parâmetros http que são enviados ou recebidos pelo site que podem realizar alterações tanto no back como no front. 

Neste tipo de ataque você não sabe como o código é processado no servidor, você apenas solicita uma informação e recebe uma resposta, o HPP consiste em enviar uma informação inesperada e receber uma resposta inesperada, é preciso trabalhar em cima dessa "caixa preta" para receber e testar o que o servidor está executando.

Muitas aplicações ficam vulneráveis apenas com poluição de HTTP, sempre esteja atento a como isto é utilizado.

Normalmente quando um site está vulnerável com HPP provavelmente terão várias rotas com o mesmo problema. HPP é muito "tentativa e erro" observando o que o servidor faz com seu código.

<h3 id="cross-site-request-forgery-csrf-">Cross Site Request Forgery (CSRF)</h3>

CSRF é a interceptação de requisições através de outros sites, você é capaz de fazer uma requisição utilizando os cookies ou sessões guardadas no browser e utilizar para enviar requisições através de outros sites.

Requisições GET nunca podem realizar alterações/atualizações no backend, caso alterem é uma possível ameaça de CSRF.

Para fazer CSRF com POST você precisa de mais configurações e passar alguns headers para conseguir acesso, as vezes o CORS pode barrar, mas existem formas de passar por ele, como por exemplo alterando content-types de dados que são enviados ou trocando o tipo da requisição que é feita, tudo depende de como o alvo está configurado. 

Outro exemplo é digamos que um site verifique se a url de origem inicia com www.site.com, esta regra pode ser burlada utilizando subdominios "wildcard", por exemplo utilizando um subdominio www.site.com.attacker.com como origin e fazendo um redirect.

Por isso depende muito de cada aplicação e como as barreiras estão configuradas.

Se um site estiver usando token CSRF tente removê-lo ou alterar para ver se o servidor está validando este dado.

[Um exemplo de invasão](https://www.corben.io/tricky-CORS/) passando pelo CORS no Yahoo.

<h3 id="html-injection">HTML Injection</h3>

É uma forma de invasão onde você pode manipular a tratativa do site em relação ao HTML recebido fazendo com que sejam inseridos elementos HTML manipulados dentro do site.

Existem 2 tipos de HTML Injection:

HTML Injection Stored: quando o servidor salva as informações do HTML e sempre retorna para o browser as alterações injetadas.

HTML Injection Reflected: que aparece apenas uma vez a alteração para o usuário final.

<h3 id="crlf-injection">CRLF Injection</h3>

%0d%0a (quebra linha e retorna) este comando alerta a requisição para pular uma linha (terminar linha) e injetar o próximo conteúdo em um header dentro da requisição. Pode ser utilizado para enviar requisições GET por exemplo e "sequestrar" os tokens que o usuário está utilizando sem que ele perceba. É um ataque do tipo "injeção" onde dados são enviados para o servidor e alteram de alguma forma o comportamento esperado de retorno ou execução.

Preste atenção em sites que aceitam seu input como parte da requisição e retornam dados baseados nisso, particularmente se definirem cookies. Se for feito por uma requisição GET será necessário menos iteração da vítmia no ataque.

Sempre verifique como encoded characters podem ser utilizados principalmente em requisições, encontre outras formas como %250D ou caracteres de 3 bytes para enganar alguns validadores, pense fora do comum.

> Não fique subestimado por empresas grandes ou marcas conhecidas, eles também podem falhar.

<h3 id="cross-site-scripting">Cross-Site Scripting</h3>

XSS ocorre quando sites executam caracteres especiais sem sanitiza-los, o que faz o browser executar códigos JavaScript que não deveriam ser executados. Os caracteres normalmente incluem ("), (') e (<>). Esses são caracteres especiais pois são utilizados no html para indicar inicio e fim de instruções. Por exemplo, caso um site não sanitize esse tipo de caracter você é capaz de enviar um script via input e fazer com que o site responda com um alert informando algo.

Nem sempre é possivel fazer algo com XSS, é necessário validar alguns outros fatores antes de ser considerado uma vulnerabilidade útil. Por exemplo um site que não utiliza a flag httpOnly em cookies sensíveis pode ser bem mais explorado do que um site que utiliza. Outro fator a se considerar em XSS é a proteção SOP (Same Origin Policy) dos navegadores que impossibilita um site trafegar requisições de um site para outro (origens diferentes) sem as devidas permissões.

Uma forma de validar um XSS é tentando executar o comando alert(document.domain) para confirmar a origem de onde está sendo executado o comando.

Caso você não tenha acesso ao envio de informações de script via submit você pode tentar a técnica de aspas em value de input por exemplo, digamos que um input seja `<input type="text" name="username" value="hacker">` você pode enviar o valor de `hacker" onfocus=alert(document.cookie) autofocus "` isso irá "fechar" seu value de hacker e injetar um script com autofocus (o auto focus é uma instrução que informa o navegador a focar este input e executar o código).

- [XSS Cheatsheet bypass](https://github.com/masatokinugawa/filterbypass/wiki/Browser's-XSS-Filter-Bypass-Cheat-Sheet)
- [The misunderstood X-XSS-Protection](https://blog.innerht.ml/the-misunderstood-x-xss-protection/)

No XSS também existe a opção reflected e stored, onde reflected é quando o XSS é enviado uma vez porém não fica armazenado e o stored é enviado e o servidor interpreta armazenando a informação e retornando para outras requisições.

XSS possui três sub tipos: DOM Based, Blind e Self.

DOM Based: Utiliza códigos do site para executar JavaScript não autorizado, encontrando alguma "porta de entrada" através de alguma declaração no DOM e injetando a partir dela. Algo como se aproveitar de uma variável ou script que leia informação sem sanitizar.

Blind: É um tipo de stored XSS onde o código será executado por outro usuário em outro local do site. Digamos que em uma rede social você injete o XSS em seu nome e sobrenome, ao ser listado no site nada acontece porque está sanitizado, porém quando o administrador abrir o painel pode haver uma brecha e você "entra" por outro local.

Self: É o mais "tranquilo" dos XSS, ele só é executado pelo usuário (self) e não pode ser replicado, normalmente não é uma ameaça, mas pode ser uma pista para algo a mais. Ele precisa ser enviado pelo próprio usuário para surtir algum efeito.

Quando estiver procurando por XSS lembre-se de testar todas as opções de campo input possíveis, não apenas o value recebido. De fato, sempre que encontrar alguma validação sendo feita em tempo real no navegador pode ser um sinal de xss, explore para ver o que encontra. Desenvolvedores podem assumir que as validações feitas por JS no navegador não precisam ser revalidadas no servidor.

> Como um hacker tente pensar de forma que o desenvolvedor não tenha pensado, por exemplo, o que acontece se passar dois src para uma tag image? Como isso será renderizado?

<h3 id="template-injection">Template Injection</h3>

Template engines são códigos usados para gerar conteúdo dinâmico dentro de uma página, site, e-mail ou qualquer coisa que seja gerada dinamicamente. Esse template possui alguns "espaços" que receberão um conteúdo futuro que será renderizado neste local. Assim a lógica de apresentação fica separada da lógica de aplicação.

Um exemplo de template é uma página de usuário onde é sempre utilizado o mesmo "modelo" e as informações são dispostas dentro da estrutura em seus locais especificos, isso auxilia na criação de estruturas e sistemas fazendo com que menos arquivos sejam criados para gerenciar as telas.

Existem dois tipos de template injection, client side e server side. Ambos acontecem quando as engines renderizam inputs do usuário sem sanitizar de forma correta. Algumas vezes template injection pode evoluir para remote code execution.

**Server Side Template Injections (SSTI):** Quando as injeções ocorrem no lado do servidor, normalmente templates são renderizados por alguma linguagem de programação back-end como PHP, Ruby, Python... Para identificar esta vulnerabilidade primeiro você precisa identificar qual linguagem ou framework o back-end está utilizando e então pode preencher algum campo de usuário com uma expressão da linguagem utilizada por exemplo ({{7*7}}) se o template renderizar 49 o código foi executado no servidor e retornado para você no template.

**Client Side Template Injections (CSTI):** CSTI ocorrem quando ferramentas que geram template no lado do cliente como Angular e React, permite a injeção de código, normalmente podem ser uma porta para o XSS, apesar de terem vários padrões de segurança pré-configurados que previnem injeções de códigos existem alguns "bypass" conhecidos e que podem ser explorados.

> Sempre que estiver procurando uma vulnerabilidade tente entender e conhecer as tecnologias que a aplicação utiliza, isso lhe dará pistas para encontrar novas formas de invadir e encontrar coisas interessantes.

<h3 id="sql-injection">SQL Injection</h3>

Essa falha ocorre quando o site que hospeda o banco de dados permite que o usuário faça solicitações com query "não esperadas" e obtenha retornos de informações que não deveriam ser retornadas para o ambiente público. Normalmente esses ataques são muitos bem pagos pois permitem que o atacante escale e obtenha informações para manipular ou extrair dados do sistema e até mesmo tornar-se administrador.

Sempre investigue e altere parâmetros de url dos sites para entender como eles estão sendo interpretados. Procure formas de passar dados para os sites de formas que não são esperadas para que você possa analisar como os retornos são computados.

<h3 id="server-side-request-forgery-ssrf-">Server Side Request Forgery (SSRF)</h3>

Neste tipo de invasão o atacante é capaz de executar requisições direto pelo servidor. É similar ao CSRF com uma diferença, o alvo aqui é o site em si ao invés de se aproveitar do usuário.

Dependendo de como o servidor está organizado, com uma vulnerabilidade SSRF o atacante pode ser capaz de se conectar com redes internas ou extenas. Os limites das requisições do servidor determinarão o que pode ser feito em um SSRF.

Por exemplo, normalmente bancos de dados são configurados em servidores locais sem acesso a internet, liberando o acesso apenas para servidores especificos que no caso seria o servidor do site. Se você conseguir acessar o servidor do site, provalmente conseguirá escalar até o banco de dados, se este estiver protegido você ainda pode tentar ataques de redirecionamento ou passar por blacklists.

Depois de confirmar que está com o SSRF você pode testar se o servidor aceita requisições GET ou POST, normalmente requisições POST são mais interessantes pois podem manipular dados, GET em geral apenas extrai dados.

Após confirmar que tem os acessos e os métodos de requisição, você deve testar se consegue ler as respostas dessas requisições. Caso elas estejam bloqueadas podem ser usadas algumas técnicas como timing e DNS para entender o servidor.

Ao tentar invadir usando SSRF tente um port scanning nas portas 22 (SSH), 80 (HTTP), 443 (HTTPS), 8008 (Alternate HTTP), e 8443 (Alternate HTTPS) para confirmar os retornos de cada uma.

Se tiver acesso ao DNS você pode controlar as requisições e adicionar um subdominio seu para receptar as informações.

<h3 id="xml-external-entity-vulnerability">XML External Entity Vulnerability</h3>

Esta falha explora a vulnerabilidade de como uma aplicação faz o parse de um XML, como a aplicação processa os dados inclusos nos campos.

Manipulando as entidades de um XML se o servidor permitir, você é capaz de parsear os valores de pastas ou arquivos internos do servidor e retornar para você ou enviar para um servidor externo esses valores.

Arquivos .docx, .xlsx, .pptx... são XML também, preste atenção em servidores que aceitam esses tipos de arquivo como upload.

> Sempre analise sites que permitem uploads de arquivos

<h3 id="remote-code-execution">Remote Code Execution</h3>

Injeção de código que é interpretado e executado por uma aplicação. Normalmente permitido por aplicações que não fazem nenhum tipo de sanitização ou validação em inputs.

#### Memory

**Buffer Overflow:** É quando o programa escreve além do limite de memória disponível, isso abre uma brecha para o invasor injetar algum código através do overflow e fazer com que o programa retorne algo inesperado.

**Read out of Bounds:** Quando você é capaz de ler mais itens na memória do que o esperado. Essa falha é onde você solicita um valor do ponteiro X porém o programa retorna para você muito mais do que o esperado. Exemplo de falha [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed).

**Memory Corruption:** Este tipo de falha induz o código a performar uma ação fora do esperado expondo valores da memória que não deveriam ser retornados.

<h3 id="sub-domain-takeover">Sub Domain Takeover</h3>

É basicamente você se apropriar de um subdominio. Um site cria algum subdominio porém nunca aponta ele para algum lugar ou aponta para um serviço que permite a criação de dominios personalizados, deixando vulverável para que outra pessoa possa fazer isso.

Exemplo:
1. example.com se inscreve no Heroku

2. example.com cria uma entrada DNS apontandosubdominio.example.com para unicorn457.heroku.com

3. example.com nunca reivindica unicorn457.heroku.com

4. Uma pessoa mal-intencionada reivindica unicorn457.heroku.com e replica example.com

5. Todo o tráfego para subdomain.example.com é direcionado a um site malicioso que se parece com example.com

<h3 id="race-conditions">Race Conditions</h3>

Quando dois processos ocorrerem em paralelo executando uma mesma ação, resultando em uma duplicação de requisições ou resultados. Sempre que existe consultas, lógicas de códigos ou atualizações em banco de dados é uma possibilidade de se aproveitar de uma race condition, essas operações possuem um delay e dependendo de como forem implementadas podem ser burladas.

<h3 id="insecure-direct-object-references-idor-">Insecure Direct Object References (IDOR)</h3>

Esse tipo de falha ocorre quando um usuário pode acessar algum valor ou objeto que não deveria ser acessível para ele, por exemplo um usuário ao logar em um site é direcionado para example.com/user=123, se ele modificar o parametro para example.com/user=321 e ele conseguir acessar as informações deste outro usuário o site está vulnerável por um bug IDOR.

Encontrar falhas IDOR requerem tanto habilidade quanto observação, ao analisar requisições procure por valores que parecem não encriptados e estejam sendo utilizados como alguma forma de identificador como admin_id, user_id e afins.

> Seja criativo quando estiver hackeando, pense fora da caixa.

#### OAuth

OAuth é uma tecnologia que permite o acesso a API's fazendo validações via parâmetros e garantindo acesso a informações. Normalmente utilizado para fazer login em sites usando aplicativos de terceiros como Facebook, Twitter, Google... 

Esta validação possui vários passos durante seu processo o que abre uma brecha para ser explorada, por exemplo alterando o tipo de informação que é requisitada na url para que o server da aplicação responda de forma diferente ou refletindo de alguma forma o redirecionamento do usuário enviando as informações de retorno para um servidor malicioso.

OAuth pode ser complicado de entender no começo devido ao número de processos que ocorrem durante a validação, mas após entender todo o fluxo existem muitas possibilidades de invasão. Procure por exemplos criativos de invasões se aproveitando de OAuth para conhecer diversas abordagens.

> Um bom hacking é uma combinação de observação e habilidades.

<h3 id="application-logic-vulnerabilities">Application Logic Vulnerabilities</h3>

Este tipo de vulnerabilidade é diferente das demais vistas anteriormente, itens como XSS, HTML Injection... envolvem algum tipo de envio ou manipulação de informações, application logic vulnerabilites foca em manipular cenários e procurar bugs na aplicação se aproveitando do código da aplicação e de decisões do desenvolvedor.

Quando estiver procurando por vulnerabilidades na aplicação tente encontrar todas as tecnologias e ferramentas que seu alvo possa estar utilizando. Cada uma delas pode ser um vetor para escalar seu acesso e encontrar falhas. Familiarize-se com tecnologias mais usadas como AWS S3, Zendesk, Rails, etc.

> Pessoas sempre cometem erros, por melhores que elas sejam.
