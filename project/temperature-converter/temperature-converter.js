// Temperature Converter using JavaScript

function celciusToFahrenheit(celcius) {
    const formula1 = (celcius * 9 / 5) + 32;
    console.log(formula1 + ' F');
}

function fahrenheitToCelcius(fahrenheit) {
    const formula2 = (fahrenheit - 32) * 5 / 9;
    console.log(formula2 + ' C'); 
}

celciusToFahrenheit(25);
fahrenheitToCelcius(86);
celciusToFahrenheit(-5);