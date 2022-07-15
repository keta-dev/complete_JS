// const demo = document.getElementById('demo');

// demo.innerHTML = "<h1>JS Behind The Scene</h1>"

// THIS keyword

// function foo(num) {
//   'use strict'
//   console.log("number show", num);

//   this.count++;
// }

// foo.count = 0;

// var a;

// for (a = 0; a < 10; a++){
//   if (a > 5){
//     foo.call(foo, a);
//   }
// }

// console.log(foo.count);

// users = [{names: {...}, ...}, ...].map(user => {
//   user.displayData = fullName.bind(user.names);
//   return user;
// })

// OBJECT in JS
// function fullName(greeting) {
//   return this.firstName + " " + this.lastName + " " + greeting;
// }

// const names = {
//   firstName: "Miriam",
//   lastName: "Chiketa",
// };

// console.log(fullName.call(names, "Hey there!"));
// console.log(fullName.apply(names, ["my food"]));

// let seeNames = fullName.bind(names, "Welcome to Silicone Valley");
// console.log(seeNames());

// let customer = {
//   name: "Carl",
//   details: {
//     age: 82,
//     location: "Paradise Falls" // detailed address is unknown
//   }
// };
// let customerCity = customer.details?.address?.city;
// let customerCity = customer.details?.age?.location ?? 0;
// console.log(customerCity);
let document = ["name", 23, 45.00, "city", "school"];
const iterator = document.createNodeIterator(
  document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode()) !== null) {
  console.log(currentNode.textContent.trim());
}