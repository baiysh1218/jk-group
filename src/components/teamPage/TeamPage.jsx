import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Loader from "../loader/Loader";

import "./style/TeamPage.css";

const TeamPage = () => {
  const navigate = useNavigate();
  const { companyContent, getCompanyAll, getOneCompany } =
    useContext(pageContext);

  useEffect(() => {
    getCompanyAll();
  }, []);

  return companyContent ? (
    <>
      <div className="our_team_page_wrapper">
        <div className="our_team_page_content_wrapper">
          <div className="our_team_page_img">
            <img
              src="https://cdn.cookielaw.org/logos/889c435d-64b4-46d8-ad05-06332fe1d097/4353a07c-5b48-453a-b5ab-e8498c172697/IMG-ReBrand-Blue.png"
              alt=""
            />
          </div>
          <div className="our_team_page_button_wrapper">
            {companyContent.map(item => (
              <button key={item.id} onClick={() => getOneCompany(item)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default TeamPage;
