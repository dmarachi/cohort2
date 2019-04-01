	var number1;
	var number2;
function setValues() {
		number1 = Number(document.getElementById('number1').value);
		number2 = Number(document.getElementById("number2").value);
	}
function add() {
		setValues();
		result = number1 + number2;
		console.log("The first number is: " + number1 + " and the second number is: " + number2 + " so the result is: " + result);
	}
function sub() {
		setValues();
		result = number1 - number2;
		console.log("The first number is: " + number1 + " and the second number is: " + number2 + " so the result is: " + result);
	}
function multi() {
		setValues();
		result = number1 * number2;
		console.log("The first number is: " + number1 + " and the second number is: " + number2 + " so the result is: " + result);
	}
function divid() {
		setValues();
		result = number1 / number2;
		console.log("The first number is: " + number1 + " and the second number is: " + number2 + " so the result is: " + result);
	}