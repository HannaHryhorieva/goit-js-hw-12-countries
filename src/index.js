import './sass/main.scss';
import fetchCountries from './fetchCountries.js';
var debounce = require('lodash.debounce');


const countrieInput = document.querySelector('.label-input');
let textValue = '';
function onInput() {
    textValue = countrieInput.value;
    return fetchCountries(textValue);
     
};

countrieInput.addEventListener('input', debounce(onInput, 500));



// fetchCountries(textValue);
// const myError = error({
//   text: "I'm an error message."
// });
// const mySuccess = success({
//   text: "I'm a success message."
// });
// const myNotice = notice({
//   text: "I'm a notice."
// });
// const myInfo = info({
//   text: "Too many matches found. Please enter a more specific query!"
// });



// const countriesList = document.querySelector('.list-countries');

