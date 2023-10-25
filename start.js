// starting js with chai aur javascript
// Chai and code series 
// sheryians coding school
// Coding Blocks

 //variables
// const accountId = 100;
// let accountEmail = "abcd@gmail.com"
// var accountPassword = "12345"
// city = "Hyderabad"
// console.log(accountId);
// console.table([accountId, accountEmail, accountPassword, city]); 

// Datatypes 
let name = "Abdul";
let age = 5;
let value = true;

// primitive datatypes
// number
// bigint
// string
// boolean
// null: this is standalone value, null is an object
// undefined : no value initialized
// symbol : used for unqiueness
// check for NaN

// ** use typeof operator to get the datatype

// Datatypes - Conversion

//let score = "33"; 
//let score = "this is maths";
// let score = ""
// console.log(Boolean(score));

// Number(), Boolean(), String(), 
// "33" => 33
// "33jkljk" -> NaN
// "" => false
// "abcd" => true
// true => 1
// false => 0

// OPERATIONS
/*
    console.log(2+2);
    console.log(2*2);
    console.log(2-2);
    console.log(2/2);
    console.log(2%2);
    console.log(2**2); // power
*/

// there are many confusing type of variable assignments, operations like 1+ "2" +3 etc, which are not used 
// in production and is considered as bad practice, just these are used to test js knowledge in interviews sometimes
// write the code with best readability, resuability and should be optimized

// COMPARISION OF DATATYPES IN JS 
/* 
examples:
1 > 2
1 < 2
1 >= 2
1 <= 2
1 == 2, other variant checking datatype als0
1 === 2 Also known as Strict Check
"2" > 1
"2ab" > 1
typical variants in comparision:
    null > anyNumber
    always remember 0 is considered false
    Null, NaN, undefined these behave differently
    considering engines or any other reason 

*/

// DATATYPES SUMMARY
/*

Js is a dynamiccally types language, use "typeof" to get the return type of any vairable
    Primitive datatyes:
    String
    number // all floats, everything is number only
        boolean
        null
        undefined
        symbol
        bigint

    Reference (non primitive):
    Array :
        const a = [1, 2, 3, 4, 5]
    Objects
        const obj = { 
            name: "dem0",
            age: 5
        }
    Functions // functions can be treated same as variables
        const mutliply = function()  {
            console.log("this is mutliply function");
        }
*/

// example for symbol
// const id = Symbol("abcd");
// const anotherId = Symbol("abcd");
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId) // this gives false
// this symbol datatype gives uniqueness to any value
// so better for using it in projects for userid or something 

// Stack and heap memory in js

/*
        Stack memory: for primitive data types, you always get a copy of the
        value not the address of the variable 
        if we do 
        let a = 10;
        let b = a;
        then 
        b = 20
        the value of a is still 20 as b is just a copy of a, not the reference

        Heap memory: The reference memory uses the heap memory
        in a object 
        let ob1 = {
            name: "tomato";
        }
        let ob2 = ob1; now the ob2 is using the same memory of ob1
        that means if you change the value through any ob1 or ob2 it will reflect 
        in both the objects, names are different but the memory is same 
        ob2.name = "potato";
        then ob1.name is also changed to potato
        
*/