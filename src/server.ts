import fastify from 'fastify'
import { env } from './env'
import { usersRoutes } from './routes/users.routes'

const app = fastify()

app.register(usersRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
