/*--- make me an email
    Write the function that will make this code work.*/
console.log("Make me an Email");
// // ---- put function here ----

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

// Write the function after this comment ---
function assertEquals(p1, p2) {
	if(p1 === p2) {
		return true;
	} 
	else {
		console.log("The Values are not equal-->");
	}
	console.log(" *** the two values are not the same");
	console.log("p1-->", p1);
	console.log("p2-->", p2);
	return false;
}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

/*Write the function to format an email based on an array*/
// Write the function after this comment ---
// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmail(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmail(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmail(['amy','jones']));

// Write a function that will receive an object / map. Create an evolveu email from the object. 

// Copy and paste the code provided. Only put code in-between the two comment lines.
function makeEmailObj(arrayName) {
	console.log(arrayName);
	return arrayName["fname"] + "." + arrayName["lname"] + "@evolveu.ca";
	
}

// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jone@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////The new section of the Practice Code for 18/03/2019
//This exercise will use two functions you have written in previous exercises: makeEmailObj and assertEquals.
//Write a function that will take an array and return an array of emails.
//The new function you are writing today will call makeEmailObj that you written in a previous exercise.
////////////////////////////////////////////////////////////////////////////////////////////////
const data = {
    staff: [
        {fname:"Jane", lname:"Smith", balance:10},
        {fname:"Liam", lname:"Henry", balance:1000},
        {fname:"Emma", lname:"Jones", balance:1330},
        {fname:"Olivia", lname:"Notly", balance:310},
        {fname:"Noah", lname:"Ho", balance:503},
        {fname:"William", lname:"Lee", balance:520},
        {fname:"Benjamin", lname:"Amis", balance:150},
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// Write the function after this comment ---
function loopStaff(loop1) {
	let  a = [];	
	console.log("I am inside the function");
	console.log(loop1);
	for ( i = 0; i < loop1.length; i++) {
		a.push(makeEmailObj(loop1[i]));
		// console.log(a);
	}
	return a;
}
// and before this comment ---

console.log('-----loopStaff')
 const staffEmail = loopStaff(data.staff);
 // console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////The new section of the Practice Code for 19/03/2019
//This exercise will use two functions you have written in previous exercises: makeEmailObj and assertEquals.
//Write a function that will take an array and return an array of emails.
//Do the same assignment as yesterday using the two forms of for
////////////////////////////////////////////////////////////////////////////////////////////////

function loopWithForOf(loop2) {
	let b = [];
	console.log("I am inside the loop with for of function");
	console.log("loop2 = ", loop2);
	for (let i of loop2) {
		console.log("Loop 2 = *****************", i);
		b.push(makeEmailObj(i));
	}
	 return b;
}

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

function loopWithForIn(loop3) {
	let  c = [];
	console.log("I am inside the function of loop with For In");
	console.log("loop3 = ", loop3);
	for (let i in loop3)	{
		 c.push(makeEmailObj(loop3[i]));
		 console.log("For in loop C = ", c);
	}
	return c;
}

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////The new section of the Practice Code for 20/03/2019
//This exercise will use two functions you have written in previous exercises: makeEmailObj and assertEquals.
//Write a function that will take an array and return an array of emails.
//Do the same assignment as yesterday using the two forms of each and map
////////////////////////////////////////////////////////////////////////////////////////////////

// function pushEmail (o) {
// 	// makeEmailObj(o);
// 	let  d = [];

// 	d.push(makeEmailObj(o));
// console.log(d);
// }
function loopWithEach (loop4) {
	console.log("I am inside the function of loop with Each");
	console.log("loop4 = ", loop4);
	let  d = [];

	loop4.forEach(function pushEmail(o) {d.push(makeEmailObj(o));
		console.log(d);
	});
	return d;
// console.log(d);
	// d.forEach(makeEmailObj(loop4[i]));
	// console.log("For in loop D = ", d);
}

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

function loopWithMap(loop5) {
	console.log("I am inside the function of loop with Map");
	console.log("loop5 = ", loop5);
	let  e = [];
	loop5.map(function pushEmail(o) {e.push(makeEmailObj(o));
		console.log(e);
	});
	return e;
}
console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

//////////////////////////////////////////////////////////////////////
//Using one of the callback functions we researched in the last exercise 
//(but may have not used previously) create a new array for balances >= 1000. 
//Copy and paste the following code. 
//////////////////////////////////////////////////////////////////////



// let largeBalances = data.staff.??? (insert code here)  ???
// // console.log(largeBalances);
// assertEquals(largeBalances[0].fname, "Liam");
// assertEquals(largeBalances[1].fname, "Emma");

//////////////////////////////////////////////////////////////////////
//Write a reduce function to total the balances.
//////////////////////////////////////////////////////////////////////

// let tot = data.staff.reduce((??? insert code here ???));
let tot = data.staff.reduce(function (accumulator, pilot) {
	return accumulator + pilot.balance;
}, 0);
console.log(tot);
assertEquals(tot, 3823);
console.log("The total of the balance is: ", tot);

//////////////////////////////////////////////////////////////////////
//Exercise - Play Computer
//This is a very important skill that must be practised. Look at the 
//following code and play computer. If you forget how, look at Competency 103. 
//https://scrimba.com/c/cKwEerCE 
/////////////////////////////////////////////////////////////////////

// console.log('-----Function Options - - - - - - - -');

// function simpleFunction(p1) {
//     return `   simpleFunction: ${p1}   `;
// }

// const simpleArrow = (p1) => `   simpleArrow: ${p1}   `;

// const anotherArrow = (p1) => {
//     const a = 'do what ever is needed';
//     const b = 'in this error function';
//     return `   anotherArrow: ${p1}   `;
// }

// console.log(simpleFunction('what.'));

// console.log(simpleArrow('what!'));

// console.log(anotherArrow('what?'));

// console.log(function () {
//     return 'what ever is new!';
//     }()); //the () in the end of the function is what is making it return that value

// console.log('-----Call Back - - -');
 
// let count = 0;
// function myCounter() {
//     console.log(` we are at count: ${count++}`);
// }
 
// console.log(`myCounter Stage1: ${myCounter}`); //this line will print  myCounter Stage1: and then prints the whole function
// console.log(`myCounter Stage2: ${myCounter()}`); // this line will print  myCounter Stage2: and then excecte the function and that is because we used () after the function name
// // setInterval(myCounter, 1000); // An endless loop