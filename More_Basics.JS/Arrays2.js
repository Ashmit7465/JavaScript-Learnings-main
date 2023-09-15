const marvel_heroes = ["Iron Man", "Thor", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes);//array ke andar doosra arry ek element ki traah aa gyi

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);//print batman

// const arr3 = marvel_heroes.concat(dc_heroes);//yeh theek hai [ 'Iron Man', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
// console.log(arr3);

//spread operator
const arr = [...marvel_heroes, ...dc_heroes]//[ 'Iron Man', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
console.log(arr);

const arr2 = [1, 2, 3, [4, 5 ,6], 7, [6 , 7, [4, 5]]]
const usable_arr = arr2.flat(Infinity);//bracket ke andar kitni depth tak flat karna hai yeh likhna hota . simple infinity likh ke JS dekh lega kaha tak jana hai flat karne ke liye
console.log(usable_arr);
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/
console.log(Array.isArray("Ashmit"));//false dega
console.log(Array.from("Ashmit"));
console.log(Array.from({name: "Ashmit"}));//batana padega kiska array banana hai //interesting case hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2, score3));
/*of(...items: any[]): any[]
A set of elements to include in the new array object.
Returns a new array from a set of elements. */