//jshint esversion:6

const express = require('express');
const parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(parser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    console.log("Post method called");
    var name = req.body.name;
    var email = req.body.Email;
    var number = req.body.Number;
    var time = req.body.time;
    var person = req.body.persons;
    console.log(name);
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});