import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style/cTabCarousel.css";

// import required modules
import { Navigation } from "swiper";

const CtabCarousel = ({ marker, cTabContent }) => {
  const tabsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section id="page">
      <div id="tabs" className="c-tabs" ref={tabsRef}>
        <div className="c-tabs-nav">
          {cTabContent.title.map((text, index) => (
            <a
              href="#"
              className={`c-tabs-nav__link ${
                index === activeIndex ? "is-active" : ""
              }`}
              key={index}>
              {text}
            </a>
          ))}
          <div className="c-tab-nav-marker"></div>
        </div>

        {cTabContent.content.map((item, index) => (
          <div
            className={`c-tab ${index === activeIndex ? "is-active" : ""}`}
            key={index}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              {item.map((slide, slideIndex) => (
                <SwiperSlide key={slideIndex}>{slide}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CtabCarousel;
