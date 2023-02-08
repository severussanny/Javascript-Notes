// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key // very imp point
// like array, number, string 

// object literal
// key -> string
// key-> symbol
// const person ={
//   name : "Sanidhya",
//   age : 22,
//   1 : "one"
// };
// for(let key in person)
// console.log(` key is ${key} and typeof = `, typeof key);
// key is 1 and typeof =  string
// map.js:27  key is name and typeof =  string
// map.js:27  key is age and typeof =  string

// map
//key value pair

const mp= new Map();
mp.set("firstName", "Sanidhya Gupta");
mp.set([100,200,300], "Cash");
mp.set(22, "age");
console.log(mp);
//{'firstName' => 'Sanidhya Gupta', Array(3) => 'Cash', 22 => 'age'}

// mapName.get(key)--> to get value corresponding to that key
console.log( mp.get('firstName'));
console.log( mp.get(22));
// console.log( mp.get(Array(3)));

console.log(mp.keys()); // to print all keys 
//MapIterator {'firstName', Array(3), 22}
// for(let key of mp.keys())
// console.log(key , typeof key);
// firstName string
// (3) [100, 200, 300] 'object'
//  22 'number'

// objects mai for in loop laga skte h
// for of loop map m laga skte..but not in obj 

// for( let key of mp)
// console.log(Array.isArray(key)); 
// key nhi..key value pair milega
// har key value pair ek ARRAY hoga
// Array ki 1st index key , 2nd index is Value
 
for(let [key,value] of mp)
console.log(key, value);

const Person= new Map( [['first', 'Ankush Sonkar'], ['comapny', 'Ai Dash'] , ['age' ,22]]);
console.log(Person);


const person1={
   id: 1,
   firstName : "harshit"
};

// person 1 ki aur info store krni h but object mai nhi..kahin aur

const userInfo = new Map();
userInfo.set(person1, {age: 28 , gender : "Male" , phone : 9826});
console.log(userInfo);
// key: 
// {id: 1, firstName: 'harshit'}
// value: 
// {age: 28, gender: 'Male', phone: 9826}

console.log(person1.id, person1.firstName , userInfo.get(person1));
// 1 'harshit' {age: 28, gender: 'Male', phone: 9826}



















