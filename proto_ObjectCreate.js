 /// very very imp for interviews too
const obj1= {
    key1 : "val1",
    key2 : "val2"
};

// const obj2 = {
//     key3 : "val3"
// };
// console.log(obj2.key1); // undefined

// we want koi if obj2 mai key1 naa mile.... toh js khud jaaye obj1 k pass key1 dhundne
// below solution
// there is one more way to create empty objects

const obj2= Object.create(obj1);
console.log(obj2); // {} empty object
obj2.key3="val3";
console.log(obj2.key1);  // val1 
// key1 pehle obj2 m dekha..ni mila...phir obj1 m dhunda aur mil gya

// const obj2= Object.create(obj1); means ab javascriopt obj1 pr dhundne jayega
// agr kuch nhi milta h toh

obj2.key2="unique"; 
console.log(obj2.key2); // unique

console.log(obj2); // 
// key2: "unique"
// key3: "val3"
// [[Prototype]]
// : Object
// key1: "val1"
// key2: "val2"
// [[Prototype]]: Object

// yeh prototype mai..uss object ka reference store hota h
// __proto__
 // official ecma script documentation
 // [[prototype]] === __proto__
 // but prototype se bilkul diff

console.log(obj2.__proto__); // {key1: 'val1', key2: 'val2'}
 

//const obj2= Object.create(obj1);
// this line means obj2 ka proto obj1 set hora tha 






























