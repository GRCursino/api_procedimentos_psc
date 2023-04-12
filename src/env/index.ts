import 'dotenv/config'
import { z } from 'zod';

// Schema varíaveis de ambiente

const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.coerce.number().default(1521),
  APPLICATION_PORT: z.coerce.number().default(3456)
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data;