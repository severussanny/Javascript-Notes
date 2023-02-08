const mainFun=()=>{
    function sum(n){
        let s=0;
        for(let i=1; i<=n; i++)
        s+=i;
        return s;
    }
    let sumTot= sum(10);
    const firstChar = str => str[0];
    const str="99991111";
    console.log(firstChar(str) , sum(5));

    const mulTwo = (a,b) => a*b;
    console.log(mulTwo(8,9));
}
mainFun();