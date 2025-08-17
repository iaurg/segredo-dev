---
title: Como instalar Ruby e Rails no Ubuntu em 5 minutos
slug: como-instalar-ruby-e-rails-no-ubuntu
description: 'Um passo a passo rápido para instalar Ruby e Rails no Ubuntu através da linha de comando.'
date: '2025-08-05T10:55:50.000Z'
tags: ['rails', 'ruby', 'ubuntu']
image: ./como-instalar-ruby-e-rails.jpg
authors: ['iaurg']
---

Esses são os comandos necessários para você instalar o Ruby e em seguida o Rails em um sistema Ubuntu, eles foram testados na versão do Ubuntu 24.04 LTS (noble).

O passo a passo é o seguinte:
- 1. Instalar as [dependências necessárias do Ruby](https://github.com/rbenv/ruby-build/wiki#ubuntudebianmint)
- 2. Instalar o [Mise](https://mise.jdx.dev/), que é um gerenciador de versões de linguagens de programação
- 3. [Ativar o Mise no terminal](https://mise.jdx.dev/installing-mise.html#shells)
- 4. Instalar o Ruby globalmente na versão 3.x.x
- 5. Instalar o [Rails](https://guides.rubyonrails.org/install_ruby_on_rails.html#installing-rails)

```sh
# Comando documentado em https://github.com/rbenv/ruby-build/wiki#ubuntudebianmint
sudo apt update
sudo apt-get install build-essential autoconf libssl-dev libyaml-dev zlib1g-dev libffi-dev libgmp-dev rustc git

# From https://mise.jdx.dev/installing-mise.html#installation-methods
curl https://mise.run | sh

# Comando opcional, as vezes o mise não é instalado no PATH
echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc # Caso seja zsh mudar .bashrc para .zshrc

# Comando para reiniciar o terminal e aplicar as mudanças, você pode também fechar e abrir o terminal novamente
source ~/.bashrc # Caso seja zsh mudar .bashrc para .zshrc

# Comando documentado em https://mise.jdx.dev/lang/ruby.html#usage
mise use -g ruby@3

# Comando documentado em https://guides.rubyonrails.org/install_ruby_on_rails.html#installing-rails
gem install rails
```

Após executar esses comandos você terá o Ruby e o Rails instalados em seu sistema, você pode conferir se tudo foi instalado corretamente executando os seguintes comandos:

```sh
ruby -v # Deve retornar a versão do Ruby instalada
rails -v # Deve retornar a versão do Rails instalada
```

## Video tutorial de como instalar o Ruby e Rails no Ubuntu
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/ICxjgGjVigM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

Até mais!
