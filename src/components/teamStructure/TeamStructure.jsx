import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";
import Loader from "../loader/Loader";
import DropDownCard from "../teamCardDropDown/DropDownCard";

import "./style/TeamStructure.css";

const TeamStructure = () => {
  const { oneCompany, teamAll, getTeamInfoAll } = useContext(pageContext);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [closingDropdownId, setClosingDropdownId] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getTeamInfoAll();
  }, []);

  const toggleDropdown = employeeId => {
    if (openDropdownId === employeeId) {
      setIsClosing(true);
      setClosingDropdownId(employeeId);
      setTimeout(() => {
        setOpenDropdownId(null);
        setIsClosing(false);
        setClosingDropdownId(null);
      }, 500); // Delay in milliseconds before hiding the dropdown
    } else {
      setOpenDropdownId(employeeId);
    }
  };

  const teamCompany = teamAll.filter(company => company.company === id);

  return (
    <>
      <div className="team_structure_wrapper">
        <div className="team_structure_img_content">
          <img
            src="https://cdn.cookielaw.org/logos/889c435d-64b4-46d8-ad05-06332fe1d097/4353a07c-5b48-453a-b5ab-e8498c172697/IMG-ReBrand-Blue.png"
            alt=""
          />
        </div>
        <h2>{id}</h2>
        <div className="team_structure_item_wrapper">
          {teamCompany.map(employee => (
            <div className="team_structure_content" key={employee.id}>
              <div className="team_structure_card">
                <img src={employee.main_picture} alt="" />
                <div className="team_structure_card_content">
                  <div className="team_structure_card_content_i">
                    <h5>{employee.name}</h5>
                    <p>{employee.status}</p>
                  </div>
                  <button onClick={() => toggleDropdown(employee.id)}>
                    {openDropdownId === employee.id ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div className="dropdown_main_wrapper">
                <hr />
                {openDropdownId === employee.id && (
                  <>
                    <DropDownCard
                      employee={employee}
                      isClosing={isClosing}
                      closingDropdownId={closingDropdownId}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamStructure;
