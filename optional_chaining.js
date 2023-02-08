// optional chaining

const user={
    name : "Sanidhya",
    // address :{
    //     houseNo : 17,
    //     block : "Orchid",
    //     pincode : 482001
    // },
    contact : "6372878382"
};
console.log(user);
// console.log(user.address.block); 
// if address commented , then Uncaught TypeError: Cannot read properties of undefined (reading 'block')

// currently jo property / attribute hum access krr hai vo absent h
// but kuch time baad vo aagyi h
// toh hum chahte h access krte time error show naa ho
// undefined de sahi h..but eroor na de
// ?.
console.log(user?.name);
// this means if user exists .. toh uska name do, if not then undefined aayega
console.log(user?.address?.pincode);
// this means ..if user exixts...toh address do.. but as address does not exixts
// so undefined print hoga
let user2;
console.log(user2?.address?.pincode); // undefined 
/// nested objects k case mai ?. use hota h


// null and undefined k case m use hota h 
