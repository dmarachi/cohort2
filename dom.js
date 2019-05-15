function show() {
	const ol = document.getElementById("list");
	console.log(ol.textContent);
}
function add() {
	const ol = document.getElementById("list");
	ol.textContent = ("Item 4");
	}

// const addNewCard = document.getElementById("addCard");
const leftSide = document.getElementById("left");
//const rightSide = document.getElementById("right");


let count = 1;

document.body.addEventListener("click", add1);
function add1(event) {
	console.log("Test here");	
	// divCardBox.id = "box";
	const divCardBox = document.createElement("div"); // it need to be inside the function to create the cards under each other 
	divCardBox.className = "subCard"; 

	divCardBox.appendChild(document.createTextNode("Card " + " " + count++ + " "));
 	leftSide.appendChild(divCardBox);
 	
	// // add the "add Before" button
	const AddBeforeButton = document.createElement("BUTTON");
	AddBeforeButton.appendChild(document.createTextNode("Add Before"));
	divCardBox.appendChild(AddBeforeButton);


	// //add the "add after" button
	const AddAfterButton = document.createElement("BUTTON");
	AddAfterButton.appendChild(document.createTextNode("Add After"));
	divCardBox.appendChild(AddAfterButton);

	// //add the "Delete" button
	const DeleteButton = document.createElement("BUTTON");
	DeleteButton.appendChild(document.createTextNode("Delete"));
	divCardBox.appendChild(DeleteButton);

	return divCardBox;
}