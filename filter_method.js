// filter method 
// iska call back function humesha true ya false hi return krna chahiye

const numbers=[2,3,5,7,8,8,120];
// console.log("gggg");
const isEven = num => num%2===0 ;
 // now filter function vo array return krega jisme sirf even numbers honge
 const evenNum= numbers.filter(isEven);
 console.log(evenNum);
