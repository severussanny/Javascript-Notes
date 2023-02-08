// sets
// it is iterable
// stores data , have its own method
// can't access using index
// order not gurantee , 
// unique elements only

const setNum= new Set([3,2,1,2,3,4]);
console.log(setNum);  // 3,2,1,4
setNum.add(10); 
setNum.add("tekion"); // diff data typ b store kr skte
setNum.add( {name:"sanidhya " , age : 22});
console.log(setNum); 

setNum.add( [1,2,3]);
setNum.add( [1,2,3]);
console.log(setNum); 
// yeh dono array add hoga... javascript m yeh dono array alg address pr stored hai..
// so dono different treat hoga
const arr=[4,5,6];
setNum.add(arr);
setNum.add(arr);
console.log(setNum); // ab ek hi baar arr stored hoga...as dono ki loc same h

//Set_name.has(item to be serached) --> return bool
if(setNum.has(1)===true)
console.log(true);
 
// for of loop
for(let ele of setNum){
    console.log(ele);
} 
// jb unique values h tb use set
const a=[1,2,3,4,4,4,5,2,2,1,5,6,8];
const newSt= new Set(a);
console.log(newSt);
let len=0;
for(let ele of newSt)
len++;
console.log(len); 





