const express = require('express');
const { getReviews, updatePoints } = require('./reviewsService');

const reviewsRouter = express.Router();

reviewsRouter
  .route('/')
  .get(async (req, res, _next) => {
    try {
      const reviews = await getReviews(req.app.get('db'));
      if (reviews) return res.send(reviews);

    } catch (e) {
      console.log(e);
    }
  })

reviewsRouter
  .route('/:id/points')
  .patch(express.json(), async (req, res, _next) => {
    try {
      const result = await updatePoints(
          req.app.get('db'), req.params.id, req.body.amount
      );

      if (result) return res.status(204).end();
    } catch(e) {
      console.log(e);
    }
  })

module.exports = reviewsRouter;