// understand callback

// function myFunc(){
//     console.log('function is doing some task 1');
// }
// // iske baad ek aur func banana h
// function myFunc2(){
//     console.log('function is doing some task 2');
//     // we want pehle function1 pura apna task kre...then function 2 start ho
// }
// myFunc();
// myFunc2();
// simple method

// other method using callback
function myFunc(callback){
    console.log('function is doing some task 1');
    callback();
}
// function myFunc2(){
//     console.log('function is doing some task 2');
// }
// myFunc(myFunc2);
// same output
// function is doing some task 1
// function is doing some task 2

// way 3 ..anonymous function or arrow function

// myFunc(function(){
//    console.log('function is doing some task 2');
// });
// same output

// function getTwoNumbers(n1, n2, callback){
//     console.log(n1,n2);
//     if(typeof n1==="number" && typeof n2==="number"){
//         callback(n1,n2);
//     }
//     else{
//         console.log('wrong data type')
//     }
// }
// function addTwoNumbers(num1 , num2){
//    console.log(num1+num2); 
// }
// getTwoNumbers(20, "45", addTwoNumbers);
// 20 45
// 65
 // may be hum string b pass kr skte aur vo add ho jayegi...so usko add nhi krna
 // first check validity of datatypes
// getTwoNumbers(20,40, (num1,num2)=>{
//     console.log(num1+num2);
// });

// hum kai baar 2 callbacks pass krte hain
// succes and error case

function getTwoNumbers(n1, n2, onSuccess , onFailure){
    console.log(n1,n2);
    if(typeof n1==="number" && typeof n2==="number"){
        onSuccess(n1,n2);
    }
    else{
       onFailure();
    }
}
getTwoNumbers(20,'67', (num1,num2)=>{
    console.log(num1+num2);
}, ()=>{
    console.log('wrong input data type');
});











