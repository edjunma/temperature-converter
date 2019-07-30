const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

celsiusInput.addEventListener('input', function() {
	const cTemp = parseFloat(celsiusInput.value);
	const fTemp = cTemp * (9 / 5) + 32;
	const kTemp = cTemp + 273.15;
	console.log(kTemp);
});
