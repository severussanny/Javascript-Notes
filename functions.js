// function declarations
function firstFunction(){
    console.log("made my first fun");
}

firstFunction();

function addSum( i,  sum){
  sum+=i;
  return sum;
}
let totSum=0;
for(let i=0; i<=10; i++){
    totSum=addSum(i,totSum);
}
console.log(totSum);

function addString(str, i){
   str=str+i+"";
   return str;
}
let str="";
for(let i=0; i<=9; i++){
    str=addString(str,i);
}
console.log(str, typeof str);
function isEven(n){
    if(n%2===0)
    return true;
    else
    return false;
}
// let n= +prompt("guess a number");
// // prompt input string k form m leta haiconsole
const arr=[12, 23 ,45, 67 ,322];

// console.log(isFound(arr,33)); // function call krne se pehle define krna hoga
function isFound(arr , target){
    for(let index in arr){
        if(arr[index]===target)
        return index;
    }
    return -1;
}
console.log(isFound(arr,33));