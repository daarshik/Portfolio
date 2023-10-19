import React from "react";
import "./home.css";
import Skills from "./Skills";
import HeroIntro from "./HeroIntro";
import HeroImg from "./HeroImg";
import About from "./Experience&Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div
          className="setForMobile lg:flex lg:flex-row lg:m-40  justify-center items-center
        md:flex-col md:m-24 mt-28"
        >
          <div className="animate-HeroIntro setIntro">
            <HeroIntro />
          </div>
          <div className="animate-HeroImg setSvgImg">
            <HeroImg />{" "}
          </div>
        </div>
      </div>
      <Skills className="md:mt-32 md:h-full mb-0 " />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
//
