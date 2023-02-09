// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  // post se data send on server...
  // data object form m hota h/
  //convert it into json string format


// fetch(url, object).then((response)=>{
//     return response.json();
// }).then((json)=>{
//     console.log(json);
// })

const url="https://jsonplaceholder.typicode.com/posts";
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// json.stringify se object ko json m convert krte h'
// content type batana bhoot imp h inside the header
