const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/events — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM events ORDER BY event_date DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/events — auth + upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, description, event_date, event_time, venue, registration_link, status } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const [result] = await db.query(
      `INSERT INTO events
         (title, description, event_date, event_time, venue, registration_link, status, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, event_date, event_time, venue, registration_link,
       status || 'upcoming', image_url]
    );
    const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/events/:id — auth + upload
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  const { title, description, event_date, event_time, venue, registration_link, status } = req.body;
  try {
    let query;
    let params;
    if (req.file) {
      const image_url = `/uploads/${req.file.filename}`;
      query = `UPDATE events SET title = ?, description = ?, event_date = ?, event_time = ?,
               venue = ?, registration_link = ?, status = ?, image_url = ? WHERE id = ?`;
      params = [title, description, event_date, event_time, venue, registration_link,
                status, image_url, req.params.id];
    } else {
      query = `UPDATE events SET title = ?, description = ?, event_date = ?, event_time = ?,
               venue = ?, registration_link = ?, status = ? WHERE id = ?`;
      params = [title, description, event_date, event_time, venue, registration_link,
                status, req.params.id];
    }
    const [result] = await db.query(query, params);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Event not found' });
    const [rows] = await db.query('SELECT * FROM events WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/events/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM events WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
