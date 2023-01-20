import './sass/style.scss';
import { content } from './layout.js';
import { fromUnixTime, fromUnixTimeUserHour } from './util';
import Cloudy from './cloudy.webp';
import Rainy from './rainy.png';
import Snowy from './snowy.jpeg';
import Sunny from './sunny.webp';

document.body.appendChild(content());

let data;

apiCall('london');

/* const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', (e) => {
    e.preventDefault();
})  */

const search = document.getElementsByClassName('search')[0];
search.addEventListener('click', (e) => {
    e.preventDefault();
    const formInput = document.getElementsByClassName('form-input')[0];
    apiCall(formInput.value);
})

async function apiCall(city = 'japan'){
    let response
    let json;
    try {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=41ee28423082bcf06b963246ef1dcef8`, {mode:'cors'});
        json = await response.json();
    } catch (error) {
        console.error(error);
    }

    data = json;
    console.log(data);
    
    apiUse();
}

function apiUse() {
    const city = document.getElementsByClassName('city')[0];
    const cityStatus = document.getElementsByClassName('city-status')[0];
    const actualTemperature = document.getElementsByClassName('actual-temp')[0];
    const feelsTemperature = document.getElementsByClassName('feels-temp')[0];
    const minTemperature = document.getElementsByClassName('min-temp')[0];
    const maxTemperature = document.getElementsByClassName('max-temp')[0];
    const pressure = document.getElementsByClassName('pressure')[0];
    const visibility = document.getElementsByClassName('visibility')[0];
    const windSpd = document.getElementsByClassName('wind-speed')[0];
    const humidity = document.getElementsByClassName('humidity')[0];
    const sunriseTime = document.getElementsByClassName('sunrise')[0];
    const sunsetTime = document.getElementsByClassName('sunset')[0];
    const timeZ = document.getElementsByClassName('timezone')[0];
    const requestHour = document.getElementsByClassName('time-dt')[0];
    const giphy = document.getElementsByClassName('giphy')[0];


    let weatherStatus = data.weather[0].description;
    let weatherId = data.weather[0].id;
    let actualTemp = data.main.temp + '°K';
    let feelsTemp = data.main.feels_like + '°K';
    let minTemp = data.main.temp_min + '°K';
    let maxTemp = data.main.temp_max + '°K';
    let atmosphericTemp = data.main.pressure;
    let humidityTemp = data.main.humidity + '%';//humidity%
    let visibilityTm = data.visibility + 'm'; // in meters
    let windSpeed = data.wind.speed + 'm/s'; // in meters/sec
    /* let humidity = data.wind.deg + '°'; */
    let timezoneRaw = data.timezone / 3600;
    let sunrise = fromUnixTime(data.sys.sunrise, timezoneRaw);
    let sunset = fromUnixTime(data.sys.sunset, timezoneRaw);
    let fetchHour = fromUnixTimeUserHour(data.dt);
    let countryName = data.name;
    let timezoneParsed;

    if ( timezoneRaw >= 0 ) {
        timezoneParsed = `GMT + ${timezoneRaw}`;
    } else {
        timezoneParsed = `GMT ${timezoneRaw}`;
    }

    switch (weatherId) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
            
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:

        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            document.body.style.backgroundImage = `url(${Rainy})`;
            giphy.src = Rainy
            giphyApi('rain weather', giphy);
            break;
            
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            document.body.style.backgroundImage = `url(${Snowy})`;
            giphy.src = Snowy
            giphyApi('snow weather', giphy);
            break;

        case 800:
            document.body.style.backgroundImage = `url(${Sunny})`;
            giphy.src = Sunny
            giphyApi('sunny weather', giphy);
            break;

        case 700:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
        case 801:
        case 802:
        case 803:
        case 804:
            document.body.style.backgroundImage = `url(${Cloudy})`;
            giphy.src = Cloudy;
            giphyApi('cloud weather', giphy);
            break;
    }

    city.innerHTML = countryName;
    cityStatus.innerHTML = weatherStatus;
    actualTemperature.innerHTML =  actualTemp;
    feelsTemperature.innerHTML = feelsTemp;
    minTemperature.innerHTML = minTemp;
    maxTemperature.innerHTML = maxTemp;
    pressure.innerHTML = atmosphericTemp;
    visibility.innerHTML = visibilityTm;
    windSpd.innerHTML = windSpeed;
    humidity.innerHTML = humidityTemp;
    sunriseTime.innerHTML = sunrise;
    sunsetTime.innerHTML = sunset;
    timeZ.innerHTML = timezoneParsed;
    requestHour.innerHTML = fetchHour;
}

async function giphyApi(search, img){
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Pc8jHtSD1WM5OHl5wM5oHrTJc6z1KdxN&s=${search}`, {mode:'cors'});
    let json = await response.json();
    img.src = json.data.images.original.url;
}