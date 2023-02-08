// button click krne pr background random color le hr baar
const mainButton=document.querySelector("button");
// console.log(mainButton);

const body= document.body;

function randomColorGenerator(){
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    // template string
    const randomColor= `rgb(${red}, ${green} , ${blue})`; 
    return randomColor; 
}
 const currentColor= document.querySelector(".current-color"); 
 console.log(currentColor);


mainButton.addEventListener("click",()=>{
    // console.log('you clicked me!');
    const randomColor= randomColorGenerator(); // yeh func create krenge abhi
    // Math.random() ---> 0 to 1 k beech ka random nom deta h
    //rgb value 0 to 255
    // Math.random()*10 ---> 0 to 9.9999 k beech ka nom dega
     // if integer value chahiye h toh
 // Math.floor(Math.random()*10); --> 0 to 9
 // Math.floor(Math.random()*256) ---> random nom between 0 to 255
    //  console.log(randomColor);
    body.style.backgroundColor=randomColor;
    currentColor.textContent=randomColor;
});




























