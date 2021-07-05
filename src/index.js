import './sass/main.scss';
import fetchCountries from './fetchCountries.js';
import '@pnotify/core/dist/Angeler.css';
const { defaults } = require('@pnotify/core');

defaults.closerHover = false;


import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
  defaultModules.set(PNotifyMobile, {});
  

var debounce = require('lodash.debounce');


const countrieInput = document.querySelector('.label-input');
let textValue = '';
function onInput() {

    textValue = countrieInput.value;
    return fetchCountries(textValue);
     
};

countrieInput.addEventListener('input', debounce(onInput, 500));

