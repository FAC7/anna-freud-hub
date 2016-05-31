// const bcrypt = require('bcrypt')

const user = {
  username: 'ivan',
  password: 'slack'
}

exports.register = (server, options, next) => {

  server.auth.strategy('session', 'cookie', {
    password: process.env.COOKIE_PASSWORD,
    redirectTo: '/login',
    cookie: 'session',
    isSecure: false
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
        const username = request.payload.username
        const password = request.payload.password
        if (username === user.username && password === user.password) {
          request.cookieAuth.set({ details: { username: username } })
          reply.redirect('/')
        } else {
          reply('error')
        }
      }
    }
  }
 ])

  return next()
}

exports.register.attributes = {
  name: 'nhs login routes'
}
