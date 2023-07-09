import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownContent = ({ content, toggleDropdown, index }) => {
  const navigate = useNavigate();

  const handleClickDropDown = item => {
    navigate(`${item.path}/${item.id}`);
    toggleDropdown(index);
  };

  const handleClickNavItem = item => {
    if (item.id) {
      navigate(`${item.path}/${item.id}`);
    } else {
      navigate(item.path);
    }

    toggleDropdown(index);
  };

  return (
    <>
      <div className={`drop_down_main_wrapper`}>
        <div className="dropdown-content">
          <div className="dropdown_wrapper">
            <div className="dropdown_wrapper_content">
              <div className="drop_down_content_item_h3">
                {content.contentTitle.map((item, itemIndex) => (
                  <h3 onClick={() => handleClickDropDown(item)} key={itemIndex}>
                    {item.title}
                  </h3>
                ))}
              </div>
            </div>
            <div className="dropdown-content_p">
              {content.contentItem.map((itemArray, index) => (
                <div className="drop_down_content_wrapper_p" key={index}>
                  {itemArray.map((item, itemIndex) => (
                    <p onClick={() => handleClickNavItem(item)} key={itemIndex}>
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
