// import express.js
const express = require('express');

const PORT = process.env.PORT || 3001;
// instantiate express server and assign it to app variable so that we can chain on other methods to the express server later
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// use middleware to parse strings, arrays, json objects
app.use(express.json());
app.use(express.urlencoded());
// serve static files in public directory
app.use(express.static('public'));

// Use api routes
app.use('/api', apiRoutes);
// html routes
app.use('/', htmlRoutes);

// adding listen method to make server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})