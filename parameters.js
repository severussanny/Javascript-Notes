// default parameters

const addTwo= (a,b)=>{
    if(typeof b==="undefined")
    b=1;
    return a+b ;
}
// NaN --> incase of not writing if block for undefined condition

// if only 1 parameter is passed through arguments , then dusra undefined..so 
// we have to set that parameter

const ans= addTwo(10);
console.log(ans); // 11

// now use default parameter

const addTwoNum = (a, b=0)=> a+b;
console.log(addTwo(7,8)); // 15
console.log(addTwoNum(67)); // 67

// rest parameters

const myFun=(a,b,c,...d)=>{
    console.log(` a is ${a}`);
    console.log(` b is ${b}`);
    console.log(` c is ${c}`);
    console.log(` d is ${d}`);
}

// 3,4,5, 5,4,2,9,8
// a=3 , b=4 , c=5 , d= [5,4,2,9,8] ...esa chahiye h

//myFun(3,4,5, 5,4,2,9,8);
// a is 3
// b is 4
//  c is 5
// d is 5

// use rest parameters   
//const myFun=(a,b,c,...d)=>{
    myFun(3,4,5, 5,4,2,9,8);
// a is 3
// b is 4
//  c is 5
// d is 5,4,2,9,8

// question -> given any number of arguments..add all the arguments and return sum

const totSum=(...arr)=>{
    let sum=0;
    for(let ele of arr)
    sum+=ele;
    return sum;
}
console.log(totSum(10,20,30,40)); 

