const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/banner — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM site_banner WHERE id = 1');
    res.json(rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/banner — auth protected
router.put('/', auth, async (req, res) => {
  const { title, subtitle, badge, button1_text, button1_link, button2_text, button2_link } = req.body;
  try {
    await db.query(
      `INSERT INTO site_banner (id, title, subtitle, badge, button1_text, button1_link, button2_text, button2_link)
       VALUES (1, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         subtitle = VALUES(subtitle),
         badge = VALUES(badge),
         button1_text = VALUES(button1_text),
         button1_link = VALUES(button1_link),
         button2_text = VALUES(button2_text),
         button2_link = VALUES(button2_link)`,
      [title, subtitle, badge, button1_text, button1_link, button2_text, button2_link]
    );
    const [rows] = await db.query('SELECT * FROM site_banner WHERE id = 1');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/banner/image — auth + upload
router.post('/image', auth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
    const image_url = `/uploads/${req.file.filename}`;
    await db.query(
      `INSERT INTO site_banner (id, image_url) VALUES (1, ?)
       ON DUPLICATE KEY UPDATE image_url = VALUES(image_url)`,
      [image_url]
    );
    res.json({ image_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
