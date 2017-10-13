const request = require('request')

const config = require('../config')

let geocodeAddress = (address, callback) => {
  const encodeAddress = encodeURIComponent(address)
  const apiURL = config.geoAPI + encodeAddress

  request({
    url: apiURL,
    json: true
  }, (err, response, body) => {
    if (err) {
      // si existe el error
      const errmsg = 'Unable to connect to the server'
      callback(errmsg)
      return 'ERROR2CONNECT'
    } else if (body.status === 'ZERO_RESULTS') {
      const errmsg = 'Unable to find that address.'
      callback(errmsg)
      return body.status
    } else if (body.status === 'OK') {
      callback(null, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports = { geocodeAddress }

// porque use una variable para manejar el error en los callbacks
// y es porque standard lint no permite los errores literales en callbacks
