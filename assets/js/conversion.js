let UsdToCLPConversionRate;
let EURToCLPConversionRate;
const apiKey = 'b6a0dc146ba44e9c4cfbfd9d';
const baseCurrency = 'USD';
const targetCurrency = 'CLP';
const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`;

const baseCurrency2 = 'EUR';
const apiUrl2 = `https://open.er-api.com/v6/latest/EUR?apikey=b6a0dc146ba44e9c4cfbfd9d`;

function getConversionRateUSDtoCLP() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            UsdToCLPConversionRate = data.rates[targetCurrency];

            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateUSDtoCLP');
            conversionRateElement.textContent = `1 ${baseCurrency} = ${UsdToCLPConversionRate} ${targetCurrency}`;

            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateUSDtoCLP');
            displayConversionRateElement.textContent = `Conversion rate: ${UsdToCLPConversionRate}`;
            console.log('Conversion rate updated')

            UsdToClp();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateUSDtoCLP');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function getConversionRateCLPtoUSD() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            UsdToCLPConversionRate = data.rates[targetCurrency];
            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateCLPtoUSD');
            conversionRateElement.textContent = `1 ${targetCurrency} = ${1/UsdToCLPConversionRate} ${baseCurrency}`;
            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateCLPtoUSD');
            displayConversionRateElement.textContent = `Conversion rate: ${1/UsdToCLPConversionRate}`;
            clpToUsd();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateCLPtoUSD');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function UsdToClp(){
    var input = document.getElementById('inputUSD').value;
    var output = document.getElementById('outputCLP');

    if(!isNaN(parseFloat(input))){
        const resultado = input*UsdToCLPConversionRate;
        output.value = resultado + " CLP";
    }
}

function clpToUsd(){
    var input = document.getElementById('inputCLP').value;
    var output = document.getElementById('outputUSD');

    if(!isNaN(parseFloat(input))){
        const resultado = input*(1/UsdToCLPConversionRate);
        output.value = resultado + " USD";
    }
}

function getConversionRateEURtoCLP() {
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            EURToCLPConversionRate = data.rates[targetCurrency];

            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateEURtoCLP');
            conversionRateElement.textContent = `1 ${baseCurrency2} = ${EURToCLPConversionRate} ${targetCurrency}`;

            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateEURtoCLP');
            displayConversionRateElement.textContent = `Conversion rate: ${EURToCLPConversionRate}`;
            console.log('Conversion rate updated')

            EURToClp();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateEURtoCLP');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function getConversionRateCLPtoEUR() {
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            EURToCLPConversionRate = data.rates[targetCurrency];
            // Store the conversion rate in a variable or a data attribute
            const conversionRateElement = document.getElementById('conversionRateCLPtoEUR');
            conversionRateElement.textContent = `1 ${targetCurrency} = ${1/EURToCLPConversionRate} ${baseCurrency2}`;
            // Display the conversion rate in the additional element
            const displayConversionRateElement = document.getElementById('displayConversionRateCLPtoEUR');
            displayConversionRateElement.textContent = `Conversion rate: ${1/EURToCLPConversionRate}`;
            clpToEUR();
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            const conversionRateElement = document.getElementById('conversionRateCLPtoEUR');
            conversionRateElement.textContent = 'Error fetching conversion rate';
        });
}

function EURToClp(){
    var input = document.getElementById('inputEUR').value;
    var output = document.getElementById('outputCLP2');

    if(!isNaN(parseFloat(input))){
        const resultado = input*EURToCLPConversionRate;
        output.value = resultado + " CLP";
    }
}

function clpToEUR(){
    var input = document.getElementById('inputCLP2').value;
    var output = document.getElementById('outputEUR');

    if(!isNaN(parseFloat(input))){
        const resultado = input*(1/EURToCLPConversionRate);
        output.value = resultado + " EUR";
    }
}
