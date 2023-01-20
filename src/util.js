export function createHtmlElement(tagName, className, textContent) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = textContent;
    return element;
}

export function fromUnixTimeUserHour(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    return date.getHours() + ':' + date.getMinutes();
}

export function fromUnixTime(unix_timestamp, timezoneRaw) {
    let timePlusZone = unix_timestamp + timezoneRaw;
    let date = new Date(timePlusZone * 1000);
    let hours = date.getUTCHours() + timezoneRaw;
    if ( hours > 24 ) {
        hours = hours - 24;
    } else if ( hours < 0) {
        hours = hours + 24;
    } else {
        hours = hours
    }
    let humanDate = hours + ':' + date.getUTCMinutes();
    return humanDate;
}

export function transformData(data) {
    let weatherStatus = data.weather.description;
    let actualTemp = data.main.temp;
    let feelsTemp = data.main.feels_like;
    let minTemp = data.main.temp_min;
    let maxTemp = data.main.temp_max;
    let atmosphericTemp = data.main.pressure;
    let humidityTemp = data.main.humidity + '%';//humidity%
    let visibilityTm = data.visibility + 'm'; // in meters
    let windSpeed = data.wind.speed + 'm/s'; // in meters/sec
    let windDeg = data.wind.deg + '°';
    let timezone = data.timezone;
    let sunrise = fromUnixTime(data.sys.sunrise + timezone);
    let sunset = fromUnixTime(data.sys.sunset + timezone);
    let fetchHour = fromUnixTime(data.dt + timezone);
    let countryName = data.name;
}