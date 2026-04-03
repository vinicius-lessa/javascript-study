// JavaScript Browser Features

// ------------------------------------------------------------------
// DOMContentLoaded Event - Execute code when the DOM is fully loaded

// Vanilla JS (Recommended)
//  Most widely used modern approach
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM is ready (Vanilla JS)");
});

// Vanilla JS - IIFE (Immediately Invoked Function Expression)
//  Only runs after DOM is ready if placed at the end of the body
(() => {
    console.log("DOM is ready (IIFE)");
});

// jQuery
$(document).ready(function() {
    console.log("DOM is ready (jQuery)");
});

// jQuery (shorter version)
$(function() {
    console.log("DOM is ready (jQuery short)");
});

// ------------------------------------------------------------------
// DOCUMENT object Methods
//  Document object provides methods to interact with the HTML document

// document.getElementById() - Access an element by its ID
const myElement = document.getElementById('myElementId');
myElement.style.color = 'blue';
myElement.textContent = "This text is now blue!";

// document.createElement() - Create a new HTML element
const newDiv = document.createElement('aside');
newDiv.innerHTML = "Hello, World!"; // or newDiv.textContent;

// document.appendChild() - Append a child element to a parent element
const parentElement = document.getElementById('parentElementId');
parentElement.appendChild(newDiv);


// ------------------------------------------------------------------
// Window Object Methods
//  Window object provides methods to interact with the browser window

// alert() - Display an alert dialog box
alert("This is an alert message!");

//  prompt() - Display a dialog box that prompts the user for input
const userName = prompt("Please enter your name:");
console.log(`Hello, ${userName}!`);