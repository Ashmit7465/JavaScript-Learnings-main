//arrays

// const myArr = [1, 2, 3, "Ashmit", true]//array are resizable
// console.log(myArr[0]);//0 - based indexing
//Javascript objects share shallow properties - same reference point

const myHereos = ["Shaktiman", "Nagraj"]

const arr2 = new Array(1, 2, 3, 4);
arr2.push(6)
arr2.push(7);
arr2.push(8)
// arr2.pop();//removes the last element of the array

// arr2.unshift(9);//adds at the start of the array very time consuming
// arr2.shift();//removes the 9 inserted 
// console.log(arr2);

// console.log(arr2.includes(9));
// console.log(arr2.indexOf(9));//return -1 if not found

// const arr3 = arr2.join(',');//stores as a string
// console.log(arr3);

// console.log(arr2.length);

//slice, splice operations
console.log("A", arr2);
const myn1 = arr2.slice(1, 3);//substr jaisa hai (startindex, length)
console.log(myn1);
console.log("B", arr2);

const myn2 = arr2.splice(1, 3);//3 also included
console.log(myn2);
console.log("C", arr2);//splice ne baaki uda diye baaki bache index hi hai array mein


