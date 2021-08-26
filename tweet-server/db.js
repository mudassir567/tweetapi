const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  // useFindAndModify:false,
  useUnifiedTopology: true,
};

mongoose
  .connect('mongodb+srv://turbo:pasha123123@dnine.dzvqe.gcp.mongodb.net/twitter-app?retryWrites=true&w=majority', connectionParams)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
