import { knex as setupKnex, Knex } from 'knex';
import { env } from './env'

export const config: Knex.Config = {
  client: 'oracledb',
  connection: {
    host: env.DATABASE_URL,
    database: env.DATABASE_NAME,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT)
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config);