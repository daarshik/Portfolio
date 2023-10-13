import React from "react";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image1 from "./assets/image12.jpg";
import Image3 from "./assets/image9.jpg";
import "./home.css";
import Skills from "./Skills";
import HeroIntro from "./HeroIntro";
import HeroImg from "./HeroImg";

const Home = () => {
  return (
    <div className=" bg-black">
      <ParallaxBanner style={{ aspectRatio: "1/2", overflow: "scroll" }}>
        <ParallaxBannerLayer
          image={Image3}
          speed={-20}
          translateY={[0, 50]}
          opacity={[1, 0.8, 0.5, "easeInCubic"]}
        />
        <ParallaxBannerLayer speed={-5} className="md:z-40">
          <div
            className="flex justify-center flex-col mt-40 p-30 md:items-center md:flex-row text-white md:box-border md:mt-40 
          lg:items-center lg:flex-row lg:box-border lg:mt-40"
          >
            <div className="p-2 md:ml-60 md:mt-40">
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
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          image={Image3}
          speed={-40}
          translateY={[0, -140]}
          opacity={[0.5, 0.8, "easeInCubic"]}
          className="md:-z-[500px]"
        />
      </ParallaxBanner>
    </div>
  );
};

export default Home;
//
