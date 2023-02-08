console.log('script start!!!!!!');
const allButtons=document.querySelectorAll(".my-buttons button");
console.log(allButtons);// NodeList(3) [button#one, button#two, button#three]
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num=0;
        for(let i=0; i<=1000000000; i++)
        num+=i;
        console.log(e.currentTarget.textContent);
    });
});

let outerVar=0;
for(let i=0; i<=1000000000; i++)
outerVar+=i;
console.log(outerVar);
console.log('script ends!!!!!!');

// muje yeh callback function ko delay krna h...abhi click krte hi run ho jaata h
// to make process slow..humne for loop laga dia h..10^9 tk ka

// phle js file run hogi...then uske baad jo jo click kia h
// vo callback queue m aakr ek k baad ek run hoga


