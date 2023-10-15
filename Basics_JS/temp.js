// let score = null
// console.log(typeof(score));

// let someNum = 21010307
// let stringNum = String(someNum);
// console.log(stringNum);
// console.log(typeof stringNum);

// let value = 3
// let negValue = -value
// console.log(negValue);

// let str1 = "Ashmit"
// let str2 = "Shukla"
// let str3 = str1 + " " + str2
// console.log(str3);

// console.log(1 + "2" + "2");

// let counter = 100
// ++counter;
// console.log(counter);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);

// const str2 = new String("Ashmit Shukla")
// const str3 = str2.slice(-6, -2);//peeche se 6th character se leke peeche ke 3rd character tak
// console.log(str3);

// const finalname = "ashmit-shukla-lucknow-india"
// console.log(finalname.split('-'));

// const id = Symbol('123')
// const id2 = Symbol('123')

// console.log(id == id2);

// let name = "HelloCode"
// let name2 = name
// // name2 = "HelloAgainCode"
// console.log(name);
// console.log(name2);

// let user1 = {
//     email: "ashmit@gmail.com",
//     upiId: "ashmit@ybl"
// }

// let user2 = user1

// // console.log(user2);
// user2.email = "ashmitshukla18@gmail.com"
// console.log(user1);
// console.log(user2);
// const balance = new Number(100)
// const balance2 = new Number(100.4)
// console.log(balance2.toString().length);
// console.log(balance.toString().length);
// console.log(balance2.toFixed(2));//sets precision value to 2

// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
// console.log("A", arr2);
// const myn2 = arr2.splice(1, 4);
// console.log(myn2);


// const tinderUser = new Object();
// tinderUser.id = "1234"
// tinderUser.name = "Sammy"
// tinderUser.isLogged = true;
// console.log(tinderUser);

const course = {
    coursename : "Machine learning",
    price: "545",
    instructor: "James Foster"
}

//syantactual substitute for the code course.coursename

const {instructor: cid} = course
// console.log(instructor);
console.log(cid);


