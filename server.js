const express = require('express');
const app = express();
const port = 4000;

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

// error handling middlware allows us to catch server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});