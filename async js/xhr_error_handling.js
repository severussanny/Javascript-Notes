const url="https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest();
xhr.open("GET",url );

xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){
    const data=JSON.parse(xhr.response);
    console.log(data);
     // hume id =4 user chahiye h
     // toh vapas request krenge
    const id= data[3].id;
    const newURL=`${url}/${id}`;
    const xhr2= new XMLHttpRequest();
    xhr2.open("GET" , newURL);
    xhr2.onload=()=>{
      const data2= JSON.parse(xhr2.response);
      console.log(data2);
    }
    xhr2.send();
    }else{
        console.log("something went wrong");
    }
}
xhr.send();

// internet or network related error k liye
xhr.onerror=()=>{
    console.log("network related eroor")
}

// above is callback hell




