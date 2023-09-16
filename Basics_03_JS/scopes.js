// let a = 10
// var b = 20
// const c = 30

// // var c = 300
// let a = 200
// if(true) {
//     let a = 10
//     const b = 20
//     // var c = 30//bahar bhi print ho jata hai var
//     console.log("Inner : " , a);
// }

// console.log("Outer : ", a);

// for(let i = 0; i < arr.length; i++)
// {
//     const element = arr[i]
// }


// console.log(a);
// console.log(b);
// console.log(c);

//Onto Nested Scoping
// function one() {
//     const username = "Sam"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }

//     // console.log(website);

//     // two();
// }

// one();

if(true) {
    const username = "james"

    if(username === "james"){
        const website = "Youtube"
        // console.log(username + " " + website);
    }

    // console.log(website);
}

// console.log(username);

/* *******************************************Interesting****************************************************** */

console.log(addone(5))
function addone(num) {
    return num + 1;
}

addtwo(5);//yha likhne pe error aa rha is declaration pe  "ReferenceError: Cannot access 'addtwo' before initialization"
const addtwo = function(num) {
    return num + 2;
}