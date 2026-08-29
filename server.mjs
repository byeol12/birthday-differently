import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { serve } from 'srvx'
import { serveStatic } from 'srvx/static'
import server from './dist/server/server.js'

const clientDir = join(dirname(fileURLToPath(import.meta.url)), 'dist/client')

serve({
  fetch: server.fetch,
  middleware: [serveStatic({ dir: clientDir })],
  port: process.env.PORT || 3000,
})
