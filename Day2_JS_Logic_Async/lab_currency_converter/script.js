// GlobalX Currency Converter Logic

// 1. Select all the elements we need
const amountInput = document.querySelector("#amount");
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const convertBtn = document.querySelector("#convert-btn");
const rateText = document.querySelector("#exchange-rate");
const resultDisplay = document.querySelector("#converted-amount");

// 2. The API Endpoints
const BASE_URL = "https://open.er-api.com/v6/latest/";

/**
 * Main Function to Fetch Data and Update UI
 * We use 'async' because fetching data takes time.
 */
async function updateExchangeRate() {
    let amountVal = amountInput.value;

    // Basic logic: if user enters nothing or negative, set to 1
    if (amountVal === "" || amountVal <= 0) {
        amountVal = 1;
        amountInput.value = "1";
    }

    rateText.innerText = "Getting exchange rate...";
    
    try {
        // --- ASYNC MASTERY: Fetching Data ---
        const url = `${BASE_URL}${fromCurrency.value}`;
        const response = await fetch(url);
        
        // Convert the response to a JS Object
        const data = await response.json();
        
        // --- JS BASICS: Object access ---
        const rate = data.rates[toCurrency.value];
        const totalAmount = (amountVal * rate).toFixed(2);
        
        // --- DOM: Update the UI ---
        resultDisplay.innerText = `${totalAmount} ${toCurrency.value}`;
        rateText.innerText = `1 ${fromCurrency.value} = ${rate.toFixed(4)} ${toCurrency.value}`;
        
    } catch (error) {
        // Error handling
        rateText.innerText = "Something went wrong!";
        resultDisplay.innerText = "Error";
        console.error("Fetch error:", error);
    }
}

// 3. Add Event Listeners (How JS "Listens" for actions)

// Run the function when button is clicked
convertBtn.addEventListener("click", (evt) => {
    evt.preventDefault(); // Stop page from refreshing
    updateExchangeRate();
});

// Run the function automatically when selection changes
[fromCurrency, toCurrency].forEach(select => {
    select.addEventListener("change", () => {
        updateExchangeRate();
    });
});

// Run once on page load so it's not empty
window.addEventListener("load", () => {
    updateExchangeRate();
});
