import fastify from 'fastify';
import cors from '@fastify/cors'

import { env } from './env';
import { proceduresRoutes } from './routes/procedures';


const app = fastify();

app.register(cors, {
  origin: true,
  //origin: ['172.16.200.189'],
  methods: ['GET'],
  credentials: false
});

app.register(proceduresRoutes)

app.listen({
  port: env.APPLICATION_PORT
}).then(() => {
  console.log('🚀 API Procedimentos, Node server running!')
})


