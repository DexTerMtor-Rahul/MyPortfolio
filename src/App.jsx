import React from "react";
import Hero from "./sections/Hero";
import LeetCodeCounter from "./sections/LeetCodeCounter";
import { config } from "./constants/index.js";

const App = () => {
  return (
    <>
      <Hero />
      <LeetCodeCounter username={config.leetcodeUsername} />
    </>
  );
};
export default App;
