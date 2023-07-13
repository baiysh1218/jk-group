import React from "react";
import About from "../about/About";
import AboutContent from "../aboutContent/AboutContent";
import CtabCarousel from "../cTabCarousel/CtabCarousel";
import Statis from "../layout/StatisLayout/Statis";

import direction from "../../assets/icons/direction.png";
import project from "../../assets/icons/project-management.png";
import user from "../../assets/icons/user.png";

import "./style/AboutMainContent.css";
import CardAnimation from "../layout/cardAnimation/CardAnimation";

const AboutMain = () => {
  const maxValue = [
    { number: 6, img: direction },
    { number: 50, img: project },
    { number: 40, img: user },
  ];

  return (
    <>
      <AboutContent />
      <Statis maxValues={maxValue} />
      {/* <div className="stats_wrapper_about">
        <h3>Загаловок</h3>
        <p>Место для текста</p>
      </div> */}
    </>
  );
};

export default AboutMain;
