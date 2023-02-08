// function expression
// function ko ek variable m store kr lete h..
// function ka koi name nhi hota h but...
// variable ka name hi function k name ki tarah treat hoga


// function firstFunction(){
//     console.log("made my first fun");
// }
const firstFunction= function(){
    console.log("made my first fun");
}
firstFunction();
// kaafi use hoga react vgrh m bhi

//  template given below
// const function_name = function (){

// }
// const let var...all three can be used
// var se variable ko re declare kr skte h
// var x=10;
// var x=20;

// let ek baar hi declare hota h....
// let y=10;
// let y=56; // yeh glt h
// y=49 

// const se variable ko ek hi bar initialize kr skte h..baad m change nhi hota vo
// const x=10;

const addSum= function( i,  sum){
    sum+=i;
    return sum;
  }
  let totSum=0;
  for(let i=0; i<=10; i++){
      totSum=addSum(i,totSum);
  }
  console.log(totSum);

  const addString=function(str, i){
    str=str+i+"";
    return str;
 }
 let str="";
 for(let i=0; i<=9; i++){
     str=addString(str,i);
 }
 console.log(str, typeof str);

 const arr=[12, 23 ,45, 67 ,322];

// console.log(isFound(arr,33)); // function call krne se pehle define krna hoga
const isFound= function(arr , target){
    for(let index in arr){
        if(arr[index]===target)
        return index;
    }
    return -1;
}
console.log(isFound(arr,33));
 
