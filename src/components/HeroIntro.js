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
    <div>
      <p>
        <span className="block">Hello, </span>I'm{" "}
        <span style={{ fontWeight: "bold" }}>Daarshik</span>{" "}
        <span
          style={{ fontWeight: "bold", color: "black" }}
          className=" lg:shadow-md"
        >
          {text}
          <span style={{ color: "red" }}>
            <Cursor cursorStyle=">" />
          </span>
        </span>
      </p>
      <p className="mt-3 lg:text-gray-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        deserunt quasi hic labore eum sapiente mollitia unde enim molestias
        illum quae necessitatibus id quisquam tempora amet, eveniet, vero cumque
        ex tenetur recusandae corporis! Corrupti sed sit cumque non distinctio,
        autem modi error voluptas minima accusantium? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Id dolor, velit neque officia sapiente a
        repudiandae, odio doloremque facilis quia eaque aliquid sunt labore
        nihil autem, amet rerum qui libero minus? Voluptatem nihil natus iusto
        maiores cum! Possimus aperiam, aspernatur beatae animi accusantium
      </p>
    </div>
  );
};

export default HeroIntro;
