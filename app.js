/*
Create Folder
touch app.js
npm init
mkdir public/images
mkdir views
npm install --save express
npm install --save ejs
npm install --save express-ejs-layouts
npm install --save body-parser //checks for form POSTS and does magic with the information
mkdir views/layouts
touch views/layouts/main-layouts.ejs


Open App.js

const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express(); //creates 'instance' of Express
app.set('views', __dirname + '/views'); //point Express to EJS/HTML files in the Views folder
app.set('view engine', 'ejs'); //Express will use EJS package for files in Views
app.use(express.static('public')); //makes the Public folder public http://localhost:3000/images/1.png
app.use(expressLayouts); // for layout templates
app.use(bodyParser.urlencoded({ extended: true}));
app.set('layout', 'layouts/main-layout');

*/
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true}));
app.set('layout', 'layout/main-layouts');


app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/login', (req, res, next) => {
  res.render('login');
});
app.post('/login', (req, res, next) => {
  const email = req.body.email;  //body-parser checks if form data is packaged and deliverable
  const password = req.body.password;
  if (email === 'wow@wow.wow') {
    res.render('welcome');
  }
  res.render('login');
  // res.send(email + "'s information was POSTED");
});
app.listen(3000, () =>{
  console.log("W4D4L1 Started");
});
