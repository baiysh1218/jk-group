import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style/About.css";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { pageContext } from "../../contexts/PageContext/PageContext";

const About = () => {
  const { companyContent, getCompanyAll } = useContext(pageContext);

  useEffect(() => {
    getCompanyAll();
  }, []);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstanse = swiperRef.current.swiper;
      if (swiperInstanse && swiperInstanse.pagination) {
        const paginationEl = swiperInstanse.pagination.bullets;
        for (let i = 0; i < companyContent.length; i++) {
          paginationEl[i].innerText = companyContent[i]?.name;
        }
      }
    }
  }, [companyContent]);

  console.log(companyContent);
  return (
    <>
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide className="swiper_slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default About;
