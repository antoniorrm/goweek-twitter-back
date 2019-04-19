const express = require('express');

const router = express.Router();
const TweetController = require("./controllers/TweetController")

router.get('/tweets', TweetController.index);
router.post('/tweets', TweetController.store);

module.exports = router;