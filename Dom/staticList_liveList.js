// static list vs live list


// static list
// const listItems=document.querySelectorAll(".todo-list li");
// console.log(listItems); // NodeList(5) [li, li, li, li, li]
// const sixthLi= document.createElement("li");
// sixthLi.textContent="item 6";
// const ul= document.querySelector(".todo-list");
// ul.append(sixthLi); 
// console.log(sixthLi);
// element add kr dia h humne.....but nodelist 5 items ki hi rhegi...
// vo static list h kyuki...change nhi hoti hai

// query selector ---> static list
//getElementBy() ----> live list


// live list

// const ul= document.querySelector(".todo-list");
// const listItems=ul.getElementsByTagName("li");
// console.log(listItems);// HTMLCollection(5) [li, li, li, li, li]
// const sixthLi= document.createElement("li");
// sixthLi.textContent="item 6";
// ul.append(sixthLi); 
// console.log(listItems); // HTMLCollection(6) [li, li, li, li, li, li]
// live list dega


// mostly query selector use krte becoz......html collection extra space le leti h...jo chahiye nhi hota...vo b store kr ltei h


////////////////////////////////////////////////////////////////////////////////
// how to get the dimensions of the element
// height width

const sectionTodo=document.querySelector(".section-todo");
 const info=sectionTodo.getBoundingClientRect(); // yeh ek object return krega..jsime saare dimensions present honge{ x-axis, y-axis , height , width , etc}
console.log(info);
// DOMRect {x: 26.5, y: -227.203125, width: 477, height: 434.546875, top: -227.203125, …}
console.log(info.height, info.width , info.right); 











