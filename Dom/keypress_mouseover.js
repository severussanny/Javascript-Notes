// key press events
//mouseover events

// keypress events---> screen pr kahin pr bhi...koi b keyboard button press kia h...toh yeh button pata lage hume ki konsa press kia h

// const body=document.body;
// body.addEventListener("keypress", (e)=>{
//    console.log(e.key);
// });

// mouseover event
//eg..kisi b element k upr jaise hi mouse lekr jaaye...toh event occur ho
const mainButton= document.querySelector(".btn-headline");
console.log(mainButton);
mainButton.addEventListener("mouseover", ()=>{
   console.log('mouseover event occured');
   mainButton.style.backgroundColor="yellow";
});

// mouseleave
mainButton.addEventListener("mouseleave", ()=>{
    console.log('mouseleave event occured');
    mainButton.style.backgroundColor="lightpink";
 });

















