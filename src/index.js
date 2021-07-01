import './sass/main.scss';
import './fetchCountries.js';

const { alert, notice, info, success, error } = require('@pnotify/core');

const myInfo = info({
  text: "Too many matches found. Please enter a more specific query!"
});

const countrieInput = document.querySelector('.label-input');
const countriesList = document.querySelector('.list-countries');

