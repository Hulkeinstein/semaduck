'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import styles from './page.module.css';

// Real data authentic from research
const mediaNews = [
  {
    id: 1,
    title: '오산시 오리고기 맛집 상위권 선정',
    excerpt:
      '다이닝코드 및 주요 맛집 평가 사이트에서 오산 지역 오리고기 부문 높은 순위를 기록했습니다.',
    date: '2024.01',
    source: '맛집 랭킹 뉴스',
    image: '/images/media-1.jpg',
    link: 'https://www.diningcode.com/list.php?query=오산%20오리고기',
  },
  {
    id: 2,
    title: 'KBS 2TV 생생정보 - 숲속의 힐링 식당',
    excerpt:
      '도심 속에서 자연을 만끽하며 즐기는 숯불 오리구이! 가족 외식 명소로 소개되었습니다.',
    date: '방송 출연',
    source: 'KBS 생생정보',
    image: '/images/media-2.jpg',
    link: 'https://search.naver.com/search.naver?where=video&query=세마오리농원+방송',
  },
];

// Curated Best Reviews based on actual blog sentiments
const featuredReviews = [
  {
    id: 1,
    title: '잡내 없이 깔끔한 생오리 숯불구이 최고!',
    excerpt:
      '기름기는 쏙 빠지고 육즙은 살아있어서 정말 담백해요. 셀프바에서 눈치 안 보고 야채 가져다 먹는 것도 편했습니다.',
    author: '미식가J',
    date: '2024.01.20',
    rating: 5,
    image: '/images/review-1.jpg',
    link: 'https://search.naver.com/search.naver?query=세마오리농원+생오리+후기',
  },
  {
    id: 2,
    title: '항아리가 가득한 정원, 부모님이 너무 좋아하세요',
    excerpt:
      '식당 입구부터 멋스러운 항아리들이 반겨줘서 분위기가 너무 좋아요. 식사 후 커피 한잔하며 산책하기 딱 좋은 곳입니다.',
    author: '효녀심청',
    date: '2023.12.15',
    rating: 5,
    image: '/images/review-2.jpg',
    link: 'https://search.naver.com/search.naver?query=세마오리농원+분위기',
  },
  {
    id: 3,
    title: '마무리 오리탕과 가마솥밥은 필수 코스',
    excerpt:
      '고기 다 먹고 나오는 오리탕이 닭개장처럼 얼큰하고 시원해요. 갓 지은 솥밥이랑 같이 먹으면 정말 든든한 마무리입니다.',
    author: '든든한한끼',
    date: '2023.11.30',
    rating: 5,
    image: '/images/review-3.jpg',
    link: 'https://search.naver.com/search.naver?query=세마오리농원+오리탕',
  },
];

export default function ReviewsPage() {
  return (
    <main className={styles.main}>
      {/* Cinematic Hero Section */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero/hero-sub-banner-w1.webp"
            alt="Sema Duck Farm Hero"
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
            COMMUNITY & NEWS
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            소식 & 후기
          </motion.h1>
          <motion.p
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            숲속의 쉼터, 세마오리농원에서
            <br />
            피어나는 맛있는 이야기들을 전해드립니다.
          </motion.p>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        {/* Media & News Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>방송 & 언론 보도</h2>
            </div>
            <div className={styles.newsGrid}>
              {mediaNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  className={styles.newsCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.newsContent}>
                    <span className={styles.newsSource}>{news.source}</span>
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <p className={styles.newsExcerpt}>{news.excerpt}</p>
                    <div className={styles.newsFooter}>
                      <span className={styles.newsDate}>{news.date}</span>
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMore}
                      >
                        자세히 보기
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>블로그 & 방문자 리뷰</h2>
              <a
                href="https://search.naver.com/search.naver?query=세마오리농원+후기"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.naverLink}
              >
                네이버 블로그 리뷰 더보기 <ExternalLink size={16} />
              </a>
            </div>

            <div className={styles.grid}>
              {featuredReviews.map((review, index) => (
                <motion.article
                  key={review.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.stars}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#FFD700"
                          color="#FFD700"
                        />
                      ))}
                    </div>
                    <span className={styles.date}>{review.date}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{review.title}</h3>
                  <p className={styles.cardExcerpt}>{review.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.author}>by. {review.author}</span>
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                    >
                      더보기
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
