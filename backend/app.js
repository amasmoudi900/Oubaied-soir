// importer le module express
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import axios module
const axios = require("axios");
// import User model
const User = require("./models/user");
// import Match model
const Match = require("./models/match");
// create express application named app
const app = express();

// Connect app to DataBase named oubaiedDB
mongoose.connect("mongodb://localhost:27017/oubaiedDB");
// Configure body-parser
// Send response with JSON format
app.use(bodyParser.json());
// Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// app.METHODE_HTTP("/path", (req,res)=> {
// Traitement Logique
// });

// Traitement logique de : Add Match
app.post("/matches", (req, res) => {
  console.log("Here into add match", req.body);
  let match = new Match(req.body);
  match.save((err, doc) => {
    if (err) {
      console.log("Here error", err);
    } else {
      res.json({
        message: "Match Added with success",
      });
    }
  });
});

// Traitement logique de : getAllMatches
app.get("/matches", (req, res) => {
  console.log("Here into get all matches");
  Match.find().then((docs) => {
    res.json({
      result: docs,
    });
  });
});

// Traitement logique de : Get match by ID
app.get("/matches/:id", (req, res) => {
  console.log("Here into get match by ID", req.params.id);
  // search object by ID
  Match.findOne({ _id: req.params.id }).then((doc) => {
    console.log("Here doc after find", doc);
    res.json({
      result: doc,
      message: "Here object",
    });
  });
});

// Traitement logique de : Delete match by ID
app.delete("/matches/:id", (req, res) => {
  console.log("Here id = ", req.params.id);
  Match.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("Here result after delete", result);
    res.json({
      message: "Match deleted with success",
    });
  });
});

// Traitement logique de : Update match by ID
app.put("/matches", (req, res) => {
  console.log("Here into update match", req.body);
  Match.updateOne({ _id: req.body._id }, req.body).then((result) => {
    console.log("Here result from DB after update", result);
    res.json({
      message: "Match updated with success",
    });
  });
});
// Traitement logique de : Signup user
app.post("/users/signup", (req, res) => {
  console.log("Here into signup", req.body);
  let user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      console.log("Here error", err);
    } else {
      console.log("Here document", doc);
      res.json({
        message: "User added with success",
      });
    }
  });
});

// Traitement logique de : Login user
app.post("/users/login", (req, res) => {
  console.log("Here into user ", req.body);
  User.findOne({ email: req.body.email, pwd: req.body.pwd }).then((doc) => {
    console.log("Here finded user", doc);
    if (doc) {
      res.json({
        result: doc,
        message: "1",
      });
    } else {
      res.json({
        message: "0",
      });
    }
  });
});

// Traitement logique de : Search Match by Team One
app.post("/matches/search", (req, res) => {
  console.log("Here object", req.body);
  Match.find({ teamOne: req.body.teamOne }).then((docs) => {
    console.log(`Here all matches where teamOne = ${req.body.teamOne}`, docs);
    res.json({
      result: docs,
    });
  });
});


app.post("/weather", (req, res) => {
  console.log("Here into weather", req.body);
  // Call axios to send request
  let key = "62ee756a34835483299877a61961cafb";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
  axios.get(url).then(
    (data)=> {
      console.log("Here data weather", data);
    }
  )
});

// app is importable
module.exports = app;
