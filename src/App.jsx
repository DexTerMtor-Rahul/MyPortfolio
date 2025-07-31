import React from "react";
import Hero from "./sections/Hero";
import LeetCodeCounter from "./sections/LeetCodeCounter";
import { config } from "./constants/index.js";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <LeetCodeCounter username={config.leetcodeUsername} />
      {/* <AppShowcase /> */}
    </>
  );
};
export default App;
