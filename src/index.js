import './sass/main.scss';
import fetchCountries from './fetchCountries.js';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
  defaultModules.set(PNotifyMobile, {});
  alert({
    text: 'Too many matches found. Please enter a more specific query!'
  });

var debounce = require('lodash.debounce');


const countrieInput = document.querySelector('.label-input');
let textValue = '';
function onInput() {

    textValue = countrieInput.value;
    return fetchCountries(textValue);
     
};

countrieInput.addEventListener('input', debounce(onInput, 500));

