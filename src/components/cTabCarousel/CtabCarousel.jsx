import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style/cTabCarousel.css";

// import required modules
import { Navigation } from "swiper";

const CtabCarousel = ({ marker }) => {
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
  return (
    <section id="page">
      <div id="tabs" className="c-tabs" ref={tabsRef}>
        <div className="c-tabs-nav">
          <a href="#" className="c-tabs-nav__link is-active">
            3D проектирование (BIM)
          </a>
          <a href="#" className="c-tabs-nav__link">
            Строительство
          </a>
          <a href="#" className="c-tabs-nav__link">
            Высокоточная металлообработка
          </a>
          <a href="#" className="c-tabs-nav__link">
            Производство и монтаж вентиляционного оборудования
          </a>
          <a href="#" className="c-tabs-nav__link">
            Учебный центр по стандартам TPS
          </a>
          <a href="#" className="c-tabs-nav__link">
            Международная логистика
          </a>
          <div className="c-tab-nav-marker"></div>
        </div>

        <div className="c-tab is-active">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>

        <div className="c-tab">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>

        <div className="c-tab">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>

        <div className="c-tab">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <div className="c-tab">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <div className="c-tab">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CtabCarousel;
