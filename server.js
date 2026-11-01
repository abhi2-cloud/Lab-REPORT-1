// Task 1: Node.js Built-in HTTP Server
// Import the built-in 'http' module
const http = require('http');

// Define port number
const PORT = 3000;

// Create an HTTP server using http.createServer()
// The callback handles incoming request (req) and response (res) objects
const server = http.createServer((req, res) => {
  // Set the response HTTP status code to 200 (OK)
  // Set the Content-Type header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the text "Hello" to the browser
  res.end('Hello');
});

// Run the server on port 3000
server.listen(PORT, () => {
  // Display a server-running message in the terminal
  console.log(`Server is running at http://localhost:${PORT}`);
});

