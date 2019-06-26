// Write a web program that can take and display animals name in sorted order and with no duplicate.

//const animals_names = ['Tiger','Penguin','Lion','Tiger', 'Lion'];
const animals_names = [];
const addingAnimal = document.getElementById("addingAnimal");

function add(){
		animals_names.push(addingAnimal.value); //Input value into end of array
		addingAnimal.value = ""; // Clear the input so user doesn't have to
		document.getElementById("output").value = animals_names;
	}

// To remove duplicates
function getUnique(){
	var filteredAndSortedKeywords = animals_names
	.filter(function (keyword, index) { //removes all the duplicates from the array
      return animals_names.lastIndexOf(keyword) === index;
    })
    .sort(function (a, b) { //Sorts first the capital letters then small letters
      return a < b ? -1 : 1;
    });
    document.getElementById("output").value = filteredAndSortedKeywords;
}
console.log("This is the no duplicate", getUnique())


