console.log(2 > 1);//true
console.log(2 >= 1);//true
console.log(2 < 1);//false
console.log(2 <= 1);//false
console.log(2 == 1);//false
console.log(2 != 1)//true

console.log("2" > 1);//true
console.log("2" < 1);//false
console.log(2 < "1");//false
console.log(2 > "1");//true

//always compare two values with same datatypes

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined < 0);//false
console.log(undefined > 0);//false

// === strict check not only checks values but also datatypes