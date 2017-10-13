const request = require('request')

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
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
