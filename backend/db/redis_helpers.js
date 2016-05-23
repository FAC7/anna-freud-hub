const helpers = {} = module.exports

const removeArrayItem = (key, data, index) => {
  const updatedArr = {}
  updatedArr[key] = data[key]
  .slice(0, index)
  .concat(data[key].slice(index + 1))
  return Object.assign({}, data, updatedArr)
}

const addArrayItem = (key, data, newItem) => {
  const updateArr = {}
  updateArr[key] = data[key].concat([ newItem ])
  return Object.assign({}, data, updateArr)
}

// returns a fresh copy of data object with parsed array keys
helpers.parseArrayKeys = (keys, data) => {
  const formattedArrays = {}
  keys.forEach(key => {formattedArrays[key] = JSON.parse(data[key])})
  return Object.assign({}, data, formattedArrays)
}

// returns a fresh copy of data object with updated array value
helpers.updateArrayKey = (key, id, data) => {
  const i = data[key].indexOf(id)
  return i > -1 ? removeArrayItem(key, data, i) : addArrayItem(key, data, id)
}

// updates the array of all eventIds
helpers.updateEventsList = (client, events, id) => {
  return events.indexOf(id) > - 1 ?
    'OK' :
    client.LPUSHAsync('eventsList', id)
}
