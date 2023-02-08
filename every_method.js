// every method
// eg - > array m saare element even hai..vo check kro

const arr=[1,2,3,4,5,6,7];
const isTrue= arr.every((num)=>num%2===0 );
console.log(isTrue);  // false
 // callback function boolean return krega
  // every method --> boolean return krega
  const userCart = [
    {productId : 1 , productName : "Laptop" , productPrice  : 45000} ,
    {productId : 2 , productName : "Phone" , productPrice  : 42000} ,
    {productId : 3 , productName : "Watch" , productPrice  : 95000} ,
    {productId : 4 , productName : "Apple Tablet" , productPrice  : 85000} ,
    {productId : 5 , productName : "Earphone" , productPrice  : 23000} ,
];

const isTru= userCart.every((user)=> user.productPrice<=100000 );
console.log(isTru);  // true

// some method
// array m kya ek b nom even h
// some method  -> return true

const array=[1,2,3,4,5,6,7];
const ans= array.some((num)=> num%2===0);
console.log(ans);  // true
 
const uCart = [
    {productId : 1 , productName : "Laptop" , productPrice  : 45000} ,
    {productId : 2 , productName : "Phone" , productPrice  : 42000} ,
    {productId : 3 , productName : "Watch" , productPrice  : 95000} ,
    {productId : 4 , productName : "Apple Tablet" , productPrice  : 85000} ,
    {productId : 5 , productName : "Earphone" , productPrice  : 23000} ,
];
const check= uCart.some( (user)=> {
    return user.productPrice >=100000 ;
});
console.log(check); // false

// fill method
// value start end

// const myArray= new Array(10).fill(-1);
// here 10 is size of the array , -1 the element
// console.log(myArray); 


const myArray= [1,2,3,4,5,6,7,8];
//3,4,5, --> 0,0,0    use fill here
// value start index , end index+1
// start index means jahan se fill krna start krna h
// end index means jis index tk fill krna h
myArray.fill(0, 2,5);
console.log(myArray);
// 1,2,0,0,0,6,7,8;

// splice method
// array k beech mai kuch insert ya delete krne pr kaam aata h
// start , delete , insert

const newArray= ["item1", "item2" , "item3"];
// delete
//newArray.splice( startIndex , no_Of_Items_To_Be_Deleted) ;
const deleted_item = newArray.splice(1,1); 
// yeh array return krta h jisme deleted items stored hote h
console.log(newArray); // i1 , i3 
// console.log(`deletd item is ${deleted_item}`); // item2 
console.log(typeof deleted_item)// object as array return hoga
// original array changes


// insert
// newArray.splice( startIndex , no_Of_Items_To_Be_Delete , insertedItem)
newArray.splice(1,0,"inserted string");
console.log(newArray);  // i1 , insertedString , i3

// insert and delete together
// newArray.splice (startIndex jahan se deletd krna , items to be deleted , insert i1, insert i2...);
const del_item_arr=newArray.splice(0,2,"A","B","CDEF","XYZ");// deleted item ko storen krlo array m
console.log(newArray);
console.log(del_item_arr);
//['A', 'B', 'CDEF', 'XYZ', 'item3']
//['item1', 'inserted string']

