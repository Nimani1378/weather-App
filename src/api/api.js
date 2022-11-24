import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org'
})


export const handleGetOneDayWeather = (city) => {
    return api(`/data/2.5/weather?q=${city}&lang=en&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`).then(data => data.data)
}

export const handleGetFiveDayWeather = (city) => {
    return api(`/data/2.5/forecast?q=${city}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`).then(data => data.data.list)
}
// {
// "coord":{"lon":-0.1257,"lat":51.5085},
// "weather":[{"id":800,"main":"Clear","description":"آسمان صاف","icon":"01n"}],
// "base":"stations",
// "main":{"temp":9.69,"feels_like":7.57,"temp_min":7.94,"temp_max":10.86,"pressure":994,"humidity":80},
// "visibility":10000,
// "wind":{"speed":4.12,"deg":230},
// "clouds":{"all":7},
// "dt":1669226038,
// "sys":{"type":2,"id":2075535,"country":"GB","sunrise":1669188704,"sunset":1669219341},
// "timezone":0,
// "id":2643743,
// "name":"لندن",
// "cod":200
// }
// https://openweathermap.org/img/wn/10n.png