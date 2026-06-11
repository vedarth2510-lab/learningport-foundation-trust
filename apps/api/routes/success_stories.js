const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/success-stories — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM success_stories ORDER BY sort_order');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/success-stories — auth + upload
router.post('/', auth, upload.single('photo'), async (req, res) => {
  const { name, role, location, story, outcome, sort_order } = req.body;
  const photo_url = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const [result] = await db.query(
      `INSERT INTO success_stories (name, role, location, story, outcome, photo_url, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, role, location, story, outcome, photo_url, sort_order]
    );
    const [rows] = await db.query('SELECT * FROM success_stories WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/success-stories/:id — auth + upload
router.put('/:id', auth, upload.single('photo'), async (req, res) => {
  const { name, role, location, story, outcome, sort_order } = req.body;
  try {
    let query;
    let params;
    if (req.file) {
      const photo_url = `/uploads/${req.file.filename}`;
      query = `UPDATE success_stories SET name = ?, role = ?, location = ?, story = ?,
               outcome = ?, photo_url = ?, sort_order = ? WHERE id = ?`;
      params = [name, role, location, story, outcome, photo_url, sort_order, req.params.id];
    } else {
      query = `UPDATE success_stories SET name = ?, role = ?, location = ?, story = ?,
               outcome = ?, sort_order = ? WHERE id = ?`;
      params = [name, role, location, story, outcome, sort_order, req.params.id];
    }
    const [result] = await db.query(query, params);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Success story not found' });
    const [rows] = await db.query('SELECT * FROM success_stories WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/success-stories/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM success_stories WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Success story not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
