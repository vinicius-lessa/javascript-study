// ---------------------------------------------------------
// FETCH API
//  The Fetch API provides a modern, promise-based way to make HTTP requests in JavaScript. It allows you to fetch resources asynchronously across
//  the network and handle responses in a more flexible and readable manner compared to older methods like XMLHttpRequest.

// GET (default method)
fetch("https://apis.scrimba.com/jsonplaceholder/posts/1")

// POST
fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Holiday Nightmares",
    body: "When I was kidnapped in Scotland…",
    userId: 100,
  }),
});

// ---------------------------------------------------------
// Simple Approach (using .then())

fetch("https://apis.scrimba.com/jsonplaceholder/posts/1")
  .then((response) => response.json())
  .then((json) => console.log("Simple Approach:", json))
  .catch((error) => console.error("Simple Approach: Erro na requisição", error))
  .finally(() => console.log("Simple Approach: Requisição finalizada"));

// ---------------------------------------------------------
// Second Approach (using async/await)

const url = "https://apis.scrimba.com/jsonplaceholder/posts/1";
const response = await fetch(url);

if (!response.ok) {
  // 200-299 = successful responses
  console.log("Second Approach: Erro na requisição");
} else {
  const result = await response.json();
  console.log("Second Approach:", result);
}

// ---------------------------------------------------------
// Function Approach (using async/await)

async function myFunction() {
  const url = "https://apis.scrimba.com/jsonplaceholder/posts/1";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const result = await response.json();
    console.log("Function Approach:", result);
  } catch (error) {
    console.error("Function Approach:", error.message);
  }
}

myFunction();