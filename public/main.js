const UI = {}

const categoriesArray = [ '[cooking]', '[health]', '[wellness]', '[sports]' ]

UI.formSubmit = function () {

  const eventObject = {}
  eventObject.title = document.querySelector('[title]').value
  eventObject.address = document.querySelector('[address]').value
  eventObject.postCode = document.querySelector('[postCode]').value
  eventObject.date = document.querySelector('[date]').value
  eventObject.time = document.querySelector('[time]').value
  eventObject.imageUrl = document.querySelector('[imageUrl]').value
  eventObject.description = document.querySelector('[description]').value

  eventObject.categories = categoriesArray
                           .filter((category) => document.querySelector(category).checked)
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
