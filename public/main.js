var UI = {}

var categories = [
  'Fun_Activites',
  'Youth_Council',
  'Wellness',
  'Sports_Clubs',
  'Youth_Groups',
  'Physical_Health',
  'Mental_Health',
  'Volunteering',
  'Outdoors',
  'Cooking',
  'Cooking',
  'Art',
  'Educational'
]

UI.formSubmit = function () {

  var eventObject = {}
  categories.forEach(category => {
    eventObject[category] = document.querySelector('[' + category + ']').value
  })

  eventObject.categories = categories
    .filter((category) => document.querySelector('[' + category + ']').checked)
    .map((category) => category.replace('[', ''))
    .map((category) => category.replace(']', ''))

  fetch('/api/events/nhs/addEvent', {
    method: 'POST',
    body: JSON.stringify(eventObject)
  })
}

document.querySelector('[submitButton]').addEventListener('click', (e) => {
  UI.formSubmit()
})
