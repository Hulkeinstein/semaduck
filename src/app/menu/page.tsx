'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './page.module.css';

export default function MenuPage() {
  return (
    <div className={styles.container}>
      {/* Cinematic Hero Section */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero/hero-sub-banner-w1.webp"
            alt="Sema Duck Farm Authentic Menu"
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
            AUTHENTIC TASTE
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            정성의 식탁
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            자연이 허락한 가장 신선한 식재료로
            <br />
            시간과 정성을 들여 준비한 세마오리농원의 맛입니다.
          </motion.p>
        </div>
      </section>

      {/* Signature Section (Golden Zone) */}
      <section className={styles.signatureSection}>
        <motion.div
          className={styles.signatureImageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/menu/menu-poster.png"
            alt="Sema Duck Signature Roast"
            className={styles.signatureImage}
            width={600}
            height={800}
          />
        </motion.div>

        <motion.div
          className={styles.signatureContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>SIGNATURE</span>
          <h2 className={styles.signatureName}>참숯불 생오리 구이</h2>
          <span className={styles.signaturePrice}>₩ 89,000 / 한마리</span>

          <p className={styles.signatureDesc}>
            당일 도축된 신선한 유황생오리를 최고급 참숯에 구워냅니다. 쫄깃한
            육질과 고소한 풍미, 그리고 숯향의 조화를 경험하세요.
          </p>

          <ul className={styles.signatureDetails}>
            <li className={styles.detailItem}>
              <span className={styles.detailIcon}>✦</span>
              포함: 도토리묵, 계절 겉절이, 깨죽, 오리탕
            </li>
            <li className={styles.detailItem}>
              <span className={styles.detailIcon}>✦</span>
              식사: 냉면 또는 공기밥 선택 가능
            </li>
            <li className={styles.detailItem}>
              <span className={styles.detailIcon}>✦</span>
              반마리 추가 가능 (54,000원)
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Grid Menu Categories */}
      <div className={styles.menuGrid}>
        {/* Category 1: Duck Stew & Porridge (Included in Full Course) */}
        <div className={styles.categoryGroup}>
          <div className={styles.categoryTitle}>
            Included Courses
            <span className={styles.categorySubtitle}>코스 포함 메뉴</span>
          </div>
          <div className={styles.itemList}>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>오리탕 (Spicy Duck Stew)</h3>
                <p className={styles.itemDesc}>
                  오리뼈를 깊게 우려낸 얼큰하고 진한 국물
                </p>
              </div>
              <span className={styles.itemPrice}>포함</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>영양죽 (Porridge)</h3>
                <p className={styles.itemDesc}>
                  오리 육수로 끓여낸 고소하고 부드러운 마무리 식사
                </p>
              </div>
              <span className={styles.itemPrice}>포함</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>도토리묵 (Acorn Jelly)</h3>
                <p className={styles.itemDesc}>
                  직접 쑨 도토리묵과 텃밭 채소 겉절이
                </p>
              </div>
              <span className={styles.itemPrice}>포함</span>
            </div>
          </div>
        </div>

        {/* Category 2: Additional Sides */}
        <div className={styles.categoryGroup}>
          <div className={styles.categoryTitle}>
            Sides & Drinks
            <span className={styles.categorySubtitle}>추가 메뉴</span>
          </div>
          <div className={styles.itemList}>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>냉면 (Cold Noodles)</h3>
                <p className={styles.itemDesc}>
                  입가심으로 좋은 시원한 물냉면 / 비빔냉면
                </p>
              </div>
              <span className={styles.itemPrice}>6,000</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>공기밥</h3>
                <p className={styles.itemDesc}>된장찌개 포함</p>
              </div>
              <span className={styles.itemPrice}>2,000</span>
            </div>
            <div className={styles.menuItem}>
              <div className={styles.itemText}>
                <h3 className={styles.itemName}>주류 / 음료</h3>
                <p className={styles.itemDesc}>
                  소주, 맥주 (5,000) / 음료 (2,000)
                </p>
              </div>
              <span className={styles.itemPrice}>Var.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Origin Info */}
      <footer className={styles.originSection}>
        <h4 className={styles.originTitle}>원산지 안내</h4>
        <p className={styles.originText}>
          오리고기(국내산), 쌀(국내산), 김치(배추/고춧가루: 국내산), 두부(콩:
          외국산)
        </p>
      </footer>
    </div>
  );
}
