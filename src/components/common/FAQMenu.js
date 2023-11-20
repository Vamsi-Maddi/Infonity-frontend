import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";
import "./HomePage.css";

const FAQMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
    <div className="accordion-menu" id = "FAQs">
      <h5 className="title font-weight-bold text-warning" style = {{fontSize:"30px"}}>FAQ'S - Frequently Asked Questions</h5>
      <div className="accordion-items">
        <FAQItem
          title="Introduction to React JS."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <FAQItem
          title="Learn how to create flexible layouts using CSS Flexbox."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <FAQItem
          title="Master the fundamental concepts of JavaScript with this beginner-friendly guide."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
      </div>
    </div>
  );
};

export default FAQMenu;