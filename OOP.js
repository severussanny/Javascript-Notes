// oops proto , prototype...vvvvimp in js
// create functions to create multiple objects
// c++ classes objects similar 

const user1 = {
    name : "Sanidhya",
    age : 22 ,
    email : "san@gmail.com",
    address : { city : "jbp", pincode : 482001},
    is18 : function(){
        return this.age>=18;
    },
    about : function(){
        console.log(this.name , this.age , this.email , this.address.city, this.address.pincode);
    }
 };
 user1.about();

/// function object create kreee aur return kree vo object
// c++ mai isko class bolte hain
function createObj(name,age, email, address){
    const user={};
    user.name= name;
    user.age= age;
    user.email= email;
    user.address = address;

    user.about= function(){
        console.log(this.name , this.age , this.email , this.address.city , this.address.pincode);
    }
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}

const userA= createObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
userA.about();
console.log(userA);
// {name: 'Sanidhya', age: 20, email: 'sna@gmail.com', address: {…}, about: ƒ, …}

const userB= createObj("Ankushwa", 34 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});
console.log( userB.is18());

// jitne users banenge...utne methods create honge....utni memory jayegi
// method har user obj k liye same h..toh baar baar banane se memory space waste
 
