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
        <div className="setForMobile lg:flex lg:ml-16 ">
          <div className="p-1 md:mt-40 md:ml-14 animate-HeroIntro setIntro">
            <HeroIntro />
          </div>
          <div
            className=" md:ml-32  md:mt-60  md:mr-20 md:p-35 md:w-[80%] 
            sm:w-[40%]
            lg:ml-40  lg:mt-60  lg:mr-20 md:p-35 lg:w-[100%] 
            box-border bg-cover animate-HeroImg mt-3 md:mt-5 lg:mb-16"
          >
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
