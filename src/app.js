require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { NODE_ENV } = require('./config');
const reviewsRouter = require('./routes/reviews/reviewsRouter');
const commentsRouter = require('./routes/comments/commentsRouter');

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
  res
    .status(200) 
    .send('Hello, world!');
});

app.use('/reviews', reviewsRouter);
app.use('/comments', commentsRouter);

app.use(function errorHandler(error, req, res, _next) {
  let response;
  if(NODE_ENV === 'production') {
    response = { error: {message: 'server error'}};
  } else {
    console.log(error);
    response = { message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;