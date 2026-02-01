'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import styles from './Footer.module.css';
import DuckParade from './DuckParade';

// Animation variants - matching Hero pattern
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background texture overlay */}
      <div className={styles.backgroundOverlay} />

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Top Section */}
        <div className={styles.topSection}>
          {/* Brand & Info */}
          <motion.div className={styles.brandSection} variants={itemVariants}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo-gold-up.png"
                alt="Sema Duck Logo"
                width={280}
                height={80}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>전통과 정성이 담긴 오리고기 전문점</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className={styles.navSection} variants={itemVariants}>
            <h4 className={styles.navTitle}>메뉴</h4>
            <nav className={styles.navLinks}>
              <Link href="/menu">메뉴 보기</Link>
              <Link href="/reservation">예약하기</Link>
              <Link href="/location">오시는 길</Link>
              <Link href="/contact">문의하기</Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <h4 className={styles.navTitle}>연락처</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} />
                <span>경기도 화성시 세마로 123</span>
              </li>
              <li>
                <Phone size={16} />
                <span>031-123-4567</span>
              </li>
              <li>
                <Clock size={16} />
                <span>매일 11:00 - 22:00</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socialSection} variants={itemVariants}>
            <h4 className={styles.navTitle}>소셜 미디어</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Naver Blog"
                className={styles.naverBlog}
              >
                <span>N</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Duck Parade Animation - above divider */}
        <DuckParade />

        {/* Divider with animation */}
        <motion.div
          className={styles.divider}
          variants={dividerVariants}
          style={{ originX: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div className={styles.bottomSection} variants={itemVariants}>
          <p className={styles.copyright}>
            © 2025 세마오리농원. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">개인정보처리방침</Link>
            <Link href="/terms">이용약관</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
