import { countryList, countryInfo } from './refs';

export function countriesListMarkup(countryData) {
  const markup = countryData
    .map(
      ({ flags, name }) =>
        `<li class='countries__item '>
            <img src='${flags.svg}' alt='${name.official}' class='countries__flag' />
            <p class='text countries__name'>${name.official}</p>
        </li>`,
    )
    .join('');
  countryList.insertAdjacentHTML('afterbegin', markup);
}

export function countryCardMarkup({ name, capital, population, flags, languages }) {
  const languagesList = Object.values(languages)
    .map(
      language =>
        `<li class='country__item'>
            <p class='text'>${language}</p>
         </li>`,
    )
    .join('');

  const markup = `
    <div class='country wrapper'>
        <div class='country_descr'>
            <h1 class='country__title'>${name.official}</h1>
            <p class='country__text'><b>Capital:&emsp;</b><span class='text'>${capital}</span></p>
            <p class='country__text'><b>Population:&emsp;</b><span class='text'>${population}</span></p>
            <p class='country__text'><b>Languages:</b></p>
            <ul class='country__list'>${languagesList}</ul>
        </div>

        <img src='${flags.svg}' alt='${name.official}' class='country__flag' width='400' />
    </div>`;
  countryInfo.insertAdjacentHTML('afterbegin', markup);
}
