---
title: Como a internet funciona
slug: como-a-internet-funciona
description: "A maioria de nós apenas usa a internet, sem entender exatamente como ela funciona. Neste post vamos ter uma ideia de como tudo se conecta e interage através desta rede que chamamos de internet."
date: "2022-11-07T10:55:41.000Z"
---

Neste artigo sobre a como a internet funciona:

- [Como a internet funciona vídeo introdutório](#como-a-internet-funciona-video)
- [Como os computadores se conectam](#como-os-computadores-se-conectam)
- [Clientes e Servers](#clients-e-servers)

A maioria de nós apenas usa a internet, sem entender exatamente como ela funciona.

Hoje vamos ter uma ideia de como tudo se conecta e interage através desta rede.

<h2 id="como-a-internet-funciona-video">Como a internet funciona em vídeo introdutório:</h2>

<iframe width="560" height="315"
src="https://www.youtube.com/embed/YSXdJCDc_fs"
frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

<h2 id="como-os-computadores-se-conectam">Como os computadores se conectam</h2>

Normalmente quando pensamos em internet nos vem uma ideia de nuvem ou algo intocável que flutua por ai, porém a visão de nuvem é apenas um termo de marketing, na verdade a internet funciona através de cabos, vários cabos, muitos cabos!

A função desses cabos é conectar computadores e transmitir informações para que eles possam se comunicar de forma ordenada, esses cabos cruzam oceanos, conectam países e são distribuidos por diversos provedores para que possam chegar até a sua casa.

Vamos usar como exemplo um e-mail, sempre que você envia um e-mail para algum contato essas informações vão percorrer um caminho muito similar ao seguinte:

Seu celular → roteador/modem da sua casa → Provedor de serviço de internet → Cabos → Encontra o servidor → Servidor responde → Retorna informação para seu celular ou encaminha para o destinatário.

Obviamente este é um caminho simplificado de como tudo isso acontece e essas operações possuem diversos intermediários e conceitos para que tudo possa funcionar.

Você deve estar se perguntando, ok, parece simples até aqui, mas como tanta informação trafega através desses cabos, como elas sabem onde chegar?

<h2 id="clients-e-servers">Clients e Servers</h2>

Na internet os computadores que provém informação são chamados de **servers** e os que consomem essas informações são os **clients.**

Certo, vamos lá, os **servers** possuem endereços únicos dentro desta rede chamados IP algo similar ao "CPF" deles para que você possa identificá-los, mas obviamente decorar esses números seria algo totalmente inviável e por isso existem os <a href="https://pt.wikipedia.org/wiki/Nome_de_dom%C3%ADnio" target="_blank">domain names</a> que servem justamente para identificar computadores nesta rede com um nome mais simples como google.com ou youtube.com

Se eu quero me comunicar com um **server** preciso saber o endereço dele, posso usar o IP ou domain name para isso, mas o que exatamente eu vou enviar para esse **server**? Pacotes!

Exatamente como correspondências (mail), ai que surgem os e-mails que seriam correspondências digitais!

O papel principal da internet é enviar e receber <a href="https://pt.wikipedia.org/wiki/Pacote" target="_blank">pacotes</a>, exatamente como um sistema de entregas, ela recebe um pacote, garante que ele está seguro e que chegará até o seu destinatário e envia este pacote. Estes pacotes terão todo o conteúdo que o server ou client precisam trocar e informações extras de identificação para organizar esse pacote durante o tráfego.

Porém este pacote não é encaminhado todo de uma vez, a forma mais tradicional é dividir este pacote em diversos pacotes menores e encaminhar através de vários caminhos diferentes para que caso alguns desses caminhos "falhe" você não perca toda a mensagem.

Com diversos pacotes e informações sendo trafegadas de acordo, entre vários clientes e servidores nós temos o que chamamos de internet, uma imensa rede de computadores conectados trocando informações.

Espero que possa ter ajudado você, até mais!
