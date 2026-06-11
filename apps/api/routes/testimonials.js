const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/testimonials — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials ORDER BY sort_order');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/testimonials — auth + upload
router.post('/', auth, upload.single('photo'), async (req, res) => {
  const { name, role, text, rating, sort_order } = req.body;
  const photo_url = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const [result] = await db.query(
      'INSERT INTO testimonials (name, role, text, rating, sort_order, photo_url) VALUES (?, ?, ?, ?, ?, ?)',
      [name, role, text, rating, sort_order, photo_url]
    );
    const [rows] = await db.query('SELECT * FROM testimonials WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/testimonials/:id — auth + upload
router.put('/:id', auth, upload.single('photo'), async (req, res) => {
  const { name, role, text, rating, sort_order } = req.body;
  try {
    let query;
    let params;
    if (req.file) {
      const photo_url = `/uploads/${req.file.filename}`;
      query = 'UPDATE testimonials SET name = ?, role = ?, text = ?, rating = ?, sort_order = ?, photo_url = ? WHERE id = ?';
      params = [name, role, text, rating, sort_order, photo_url, req.params.id];
    } else {
      query = 'UPDATE testimonials SET name = ?, role = ?, text = ?, rating = ?, sort_order = ? WHERE id = ?';
      params = [name, role, text, rating, sort_order, req.params.id];
    }
    const [result] = await db.query(query, params);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Testimonial not found' });
    const [rows] = await db.query('SELECT * FROM testimonials WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/testimonials/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM testimonials WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Testimonial not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
