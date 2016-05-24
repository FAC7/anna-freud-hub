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


  console.log(eventObject)
}

UI.formSubmit()
