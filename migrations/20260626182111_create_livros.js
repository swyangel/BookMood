/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('livros', (table) => {
    table.increments('id').primary();
    table.string('titulo').notNullable();
    table.string('autor').notNullable();
    table.string('capa').nullable(); 
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('livros');
};