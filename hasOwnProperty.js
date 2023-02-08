



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

// for(let key in userA)
// console.log(key);
// actual keys-> name, age , email , address
// about and is18 ko bhi key bata raha h

// we want prototype wali keys naa dikhen...about , is18 , prototyp m added h

// hasOwnProperty()--> bool value
for(let key in userA){
    if(userA.hasOwnProperty(key))
    console.log(key);
} // name, age , email , address





