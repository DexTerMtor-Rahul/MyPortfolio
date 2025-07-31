import Hero from "./sections/Hero";
import LeetCodeCounter from "./sections/LeetCodeCounter";
import { config } from "./constants/index.js";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LeetCodeCounter username={config.leetcodeUsername} />
      {/* <AppShowcase />
      <LogoSection /> */}
      <ExperienceSection />
      <FeatureCards />
    </>
  );
};
export default App;
