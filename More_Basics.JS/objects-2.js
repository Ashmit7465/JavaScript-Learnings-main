const tinderUser = new Object();//singleton object
// const tinderUser2 = {};//annother way to declare an object  - non singleton object
tinderUser.id = "1234"
tinderUser.name = "Sammy"
tinderUser.isLogged = true;
// console.log(tinderUser);

const regularUser = {
    email: "soeone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "James",
            middlename: "Laurel",
            lastname: "Isac"
        }
    }
}

// console.log(regularUser.fullname.userfullname.middlename);

const objct1 = {1: "A", 2: "B"}
const objct2 = {3: "B", 4: "C"}
// const objct3 = { objct1, objct2}
// const objct3 = Object.assign({}, objct1, objct2)

//spread object
const objct3 = {...objct1, ...objct2}
console.log(objct3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));//as an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('id'));