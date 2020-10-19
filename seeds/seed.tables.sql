BEGIN;

TRUNCATE 
  comments,
  reviews
  RESTART IDENTITY CASCADE;

INSERT INTO reviews (id, rating, "message", created_at)
VALUES 
  (
    1,
    3.5,
    'This is alright!'
    ,
    '2020-10-18 21:45:10.035984'
  ),
  (
    2,
    1,
    'This is horrible!',
    '2020-10-19 21:45:10.035984'
  ),
  (
    3,
    5,
    'This is cool!',
    '2020-10-20 21:45:10.035984'
  ),
  (
    4,
    2.5,
    'This is cool!',
    '2020-10-21 21:45:10.035984'
  ),
  (
    5,
    2,
    'Could use improvement',
    '2020-10-22 21:45:10.035984'
  ),
  (
    6,
    1.5,
    'Wish I could be like other reviews because this text is super long and I am not handled well in this application like I am in other applications',
    '2020-10-23 21:45:10.035984'
  ),
  (
    7,
    4.5,
    'Awesome app!',
    '2020-10-24 21:45:10.035984'
  ),
  (
    8,
    3.5,
    'Nice app!',
    '2020-10-25 21:45:10.035984'
  ),
  (
    9,
    2.5,
    'Wish I could do more',
    '2020-10-26 21:45:10.035984'
  ),
  (
    10,
    3,
    'Pretty good!',
    '2020-10-27 21:45:10.035984'
  ),
  (
    11,
    5,
    'Greatest app ever!',
    '2020-10-28 21:45:10.035984'
  ),
  (
    12,
    4.5,
    'This is cool!',
    '2020-10-29 21:45:10.035984'
  ),
  (
    13,
    1,
    'Not so great, this is expected to be the best review page ever.',
    '2020-10-30 21:45:10.035984'
  ),
  (
    14,
    5,
    'My review is the best review',
    '2020-09-17 21:45:10.035984'
  ),
  (
    15,
    2.5,
    'Would be great if more could be done',
    '2020-11-17 21:45:10.035984'
  ),
  (
    16,
    3.5,
    'Wish you would add user profiles to reviews!',
    '2020-12-17 21:45:10.035984'
  ),
  (
    17,
    5,
    'Nice work',
    '2020-01-17 21:45:10.035984'
  ),
  (
    18,
    2,
    'I have a few ideas the make this better!',
    '2020-02-17 21:45:10.035984'
  ),
  (
    19,
    1,
    'Things are really going downhill',
    '2020-03-17 21:45:10.035984'
  ),
  (
    20,
    4,
    'Things are looking up!',
    '2020-04-17 21:45:10.035984'
  );

  SELECT setval('reviews_id_seq', (SELECT MAX(id) from reviews));

COMMIT;