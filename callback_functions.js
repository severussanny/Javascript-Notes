// callback functions

const fun2=(name)=>{
    console.log(" inside fun2 ");
    console.log(name);
}

const fun1=(callback)=>{
    callback("sanidhya");   // function hi input parameter m pass kr dia
    console.log(" inside fun1 ");
}
fun1(fun2); // 
//inside fun2 
// undefined   {as name pass nhi kia callback() mai }
// inside fun1

// if callback("sanidhya") pass kia
//inside fun2 
// sanidhya
// inside fun1

// asynchronous programming m use krenge callback functions
// koi b function ko input lena aur call krna , usko call back function bolte hain
// data aaya sql se..uss data ko call back function m pass kr dia
// isliye mainly use hota h call back function

