// jitne users banenge...utne methods create honge....utni memory jayegi
// method har user obj k liye same h..toh baar baar banane se memory space waste


const userMethods= {
    about: function(){
        console.log(this.name , this.age , this.email , this.address.city , this.address.pincode);
    },
    is18 : function(){
        return this.age>=18;
    }
};

function createObj(name,age, email, address){
    const user={};
    user.name= name;
    user.age= age;
    user.email= email;
    user.address = address;
    user.about= userMethods.about ; // reference store kr lia h
    // jb js ko about function call krna hoga..
    // toh userMethods pr jaakr call hoga
    user.is18 = userMethods.is18 ; // reference krra h userMethods vale methods ko
    return user;
}
const userA= createObj("Sanidhya", 20 , "sna@gmail.com", {city : "jbp", pincode : 482001});
const userB= createObj("Ankushwa", 34 , "ankush@tekion.com", {city : "lucknow", pincode : 456001});

// userMethods.about.call(userA);//Sanidhya 20 sna@gmail.com jbp 482001
// userMethods.about.call(userB);// Ankushwa 34 ankush@tekion.com lucknow 456001
 userA.about(); //  Sanidhya 20 sna@gmail.com jbp 482001
userB.about(); // Ankushwa 34 ankush@tekion.com lucknow 456001

// reference store krne se memory ko wastafe nhi hogi
// har baar jb objects create honge...toh ab yeh methods create nhi honge...
// simply iske reference pr jaakr hum apna object pass krre hain



