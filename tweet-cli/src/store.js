import{createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import{composeWithDevTools } from 'redux-devtools-extension'
import {TweetReducer} from './reducers/TweetReducer';
 
const reducer =combineReducers ({
//contains all reducers
Tweet: TweetReducer
})


const initialState={}
const middleware=[thunk]

 
const store= createStore(

    reducer,
    initialState,
composeWithDevTools(applyMiddleware(...middleware))

)
export default store;