const user1 = {
    name : "Sanidhya",
    age : 22 ,
    about  : function(){
        console.log(this);
        console.log(this.name , this.age);
    }
 };
//  user1.about();
 // don't do this mistake
const myFun= user1.about;
// about call nhi kia h....bas uska reference myFun mai store kr lia h
myFun(); // undefined

// this ki value hume tb pata lagti hai...jb hum method ko call krte hain
// const myFun= user1.about; idhr humne call nhi kia h..bas store kia h function
// similar to below
// const myFun = function(){
//     console.log(this);
//     console.log(this.name , this.age);
// }; 

// myFun(); ---> window object hi aayega ...as seen before

//const myFun= user1.about; reference store krte time binding nhi hogi this ki
// binding krne k liye we use bind

 const myFunc= user1.about.bind(user1);
 myFunc();
// console.log("ddddddddddd");









