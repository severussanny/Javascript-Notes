// arrays mutable hote h
// sort method original array ko change krke sort kr dega
// forEach , Map dono original array ko change nhi krr rahe the, new array de re the
// same with filter'

// const numbers= [ 5, 9 , 1200, 400, 3000];
// numbers.sort();
// console.log(numbers);
// // expected ---> 5, 9, 400 , 1200 , 3000
// // actual ----> [1200, 3000, 400, 5, 9]
// becoz js string samjhkr sort krra hai

const userNames = ["Sandy" , "Sonkar" , "Gupta", "bajaj", "Pandey ji"];
userNames.sort();
console.log(userNames);
// acsii value se compare hota h ek ek char..then sort hota
//   ['Gupta', 'Pandey ji', 'Sandy', 'Sonkar', 'bajaj']
// pehle CAPITAl letters sorting, as they have small ASCII value
// then small letters sorting

// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

const numbers= [ 5, 9 , 1200, 400, 3000];
// numbers.sort();
// console.log(numbers);
// expected ---> 5, 9, 400 , 1200 , 3000
// actual ----> [1200, 3000, 400, 5, 9]
// actual sort k liye hum callback function , sort m pass krenge
// 

numbers.sort( (a,b) => {
    return a-b ;
});
console.log(numbers);
// 5, 9, 400 , 1200 , 3000

numbers.sort( (a,b) =>b-a );
console.log(numbers);
// 3000 , 1200 , 400 , 9 , 5 

// a-b kya krra h usko smjho''
// 1200 , 410
// if a-b is positive ,
// put b before a
// 1200-410 = 790 >0
// 410 , 1200

// 5, 9... if a-b is negative , put a before b
// 5-9 = -4..... 
// 5, 9

// real world application in sorting 
// prices highToLow , lowToHigh

const userCart = [
    {productId : 1 , productName : "Laptop" , productPrice  : 45000} ,
    {productId : 2 , productName : "Phone" , productPrice  : 42000} ,
    {productId : 3 , productName : "Watch" , productPrice  : 95000} ,
    {productId : 4 , productName : "Apple Tablet" , productPrice  : 85000} ,
    {productId : 5 , productName : "Earphone" , productPrice  : 23000} ,
];

const lowToHigh = (objA, objB)=>{
   return objA.productPrice - objB.productPrice;
};

userCart.sort(lowToHigh);
console.log(userCart);

const highToLow = (objA, objB)=>{
    return objB.productPrice - objA.productPrice;
 };
 
 userCart.sort(highToLow);
 console.log(userCart);

