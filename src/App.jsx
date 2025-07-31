import React from "react";
import Hero from "./sections/Hero";
import LeetCodeCounter from "./sections/LeetCodeCounter";
import { config } from "./constants/index.js";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LeetCodeCounter username={config.leetcodeUsername} />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
    </>
  );
};
export default App;
