//jshint esversion:6

const express = require("express");
const parser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/Restaurantdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Schema for document
const contact = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  time: Date
}, {
  timestamps: true
});

//Model For Table
const contactModel = mongoose.model('contact', contact);

app.use(
  parser.urlencoded({
    extended: true,
  }),
  express.static("public")
);
app.set("view engine", "ejs");


var object = [];
var contactData = [];
var title = "Tulsi Diner";
var about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Auctor urna nunc id cursus metus.Faucibus turpis in eu mi.Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam.Libero justo laoreet sit amet cursus.Sem viverra aliquet eget sit amet tellus cras adipiscing enim.Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.Posuere sollicitudin aliquam ultrices sagittis orci a.Ultrices dui sapien eget mi proin.Id consectetur purus ut faucibus pulvinar elementum integer."

app.get("/", (req, res) => {
  res.render("index", {
    name: title,
    about: about
  });
});

app.post("/", (req, res) => {

  console.log("Post method called");
  object = {
    name: req.body.name,
    email: req.body.Email,
    number: req.body.Number,
    time: req.body.time,
    person: req.body.persons
  };

  console.log(object);
});

app.get("/:route", (req, res) => {
  var paramsValue = req.params.route;
  res.render(paramsValue, {
    about: about
  });
});

app.post("/contact", (req, res, next) => {
  contactData = {
    name: req.body.username,
    email: req.body.useremail,
    message: req.body.message
  };
  console.log(contactData);

  contactModel.create(contactData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Document added");
      res.render("response");
    }
  });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});