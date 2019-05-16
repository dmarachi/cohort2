console.log("Hello World From JS");
// console.log("css formatting", logging background 43C6AC);
console.log("background formatting: ", "#43C6AC, #F8FFAE");

function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel";
	return div;
}
console.log("testing makeDiv", makeDiv("Make me a div"));

let count = 1;
document.body.addEventListener("click", onBodyClicked);
function onBodyClicked(event) {
	console.log("Test here");
	event.target.textContent = "Bang " + count++;
	// console.log("This is:", bodyTag);
	
}
