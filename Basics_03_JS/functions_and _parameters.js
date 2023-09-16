console.log("A");
console.log("S");
console.log("H");
console.log("M");
console.log("I");
console.log("T");

function showname() {
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("M");
    console.log("I");
    console.log("T");
}

showname();//executes the function
showname;//kuch nahi print hoga kyuki yeh bas reference hai function ka

function addNum(number1, number2) {//here in the function definition number1  and number2 are called parameters
    console.log(number1 + number2);
}

addNum(3, 5);//prints 8        Here 3 and 5 are called arguments
addNum;//nothing prints just a reference
addNum();//NaN is a result as no argument is passed
addNum(3, "4");//34 is printed
addNum(3, "a");//3a is the result

const result = addNum(3, 6);
console.log(typeof result);
console.log("Result: ", result);//undefined kyuki function kuch return nahi kar rha bas print kar rha hai

function addNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    // console.log("Ashmit");//return statement ke baad ka koi code execute nahi hoga

    return (num1 + num2)//another way to return result
}

console.log(addNumbers(4, 6));//10 
console.log(typeof addNumbers(4, 6));//number

function loginusermessage(username = "James") {//default value bhi de sakte hai 
    if(username === undefined) {
        console.log("Please Enter a username");
        return
    }

    // if(!username) {//another way to write above if
    //     console.log("Please Enter a ussrname");
    //     return
    // }
    return  `${username} just logged in`
}

loginusermessage("ashmit")//kuch nhai hoga kyuki return value store bhi karni padti hai
console.log(loginusermessage());
console.log(loginusermessage("Ashmit"));


//situtation in which we do not know how many parameters will be there
function calculatePrices(...num1) {//here ... is not called spread here it is called rest operator
    return num1;
}

console.log(calculatePrices(300, 500, 400, 600, 10001));

const user = {
    username: "James",
    prices:  201
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Alcas",
    price:  2000
})

const mynewArr = new Array(20, 30, 40)
console.log(mynewArr);

function handleArray(anyArray) {
    return anyArray[1];
}
 
console.log(handleArray(mynewArr));

