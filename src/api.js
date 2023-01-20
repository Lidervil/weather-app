let data

export async function apiCall(city = 'japan'){
    let response
    let json;
    try {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=41ee28423082bcf06b963246ef1dcef8`, {mode:'cors'});
        json = await response.json();
    } catch (error) {
        console.error(error);
    }

    data = json;
}