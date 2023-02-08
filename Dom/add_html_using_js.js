// create and  add element using js
// add new html elements to page



// innerHTML to add new html element
// const todoList=document.querySelector(".todo-list");
// console.log(todoList); // <ul class="todo-list">…</ul>
// console.log(todoList.innerHTML); //  <li>todo -1</li>
// todoList.innerHTML="<li> New todo changed </li>";
// console.log(todoList.innerHTML);// <li> New todo changed </li>

// todoList.innerHTML+="<li> todo - 2 </li>";


// when you should use it , when u should not
// inner html kbhi use nhi krne chahiye usse performance issue h
// browser jb b koi element add krta h....toh vapas puri inner html travel krta h
// then uske baad append krta h...so O(n) time


// if inner html pura change krna h..toh use kro


///////////////////// best way ///////////////////////////////////////////

// document.createElement()
// append
//prepend
//remove

// const newTodoItem=document.createElement("li");
// // const newTodoItemText= document.createTextNode("Teach students");
// // //  console.log(newTodoItem); // <li> </li> 
// // newTodoItem.appendChild(newTodoItemText);
// newTodoItem.textContent="Teach students";
// console.log(newTodoItem); //  <li> Teach students </li> 
// // abhi ui m add nhi hua h

// /////////////////// ui m add krna h newTodoItem ko /////////////
// // todo list m add krna h yeh newTodoItem ko

// const todoList=document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// console.log(todoList); //  ul class="todo-list">…</ul>

// // prepend starting m add krega
// const otherTodoItem=document.createElement("li");
// otherTodoItem.textContent="complete js part 2 today";
// todoList.prepend(otherTodoItem); 

// remove case
// const todo1= document.querySelector(".todo-list li");
// console.log(todo1);//<li>todo -1</li>
// todo1.remove();


// abhi tk todo list k andr append remove krre the
// ab form k baad aur ul se pehle html element insert krna h
// ul k pehle insert krne k liye...before use
// after insert k liye..after use
  

// before
//after

// const newTodoItem=document.createElement("li");
//  newTodoItem.textContent="Teach students";
//  const todoList=document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);

///////////////////////////////////////////////////////////////////////////////

//elem.insertAdjacentHTML(where , html)
// beforebegin
// afterbegin// prepend vala kaam
//beforeend // apend vala kaam
//afterend
const todoList=document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li> Teach students </li> ");
// todoList.insertAdjacentHTML("afterbegin ", "<li> complete part2 js </li> ");
// append prepend mostly use hota h

// ul list se pehle insert krna h...toh beforebegin
// ul list k baad insert krna ...toh after end
//  todoList.insertAdjacentHTML("beforeBegin ", "<h2> js completed!</h2>");






