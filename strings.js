var str="      tekionValues    ";
console.log(str.length);
// string immutable hoti hai
var str2= str.trim(); // space remove krke string dega
console.log(str2.length); 
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// as string immutable hai..toh toUpperCase string ko change nhi krega...usko dusri variable m store krna padega...
// ek string return krega 

str2= str2.toUpperCase();
console.log(str2)

let str3="Sanidhya";
str3= str3.slice(3,6); // start indx to end indx k just pehle tk ki string aa jayegi
console.log(str3);
// str4="abcedf";
// str4=str4.slice(2);
// console.log(str4);
console.log(typeof 7);
console.log(typeof "str");

// convert number to string
let age=22;
let s="1234";
age= age+s;
console.log(age); 

// convert string to number
let sr=+"1234";
// sr=+"1234";
console.log(typeof sr);

// string concatenation
let s1="111";
let s2="222";
let s3= s1+s2;
let s4= +s1 + +s2;
console.log( "string  is  "+s3 + " number addition is  "+s4);
