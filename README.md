<p align="center">
<img src="./node.png" alt="drawing" width="150"/>
</p>

# Backend Masterclass com NODE e Knex.

## Database com postgresSQL

- sudo -u postgres psql => Loga no postgres
- CREATE DATABASE NOME_DO_DATABASE; => cria o DATABASE
- \c NOME_DO_DATABASE; => entra no DATABASE
- SELECT \* FROM users; => retorna o que tem na tabela users
- INSERT INTO projects (title, user_id) VALUES ('outro projeto', 6);

- 17 comandos praticos do [postgresSQL](https://www.postgresqltutorial.com/psql-commands/)

## NODE

- npm init -y => Inicia uma aquivo package.json.
- npm i nodemon -D => Adiciona o pacote nodemon como dependĂȘncia de desenvolvimento "-D".
- npm i knex pg express => Adiciona os pacotes knex, pg e express.

# knex

- npx knex init
- npx knex migrate:make create_table_users
- npx knex migrate:latest
- npx knex seed:make 001_users // cria uma seed
- npx knex seed:run // roda todas as seeds
- npx knex seed:run --specific nome_da_seed.js // roda uma seed especifica

[KNEX.JS](http://knexjs.org/#Migrations)

[Knex cheatsheet](https://devhints.io/knex)
