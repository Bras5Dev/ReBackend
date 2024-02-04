// this middleware will be executed on all routes and handle all logic for error handling

const express = require('express');
const app = express();

const universalMiddleware = (err, req, res, next) => {
  console.log('Middleware executed on all routes');

  var statusCode = res.status ? res.status : 500;

  res.json({
      status: err.stack,
      message: err.message,
  });

  next();
};

module.exports = universalMiddleware;