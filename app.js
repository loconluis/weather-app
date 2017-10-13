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

console.log(argv.address)

const endPoint = 'https://maps.googleapis.com/maps/api/geocode/json?address='
let encodeAddress = encodeURIComponent(argv.address)

const apiURL = endPoint + encodeAddress
console.log(apiURL)

request({
  url: apiURL,
  json: true
}, (err, response, body) => {
  if (err) { }
  // console.log(JSON.stringify(body.geometry.location, undefined, 2))
  console.log(`Address: ${body.results[0].formatted_address}`)
  console.log(`Lat: ${body.results[0].geometry.location.lat}`)
  console.log(`Lng: ${body.results[0].geometry.location.lng}`)
})

// body.results[0].geometry.location.lat
// body.results[0].geometry.location.lng
