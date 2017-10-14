# weather-app

 Es una aplicacion de terminal que funciona pasando un argumento -address

 Ejemplo:
  - `$ node app.js -a='Guatemala'`

  ### Instalacion 

  weather-app requiere [Node.js](https://nodejs.org/) v6+ to run.

  Instala las depedendecias y corre la aplicación.

  ```
  $ cd weather-app
  $ npm install
  $ node app.js -a='<Direccion>'
  ```

  ### ¿Como usar?

  | Argumento |  Función |
| ------ | ------ |
| --address, -a | Es el argumento que reconoce que ingresas una direccion. |
| --help, -h | Te ayuda a ver las opciones de funcionalidad. |

Esta aplicacion utiliza el api de [geolocalizacion de google](https://developers.google.com/maps/).

Para devolver los valores del clima esta aplicacion usa el API de [Forecast.io](http://forecast.io/)

### ¿Como utilizar el api de Forecast.io ?

| KEYWORDS |  Descripción |
| ------ | ------ |
| darkSky.API_KEY | Al registrarse para uso del API, forecast te devuelve un API para uso personal. Eso significa el keyword en los archivos. |
| darkSky.API | El endpoint del API, donde se pueden hacer las consultas. |

Code with ♥ by [LoconLuis](https://twitter.com/loconluis)