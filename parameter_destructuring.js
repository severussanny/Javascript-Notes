// parameter destructuring
// react m kaafi jyada use hota h
// object k saath use krte h

const person={
    name : "Sanidhya",
    gender : "Male",
    phone : "6260310290",
    age : 22
}
// console.log(person);

// const printDetails=(person)=>{
//     console.log(person.name);
//     console.log(person.gender);
//     console.log(person.age);
// }
// printDetails(person); // sanidhya male undefined

const printDetails=({phone , age})=>{
    console.log(phone, age); // 6260310290 22
}
printDetails(person); // object destructing into parameters


 




