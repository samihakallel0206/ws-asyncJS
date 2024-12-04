// Title: Promises in JavaScript
// Example Task: Create a Promise that resolves after a certain delay.

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Usage
// delay(2000).then(() => {
//   console.log('Promise resolved after 2000ms');
// });
//______________________________________________________________________________________________

// Title: Consuming Promises
// / Example Task: Chain multiple Promises to simulate sequential execution.

// function stepOne() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Step One Completed");
//     }, 1000);
//   });
// }

// function stepTwo(message) {
//   console.log(message);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Step Two Completed");
//     }, 2000);
//   });
// }

// stepOne()
//   .then(stepTwo)
//   .then((result) => {
//     console.log(result);
//   });
// //____________________________________________________________________________________

// Title: Queuing Promises
// Example Task: Use Promise.all() to execute multiple Promises in parallel.

// Example Task
// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve("Promise 2 resolved"), 2000)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(resolve("Promise 3 resolved"), 1000)
// );

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// //________________________________________________________________________________________

// Example Task: Use async/await to simplify asynchronous code.

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved after 2 seconds");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();
//______________________________________________________________________________________
// Title: Error Handling with JS
// Best practices for error handling

// function asyncTask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       console.log(randomNumber);
//       if (randomNumber > 0.5) {
//         resolve("Task completed successfully");
//       } else {
//         reject(new Error("Task failed"));
//       }
//     }, 1000);
//   });
// }

// asyncTask()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

//_______________________________________________________
// Title: Practical Examples
// Example Task:  Implement a practical example using async/await.

// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     // Simulating fetching user data from a server
//     setTimeout(() => {
//       const users = {
//         1: { name: "John", age: 30 },
//         2: { name: "Alice", age: 25 },
//       };
//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("User not found"));
//       }
//     }, 1000);
//   });
// }

// async function getUserDetails(userId) {
//   try {
//     const user = await fetchUser(userId);
//     console.log("User Details:", user);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// // Usage
// // getUserDetails(1);
// getUserDetails(2);
