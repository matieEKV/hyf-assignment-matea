import { fetchCurrencyRates } from "./fetchCurrencyRates.js";

//DOM ELEMENTS SELECTORS
const inputAmount = document.querySelector(".input-amount");
const outputAmount = document.querySelector(".output-amount");
const baseCurrencyDropdown = document.querySelector(".starting-currency");
const counterCurrencyDropdown = document.querySelector(".ending-currency");
const swapCurrencies = document.querySelector(".swap-button");
const flagStart = document.querySelector("#start-flag");
const flagEnd = document.querySelector("#end-flag");

//event listeners

inputAmount.addEventListener("input", convertAmount);

const currencies = await fetchCurrencyRates();
let globalFlags = [];

//attach event listener on each dropdown element

baseCurrencyDropdown.addEventListener("change", () => {
  convertAmount();
  changeFlag(baseCurrencyDropdown.value, flagStart);
});
counterCurrencyDropdown.addEventListener("change", () => {
  convertAmount();
  changeFlag(counterCurrencyDropdown.value, flagEnd);
});

swapCurrencies.addEventListener("click", () => {
  [baseCurrencyDropdown.value, counterCurrencyDropdown.value] = [
    counterCurrencyDropdown.value,
    baseCurrencyDropdown.value,
  ];
  convertAmount();
  changeFlag(baseCurrencyDropdown.value, flagStart);
  changeFlag(counterCurrencyDropdown.value, flagEnd);
});

//fetching function

async function fetchFlags() {
  //fetching flags
  try {
    const flagsResponse = await fetch(
      "https://gist.githubusercontent.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f/raw/d160e7d3b0e11ea3912e97a1b3b25b359746c86a/currencies-with-flags.json",
    );
    if (!flagsResponse.ok) {
      throw new Error(`Flags not found: ${flagsResponse.status}`);
    }
    return await flagsResponse.json();
  } catch (err) {
    return [];
  }
}

//populate options for the currencies
function populateOptions(currencies) {
  let out = "";
  for (const currency in currencies) {
    out += `<option value="${currency}">${currency}</option>`;
  }
  //populate dropdown elements
  baseCurrencyDropdown.innerHTML = out;
  counterCurrencyDropdown.innerHTML = out;

  baseCurrencyDropdown.value = "EUR";
  counterCurrencyDropdown.value = "DKK";
  changeFlag(baseCurrencyDropdown.value, flagStart);
  changeFlag(counterCurrencyDropdown.value, flagEnd);
}

function convertAmount() {
  const convertTo = counterCurrencyDropdown.value;
  const convertFrom = baseCurrencyDropdown.value;
  outputAmount.textContent = getRates(convertTo, convertFrom);
}

function getRates(to, from) {
  return (inputAmount.value * (1 / currencies[from]) * currencies[to]).toFixed(
    2,
  );
}

function changeFlag(currencyCode, flagElement) {
  const newFlag = globalFlags.find(
    (currency) => currency.code === currencyCode,
  );

  if (newFlag) {
    const countryCode = newFlag.countryCode.toLowerCase();
    flagElement.innerHTML = `<img src="${`https://flagcdn.com/w80/${countryCode}.png`}" alt="flag">`;
    flagElement.classList.remove("hidden");
  } else {
    flagElement.classList.add("hidden");
  }
}

// initialize the UI and make it the entry point of the app
function initUI() {
  populateOptions(currencies);
  outputAmount.textContent = getRates("DKK", "EUR");

  fetchFlags().then((data) => {
    globalFlags = data;

    changeFlag(baseCurrencyDropdown.value, flagStart);
    changeFlag(counterCurrencyDropdown.value, flagEnd);
  });
}

initUI();
