class Animal{
    // const name ; // error becoz intialize krna padega const ko
   constructor(name, age){
    this.name= name;
    this.age= age;
   }
  eat(){
    console.log(`${this.name} is eating`);
  }

};

const cat= new Animal("cat", 5);
cat.eat(); // cat is eating

// dog class is subclass , animal is base class
class Dog extends Animal{
    // const name ; // error becoz intialize krna padega const ko
  
    constructor(name, age, speed){
         super(name, age);
         this.speed= speed; 
    }
    eat(){
        console.log(`${this.name} is eating Modified`); 
      }
  run(){
    console.log(`${this.name} is running`);
  }
};
const tom= new Dog("Tomy", 8);
tom.eat();
tom.run();
 // object=== instance






