import React from 'react'
import {Card, CardColumns } from "react-bootstrap"
import {useSelector} from 'react-redux'
//import Newtweet from '../Tweet/Newtweet';
function Tweetcard() {


     
    const tweet = useSelector((state) => state.Tweet)
      console.log(tweet)
  
    return (
      <>

<CardColumns className="pt-2">
{
      tweet && tweet.reverse().map((t)=>( 
      
  <Card
  key ={t.id} 
  bg="primary" text="white" className="text-center">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      {t.title} 
      </p>
      <footer className="blockquote-footer">
        <small className="text-light">{t.tweetContent} <cite title="Source Title"> </cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  ))}
</CardColumns>
      </>

    );
}

export default Tweetcard
