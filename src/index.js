const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/data', (req, res) => {
    // Handle post request
    res.send('Data received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

