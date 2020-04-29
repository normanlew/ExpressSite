const express = require('express');
const { projects } = require('./data.json');
const path = require('path');

const app = express();

// view engine setup
app.set(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  console.log('test');
  res.render('index', { projects });
});

app.use('/about', (req, res, next) => {
  console.log('test2');
  res.render('about');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});