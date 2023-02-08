// click event on multiple buttons
// vvvvimp
// console.log('hello world');


// const firstButton= document.querySelector('#one');
// firstButton.addEventListener("click",function(){
//     console.log('you clicked me!!');
// });

const allButtons=document.querySelectorAll('button');
console.log(allButtons); // NodeList(3) [button#one, button#two, button#three]

// for(let button of allButtons){
//     // hume har button ka text content print krna h....use this keyword

//     button.addEventListener("click",function(){
//         // console.log('you clicked me!!');
//         // console.dir(this);
//          console.log(this.textContent); // my button 1, my button 2, my button 3
//       // iss case m iske ndr arrow functions nhi define kr skte
// // arrow funct m this= window object...usme this.textContent-->undefine hoga
// // but 90% arrow functions hi use krte h..vo kaise hoga??
//     });
// }

// for(let i=0; i<allButtons.length; i++)
// {
//     const button= allButtons[i];
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     });
// }
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this.textContent);
    });
})