import { Router } from 'express';
import { createTweet, getAllTweets } from '../controllers/tweet';

const r = Router();

r.get('/', (_req, res) => {
  res.json({
    msg: 'Hello Auth API',
  });
});

r.get('/tweets', getAllTweets);
r.post('/tweets', createTweet);

export { r as apiRoutes };
