const postComment = async (db, comment) => {
  const res = await db('comments').insert(comment).returning('*');
  return res[0];
}

const getCommentsForReview = async (db, review_id) => {
  return await db('comments').select().where({ review_id });
}

module.exports = {
  postComment,
  getCommentsForReview,
}