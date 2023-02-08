// vvvvvvvvimp topic in js

// Javascript mai function object bhi h
// funtion ===> function + object
 // proof that function behave like an object given below

function hello(){
    console.log("sssssssssss");
}
console.log(hello.name); // function ka name is hello
 
// you can add your own properties
// functionName.propertyName = Value
hello.myProperty= "unique Value";
console.log(hello.myProperty);

// function provides more useful properties
// call apply bind methods bhi provide krta h'

// vvvimp
// functions behaves like object means 
// functions hume free space dete h ...uss free space ko prototype bolte hain
// yeh prototype ek object hai ....{}
// issi prototype k andar hum key value pairs add krte hain... which mean 
// functions ki khud ki property.
// hence object jaisa behavior aa jaata h inme



// only functions provide prototype property

if(hello.prototype)
{
    console.log("prototype is present");///////
}
const obj ={ key : "value1" , key2 : "value2"};

if(obj.prototype)
{
    console.log("prototype is present");
}
else{ 
    console.log("prototype is absent");/////// absent
}
 

// function mai property kaise add hogi...
// how to add properties in prototype

hello.prototype.abc = "abcdef";
hello.prototype.xyz = "xxxxxnhdbdb";
// functionName.prototype.keyName =  Value_to_be_added
console.log(hello.prototype); // abc: 'abcdef', xyz: 'xxxxxnhdbdb', constructor: ƒ}

// how to add function in prototype

hello.prototype.aboutInfo = function(){
  console.log("inside the prototype function ");
};
hello.prototype.squareNum = num => num*num;

console.log(hello.prototype); // abc: 'abcdef', xyz: 'xxxxxnhdbdb', aboutInfo: ƒ, 
console.log(hello.prototype.squareNum(5) ); // 25

// proto reference krta h
// prototype ek object h.. jo sirf functions deta h
























