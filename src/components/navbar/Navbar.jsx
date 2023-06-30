import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Navbar.css";

import JKLogo from "../../assets/logo/JKLogo.png";
import JKLogoSecond from "../../assets/logo/JKLogoSecond.png";

import search from "../../assets/icons/search.png";
import arrow from "../../assets/icons/down-arrow.png";
import DropdownContent from "../layout/dropdownContent/DropdownContent";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = index => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const dropDownContent = [
    {
      title: "О нас",
      navigate: "/about",
      content: {
        contentTitle: [
          "О НАС",
          "JK ENGINEERING",
          "JK CONSTRUCTION",
          "JK LOGISTIC",
          "JK METALPROF",
        ],
        contentItem: [
          ["история компании", "миссия и ценности", "партнеры"],
          [
            "3D проектирование (BIM)",
            "Производство и монтаж вентиляционного оборудования",
            "Учебный центр по стандартам TPS",
          ],
          ["Строительство"],
          ["Строительство"],
          ["Высокоточная металлообработка"],
        ],
      },
      id: 1,
    },
    {
      title: "Проекты",
      navigate: "/project",
      content: {
        contentTitle: [
          "О НАС",
          "JK ENGINEERING",
          "JK CONSTRUCTION",
          "JK LOGISTIC",
          "JK METALPROF",
        ],
        contentItem: [
          ["история компании", "миссия и ценности", "партнеры"],
          [
            "3D проектирование (BIM)",
            "Производство и монтаж вентиляционного оборудования",
            "Учебный центр по стандартам TPS",
          ],
          ["Строительство"],
          ["Строительство"],
          ["Высокоточная металлообработка"],
        ],
      },
      id: 2,
    },
    {
      title: "Команда",
      navigate: "/team",
      content: {
        contentTitle: [
          "О НАС",
          "JK ENGINEERING",
          "JK CONSTRUCTION",
          "JK LOGISTIC",
          "JK METALPROF",
        ],
        contentItem: [
          ["история компании", "миссия и ценности", "партнеры"],
          [
            "3D проектирование (BIM)",
            "Производство и монтаж вентиляционного оборудования",
            "Учебный центр по стандартам TPS",
          ],
          ["Строительство"],
          ["Строительство"],
          ["Высокоточная металлообработка"],
        ],
      },
      id: 3,
    },
    {
      title: "Новости",
      navigate: "/news",
      content: {
        contentTitle: [
          "О НАС",
          "JK ENGINEERING",
          "JK CONSTRUCTION",
          "JK LOGISTIC",
          "JK METALPROF",
        ],
        contentItem: [
          ["история компании", "миссия и ценности", "партнеры"],
          [
            "3D проектирование (BIM)",
            "Производство и монтаж вентиляционного оборудования",
            "Учебный центр по стандартам TPS",
          ],
          ["Строительство"],
          ["Строительство"],
          ["Высокоточная металлообработка"],
        ],
      },
      id: 4,
    },
    {
      title: "Карьера",
      navigate: "/about",
      content: {
        contentTitle: [
          "О НАС",
          "JK ENGINEERING",
          "JK CONSTRUCTION",
          "JK LOGISTIC",
          "JK METALPROF",
        ],
        contentItem: [
          ["история компании", "миссия и ценности", "партнеры"],
          [
            "3D проектирование (BIM)",
            "Производство и монтаж вентиляционного оборудования",
            "Учебный центр по стандартам TPS",
          ],
          ["Строительство"],
          ["Строительство"],
          ["Высокоточная металлообработка"],
        ],
      },
      id: 5,
    },
  ];

  return (
    <>
      <div id="top"></div>
      <header>
        <div id="header-logo" onClick={() => navigate("/")}>
          <img src={JKLogoSecond} alt="" className="nav_logo_web" />
          <img src={JKLogo} alt="" className="nav_logo_mobile" />
        </div>
        <div className="header-content">
          <ul className="header-list">
            {dropDownContent.map((item, index) => (
              <>
                <li
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className="header-list-item">
                  {item.title}
                  <img
                    src={arrow}
                    alt=""
                    className="arrow_nav"
                    width={"25px"}
                  />
                </li>
                {activeDropdown === index && (
                  <DropdownContent
                    content={dropDownContent[0].content}
                    index={index}
                    toggleDropdown={toggleDropdown}
                    navigatePath={item.navigate}
                  />
                )}
              </>
            ))}
          </ul>
        </div>

        <div className="header-btns">
          <button className="search">
            <img src={search} alt="" />
          </button>
          <button className="languages">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-globe-americas"
              viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
            </svg>
          </button>
          <button
            className="menu"
            onClick={() => {
              document
                .querySelector(".modal-window-content-box")
                .classList.toggle("modal-window-content-box-move");
              document
                .querySelector(".menu-burger")
                .classList.toggle("menu-display-none");
              document
                .querySelector(".menu-close")
                .classList.toggle("menu-display-block");
              document
                .querySelector(".modal-window-box")
                .classList.toggle("modal-window-box-display");
              document
                .querySelector(".modal-window-content-box")
                .classList.toggle("modal-window-content-box-dissapear");
              document.querySelector("body").style.overflow = "hidden";
            }}>
            <svg
              className="menu-burger bi bi-list"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="menu-close bi bi-x"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="modal-window-box">
        <div className="modal-window-content-box modal-window-content-box-dissapear">
          <ul>
            <li className="modal-window-list-item">
              <div className="modal-window-list-item-box">
                <div>
                  <h3 onClick={() => navigate("/about")}>О компании</h3>
                  <h3 onClick={() => navigate("/products")}>Проекты</h3>
                  <h3 onClick={() => navigate("/team")}>Команда</h3>
                  <h3 onClick={() => navigate("/career")}>Карьера</h3>
                  <h3 onClick={() => navigate("/news")}>Новости</h3>
                  <h3 onClick={() => navigate("/Contacts")}>Контакты</h3>
                  <h3 onClick={() => navigate("/")}>Домой</h3>
                </div>

                {/* <button className="green-btn-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </button> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
