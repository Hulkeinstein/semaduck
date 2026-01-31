'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './StoryPage.module.css';

export default function StoryPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.div
        className={styles.heroSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className={styles.label}>Our Philosophy</span>
        <h1 className={styles.title}>
          Nature, Time, and
          <br />
          The Artisan&apos;s Touch
        </h1>
      </motion.div>

      {/* Section 1: The Beginning */}
      <section className={styles.contentRow}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/intro/intro-1.jpg"
            alt="Old House Heritage"
            fill
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>1998년, 시작된 약속</h2>
          <p className={styles.description}>
            세마오리농원은 화려한 도심이 아닌, 조용한 숲속에서 시작되었습니다.
            유행을 쫓기보다 변하지 않는 맛의 본질을 지키겠다는 고집. 그 고집
            하나로 26년의 시간을 쌓아왔습니다.
          </p>
        </motion.div>
      </section>

      {/* Section 2: The Ingredients */}
      <section className={`${styles.contentRow} ${styles.reverse}`}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/ingredients/03.jpg"
            alt="Fresh Ingredients"
            fill
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>자연이 준 선물</h2>
          <p className={styles.description}>
            매일 아침 농장에서 직송되는 신선한 생오리, 직접 기른 채소, 그리고
            강원도 산지에서 공수한 참숯. 가장 좋은 재료가 가장 훌륭한 요리사가
            된다는 믿음으로 타협하지 않는 식탁을 준비합니다.
          </p>
        </motion.div>
      </section>

      {/* Section 3: The Artisan */}
      <section className={styles.contentRow}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>불을 다루는 집념</h2>
          <p className={styles.description}>
            숯불은 살아있습니다. 매 순간 숨을 쉬고 온도가 변합니다. 그 미세한
            차이를 읽어내고 고기의 육즙을 가두는 기술. 그것은 책으로 배울 수
            없는, 오직 시간과 경험만이 만들어낼 수 있는 예술입니다.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
