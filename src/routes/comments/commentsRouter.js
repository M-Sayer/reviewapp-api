const express = require('express');
const { postComment, getCommentsForReview } = require('./commentsService');

const commentsRouter = express.Router();

commentsRouter
  .route('/')
  .post(express.json(), async (req, res, _next) => {
    try {
      const response = await postComment(req.app.get('db'), req.body);
      return res.status(204).end();
    } catch (e) {
      console.log(e);
    }
  })

commentsRouter
.route('/review/:review_id')
.get(async (req, res, _next) => {
  try {
    const comments = await getCommentsForReview(req.app.get('db'), req.params.review_id);
    return res.send(comments);
  } catch(e) {
    console.log(e);
  }
})

module.exports = commentsRouter;