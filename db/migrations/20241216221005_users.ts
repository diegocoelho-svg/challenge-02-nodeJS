import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary() // define uma coluna id (uuid) e primary configura id como a chave primaria da primeira tabela, garantindo q seja unico.
    table.string('session_id').notNullable().unique() // cria coluna para armazenar identificação / valor obrigatório / único sem duplicata
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}
