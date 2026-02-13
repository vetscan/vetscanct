import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import ServicesSearch from '@/components/ServicesSearch/ServicesSearch';
import OncologyHelp from '@/components/OncologyHelp/OncologyHelp';
import FAQ from '@/components/FAQ/FAQ';
import Prices from '@/components/Prices/Prices';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Hero />
        <ServicesSearch />
        <OncologyHelp />
        <FAQ />
        <Prices />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Водяные знаки */}
      {/* Кот - справа сверху */}
      <div className={styles.watermarkTop}>
        <Image 
          src="/cat.png" 
          alt="Watermark Cat" 
          width={200} 
          height={200}
          priority
        />
      </div>
      
      {/* Собака - справа снизу */}
      <div className={styles.watermarkBottom}>
        <Image 
          src="/dog.png" 
          alt="Watermark Dog" 
          width={200} 
          height={200}
          priority
        />
      </div>
    </>
  );
}
