// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

let message=new Promise(function(resolve,reject){
   setTimeout(function(){resolve('THe sky is clear')},2000)
})
const getTextMessage=async()=>{
    let output= await message
    console.log({output});
}
getTextMessage()

// You have an array of user IDs and a function getUserData(id) that returns a 
// Promise with user data when given a user ID. Write an asynchronous function that fetches 
// and logs the data for each user ID one by one, in sequence.

// const userIds=[2,1,8,9,0];
// async function fetchAndLogUserData() {
//   for (const id of userIds) {
//     const userData = await userIds(id);
//     console.log(userData);
//   }
// }

// fetchAndLogUserData();

// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.
let result=true;
let promise= new Promise(function(resolve,reject){
    if(result){
        resolve('Registration was successful')
    }
    else{
        reject('Not registered ')
    }
}).then(()=>{console.log('You can register')})
.catch(()=>{console.log('You can register via the website')})
.finally(()=>{console.log('You will register');});
const performTask=async()=>{
   let success= await promise
  console.log({success});
}
