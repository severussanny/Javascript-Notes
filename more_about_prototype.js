let numbers=[7,2,4,9];
 
// arrays k pass kaai sare methods hain... vo usko prototyp se milre hian
// prototyp sirf funtion ka hota h

// internally js Array function/ constructor use krta h create krne k liye array ko
// uske prototyp m sb methods define hote h
let array= new Array(1,2,3);
// similar to 
// let user1= new CreateUser();
console.log(Array.prototype);
// array ka prototype ek array milra h
// jbtki actual m prototyp ek object h

console.log(Object.getPrototypeOf(numbers)); // same  as abouve
// array ka prototype ek array milra h

console.log(Array.isArray(Array.prototype)); // true

// prototype change kr skte h
// array list kuch b bna skte h... bydefault obj

function hello(){
    console.log("hhhhhhh");
}
hello.prototype=[];
console.log(hello.prototype); //[]
hello.prototype.push(10000);
hello.prototype.push("shvdvhdfh");
console.log(hello.prototype); //(2) 10000, shvdvhdfh

// prototyp m khud se baar baar funtion add krna mushil nd tedious kaam h
// inheritance k case m functions baar baar define krne padenge
// we will use class keyword



