const fromCurrencySelector = document.getElementById("fromCurr");
const amountInput = document.getElementById("amount");
const toCurrencySelector = document.getElementById("toCurr");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("resultDisplay");

const convertAmount = () => {
    const fromCurr = fromCurrencySelector.value;
    const toCurr = toCurrencySelector.value;
    const amount = amountInput.value;
    console.log(fromCurr + amount + toCurr);
    let resultString = "";

    const headers = new Headers();
    headers.append("apikey", "3YWNqJbOBvLr6kV3jibqMMA3BMoOhN9l");

    const options = {
        method: "GET",
        headers: headers
    }
    const fetchResult = fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurr}&from=${fromCurr}&amount=${amount}`, options)
    fetchResult.then(res => res.json()).then(res => {
        resultString = `${fromCurr} ${amount} is equal to ${toCurr} ${res.result}`
        console.log(resultString)
        resultDiv.innerHTML = resultString;
    })
    fetchResult.catch(err => console.log("Error: ", err))
}

convertButton.addEventListener("click", convertAmount);