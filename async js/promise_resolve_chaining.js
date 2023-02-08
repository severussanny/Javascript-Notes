// promise.resolve
// promise.chaining

// promise.resolve(input) ek input lega...aur return m ek promise dega...jiski value vo input hogi

const myPromise=Promise.resolve(15);
myPromise.then((value)=>{
    console.log(value);
})
// 15 is output

// then() method---> always returns a promise

function myProm(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    });
}
myProm().then((value)=>{
    console.log(value); // foo
    value+='baar';
    return value;
    // internally  esa hora h
    // return Promise.resolve(value)
    // ab yahan value return nhi hua h....
    // ke promise return hua h
    /// dobara se then laga skte hain
    
}).then((value)=>{
    console.log(value); // foobaar
    value+='ddddd';
    return value;
    // agr return nhi likhunga
    // toh undefine return hoga
    // Promise.resolve(undefine);

}).then((value)=>{console.log(value)}) // foobaarddddd
.then(value=>{console.log(value)}) // undefined
.then(value=>{console.log(value)}) // undefined
.then(value=>{console.log(value)}); // undefined
//  // Promise.resolve(undefine);


