const user = {
    username: "Hitesh",
    price: 5000,
    welcomeMessage: function() {
        console.log(`${this.username} ,  Welcome to the website`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam"
user.welcomeMessage();//Sam aa jayega kyuki hamne value harcode nahi ki thi hamne current context ke liye kaha tha this keyword ke through

console.log(this);//{} empty object hai jab ham node environment mein hai

function func() {
    //hint of change
    username: "Hitesh"
    console.log(this.username);//undefined  as yeh concept sirf objects mein kaam aata hai
}

func();
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 83.20050001144409,
      nodeStart: 5.6564000248909,
      v8Start: 12.016200006008148,
      bootstrapComplete: 58.71880000829697,
      environment: 31.07310000061989,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1694860283991.897
  },
  fetch: [AsyncFunction: fetch]
}
*/

//Arrow Functions

const temp = () => {
    username: "Maddinson"
    console.log(this);//yha {} aayega
}

// temp();

// const addtwo = (num1, num2) => {
//     return num1 + num2 + 2;
// }

//implicit return parenthesis use nahi karte hum aur return hata do ek line ka code tha func ka yeh maan lete hai hum
// const addtwo = (num1, num2) => num1 + num2 + 2;
const addtwo = (num1, num2) => ({username: "Hitesh"})
//Tip: Curly braces use hua toh return use karna padega warna nahi use karna padega -> React mein kaafi helpful hoti hai yeh technique

console.log(addtwo(3, 6));

const myArr = [2, 3, 4, 5, 6, 7]
// myArr.forEach() yha pe bhi arrow functions likhte hai


