// bhoot jyada imp hai
// methods are FUNCTION INSIDE OBJECT

// const person = {
//    name : "Mohit",
//    age : 22,
//    walk : function(){
//     //    console.log(name , age +" is walking");// error dega,
//    // this keyword use krke access krna padega
//     // console.log(` name is ${this.name} , age = ${this.age}`);
//     console.log(this);  //  {name: 'Mohit', age: 22, walk: ƒ}
//    },
// }; 
// console.log(person); // {name: 'Mohit', age: 22, walk: ƒ}
// console.log(person.walk); // acts as callback function
// // (name,age)=>{
// //     console.log('${name} , age is ${age} now walking');
// // }
// person.walk();  //   name is Mohit , age =22 ;

// // this vo object ko point krega...jo usko call krega

function personInfor(){
   console.log(`person name  = ${this.name} , age is ${this.age}`);
}
// arrow function nhi chlre h idhr


const person1 = {
       name : "Ankush",
       age : 18,
       about : personInfor 
    }; 
    const person2 = {
        name : "Somesh",
        age : 38,
        about : personInfor 
     }; 
     const person3 = {
        name : "Ravi",
        age : 25,
        about : personInfor 
     }; 
  
// person.about();
person1.about();  // person name  = Ankush , age is 18
person2.about(); // person name  = Somesh , age is 38