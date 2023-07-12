import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { pageContext } from "../../../contexts/PageContext/PageContext";

const DropdownContent = ({ content, toggleDropdown, index, dropDownClass }) => {
  const navigate = useNavigate();

  const { main, handleFiltered, getLine, currentCompany, line } =
    useContext(pageContext);

  useEffect(() => {
    getLine();
  }, []);

  const handleClickDropDown = item => {
    navigate(`${item.path}/${item.id}`);
    toggleDropdown(index);
  };

  const handleClickNavItem = item => {
    if (item.id) {
      navigate(`${item.path}/${item.item}`);
    } else {
      navigate(`${item.path}/${item.item}`);
    }

    toggleDropdown(index);
  };

  const handleClickDropDownElem = item => {
    handleFiltered(item);
    handleClickDropDown(item);
    toggleDropdown(index);
  };

  const handleNav = item => {
    handleClickNavItem(item);
    toggleDropdown(index);
  };

  return (
    <>
      <div className={`drop_down_main_wrapper`}>
        <div
          className={`dropdown-content 
          ${dropDownClass && dropDownClass}`}>
          <div className="dropdown_wrapper">
            <div className="dropdown_wrapper_content">
              <div className="drop_down_content_item_h3">
                {content.contentTitle.map((item, itemIndex) => (
                  <h3
                    onClick={() => handleClickDropDownElem(item)}
                    key={itemIndex}>
                    {item.title}
                  </h3>
                ))}
              </div>
            </div>
            <div className="dropdown-content_p">
              {content.contentItem.map((itemArray, index) => (
                <div className="drop_down_content_wrapper_p" key={index}>
                  {itemArray.map((item, itemIndex) => (
                    <p onClick={() => handleNav(item)} key={itemIndex}>
                      {item.item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownContent;
