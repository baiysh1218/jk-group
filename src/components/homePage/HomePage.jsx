import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/HomePage.css";

import direction from "../../assets/icons/direction.png";
import project from "../../assets/icons/project-management.png";
import user from "../../assets/icons/user.png";

import About from "../about/About";
import Team from "../team/Team";
import InformationStatistic from "../layout/StatisLayout/Statis";
// import CtabCarousel from "../cTabCarousel/CtabCarousel";
import FormConnect from "../formConnect/FormConnect";
import CtabCarousel from "../cTabCarousel/CtabCarousel";
// import InformationStatistic from "/";

const HomePage = () => {
  const maxValue = [
    { number: 6, img: direction },
    { number: 1000, img: project },
    { number: 500, img: user },
  ];

  const navigate = useNavigate();
  return (
    <main className="main_home_page">
      <section className="section-one-box">
        <video autoPlay muted loop id="homepage-video">
          {/* <source src={mainVideo} type="video/mp4" /> */}
        </video>
        <div className="content-box">
          <div className="mainsection-content-box">
            <div className="mainsection-content">
              <div className="mainsection-content-text">
                {/* <h1>
                  Вместе к новым горизонтам: объединяем устойчивость,
                  стабильность и инновационность с приоритетом на человеческие
                  ресурсы.
                </h1> */}
                <p>Комплексный инжиниринг в Кыргызской Республике</p>
              </div>
              {/* <form className="mainsection-content-form" action="submit">
                <input
                  className="mainsection-content-search"
                  placeholder="What are you looking for?"
                  type="text"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form> */}
            </div>
          </div>
          <div className="mainsection-options">
            <a
              className="mainsection-options-item"
              onClick={() => navigate("/secondPage")}>
              3D проектирование (BIM)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
              {/* <img src={constactions} alt="" /> */}
            </a>
            <a className="mainsection-options-item">
              Строительство
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Высокоточная металлообработка
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Производство и монтаж вентиляционного оборудования
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Производство и монтаж вентиляционного оборудования
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Производство и монтаж вентиляционного оборудования
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <InformationStatistic maxValues={maxValue} />
      </section>
      <div className="sub_head_wrapper">
        <h2 className="sub_head">Учебный центр по стандартам TPS</h2>
      </div>
      <About />
      <CtabCarousel />
      <div className="sub_head_wrapper">
        <h2 className="sub_head">Новости</h2>
      </div>
      <section className="news_wrapper">
        <div className="news_content_table">
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div className="news_content_overlay"></div>
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
        <div className="news_content_table">
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div className="news_content_overlay"></div>
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
        <div className="news_content_table">
          <div className="news_content_item">
            <h3>тема новости</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              architecto quod iure porro molestias debitis beatae sequi
              perspiciatis doloribus nihil.
            </p>
          </div>
          <div className="news_content_overlay"></div>
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
      <FormConnect />
    </main>
  );
};

export default HomePage;
