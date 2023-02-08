// const ul=document.querySelector(".todo-list");
// // iss ul mai li item append krna h
// const li= document.createElement("li");
// li.textContent="complete part2 js";
// ul.append(li);
// // ul.prepend(li);
// // li ek hi node h... ya toh append hogi ya phir prepend hogi
// /// jo last m likha h vo hoga
//  // if we want both things....toh copy/ clone bana do nodes ki


//  const li2= li.cloneNode(true);
//  // deep cloning nhi hui h.....means node create hui h...but uske child (text content ) create nhi huye ...... so deep cloning k liye true pass krna hoga

//  ul.prepend(li2); 

////////////////////////////////////////////////////////////////////////////////
// some old methods to support poor Internet Explorer
 // appendChild
 // insertBefore
 // replaceChild
 // removeChild

// const ul= document.querySelector(".todo-list");
// const li= document.createElement("li");
// li.textContent="complete part2 js";
// ul.appendChild(li);
// const referenceNode=document.querySelector(".first-todo");
// //   li.insertBefore(ul);
// ul.insertBefore(li,referenceNode);

// replace child
// reference node ko li se change krenge
const ul= document.querySelector(".todo-list");
const li= document.createElement("li");
 li.textContent="complete part2 js";
 const referenceNode=document.querySelector(".first-todo");
 ul.replaceChild(li,referenceNode);// reference node ko li se change krenge 









