import React from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image1 from "./assets/image7.jpg";
import Image3 from "./assets/image9.jpg";
import "./home.css";
import Skills from "./Skills";
import HeroIntro from "./HeroIntro";
import HeroImg from "./HeroImg";
import Experience from "./Experience&Education";

const Home = () => {
  return (
    <div className="bg-black">
      <ParallaxBanner style={{ overflow: "scroll" }} className="setAspectRatio">
        <ParallaxBannerLayer
          // image={Image1}
          speed={-20}
          // translateY={[0, 40]}
          // opacity={[1, 0.8, 0.5, "easeInCubic"]}
        />
        <ParallaxBannerLayer className="md:z-40" speed={-10}>
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
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
        // image={Image1}
        // speed={-10}
        // translateY={[0, 40]}
        // opacity={[0.5, 0.8, "easeInCubic"]}
        // className="md:-z-[500px]"
        />
      </ParallaxBanner>
    </div>
  );
};

export default Home;
//
