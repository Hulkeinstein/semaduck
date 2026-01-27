'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './MainIntro.module.css';

const MainIntro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [120, -120]); // Visible Parallax
  const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]); // Asymmetric Parallax

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Left Guardian (Image) */}
        <motion.div
          style={{ y: yLeft }}
          className={`${styles.sideImageWrapper} ${styles.leftWrapper}`}
          initial={{ opacity: 0, x: -100 }} // Slide In from Left
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Floating Effect Wrapper */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image
              src="/images/intro/intro-1.jpg"
              alt="Heritage Left - Fresh Duck"
              fill
              className={styles.sideImage}
              priority
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </motion.div>
        </motion.div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          {/* Signature Rotated Label - Staggered Character Reveal */}
          <motion.div
            className={styles.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {'Heritage of Taste'.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
                  },
                }}
                style={{
                  display: 'inline-block',
                  minWidth: char === ' ' ? '0.3em' : 'auto',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Main Title - Mask Reveal (Cinematic) */}
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              className={styles.title}
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.3,
              }}
            >
              Since 1998
            </motion.h1>
          </div>

          {/* Center Image (CEO) */}
          <div className={styles.divider}>
            <div className={styles.duckImageWrapper}>
              <Image
                src="/assets/images/ceo-s.png"
                alt="CEO Duck"
                width={220}
                height={300}
                className={styles.duckImage}
                priority
              />
            </div>
          </div>

          {/* Body Text */}
          <article className={styles.body}>
            <p className={styles.paragraph}>
              자연이 내어준 가장 정직한 맛을 담았습니다.
              <br />
              세마오리농원은 26년의 시간 동안 변함없는 마음으로
              <br />
              불과 고기, 그리고 사람을 잇습니다.
            </p>
            <p className={styles.subParagraph}>
              깊은 산속 맑은 공기와 함께 피어오르는 참숯의 향기.
              <br />그 안에서 완성되는 진정한 미식의 경험을 선사합니다.
            </p>
          </article>
        </div>

        {/* Right Guardian (Image) */}
        <motion.div
          style={{ y: yRight }}
          className={`${styles.sideImageWrapper} ${styles.rightWrapper}`}
          initial={{ opacity: 0, x: 100 }} // Slide In from Right
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Floating Effect Wrapper */}
          <motion.div
            animate={{ y: [0, -20, 0] }} // Slightly different float for asymmetry
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className={styles.rightImageInner}
          >
            <Image
              src="/images/hero/main-right.webp"
              alt="Heritage Right - Fresh Duck"
              fill
              className={styles.sideImage}
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainIntro;
