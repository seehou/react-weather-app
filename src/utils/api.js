import axios from 'axios'


const apiBaseUrl = 'http://api.openweathermap.org/data/2.5/'
const apiKey = 'e5d5891116f7559f4c209b27403574c8'

const fetchCityWeather = function (city) {
  const apiUri = `${apiBaseUrl}/weather?q=${city}&type=accurate&APPID=${apiKey}`
  const uri = window.encodeURI(apiUri)

  return axios.get(uri)
    .then((res) => {
      return res.data
    })
}

const fetchCityForecast = function(city) {
  const apiUri = `${apiBaseUrl}/forecast/daily?q=${city}&type=accurate&APPID=${apiKey}&cnt=5`
  const uri = window.encodeURI(apiUri)
  return axios.get(uri)
    .then((res) => {
      return res.data
    })
}

const api = {
  fetchCityWeather: fetchCityWeather,
  fetchCityForecast: fetchCityForecast
}

export default api
