// closures
// first time : 30- 40%
// analyse : 70 - 80 %
// real example : 100 %

// function can return functions
 // js m functions ko hum ek variable m b store kr skte hain
 //

// function outerFun(){
//     function innerFun(){
//         console.log("this is inner func");
//     }
//     return innerFun;
// }
// const ans= outerFun();
// // ans m function stored h
// console.log(ans); // 
// // ƒ innerFun(){
// //     console.log("this is inner func");
// // }

// ans(); // this is inner function

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName , lastName);
    }
    return printName;
}
const ans= printFullName("Sanidhya" ,"Ranjan Gupta");
ans(); // sanidhya ranjan gupta


















