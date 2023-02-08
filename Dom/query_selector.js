// select element using query selector...vvvvimp
// id classes element sbke liye kaam krega
// console.log("hello");

// const mainHeading=document.querySelector("#Main-heading");// id
// console.log(mainHeading);
// const header= document.querySelector(".header");
// const navItem= document.querySelector(".nav-item");
// console.log(navItem); /// bas 1st item milega nav-item class ka
// const navItems= document.querySelectorAll(".nav-item");
// console.log(navItems);// node list of items having this class


// change text..#############################################
// text content and innerText
// Manage your task ki jagah kuch aur liklhna h

// const mainH=document.querySelector("#Main-heading");
// console.log(mainH.textContent);// manage your task hello
// // yeh saara text content dega ..even if it is hided from the screen
// console.log(mainH.innerText);// // manage your task 
// // hided vali cheez not show
 


// mainH.textContent="New heading Changed";
// console.log(mainH.textContent); // New heading Changed


// ###########################################################################
//change the styles of element
// const mainHeading= document.querySelector("div");
// // saare div elemenet m se..jo sbse pehla hoga...vo return hoga as object
// console.log(typeof mainHeading);
// console.log(mainHeading);

const mainHeading= document.querySelector("div.headline h2");
console.log(mainHeading);
console.log(mainHeading.style);
// style bhi object h
mainHeading.style.color= "blue";
mainHeading.style.backgroundColor="white";
mainHeading.style.border ="4px solid green";