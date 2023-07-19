// create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});