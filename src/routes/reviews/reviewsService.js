const getReviews = async db => {
  return await db('reviews').select('*').orderBy('created_at');
}

const updatePoints = async (db, id, amt) => {
  const res = await db('reviews')
    .where({ id })
    .update({ 
      points: db.raw(`?? + ${amt}`, ['points']),
    })
    .returning('*');

    return res[0];
}

module.exports = {
  getReviews,
  updatePoints,
}