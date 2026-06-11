const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/programs — public
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM programs ORDER BY sort_order');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/programs/:id — public
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM programs WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Program not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/programs — auth + upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  const {
    name, category, objective, beneficiaries, location,
    beneficiary_count, success_story, detail_url, sort_order,
  } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const [result] = await db.query(
      `INSERT INTO programs
         (name, category, objective, beneficiaries, location, beneficiary_count,
          success_story, detail_url, sort_order, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, category, objective, beneficiaries, location, beneficiary_count,
       success_story, detail_url, sort_order, image_url]
    );
    const [rows] = await db.query('SELECT * FROM programs WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/programs/:id — auth + upload
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  const {
    name, category, objective, beneficiaries, location,
    beneficiary_count, success_story, detail_url, sort_order,
  } = req.body;
  try {
    // Build update query conditionally for image_url
    let query;
    let params;
    if (req.file) {
      const image_url = `/uploads/${req.file.filename}`;
      query = `UPDATE programs SET name = ?, category = ?, objective = ?, beneficiaries = ?,
               location = ?, beneficiary_count = ?, success_story = ?, detail_url = ?,
               sort_order = ?, image_url = ? WHERE id = ?`;
      params = [name, category, objective, beneficiaries, location, beneficiary_count,
                success_story, detail_url, sort_order, image_url, req.params.id];
    } else {
      query = `UPDATE programs SET name = ?, category = ?, objective = ?, beneficiaries = ?,
               location = ?, beneficiary_count = ?, success_story = ?, detail_url = ?,
               sort_order = ? WHERE id = ?`;
      params = [name, category, objective, beneficiaries, location, beneficiary_count,
                success_story, detail_url, sort_order, req.params.id];
    }
    const [result] = await db.query(query, params);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Program not found' });
    const [rows] = await db.query('SELECT * FROM programs WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/programs/:id — auth
router.delete('/:id', auth, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM programs WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Program not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
