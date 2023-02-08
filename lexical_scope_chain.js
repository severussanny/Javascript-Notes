const lastName="gupta";
const printName= function(){
    const firstName="Sanidhya";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
printName();

// sanidhya
// gupta

 // firstName , lexically outside printName m present h
 // lastName , pehle myFun m dhunda...vahan nhi...then printname mai..udhr b nhi mila
 // then globally outside dekha..vahan mil gya
 

