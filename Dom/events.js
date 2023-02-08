// events....vvvvvimp in js
// event means kuch kaam hona
// like button click krne pr kuch hona
// button press
// mouse hover
// mouse event , keyboard event and input events....vvvimp
// click event sbse jyada use hota h websites mai

// event add krne k 3 methods
// 1.html element k under hi add krna.... adding onclick under button element
// we dont use this method


//2. js file m aakr element ko select kro
// const btn= document.querySelector(".btn-headline");
// console.log(btn);// js representation h
// console.dir(btn); // object representation
// // diff diff event listeners presnet hain..like onclick oncopy ondrag..etc
// btn.onclick= function(){
//     console.log('you clicked me');
// }
// // yeh method b use nhi kr skte becoz click event ko ek se jyada baar nhi kr skte...aur idhr vo cheeze hori h

//3. method addEventListener
const btn= document.querySelector(".btn-headline");

function clickMe(){
    console.log('you clicked me');
}
// btn.addEventListener("click",clickMe);
// btn.addEventListener("click", function(){
//     console.log('you clicked me');
// });

// evenet listener m 90% arrow functions hi use hote hain
btn.addEventListener("click", ()=>{
    console.log('arrow functions!!!');
})















