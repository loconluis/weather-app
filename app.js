const request = require('request')
const yargs = require('yargs')

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

const endPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address='
let encodeAddress = encodeURIComponent(argv.address)

const apiURL = endPoint + encodeAddress

request({
  url: apiURL,
  json: true
}, (err, response, body) => {
  if (err) {
    // si existe el error
    console.log('Unable to connect to the server')
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find that address.')
  } else if (body.status === 'OK') {
    console.log('Fetching...')
    console.log(`Address: ${body.results[0].formatted_address}`)
    console.log(`Lat: ${body.results[0].geometry.location.lat}`)
    console.log(`Lng: ${body.results[0].geometry.location.lng}`)
  }
})

// body.status = devuelve si la consulta fue exitosa o fallida
// console.log(JSON.stringify(body.geometry.location, undefined, 2))
// body.results[0].geometry.location.lat
// body.results[0].geometry.location.lng
