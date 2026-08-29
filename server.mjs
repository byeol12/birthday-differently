import { serve } from 'srvx'
import server from './dist/server/server.js'

serve({
  fetch: server.fetch,
  port: process.env.PORT || 3000,
})
