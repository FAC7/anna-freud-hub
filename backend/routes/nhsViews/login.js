// const bcrypt = require('bcrypt')

const user = {
  adminId: 'ivan',
  password: 'slack'
}

const bcrypt = require('bcrypt')

exports.register = (server, options, next) => {

  const client = server.app.client
  const nhs = server.app.nhs

  server.auth.strategy('nhs', 'cookie', {
    password: process.env.COOKIE_PASSWORD,
    redirectTo: '/login',
    cookie: 'session',
    isSecure: false,
    // validateFunc: (request, session, cb) => {
    //   if (user.adminId === 'ivan') {
    //     cb(null, true)
    //   } else {
    //     cb(null, false)
    //   }
    // }
  })

  server.route([ {
    path: '/login',
    method: 'GET',
    config: {
      description: 'nhs login view',
      handler: (request, reply) => {
        reply.view('login')
      }
    }
  },
  {
    path: '/login',
    method: 'POST',
    config: {
      description: 'submit login details',
      handler: (request, reply) => {
        const adminId = request.payload.adminId
        const password = request.payload.password
        nhs.getAdmin(client, adminId)
          .then((data) => {
            if (data === null) {
              reply('wrong username')
            } else {
              bcrypt.compare(password, data.password, (err, isValid) => {
                if (!isValid) {
                  reply('wrong password')
                } else {
                  request.cookieAuth.set({ details: { adminId: adminId } })
                  reply.redirect('/')
                }
              })
            }
          })
      }
    }
  }
 ])

  return next()
}

exports.register.attributes = {
  name: 'nhs login routes'
}
