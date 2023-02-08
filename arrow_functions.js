// mostly log ko aadat h function declaration jaise C++ m hota vaise dekhne ki
// arrow functions aur function expression thoda prac krke aajayega use krne
 
// arrow functions REACT m kaafi jyada useful hai
//

// function declarations
// function firstFunction(){
//     console.log("made my first fun");
// }

// function expression
// const firstFunction= function(){
//     console.log("made my first fun");
// }

// arrow function
const firstFunction= ()=>{
    console.log("made my first fun");
}
firstFunction();

const addSum= ( i,  sum)=>{
    sum+=i;
    return sum;
  }
  let totSum=0;
  for(let i=0; i<=11; i++){
      totSum=addSum(i,totSum);
  }
  console.log(totSum);

  const addString=(str, i)=>{
    str=str+i+"";
    return str;
 }
 // addString ek variable ka name h... iss variable k through function ko acces krre
  
 let str="";
 for(let i=0; i<=9; i++){
     str=addString(str,i);
 }
 console.log(str, typeof str);
 //
// code quality badh jaati h isko use krke
  
const arr=[12, 23 ,45, 67 ,322];

// console.log(isFound(arr,33)); // function call krne se pehle define krna hoga
const isFound=(arr , target)=>{
    for(let index in arr){
        if(arr[index]===target)
        return index;
    }
    return -1;
}
let ans=isFound(arr,67);
console.log(ans);


const isOdd = oddNum => oddNum%2===1; // checking oddNum using arrow fun
console.log(isOdd(3)); // true
 
const firstChar= str => str[0];
let st="sanidhya";
console.log(firstChar(st));

