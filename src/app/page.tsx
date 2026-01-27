import Hero from '@/components/sections/Hero';
import MainIntro from '@/components/sections/main/MainIntro';
import MenuSection from '@/components/sections/main/MenuSection';
import MainChef from '@/components/sections/main/MainChef';
import IngredientsSection from '@/components/sections/main/IngredientsSection';
import AtmosphereSection from '@/components/sections/main/AtmosphereSection';

export default function IntroPage() {
  return (
    <>
      <Hero />
      <MainIntro />
      <MenuSection />
      <MainChef />
      <IngredientsSection />
      <AtmosphereSection />
    </>
  );
}
