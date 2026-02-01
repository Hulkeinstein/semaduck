'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './StoryPage.module.css';

export default function StoryPage() {
  const { scrollYProgress } = useScroll();

  // Parallax Transforms
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const yContent1 = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);
  const yContent2 = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);
  const yContent3 = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);

  // Kinetic Typography Variants
  const fadeBlurIn = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const containerStagger = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animated Line Variant
  const lineDraw = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className={styles.container}>
      {/* Cinematic Grain Overlay */}
      <div className={styles.grainOverlay}></div>

      {/* Hero Section */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero/hero-sub-banner-w1.webp"
            alt="Brand Story Hero"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <motion.div
          className={styles.heroContent}
          style={{ y: yHero }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.span variants={fadeBlurIn} className={styles.heroSubtitle}>
            OUR PHILOSOPHY
          </motion.span>
          <motion.h1 variants={fadeBlurIn} className={styles.heroTitle}>
            피어나는 맛있는 이야기
          </motion.h1>
          <motion.p variants={fadeBlurIn} className={styles.heroDescription}>
            자연과 시간, 그리고 사람의 정성으로 빚어낸 세마오리농원의 철학
          </motion.p>
        </motion.div>
      </div>

      {/* Introduction Quote */}
      <motion.div
        className={styles.quoteSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerStagger}
      >
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
        <motion.h3 variants={fadeBlurIn} className={styles.quoteText}>
          &ldquo;진정한 맛은
          <br />
          기다림 끝에 찾아옵니다.&rdquo;
        </motion.h3>
        <motion.span variants={fadeBlurIn} className={styles.citation}>
          SINCE 1998
        </motion.span>
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
      </motion.div>

      {/* Section 1: The Beginning */}
      <section className={styles.contentRow}>
        <motion.div
          className={styles.imageWrapper}
          style={{ y: yContent1 }}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/story/story-content-1.jpg"
            alt="Sema Duck Farm History"
            fill
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2 variants={fadeBlurIn} className={styles.sectionTitle}>
            1998년, 시작된 약속
          </motion.h2>
          <motion.p variants={fadeBlurIn} className={styles.description}>
            세마오리농원은 화려한 도심이 아닌, 조용한 숲속에서 시작되었습니다.
            유행을 쫓기보다 변하지 않는 맛의 본질을 지키겠다는 고집. 그 고집
            하나로 26년의 시간을 쌓아왔습니다.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophical Interlude */}
      <motion.div
        className={styles.quoteSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
        <motion.p
          variants={fadeBlurIn}
          className={styles.quoteText}
          style={{ fontSize: '1.8rem', color: 'var(--sema-forest-green)' }}
        >
          자연이 허락한 재료에
          <br />
          사람의 정성을 더하는 일,
          <br />
          그것이 우리가 정의하는 요리입니다.
        </motion.p>
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
      </motion.div>

      {/* Section 2: The Ingredients */}
      <section className={`${styles.contentRow} ${styles.reverse}`}>
        <motion.div
          className={styles.imageWrapper}
          style={{ y: yContent2 }}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/story/nature.jpg"
            alt="Fresh Ingredients from Nature"
            fill
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2 variants={fadeBlurIn} className={styles.sectionTitle}>
            자연이 준 선물
          </motion.h2>
          <motion.p variants={fadeBlurIn} className={styles.description}>
            매일 아침 농장에서 직송되는 신선한 생오리, 직접 기른 채소, 그리고
            강원도 산지에서 공수한 참숯. 가장 좋은 재료가 가장 훌륭한 요리사가
            된다는 믿음으로 타협하지 않는 식탁을 준비합니다.
          </motion.p>
        </motion.div>
      </section>

      {/* Final Quote */}
      <motion.div
        className={styles.quoteSection}
        style={{ marginBottom: '100px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
        <motion.h3 variants={fadeBlurIn} className={styles.quoteText}>
          &ldquo;음식이 아닌,
          <br />
          대접받는 기쁨을 드립니다.&rdquo;
        </motion.h3>
        <motion.div
          variants={lineDraw}
          className={styles.verticalLine}
        ></motion.div>
      </motion.div>

      {/* Section 3: The Artisan */}
      <section className={styles.contentRow}>
        <motion.div
          className={styles.imageWrapper}
          style={{ y: yContent3 }}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/chef/charcoal.avif"
            alt="Charcoal Fire"
            fill
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
        >
          <motion.h2 variants={fadeBlurIn} className={styles.sectionTitle}>
            불을 다루는 집념
          </motion.h2>
          <motion.p variants={fadeBlurIn} className={styles.description}>
            숯불은 살아있습니다. 매 순간 숨을 쉬고 온도가 변합니다. 그 미세한
            차이를 읽어내고 고기의 육즙을 가두는 기술. 그것은 책으로 배울 수
            없는, 오직 시간과 경험만이 만들어낼 수 있는 예술입니다.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
