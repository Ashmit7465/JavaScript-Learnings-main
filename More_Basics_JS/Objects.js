//Objects can be declared in two ways : One as a literal and One as a constructor
//Singleton : jab bhi hum constructor se object banaye singleton banta hai tab

const mySym = Symbol("key 1")//isse kaise insert karenge as a key in the object woh dekhte hai

// object literals
const JS_user = {
    name: "Ashmit",
    "Full Name": "Ashmit Shukla",
    [mySym]: "myKey1",
    age: 18,
    location: "Lucknow",
    email: "ashmit@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Saturday", "Monday", "Wednesday"]
}

// myarr = [0, 1, 2, 3]

// console.log(JS_user.email);
// console.log(JS_user["email"]);
// console.log(JS_user["Full Name"]);//isko dot se access nahi kar payenge
// console.log(JS_user[mySym]);

// JS_user.email = "ashmit@yahoo.com"
// Object.freeze(JS_user);//ab aur koi changes nahi ho payenge JS-user mein
// JS_user.name = "John"//koi error nahi aaayega but change nahi hogi as hum freeze kar chuke hai already object ko
// console.log(JS_user);
/*
{
  name: 'Ashmit',
  'Full Name': 'Ashmit Shukla',
  age: 18,
  location: 'Lucknow',
  email: 'ashmit@yahoo.com',
  isLoggedIn: false,
  LastLoginDays: [ 'Saturday', 'Monday', 'Wednesday' ],
  [Symbol(key 1)]: 'myKey1'
}
*/

JS_user.greeting = function() {
    console.log("Hello JS_User.");
}

JS_user.greeting2 = function() {
    console.log(`Hello JS User, ${this["Full Name"]}`);
}

// console.log(JS_user.greeting);
console.log(JS_user.greeting()); 

console.log(JS_user.greeting2());
/*
[Function (anonymous)]
Hello JS_User.
undefined
*/





