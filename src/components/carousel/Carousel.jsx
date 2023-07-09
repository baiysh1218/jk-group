import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import { Navigation } from "swiper";

import "./style/Carousel.css";

const Carousel = ({ content }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      id="carousel_company_swiper">
      <SwiperSlide>
        <div className="carousel_wrapper_item">
          <div className="content_carousel">
            <h2>HEAD</h2>
            <p>DESCRIPTION</p>
            <ul>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
            </ul>
          </div>
          <div className="carousel_img_wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel_wrapper_item">
          <div className="content_carousel">
            <h2>HEAD</h2>
            <p>DESCRIPTION</p>
            <ul>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
            </ul>
          </div>
          <div className="carousel_img_wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel_wrapper_item">
          <div className="content_carousel">
            <h2>HEAD</h2>
            <p>DESCRIPTION</p>
            <ul>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
            </ul>
          </div>
          <div className="carousel_img_wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel_wrapper_item">
          <div className="content_carousel">
            <h2>HEAD</h2>
            <p>DESCRIPTION</p>
            <ul>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
              <li>Hello world!</li>
            </ul>
          </div>
          <div className="carousel_img_wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
