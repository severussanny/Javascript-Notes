// computed properties
const key1="objKey1";
const key2="objkey2";

const value1= "myValue1";
const value2="myValue2";

// const obj ={
//     key1 : value1,
//     key2 : value2
// }

// console.log(obj);
// {key1: 'myValue1', key2: 'myValue2'}

// const obj ={
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);
// {objkey1: 'myValue1', objkey2: 'myValue2'}   correct

const obj={};
obj[key1]=value1, obj[key2]=value2;
// console.log(obj);
// {objkey1: 'myValue1', objkey2: 'myValue2'}   correct


