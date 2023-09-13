const score = 400
console.log(score);

const balance = new Number(100)
console.log(typeof balance);

const balance2 = new Number(100.4)
console.log(balance.toString().length);
console.log(balance2.toFixed(2));//sets precision value to 2

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2));//count of 2 entioned in brackets is starting from left side of decimal point
console.log(typeof otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

console.log(hundreds.toLocaleString('en-UK'));

//++++++++++++++++++++++++++++++++++++++++++++++++Maths Library in JS+++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-345));
console.log(Math.round(4.6));

console.log(Math.ceil(4.6));
console.log(Math.min(1, 8, -3, 1001, -43, 0));
console.log(Math.max(1, 8, -3, 1001, -43, 0));
console.log(Math.sqrt(76));

console.log(Math.random());//Always give values between 0 and 1
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);