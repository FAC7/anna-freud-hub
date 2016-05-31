require('env2')('config.env')
const Bcrypt = require('bcrypt')

exports.register = (server, options, next) => {

  const validateAdmin = (request, username, password, callback) => {
    //check username exists, return callback(null, false) if they dont
    const hashedPassword = process.env.ADMIN_PASSWORD
    Bcrypt.compare(password, hashedPassword, (err, isValid) => {
      callback(err, isValid, { details: 'credentials' })
    })
  }
  server.auth.strategy('admin', 'basic', { validateFunc: validateAdmin })

  server.route([ {
    path: '/register',
    method: 'GET',
    config: {
      description: 'register user view',
      auth: 'admin',
      handler: (request, reply) => {
        reply.view('register')
      }
    }
  }, {
    path: '/register',
    method: 'POST',
    config: {
      description: 'register a new nhs user',
      auth: 'admin',
      handler: (request, reply) => {
        request.cookieAuth.set({ details: { username: request.payload.username } })
        reply.redirect('/')
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'register user view'
}
