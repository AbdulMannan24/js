console.log("hello world");
//console.log(a);
// this line is not running but the upper line is running due to interpreted language

// var let const
// never use var

// numbers strings booleans


function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet("abcd","efg"));
let a = "tata"; // it takes this as true, and "" as false, but if you compare a == true, then it gives false even when the string is not empty
if (a) {
    console.log("this works")
} else {
    console.log("this is typical");
}

// if, else 
// for loop
// Arrays, objects

let obj = {
    first: "Abdul",
    last: "Mannan",
    gender: "male"
};

let objArray = [
    {first: "Abdul", last: "Mannan", gender: "male"}, 
    {first: "mohd", last: "Mannan", gender: "male"}, 
    {first: "pri", last: "n", gender: "female"}]
for (let i = 0; i < objArray.length; i++) {
    if (objArray[i].gender == "male") { /// also objArray[i]["gender"] is one way to access
        console.log("male found");
    }
}


function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

/*
string 
.length
.indexOf()
.atindex()
.lastIndexOf()
.slice(start, end); start is included but end is not 
.substr(start, how many characters?) this is deprecated
.replace("world", "javascript");
.split()
.trim() -> removes out the spaces in the string
.toUpperCase()
.toLowerCase()

*/

/*
Number
.

Global functions
parseInt("42") -> 42
parseInt("4.2") -> 4
parseFloat("")

*/

/*
Array 
.push()
.pop()
.shift()-> removes something from the front of the array
.unshift()-> adds something to the front of the array
concating arrays:
.concat(secondArray)
-> this will concat both arrays but will return a new array
that must be stored in some variable 
.forEach(expecting some function) basically a callback

let arr = [1,2,3];


*/

/*
CLASSES 
    -> blueprint 
class Car {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    } 
    start() {
        consol.log(`${this.name} has started`);
    }
    static checkCar() {
        console.log("i am only attached to the class ")
    }
}

let tata = new Car("etios", 100);
-> this will create a car object with name etios and maxSpeed as 100.

METHODS
-> methods are the functions defined for the specific class
calling a method is always indirect means obj.method()

etios.start(); this is a method invoke using etios object

STATIC METHODS
-> This is directly associated with the class only, not to the objects
Car.checkCar(); this is a static method call  
*/

/*
DATE
let currentDate = new Date();
-> this gives you the current date of the local machine where the code gets executed
let currentTime = currentDate.getTime();
-> this gives the time in milliseconds, just check it out

*/


/*
JSON - javascript Object Notation
JSON.parse() -> converts a string into a js object
JSON.stringify() -> converts a js object into a stringified 
*/

/*
OBJECTS

*/

/*
LOOPS
*/

/*
FUNCTIONS
*/

/*
CALLBACKS
-> callbacks are functions passed as a parameter just like a
variable
-> helps improve code quality
-> follows DRY logic

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sum(a, b, callback) {
    let ans = callback(a) + callback(b);
    return ans;
} 

sum(a, b, square); here we are sending the function name as 
sum(a, b, cube); parameter so the same logic can be implemented easily
*/

/*
ANONYMOUS FUNCTION
*/

/*
SYNCHRONOUS
-> one thing at a time is synchronous
-> in a sequential order

ASYNCHRONOUS
-> opposite of synchronous
-> multiple things context switching
-> Happens in parts
-> gives the powers of multi tasking to js 
-> saves time and resource
Four main components involved in async js are :
    -> Call Stack
    -> Web Apis
    -> Callback Queue
    -> Event loop
*/

/*
PROMISES
-> this is a better way of writing asynchronous code in js 
under the hood we use only the functions provided by the js 
-> promises are used to get rid of Callbacks 

*/

/*
******* CALLBACKS ********* PROMISES ************** ASYNC/AWAIT

*/












