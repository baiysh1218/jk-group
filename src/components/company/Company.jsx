import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Carousel from "../carousel/Carousel";
import FormConnect from "../formConnect/FormConnect";

import "./style/Company.css";

const Company = () => {
  const {
    currentCompany,
    getCompanyAll,
    companyContent,
    getOneCompanyId,
    oneCompany,
  } = useContext(pageContext);

  useEffect(() => {
    getOneCompanyId();
  }, []);

  console.log(oneCompany);
  const { id } = useParams();

  const filteredCompany = companyContent.filter(item => item.name === id);

  const [content] = filteredCompany;

  console.log(content);

  return (
    <>
      <div className="company_main_wrapper">
        <div className="company_content_text_wrapper">
          <h2>{content?.name}</h2>
          <h4>{content?.group}</h4>
        </div>
        <div className="company_main_card">
          <div className="company_main_card_item"></div>
          <div className="company_main_card_item"></div>
          <div className="company_main_card_item"></div>
        </div>
      </div>
      {/* <Carousel /> */}
      <FormConnect />
    </>
  );
};

export default Company;
