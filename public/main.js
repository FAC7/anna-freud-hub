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
  // adds value of inputs to the eventObject
  UI.inputs.forEach(input => {
    eventObject[input] = document.querySelector('[' + input + ']').value
  })

  // adds the checked categories to the eventObject and formats them
  eventObject.categories = UI.categories
    .filter((category) => document.querySelector('[' + category + ']').checked)
    .map((category) => category.replace('/[ || ]/gi', '').replace('_', ' '))

  // sends the eventObject off to the server
  fetch('/api/events/nhs/addEvent', {
    method: 'POST',
    body: JSON.stringify(eventObject)
  })
  .then((reply) => console.log(reply))
  .then(() => fetch('/api/events'))
  .then((res) => res.json())
  .then((data) => console.log(data))
}

document.querySelector('[submitButton]').addEventListener('click', (e) => {
  e.preventDefault()
  UI.formSubmit()
})
