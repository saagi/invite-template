'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const venue = process.env.NEXT_PUBLIC_WEDDING_VENUE || 'Function hall';
  const city = process.env.NEXT_PUBLIC_WEDDING_CITY || 'GodavariKhani';
  const date = '30 August 2026';

  // Example Google Maps link
  const mapsLink = `https://go.2gis.com/Cv0gu`;

  return (
    <section id="event-details" className="py-24 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main heading */}
          <h2 className="font-display text-5xl md:text-7xl text-sage-800 mb-8">
            Venue & Time
          </h2>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-sage-600 font-sans text-sm uppercase tracking-widest mb-2">
              Date
            </p>
            <p className="text-sage-800 font-serif text-2xl md:text-3xl">
              {date}
            </p>
          </motion.div>

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-sage-600 font-sans text-sm uppercase tracking-widest mb-2">
              Venue
            </p>
            <p className="text-sage-800 font-display text-3xl md:text-5xl mb-3">
              {venue}
            </p>
            <p className="text-sage-600 font-serif text-lg">
              {city}
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-sage-600 font-sans text-sm uppercase tracking-widest mb-2">
              Wedding Hosts
            </p>
            <p className="text-sage-800 font-display text-3xl md:text-5xl mb-3">
              Teja & Co
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-20 h-px bg-sage-300 mx-auto mb-12" />

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-sage-700 font-serif text-lg leading-relaxed mb-8">
              All events will take place at the same venue. Parking is available.
            </p>
          </motion.div>

          {/* Map button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sage-800 hover:bg-sage-900 text-cream-50 px-8 py-4 rounded-full font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Maps 2GIS
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
