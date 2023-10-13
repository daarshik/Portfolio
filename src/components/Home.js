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
      <ParallaxBanner
        style={{ aspectRatio: "1/2", overflow: "scroll" }}
        shouldAlwaysCompleteAnimation={true}
      >
        <ParallaxBannerLayer
          image={Image3}
          speed={-20}
          translateY={[0, 40]}
          opacity={[1, 0.8, 0.5, "easeInCubic"]}
        />
        <ParallaxBannerLayer speed={-5} className="lg:z-50">
          <div className="flex justify-center flex-col mt-40 p-30 lg:items-center text-white lg:box-border lg:mt-40 ">
            <div className="p-2 lg:ml-20 lg:mt-40 lg:text-2xl lg:tracking-wider">
              <HeroIntro />
            </div>
            <div className=" lg:ml-20  lg:mt-80  lg:mr-20 lg:p-35 lg:w-[100%] lg:box-border">
              <HeroImg />{" "}
            </div>
          </div>
          <Skills className="lg:mt-32 lg:h-full mb-0" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer
          image={Image3}
          speed={-40}
          translateY={[0, -100]}
          opacity={[0.5, 1, "easeInCubic"]}
          className="lg:-z-[500px] sm:z-50"
        />
      </ParallaxBanner>
    </div>
  );
};

export default Home;
