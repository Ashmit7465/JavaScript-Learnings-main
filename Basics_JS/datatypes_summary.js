//Primitive
//7 types : String, Number, null, defined, symbol, bigInt, Boolean

//Non-Primitive : Reference data types
//Array, Objects, Functions

/*JavaScript is a dynamically typed language, which means that data types of variables are determined 
by the value they hold at runtime and can change throughout the program as we assign different values
to them. */

const score = 100
const score2 = 100.3

const isLoggedIn = true
const isLoggedFalse = false
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id == id2);

const largeNumber = 3169824941986294924837713n

const heroes = ["Sahktiman", "Chota Bheem", "Nagraj", "Doga"]
let myObj = {
    name: "Ashmit",
    age: 20
}

const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof largeNumber);
console.log(typeof myFunc);
console.log(typeof id2);

console.table([score, score2, id, id2, largeNumber])

//Stack (Primitive) and Heap(Non-Primitve)
let name = "HelloCode"
let name2 = name
name2 = "HelloAgainCode"
console.log(name);
console.log(name2);

let user1 = {
    email: "ashmit@gmail.com",
    upiId: "ashmit@ybl"
}

let user2 = user1

// console.log(user2);
user2.email = "ashmitshukla18@gmail.com"
console.log(user1);
console.log(user2);

 