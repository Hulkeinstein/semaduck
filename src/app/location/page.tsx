'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  Car,
  Train,
  Copy,
  Share2,
} from 'lucide-react';
import styles from './LocationPage.module.css';

export default function LocationPage() {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText('경기도 화성시 세마로 123');
    alert('주소가 복사되었습니다.');
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      {/* Cinematic Hero */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero/hero-sub-banner-w1.webp"
            alt="Location Hero"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>LOCATION</span>
          <h1 className={styles.heroTitle}>오시는 길</h1>
          <p className={styles.heroDescription}>
            숲속의 쉼터, 세마오리농원으로 오시는 길을 상세히 안내해 드립니다.
          </p>
        </div>
      </div>

      {/* Action Buttons (Mobile First) */}
      <section className={styles.actionSection}>
        <a
          href="tel:031-123-4567"
          className={`${styles.actionButton} ${styles.primaryAction}`}
        >
          <Phone size={20} />
          전화 걸기
        </a>
        <a
          href="https://map.naver.com/p/search/세마오리농원"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}
        >
          <Navigation size={20} />
          네이버 지도
        </a>
        <a
          href="https://map.kakao.com/link/search/세마오리농원"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}
        >
          <Navigation size={20} />
          카카오맵
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=세마오리농원"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionButton}
        >
          <Navigation size={20} />
          구글맵
        </a>
        <button onClick={handleCopyAddress} className={styles.actionButton}>
          <Copy size={20} />
          주소 복사
        </button>
        <button
          onClick={() => {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
              ? process.env.NEXT_PUBLIC_BASE_URL
              : window.location.origin;

            const shareUrl = `${baseUrl}/location`;

            if (navigator.share) {
              navigator
                .share({
                  title: '세마오리농원 오시는 길',
                  text: '경기 화성시 세마로 123 (세마역 1번 출구)',
                  url: shareUrl,
                })
                .catch(console.error);
            } else {
              navigator.clipboard.writeText(shareUrl);
              alert('링크가 복사되었습니다.');
            }
          }}
          className={styles.actionButton}
        >
          <Share2 size={20} />
          공유하기
        </button>
      </section>

      {/* Main Content */}
      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Map Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapOverlay}>
            <div className={styles.statusDot} />
            현재 영업중
          </div>
          {/* Placeholder for Map - Google Maps Embed as fallback */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.814342551457!2d127.0458!3d37.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDExJzIyLjkiTiAxMjfCsDAyJzQ0LjkiRQ!5e0!3m2!1sen!2skr!4v1625000000000!5m2!1sen!2skr"
            className={styles.mapFrame}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sema Duck Farm Location"
          ></iframe>
        </div>

        {/* Info Card */}
        <div className={styles.infoCard}>
          <div className={styles.infoGroup}>
            <h3>
              <MapPin size={24} color="var(--sema-gold)" /> 주소
            </h3>
            <p>
              경기도 화성시 세마로 123
              <br />
              (세마역 1번 출구에서 800m)
            </p>
          </div>

          <div className={styles.infoGroup}>
            <h3>
              <Phone size={24} color="var(--sema-gold)" /> 연락처
            </h3>
            <p>
              031-123-4567
              <br />
              <span style={{ fontSize: '0.9rem', color: '#666' }}>
                (단체 예약 환영 / 주차 완비)
              </span>
            </p>
          </div>

          <div className={styles.infoGroup}>
            <h3>
              <Clock size={24} color="var(--sema-gold)" /> 운영 시간
            </h3>
            <p>
              매일 11:00 - 22:00
              <br />
              (라스트 오더 20:30)
            </p>
          </div>

          <div className={styles.infoGroup}>
            <h3>
              <Car size={24} color="var(--sema-gold)" /> 주차 안내
            </h3>
            <p>
              매장 전용 주차장 완비 (50대 규모)
              <br />
              대형 버스 주차 가능
            </p>
          </div>

          <div className={styles.infoGroup}>
            <h3>
              <Train size={24} color="var(--sema-gold)" /> 대중교통
            </h3>
            <ul className={styles.transportList}>
              <li>지하철 1호선 세마역 1번 출구 (도보 10분)</li>
              <li>버스 31번, 8번 &apos;세마오리농원&apos; 하차</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
