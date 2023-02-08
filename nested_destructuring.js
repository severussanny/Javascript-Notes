// nested destructuring
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'fe male'},
]

const [user1, user2,user3]=users;
// console.log(user1);
const [ {firstName}, {userId : user2Id} , {gender}]=users;
console.log(firstName , gender , user2Id );

