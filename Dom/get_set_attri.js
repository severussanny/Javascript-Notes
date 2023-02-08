// get and set attributes
const link= document.querySelector("a");
console.log(link);
// {/* <a href>Home</a> */}......href attribute h....a tag ka
// class name type id value placeholder sb attributes hain
console.log(link.getAttribute("href").slice(1)); // #Home...Home

const inputElement= document.querySelector(".form-todo input");
console.log(inputElement);
// {/* <input type="text" name id placeholder="Add Todo"></input> */}
console.log(inputElement.getAttribute("type")); // text

link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href")); // https://google.com














