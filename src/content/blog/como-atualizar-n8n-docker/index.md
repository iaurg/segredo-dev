---
title: Como atualizar n8n via Docker na Digital Ocean
slug: como-atualizar-n8n-via-docker-digital-ocean
description: 'Como atualizar o n8n instalado via marketplace (canny) no Digital Ocean.'
date: '2025-06-10T01:55:50.000Z'
tags: ['n8n', 'docker', 'digital ocean']
image: ./como-atualizar-n8n-docker.jpg
authors: ['iaurg']
---

Esse post é um passo a passo rápido para servir de guia futuro para mim e para quem mais precisar atualizar o n8n instalado via marketplace (canny) no Digital Ocean.

Aqui vamos assumir que você já tem o n8n instalado via [one-click app do Digital Ocean](https://marketplace.digitalocean.com/apps/n8n) distribuido pela automaze.me v1.67.1.

## Passo 1: Acessar o servidor via SSH

A forma mais simples de acessar o servidor via SSH no Digital Ocean é acessando seu droplet indo até o menu "Access" e clicando em "Launch Droplet Console". Isso abrirá um terminal no seu navegador logado como root.

Por padrão o terminal será aberto na home do usuário, o mesmo que `cd ~` no terminal.

## Passo 2: Acessar pasta do n8n

Para acessar a pasta do n8n, execute o seguinte comando:

```bash
cd /opt/n8n-docker-caddy
```

Essa é a pasta padrão que o app da Digital Ocean armazena os arquivos.

Caso não esteja nessa pasta você pode buscar o caminho correto com o comando:

```bash
find / -type d -name "n8n-docker-caddy" 2>/dev/null
```

Esse comando irá procurar por diretórios com o nome "n8n-docker-caddy" em todo o sistema, assumindo que n8n-docker-caddy é o nome da pasta, caso seja outro altere no comando.

## Passo 3: Ir até o diretório do docker-compose e baixar a última versão do n8n

```bash
# Ir até o diretório onde está o docker compose
cd /opt/n8n-docker-caddy

# Baixar a última versão do n8n
docker compose pull

# Parar e remover containers atuais
docker compose down

# Iniciar containers atualizados com a nova imagem
docker compose up -d
```

Após rodar o comando `docker compose down` o n8n ficará indisponível por alguns segundos, mas logo após o comando `docker compose up -d` ele voltará a funcionar com a nova versão.

## Passo 4: Verificar a versão do n8n

Para verificar se foi atualizado corretamente você pode acessar o n8n pelo navegador e ir até o menu lateral esquerdo, clicar em "Help" e depois em "About n8n", você verá a versão do n8n que está rodando.
