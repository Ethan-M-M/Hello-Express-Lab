const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

app.get('/index', (req, res) => {
    response.send("<h1>Hello, <b>home</b>!</h1>");
});
app.get('/menu', (req, res) => {
    response.send("<h1>Hello, <b>menu</b>!</h1>");
});
app.get('/info', (req, res) => {
    response.send("<h1>Hello, <b>info</b>!</h1>");
});
app.get('/store', (req, res) => {
    response.send("<h1>Hello, <b>store</b>!</h1>");
});

app.get('/:other', (req, res) => {
    console.log(req.other)
});

app.get('/:page', (req, res) => {
    console.log("You made it to the " + URL + "!")
});