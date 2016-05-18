module.exports = {
  path: '/{params*}',
  method: 'GET',
  handler: {
    directory: { path: './public' }
  }
}
