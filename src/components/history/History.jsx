import React from "react";
import Carousel from "../carousel/Carousel";
import CardAnimation from "../layout/cardAnimation/CardAnimation";

const History = () => {
  const cardContent = [
    {
      img: "IMG",
      content: "CARD",
    },
    {
      img: "IMG",
      content: "CARD",
    },
    {
      img: "IMG",
      content: "CARD",
    },
  ];

  return (
    <>
      <div className="history_company">
        <div className="history_company_wrapper_img">
          <h2>Загаловок</h2>
          <div className="history_company_wrapper_content">
            <p>Место для текста</p>
          </div>
        </div>
      </div>
      <CardAnimation cardContent={cardContent} />
    </>
  );
};

export default History;
