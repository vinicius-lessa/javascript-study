// JSON - JavaScript Object Notation
//  JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

// JSON.parse() - Converts a JSON string into a JavaScript object
console.log("Json String > JavaScript Object:\n", JSON.parse(jsonText));

const javaScriptObject = {
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
};

// JSON.stringify() - Converts a JavaScript object into a JSON string
console.log("\nJavaScript Object > JSON String:\n", JSON.stringify(javaScriptObject));

const javaScriptArray = [  
  {
    "name": "Alice",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Bob",
    "age": 25,
    "city": "Los Angeles"
  }
];

// Convert JavaScript array to JSON string
const jsonArrayString = JSON.stringify(javaScriptArray);
console.log("\nJavaScript Array > JSON String:\n", jsonArrayString);