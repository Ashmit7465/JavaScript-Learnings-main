const name = "Ashmit "
const repoCount = 50

// console.log(name + repoCount);//old method of writing outdated nowadays

//string interpolation syntax
// console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const str2 = new String("Ashmit")
console.log(str2);
console.log(str2[0]);
// console.log(str2.charCodeAt(4));

console.log(str2.__proto__);

console.log(str2.length);
console.log(str2.toLowerCase());
console.log(str2.charAt(5));//0-indexing
console.log(str2.indexOf('h') + 1);

const str = str2.substring(0, 4)
console.log(str);

const str3 = str2.slice(-6, -3)
console.log(str3);

const url = "https://www.ashmit.com/progress%20leetcode"
console.log(url.replace('%20', '-'));

const finalname = "ashmit-shukla-lucknow-india"
console.log(finalname.split('-'));