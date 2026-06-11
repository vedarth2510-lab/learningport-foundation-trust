require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// ── CORS ─────────────────────────────────────────────────────
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', process.env.FRONTEND_URL].filter(Boolean),
  credentials: true,
}));

// ── Body parsers ──────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── Static: serve uploaded files ──────────────────────────────
app.use('/uploads', express.static(path.resolve(__dirname, '../web/public/uploads')));

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// ── Routes ────────────────────────────────────────────────────
app.use('/api/auth',            require('./routes/auth'));
app.use('/api/about',           require('./routes/about'));
app.use('/api/banner',          require('./routes/banner'));
app.use('/api/stats',           require('./routes/stats'));
app.use('/api/programs',        require('./routes/programs'));
app.use('/api/testimonials',    require('./routes/testimonials'));
app.use('/api/gallery',         require('./routes/gallery'));
app.use('/api/contact',         require('./routes/contact'));
app.use('/api/blogs',           require('./routes/blogs'));
app.use('/api/events',          require('./routes/events'));
app.use('/api/success-stories', require('./routes/success_stories'));
app.use('/api/donations',       require('./routes/donations'));

// ── 404 handler ───────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// ── Error handler ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 LPF Admin API running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health\n`);
});
