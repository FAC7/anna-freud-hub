const Handlebars = require('handlebars')
module.exports = {
  engines: { html: Handlebars },
  relativeTo: __dirname,
  path: '../public/webViews',
  layout: 'default',
  layoutPath: '../public/webViews/layout',
  helpersPath: '../public/webViews/helpers',
  partialsPath: '../public/webViews/partials'
}
