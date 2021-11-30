import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { input, countryList, countryInfo } from './refs';
import { countriesListMarkup, countryCardMarkup } from './renderMarkup';

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInputType, DEBOUNCE_DELAY));

function onInputType(e) {
  resetMarkup();

  const country = e.target.value;

  if (country.trim() === '') return;
  fetchCountries(country)
    .then(renderMarkup)
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

function resetMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function renderMarkup(countryData) {
  const countries = countryData.length;

  if (countries > 10)
    return Notify.info('Too many matches found. Please enter a more specific name.');

  if (countries >= 2 && countries <= 10) countriesListMarkup(countryData);

  if (countries === 1) countryCardMarkup(countryData[0]);
}
