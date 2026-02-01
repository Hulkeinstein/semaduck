'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './DuckParade.module.css';

export default function DuckParade() {
  return (
    <div className={styles.paradeContainer}>
      <motion.div
        className={styles.paradeTrack}
        initial={{ x: 'calc(-100% - 50px)' }}
        animate={{ x: 'calc(100vw + 50px)' }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
          repeatDelay: 0,
        }}
      >
        {/* 엄마 오리 (맨 앞 - 크게) */}
        <div className={styles.motherDuck}>
          <Image
            src="/images/duck/duck.png"
            alt="엄마오리"
            width={60}
            height={60}
            className={styles.duckImage}
          />
        </div>

        {/* 아기 오리들 (5마리 - 작게) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.babyDuck}
            style={{
              animationDelay: `${(5 - i) * 0.1}s`,
            }}
          >
            <Image
              src="/images/duck/duck.png"
              alt={`아기오리 ${i + 1}`}
              width={36}
              height={36}
              className={styles.duckImage}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
