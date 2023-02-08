const rootNode= document.getRootNode();
// console.log(rootNode); 

//to see child nodes
// console.log(rootNode.childNodes); //return a node list NodeList [html]
const htmlElementNode=rootNode.childNodes[0];
// console.log(htmlElementNode);
// if object representation chahiye h toh
// console.dir(htmlElementNode);
 
// console.log(htmlElementNode.childNodes); // NodeList(3) [head text body]
// const headElementNode=htmlElementNode.childNodes[0];
// const textNode=htmlElementNode.childNodes[1];
// const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode);
// console.log(bodyElementNode);

// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling);

// browser js ki help se hi html bananta h
// white space ....browser humare webpage m nhi dikhte h..becoz already set krke rkhta h browser

// {/* <style>
//     *{
//         // white-space:normal;// if this normal is changed
//         white-space: pre;
//     }
// </style> */}

// nextElementSibling --> jitne b newLine Space textNode hogi..sbko ignore krke...element node dega directly

// console.log(headElementNode.childNodes); /// using white space as normal
//NodeList(5) [text, title, text, script, text]

// task..heading ko select krke uske parent pr jaao...and bg color change kro

// const h1=document.querySelector("h1");
// const div= h1.parentNode ; 
// {/* <div class="container">…</div> */}
// div.style.color="#efefef"; 
// div.style.backgroundColor="#333";
// const body= h1.parentNode.parentNode;
// body.style.color="#efefef"; 
// body.style.backgroundColor="#333";
// const body= document.body; 


/// query selector hum kisi b element pr laga sakte hain...
// html head body ..kisi bhi element node pr
// const head=document.querySelector("head");
// console.log(head);
// const title= head.querySelector("title");
// console.log(title.childNodes); 

// hume childNode ki list m sirf element node chahiye h...newLine Space vali nodes nhi chaiye h

const container=document.querySelector(".container");
// console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
console.log(container.children); // HTMLCollection(2) [h1, p]


