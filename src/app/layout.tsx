import type { Metadata } from 'next';
import {
  Playfair_Display,
  Manrope,
  Dancing_Script,
  Oswald,
  Noto_Sans_KR,
  Noto_Serif_KR,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const dancing = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const notoSansKr = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const notoSerifKr = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  // 기본 정보
  title: {
    default: '세마오리농원 | 26년 전통 참숯불 오리구이',
    template: '%s | 세마오리농원',
  },
  description:
    '26년의 고집, 변치 않는 맛. 경기도 화성에서 최고급 참숯불 오리구이를 경험하세요. 신선한 국내산 오리고기와 전통 조리법으로 정성을 담았습니다.',
  keywords: [
    '세마오리농원',
    '오리고기',
    '오리구이',
    '참숯불구이',
    '화성맛집',
    '경기도맛집',
    '오리전문점',
    '숯불오리',
    '오리백숙',
  ],

  // 검색엔진 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (카카오톡, 페이스북 공유 시)
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://semaduck.com',
    siteName: '세마오리농원',
    title: '세마오리농원 | 26년 전통 참숯불 오리구이',
    description:
      '26년의 고집, 변치 않는 맛. 경기도 화성에서 최고급 참숯불 오리구이를 경험하세요.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '세마오리농원 참숯불 오리구이',
      },
    ],
  },

  // Twitter 카드
  twitter: {
    card: 'summary_large_image',
    title: '세마오리농원 | 26년 전통 참숯불 오리구이',
    description:
      '26년의 고집, 변치 않는 맛. 경기도 화성에서 최고급 참숯불 오리구이를 경험하세요.',
    images: ['/og-image.jpg'],
  },

  // 기타
  alternates: {
    canonical: 'https://semaduck.com',
  },
  verification: {
    other: {
      'naver-site-verification': 'ff4d3b9c428f2dc71d761ffd7fe5970956a1a6e6',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${manrope.variable} ${dancing.variable} ${oswald.variable} ${notoSansKr.variable} ${notoSerifKr.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
