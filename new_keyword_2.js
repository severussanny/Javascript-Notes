// new keyword
// 1. creates empty object {}
// 2. this= {}, add properties and return this
//3. const user= Object.create(createObj.prototype);  yeh khud set krdega


// constructor fun
function createObj(name,age, email, address){
 
    this.name= name;
    this.age= age;
    this.email= email;
    this.address ={ city : address.city , pincode  : address.pincode};
    
}

createObj.prototype.about=function(){
    // console.log("hello");
    console.log(this);
    //  console.log(this.name , this.age , this.email , this?.address?.city , this?.address?.pincode);
};
createObj.prototype.is18=function(){
    return this.age>=18;
};

const userA= new createObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
const userB= new createObj("Ankushwa", 17 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});

userA.about();
userB.about(); //{name: 'Ankushwa', age: 17, email: 'ankush@tekion.com', address: {…}}
// proto APNE AAP set kr dia h new ne...createObj khud ko hi
// [[Prototype]]
// : Object
// about: ƒ () 
// is18: ƒ ()
// constructor: ƒ createObj(name,age, email, address)

console.log(createObj.prototype);// {about: ƒ, is18: ƒ, constructor: ƒ}
// prototype function ki property hai

// new keyword proto ko issi function k prototype k equal set kr dega

// agr hume new keyword laga kr kisi function ko call krna h
// toh uska first letter capital hoga
// CreateUser
