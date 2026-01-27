'use client';

import { motion } from 'framer-motion';
import styles from './DuckParade.module.css';

// 엄마오리 SVG
const MotherDuck = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 48"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 몸통 */}
    <ellipse cx="32" cy="32" rx="20" ry="14" opacity="0.95" />
    {/* 머리 */}
    <circle cx="48" cy="20" r="10" />
    {/* 부리 */}
    <ellipse cx="58" cy="22" rx="6" ry="3" fill="#c5a039" />
    {/* 눈 */}
    <circle cx="50" cy="18" r="2" fill="#00382c" />
    {/* 날개 */}
    <ellipse cx="28" cy="30" rx="8" ry="6" opacity="0.7" />
    {/* 꼬리 */}
    <path d="M12 28 Q8 24 10 32 Q8 36 14 34 Z" opacity="0.9" />
  </svg>
);

// 아기오리 SVG
const BabyDuck = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 몸통 */}
    <ellipse cx="20" cy="22" rx="12" ry="9" opacity="0.95" />
    {/* 머리 */}
    <circle cx="30" cy="14" r="7" />
    {/* 부리 */}
    <ellipse cx="37" cy="15" rx="4" ry="2" fill="#c5a039" />
    {/* 눈 */}
    <circle cx="31" cy="12" r="1.5" fill="#00382c" />
    {/* 날개 작은 것 */}
    <ellipse cx="18" cy="21" rx="5" ry="4" opacity="0.7" />
  </svg>
);

export default function DuckParade() {
  return (
    <div className={styles.paradeContainer}>
      <motion.div
        className={styles.paradeTrack}
        initial={{ x: '-50%' }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* 엄마 오리 (맨 앞 - 오른쪽) */}
        <div className={styles.motherDuck}>
          <MotherDuck className={styles.duckIcon} />
        </div>

        {/* 아기 오리들 (5마리 - 뒤따라감) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.babyDuck}
            style={{
              animationDelay: `${(5 - i) * 0.12}s`,
            }}
          >
            <BabyDuck className={styles.babyDuckIcon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
