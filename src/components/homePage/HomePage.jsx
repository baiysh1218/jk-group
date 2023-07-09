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
import NewsInfo from "../newsInfo/NewsInfo";
// import InformationStatistic from "/";

const HomePage = () => {
  const maxValue = [
    { number: 6, img: direction },
    { number: 1000, img: project },
    { number: 500, img: user },
  ];

  const cTabContent = {
    title: [
      "3D проектирование (BIM)",
      "Строительство",
      "Высокоточная металлообработка",
      "Производство и монтаж вентиляционного оборудования",
      "Учебный центр по стандартам TPS",
      "Международная логистика",
    ],
    content: [
      [
        "Slide 1 - Content for 3D проектирование (BIM)",
        "Slide 2 - Content for 3D проектирование (BIM)",
        "Slide 3 - Content for 3D проектирование (BIM)",
      ],
      [
        "Slide 1 - Content for Строительство",
        "Slide 2 - Content for Строительство",
        "Slide 3 - Content for Строительство",
      ],
      [
        "Slide 1 - Content for Высокоточная металлообработка",
        "Slide 2 - Content for Высокоточная металлообработка",
        "Slide 3 - Content for Высокоточная металлообработка",
      ],
      [
        "Slide 1 - Content for Производство и монтаж вентиляционного оборудования",
        "Slide 2 - Content for Производство и монтаж вентиляционного оборудования",
        "Slide 3 - Content for Производство и монтаж вентиляционного оборудования",
      ],
      [
        "Slide 1 - Content for Учебный центр по стандартам TPS",
        "Slide 2 - Content for Учебный центр по стандартам TPS",
        "Slide 3 - Content for Учебный центр по стандартам TPS",
      ],
      [
        "Slide 1 - Content for Международная логистика",
        "Slide 2 - Content for Международная логистика",
        "Slide 3 - Content for Международная логистика",
      ],
    ],
  };

  const navigate = useNavigate();
  return (
    <main className="main_home_page">
      <section className="section-one-box third-section-box">
        <video autoPlay muted loop id="homepage-video">
          {/* <source src={mainVideo} type="video/mp4" /> */}
        </video>
        <div className="content-box">
          <div className="mainsection-content-box">
            <div className="mainsection-content">
              <div className="mainsection-content-text">
                <p>Комплексный инжиниринг в Кыргызской Республике</p>
              </div>
            </div>
          </div>
          <div className="mainsection-options">
            <a className="mainsection-options-item">
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
      <CtabCarousel cTabContent={cTabContent} />
      <div className="sub_head_wrapper">
        <h2 className="sub_head">Новости</h2>
      </div>
      <NewsInfo />

      <FormConnect />
    </main>
  );
};

export default HomePage;
