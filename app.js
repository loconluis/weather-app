const yargs = require('yargs')

const geocode = require('./geocode/geocode')

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

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error)
  } else {
    console.log(JSON.stringify(results, undefined, 2))
  }
})

// body.status = devuelve si la consulta fue exitosa o fallida
// console.log(JSON.stringify(body.geometry.location, undefined, 2))
// body.results[0].geometry.location.lat
// body.results[0].geometry.location.lng
