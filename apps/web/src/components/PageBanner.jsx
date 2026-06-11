import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable full-width banner for all inner pages.
 * Shows header-banner.png as background with a dark overlay,
 * a red accent bar at the bottom, and centred title + subtitle text.
 */
function PageBanner({ title, subtitle, badge }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src="/header-banner.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Gradient overlay — left-heavy so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      {/* Red accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary z-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto"
        >
          {badge && (
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/80 text-white text-sm font-medium">
              {badge}
            </span>
          )}
          <h1 className="text-white mb-5 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default PageBanner;
