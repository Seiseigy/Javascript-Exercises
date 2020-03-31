'use strict'

/*
Arrays exercises
1. Ask the user for 6 numbers
2. Show the entire array in the body of the page and in the console
3. Order it and show it
4. Reverse the order and show
5. Show how many elements the array has
6. Search a user entered number and its index
*/

var numbers = new Array();
var userInput = "NaN";
// Functions
// Write number list function
function writeNumbers(numbers){
	numbers.forEach((element,index)=>{
	document.write("<li>"+element+"</li>");
	})
}

// Enter a correct number
function askCorrectNumber(number){
	do{ 
		userInput = Number(prompt("Enter a number"));
		if(isNaN(userInput)){
			alert("Enter a correct number");
		}else{

			break;
		}
	}while(1);
	return userInput;
} 

// Verify if its a correct number and push in the array
do{
userInput = askCorrectNumber(userInput);
numbers.push(userInput);
}while(numbers.length<6);

// 2. Show the entire array in the body of the page and in the console
document.write("<h1> List of numbers </h1>");
writeNumbers(numbers);
console.log(numbers);

// 3. Order it and show it
document.write("<h1>Ordered list </h1>")
numbers.sort(function(a, b){return a-b});
writeNumbers(numbers);

// 4. Reverse the order and show
document.write("<h1>Reverse ordered list </h1>")
numbers.reverse();
writeNumbers(numbers);

// 5. Show how many elements the array has
document.write("<p>The number list has "+numbers.length+" elements </p>")

// 6. Search a user entered number and its index

// Ask for the number
alert("Now please search a number");
userInput = askCorrectNumber(userInput);

// Find it (or not) and its index
var numberFind = numbers.find(number => number == userInput);
var numberIndex = numbers.findIndex(number => number == userInput);

if(numberFind==undefined){
	document.write("<p> Your number is not in the list </p>");
}else{
	document.write("<p> Your number is in the list with index of "+numberIndex+"</p>");
}

