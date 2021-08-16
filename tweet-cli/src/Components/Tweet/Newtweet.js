import React  from 'react'
import {Container, Button,Form,} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import {useDispatch,} from 'react-redux'
// import { AddTweetAction } from '../../actions/TweetAction'
import {getTweets} from '../../actions/TweetAction'
import {createTweets} from '../../actions/TweetAction'

const  Newtweet = ()=> {
  const [tweetData, setTweetData] = useState({title:'',tweetContent:''}); 
  
  const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(getTweets());
    },[dispatch])
 
    // const tweet = useSelector((state) => state.Tweet)
    //   console.log(tweet)
  


  const handleSubmit = (e) =>{
    //dispatch(AddTweetAction(tweettile))
    dispatch(createTweets(tweetData))
  }

    return (
      <>
        <Container className="pt-2">
          <h3>  </h3>

          <Form
            onSubmit={handleSubmit}
             className="d-flex justify-content-start">
            <Form.Group controlId="Title">
              <Form.Label>Tweet Title :</Form.Label>
              <Form.Control 
              value={tweetData.title}
               onChange={(e)=> setTweetData({ ...tweetData, title : e.target.value})}
               type="text" placeholder="whats up" /> <br />
              <Form.Group controlId="Content">
                <Form.Label>Tweet Description :</Form.Label>
                <Form.Control 
                as="textarea"
                value={tweetData.tweetContent}
                 placeholder="hit it whats on your mind..... " cols={40} rows={7} 
                 onChange={(e)=>setTweetData({...tweetData,tweetContent : e.target.value})} />
              </Form.Group>
              <Button  variant="info" size="lg" type="submit">
                        Submit
                    </Button>
            </Form.Group>
          
          </Form>
        </Container>

        {/* <CardColumns className="pt-2">
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
        <small className="text-light">
           {t.tweetContent} <cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  ))}
</CardColumns> */}
      </>
    );
}

export default Newtweet
