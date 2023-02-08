// compilation
// code execution

// why compilation

// how js executes codes


// what is global execution context
// what is local execution context

// closures
console.log(this);
console.log(window);
console.log(firstName); // undefined
var firstName="Sanidhya";
console.log(firstName); // sanidhya

// code compilation 3 steps m hota h
//1. tokenising / lexing .. code chote chote chunks m divide hota h..known as token
//2. parsing...tokens se Abstract Syntax Tree generate krta h
// 3. code generation.. AST se executable file bnti h phir..
 

// COMPILATION PHASE
// ECMA Scrpit documentation says
// 1. early eroor checking hona chahiye
//2. determining appropriate scope for variables
// means konsa variable kahan belong krta h
// code execute krne se pehle hi js ko saare variables ka scope pata chl jaata h...becoz of compilation

// for above two checking...code ko parse krna hi padega
// so compilatioon is needed
 
// js har variable ka scope find krega...firstName kisi fun k andr nhi h..
//firstName ---> Global Scope


// CODE EXECUTION PHASE
// in js code executes inside -> execution context
// sbse pehle global execution context create hota h


// GLOBAL EXECUTION CONTEXT
// 1. creation phase
// 2. code execution phase

// Global execution creation phase m kya kya hota h?


















