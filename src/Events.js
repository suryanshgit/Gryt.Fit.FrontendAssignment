import React, { useState } from "react";
import EventDesc from "./EventDesc";
import Month from "./Month";
import "./scss/Events.css";

function Events({ item }) {
  const [flag, setFlag] = useState(false);

  return (
    <div className="events-description">
      <div onClick={() => setFlag(!flag)}>{item.Note}</div>
      <div>{item.EventDate}</div>
      <div>
        <Month month={item.Month} />
      </div>
      {flag && <EventDesc setFlag={setFlag} item={item} />}
    </div>
  );
}

export default Events;
