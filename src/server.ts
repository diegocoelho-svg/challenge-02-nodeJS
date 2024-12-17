import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const user = await knex('users').where('name', 'Diego Doeh').select('*')

  return user
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
