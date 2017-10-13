const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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
geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error)
  } else {
    console.log(results.address)
    // nesting functions
    weather.getWeather(results.lat, results.lng, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`It's ${data.caption}\nwith ${data.temperature} F degrees.\nIt feels like ${data.apparentTemperature}`)
      }
    })
  }
})

// body.status = devuelve si la consulta fue exitosa o fallida
// console.log(JSON.stringify(body.geometry.location, undefined, 2))
// body.results[0].geometry.location.lat
// body.results[0].geometry.location.lng
