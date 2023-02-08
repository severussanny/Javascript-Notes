// simple loop
// for of loop
// forEach
 // We cant use forEach method to iterate HTMLCollection

//  const navItems= document.getElementsByClassName("nav-item"); 
// let navItems= document.getElementsByTagName("a"); // HTMLCollection
// let se  redefine kr skte hain....const se change nhi kr skte h



// console.log(navItems); //html collections dega// array like object.... but not array
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem=navItems[i];
//     // navItem.style.backgroundColor="#fff";
//     // navItem.style.color="green"; // color green nhi hua..tagName use kia then
//     // navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     console.log(navItem);
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="red"; // color green nhi hua..tagName use kia then
//     navItem.style.fontWeight="bold";
// } 
// {/* <a href="#Home" style="background-color: rgb(255, 255, 255); color: green; font-weight: bold;">Home</a> */}


// we cannot use forEach here...but array m channge krke use ho jayega
// navItems= Array.from(navItems);
// console.log(Array.isArray(navItems)); // true
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor="#fff";
//         navItem.style.color="red"; 
//         navItem.style.fontWeight="bold";
// });


//####################### node list ############################################
// simple loop
// for of loop
// forEach

const navItems= document.querySelectorAll("a");
// for(let i=0; i<navItems.length; i++)
// {
//     console.log(navItems[i]);
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="#fff";
//         navItem.style.color="violet"; 
// }

// same as above nodelist ko b array ,m change kr skte h









