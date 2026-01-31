'use client';

import { motion } from 'framer-motion';
import styles from './MenuSection.module.css';
import type { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  {
    step: 'Main Menu',
    name: '오리 숯불구이',
    price: '한마리 89,000 / 반마리 54,000',
    description: '', // Description moved to details/emphasis
    details: [
      { label: '추가 메뉴', text: '1인분 추가 27,000' },
      {
        label: '코스 포함',
        text: '오리 숯불구이, 도토리묵, 계절 식사(깨죽, 냉면 또는 밥, 오리탕)',
        highlight: true,
      },
      {
        label: '원산지',
        text: '오리고기, 쌀, 김치(배추, 고추가루) 국내산',
        isOrigin: true,
      },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="section-taste-of-nature" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Signature Course
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Taste of Nature
          </motion.h2>
        </div>

        {/* Content Row: Menu List + Image */}
        <div className={styles.contentRow}>
          {/* Menu List */}
          <div className={styles.menuList}>
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className={styles.courseStep}>{item.step}</span>
                <div className={styles.menuItem}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>

                  {/* Description/Details List */}
                  <div className={styles.detailsContainer}>
                    {item.details &&
                      item.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className={`${styles.detailItem} ${detail.isOrigin ? styles.origin : ''} ${detail.highlight ? styles.highlight : ''}`}
                        >
                          {detail.label && (
                            <span className={styles.detailLabel}>
                              {detail.label}:
                            </span>
                          )}
                          {detail.text}
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Column */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.menuImageWrapper}>
              {/* Make sure Image is imported */}
              <img
                src="/images/menu/menu-poster.png"
                alt="Sema Duck Farm Signature Menu"
                className={`${styles.menuImage} ${styles.menuImageContain}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
