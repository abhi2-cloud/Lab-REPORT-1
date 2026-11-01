// Task 2, Task 3, & Task 4: Express Server
// Import Express module using require('express')
const express = require('express');

// Create the Express application instance
const app = express();

// Define port number
const PORT = 3000;

// ==========================================
// Task 3: GET Routes
// ==========================================

// Route 1: GET /
// Return: "Welcome to Node.js and Express Server"
app.get('/', (req, res) => {
  // Status code 200 is set by default or can be explicit
  res.status(200).send('Welcome to Node.js and Express Server');
});

// Route 2: GET /about
// Return JSON data containing name and section
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'PAMPANA ABHI VEERA DURGA  LAKSHMAN',
    section: 'CSE GEN AI 2B'
  });
});

// Route 3: GET /time
// Return the current date and time using new Date()
app.get('/time', (req, res) => {
  const currentTime = new Date();
  res.status(200).send(currentTime.toString());
});

// ==========================================
// Task 4: 404 Error Handling
// ==========================================
// Middleware to handle unknown routes.
// Must be placed after all valid routes.
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server using app.listen(3000)
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

