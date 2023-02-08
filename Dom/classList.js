const sectionTodo= document.querySelector(".section-todo");
console.log(sectionTodo.classList);
// DOMTokenList(2)
// 0: "section-todo"
// 1: "container"

sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");

// const ans= sectionTodo.classList.contains("container");
// console.log(ans); // false

//toggle--> if class present toh remove
// else if class absent toh add
sectionTodo.classList.toggle('bg-dark');
sectionTodo.classList.toggle('bg-dark');

const header= document.querySelector(".header");
console.log(header.classList);
// header.classList.add("bg-black");
console.log(header.classList);




