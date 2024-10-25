const express = require('express');
const app = express();
const port = 4000;
const path = require('path'); // getting path module to server files

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

// route parameter to fetch movies
// with status code
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // status code 200  means everything is okay
    res.status(200).json({ myMovies:movies }); // name-value array
});

// route index that serves the file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Serve static assets: Set up middleware to serve all static files (CSS, JS, etc.) from a public directory.
app.use(express.static('public'));

// handle get method from index.html
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// severs listens for a http request coming in
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});