//if

// if(condition) { // executes only if true otherwise not

// }//condition can be true ot false

//Comparison operators  < , > , <= , >= , == , != , === yeh type bhi check karta hai values ke saath saath
// !== data type ke saath not eual check karta hai

// if(2 == "2") {
//     console.log("Executed 1");
// }

// if(2 === "2") {
//     console.log("Executed 2");
// }
// else {
//     console.log("Not Executed 2");
// // }

// const temperature = 42
// if(temperature < 50) {
//     console.log("Less than 50");
// }
// else {
//     console.log("greater than 50");
// }


// const score = 200
// if(score > 100) {
//     const power = "Fly"
//     console.log(`User's Power : ${power}`);
// }

// console.log(`User's Power : ${power}`);//yeh bhi execute ho jata agar var use karte toh

// const balance = 1000
// // if(balance > 500) console.log("Yes balance is greater than 500.");

// //Not a good Practice : if(balance > 500) console.log("yes"), console.log("No");

// if(balance > 500) {
//     console.log("greater than 500");
// }
// else if(balance < 750)
// {
//     console.log("greater than 500 but less than 750");
// }
// else if(balance < 900) {
//     console.log("Less than 900");
// }
// else {
//     console.log("Greater than 900");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard) {
//     console.log("Yes allowed");
// }

// if(loggedInFromEmail || loggedInFromGoogle) {
//     console.log("user Logged In.");
// }

// switch(key) {
//     case value:

//         break;

//     .
//     .
//     .
//     .
//     .

//     default:

//         break;
// }

// const month = 3

// switch(month) {
//     case 1: 
//         console.log("January");
//         break;
//     case 2: 
//         console.log("February");
//         break;
//     case 3: 
//         console.log("March");
//         break;
//     default:
//         console.log("April");
//         break;
// }

//Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15 //10 jo bhi first value mile
//Database handle karte work errors handle karne mein help karta hai yeh function

console.log(val1);

//Ternary Opeartor
//condition ? true : false;

const iceCreamTea = 100
iceCreamTea <= 80 ? console.log("Less than 80") : console.log("Greater than 80");