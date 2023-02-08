const userMethods= {
    about: function(){
        console.log(this.name , this.age , this.email , this.address.city , this.address.pincode);
    },
    is18 : function(){
        return this.age>=18;
    }
};

function createObj(name,age, email, address){
    // const user=Object.create(userMethods);
    // object.create proto property ko set kr deta h..
    // usme referencing userMethods ki add kr deta h
    const user= Object.create(createObj.prototype); 
    user.name= name;
    user.age= age;
    user.email= email;
    user.address ={ city : address.city , pincode  : address.pincode};
    return user;
}

// function createObj mai bhi hume prototype mila h
console.log(createObj.prototype); // {}
// already hume object mil gya h...
// toh userMethods ka alg object banane k bajaye..
// hum issi prototype mai apne functions aur properties add kr dte hain

createObj.prototype.about=function(){
    // console.log("hello");
    console.log(this);
    //  console.log(this.name , this.age , this.email , this?.address?.city , this?.address?.pincode);
};
createObj.prototype.is18=function(){
    return this.age>=18;
};
const userA= createObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
const userB= createObj("Ankushwa", 17 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});
// userA.about(); // error , if const user = {}; defined
// Sanidhya 20 sna@gmail.com jbp 482001

// console.log(userB.is18()); // false

// function k prototype m property add krne ka kya fayeda h?

// userA.prototype.about();



// line 11 const user=Object.create(userMethods);
// ab humara object...prototype hai
// toh hume Object.create mai prototype set krna hoga
// as saare methods/ property humne prototyp k under define kr di h

// so const user= Object.create(createObj.prototype);  // line 14

// userB.about();// gives window object
// console.log(userA.about());
// console.log(userB.is18());
// 
// line 56 output is window object becoz
// line 28 (createObj.prototype.about=()={})and
//  line 33 mai createObj.prototype.is18=()=>{}
//  humne is18 aur about function ko arrow function banaya h
// arrow function m humesha this ki value surrounding se aati h
// means ek lexical order m bhar
// so iss case m humara this WINDOW object hai
// isliye about function  mai window obj print hora h


userA.about(); 
// address: 
// city: "jbp"
// pincode: 482001
// [[Prototype]]: Object
// age: 20
// email: "sna@gmail.com"
// name : "Sanidhya"

// [Prototype]] ==== proto in js
// : Object
// about: ƒ ()
// is18: ƒ ()
// constructor


console.log(userB.is18()); // false





