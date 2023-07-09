import React, { useEffect, useState } from "react";
import "./style/CardAnimation.css";

const CardAnimation = ({ cardContent }) => {
  const [animatedCards, setAnimatedCards] = useState([]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const cardElements = document.querySelectorAll(".card_animation");

    cardElements.forEach((cardElement, index) => {
      const cardTop = cardElement.offsetTop;
      const cardHeight = cardElement.offsetHeight;
      const scrollOffset = window.innerHeight * 0.5;

      if (
        scrollTop >= cardTop - scrollOffset &&
        scrollTop <= cardTop + cardHeight - scrollOffset &&
        !animatedCards.includes(index)
      ) {
        setAnimatedCards(prevState => [...prevState, index]);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container_card_animation">
      <div className="card_animation_wrapper">
        <div className="card_animation_content">
          <h2>Подзаголовок</h2>
          <p>Текст</p>
        </div>
        <div className="card_content_wrapper">
          {cardContent.map((cardItem, index) => (
            <div
              className={`card_animation ${
                animatedCards.includes(index) ? "animate" : ""
              }`}
              key={index}>
              <img src={cardItem.img} alt="" />
              <p>{cardItem.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
