import {createHtmlElement} from './util.js';

export function content(){
    const content = createHtmlElement('div', 'content', '');
    const main = createHtmlElement('main', '', '');
    main.appendChild(dataDisplay());
    main.appendChild(formSidebar());

    content.appendChild(main);

    return content;
}

function dataDisplay() {
    const dataDisplay = createHtmlElement('div', 'data-display', '');

    const weatherHeader = createHtmlElement('div', 'weather-header', '');
    weatherHeader.appendChild(createHtmlElement('h1', '', 'Weather report'));
    weatherHeader.appendChild(createHtmlElement('h3', '', '<span class="city"></span>: <span class="city-status"></span>'));

    const weatherDetails = createHtmlElement('div', 'weather-details', '');
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Actual temperature: <span class="actual-temp"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Feels temperature: <span class="feels-temp"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Min temperature: <span class="min-temp"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Max temperature: <span class="max-temp"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Atmospheric pressure: <span class="pressure"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Visibility: <span class="visibility"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Humidity: <span class="humidity"></span>'));
    weatherDetails.appendChild(createHtmlElement('h3', '', 'Wind Speed: <span class="wind-speed"></span>'));

    const timeDetails = createHtmlElement('div', 'time-details', '');
    timeDetails.appendChild(createHtmlElement('h3', '', 'Sunrise: <span class="sunrise"></span>'));
    timeDetails.appendChild(createHtmlElement('h3', '', 'Sunset: <span class="sunset"></span>'));
    timeDetails.appendChild(createHtmlElement('h3', '', 'Timezone: <span class="timezone"></span>'));

    dataDisplay.appendChild(weatherHeader);
    dataDisplay.appendChild(createHtmlElement('h2', '', 'Weather details'));
    dataDisplay.appendChild(weatherDetails);
    dataDisplay.appendChild(createHtmlElement('h2', '', 'Time details'));
    dataDisplay.appendChild(timeDetails);

    return dataDisplay;
}

function formSidebar() {
    const formSidebar = createHtmlElement('div', 'form-sidebar', '');
    formSidebar.appendChild(createHtmlElement('p', 'giphy-desc', '-Gif provided by Giphy.'));
    formSidebar.appendChild(createHtmlElement('img','giphy',''));
    formSidebar.appendChild(createHtmlElement('p','time-request','Hour of request'));
    formSidebar.appendChild(createHtmlElement('p','time-dt',''));

    const form = createHtmlElement('form', 'form', '');
    const input = createHtmlElement('input', 'form-input','');
    input.setAttribute('placeholder', 'place. ej:"london"');
    form.appendChild(input);
    form.appendChild(createHtmlElement('button', 'search', 'Weather'));
    
    formSidebar.appendChild(form);
    
    return formSidebar;
}
