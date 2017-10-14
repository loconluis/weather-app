const yargs = require('yargs')
const axios = require('axios')

const config = require('./config')

const argv = yargs
  .option({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

// space

const encodeAddress = encodeURIComponent(argv.address)
const geoURL = config.geoAPI + encodeAddress

axios.get(geoURL)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.')
    }
    console.log(response.data.results[0].formatted_address)

    const lat = response.data.results[0].geometry.location.lat
    const lng = response.data.results[0].geometry.location.lng
    const weatherURL = `${config.darkSky.API}${config.darkSky.API_KEY}/${lat},${lng}`

    return axios.get(weatherURL) // returning a new promise
  }).then(response => {
    const summary = response.data.currently.summary
    const temperature = response.data.currently.temperature
    const apparentTemperature = response.data.currently.apparentTemperature
    console.log(`It's ${summary}\nwith ${temperature} F degrees.\nIt feels like ${apparentTemperature}`)
  }).catch(e => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to the server')
    } else {
      console.log(e.message)
    }
  })
