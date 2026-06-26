/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('livros').del()
  await knex('livros').insert([
    { titulo: 'O Príncipe Cruel', autor: 'Holly Black' },
    { titulo: 'A Rainha Vermelha', autor: 'Victoria Aveyard' },
    { titulo: 'Shatter Me', autor: 'Tahereh Mafi' }
  ]);
};
