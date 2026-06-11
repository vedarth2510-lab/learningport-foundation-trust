const router = require('express').Router();
const db = require('../db');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET /api/donations/settings — public
router.get('/settings', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM donation_settings WHERE id = 1');
    res.json(rows[0] || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/donations/settings — auth
router.put('/settings', auth, async (req, res) => {
  const {
    upi_id, bank_name, account_number, ifsc_code, account_holder,
    razorpay_key_id, razorpay_enabled, amounts_preset,
  } = req.body;
  try {
    await db.query(
      `INSERT INTO donation_settings
         (id, upi_id, bank_name, account_number, ifsc_code, account_holder,
          razorpay_key_id, razorpay_enabled, amounts_preset)
       VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         upi_id = VALUES(upi_id),
         bank_name = VALUES(bank_name),
         account_number = VALUES(account_number),
         ifsc_code = VALUES(ifsc_code),
         account_holder = VALUES(account_holder),
         razorpay_key_id = VALUES(razorpay_key_id),
         razorpay_enabled = VALUES(razorpay_enabled),
         amounts_preset = VALUES(amounts_preset)`,
      [upi_id, bank_name, account_number, ifsc_code, account_holder,
       razorpay_key_id, razorpay_enabled, amounts_preset]
    );
    const [rows] = await db.query('SELECT * FROM donation_settings WHERE id = 1');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/donations/qr — auth + upload
router.post('/qr', auth, upload.single('qr'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No QR image uploaded' });
    const qr_image_url = `/uploads/${req.file.filename}`;
    await db.query(
      `INSERT INTO donation_settings (id, qr_image_url) VALUES (1, ?)
       ON DUPLICATE KEY UPDATE qr_image_url = VALUES(qr_image_url)`,
      [qr_image_url]
    );
    res.json({ qr_image_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
