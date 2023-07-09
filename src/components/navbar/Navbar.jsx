import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style/Navbar.css";
import "../../adaptive.css";

import JKLogo from "../../assets/icons/JKGroup_black_nav_logo.png";

import search from "../../assets/icons/search.png";
import arrow from "../../assets/icons/down-arrow.png";
import DropdownContent from "../layout/dropdownContent/DropdownContent";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [indexDropDown, setIndexDropDown] = useState(null);

  const navigate = useNavigate();

  const toggleDropdown = index => {
    setActiveDropdown(index === activeDropdown ? null : index);
    setIndexDropDown(indexDropDown);
  };
  const dropDownContent = [
    {
      title: "о нас",
      content: {
        contentTitle: [
          { title: "О НАС", path: "/about", id: 1 },
          { title: "JK ENGINEERING", path: "/about/partners", id: 2 },
          { title: "JK CONSTRUCTION", path: "/about/partners", id: 3 },
          { title: "JK LOGISTIC", path: "/about/partners", id: 4 },
          { title: "JK METALPROF", path: "/about/partners", id: 5 },
        ],
        contentItem: [
          [
            { item: "история компании", path: "/about/history" },
            { item: "миссия и ценности", path: "/about/mission-values" },
            { item: "партнеры", path: "/about/partners" },
          ],
          [
            {
              item: "3D проектирование (BIM)",
              path: "/project/section",
              id: 1,
            },
            {
              item: "Производство и монтаж вентиляционного оборудования",
              path: "/project/section",
              id: 2,
            },
            {
              item: "Учебный центр по стандартам TPS",
              path: "/project/section",
              id: 3,
            },
          ],
          [{ item: "Строительство", path: "/team/construction" }],
          [{ item: "Международная логистика", path: "/team/logistic" }],
          [{ item: "Высокоточная металлообработка", path: "/team/metalprof" }],
        ],
      },
      id: 1,
    },
  ];

  return (
    <>
      <div id="top"></div>
      <header>
        <div className="header_wrapper">
          <div
            id="header-logo"
            className="header-logo"
            onClick={() => {
              navigate("/");
              toggleDropdown(indexDropDown);
            }}>
            <img src={JKLogo} alt="" className="nav_logo_mobile" />
          </div>
          <div className="header-content">
            <ul className="header-list">
              {dropDownContent.map((item, index) => (
                <>
                  <li
                    key={index}
                    onClick={() => toggleDropdown(index)}
                    className={`header-list-item ${
                      activeDropdown === index ? "active" : ""
                    }`}>
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
                      content={dropDownContent[index].content}
                      toggleDropdown={toggleDropdown}
                      index={index}
                    />
                  )}
                </>
              ))}
              <li
                className="header-list-item"
                onClick={() => {
                  navigate("/products");
                  toggleDropdown(indexDropDown);
                }}>
                проекты
                <img src={arrow} alt="" className="arrow_nav" width={"25px"} />
              </li>
              <li
                className="header-list-item"
                onClick={() => {
                  navigate("/team");
                  toggleDropdown(indexDropDown);
                }}>
                команда
                <img src={arrow} alt="" className="arrow_nav" width={"25px"} />
              </li>
              <li
                className="header-list-item"
                onClick={() => {
                  navigate("/news");
                  toggleDropdown(indexDropDown);
                }}>
                новости
                <img src={arrow} alt="" className="arrow_nav" width={"25px"} />
              </li>
              <li
                className="header-list-item"
                onClick={() => {
                  navigate("/career");
                  toggleDropdown(indexDropDown);
                }}>
                карьера
                <img src={arrow} alt="" className="arrow_nav" width={"25px"} />
              </li>
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
        </div>
      </header>

      <div className="modal-window-box">
        <div className="modal-window-content-box modal-window-content-box-dissapear">
          <ul>
            <li className="modal-window-list-item">
              <div className="modal-window-list-item-box">
                <div>
                  {dropDownContent.map((item, index) => (
                    <>
                      <h3 key={index} onClick={() => toggleDropdown(index)}>
                        {item.title}
                      </h3>
                      {activeDropdown === index && (
                        <DropdownContent
                          content={dropDownContent[index].content}
                          toggleDropdown={toggleDropdown}
                          index={index}
                        />
                      )}
                    </>
                  ))}
                  <h3 onClick={() => navigate("/team")}>Команда</h3>
                  <h3 onClick={() => navigate("/career")}>Карьера</h3>
                  <h3 onClick={() => navigate("/news")}>Новости</h3>
                  <h3 onClick={() => navigate("/Contacts")}>Контакты</h3>
                  <h3 onClick={() => navigate("/")}>Домой</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
