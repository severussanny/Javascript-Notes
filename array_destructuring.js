// kaafi use hota h
// array destructuring
let arr=["v1", "v2", "v3", "v4", "v5"];
let [var1, var2,  , var4]= arr;
console.log(arr);
console.log(`value 1 is ${var1}, value 2 is ${var2} , value 4 is ${var4}`);

let [newVar1, newVar2 ,  ...myNewArray]=arr;
console.log(newVar1, newVar2);
console.log(myNewArray);






