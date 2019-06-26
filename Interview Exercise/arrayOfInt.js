// Write a function that takes an array of integers and a target sum, 
// and returns true if any combination of the integers in the array add up 
// to exactly the given target.

array = [];
var targetedSum = 0;
let w = 0;
var compare;
//To add new int to the array
function add(){
		array.push(addingNumber.value);
		console.log(addingNumber.value);
		array.value = "";
		document.getElementById("output").value = array;
	}

//To get the total of the intered int in the array 	
function getTotal() {
		for(q = 0; q < array.length; q++) {
			w += Number(array[q]);
		}
		console.log(w);
		document.getElementById("output").value = w;
	}

function targetSum() {
	console.log("inside target function");

		if(number.value > w) {
			compare = false;
		} else if (number.value < w){
			compare =  false;
		} else {
			compare =  true;
		}
		number.value = "";
		console.log("Targe sum is: ", compare)
		document.getElementById("output1").value = compare;
		
	}