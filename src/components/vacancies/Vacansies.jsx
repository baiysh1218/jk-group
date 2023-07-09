import React from "react";
import CtabCarousel from "../cTabCarousel/CtabCarousel";

const Vacansies = () => {
  const cTabContent = {
    title: ["JK ENGINEERING", "JK CONSTRUCTION", "JK LOGISTIC", "JK METALPROF"],
    content: [
      [
        "Slide 1 - Content for 3D проектирование (BIM)",
        "Slide 2 - Content for 3D проектирование (BIM)",
        "Slide 3 - Content for 3D проектирование (BIM)",
      ],
      [
        "Slide 1 - Content for Строительство",
        "Slide 2 - Content for Строительство",
        "Slide 3 - Content for Строительство",
      ],
      [
        "Slide 1 - Content for Высокоточная металлообработка",
        "Slide 2 - Content for Высокоточная металлообработка",
        "Slide 3 - Content for Высокоточная металлообработка",
      ],
      [
        "Slide 1 - Content for Производство и монтаж вентиляционного оборудования",
        "Slide 2 - Content for Производство и монтаж вентиляционного оборудования",
        "Slide 3 - Content for Производство и монтаж вентиляционного оборудования",
      ],
    ],
  };
  return (
    <>
      <CtabCarousel cTabContent={cTabContent} />
    </>
  );
};

export default Vacansies;
