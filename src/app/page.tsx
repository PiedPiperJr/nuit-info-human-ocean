import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DemoSection from "../components/DemoSection";
import VisualizeSection from "../components/VisualizeSection";
import LearnMoreSection from "../components/LearnMoreSection";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <>
    <Navbar />
    <HeroSection />
    <DemoSection />
    <VisualizeSection />
    <LearnMoreSection />
    <Footer />
  </>
);

export default Home;
