/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('biblioteca', (table) => {
    table.increments('id').primary();
    table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('livroId').unsigned(); 
    table.string('status').notNullable(); 
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('biblioteca');
};