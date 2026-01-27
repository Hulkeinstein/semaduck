'use client';

import { motion } from 'framer-motion';
import styles from './AtmosphereSection.module.css';

const galleryItems = [
  {
    id: 1,
    title: 'Main Hall',
    desc: '넓고 쾌적한 메인 홀',
    image: '/images/atmosphere/main-hall.jpg',
    placeholderColor: '#e0e0e0',
  },
  {
    id: 2,
    title: 'Forest Path',
    desc: '자연을 거니는 숲속 산책로',
    image: '/images/atmosphere/walkway.jpg',
    placeholderColor: '#d6d6d6',
  },
  {
    id: 3,
    title: 'Parking Lot',
    desc: '편안하고 넓은 전용 주차장',
    image: '/images/atmosphere/parking.jpg',
    placeholderColor: '#cccccc',
  },
  {
    id: 4,
    title: 'Garden Pond',
    desc: '여유로운 연못 산책로',
    image: '/images/atmosphere/pond.jpg',
    placeholderColor: '#bdbdbd',
  },
];

export default function AtmosphereSection() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.headerContainer}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rustic Retreat
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Space for Rest
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          도심을 벗어나 마주하는 고요한 숲속의 쉼터.
          <br />
          세마오리농원은 단순한 식당이 아닌, 당신의 마음이 쉬어가는 공간입니다.
        </motion.p>
      </div>

      {/* Horizontal Slider */}
      <div className={styles.sliderContainer}>
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.slideItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <div
              className={styles.imageWrapper}
              style={{ backgroundColor: item.placeholderColor }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                /* Placeholder for now - User will provide images later */
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(0,0,0,0.3)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  NO IMAGE
                </div>
              )}

              {/* Hover Overlay with Caption */}
              <div className={styles.overlay}>
                <h3 className={styles.caption}>{item.desc}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
