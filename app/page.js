'use client'
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Header1 from '@/components/HomeHeader';
import Mission from '@/components/Mission';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Header1/>
      <Hero/>
      <Mission/>
      <Services/>
      <hr className="mt-20"/>
      <Footer/>
    </main>
  );
}
