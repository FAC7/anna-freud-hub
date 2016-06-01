const Handlebars = require('handlebars')
module.exports = {
  engines: { html: Handlebars },
  relativeTo: __dirname,
  path: '../public/webviews',
  layout: 'default',
  layoutPath: '../public/webviews/layout',
  helpersPath: '../public/webviews/helpers',
  partialsPath: '../public/webviews/partials'
}
