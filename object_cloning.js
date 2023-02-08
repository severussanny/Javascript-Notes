// object cloning using object.assign

// initially memory same assign hoti h..obj1 and obj2 ko

// const obj1 ={
//     key1 : "val1",
//     key2 : "val2"
// };

// const obj2= obj1;

// obj1.newKey= "newValue";
// console.log(obj1);
// console.log(obj2); 
// key value added to obj1 ..will also added to obj2...as they pointed to same addres loc

// use spread operator for cloning

const obj1 ={
        key1 : "val1",
        key2 : "val2"
    };
    
    //const obj2= {...obj1}; // new way h spread operator ka use
    const obj2= Object.assign({}, obj1); // cloning other way also (old way )
    // more discuss in OOPS

     
    obj1.newKey= "newValue";
    console.log(obj1);  // {key1: 'val1', key2: 'val2', newKey: 'newValue'}
    console.log(obj2); // {key1: 'val1', key2: 'val2'}













