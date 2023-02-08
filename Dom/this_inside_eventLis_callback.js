// this keyword inside event listener callback



const btn= document.querySelector(".btn-headline");
function myFunc(){
    console.log('u clicked me!!');
    console.log('value of this');
    console.log(this);
}
// btn.addEventListener("click", function(){
//     console.log('u clicked me!!');
//     console.log('value of this');
//     console.log(this);

// });

btn.addEventListener("click", myFunc);
// normal functions k case m this ki value
// u clicked me!!
//value of this
// <button class="btn btn-headline">Learn More</button>
// this ki value vo button khud hi hoga jo click kia h



// arrow functions
btn.addEventListener("click", ()=>{
    console.log('u clicked me!!');
    console.log('value of this');
    console.log(this);

});
/// arrow functions k case m this ki value....window object hai
// window object kaise aaya h...
// arrow functions k case mai vo this ki value apne lexical environment scope se leta h....iss case m vo window object hai
// arrow function mai khud ka this nhi hota h
// vo this ki value surrounding se leta h


// normal function-> jis element pr event listener lagaya h.....voi hogi this value
//arrow function- > // arrow function mai khud ka this nhi hota h
// vo this ki value surrounding se leta h













