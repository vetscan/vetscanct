import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import ServicesSearch from '@/components/ServicesSearch/ServicesSearch';
import OncologyHelp from '@/components/OncologyHelp/OncologyHelp';
import FAQ from '@/components/FAQ/FAQ';
import Prices from '@/components/Prices/Prices';
import Team from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

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
        <Team />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
