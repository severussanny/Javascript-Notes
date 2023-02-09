const url="https://jsonplaceholder.typicode.com/posts"

function sendRequest(method , url){
    return new Promise(function(resolve, reject){
       const xhr= new XMLHttpRequest();
       xhr.open(method, url, true);
        
       xhr.onload=()=>{
        if(xhr.status>=200 && xhr.status<300){
           resolve(xhr.response);
          // backend server se data aaya h usko resolve m pass kr dia h 
        }
        else{
            reject(new Error("something went wrong"));
        }
       }
       xhr.onerror= function(){
        reject(new Error("something went wrong"));
       }
       xhr.send();
    });
}

//sendRequest("GET" , url); // yeh ek promise return krega

const promise_recieved= sendRequest("GET" , url); 
console.log(promise_recieved); // promise pending
// ab promise ko resolve krna h hume
promise_recieved.then(
    // (data_recieved)=>{
    // //  console.log(typeof data_recieved); // typeof is string
    //  console.log( data_recieved); // all rows printe
   //}
   (response)=>{
    // response m json hai
     const data= JSON.parse(response);
     console.log(typeof data);// object
     console.log(data); // list of 100 obj
     return data;
   }
).then((data)=>{
    console.log(data[3].id);
    return (data[3].id);
}).then(
    (id)=>{
       const url2= `${url}/${id}`;
       console.log(url2);
       return sendRequest("GET", url2); // yeh b return promise krta h
    }
).then(
    (resolved_data)=>{
        console.log(resolved_data);
        console.log(typeof resolved_data);// json format string
        const datap= JSON.parse(resolved_data);
        console.log(typeof datap);// object
        console.log(datap); 
    }
);

// promise chaining hori h


// .then()-> returns a promise
// if return nhi likhenge..toh promise resolve hoga undefine k saath...
// kyuki return nhi likha h toh undefine return hoga

//

