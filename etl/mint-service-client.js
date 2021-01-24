const fetch = require('node-fetch');

const config = require('./config')

async function getPlaces() {
  const result = await fetch(`${config.get('apiUrl')}/gmaps-place`)
  const places = await result.json()

  return places
}

async function getPlacesFromCategory(category) {
  const result = await fetch(`${config.get('apiUrl')}/gmaps-place/${category}`)
  const places = await result.json()

  return places
}

module.exports = {
  getPlaces,
  getPlacesFromCategory
}
