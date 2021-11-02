import React, { useState } from "react";
import "./scss/AddEvent.css";
import AddEventsInCalender from "./AddEventsInCalender";

function AddEvent() {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    console.log("click event is triggered");
    setFlag(!flag);
  };

  return (
    <div className="add-event-container">
      <button className="create-btn" onClick={handleClick}>
        + create
      </button>
      <div className=" add-event-container2">
        {flag && <AddEventsInCalender flag={flag} setFlag={setFlag} />}
      </div>
    </div>
  );
}

export default AddEvent;
