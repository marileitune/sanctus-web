import { Main } from '@/components/home/Main';
import { Stats } from '@/components/home/Stats';
import { AboutUs } from '@/components/home/AboutUs';
import { Features } from '@/components/home/Features';
import { Streak } from '@/components/home/Streak';
import { ContactUs } from '@/components/home/ContactUs';
import { Footer } from '@/components/home/Footer';

const Home = () => (
  <main id="main-content">
    <Main />
    <Stats />
    <AboutUs />
    <Features />
    <Streak />
    <ContactUs />
    <Footer />
  </main>
);

export default Home;
