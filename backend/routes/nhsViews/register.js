require('env2')('config.env')
const Bcrypt = require('bcrypt')

exports.register = (server, options, next) => {

  const validateAdmin = (request, adminId, password, callback) => {
    //check adminId exists, return callback(null, false) if they dont
    const hashedPassword = process.env.ADMIN_PASSWORD
    Bcrypt.compare(password, hashedPassword, (err, isValid) => {
      callback(err, isValid, { adminId: adminId })
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
        const password = Bcrypt.hashSync(request.payload.password, 6)
        const adminObj = Object.assign({}, request.payload, {
          eventsCreated: [],
          email: request.payload.adminId,
          password: password
        })
        const client = server.app.client
        const nhs = server.app.nhs

        nhs.addAdmin(client, adminObj)
          .then((res) => {
            console.log(res, 'redis response')
            request.cookieAuth.set({ details: { adminId: request.payload.adminId } })
            reply.redirect('/')
          })
          .catch((err) => {
            reply(err)
          })
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'register user view'
}
