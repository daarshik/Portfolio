import React, { useState } from "react";
import { TfiViewListAlt } from "react-icons/tfi";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  return (
    <nav className="nav_parent">
      <div className="nav_child1">
        <p className="text1">Portfolio</p>
      </div>

      <div className={`nav_child2 ${toggle ? "open" : "close"}`}>
        <p
          className={`text2 ${select === "home" ? "selected" : ""}`}
          onClick={() => {
            setSelect("home");
          }}
        >
          Home
        </p>

        <p
          className={`text2 ${select === "skill" ? "selected" : ""}`}
          onClick={() => {
            setSelect("skill");
          }}
        >
          Skills
        </p>
        <p
          className={`text2 ${select === "exp" ? "selected" : ""}`}
          onClick={() => {
            setSelect("exp");
          }}
        >
          About Me
        </p>
        <p
          className={`text2 ${select === "contact" ? "selected" : ""}`}
          onClick={() => {
            setSelect("contact");
          }}
        >
          Contact Me
        </p>
      </div>

      <div className="nav_child3" class="md:hidden mr-2">
        <TfiViewListAlt
          onClick={() => {
            setToggle((prev) => !prev);
            console.log(toggle);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
