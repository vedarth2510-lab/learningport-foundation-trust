const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');

// GET /api/stats — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM impact_stats ORDER BY sort_order');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/stats — auth
router.post('/', auth, async (req, res) => {
  const { icon, value, label, description, sort_order } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO impact_stats (icon, value, label, description, sort_order) VALUES (?, ?, ?, ?, ?)',
      [icon, value, label, description, sort_order]
    );
    const [rows] = await db.query('SELECT * FROM impact_stats WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/stats/:id — auth
router.put('/:id', auth, async (req, res) => {
  const { icon, value, label, description, sort_order } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE impact_stats SET icon = ?, value = ?, label = ?, description = ?, sort_order = ? WHERE id = ?',
      [icon, value, label, description, sort_order, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Stat not found' });
    const [rows] = await db.query('SELECT * FROM impact_stats WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/stats/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM impact_stats WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Stat not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
