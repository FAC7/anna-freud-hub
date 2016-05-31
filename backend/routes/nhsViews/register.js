require('env2')('config.env')
const Bcrypt = require('bcrypt')
const client = require('../../db/client.js')
const db = require('../../db/db_nhs.js')

exports.register = (server, options, next) => {

  const validateAdmin = (request, adminId, password, callback) => {
    //check adminId exists, return callback(null, false) if they dont
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
        const adminObj = Object.assign({}, request.payload, {
          eventsCreated: [],
          email: request.payload.adminId
        })

        request.cookieAuth.set({ details: { adminId: request.payload.adminId } })
        reply.redirect('/')
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'register user view'
}
