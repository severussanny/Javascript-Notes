// very very imp methods
// call apply bind

const f1=()=>{
    console.log("hello world");
}
// f1.call();
// f1(); // same as above 
function personInfo(hobby , favMusic){
    console.log(this.age , this.name , hobby , favMusic) ;
}
const user1 = {
   name : "Sanidhya",
   age : 22 ,
   aboutFun : personInfo
};

const user2 = {
    name : "Ankush",
    age : 24 ,
};

// hume user2 k liye personInfo function run krana hai
// personInfo user1 ka method h
user1.aboutFun.call(user2); // 24 'Ankush' , this ki binding user2 k saath hai
user1.aboutFun.call(); // undefined '' 
// undefined becoz koi this value pass nhi kia hai humne call k andar

// chahe user1 k liye hi kyun na call krna pade...mention krna hoga 
user1.aboutFun.call(user1); // 22 'Sanidhya'

user1.aboutFun(); // 22 Sanidhya
 
user1.aboutFun.call(user2 , "guitar", "tu hi meri shab hai");


function about2(hobby , favMusic) {
    console.log(this.age , this.name , hobby , favMusic) ;
}

about2.call(user1, "running", "ilahi"); // 22 'Sanidhya' 'running' 'ilahi'

about2.call(user2, "bad minton" ); // 24 'Ankush' 'bad minton' undefined



// apply
// same as call, internally call ko hi implement krta h
// bas arguments alg pass krne k bajaye.....list / array pass hota h

about2.apply(user1 , ["cp" , "jo bheji thi dua"]);
about2.apply(user2 , ["chess" , "tere liye"]); 


// bind
// function return krta h bind

const func= about2.bind(user1, "cp" , "jo bheji thi dua");  //22 'Sanidhya' 'cp' 'jo bheji thi dua'
func(); // bind return kia func..now func call

//  js mai execution context , how js really works





