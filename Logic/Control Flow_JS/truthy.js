// const userEmail = "Ashmit.ai"

// if(userEmail) {
//     console.log("Got an Email");
// }

// else {
//     console.log("Did not receive an Email");
// }

/*
Falsy Values: (they are assumed)
false
0
-0
""
BigInt 0n
null
undefine
NaN
inke alawa saare true hote hai
*/

/*
Truth Values:
"0"
'false'
" "
[]
{}
function(){}
*/

const useremail = []
if(useremail.length === 0) {
    console.log("Array is Empty");
}

const myObj = {}
if(Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

/*
In Browser :
false == 0    => true
false == ''   => true
0 == ''       => true
*/            



