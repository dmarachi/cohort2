const idBtnPush = document.getElementById("idBtnPushed");
	idBtnPush.addEventListener("click", onButtonPushed);
	//console.log("The bottun is Pushed");
	const string1 = "Hi Universe";
	const string2 = "Hello World";
	const string3 = "Hello Canada";
	const string4 = "Hello Saskatchewan";
	const string5 = "Hello Saskatoon";
	const string6 = "Hello Alberta";
	const string7 = "Hello Calgary";
	//Call the function evry time the mouse is moving over the head 1
	const idHeader1 = document.getElementById('idH1').addEventListener("mouseover", onButtonPushed);
	//Call the function evry time the mouse is moving over the head 2
	const idHeader2 = document.getElementById('idH2').addEventListener("mousemove", mouseMoving);
	
	const idHeader3 = document.getElementById('idH3').addEventListener("click", mouseClick);
	
	const idHeader4 = document.getElementById('idH4').addEventListener("mousedown", mouseOut);
	function onButtonPushed() {
		console.log("On button Pushed");
		//This is to change the heading back and forth
		if (idH1.textContent === string1){
			idH1.textContent = string2; 
		} else {
			idH1.textContent = string1;
		}

		//return this.onButtonPushed;
	}
	function mouseMoving(){
		console.log("The Second Heading is changing");
		//This is to change the heading back and forth
		if (idH2.textContent === string2){
			idH2.textContent = string3; 
		} else {
			idH2.textContent = string2;
		}
	}
	function mouseClick(){
		console.log("The Third Heading is changing");
		//This is to change the heading back and forth
		if (idH3.textContent === string6){
			idH3.textContent = string4; 
		} else {
			idH3.textContent = string6;
		}
	}
	function mouseOut(){
		console.log("The Third Heading is changing");
		//This is to change the heading back and forth
		if (idH4.textContent === string7){
			idH4.textContent = string5; 
		} else {
			idH4.textContent = string7;
		}
	}
	//console.log(onButtonPushed);
	//button.onButtonPushed();

	console.log("Hello World from basicdom.js file");
	console.log("Logging the Document.", document);
	console.log("This is the head 1", idH1);

