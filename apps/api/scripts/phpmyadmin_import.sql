-- ============================================================
--  Learningport Foundation Trust — Full Database Setup
--  Import this file via cPanel > phpMyAdmin > SQL tab
--  Database: u940656206_lpft
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ── admins ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `admins` (
  `id`            INT          NOT NULL AUTO_INCREMENT,
  `username`      VARCHAR(100) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `last_login`    DATETIME         DEFAULT NULL,
  `created_at`    DATETIME         DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin: username=admin  password=Admin@1234
INSERT IGNORE INTO `admins` (`username`, `password_hash`) VALUES
('admin', '$2a$12$rQM8zfUo5Fu8V730rtQ9KOLqoL.Jgc/Qj6MlNixW8vQk3a5Y5PaGi');


-- ── site_banner ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `site_banner` (
  `id`           INT          NOT NULL DEFAULT 1,
  `image_url`    VARCHAR(500)     DEFAULT NULL,
  `title`        TEXT             DEFAULT NULL,
  `subtitle`     TEXT             DEFAULT NULL,
  `badge`        VARCHAR(200)     DEFAULT NULL,
  `button1_text` VARCHAR(100)     DEFAULT NULL,
  `button1_link` VARCHAR(300)     DEFAULT NULL,
  `button2_text` VARCHAR(100)     DEFAULT NULL,
  `button2_link` VARCHAR(300)     DEFAULT NULL,
  `updated_at`   DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `site_banner`
  (`id`, `image_url`, `title`, `subtitle`, `badge`, `button1_text`, `button1_link`, `button2_text`, `button2_link`)
VALUES (1,
  '/homepage-banner.png',
  'Empowering through Education, Skills & Employment',
  'Building brighter futures for underserved communities across Karnataka through comprehensive education programs, vocational training, and sustainable livelihood initiatives.',
  'Registered NGO · Karnataka · Est. 2015',
  'Donate Now', '/donate',
  'Explore Programs', '/programs');


-- ── impact_stats ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `impact_stats` (
  `id`          INT          NOT NULL AUTO_INCREMENT,
  `icon`        VARCHAR(100)     DEFAULT NULL,
  `value`       VARCHAR(50)  NOT NULL,
  `label`       VARCHAR(200) NOT NULL,
  `description` TEXT             DEFAULT NULL,
  `sort_order`  INT              DEFAULT 0,
  `updated_at`  DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `impact_stats` (`id`, `icon`, `value`, `label`, `description`, `sort_order`) VALUES
(1, 'GraduationCap', '2,847', 'Students Trained',    'Across various skill development programs', 1),
(2, 'Users',         '1,234', 'Women Supported',      'Through empowerment initiatives',           2),
(3, 'MapPin',        '47',    'Villages Reached',      'In rural Karnataka',                        3),
(4, 'Award',         '892',   'Scholarships Provided', 'For deserving students',                    4);


-- ── programs ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `programs` (
  `id`                INT          NOT NULL AUTO_INCREMENT,
  `name`              VARCHAR(200) NOT NULL,
  `category`          VARCHAR(100)     DEFAULT NULL,
  `objective`         TEXT             DEFAULT NULL,
  `beneficiaries`     TEXT             DEFAULT NULL,
  `location`          VARCHAR(300)     DEFAULT NULL,
  `beneficiary_count` VARCHAR(50)      DEFAULT NULL,
  `success_story`     TEXT             DEFAULT NULL,
  `image_url`         VARCHAR(500)     DEFAULT NULL,
  `detail_url`        VARCHAR(300)     DEFAULT NULL,
  `sort_order`        INT              DEFAULT 0,
  `created_at`        DATETIME         DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `programs`
  (`id`,`name`,`category`,`objective`,`beneficiaries`,`location`,`beneficiary_count`,`success_story`,`image_url`,`detail_url`,`sort_order`) VALUES
(1,  'Skill Development Programs',    'Training',     'Computer Basics (MS Office, Internet, Email), Spoken English & Communication Skills, Personality Development, Soft Skills Training, Interview Prep & Resume Building, Career Guidance & Counseling.', 'Rural youth aged 18-30 seeking career opportunities',              'Bangalore and surrounding rural districts', '1,247+', 'Trained over 1,200 students in various technical skills with 73% placement rate',                             '/gallery/hf_20260601_204809_88d0a42f-078c-4640-bb95-84e66b0884ea.png', '/skill-development-programs',                1),
(2,  'Cloud Computing Training',      'Technology',   'Provide comprehensive training in cloud technologies (AWS, Azure, Google Cloud) to prepare students for IT careers',                                                                              'Engineering graduates and diploma holders from rural areas',        'BTM Layout, Bangalore',                    '487+',   'Successfully placed 89% of cloud computing graduates in leading IT companies',                                '/gallery/hf_20260601_204820_8556f38f-a28c-4ea4-a23d-35294054a3e5.png', '/cloud-computing-training-in-btm-layout',    2),
(3,  'Women Empowerment Initiatives', 'Empowerment',  'Empower rural women through skill training, entrepreneurship development, and financial literacy.',                                                                                              'Women from rural communities seeking economic independence',         'Rural villages across Karnataka',           '1,234+', 'Helped 1,234 women start their own businesses and achieve financial independence',                            '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png', '/women-empowerment-initiatives',             3),
(4,  'Rural Student Support',         'Education',    'Provide educational support, mentoring, and resources to students from rural backgrounds.',                                                                                                       'Students from government schools and rural colleges',               'Rural schools and colleges in Karnataka',   '2,847+', 'Supported 2,847 students with educational resources and mentoring',                                          '/gallery/hf_20260601_205027_867d3526-e3d6-48ff-be1c-06ef19e2f6a5.png', '/rural-student-support',                     4),
(5,  'Scholarship Programs',          'Financial Aid', 'Provide financial assistance to deserving students from economically disadvantaged backgrounds.',                                                                                               'Meritorious students unable to afford higher education',            'Across Karnataka',                          '892+',   'Awarded 892 scholarships enabling students to pursue higher education',                                       '/gallery/hf_20260601_205034_bc43c6cf-e0c7-4cad-93a4-2ffbfcf404c8.png', '/scholarship-programs',                      5),
(6,  'Digital Literacy Programs',     'Technology',   'Bridge the digital divide by teaching basic computer skills, internet, and email.',                                                                                                              'Rural youth and adults with limited digital exposure',              'Community centers in rural areas',          '1,567+', 'Trained 1,567 individuals in basic computer and internet skills',                                             '/gallery/hf_20260601_205051_ef684e6b-70a2-4b38-81b4-1f72c2d383b5.png', '/digital-literacy-programs',                 6),
(7,  'Career Guidance Seminars',      'Counseling',   'Provide career counseling and guidance to help students make informed career choices.',                                                                                                           'High school and college students from rural areas',                 'Schools and colleges across Karnataka',     '3,421+', 'Conducted career guidance sessions for 3,421 students',                                                       '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png', '/career-guidance-seminars',                  7),
(8,  'Internship & Placement Support','Employment',   'Connect trained students with internship and job opportunities in reputed organizations.',                                                                                                        'Program graduates seeking employment',                              'Bangalore and major cities',                '1,089+', 'Facilitated internships and placements for 1,089 students',                                                   '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png', '/internship-placement-support',              8),
(9,  'Entrepreneurship Programs',     'Empowerment',  'Business planning, marketing strategies, financial management, and digital tools training for launching new ventures.',                                                                           'Aspiring entrepreneurs in rural communities',                       'Karnataka',                                 '150+',   'Supported the launch of multiple rural tailoring, food processing, and retail micro-enterprises.',            '/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png', '/programs/9',                                9),
(10, 'Community Development Programs','Community',    'Environmental Awareness Training, Health & Hygiene Awareness, Financial Inclusion Programs, Leadership & Community Engagement, Volunteer Development Programs.',                                  'Rural villages and underserved communities',                        'Karnataka',                                 '3,000+', 'Established local self-help and development groups in 40+ villages to foster community action.',               '/gallery/hf_20260601_205459_9504acc5-a175-49e6-a241-e64b77cfba71.png', '/programs/10',                               10),
(11, 'Awareness Programs',            'Awareness',    'Child Welfare (rights, safety, labor prevention), Environmental (plantation drives, water conservation, waste recycling), Civic & Social Responsibility.',                                       'General public and rural communities',                              'Across Karnataka',                          '5,000+', 'Conducted tree plantation and water conservation drives in multiple water-stressed blocks.',                   '/gallery/hf_20260601_205507_b036cd9c-6f8d-421d-8211-0bfb53ac5069.png', '/programs/11',                               11),
(12, 'Cultural Activity Programs',    'Cultural',     'Folk dance and traditional music promotion, Kannada Rajyotsava celebrations, street plays (Nukkad Natak), drawing and drawing/painting competitions.',                                           'Rural youth, school and college students',                          'Community centers and schools',             '2,000+', 'Organized street plays to spread awareness of child rights and education opportunities in 30 government schools.','/gallery/hf_20260601_210254_63178cfe-bb78-400c-9fd3-bc4b61fa7897.png', '/programs/12',                               12),
(13, 'Health Programs',               'Healthcare',   'Preventive healthcare check-up camps, Women''s health education, Child health monitoring, Mental health workshops, Nutrition education.',                                                         'Rural families, women, children, and senior citizens',              'Rural health camps across Karnataka',       '4,500+', 'Organized health camps providing free dental, eye, and diabetes screenings for over 4,500 villagers.',         '/gallery/hf_20260601_204855_f08b8cb7-2c54-4262-87d4-0d1c508b7cd1.png', '/programs/13',                               13);


-- ── testimonials ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(200) NOT NULL,
  `role`       VARCHAR(200)     DEFAULT NULL,
  `text`       TEXT         NOT NULL,
  `rating`     TINYINT          DEFAULT 5,
  `photo_url`  VARCHAR(500)     DEFAULT NULL,
  `sort_order` INT              DEFAULT 0,
  `created_at` DATETIME         DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `testimonials` (`id`,`name`,`role`,`text`,`rating`,`sort_order`) VALUES
(1, 'Ravi S.',    'Cloud Engineer, MNC Bangalore', 'After 3 years as a manual tester, I joined the AWS training here. Within 4 months I landed a Cloud Support role with a 90% salary hike. The hands-on labs made all the difference.', 5, 1),
(2, 'Priya M.',   'Azure Administrator',           'The Azure training is structured brilliantly. Small batch size meant I could ask all my doubts freely. I cleared AZ-104 in my first attempt. Highly recommended!',               5, 2),
(3, 'Lakshmi D.', 'Tailoring Business Owner',      'Learningport Foundation Trust gave me the skills and confidence to start my own tailoring business. Today I employ 5 other women from my village.',                               5, 3);


-- ── gallery_images ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `gallery_images` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `image_url`  VARCHAR(500) NOT NULL,
  `caption`    TEXT             DEFAULT NULL,
  `sort_order` INT              DEFAULT 0,
  `created_at` DATETIME         DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ── contact_info ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `contact_info` (
  `id`            INT          NOT NULL DEFAULT 1,
  `phone`         VARCHAR(100)     DEFAULT NULL,
  `email`         VARCHAR(200)     DEFAULT NULL,
  `address`       TEXT             DEFAULT NULL,
  `city`          VARCHAR(100)     DEFAULT NULL,
  `state`         VARCHAR(100)     DEFAULT NULL,
  `pincode`       VARCHAR(20)      DEFAULT NULL,
  `map_embed_url` TEXT             DEFAULT NULL,
  `facebook_url`  VARCHAR(500)     DEFAULT NULL,
  `twitter_url`   VARCHAR(500)     DEFAULT NULL,
  `instagram_url` VARCHAR(500)     DEFAULT NULL,
  `linkedin_url`  VARCHAR(500)     DEFAULT NULL,
  `youtube_url`   VARCHAR(500)     DEFAULT NULL,
  `updated_at`    DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `contact_info`
  (`id`, `phone`, `email`, `address`, `city`, `state`, `pincode`)
VALUES (1,
  '+91 7795118447',
  'learningportfoundationtrust@gmail.com',
  '65/36, 11th Main Rd, near Ganesh Temple, KEB Colony, 1st Stage, BTM 1st Stage',
  'Bengaluru', 'Karnataka', '560029');


-- ── blogs ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `blogs` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `title`      VARCHAR(300) NOT NULL,
  `slug`       VARCHAR(300)     DEFAULT NULL,
  `excerpt`    TEXT             DEFAULT NULL,
  `content`    LONGTEXT         DEFAULT NULL,
  `author`     VARCHAR(200)     DEFAULT NULL,
  `category`   VARCHAR(100)     DEFAULT NULL,
  `tags`       TEXT             DEFAULT NULL,
  `status`     ENUM('draft','published') DEFAULT 'draft',
  `image_url`  VARCHAR(500)     DEFAULT NULL,
  `created_at` DATETIME         DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `blogs` (`id`,`title`,`slug`,`excerpt`,`content`,`author`,`category`,`tags`,`status`) VALUES
(1, 'How skill development programs are transforming rural youth careers',
 'skill-development-transforming-youth',
 'Discover how our comprehensive skill development programs are creating new career opportunities for rural youth across Karnataka.',
 'Full content of the blog post goes here...',
 'Admin', 'Success Stories', 'skills, youth, employment', 'published');


-- ── events ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `events` (
  `id`                INT          NOT NULL AUTO_INCREMENT,
  `title`             VARCHAR(300) NOT NULL,
  `description`       TEXT             DEFAULT NULL,
  `event_date`        DATE             DEFAULT NULL,
  `event_time`        VARCHAR(50)      DEFAULT NULL,
  `venue`             TEXT             DEFAULT NULL,
  `registration_link` VARCHAR(500)     DEFAULT NULL,
  `status`            ENUM('upcoming','past') DEFAULT 'upcoming',
  `image_url`         VARCHAR(500)     DEFAULT NULL,
  `created_at`        DATETIME         DEFAULT CURRENT_TIMESTAMP,
  `updated_at`        DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ── success_stories ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `success_stories` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(200) NOT NULL,
  `role`       VARCHAR(200)     DEFAULT NULL,
  `location`   VARCHAR(200)     DEFAULT NULL,
  `story`      TEXT             DEFAULT NULL,
  `outcome`    TEXT             DEFAULT NULL,
  `photo_url`  VARCHAR(500)     DEFAULT NULL,
  `sort_order` INT              DEFAULT 0,
  `created_at` DATETIME         DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ── donation_settings ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `donation_settings` (
  `id`               INT          NOT NULL DEFAULT 1,
  `upi_id`           VARCHAR(200)     DEFAULT NULL,
  `bank_name`        VARCHAR(200)     DEFAULT NULL,
  `account_number`   VARCHAR(100)     DEFAULT NULL,
  `ifsc_code`        VARCHAR(50)      DEFAULT NULL,
  `account_holder`   VARCHAR(200)     DEFAULT NULL,
  `razorpay_key_id`  VARCHAR(200)     DEFAULT NULL,
  `razorpay_enabled` TINYINT(1)       DEFAULT 0,
  `amounts_preset`   TEXT             DEFAULT '[500,1000,2500,5000,10000]',
  `qr_image_url`     VARCHAR(500)     DEFAULT NULL,
  `updated_at`       DATETIME         DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `donation_settings`
  (`id`, `upi_id`, `bank_name`, `account_number`, `ifsc_code`, `account_holder`, `amounts_preset`)
VALUES (1,
  'learningport@upi',
  'HDFC Bank',
  'XXXX XXXX XXXX 1234',
  'HDFC0001234',
  'Learningport Foundation Trust',
  '[500,1000,2500,5000,10000]');


-- ── about_info ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `about_info` (
  `id`                  INT NOT NULL DEFAULT 1,
  `why_started_title`   VARCHAR(300)  DEFAULT NULL,
  `why_started_content` LONGTEXT      DEFAULT NULL,
  `vision_title`        VARCHAR(300)  DEFAULT NULL,
  `vision_content`      LONGTEXT      DEFAULT NULL,
  `mission_title`       VARCHAR(300)  DEFAULT NULL,
  `mission_points`      LONGTEXT      DEFAULT NULL,
  `updated_at`          DATETIME      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT IGNORE INTO `about_info`
  (`id`, `why_started_title`, `why_started_content`, `vision_title`, `vision_content`, `mission_title`, `mission_points`)
VALUES (1,
  'Bridging Gaps, Building Futures',
  'Learningport Foundation Trust is a non-profit organization dedicated to empowering students, youth, women, and underserved communities through education, skill development, employment support, and social welfare initiatives.\n\nOur mission is to create equal opportunities by providing quality training, career guidance, digital literacy, health awareness, and community development programs. We work to bridge the gap between talent and opportunity, helping individuals gain the skills, confidence, and knowledge needed to build successful and self-reliant futures.\n\nThrough partnerships, awareness campaigns, workshops, and outreach initiatives, we strive to promote inclusive growth, sustainable development, and positive social change across communities.',
  'Our Vision',
  'To create an empowered, inclusive, and sustainable society where every individual has access to quality education, skill development, employment opportunities, and a dignified life. We envision self-reliant communities strengthened through knowledge, social empowerment, and equal opportunities for growth.\n\nThrough environmental awareness, health programs, and community welfare activities, we strive to promote sustainable development and social responsibility — inspiring positive change and building a brighter future for generations to come.\n\nBridging Gaps, Building Futures.',
  'Our Mission',
  '[\"To provide quality education, skill development, and lifelong learning opportunities for students, youth, and underserved communities.\",\"To empower women through education, digital literacy, entrepreneurship, leadership development, and employment support initiatives.\",\"To promote health, hygiene, nutrition, and wellness through awareness programs, medical camps, and community outreach activities.\",\"To create environmental awareness and encourage sustainable practices through tree plantation drives, conservation initiatives, and eco-friendly campaigns.\",\"To support rural and economically disadvantaged communities through social welfare, livelihood enhancement, and community development programs.\",\"To foster youth development through career guidance, mentorship, leadership training, sports, cultural activities, and personality development programs.\",\"To raise awareness on social issues including education, health, digital literacy, financial literacy, gender equality, and civic responsibility.\",\"To bridge the gap between education and employment by providing industry-relevant training, career counseling, and placement assistance.\",\"To preserve and promote cultural values, heritage, arts, and community participation through cultural and educational events.\",\"To collaborate with educational institutions, government bodies, corporate organizations, NGOs, and CSR partners to create sustainable social impact and inclusive growth.\"]');

SET FOREIGN_KEY_CHECKS = 1;

-- ✅ Done! All 12 tables created and seeded.
