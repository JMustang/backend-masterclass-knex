// Update with your config settings.
// configuracoes do knex
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "936893",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
