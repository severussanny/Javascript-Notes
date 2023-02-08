// console.log('script starts');
// // setInterval(() => {
// //     let total=0;
// //     for(let i=0; i<1000000000; i++)
// //     total+=i;
// //     console.log(total);
// //     console.log(Math.random());
// // }, 200);
// // ab delay jyada hora h becoz ndr computation takes time....so yeh bhar vale 0.2sec k delay se independent h
// // min delay 200 ms

// console.log('script ends');

// esa program banana h jisme body ka color change ho har second mai...apne aap...aur button click knre pr stop krna h
console.log('hello');

const body= document.body;
console.log(body);

function randomColorGenerator(){
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    // template string
    const randomColor= `rgb(${red}, ${green} , ${blue})`; 
    return randomColor; 
}
const id= setInterval(()=>{
    body.style.background=randomColorGenerator();
},1000);
const button= document.querySelector('Button');
console.log(button);
button.addEventListener("click", ()=>{
  clearInterval(id);
  button.textContent=body.style.background
});
