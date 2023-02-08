function ricePromise(){
    const bucket=['vegetable', 'cake', 'rice', 'salt', 'oil', 'chips'];
    return new Promise((resolve , reject)=>{
       if(bucket.includes("vegetable") && bucket.includes("rice") &&     bucket.includes("salt")){
        resolve({value: "friedRice"});
       }
       else{
         reject("could not do it");
       }
    })
}

ricePromise().then(
    // jab promise resolve hoga
    // jo data promise resolve hokr dega..vo hum yahan lenge

    (myFriedRice)=>{
        console.log("let's eat : ", myFriedRice);
    }
).catch((error)=>{
   console.log(error);
});


