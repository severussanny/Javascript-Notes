// new keyword

function createUser(name ,age){
    this.name= name;
    this.age= age;
}

 // function kuch return nhi kia h...
 // but hum new keyword ka use krke object banayenge

 const user1= new createUser("mohit", 28); //{name: 'mohit', age: 28}
 console.log(user1);

 createUser.prototype.about= function(){
    console.log(this.name, this.age);
 };
  
 // new 3 kaam krra
// 1. empty object create krra h.... this = {}
 // 2. return this 
// yahan pr const user= Object.create(createObj.prototype); 
// hum prototype ki value khud set krre the..ki ussi function k prototyp ko point krre
// new keyword yeh cheeze khud set kr dega

// [Prototype]]: Object
// constructor: ƒ createUser(name ,age)

user1.about(); // mohit 20


