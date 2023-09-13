// let score = "33abc"

let score = null

let scr = "33"
// console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(scr)
let temp = Number(score)
console.log(typeof valueInNumber);
console.log(temp);//gives NaN means Not a Number

//"33" can be converted to number but "33abc" will give NaN true/false give 1/0
let isloggedIn = false;
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

//1 -> true 0 -> false
//"" -> fasle
//"ashmit" -> true

let someNum = 21010307
let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);

/**************************operations *********************************/
let value = 3
let negValue = -value
// console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);//trated as 2^2
console.log(4 / 3);
console.log(2 % 3);

let str1 = "Ashmit"
let str2 = "Shukla"
let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32 
console.log(1 + "2" + "2");

console.log(+true)
// console.log(true+);//error dega
console.log(+"");

// Not a good practice
let n1, n2, n3
n1 = n2 = n3 = 2 + 2
console.log(n1 + n2 + n3);

let counter = 100
++counter;
console.log(counter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"