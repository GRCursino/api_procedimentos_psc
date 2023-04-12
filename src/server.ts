import fastify from 'fastify';
import { env } from './env';
import { proceduresRoutes } from './routes/procedures';

const app = fastify();

app.register(proceduresRoutes)

app.listen({
  port: env.APPLICATION_PORT
}).then(() => {
  console.log('Node server running!')
})
