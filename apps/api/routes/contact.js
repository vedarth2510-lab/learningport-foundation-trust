const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');

// GET /api/contact — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM contact_info WHERE id = 1');
    res.json(rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/contact — auth
router.put('/', auth, async (req, res) => {
  const {
    phone, email, address, city, state, pincode,
    map_embed_url, facebook_url, twitter_url, instagram_url,
    linkedin_url, youtube_url,
  } = req.body;
  try {
    await db.query(
      `INSERT INTO contact_info
         (id, phone, email, address, city, state, pincode,
          map_embed_url, facebook_url, twitter_url, instagram_url, linkedin_url, youtube_url)
       VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         phone = VALUES(phone),
         email = VALUES(email),
         address = VALUES(address),
         city = VALUES(city),
         state = VALUES(state),
         pincode = VALUES(pincode),
         map_embed_url = VALUES(map_embed_url),
         facebook_url = VALUES(facebook_url),
         twitter_url = VALUES(twitter_url),
         instagram_url = VALUES(instagram_url),
         linkedin_url = VALUES(linkedin_url),
         youtube_url = VALUES(youtube_url)`,
      [phone, email, address, city, state, pincode,
       map_embed_url, facebook_url, twitter_url, instagram_url, linkedin_url, youtube_url]
    );
    const [rows] = await db.query('SELECT * FROM contact_info WHERE id = 1');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
