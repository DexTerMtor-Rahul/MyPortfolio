import Hero from "./sections/Hero";
import LeetCodeSection from "./sections/LeetCodeSection.jsx";
import { config } from "./constants/index.js";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Education from "./sections/Education.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Education />
      <LeetCodeSection username={config.leetcodeUsername} />
      {/* <AppShowcase />
      <LogoSection /> */}
      <ExperienceSection />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
