import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

// 동적 임포트 - 스크롤 아래 섹션들은 lazy loading
const MainIntro = dynamic(
  () => import('@/components/sections/main/MainIntro'),
  { ssr: true }
);
const MenuSection = dynamic(
  () => import('@/components/sections/main/MenuSection'),
  { ssr: true }
);
const MainChef = dynamic(() => import('@/components/sections/main/MainChef'), {
  ssr: true,
});
const IngredientsSection = dynamic(
  () => import('@/components/sections/main/IngredientsSection'),
  { ssr: true }
);
const AtmosphereSection = dynamic(
  () => import('@/components/sections/main/AtmosphereSection'),
  { ssr: true }
);

// 구조화 데이터 (Schema.org) - 검색엔진 최적화
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '세마오리농원',
  image: '/og-image.jpg',
  description: '26년 전통의 참숯불 오리구이 전문점',
  url: 'https://semaduck.com',
  telephone: '+82-31-000-0000', // 실제 번호로 수정 필요
  address: {
    '@type': 'PostalAddress',
    streetAddress: '세마로 123', // 실제 주소로 수정 필요
    addressLocality: '화성시',
    addressRegion: '경기도',
    postalCode: '00000',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.0, // 실제 좌표로 수정 필요
    longitude: 127.0,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '11:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  servesCuisine: 'Korean',
  priceRange: '₩₩₩',
  acceptsReservations: true,
  menu: 'https://semaduck.com/menu',
};

export default function IntroPage() {
  return (
    <>
      {/* 구조화 데이터 삽입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <MainIntro />
      <MenuSection />
      <MainChef />
      <IngredientsSection />
      <AtmosphereSection />
    </>
  );
}
