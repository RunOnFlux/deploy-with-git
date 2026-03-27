/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum.optional(['development', 'production', 'test'] as const),
  PORT: Env.schema.number.optional(),
  APP_KEY: Env.schema.string.optional(),
  HOST: Env.schema.string.optional({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum.optional(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']),
})
