// to do list project complete 
// done button pr click krne se ...list content stikeThrough ho jayega
// remove button pr click krnse .....todo item remove

const todoForm= document.querySelector(".form-todo");
const todoInput= document.querySelector(".form-todo input[type='text']");
const todoList= document.querySelector(".todo-list");
// console.log(todoInput); 
// console.log(todoForm);
todoForm.addEventListener("submit", (e)=>{
    // console.log('form submitted!');
    // jaise hi enter pr click kia..page refresh hora h
    // use event object e --> e.preventDefault refresh hone se rokta h
    // bhoot jyada use hota h yeh

    e.preventDefault();
    // console.log(todoInput.value);
    // todoInput.value="";

    // click krne k baad new li item add ho jaye
    const newTodoText=todoInput.value;
   const newLi= document.createElement("li");
//    newTodoItem.textContent=todoInput.value;
// //    console.log(newTodoItem);  
  
//       console.log(newTodoItem.classList);
//    const todoList= document.querySelector(".todo-list");
// //    console.log(todoList);
//    todoList.append(newTodoItem);

    const newLiInnerHtml=`
    <span class="text"> ${newTodoText} </span>
    <div class="todo_buttons"> 
        <button class="todo-btn done">Done</button>
        <button  class="todo-btn remove">Remove</button> 
    </div>`;
 newLi.innerHTML=newLiInnerHtml;
//  console.log(newLi);
   todoInput.value="";

   // now add this to the list and show in the screen
//    const todoList= document.querySelector(".todo-list");
   todoList.append(newLi);

});

////////////// now done and remove button ///////////////////////
// todolist pr event delegation add krenge

todoList.addEventListener("click" , (e)=>{
    // console.log(e.target);
    // check if user clicked on done button
    //  console.log(e.target.classList); 
     if(e.target.classList.contains("done")){
        console.log('done button print');
        const liSpan= e.target.parentNode.previousElementSibling;
        console.log(liSpan);
        liSpan.style.textDecoration="line-through";
     }
     if(e.target.classList.contains("remove")){
        console.log('do u want ot remove an item?');
        // remove k case mai parent k parent pr jaana h
        const currentLi= e.target.parentNode.parentNode;
        console.log(currentLi);
        currentLi.remove();
     }
});
// abhi we are in button class...hume parent k sibling pr jaana h
// parent of button is div...sibling of div is span
// const liSpan= e.target.parentNode.previousElementSibling;

// {/* <span class="text"> Do this Do that  </span>
// <div class="todo_buttons"> 
//     <button class="todo-btn done">Done</button>
//     <button  class="todo-btn remove">Remove</button> 
// </div> */}
// 























