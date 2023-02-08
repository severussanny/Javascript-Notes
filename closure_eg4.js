function func(){
    let called= false;
    return function(){
        if(called===false)
        {
            console.log("Hi u called me!");
            called=true;
        }
        else{
            console.log("already called");
        }
    }
}

const myFunc= func();
myFunc();
myFunc();






