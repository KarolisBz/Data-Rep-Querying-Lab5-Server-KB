const express = require('express');
const app = express();
const port = 4000;

// error handling middlware allows us to catch server errors
// at the top because is is an interpreted language
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// if we get a request, 'Welcome to Data Respresentation & Querying'
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

// route parameter
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});