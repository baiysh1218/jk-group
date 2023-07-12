import React, { useContext, useEffect } from "react";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Carousel from "../carousel/Carousel";
import FormConnect from "../formConnect/FormConnect";

import "./style/Company.css";

const Company = () => {
  const { currentCompany } = useContext(pageContext);

  return (
    <>
      <div className="company_main_wrapper">
        <div className="company_content_text_wrapper">
          <h2>HEADER</h2>
          <h4>О компании</h4>
          <div className="company_block_content">TEXT</div>
          <h4>МИССИЯ И ЦЕННОСТИ</h4>
          <div className="company_block_content">TEXT</div>
        </div>
        <div className="company_main_card">
          <div className="company_main_card_item"></div>
          <div className="company_main_card_item"></div>
          <div className="company_main_card_item"></div>
        </div>
      </div>
      <Carousel />
      <FormConnect />
    </>
  );
};

export default Company;
