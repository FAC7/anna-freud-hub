var UI = {}

UI.inputs = [
  'title',
  'address',
  'postCode',
  'date',
  'time',
  'imageUrl'
]

UI.categories = [
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
  UI.inputs.forEach(input => {
    eventObject[input] = document.querySelector('[' + input + ']').value
  })

  eventObject.categories = UI.categories
    .filter((category) => document.querySelector('[' + category + ']').checked)
    .map((category) => category.replace('[', ''))
    .map((category) => category.replace(']', ''))

  fetch('/api/events/nhs/addEvent', {
    method: 'POST',
    body: JSON.stringify(eventObject)
  })
  .then(console.log, eventObject)
}

document.querySelector('[submitButton]').addEventListener('click', () => {
  UI.formSubmit()
})
