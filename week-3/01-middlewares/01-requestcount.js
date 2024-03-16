const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

// let port = 3000;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

//----------------------------------------------------------------------

//app.use without a path applies the middleware to all requests.
app.use((req, res, next) => {
  requestCount += 1;
  console.log("Request Count : " + requestCount);
  next();
});

//-----------------------------------------------------------------------

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

// app.listen(port);

module.exports = app;
