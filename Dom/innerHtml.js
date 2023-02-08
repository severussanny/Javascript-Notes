// header k ndr jo jo likha hua h..vo inner html hai
// div headline class k ndr jo jo likha h...vo innerHtml hai

const headline= document.querySelector(".headline");
console.log(headline); //<div class="headline">…</div>
 console.log(headline.innerHTML);
//  <h2 id="Main-heading">Manage your task <span style="display: none;">Hello</span></h2>
//  <button class="btn btn-headline">Learn More</button>

headline.innerHTML="<h1> Inner Html changed </h1>";
headline.innerHTML+="<button class=\"btn\"> learn More </button>";





