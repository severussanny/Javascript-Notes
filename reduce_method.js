 // reduce method bhoot imp h

 const arr=[ 1,2,3,4,5,6,7,8,9,10];

 // aim : sum krna h
 // arr.reduce( ()=>{} );
  
 const totSum = arr.reduce((accumulator , currentValue)=>{
    console.log(`accumulator = ${accumulator} , currentValue = ${currentValue}`);
     return accumulator+currentValue;
 }); // 
// accumulator ki intial value bhi pass kr skte hain
// arr.reduce( ()=>{} , initialValueAccumulator );



console.log(totSum);
//  A function that accepts up to four arguments. 
// The reduce method calls the callbackfn function one time for each element in the array.
//  Calls the specified callback function for all the elements in an array. T
// the return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// accumulator = 1 , currentValue = 2
// accumulator = 3 , currentValue = 3
//  accumulator = 6 , currentValue = 4
// accumulator = 10 , currentValue = 5
//  accumulator = 15 , currentValue = 6
//  accumulator = 21 , currentValue = 7
//  accumulator = 28 , currentValue = 8
// accumulator = 36 , currentValue = 9
//  accumulator = 45 , currentValue = 10
//  55


const userCart = [
    {productId : 1 , productName : "Laptop" , productPrice  : 45000} ,
    {productId : 2 , productName : "Phone" , productPrice  : 42000} ,
    {productId : 3 , productName : "Watch" , productPrice  : 95000} ,
    {productId : 4 , productName : "Apple Tablet" , productPrice  : 85000} ,
    {productId : 5 , productName : "Earphone" , productPrice  : 23000} ,
];

// product ka total price chahiye h sbka
// experienced developers forloop ki jgah.....reduce laga dete hain

const totPrice = userCart.reduce( ( totPrice, {productPrice})=>{
    console.log(`accumulator  = ${totPrice}  , current Price = ${productPrice}`);
    return totPrice+productPrice;
}, 0 );
// accumulator ki intial value bhi pass kr skte hain
// arr.reduce( ()=>{} , initialValueAccumulator = 0  );
console.log(totPrice);
 // output
//  accumulator  = 0  , current Price = 45000
// reduce_method.js:47 accumulator  = 45000  , current Price = 42000
// reduce_method.js:47 accumulator  = 87000  , current Price = 95000
// reduce_method.js:47 accumulator  = 182000  , current Price = 85000
// reduce_method.js:47 accumulator  = 267000  , current Price = 23000
// reduce_method.js:51 290000
 


