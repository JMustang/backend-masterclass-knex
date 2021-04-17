# Backend Masterclass com node e Knex.

## Database com postgresSQL

- sudo -u postgres psql // Loga no postgres
- CREATE DATABASE NOME_DO_DATABASE; // cria o DATABASE
- \c NOME_DO_DATABASE; // entra no DATABASE
- SELECT \* FROM users; // retorna o que tem na tabela users

## NODE

- npm init -y
- npm i nodemon -D
- npm i knex pg express

# knex

- npx knex init
- npx knex migrate:make create_table_users
- npx knex migrate:latest
- npx knex seed:make 001_users
- npx knex seed:run
