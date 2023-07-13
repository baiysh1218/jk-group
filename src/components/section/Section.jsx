import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Carousel from "../carousel/Carousel";
import Loader from "../loader/Loader";
import "./style/Section.css";

const Section = () => {
  const [isLoader, setIsLoader] = useState(true);

  const { id } = useParams();

  const { line, main } = useContext(pageContext);

  const [data] = line.filter(item => item.title === id);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [main]);

  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="section_wrapper">
          <div className="section_head_content">
            <h2>{data?.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}></p>
          </div>
          <div className="carousel_section">
            <Carousel data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Section;
