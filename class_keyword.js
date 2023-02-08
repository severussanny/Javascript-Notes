// class keyword
// classes are fake in js
//bcoz internally new keyword vala hi implementation h
 

class CreateObj{
   constructor(name,age, email, address){
        console.log("constructor called");
        this.name= name;
        this.age= age;
        this.email= email;
        this.address ={ city : address.city , pincode  : address.pincode};   
   }
   about(){
    console.log(this.name , this.age , this.email , this?.address?.city , this?.address?.pincode);
   }
   is18(){
    return this.age>=18;
   }
   func(b){
    console.log(b);
   }
}
// prototyp m yeh sb khud hi add ho jayenge ( about and is18 );
const userA= new CreateObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
const userB= new CreateObj("Ankushwa", 17 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});
// bina new keyword k class constructoir not be called

 console.log(Object.getPrototypeOf(userA)); 
 // {constructor: ƒ, about: ƒ, is18: ƒ}
// prototyp m yeh sb khud hi add ho jayenge ( about and is18 );
userB.func("Ankush Sonkar"); // A S printed
 

