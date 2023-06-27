import React, { useState } from "react";
import "./style/FormConnect.css";

const FormConnect = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleForm = e => {
    e.preventDefault();
  };

  return (
    <div className="form_connect_main_wrapper">
      <div className="form_connect_wrapper">
        <div className="header_form_connect">
          <h3>JK Group</h3>
        </div>
        <form action="submit" className="form_inputs" onSubmit={handleForm}>
          <div className="form_input_wrapper">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <select value={selectedOption} onChange={handleChange}>
              <option value="options ">Выберите</option>
              <option value="options option1">Опция 1</option>
              <option value="options option2">Опция 2</option>
              <option value="options option3">Опция 3</option>
            </select>
          </div>
          <hr />
          <input type="checkbox" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quos
            quo. Illo aliquam distinctio maiores commodi atque amet quisquam
            quod rerum, iure nemo quis repudiandae natus iste eum harum
            reprehenderit quas nam quasi eos expedita blanditiis neque
            obcaecati! Consectetur, molestias.
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormConnect;
