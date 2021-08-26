const express = require("express");
port = process.env.port || 8083;
const  tweetRoutes= require("./routes/tweetRoutes")
const app = express();
//addtweet = require("./controlllers/Tweets");
const cors = require("cors");

require("./db");

app.use(cors());

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//addtweet = require("./controlllers/Tweets");
user = require("./controlllers/User");

app.use("/tweets", tweetRoutes);
app.use("/users", user);

app.get("/", (req, res) => {
  res.send("twitter clone");
});

app.listen(port, (params) => {
  console.log("the server runs on 8083");
});
