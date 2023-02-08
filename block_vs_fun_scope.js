// block scope vs function scope

// let and const are block scope
// var is function scope

 {
    // block in js
 }

{
    let firstName="Sanidhya";
    const lastName="Gupta";
}
//console.log(firstName); // error as let is block scope..block k bahar can't access
//console.log(lastName);// same erroe
// {
//     let firstName="Sanidhya";
//     console.log(firstName);
// }
// {
//     let firstName="Ankush";
//     console.log(firstName);
// }
// const firstName="Abcg";
// console.log(firstName); 

// var case
// var is function scope
{
    var firstName="abcd";
}
// console.log(firstName); // var k case m accessable hote h variables block k bhar b

{
    var firstName="xxxx";
    // console.log(firstName);
}

// yeh pura ek function jaise treat hota h....var case m
// if(){

// }
// while(){

// }   yeh sb bhi blocks hi hain
 if(true){
    let c="hbwhfb";
    var d="rhgrgr";
    // console.log(d);
    // console.log(c);
 }
//console.log(c); // let k case m error as let is block scope
// console.log(d);  // var k case m print hoga "rhgrgr"


let myVar="Anushka";
const myApp=()=>{
   if(true){
    let myVar= "Sanidhya";
    console.log(myVar);
   }
   console.log(myVar); // let k case m error as let is block scope
   // if block k bahar access krr rahe hain isko
   // isme ANUSHKA print hoga..kyuki lexical search hoga myVar
}
myApp();

// if var krta..toh kahin pr b acces kr skte inside function
// isliye log LET ya CONST jyada prefer krte h becoz of its restrictions

