const mongoose =require("mongoose")


const tweetsSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        
    },
    tweetContent:{
        type:String,
        required:true,
        
    },
    tweetDate:{
        type:Date,
        default:Date.now
    }


})
const tweet=new mongoose.model('tweet',tweetsSchema)
module.exports=tweet