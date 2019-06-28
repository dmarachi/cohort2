	var array = [65, 44, 120, 657, 12, 4];

	function add(){
		array.push(addingNumber.value);
		console.log(addingNumber.value);
		document.getElementById("output").value = array;
	}

	function show() {
		document.getElementById("output").value = array;
	}

	function getTotal() {
		let w = 0;
		for(q = 0; q < array.length; q++) {
			w += Number(array[q]);
		}
		console.log(w);
		document.getElementById("output").value = w;
	}
	
	function clear(){
		array = [];
		document.getElementById("output").value = array;
		console.log("The array is empty", array);
	}
	// Province = {   			// creating an object and their properties
	// 	"AB": "Alberta",
	// 	"BC": "British Columbia",
	// 	"MB": "Manitoba",
	// 	"NB": "New Brunswick",
	// 	NL: "Newfoundland and Labrador",
	// 	NS: "Nova Scotia",
	// 	ON: "Ontario",
	// 	PE: "Prince Edward Island",
	// 	QC: "Quebec",
	// 	SK: "Saskatchewan",
	// 	NT: "Northwest Territories",
	// 	NU: "Nunavut",
	// 	YT: "Yukon",
	// }
	Province={}
	Province["ab"]="Alberta"
	Province["bc"]="British Columbia"
	Province["mb"]="Manitoba"
	Province["nb"]="new Brunswick"
	Province["nl"]="Newfoundland and Labrador"
	Province["ns"]="Nova Scotia"
	Province["on"]="Ontario"
	Province["pe"]="Prince Edward Island"
	Province["qc"]="Quebec"
	Province["sk"]="Saskatchewan"
	Province["nt"]="Northwest Territories"
	Province["nu"]="Nunavut"
	Province["yt"]="Yukon"

	;
	//console.log(Province); //To print the whole thing

	function lookup() {
		lookingUp1 = document.getElementById("lookingUp").value; //getting the value from lookingUp and assining it to lookingUp1 
		console.log(Province[lookingUp1]);
		outputlookingUp.value=Province[lookingUp1]; // writing the value 
	}

	const colors = ["Red" , "Green", "Yellow", "Blue", "Black", "White"];
	console.log(colors);
	colors.unshift("Move", "Orange");
	console.log(colors);
	colors.push("silver");
	console.log(colors);

	var i;
	var text = "";
	for(i = 0; i <= colors.length; i++)	{
		text += colors[i];
	}
	document.getElementById('demo').innerHTML = text;
	console.log(colors);

	var x;
	var person = {firstName: "Damla", lastName: "Marasli"};
	for(x in person) {
		text += person[x] + " ";
	}
	document.getElementById('demo').innerHTML = text;

	var y;
	while (y <= 10) {
		text += "The number is " + y;
		y++;
	}
	console.log(y);

	var d;
	do {
		text += "The number is " + d;
		d++;
	} while (d <= 10);
	console.log(d);

	var sum = 0;
	var numbers = [65, 44, 12, 4];

	function myFunction(item) {
		sum += item;
		console.log(sum);
	}
	console.log(sum);

	function speak() {
	console.log("Arf");
	console.log("Wooof");
	console.log("Meow");
	console.log("Mooooooooooo");
}
/*
    --- make me an email
    Write the function that will make this code work.
*/
console.log("Make me an Email");

function makeEmail(firstName, lastName) {
	 make = firstName + "." + lastName + "@evolveu.ca";
	 return make;
    }

const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
    console.log("***** We have an error here *****",
        larryEmail,
        " is not = ",
        shouldBeLarryEmail,
        " and it should be."
    )
}

console.log("Larry:", larryEmail);

console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));
