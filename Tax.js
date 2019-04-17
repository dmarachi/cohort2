 // let number1;
 // let federalTax = 0;

function calculate() { 
	number1 = Number(document.getElementById('number1').value);
	console.log(number1);
	if (number1 <= 47630) {
		federalTax = (number1 - 0) * 0.15 + 0;
		console.log(federalTax);
	} else if (number1 > 47630 && number1 <= 95259) {
		federalTax = (number1 - 47630) * 0.205 + 7145;
	} else if (number1 > 95259 && number1 <= 147667) {
		federalTax = (number1 - 95259) * 0.26 + 16908;
	} else if (number1 > 147667 && number1 <= 210371) {
		federalTax = (number1 - 147667) * 0.29 + 30535;
	} else if (number1 > 210371) {
		federalTax = (number1 - 210371) * 0.33 + 48719;
	}	
	document.getElementById("output").value = federalTax;
	return federalTax;
}
console.log(calculate());