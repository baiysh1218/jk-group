import React, { useState } from "react";
import "./style/NewsInfo.css";

const NewsInfo = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setIsOverlayVisible(false);
  };
  return (
    <>
      <section className="news_wrapper">
        <div
          className="news_content_table"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div
            className={`news_content_overlay ${
              isOverlayVisible ? "visible" : "leave"
            }`}></div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div
          className="news_content_table"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div
            className={`news_content_overlay ${
              isOverlayVisible ? "visible" : "leave"
            }`}></div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div
          className="news_content_table"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div
            className={`news_content_overlay ${
              isOverlayVisible ? "visible" : "leave"
            }`}></div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
      </section>
      <div className="news_bottom_block"></div>
    </>
  );
};

export default NewsInfo;
