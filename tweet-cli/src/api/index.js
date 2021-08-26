import axios from 'axios'
 
const tweetsUrl = 'http://localhost:8083/tweets'

export const fetchTweets=  () =>axios.get(tweetsUrl)
export const createTweets=(newTweet)=>axios.post(tweetsUrl,newTweet)