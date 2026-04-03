// WINDOW Api

// Load Event (will not work in Node.js environment - only in browsers)

const image = new Image();
image.src = "https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg";

// Event name with addEventListener
image.addEventListener('load', (event) => console.log("addEventListener: Image has loaded"));
image.addEventListener('error', (event) => console.log("addEventListener: Image has NOT loaded"));

// Event handler property
image.onload = (event) => console.log("onload: Image has loaded");
image.onerror = (event) => console.log("onerror: Image has NOT loaded");