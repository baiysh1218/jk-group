import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style/About.css";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const About = () => {
  const swiperRef = useRef(null);

  console.log(swiperRef);

  const swiperSpanContent = [
    "Учебный центр по стандартам TPS",
    "Международная логистика",
    "Направление: инжинерия",
    "Направление: логистика",
    "Направление: Строительство",
    "Направление: Металлопроизводство",
  ];
  // console.log(swiperRef.current.swiper.pagination);
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstanse = swiperRef.current.swiper;
      if (swiperInstanse && swiperInstanse.pagination) {
        const paginationEl = swiperInstanse.pagination.bullets;
        for (let i = 0; i < paginationEl.length; i++) {
          paginationEl[i].innerText = swiperSpanContent[i];
        }
      }
    }
  }, []);
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
        <SwiperSlide className="swiper_slide">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
};

export default About;
