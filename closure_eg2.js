// function myFunc(y){
//     function calculateP(x){
//         return x**y;
//     }
//     return calculateP;
// }

// const myFunc = (power)=>{
//     return (number)=> number**power ;
// }


const myFunc = power=>number=> number**power ;

 

const cube= myFunc(4);
console.log(cube(5)); // 625










