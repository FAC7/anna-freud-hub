const Handlebars = require('handlebars')
module.exports = {
  engines: { html: Handlebars },
  relativeTo: __dirname,
  path: '../webViews',
  layout: 'default',
  layoutPath: '../webViews/layout',
  helpersPath: '../webViews/helpers',
  partialsPath: '../webViews/partials'
}
