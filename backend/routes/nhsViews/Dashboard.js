module.exports = {
  path: '/',
  method: 'GET',
  config: {
    auth: 'nhs',
    handler: (request, reply) => {
      const categories = [
        'Fun Activites',
        'Youth Council',
        'Wellness',
        'Sports Clubs',
        'Youth Groups',
        'Physical Health',
        'Mental Health',
        'Volunteering',
        'Outdoors',
        'Cooking',
        'Cooking',
        'Art',
        'Educational'
      ]
      reply.view('addEvent', { categories: categories })
    }
  }
}
