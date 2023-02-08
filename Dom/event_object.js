// event object
const firstButton= document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log(this);
// });
// firstButton.addEventListener("click", ()=>{
//     console.log(this);
//     // callback function
// });

// jb bhi kisi bhi element pr event listener add hoga
// js engine line by line execute krta h
// browser------- js engine + extra features
// browser------ js engine + webAPIs

// jb browser ko pta chala ki user ne event perform kia
// jo hum listen kar rahein hain
// tb browser 2 kaam krega
// 1. yeh callback function js engine ko dega...aur bolrega usko execute krne ko
//2. callback function k saath browser jo event hua h ...uski information bhi dega
// yeh information humare pass object k form m aayi
// uss object ko hum recieve krenge

// function hello(a){
//     console.log(a);
// }
// hello({firstKey: "value1" , secondKey:"value2"});
// yeh same cheeze browser pass kr deta h





// 1. yeh callback function js engine ko dega...aur bolrega usko execute krne ko
//2. callback function k saath browser jo event hua h ...uski information bhi dega
// yeh information humare pass object k form m aayi
// uss object ko hum recieve kreng

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// });

// yeh seekhne ka humara main aim h ki.....arrow functions kyun use krte hain hum....event listener k saath

const allButtons=document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//      // browser jo event dera h..vo recieve krlia h callback function m
//      button.addEventListener("click", (e)=>{
//         console.log(e);
//      });
// }


// target and current Target property bhoot imp hai
// target-> kis element ne humare event ko trigger kia
// current Target -> kis element pr humne event listener attach kia tha


// for(let button of allButtons){
//     // browser jo event dera h..vo recieve krlia h callback function m
//     button.addEventListener("click", (e)=>{
//        console.log(e.target);
//     });
// }
// <button id="one">My button 1</button>
// <button id="two">My button 2</button>
// <button id="three">My button 3</button>


for(let button of allButtons){
    // browser jo event dera h..vo recieve krlia h callback function m
    button.addEventListener("click", (e)=>{
       console.log(e.currentTarget);
    });
}
// <button id="one">My button 1</button>
// <button id="two">My button 2</button>
// <button id="three">My button 3</button>

// currentTarget --jb humne button one ko click kia toh konse button pr event listener attach tha
// target----jb maine isko click kia..toh yeh kahan se fire hua tha// button one se fire hua..toh vo print hoga















