'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

// Animation Variants for Staggered Blur-In
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const blurIn = {
  hidden: {
    filter: 'blur(20px)',
    opacity: 0,
    y: 20,
  },
  show: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  // Custom hook for smooth scrolling
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Disable CSS smooth scrolling to prevent conflict (jitter)
    document.documentElement.style.scrollBehavior = 'auto';

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds for a slow, cinematic glide
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        // Optional: Restore CSS behavior or leave as auto if prefer custom everywhere
        // document.documentElement.style.scrollBehavior = 'smooth';
      }
    }

    // Easing function: Ease Out Cubic
    function easeOutCubic(t: number, b: number, c: number, d: number) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Layer (Parallax) */}
      <motion.div className={styles.backgroundLayer} style={{ y }}>
        <Image
          src="/images/hero/main-hero-2.webp"
          alt="세마오리농원 시그니처"
          fill
          priority
          className={styles.backgroundImage}
        />
      </motion.div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Main Content */}
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Subtitle: 26년의 고집, 변치 않는 맛 */}
        <motion.span className={styles.scriptLabel} variants={blurIn}>
          26년의 고집, 변치 않는 맛
        </motion.span>

        {/* Main Title: 세마오리농원 */}
        <motion.h1 className={styles.mainTitle} variants={blurIn}>
          세마오리농원
        </motion.h1>

        {/* Button: 메뉴 보기 */}
        <motion.a
          href="#section-taste-of-nature"
          onClick={(e) => handleScroll(e, '#section-taste-of-nature')}
          className={styles.ghostButton}
          variants={blurIn}
        >
          메뉴 보기
        </motion.a>
      </motion.div>

      {/* Scroll Indicator (Duck) */}
      <motion.a
        href="#section-main-intro"
        onClick={(e) => handleScroll(e, '#section-main-intro')}
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ cursor: 'pointer', textDecoration: 'none' }} // Ensure it looks clickable
      >
        <div className={styles.scrollTrack}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/icons/duck.png"
              alt="Scroll Down"
              width={32}
              height={32}
              className={styles.scrollDuckImage}
            />
          </motion.div>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </motion.a>
    </section>
  );
}
