import listCount from './templates/countriesMarc.hbs';
import countrie from './templates/countMarc.hbs';
import '@pnotify/core/dist/Angeler.css';

import '@pnotify/core/dist/BrightTheme.css';

const { defaults } = require('@pnotify/core');
const { alert, notice, info, success, error } = require('@pnotify/core');
defaults.delay = 2000;

const countriesList = document.querySelector('.list-countries');

export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(resp => { return resp.json() })
        .then(countries => {
            countriesList.innerHTML = '';
            if (countries.length >= 2 && countries.length <= 10) {
                const listCountMarc = listCount(countries);
                return countriesList.insertAdjacentHTML('beforeend', listCountMarc);
            } else if (countries.length === 1) {
                const countrieMarc = countrie(countries);
                return countriesList.insertAdjacentHTML('beforeend', countrieMarc);
            } else if (countries.length >= 10) {
            const myInfo = info({
            text: "Too many matches found. Please enter a more specific query!",
            type: 'info'
            })
            } else {
             const myError = error({
                text: "Matches not found."
            })   
            }
                
            
 
         }).catch(error => console.log(error));
}