// vvvimp...dhyaan se smjhna
// console.log('hello world');

// const grandparent= document.querySelector(".grandparent");
// const parent= document.querySelector(".parent");
// const child= document.querySelector(".child");

//  child.addEventListener("click", ()=>{
//     console.log("you clicked on child");
//  });

//  parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent");
//  });
// child pr click kia parent vala b chlra h
// browser check krta h jaise hi child pr click kia...
// vo dekhega parent pr bhi kya koi click event listener laga h
// toh vo b chla dega..ese hi grandparent aur body ko b check krega


// grandparent.addEventListener("click", ()=>{
//     console.log("you clicked on Grandparent");
//  });
 // child click output
// you clicked on child
// you clicked on parent
// you clicked on Grandparent

// parent click output
// you clicked on parent
// you clicked on Grandparent

// const body= document.body;
// body.addEventListener("click", ()=>{
//     console.log("you clicked on Body");
//  });
// child click output
// you clicked on child
// you clicked on parent
// you clicked on Grandparent
//you clicked on Body

// garnd parent click
// you clicked on Grandparent
//you clicked on Body

// isko event bubbling/ propogation bolte hain
// ek event pr click kia..toh uske parent, grandParent vale bhi chl gye




/// Capturing events
// child.addEventListener("click", ()=>{
//     console.log("Captured!!! child");
//  }, true);
// child pr click kia h..output is
//Captured!!! body
//Captured!!! grandparent
//Captured!!! parent
//Captured!!! child
// you clicked on child
// you clicked on parent
// you clicked on Grandparent
//you clicked on Body


// browser sbse pehle outer parent body se start krega check krna...ki kya vahan koi event capture hora hai... agr yeh toh vo print kr dega
//the grandparent
//then parent
// and then child


// parent.addEventListener("click", ()=>{
//     console.log("Captured!!! parent");
//  }, true);
// parent pr click kia
//Captured!!! body
//Captured!!! grandparent
//Captured!!! parent
// you clicked on parent
// you clicked on Grandparent
//you clicked on Body

//    C                     B
//       C               B
//          C         B
//             C -> B
//
//
//
//
// iska use kya h
// ek click se kitne saare events trigger hore hain



// grandparent.addEventListener("click", ()=>{
//     console.log("Captured!!! grandparent");
//  }, true);
// body.addEventListener("click", ()=>{
//     console.log("Captured!!! body");
//  }, true);


//////////////// Event Delegation /////////////////////////
// const grandparent= document.querySelector(".grandparent");
// grandparent.addEventListener("click",()=>{
//      console.log('you clicked on something');
// });
// bubbling add krri thi humne
// grandparent pr click nhi kia...child pr click kia
// output when clicked on child
// you clicked on something
// browser humesha ese hi cycle chaleyga

//    C                     B
//       C               B
//          C         B
//             C -> B

// so chilc pr click krne se...grandparent ki event bubbling hui h
// iska fayeda yeh h ki....parent, grandparent pr event listener add krne ki jrurat nhi h
// child pr click krne k baad...dono k event listener apne app chl jayenge


// print event object
// const grandparent= document.querySelector(".grandparent");
// grandparent.addEventListener("click",(e)=>{
//      console.log(e);
// });
// child ko click kia....grand parent ka event listener chl gya h
// if child click..then target : div.child.box
// if parent click..then target : div.parent.box
// if grandparent click...then target : div.grandparent.box



const grandparent= document.querySelector(".grandparent");
// grandparent.addEventListener("click",(e)=>{
//      console.log(e.target);
// });

// child clicked <div class="child box"> Child </div>
// grandparent clicked <div class="grandparent box">…</div>

// agr event delegation nhi pata hota..toh child parent grand parent..sbke liye eventListener alg add krte
grandparent.addEventListener("click",(e)=>{
         console.log(e.target.textContent);
 });
// child clicked---> 
// child

// parent clicked
// parent 
// child
// parent k textcontent m pehle parent likha h..phir child...toh isliye esa print hora h


// grandparent clicked
// grandparent
//parent
//child




