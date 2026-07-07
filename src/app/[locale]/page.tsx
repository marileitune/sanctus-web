import { Main } from '@/components/home/Main';
import { AboutUs } from '@/components/home/AboutUs';
import { Features } from '@/components/home/Features';
import { ContactUs } from '@/components/home/ContactUs';
import { Footer } from '@/components/home/Footer';

export default function Home() {
  return (
    <main id="main-content">
      <Main />
      <AboutUs />
      <Features />
      <ContactUs />
      <Footer />
    </main>
  );
}
