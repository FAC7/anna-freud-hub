require('env2')('config.env')
const Bcrypt = require('bcrypt')
const Joi = require('joi')

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
            request.cookieAuth.set({ details: { adminId: request.payload.adminId } })
            reply.redirect('/')
          })
          .catch(reply)
      },
      validate: {
        payload: {
          // Nelft.nhs.uk, Walthamforest.gov.uk or Waltham.sch.uk
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
          adminId: Joi.string().email()
                      .regex(/@nelft\.nhs\.uk|walthamforest\.gov\.uk|waltham\.sch\.uk/i)
                      .required(),
          password: Joi.string().min(6).required()
        },
        failAction: (request, reply) => {
          reply.view('register', {
            error: 'please enter valid nhs email address, and a password of min length 6'
          })
        }
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'register user view'
}
