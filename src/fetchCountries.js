import listCount from './templates/countriesMarc.hbs';
import countrie from './templates/countMarc.hbs';
const { alert, notice, info, success, error } = require('@pnotify/core');


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
            };
            const myAlert = alert({
            text: "Too many matches found. Please enter a more specific query!",
            type: 'info'
});
         }).catch(error => console.log(error));
}