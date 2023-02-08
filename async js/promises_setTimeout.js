// promise and setTimeout

// I want to resolve / reject promise after 2s

function myPromise(){
    return new Promise((resolve, reject)=>{
         const value=false;
         setTimeout(()=>{
            if(value)
            resolve();
            else
            reject();
         },1000)
        
    });
}

myPromise().then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")});














