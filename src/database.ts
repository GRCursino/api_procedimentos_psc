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
  acquireConnectionTimeout: 3600000,
  pool: {
    max: 50,
    min: 2,
    // acquireTimeout: 60 * 1000,
    // createTimeoutMillis: 30000,
    // acquireTimeoutMillis: 30000,
    // idleTimeoutMillis: 30000,
    // reapIntervalMillis: 1000,
    // createRetryIntervalMillis: 100,
    propagateCreateError: false // <- default is true, set to false
  }
}

export const knex = setupKnex(config);