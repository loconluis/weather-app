const request = require('request')

const config = require('../config')

const getWeather = (lat, lng, callback) => {
  const requestURL = `${config.darkSky.API}${config.darkSky.API_KEY}/${lat},${lng}`

  request({
    url: requestURL,
    json: true
  }, (err, response, body) => {
    if (err) {
      const errmsg = 'Unable to connect to Forecast.io server'
      callback(errmsg)
    } else if (body.code === 400) {
      callback(body.error)
    } else if (body) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        caption: body.currently.summary
      })
    }
  })
}

module.exports = { getWeather }
