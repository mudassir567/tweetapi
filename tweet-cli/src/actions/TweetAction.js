
import { FETCH_ALL, CREATE } from '../constants/actionConst';
import * as api  from '../api/index.js'

//action creators
export const getTweets =()=> async(dispatch)=>{
try{

    const {data}=await api.fetchTweets();
    dispatch({type:FETCH_ALL,payload:data});
}
catch(error){
    console.log(error.message)
}
}
export const createTweets =(post)=>async(dispatch)=>{
    try{
        const {data}=await api.createTweets(post);
        dispatch({type:CREATE,payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
















// export const AddTweetAction =(tweet)=>(dispatch,getState)=>{

// const {
//     Tweet:{tweets} 
// }=getState();

// const hadTweets = tweets.find((i) => i.tweet === tweet);

// if(!hadTweets && tweet!==''){
//     dispatch({
//         type:'ADD_TWEET',
//         payload:[{id : tweet,tweet}, ...tweets],
//     })
// }
// }