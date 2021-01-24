const fs = require('fs');
const debug = require('debug')('etl:data')

const { getPlaces, getPlacesFromCategory } = require('./mint-service-client')
const categories = require('../static/categories.json')

function load(filename, rawData) {
  const data = JSON.stringify(rawData);
  fs.writeFileSync(`./static/data/${filename}.json`, data);
}

async function saveHomepage() {
  const places = await getPlaces()

  load('homepage', places)
}

async function saveCategories() {
  const promises = Object.keys(categories).map(async category => {
    const profiles = await getPlacesFromCategory(category)

    load(category, profiles)
  })

  return Promise.all(promises)
}

function createDirectory() {
  const dir = './static/data'

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

async function main() {
  createDirectory()

  await saveHomepage()

  await saveCategories()
}


if (require.main === module) {
  main().then(() => {
    debug('data generated')
    process.exit(0);
  });
}
