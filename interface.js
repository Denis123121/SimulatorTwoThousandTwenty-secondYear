let currency = null;

let numberOfCoinsField = document.getElementById("number-of-coins-field");
let typeOfCurrencyField = document.getElementById("type-of-currency-field");

let platinumCoinsField = document.getElementById("platinum-coins-field");
let goldCoinsField = document.getElementById("gold-coins-field");
let silverCoinsField = document.getElementById("silver-coins-field");

function showCoins() {
    platinumCoinsField.innerText = currency.platinumCoins.toString();
    goldCoinsField.innerText = currency.goldCoins.toString();
    silverCoinsField.innerText = currency.silverCoins.toString();
}

function buttonChangeCoins_Click() {
    let coins = parseInt(numberOfCoinsField.value);

    if (typeOfCurrencyField.value === "platinumCoins") {
        currency.platinumCoins += coins;
    } else if (typeOfCurrencyField.value === "goldCoins") {
        currency.goldCoins += coins;
    } else if (typeOfCurrencyField.value === "silverCoins") {
        currency.silverCoins += coins;
    }

    localStorage.setItem("currency", JSON.stringify(currency));

    showCoins();
}

window.onload = function () {
    let currencyAsJson = localStorage.getItem("currency");
    if (currencyAsJson != null) {
        currency = JSON.parse(currencyAsJson);
    } else {
        currency = new Currency();
    }

    showCoins();
};