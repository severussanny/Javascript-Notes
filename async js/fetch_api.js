// very imp hai...easy b h
const url="https://jsonplaceholder.typicode.com/postsss";

//fetch inbuilt function h jo promise return krra hai

// fetch(url).then(
//     (response)=>{
//         // console.log(response); // isme data nhi milra h..methods hain aur keys hain
//         // json vala data kahan h?
//         // response pr json method use kr skte hain
//         //response.json()- > yeh json ko parse krega
//         // console.log(response.json()); 
//         // response.json()-> returns a promise
//         return response.json();
//     }
// ).then(data=>{
//     console.log(data); // parsed json milega
//     console.log(typeof data); // object...list of object

// })

// fetch resolve hokr response dega
// response pr json method use krne h parse krne k liye
// phir se data return krke chaining kr di

fetch(url).then(
    (response)=>{
        console.log("inside then");
        if(response.ok){
            console.log(data);  
            return response.json();
        }else{
            throw new Error("something went wrong");
            // error throw krne k baad reject hua...so catch block chalgea

        }
    }
).then((data)=>{
        console.log(data);  
}).catch( error=>{
    console.log("inside catch block");
}
);

// very very imp
// fetch reject sirf network / Internet related errors mai hoga...
// 404 network related error nhi h....
// isliye humara catch block nhi chalge


// get -> data ko read krne server se k liye hota h 
// post -> data ko create krna server pr..isliye use use hota




