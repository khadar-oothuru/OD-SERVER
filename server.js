// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
const port = 3000; // Define the port your server will listen on

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route to handle POST requests
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
