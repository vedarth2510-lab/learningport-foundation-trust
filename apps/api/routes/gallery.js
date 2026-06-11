const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const fs = require('fs');
const path = require('path');

// GET /api/gallery — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM gallery_images ORDER BY sort_order DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/gallery — auth + upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
  const { caption, sort_order } = req.body;
  const image_url = `/uploads/${req.file.filename}`;
  try {
    const [result] = await db.query(
      'INSERT INTO gallery_images (caption, sort_order, image_url) VALUES (?, ?, ?)',
      [caption, sort_order, image_url]
    );
    const [rows] = await db.query('SELECT * FROM gallery_images WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/gallery/:id — auth (caption only)
router.put('/:id', auth, async (req, res) => {
  const { caption } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE gallery_images SET caption = ? WHERE id = ?',
      [caption, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Gallery image not found' });
    const [rows] = await db.query('SELECT * FROM gallery_images WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/gallery/:id — auth, also deletes file from disk
router.delete('/:id', auth, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM gallery_images WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Gallery image not found' });

    const row = rows[0];
    const [result] = await db.query('DELETE FROM gallery_images WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Gallery image not found' });

    // Try to delete the file from disk — don't fail if missing
    if (row.image_url) {
      const filename = path.basename(row.image_url);
      const uploadsDir = process.env.UPLOADS_DIR || '../web/public/uploads';
      const filePath = path.join(uploadsDir, filename);
      fs.unlink(filePath, (err) => {
        if (err && err.code !== 'ENOENT') {
          console.error('Could not delete file:', filePath, err.message);
        }
      });
    }

    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
