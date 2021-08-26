const express = require("express");
const Tweetmodel = require("../model/Tweets_model.js");
const router = express.Router();

  const getTweets = async (req, res) => {
  try{
    const tweets = await Tweetmodel.find({});
    res.status(200).json(tweets)
  }
  catch (error){
    res.status(404).json({message:error.message})

  }
 // res.send(tweet);
}

  const createTweets = async (req, res) => {
  const { title, tweetContent } = req.body;

  const newtweet = new Tweetmodel({
    title,
    tweetContent,
  });
  
  try {
    let newobj = await newtweet.save();
    res.status(201).json(newobj);
  } catch (error) {
    res.status(409).json({message:error.message});
  }
}
module.exports ={getTweets,createTweets}
