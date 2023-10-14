import React from "react";
import "./home.css";
import Skills from "./Skills";
import HeroIntro from "./HeroIntro";
import HeroImg from "./HeroImg";
import Experience from "./Experience&Education";

const Home = () => {
  return (
    <div>
      
      <div
        className="flex justify-center flex-col mt-50 p-30 md:items-center md:flex-row text-white md:box-border md:mt-40 
          lg:items-center lg:flex-row lg:box-border lg:mt-40"
      >
        <div className="p-2 md:ml-60 mt-40">
          <HeroIntro />
        </div>
        <div
          className=" md:ml-40  md:mt-60  md:mr-20 md:p-35 md:w-[80%] 
            sm:w-[40%]
            lg:ml-40  lg:mt-60  lg:mr-20 md:p-35 lg:w-[100%] 
            box-border bg-cover"
        >
          <HeroImg />{" "}
        </div>
      </div>
      <Skills className="md:mt-32 md:h-full mb-0" />
      <Experience />
    </div>
  );
};

export default Home;
//
