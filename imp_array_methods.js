// imp array methods

// forEach
// map  ---> react m bhoot jyada use hota h...vv imp
// filter  // imp
// reduce  // imp

// forEach method

const arr=[37,83,92,82];

const multiplyByTwo=(num, indx)=>{
    console.log(`number is ${num} , index = ${indx}`);
}

// for(let indx in arr)
// multiplyByTwo(arr[indx],indx);

// yeh upar vala loop chalane ki need nhi h hume
// iski jagah we can use forEach method

// forEach input lega CALLBACK
//arr.forEach(multiplyByTwo);   // multiplyByTwo apna callback function hai
// forEach khud hi MULTIPLY_BY_TWO function mai aruguments pass kr dega

// sochna kaise h forEach lagane k liye?
 // jb saare elemnets of array pr same operation krna h...toh forEach laga do
 // loop chalane ki jgaha

// multiplyByTwo ko forEach k andr bhi define kr skte h
// using anonymous function

arr.forEach(function(num,indx){
    // console.log(`number is ${num} , index = ${indx}`);
});

arr.forEach(function(num,indx){
//    console.log(`${indx+1}th element is ${num}, multiple of 10 is ${num*10}`);
});

// real world application of forEach
// given array of objects
const users= [
    {name: "Sanidhya", age: 19},
    {name: "Somesh", age: 29},
    {name: "Ankush", age: 16},
    {name: "Abhishek", age: 26},
];

users.forEach(function({name}){
    // console.log(`name is ${name}`);
});

// forEach kaafi use hoga over For Of loop in JS
users.forEach( (user)=>{
//   console.log(user.age);
});
// forEach k ndr arrow function bna dia
