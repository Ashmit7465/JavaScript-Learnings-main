//Dates in JavaScript

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myNewDate = new Date(2023, 0, 23)
// console.log(myNewDate);
console.log(myNewDate.toDateString());

let mysecondDate = new Date(2023, 1, 21, 5, 16)
console.log(mysecondDate.toLocaleDateString());
console.log(mysecondDate.toLocaleString());

let date2 = new Date("2022-04-23")
// console.log(date2.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);//a large value in milliseconds from january 1st 1970
console.log(date2.getTime());

console.log(Math.floor(Date.now()/1000));//divide by 100 to convert to seconds

let date = new Date()
console.log(date);
console.log(date.getTimezoneOffset());
console.log(date.getMonth() + 1);

date.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})