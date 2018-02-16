Server backend with two endpoints: 
/localpress and /globalpress. 
Both endpoints can be accessed using a simple parameterless GET request and will return JSON documents. 

JavaScript code calls both endpoints and creates a JavaScript array that contains the from the source with parameters 
for page title and headline. 

The data array is sorted by the timestamp descending and reformatted.

I used these frameworks: node.js as server, express for routing, ejs as template engine, body-parser middleware.
I used these technologies: es6, javascript, html5 for semantics, sass
