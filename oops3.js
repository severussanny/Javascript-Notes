// vvvvvvimp in js
const userMethods= {
    about: function(){
        console.log(this.name , this.age , this.email , this.address.city , this.address.pincode);
    },
    is18 : function(){
        return this.age>=18;
    }
};


function createObj(name,age, email, address){
    // const user={};//
    // PROTO KA use krke object create krenge as seen in proto_objectCreate file
     const user = Object.create(userMethods);
    user.name= name;
    user.age= age;
    user.email= email;
    user.address = address;
    
    return user;
}


// if kaafi saare methods hain...toh sbko add krna padega createObj mai
// if glti se koi method ki referencing krna bhul gye...toh error problem aajayegi
// usko avoid krne k liye new way

const userA= createObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
const userB= createObj("Ankushwa", 34 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});

console.log(userA.is18()); // true
// isme user k pass is18 method nhi h...
// but proto ka use krke humne saare methods user m daal diye hain
// js ab userMethods m jaakr is18 method dhundega

// userMethods ka reference store kr lia h..proto ki hel se...

//

