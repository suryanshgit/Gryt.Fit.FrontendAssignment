import React from "react";
import "./scss/Date.css";

function DateComponent({ item, index, dates }) {
  if (dates.includes(item)) {
    return (
      <div className="date-container-active" id={index}>
        {item}
      </div>
    );
  } else {
    return (
      <div className="date-container" id={index}>
        {item}
      </div>
    );
  }
}

export default DateComponent;
