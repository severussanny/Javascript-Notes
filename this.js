"use strict"
// console.log(this);
// javascript ka global object hota hai WINDOW OBJECT
// console.log(window);
function myFunc(){
     console.log(this); // undefine when use strict mode otherwise window object
    console.log("hello world");
}
myFunc(); //window obj
// myFunc window object mai add ho jaata h 
// yeh myFunc ab window object ka method bn gya h
// so jb b myFun call hoga, means window object usko call krra h
// so this keyword mai window object stored hoga
window.myFunc(); // hello world

// yeh kai baar problem create krta h
// so we use strict mode
 // "use strict"

function myFun2(){
    "use strict"
    console.log(this);
}
myFun2(); // undefined


