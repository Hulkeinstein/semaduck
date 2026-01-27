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
  title: '세마오리농원 | Sema Duck Farm',
  description: '전통과 정성이 담긴 오리고기 전문점, 세마오리농원입니다.',
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
