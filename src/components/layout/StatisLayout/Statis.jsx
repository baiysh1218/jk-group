import React, { useEffect, useState, useRef } from "react";
import logo from "../../../assets/logo/JKLogo.png";
import icondiraction from "../../../assets/icons/direction.png";
import "./style/Statis.css";

const Statis = ({ maxValues }) => {
  const [counts, setCounts] = useState(
    maxValues.map(() => ({ number: 0, img: "" }))
  );

  const statisticRef = useRef(null);

  const formatNumber = number => {
    if (number > 999) {
      return number.toLocaleString();
    }
    return number;
  };

  const counter = (minimum, maximum, index) => {
    const interval = Math.floor(500 / (maximum - minimum + 1)); // Интервал времени между изменениями чисел

    const updateCounts = () => {
      setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        if (newCounts[index].number < maximum) {
          newCounts[index].number += 1;
        }
        return newCounts;
      });
    };

    const intervalId = setInterval(updateCounts, interval);

    return () => {
      clearInterval(intervalId);
    };
  };

  const handleIntersect = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      maxValues.forEach((maxValue, index) => {
        const { number, img } = maxValue;
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = { number: 0, img };
          return newCounts;
        });
        counter(0, number, index);
      });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (statisticRef.current) {
      observer.observe(statisticRef.current);
    }

    return () => {
      if (statisticRef.current) {
        observer.unobserve(statisticRef.current);
      }
    };
  }, []);

  return (
    <div ref={statisticRef} className="stats-number_wrapper">
      <div className="stats_content_wrapper">
        <img src={logo} alt="" />
        <p>уникальность и технологичность</p>
      </div>
      <div className="stats_number_wrapper_main">
        {counts.map((count, index) => (
          <p key={index} className="stats-number">
            <span>
              <img src={count.img} alt="" width={"40px"} />
            </span>
            <span>{formatNumber(count.number)}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Statis;
