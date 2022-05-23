document.getElementById("paragraph").textContent = "Hello World!";

// to write on browser which is DOM manipulation
window.alert("alert me");
let age = window.prompt("how old are you");
console.log("alert gone");
console.log(`I am ${age} age old`);
window.confirm(`Are you sure you are ${age} years old`)
// create element
let element = document.createElement("h1");
// can only be seen on the console
element.textContent = "You should see me now!"
// enabling you see it on browser
document.body.appendChild(element);

// creating canva
let canva = document.createElement("canvas");
canva.width = 200
canva.height = 500

// let ctx = canva.getContext('2d');
var ctx = canva.getContext('2d');

ctx.font = '20px Monospace';
ctx.fillText = ("Hello Canva", 50, 50);

document.body.appendChild(canva)