async function getDataFor(page = 'homepage') {
  let response = await this.fetch(`./data/${page}.json`)
  const places = await response.json()

  response = await this.fetch('./categories.json')
  const categories = await response.json()

  return {
    places,
    categories,
  }
}


export {
  getDataFor
}
