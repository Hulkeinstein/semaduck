'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

// Gallery Data
const galleryItems = [
  {
    id: 1,
    category: 'interior',
    title: 'Main Hall',
    desc: '탁 트인 개방감과 편안한 식사 공간',
    src: '/images/atmosphere/main-hall.jpg',
    ratio: 'landscape', // Placeholder for aspect ratio handling if needed
  },
  {
    id: 2,
    category: 'exterior',
    title: 'Forest Walkway',
    desc: '식사 전후로 즐기는 숲속 산책로',
    src: '/images/atmosphere/walkway.jpg',
    ratio: 'portrait',
  },
  {
    id: 3,
    category: 'exterior',
    title: 'Serene Pond',
    desc: '자연의 운치를 더하는 연못',
    src: '/images/atmosphere/pond.jpg',
    ratio: 'landscape',
  },
  {
    id: 4,
    category: 'exterior',
    title: 'Spacious Parking',
    desc: '넓고 편리한 전용 주차장',
    src: '/images/atmosphere/parking.jpg',
    ratio: 'landscape',
  },
  // Placeholders to demonstrate Masonry layout (reusing images for demo)
  {
    id: 5,
    category: 'interior',
    title: 'Private Room',
    desc: '가족 모임을 위한 프라이빗 룸',
    src: '/images/atmosphere/main-hall.jpg', // Reusing for demo
    ratio: 'landscape',
  },
  {
    id: 6,
    category: 'exterior',
    title: 'Outdoor Garden',
    desc: '계절마다 바뀌는 정원의 풍경',
    src: '/images/atmosphere/walkway.jpg', // Reusing for demo
    ratio: 'portrait',
  },
];

const filters = [
  { id: 'all', label: 'All View' },
  { id: 'interior', label: 'Indoor' },
  { id: 'exterior', label: 'Outdoor' },
];

export default function SpacePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className={styles.container}>
      {/* Cinematic Hero Section */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero/hero-sub-banner-w1.webp"
            alt="Rest in Nature"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            REST IN NATURE
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            공간 & 갤러리
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            세마오리농원은 단순한 식당이 아닌, 자연 속의 쉼터입니다.
            <br />
            도심을 떠나 숲이 주는 위로와 여유를 느껴보세요.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div layout className={styles.galleryGrid}>
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={styles.galleryItemWrapper}
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={800}
                height={600}
                className={styles.galleryImage}
              />
              <div className={styles.overlay}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeButton}>&times;</button>
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className={styles.lightboxImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
