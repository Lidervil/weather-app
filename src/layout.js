import {createHtmlElement} from './util.js';

export function content(){
    const content = createHtmlElement('div', 'content', '');
    content.appendChild(createHtmlElement('main', '', '')
                            .appendChild(formDisplay())
                            .appendChild(dataSidebar()));

    return content
}

function formDisplay() {
    const formDisplay = createHtmlElement('div', 'form-display', '');


    return formDisplay
}

function dataSidebar() {
    const dataSidebar = createHtmlElement('div', 'data-sidebar', '');

    
    return dataSidebar
}
