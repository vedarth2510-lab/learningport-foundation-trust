const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');

// GET /api/about — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM about_info WHERE id = 1');
    res.json(rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/about — auth
router.put('/', auth, async (req, res) => {
  const {
    why_started_title, why_started_content,
    vision_title, vision_content,
    mission_title, mission_points
  } = req.body;
  try {
    await db.query(
      `INSERT INTO about_info
         (id, why_started_title, why_started_content, vision_title, vision_content, mission_title, mission_points)
       VALUES (1, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         why_started_title = VALUES(why_started_title),
         why_started_content = VALUES(why_started_content),
         vision_title = VALUES(vision_title),
         vision_content = VALUES(vision_content),
         mission_title = VALUES(mission_title),
         mission_points = VALUES(mission_points)`,
      [why_started_title, why_started_content, vision_title, vision_content, mission_title, JSON.stringify(mission_points)]
    );
    const [rows] = await db.query('SELECT * FROM about_info WHERE id = 1');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
