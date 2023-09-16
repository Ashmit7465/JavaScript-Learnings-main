//Immediately Invoked Function Expressions

(function temp() {
    console.log(`DB CONNECTED`);
})();//yha neeche wala nahi chalta function isliye yha semiclon lagaya
// temp();

//tip ()() first parenthesis mein function likho and second parenthesis gives us the power to 

( (name) => {
    console.log(`DB CONNECTED TWICE ${name}`);
} )('Ashmit');

