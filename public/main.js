var uI = {
  inputs: [
    'title',
    'address',
    'postCode',
    'date',
    'time',
    'imageUrl'
  ],
  categories: [
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
  ],
  errors: {
    title: 'please enter an event name',
    address: 'please enter an address',
    postCode: 'please enter a postcode',
    date: 'please enter a date for your event as DD-MM-YY',
    time: 'please enter time for your event as HH:MM',
    imageUrl: 'please enter an image url for your event',
    categories: 'please enter at least one category'
  },
  errorEl: document.querySelector('[error-message]')
}

uI.submitForm = function () {
  var validate = function (event) {
    var error = uI.errors
    if (event.title === '') return error.title
    if (event.address === '') return error.address
    if (event.postCode === '') return error.postCode
    if (event.date === '') return error.date
    if (event.time === '') return error.time
    if (event.imageUrl === '' || event.imageUrl.indexOf('www') === -1) return error.imageUrl
    if (event.categories.length === 0) return error.categories
    return 'VALID'
  }

  var getEventDetails = function () {
    var eventObject = {}
    uI.inputs.forEach(input => {
      eventObject[input] = document.querySelector('[' + input + ']').value
    })
    eventObject.categories = uI.categories
    .filter((category) => document.querySelector('[' + category + ']').checked)
    .map((category) => category
    .replace('/[ || ]/gi', '')
    .replace('_', ' '))
    return eventObject
  }

  var showError = function (formResult) {
    var err = uI.errorEl
    err.classList.remove('hidden')
    err.innerHTML = formResult
    setTimeout(() => err.classList.add('hidden'), 3500)
  }

  var showSuccess = function () {
    var success = document.querySelector('[success-message]')
    success.classList.remove('hidden')
    setTimeout(() => success.classList.add('hidden'), 3500)
  }

  var handleSubmit = function () {
    var eventObject = getEventDetails()
    var formResult = validate(eventObject)
    if (formResult === 'VALID') {

      fetch('/api/events/nhs/addEvent', {
        method: 'POST',
        body: JSON.stringify(eventObject)
      })
      .then(() => showSuccess())
      // .then(() => fetch('/api/events'))
      // .then((res) => res.json())
      // .then((data) => console.log(data))

    } else {
      showError(formResult)
    }
  }

  handleSubmit()
}

document.querySelector('[submitButton]').addEventListener('click', (e) => {
  e.preventDefault()
  uI.submitForm()
})
