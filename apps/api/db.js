'use strict';
require('dotenv').config();
const mysql = require('mysql2/promise');

/**
 * Real MySQL2 connection pool.
 *
 * All routes already call:
 *   const [rows]   = await db.query(sql, params);   // SELECT
 *   const [result] = await db.query(sql, params);   // INSERT / UPDATE / DELETE
 *
 * mysql2/promise pool.query() returns exactly that shape, so every route
 * works without modification.
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'u940656206_lpft',
  password: process.env.DB_PASSWORD || 'Lpft@2026',
  database: process.env.DB_NAME || 'u940656206_lpft',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: '+00:00',
});

// Verify the connection on startup (non-fatal – server still starts if DB is
// briefly unavailable, so individual requests will surface the error instead).
pool.getConnection()
  .then(conn => {
    console.log('✅ MySQL connected to', process.env.DB_NAME || 'u940656206_lpft');
    conn.release();
  })
  .catch(err => {
    console.error('⚠️  MySQL connection failed:', err.message);
    console.error('   Make sure MySQL is running and .env is configured correctly.');
    console.error('   Run: node scripts/setup-db.js  to create the database and tables.');
  });

module.exports = pool;
