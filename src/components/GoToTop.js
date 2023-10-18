import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./goToTop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <div
          className="bg-white fixed bottom-5 rounded-full right-3 cursor-pointer h-8 w-8 m-2 p-2"
          onClick={goToBtn}
        >
          <FaArrowUp className="top-btn text-black bg-transparent" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
