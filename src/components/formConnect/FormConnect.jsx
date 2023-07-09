import React, { useState } from "react";
import "./style/FormConnect.css";

const FormConnect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [address, setAddress] = useState("");
  const [contacts, setContacts] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [checkBox, setCheckBox] = useState("off");

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleChangeCheckBox = () => {
    checkBox === "off" ? setCheckBox("on") : setCheckBox("off");
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setAddress("");
    setContacts("");
    setEmail("");
    setText("");
  };

  return (
    <div className="form_connect_main_wrapper">
      <div className="form_connect_wrapper">
        <div className="header_form_connect">
          <h3>JK Group</h3>
        </div>
        <form className="form_inputs" onSubmit={handleFormSubmit}>
          <div className="form_input_wrapper">
            <input
              value={address}
              type="text"
              onChange={e => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
            <input
              value={contacts}
              type="text"
              onChange={e => setContacts(e.target.value)}
              placeholder="Contacts"
              required
            />
            <input
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              value={text}
              type="text"
              onChange={e => setText(e.target.value)}
              placeholder="Text"
              required
            />
            <select
              className="select"
              value={selectedOption}
              onChange={handleChange}
              required>
              <option value="">Выберите направление</option>
              <option value="option1">3D проектирование (BIM)</option>
              <option value="option2">Строительство</option>
              <option value="option3">Высокоточная металлообработка</option>
              <option value="option3">
                Производство и монтаж вентиляционного оборудования
              </option>
              <option value="option3">Учебный центр по стандартам TPS</option>
              <option value="option3">Международная логистика</option>
            </select>
          </div>
          <div className="select_agreement">
            <input type="checkbox" onChange={handleChangeCheckBox} required />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quos
              quo. Illo aliquam distinctio maiores commodi atque amet quisquam
              quod rerum, iure nemo quis repudiandae natus iste eum harum
              reprehenderit quas nam quasi eos expedita blanditiis neque
              obcaecati! Consectetur, molestias.
            </p>
            <div className="select_agreement_button_wrapper">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormConnect;
