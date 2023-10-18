import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./home.css";

const HeroIntro = () => {
  const [text] = useTypewriter({
    words: [
      "CS Engineer",
      "Front-end Developer",
      "UI/UX Designer",
      "Full Stack Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="tracking-wider ml-4 forMobile">
      <p className="text-6xl text-white animate-HeroIntro-Heading">
        <span className="block text-6xl ">Hello, </span>I'm{" "}
        <span style={{ fontWeight: "bold" }} className="text-8xl setName">
          Daarshik
        </span>{" "}
        <span
          style={{ fontWeight: "bold", display: "block" }}
          className=" text-2xl text-orange-300"
        >
          {text}
          <span style={{ color: "white" }}>
            <Cursor cursorStyle=">" />
          </span>
        </span>
      </p>
      <p className="mt-3 text-white text-lg flex-nowrap ">
        As an aspiring Computer Science Engineer, I bring robust problem-solving
        skills and proficiency in C++, JavaScript, React, Java, and Spring Boot
        to the table. My proactive nature, effective communication, and
        dedication to continuous learning make me an ideal candidate. I thrive
        in collaborative environments and am eager to contribute effectively to
        your team.
      </p>
      <button className="btn-grad m-5 font-semibold">View Resume</button>
    </div>
  );
};

export default HeroIntro;
