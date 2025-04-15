---
title: O que são migrations?
slug: o-que-sao-migrations
description: 'Entenda o que são migrations e como você pode melhorar o controle de seu banco de dados'
date: '2024-11-03T13:49:21.000Z'
tags: ['programação', 'conceito', 'backend']
authors: ['iaurg']
image: ./o-que-sao-migrations.jpg
---

Migrations são uma forma de criar uma "linha do tempo" de modificações feitas em um banco de dados, imagine e migration como se fossem commits em um repositório de código, cada migration tem sua marca no tempo e modifica a estrutura do banco de dados.

Cada ORM, framework ou ferramenta terá sua forma de trabalhar com migrations, mas o conceito é sempre o mesmo, manter um histórico de modificações que foram feitas no banco de dados. Toda essa estrutura do banco de dados normalmente é chamada de `schema` e pode ter um código similar a:

```rb
ActiveRecord::Schema[7.1].define(version: 2024_11_03_020656) do
  create_table "friends", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "twitter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_friends_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
```

Veja que é o banco de dados mapeado com toda estrutura de tabelas e campos.

E as migrations terão um código similar a:

```rb
class CreateFriends < ActiveRecord::Migration[7.1]
  def change
    create_table :friends do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :twitter

      t.timestamps
    end
  end
end
```

E os arquivos de migration são criados automaticamente seguindo um padrão de nomenclatura, por exemplo, `20241102030321_create_friends.rb`. Marcando quando no tempo a migration foi criada "20241102030321" e o que foi feito "create_friends". Essa estrutura de arquivos garante que as migrations criem ou alterem a estrutura do banco de dados na ordem correta, da mais antiga para a mais nova.

Migrations normalmente são criadas em banco de dados relacionais, pois normalmente para inserir uma informação em um banco de dados relacional você precisa de uma estrutura de campos e tabelas previamente criada, eu só consigo inserir um novo "endereço" se eu tiver uma tabela no banco de dados "endereço" e com os campos que forem necessários, faltou um campo? Crio uma migration para adicionar esse campo.

## Mas qual problema a migration resolve?

Imagine que você iniciou o desenvolvimento de um sistema novo, você começa a criar seu banco de dados `CREATE TABLE posts` e tudo mais, mas você não está fazendo esse sistema sozinho, existe um time trabalhando com você, e cada um tem sua cópia do banco de dados, como você garante que todos estão com a mesma estrutura de banco de dados?

A única forma seria você anotando cada alteração que você faz no banco de dados e seu time fazendo o mesmo enviando entre vocês essas alterações, para que possam manter a mesma estrutura, mas isso é muito trabalhoso e propenso a erros, e é aí que entra a migration, você cria uma migration para cada alteração que você faz no banco de dados, e seu time só precisa rodar as migrations para ter a mesma estrutura que você.

Além disso, caso você precisasse replicar essa estrutura de banco de dados em outro ambiente, como um ambiente de produção por exemplo, você precisaria manualmente rodar todos os comandos de estrutura novamente, cada `CREATE TABLE`, `ALTER TABLE`, `ADD COLUMN`, etc. As migrations resolvem esse problema, você só precisaria rodar as migrations e a estrutura do banco de dados seria replicada para você.

## Conclusão

Então para garantir que você não terá problemas em manter estruturas de banco de dados em sincronia, utilize migrations em seus projetos para que ganhe um controle maior do seu banco de dados. Imagine um projeto sem git, é o mesmo que um projeto sem migrations, você não terá controle do que foi feito e quando foi feito, e isso pode te trazer muitos problemas no futuro.

Referências:

- [Active Record Migrations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_migrations.html)
- [Rails Guide Migrations](https://guides.rubyonrails.org/v3.2/migrations.html)
- [Migrations - Laravel - The PHP Framework For Web Artisans](https://laravel.com/docs/11.x/migrations)
- [Por que as Migrations existem? - Curso.dev](https://curso.dev/web/porque-migrations-existem)
