/**
 * One-time setup script.
 * Run: node scripts/setup-db.js
 *
 * Creates the database + all tables, then seeds default rows.
 * Safe to re-run: uses CREATE TABLE IF NOT EXISTS and INSERT IGNORE.
 */
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mysql  = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function run() {
  // Connect without a database first so we can CREATE it
  const conn = await mysql.createConnection({
    host:               process.env.DB_HOST     || 'localhost',
    port:               parseInt(process.env.DB_PORT) || 3306,
    user:               process.env.DB_USER     || 'root',
    password:           process.env.DB_PASSWORD || '',
    multipleStatements: true,
    charset:            'utf8mb4',
  });

  const db = process.env.DB_NAME || 'lpf_admin';
  console.log(`\n📦 Setting up database: ${db}\n`);

  await conn.query(
    `CREATE DATABASE IF NOT EXISTS \`${db}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );
  await conn.query(`USE \`${db}\``);

  // ── Tables ──────────────────────────────────────────────────────────────
  await conn.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id            INT          PRIMARY KEY AUTO_INCREMENT,
      username      VARCHAR(100) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      last_login    DATETIME,
      created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS site_banner (
      id           INT         PRIMARY KEY DEFAULT 1,
      image_url    VARCHAR(500),
      title        TEXT,
      subtitle     TEXT,
      badge        VARCHAR(200),
      button1_text VARCHAR(100),
      button1_link VARCHAR(300),
      button2_text VARCHAR(100),
      button2_link VARCHAR(300),
      updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS impact_stats (
      id          INT          PRIMARY KEY AUTO_INCREMENT,
      icon        VARCHAR(100),
      value       VARCHAR(50)  NOT NULL,
      label       VARCHAR(200) NOT NULL,
      description TEXT,
      sort_order  INT  DEFAULT 0,
      updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS programs (
      id                INT          PRIMARY KEY AUTO_INCREMENT,
      name              VARCHAR(200) NOT NULL,
      category          VARCHAR(100),
      objective         TEXT,
      beneficiaries     TEXT,
      location          VARCHAR(300),
      beneficiary_count VARCHAR(50),
      success_story     TEXT,
      image_url         VARCHAR(500),
      detail_url        VARCHAR(300),
      sort_order        INT  DEFAULT 0,
      created_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at        DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS testimonials (
      id         INT          PRIMARY KEY AUTO_INCREMENT,
      name       VARCHAR(200) NOT NULL,
      role       VARCHAR(200),
      text       TEXT         NOT NULL,
      rating     TINYINT DEFAULT 5,
      photo_url  VARCHAR(500),
      sort_order INT     DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS gallery_images (
      id         INT PRIMARY KEY AUTO_INCREMENT,
      image_url  VARCHAR(500) NOT NULL,
      caption    TEXT,
      sort_order INT  DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS contact_info (
      id           INT          PRIMARY KEY DEFAULT 1,
      phone        VARCHAR(100),
      email        VARCHAR(200),
      address      TEXT,
      city         VARCHAR(100),
      state        VARCHAR(100),
      pincode      VARCHAR(20),
      map_embed_url TEXT,
      facebook_url  VARCHAR(500),
      twitter_url   VARCHAR(500),
      instagram_url VARCHAR(500),
      linkedin_url  VARCHAR(500),
      youtube_url   VARCHAR(500),
      updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS blogs (
      id         INT          PRIMARY KEY AUTO_INCREMENT,
      title      VARCHAR(300) NOT NULL,
      slug       VARCHAR(300),
      excerpt    TEXT,
      content    LONGTEXT,
      author     VARCHAR(200),
      category   VARCHAR(100),
      tags       TEXT,
      status     ENUM('draft','published') DEFAULT 'draft',
      image_url  VARCHAR(500),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS events (
      id                INT          PRIMARY KEY AUTO_INCREMENT,
      title             VARCHAR(300) NOT NULL,
      description       TEXT,
      event_date        DATE,
      event_time        VARCHAR(50),
      venue             TEXT,
      registration_link VARCHAR(500),
      status            ENUM('upcoming','past') DEFAULT 'upcoming',
      image_url         VARCHAR(500),
      created_at        DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at        DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS success_stories (
      id         INT          PRIMARY KEY AUTO_INCREMENT,
      name       VARCHAR(200) NOT NULL,
      role       VARCHAR(200),
      location   VARCHAR(200),
      story      TEXT,
      outcome    TEXT,
      photo_url  VARCHAR(500),
      sort_order INT     DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS donation_settings (
      id               INT          PRIMARY KEY DEFAULT 1,
      upi_id           VARCHAR(200),
      bank_name        VARCHAR(200),
      account_number   VARCHAR(100),
      ifsc_code        VARCHAR(50),
      account_holder   VARCHAR(200),
      razorpay_key_id  VARCHAR(200),
      razorpay_enabled TINYINT(1) DEFAULT 0,
      amounts_preset   TEXT DEFAULT '[500,1000,2500,5000,10000]',
      qr_image_url     VARCHAR(500),
      updated_at       DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;

    CREATE TABLE IF NOT EXISTS about_info (
      id                   INT PRIMARY KEY DEFAULT 1,
      why_started_title    VARCHAR(300),
      why_started_content  LONGTEXT,
      vision_title         VARCHAR(300),
      vision_content       LONGTEXT,
      mission_title        VARCHAR(300),
      mission_points       LONGTEXT,
      updated_at           DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);
  console.log('✅ All tables created (or already exist).');

  // ── Seed: admin ──────────────────────────────────────────────────────────
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'Admin@1234';
  const hash     = await bcrypt.hash(password, 12);
  await conn.query(
    `INSERT IGNORE INTO admins (username, password_hash) VALUES (?, ?)`,
    [username, hash]
  );
  console.log(`✅ Admin ready — username: "${username}"  password: "${password}"`);

  // ── Seed: banner ─────────────────────────────────────────────────────────
  await conn.query(`
    INSERT IGNORE INTO site_banner
      (id, image_url, title, subtitle, badge, button1_text, button1_link, button2_text, button2_link)
    VALUES (1,
      '/homepage-banner.png',
      'Empowering through Education, Skills & Employment',
      'Building brighter futures for underserved communities across Karnataka through comprehensive education programs, vocational training, and sustainable livelihood initiatives.',
      'Registered NGO · Karnataka · Est. 2015',
      'Donate Now', '/donate',
      'Explore Programs', '/programs')
  `);

  // ── Seed: impact stats ────────────────────────────────────────────────────
  await conn.query(`
    INSERT IGNORE INTO impact_stats (id, icon, value, label, description, sort_order) VALUES
    (1, 'GraduationCap', '2,847', 'Students Trained',     'Across various skill development programs', 1),
    (2, 'Users',         '1,234', 'Women Supported',       'Through empowerment initiatives',           2),
    (3, 'MapPin',        '47',    'Villages Reached',       'In rural Karnataka',                        3),
    (4, 'Award',         '892',   'Scholarships Provided',  'For deserving students',                    4)
  `);

  // ── Seed: contact info ────────────────────────────────────────────────────
  await conn.query(`
    INSERT IGNORE INTO contact_info (id, phone, email, address, city, state, pincode)
    VALUES (1,
      '+91 7795118447',
      'learningportfoundationtrust@gmail.com',
      '65/36, 11th Main Rd, near Ganesh Temple, KEB Colony, 1st Stage, BTM 1st Stage',
      'Bengaluru', 'Karnataka', '560029')
  `);

  // ── Seed: donation settings ───────────────────────────────────────────────
  await conn.query(`
    INSERT IGNORE INTO donation_settings
      (id, upi_id, bank_name, account_number, ifsc_code, account_holder, amounts_preset)
    VALUES (1,
      'learningport@upi',
      'HDFC Bank',
      'XXXX XXXX XXXX 1234',
      'HDFC0001234',
      'Learningport Foundation Trust',
      '[500,1000,2500,5000,10000]')
  `);

  // ── Seed: about info ──────────────────────────────────────────────────────
  const missionPoints = JSON.stringify([
    'To provide quality education, skill development, and lifelong learning opportunities for students, youth, and underserved communities.',
    'To empower women through education, digital literacy, entrepreneurship, leadership development, and employment support initiatives.',
    'To promote health, hygiene, nutrition, and wellness through awareness programs, medical camps, and community outreach activities.',
    'To create environmental awareness and encourage sustainable practices through tree plantation drives, conservation initiatives, and eco-friendly campaigns.',
    'To support rural and economically disadvantaged communities through social welfare, livelihood enhancement, and community development programs.',
    'To foster youth development through career guidance, mentorship, leadership training, sports, cultural activities, and personality development programs.',
    'To raise awareness on social issues including education, health, digital literacy, financial literacy, gender equality, and civic responsibility.',
    'To bridge the gap between education and employment by providing industry-relevant training, career counseling, and placement assistance.',
    'To preserve and promote cultural values, heritage, arts, and community participation through cultural and educational events.',
    'To collaborate with educational institutions, government bodies, corporate organizations, NGOs, and CSR partners to create sustainable social impact and inclusive growth.',
  ]);

  await conn.query(
    `INSERT IGNORE INTO about_info
       (id, why_started_title, why_started_content, vision_title, vision_content, mission_title, mission_points)
     VALUES (1, ?, ?, ?, ?, ?, ?)`,
    [
      'Bridging Gaps, Building Futures',
      'Learningport Foundation Trust is a non-profit organization dedicated to empowering students, youth, women, and underserved communities through education, skill development, employment support, and social welfare initiatives.\n\nOur mission is to create equal opportunities by providing quality training, career guidance, digital literacy, health awareness, and community development programs. We work to bridge the gap between talent and opportunity, helping individuals gain the skills, confidence, and knowledge needed to build successful and self-reliant futures.',
      'Our Vision',
      'To create an empowered, inclusive, and sustainable society where every individual has access to quality education, skill development, employment opportunities, and a dignified life. We envision self-reliant communities strengthened through knowledge, social empowerment, and equal opportunities for growth.\n\nBridging Gaps, Building Futures.',
      'Our Mission',
      missionPoints,
    ]
  );

  await conn.end();
  console.log('\n🎉 Database setup complete!\n');
}

run().catch(err => {
  console.error('❌ Setup failed:', err.message);
  process.exit(1);
});
