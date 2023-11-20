import React from "react";

const FAQItem = ({ title, content, isActive, onClick }) => {
  return (
    <div
      className= {`accordion-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className={`icon-container ${isActive ? "active" : ""}`}>
        <div className={`stroke-one ${isActive ? "active" : ""}`}></div>
        <div className="stroke-two"></div>
      </div>
      <h1 className="accordion-tile">{title}</h1>
      <p className={`accordion-content ${isActive ? "active" : ""}`}>
        {content}
      </p>
    </div>
  );
};

export default FAQItem;