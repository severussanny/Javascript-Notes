// difference between dot and bracket notation
const key="email";
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}

// to add email as a key with gmail id
person.key="harshit123@gmail.com";   // { key harshit...}  glt h
console.log(person);

person["key"]="harshit123@.com";  // {key, harshit...}  glt h
console.log(person);

 person[key]="harshit@gmail.com";
 console.log(person); // correct { email harshit.com } sahi 