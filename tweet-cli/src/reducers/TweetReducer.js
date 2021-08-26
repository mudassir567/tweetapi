import { FETCH_ALL, CREATE } from '../constants/actionConst';

export const TweetReducer =(tweets = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
          return [...tweets, action.payload];
        default:
          return tweets;
    }
};
