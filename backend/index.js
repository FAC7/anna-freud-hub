const server = require('./server.js')

server.start((err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log('server listening on port: ' + server.info.port)
  }
})

// const table = server.table()
// const paths = table.map(item => item.table.map(i => ({ path: i.path, method: i.method })))
// console.log(paths)
