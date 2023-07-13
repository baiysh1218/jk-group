import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import { Navigation } from "swiper";

import "./style/Carousel.css";

const Carousel = ({ data }) => {
  console.log(data);
  const [objectData, setObjectData] = useState([]);
  const handleChckValid = () => {
    setObjectData(data?.extra_fields.filter(item => typeof item === "object"));
  };

  useEffect(() => {
    handleChckValid();
  }, [data]);

  console.log(objectData);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        id="carousel_company_swiper">
        {objectData?.map(itemCarousel => (
          <SwiperSlide>
            <div className="carousel_wrapper_item">
              <div className="content_carousel">
                <h2></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: itemCarousel.description,
                  }}></p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: itemCarousel.sub_title,
                    }}></li>
                </ul>
              </div>
              <div className="carousel_img_wrapper">
                <img src={itemCarousel.picture} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
