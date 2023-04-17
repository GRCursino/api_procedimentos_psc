import fastify from 'fastify';
import cors from '@fastify/cors'

import { env } from './env';
import { proceduresRoutes } from './routes/procedures';


const app = fastify();

app.register(cors, {
  origin: '*',
  methods: ['GET'],
  credentials: false
});

app.register(proceduresRoutes)

app.listen({
  port: env.APPLICATION_PORT
}).then(() => {
  console.log('Node server running!')
})


