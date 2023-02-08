// objects --> reference type
// arrays are good but not efficient for real world data
// object store key value pairs , don't have indexes


// how to create objects
// const person= { name: "ravikant" , age :22 } ;
// console.log(person);
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
// console.log(person);

// how to access data from objects
// console.log(person.name , person.age , person.hobbies[0], person.hobbies); // dot notation
// javascript mai KEYS bydefault STRING hi hoti h
// console.log(person["name"]); // bracket notation


// how to add key value pairs to object
person.gender="male";// dot
// console.log(person);

// bracket notation
person["gender"]="male";
// console.log(person["gender"]);


// how to iterate objects
 // For in loop
// for(let key in person)
// console.log(key);

for(let key in person){
    // console.log(person.key) ; 
    // undefined as vo KEY NAME ki key dekhega ..like Person.NAME
    
    // console.log(person[key]);  value milegi key k corresponding

    // to get key value pair do below
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, person[key]); 
}

 // Object.keys

//  console.log(Object.keys(person));
 
//  for(let key of Object.keys(person)){
//      console.log(key, person[key]);
//  }

// spread operators in Objects
// array case mai
let a1=[1,2,3];
 let a2=[4,5,6];
 let a3=[...a1, ...a2];
 console.log(a3);

const newArr=[..."abc"]; // "a", "b" ,"c"

let o1={
    k1: "v1",
    k2: "v2"
};
let o2={
    k3 : "v3" ,
    k4 : "v4" ,
    k2 : "uniqueVal"
};
let o3= {...o1 , ...o2};
console.log(o3);
// let vs const.....const change nhi hoga aage
// let ko redefine kr skte h..but const ko nhi

const o5={..."abcd"};
console.log(o5);  // {0: 'a', 1: 'b', 2: 'c', 3: 'd'}

const o6={...[121, 44, 9038,839, 235]};
console.log(o6); // {0: 121, 1: 44, 2: 9038, 3: 839, 4: 235}


