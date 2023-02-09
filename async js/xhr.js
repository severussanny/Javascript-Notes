// XHR request krte hain hum server pr
// then hume xhr object milta h


// const url="https://jsonplaceholder.typicode.com/posts"
// const xhr= new XMLHttpRequest();
// console.log(xhr);
// onloaded , onreadystatechange, respoonsetext
// response , readyState , status kaafi imp hai iss object mai
// backend developer apis banakr dega....
// frontend vale fetch krenge usko

// yeh apis ko use krke server pr request krenge kuch

// http methods hote h
// GET POST PUT PATCH DELETE

// browser by default server pr GET request krta h

// json almost similar to javascript object
// but json mai keys always in double quotes
// json ->Javascript Object Notation

// browser ne request ki GET....
// response mai json mila

// jahan request krni h vo mera URL hai


const url="https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest();
// console.log(xhr);

// xhr object ko use krke request ko configure krna padega
// step1
// iss object pr open method use krna h
// yeh input mai request type lega (GET POST PUT PATCH DELETE)


// ready state ki value -> 0 upto 4 hoti hai
// yeh saara kaam browser krra h
// mdn xhr ready state
// to know more about ready state

// xhr ready state value
//  0 UNSENT Client has been created. open() not called yet
//  1 OPENED 	open() has been called.
//  2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
//  3	LOADING	Downloading; responseText holds partial data.
//4	DONE	The operation is complete.


console.log(xhr.readyState);
xhr.open("GET",url );
// yeh asynchronously hoga browser krega background mai
console.log(xhr.readyState);

//  xhr.onreadystatechange= function(){
//     if(xhr.readyState===4 ){
//     // console.log(xhr.response);
//     // xhr.response -> string hai
//     // muje isse object m convert krna h
//         const response= xhr.response; // yeh ek string h jisme json h

//         // iss json ko parse krke object banana h
//         const data_converted_to_object= JSON.parse(response);
//         // console.log(typeof data_converted_to_object); // object
//         console.log(data_converted_to_object); // ek list k under 100 obj

//     }
//  }// state change hone pr yeh chalgea

//  xhr.send()//--> to send the request
// readyState value = 4 ..then hi response milega

// if url glt h..ya method glt h..posts--> postsss
// empty object milega
// status code -> 404 which shows error..with this


// 1xx -> informational response
// 2xx Successful responses
// 3xx Redirection messages
// 4xx Client error responses

// 5xx Server error responses

// xhr.onload tbhi chlega jb readystate 4 hogi
xhr.onload=function(){
    console.log(xhr.readyState);
    const response= xhr.response;
    const data_converted_to_object= JSON.parse(response);
    console.log(data_converted_to_object); // ek list k under 100 obj
}
xhr.send();





