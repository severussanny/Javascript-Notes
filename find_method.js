// find krne k liye use hota h
// callback function true ya false return krna chahiye
// 1st value jo milegi uss criteria ko satisfy krte huye...vo return hogi

const users= [
    {name: "Sanidhya", age: 19},
    {name: "Somesh", age: 29},
    {name: "Ankush", age: 16},
    {name: "Abhishek", age: 26},
];
const obj= users.find((user)=> user.name==="Ankush");
console.log(obj.name , obj.age);