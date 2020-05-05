exports.up = function (knex) {
  knex.schema.createTable("users", function (table) {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("userName").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {};
