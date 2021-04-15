# Backend Masterclass com node e Knex.

## Database com postgresSQL

CREATE DATABASE NOME_DO_DATABASE;

## NODE

npm init -y
npm i nodemon -D
npm i knex pg express

# knex

npx knex init
npx knex migrate:make create_table_users
npx knex migrate:latest
npx knex seed:make 001_users
