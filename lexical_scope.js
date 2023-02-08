
// const myVar="Value Global";
// function myApp(){
//     // const myVar="value 1";
//     const myFun= function(){
//         //  const myVar="value 2";
//         console.log("inside my func" , myVar);  // value 2
//         // if myVar commented inside myFun
//         // then value 1 is printed

//         // if myApp vala myVar bhi commented
//         // then Javascript lexicographically search krega myApp kahan define h.
//         //.kiss function k under...then vahan search krega myVar ko
//         // so here VALUE GLOBAL will be printed
//     }
//     console.log("inside my App");
//     myFun();
// }
// myApp();


const myVar="Value global";
function myApp(){
    const myFun= ()=>{
        const myVar="Value2";
         const myFun2=()=>{
            console.log("inside myFun 2 ", myVar);
         }
         myFun2();
    }
    console.log(myVar);
    myFun();
}
myApp();

// value global
// inside myFun 2 , Value2






