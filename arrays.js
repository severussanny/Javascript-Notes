// intro to arrays
 
let arr=[1,1,2,3,"mango", "apples", true];
console.log(arr);
arr[0]="first";
console.log(arr);

// reference type
// array reference types is object
// object {} se declare hota h

// console.log(typeof arr);
let obj={}; // object literal

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj)); 

// array mutable hota h...we can change the original array
// push pop
arr.push("cake");
arr.push(1000);
console.log(arr);
arr.pop();
console.log(arr); 
//  unshift --> starting m add krta h values array mai
arr.unshift("200");
console.log(arr);  

// shift krne se starting value hat jaati h
let removed = arr.shift();
console.log(arr);  
console.log(" removed fruit is "+removed);
// let popped...last value remove hoti h array se
let popped= arr.pop();
console.log(arr);
console.log("popped element is "+popped);

// push pop O(1)...shift unshift O(n)

// reference data type
// array is reference data type means copy create nhi hogi...pointer same address ko point krega
let arr1=["i1", "i2", "i3"];
let arr2= arr1;
console.log(arr1);
console.log(arr2);
arr1.push(100);
console.log(arr1);
console.log(arr2);

// how to clone an array
// slice method se array ki copy generate krenge aur new array m store krenge
let a1=[10,20,30];
// let a2= a1.slice(0);   
let a2= [].concat(a1);
a1.push("string");
console.log(a1);
console.log(a2);

// new way 
//using spread operator
let a3=[...a1];
a3.push("tekion");
console.log(a1);
console.log(a3);

// how to concatenate two arrays

let a4= [...a3].concat([111,222,333,"wwe"]);
console.log("array 4 : "+a4);
// 2 or more arrays combine to new array....use spread operator only
let a5=[...a3 , ...a4];
// console.log(" array5 : "+ a5);


// for loop in array
let a7=[];
for(let i=0; i< a5.length; i++)
{
    a7.push(a5[i]);
}
console.log(a7);

// use const for creating arrays
let fruits=["garpes", "mango", "apples"];
// fruits=["pineapple"];
console.log(fruits);
// use const now
const fruits2=["orange", "anaar"];
// fruits2=["wine"]; error as const hai array..toh naya array nhi bna skte
// const use krke ..already created array m change ho skte h
fruits2.push("WATERMELON");
console.log("fruits2 : "+ fruits2); 

// 90% case mai const use hoga...which means AB ARRAY KO dobara nhi banana h
// kyuki let se array vapas se assign ho skta h new value..ya gayab kr skte empty 
// banakr...vo safe nhi h development m
// reference data typ k case m const hi use hoga


// for of loop in array ---> elements dega
// kaafi used hota h

for(let frut of fruits)
console.log(frut);

// for in loop ----> index dega
for(let index in fruits)
console.log(index); 



