'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  {
    year: '2026',
    title: 'First Meeting',
    description: 'Arranged setting',
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="our-story" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl text-sage-800 mb-6">
            Our Story
          </h2>
          <div className="w-20 h-px bg-sage-300 mx-auto" />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-sage-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-cream-50 border border-sage-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-sage-600 font-sans font-bold text-xs uppercase tracking-widest mb-3">
                      {item.year}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-sage-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sage-700 leading-relaxed font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-sage-600 rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
