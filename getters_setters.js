// getters and setters

// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
     get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
     
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("harshit", "sharma", 5);
//  console.log(person1.fullName()); // as a funtion treat hua h
 console.log(person1.firstName); // as a property treat hua h
 // muje fullName() ese na call krke...
 // property jaise call krna h... person.fullName krke
 // we use get and set here

 console.log(person1.fullName); // harshit sharma
 // getter use kia h
// methods property jaise treat honge

 person1.fullName= "Sanidhya Gupta";
 // setter use krre h

 console.log(person1.fullName); //
