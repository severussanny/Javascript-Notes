// function returning functions
const fun2 = n => {
    console.log(" number is ",n);
}
const fun1=()=>{
    console.log("inside fun1 ");
    return fun2(7);
}
console.log(typeof fun1()); // undefined
// inside fun1
// number is 7
// undefined
// undefined becoz fun2 ka return type khali h..kuch nhi h...kuch return nhi krra
// so jb fun1 , mai fun2 return hora h...vo undefined hai


const myFun=()=>{
    const hello=()=>{
        console.log("hello world");
    }
    return hello;
}
const ans= myFun();
console.log(ans);
// ()=>{
//     console.log("hello world");
// }
// output pura ek function hai
// this means ans variable ek pura function hai
// usko call kr skte hain hum
ans();  // hello world 

const myFun2=()=>{
    const hello2=()=>{
        return "hello2";
    }
    return hello2;
}
const ans2= myFun2();
console.log(ans2()); // hello2
console.log(ans2); // yeh function print krega pura
// ()=>{
//     return "hello2";
// }


const myFun3=()=>{
     return function hello3(){
        return "hello3";
    };
}
const ans3= myFun3();
console.log(ans3);
// hello3(){
//     return "hello3";
// }
console.log(ans3()); // hello3
