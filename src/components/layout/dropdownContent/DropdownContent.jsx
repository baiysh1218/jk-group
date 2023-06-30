import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownContent = ({ content, index, navigatePath, toggleDropdown }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(navigatePath);
    toggleDropdown(index);
  };

  return (
    <>
      <div className="drop_down_main_wrapper">
        <div className="dropdown-content">
          <div className="dropdown_wrapper">
            <div className="dropdown_wrapper_content">
              <div key={index} className="drop_down_content_item_h3">
                {content.contentTitle.map((item, index) => (
                  <h3 onClick={handleClickNavigate}>{item}</h3>
                ))}
              </div>
            </div>
            <div className="dropdown-content_p">
              {content.contentItem.map((itemArray, index) => (
                <div className="drop_down_content_wrapper_p" key={index}>
                  {itemArray.map((item, itemIndex) => (
                    <p key={itemIndex}>{item}</p>
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
