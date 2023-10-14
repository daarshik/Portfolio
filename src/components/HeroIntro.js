import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./home.css";

const HeroIntro = () => {
  const [text] = useTypewriter({
    words: ["CS Engineer", "Front-end Developer", "UI/UX Designer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="tracking-wider">
      <p>
        <span className="block text-xl">Hello, </span>I'm{" "}
        <span style={{ fontWeight: "bold" }} className="text-xl">
          Daarshik
        </span>{" "}
        <span
          style={{ fontWeight: "bold", display: "block" }}
          className=" md:shadow-md text-lg text-cyan-900"
        >
          {text}
          <span style={{ color: "black" }}>
            <Cursor cursorStyle=">" />
          </span>
        </span>
      </p>
      <p className="mt-3 text-white text-lg">
        As an aspiring Computer Science Engineer, I bring robust problem-solving
        skills and proficiency in C++, JavaScript, React, Java, and Spring Boot
        to the table. My proactive nature, effective communication, and
        dedication to continuous learning make me an ideal candidate. I thrive
        in collaborative environments and am eager to contribute effectively to
        your team.
      </p>
    </div>
  );
};

export default HeroIntro;
