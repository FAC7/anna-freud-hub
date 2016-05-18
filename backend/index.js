require('env2')('./config.env')
const createServer = require('./server.js')
const createClient = require('./db/client.js')

// pass redis client into server
const client = createClient()
const server = createServer(client)

server.start((err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
})
