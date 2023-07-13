import React, { useState } from "react";

import "./style/Resume.css";

const Resume = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = event => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = event => {
    event.preventDefault(false);
  };
  const handleDragOver = event => {
    event.preventDefault();
  };
  const handleDrop = event => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files;
    console.log(file);
  };
  return (
    <>
      <div className="content_resume_wrapper">
        <div className="resume_content">
          <h1>Подзаголовок</h1>
          <p>Текст</p>
        </div>
        <div
          className={`resume_upload ${isDragging ? "dragging" : "load"}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
          Перетащите сюда ваш резюме
        </div>
      </div>
    </>
  );
};

export default Resume;
