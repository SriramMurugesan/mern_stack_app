# Module 3 Lab: Build a Currency Converter 💵

In this final lab, you will build a real-world project that uses everything we learned today: **Variables, DOM, Async/Await, and API Integration.**

---

## 🏗️ Project Overview
We will create an app that allows users to:
1. Select a "From" currency and a "To" currency.
2. Enter an amount.
3. Fetch real-time exchange rates from an API and display the result.

---

## 🛠️ Step 1: The Structure (HTML)
We need a clean form with inputs and labels.
- Use `<select>` for currency codes (USD, INR, EUR, etc.).
- Use `<input type="number">` for the amount.
- Create a `div` to display the result.

## 🎨 Step 2: The Style (CSS)
Make it look premium!
- Use **Glassmorphism** (semi-transparent backgrounds).
- Add smooth transitions.
- Ensure it's responsive (looks good on mobile).

## 🧠 Step 3: The Logic (JS + API)
This is where the magic happens. We will use the `ExchangeRate-API`.

### The Async Function
We need a function that:
1. Takes the user's input.
2. Calls the API using `fetch`.
3. Waits for the response using `await`.
4. Calculates the final amount and updates the DOM.

```javascript
async function convert() {
    // 1. Get user values
    const amount = document.querySelector("#amount").value;
    const from = document.querySelector("#from").value;
    const to = document.querySelector("#to").value;

    // 2. Fetch data
    const apiURL = `https://open.er-api.com/v6/latest/${from}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    // 3. Logic
    const rate = data.rates[to];
    const result = amount * rate;

    // 4. Update UI
    document.querySelector("#result").innerText = result.toFixed(2);
}
```

---

## 🚀 Lab Tasks
1. **Initialize**: Create your `index.html` and link `style.css` and `script.js`.
2. **Build UI**: Use the provided demo as inspiration.
3. **Connect API**: Ensure you handle errors (e.g., what if the amount is negative?).
4. **Wow Factor**: Add a "Loading..." text while the API is fetching.

---

## 📁 File Locations
- **HTML**: `lab_currency_converter/index.html`
- **CSS**: `lab_currency_converter/style.css`
- **JS**: `lab_currency_converter/script.js`
