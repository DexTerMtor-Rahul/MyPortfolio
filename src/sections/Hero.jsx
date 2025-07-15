import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>From MCA</h1>
              <h1>
                to Crafting
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-orange-100"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Real Results</h1>
            </div>

            <p className="text-orange-500 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Rahul Raj, an MCA graduate and Software Developer who
              loves turning ideas into secure, real-world solutions.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* Right: 3D Model */}
        <figure>
          <div className="hero-3d-layout ">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
