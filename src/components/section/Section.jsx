import React from "react";
import Carousel from "../carousel/Carousel";
import "./style/Section.css";

const Section = () => {
  return (
    <div className="section_wrapper">
      <div className="section_head_content">
        <h2>Подзагаловок</h2>
        <p>Текст</p>
      </div>
      <Carousel />
    </div>
  );
};

export default Section;
