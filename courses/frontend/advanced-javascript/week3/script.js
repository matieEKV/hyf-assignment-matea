//DOM ELEMENTS SELECTORS
const inputAmount = document.querySelector(".input-amount");
const outputAmount = document.querySelector(".output-amount");
const startingCurrency = document.querySelector(".starting-currency");
const endingCurrency = document.querySelector(".ending-currency");
const currencyDropdown = document.querySelectorAll(".currency");
const swapCurrencies = document.querySelector(".swap-button");
const flagStart = document.querySelector(".start-flag");
const flagEnd = document.querySelector(".end-flag");

//event listeners

inputAmount.addEventListener("input", convertAmount);

setupListener(startingCurrency);
setupListener(endingCurrency);

//attach event listener on each dropdown element
function setupListener(element) {
  element.addEventListener("change", () => {
    convertAmount();
    changeFlag();
  });
}

swapCurrencies.addEventListener("click", () => {
  [startingCurrency.value, endingCurrency.value] = [
    endingCurrency.value,
    startingCurrency.value,
  ];
  convertAmount();
  changeFlag();
});

//fetching function

let currencies;
let globalFlags;
async function fetchCurrencyRates() {
  try {
    //fetching the currencies
    const currenciesResponse = await fetch(
      "https://open.er-api.com/v6/latest/USD",
    );
    const currencyData = await currenciesResponse.json();
    currencies = currencyData.rates;
    fetchFlags();
  } catch (err) {
    console.log("Fetching currencies went wrong with the error:", err);
  }
}
fetchCurrencyRates();

async function fetchFlags() {
  //fetching flags
  const flagsResponse = await fetch(
    "https://gist.githubusercontent.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f/raw/d160e7d3b0e11ea3912e97a1b3b25b359746c86a/currencies-with-flags.json",
  );
  const flagData = await flagsResponse.json();
  globalFlags = flagData;
  populateOptions(currencies);
  initUI();
}

//populate options for the currencies
function populateOptions(currencies) {
  let out = "";
  for (const currency in currencies) {
    out += `<option value="${currency}">${currency}</option>`;
  }
  //populate dropdown elements
  startingCurrency.innerHTML = out;
  endingCurrency.innerHTML = out;

  startingCurrency.value = "EUR";
  endingCurrency.value = "DKK";
  changeFlag();
}

//set the default amount to be converted immediately
function initUI() {
  outputAmount.textContent = getRates("DKK", "EUR");
}

function convertAmount() {
  const convertTo = endingCurrency.value;
  const convertFrom = startingCurrency.value;
  outputAmount.textContent = getRates(convertTo, convertFrom);
}

function getRates(to, from) {
  return (inputAmount.value * (1 / currencies[from]) * currencies[to]).toFixed(
    2,
  );
}

function changeFlag() {
  if (!globalFlags) return;

  const fromFlag = globalFlags.find(
    (element) => element.code === startingCurrency.value,
  );
  const toFlag = globalFlags.find(
    (element) => element.code === endingCurrency.value,
  );
  const toCountryCode = toFlag.countryCode.toLowerCase();
  const fromCountryCode = fromFlag.countryCode.toLowerCase();
  displayFlag(flagStart, fromCountryCode);
  displayFlag(flagEnd, toCountryCode);
}

function displayFlag(position, currency) {
  position.innerHTML = `<img src="${`https://flagcdn.com/w80/${currency}.png`}" alt="flag">`;
}
