const errorMessage = document.querySelector(".error-message");
const errorElement = document.querySelector(".error-box");

let currencies = {};
try {
  //fetching the currencies
  const currenciesResponse = await fetch(
    "https://open.er-api.com/v6/latest/USD",
  );
  if (!currenciesResponse.ok) {
    throw new Error(`Currencies not loaded: ${currenciesResponse.status}`);
  }
  const currencyData = await currenciesResponse.json();
  currencies = currencyData.rates;
} catch (err) {
  errorMessage.textContent = err.message;
  errorElement.classList.remove("hidden");
}

export { currencies };
