const  express =require  ('express')
const  {getTweets,createTweets} = require ('../controlllers/Tweets')

const router = express.Router();

router.get('/',getTweets)
router.post('/',createTweets)
//router.get('/',getTweets)

module.exports=router