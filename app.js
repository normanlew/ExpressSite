const express = require('express');
const { projects } = require('./data.json');
const path = require('path');

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/about', (req, res, next) => {
  console.log('test2');
  res.render('about');
});

app.get('/projects/:id', (req, res, next) => {
  const { id } = req.params;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === id) {
      return res.render('project', {theProject: projects[i]});
    }
  }
  next();

});

app.get('/', (req, res, next) => {
  console.log('test');
  res.render('index', { projects });
});

// This error handler was taken from a sample lecture at teamtreehouse.com
app.use( ( req, res, next) =>  {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use( (err, req, res, next) => {
  res.locals.error = err;
  // res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});