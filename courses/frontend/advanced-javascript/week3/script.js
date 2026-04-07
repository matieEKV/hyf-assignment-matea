//DOM ELEMENTS SELECTORS
const inputAmount = document.querySelector(".input-amount");
const outputAmount = document.querySelector(".output-amount");
const startingCurrency = document.querySelector(".starting-currency");
const endingCurrency = document.querySelector(".ending-currency");
const currencyOptions = document.querySelectorAll(".currency");
const swapCurrencies = document.querySelector(".swap-button");

//event listeners

inputAmount.addEventListener("input", convertAmount);

for (let option of currencyOptions) {
  option.addEventListener("change", convertAmount);
}

swapCurrencies.addEventListener("click", () => {
  console.log("i was clicked");
  [startingCurrency.value, endingCurrency.value] = [
    endingCurrency.value,
    startingCurrency.value,
  ];
  outputAmount.textContent = getRates(
    endingCurrency.value,
    startingCurrency.value,
  );
});
//fetch the currencies
let currencies;
async function fetchCurrencies() {
  try {
    const currenciesResponse = await fetch(
      "https://open.er-api.com/v6/latest/USD",
    );
    const response = await currenciesResponse.json();
    currencies = response.rates;
    outputAmount.textContent = getRates("DKK", "EUR"); //set the default amount to be converted immediately
    populateOptions(currencies);
  } catch (err) {
    throw "Fetching currencies went wrong with the error:";
  }
}
fetchCurrencies();

function populateOptions(currencies) {
  let out = "";
  for (const currency in currencies) {
    out += `<option value="${currency}">${currency}</option>`;
  }

  for (let currencyOption of currencyOptions) {
    currencyOption.innerHTML = out;
  }

  startingCurrency.value = "EUR";
  endingCurrency.value = "DKK";
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
