// bhoot imp h aur kaafi jyada use hota h react mai
// map method
// similar to forEach...input mai callBack function lega

const arr=[23,54,75,14,90];
const squareFun= num =>{
    // console.log(num , "square is ", num*num);
    return num*num;
};

// console.log("jjj");
// arr.forEach(squareFun);


//arr.map(squareFun);
// output mai kuch show nhi hoga
// map fun humesha ek naya array banayega

const squareNumArray= arr.map(squareFun); // squareNumArray mai array stored h
console.log(squareNumArray); // [529, 2916, 5625, 196, 8100]

const emptyFun = (num)=>{
//    console.log(num);
};
const emptyArray= arr.map(emptyFun);
console.log(emptyArray); //  [undefined, undefined, undefined, undefined, undefined]
// undefined becuse...
// map use krke jo callback function return krega vo store hoga
// but here callback function ka return type undefined h... '
// so har element k liye undefined store hoga
// as kuch return nhi kia..by default undefined return hota h

const isEvenArray = arr.map((num)=> num%2===0); // num even or odd
console.log(isEvenArray);
// 23,54,75,14,90
// [false, true, false, true, true]

// map method use kb hota h

// given array of objects
const users= [
    {name: "Sanidhya", age: 19},
    {name: "Somesh", age: 29},
    {name: "Ankush", age: 16},
    {name: "Abhishek", age: 26},
];
const storeAge= users.map((user)=>{
   return user.age;
});
console.log(storeAge);


 