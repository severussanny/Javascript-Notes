// arrow functions

const user1 = {
    name : "Sanidhya",
    age : 22 ,
    about  : ()=>{
        console.log(this);
        console.log(this.name , this.age);
    }
 };
user1.about();
// arrow function mai khud ka this nhi hota h
// vo this ki value surrounding se leta h
// output is window function and undefined
 
 // surrounding means ek level lexical upar vala hoga this
 // here in this case
 // this ---> user1 nhi hoga
 // this iske upar vala hoga...window object


 // arrow function k this ko change nhi kr skte
 user1.about.call(user1); // same output as above
 // undefine undefined











