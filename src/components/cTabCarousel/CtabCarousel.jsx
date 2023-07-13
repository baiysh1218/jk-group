import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style/cTabCarousel.css";
import { Navigation } from "swiper";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Loader from "../loader/Loader";

const CtabCarousel = ({ marker, cTabContent }) => {
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  const { line, getLine } = useContext(pageContext);

  console.log("LINE", line);

  useEffect(() => {
    getLine();
  }, []);

  useEffect(() => {
    const tabNavigationLinks =
      tabsRef.current.querySelectorAll(".c-tabs-nav__link");
    const tabContentContainers = tabsRef.current.querySelectorAll(".c-tab");

    const clickHandlerSetup = (link, index) => {
      link.addEventListener("click", e => {
        e.preventDefault();
        goToTab(index);
      });
    };

    const goToTab = index => {
      if (
        index >= 0 &&
        index !== activeIndex &&
        index <= tabNavigationLinks.length
      ) {
        tabNavigationLinks[activeIndex].classList.remove("is-active");
        tabNavigationLinks[index].classList.add("is-active");

        tabContentContainers[activeIndex].classList.remove("is-active");
        tabContentContainers[index].classList.add("is-active");

        if (marker) {
          setMarker(tabNavigationLinks[index]);
        }

        setActiveIndex(index);
      }
    };

    const createNavMarker = tabLinks => {
      const marker = document.createElement("div");
      marker.classList.add("c-tab-nav-marker");
      tabLinks.appendChild(marker);
      return marker;
    };

    const setMarker = element => {
      if (marker) {
        marker.style.left = element.offsetLeft + "px";
        marker.style.width = element.offsetWidth + "px";
      }
    };

    for (let i = 0; i < tabNavigationLinks.length; i++) {
      const link = tabNavigationLinks[i];
      clickHandlerSetup(link, i);
    }

    if (marker) {
      setMarker(tabNavigationLinks[activeIndex]);
    }
  }, [activeIndex, marker]);

  const handleSwiperSlideChange = () => {
    setIsLoading(true); // Устанавливаем состояние загрузки в true при изменении слайда Swiper
  };

  const handleSwiperSlideTransitionEnd = () => {
    setIsLoading(false); // Устанавливаем состояние загрузки в false, когда переход Swiper завершен
  };

  return (
    <section id="page">
      <div id="tabs" className="c-tabs" ref={tabsRef}>
        <div className="c-tabs-nav">
          {line?.map((text, index) => (
            <a
              href="#"
              className={`c-tabs-nav__link ${
                index === activeIndex ? "is-active" : ""
              }`}
              key={index}>
              {text.title}
            </a>
          ))}
          <div className="c-tab-nav-marker"></div>
        </div>

        {line?.map((item, index) => {
          if (typeof item === "object") {
            return (
              <div
                className={`c-tab ${index === activeIndex ? "is-active" : ""}`}
                key={index}>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  onSlideChange={handleSwiperSlideChange} // Обработчик изменения слайда
                  onTransitionEnd={handleSwiperSlideTransitionEnd} // Обработчик завершения перехода
                >
                  {item.extra_fields.map(content => {
                    if (typeof content === "object") {
                      return (
                        <SwiperSlide key={content.id}>
                          <div className="swiper_content">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: content.sub_title,
                              }}></h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: content.description,
                              }}></p>
                            <img
                              src={content.picture}
                              alt={content.description}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
                {isLoading && <Loader />}
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default CtabCarousel;
