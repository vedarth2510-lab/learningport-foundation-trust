const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/blogs — public, optional ?limit=N
router.get('/', async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : null;
    let query = 'SELECT * FROM blogs ORDER BY created_at DESC';
    const params = [];
    if (limit && !isNaN(limit) && limit > 0) {
      query += ' LIMIT ?';
      params.push(limit);
    }
    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/blogs/:id — public
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Blog not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/blogs — auth + upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, slug, excerpt, content, author, category, tags, status } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const [result] = await db.query(
      `INSERT INTO blogs (title, slug, excerpt, content, author, category, tags, status, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, excerpt, content, author, category, tags, status || 'draft', image_url]
    );
    const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/blogs/:id — auth + upload
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  const { title, slug, excerpt, content, author, category, tags, status } = req.body;
  try {
    let query;
    let params;
    if (req.file) {
      const image_url = `/uploads/${req.file.filename}`;
      query = `UPDATE blogs SET title = ?, slug = ?, excerpt = ?, content = ?, author = ?,
               category = ?, tags = ?, status = ?, image_url = ? WHERE id = ?`;
      params = [title, slug, excerpt, content, author, category, tags, status, image_url, req.params.id];
    } else {
      query = `UPDATE blogs SET title = ?, slug = ?, excerpt = ?, content = ?, author = ?,
               category = ?, tags = ?, status = ? WHERE id = ?`;
      params = [title, slug, excerpt, content, author, category, tags, status, req.params.id];
    }
    const [result] = await db.query(query, params);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Blog not found' });
    const [rows] = await db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/blogs/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM blogs WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
