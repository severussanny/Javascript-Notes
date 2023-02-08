// callbacks , callback hell
// pyramid of doom
// aysnchronous programming language

// console.log('hello');

// ek second baad heading 1 change
// dusre second baad heading 2 change..similarly saari krna h
// const heading1= document.querySelector('.heading1');
// const heading2= document.querySelector('.heading2');
// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet";
// },1000);
// setTimeout(()=>{
//     heading2.textContent="Heading 2";
//     heading2.style.color="red";
// },2000);

// ese krne se...dono sath m hua h...
// but ek k baad ek chahiye h hume.. so 2000 likha...uske karan h2 ek second baad change hua..1 k respect m
 
// setTimeout k funtion m ek callback function pass kr denge
 
// bhoot imp hai order maintain krna
// practical example
// username ne id password daala h...
// toh hume 1st data fetch krna hoga....
// uske baad hi validity check hoti h... so order maintain krna h hume


// setTimeout(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.textContent="Heading 2";
//         heading2.style.color="red";
//     },1000);
// },1000);
// now 1st sec baad h1, then 1sec baad h2
// order maintained


// //////////////////// new task ////////////////////////////////////

const heading1= document.querySelector('.heading1');
const heading2= document.querySelector('.heading2');
const heading3= document.querySelector('.heading3');
const heading4= document.querySelector('.heading4');
const heading5= document.querySelector('.heading5');
const heading6= document.querySelector('.heading6');
const heading7= document.querySelector('.heading7');

//   text     delay    color
// one   1s  violet
// two    2s    red
// three  2s  purple
// four   1s  pink
// five   2s  green
// six    3s   blue
// seven  1s  brown 

// callback hell
// setTimeout(() => {
//     heading1.textContent="One";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.textContent="two";
//         heading2.style.color="red";
//         setTimeout(()=>{
//             heading3.textContent="three";
//             heading3.style.color="purple"; 
//             setTimeout(()=>{
//                 heading4.textContent="four";
//                 heading4.style.color="pink"; 
//                 setTimeout(()=>{
//                     heading5.textContent="five";
//                     heading5.style.color="green"; 
//                     setTimeout(()=>{
//                         heading6.textContent="six";
//                         heading6.style.color="blue"; 
//                         setTimeout(()=>{
//                             heading7.textContent="seven";
//                             heading7.style.color="brown"; 
//                         },1000)
//                     },2000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000);


// promises issi nested callbacks ko remove krta h

function changeText(element , text , color , time, onSuccessCallback , onFailureCallback){
    setTimeout(()=>{
        if(element){
             element.textContent=text;
             element.style.color= color;
             if(onSuccessCallback){
                onSuccessCallback();
             }
        }
        else{
           if(onFailureCallback){
            onFailureCallback();
           }
        }
    }, time);
}

// changeText(heading1,"one", "red", 1000);
//  changeText(heading1 ,"one", "red", 1000, ()=>{
//     // changeText(heading2,"four" , "blue",1000 );
//     console.log("passed");
//  } , ()=>{
//     console.log("element does not exits");
//  });



// pyramid of doom
// yahi callback hell hai
changeText(heading1 ,"one", "violet", 1000, ()=>{
    changeText(heading2 ,"two", "red", 2000, ()=>{
        changeText(heading3 ,"three", "purple", 2000, ()=>{
            changeText(heading4 ,"four", "pink", 1000, ()=>{
                changeText(heading5 ,"five", "green", 2000, ()=>{
                    changeText(heading6 ,"six", "blue", 3000, ()=>{
                        changeText(heading7 ,"seven", "brown", 1000, ()=>{
    
                        } , ()=>{
                           console.log("element does not exits");
                        });
                       
                    } , ()=>{
                       console.log("element does not exits");
                    });
                   
                } , ()=>{
                   console.log("element does not exits");
                });
               
            } , ()=>{
               console.log("element does not exits");
            });
           
        } , ()=>{
           console.log("element does not exits");
        });
       
    } , ()=>{
       console.log("element does not exits");
    });
   
 } , ()=>{
    console.log("element does not exits");
 });













