import React, { useState } from "react";
import "./scss/AddEventsInCalender.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { useSelector, useDispatch } from "react-redux";

function AddEventsInCalender({ flag, setFlag }) {
  const [note, setNote] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState();
  const [evenMonth, setEventMonth] = useState();
  const dispatch = useDispatch();
  

  const handleSubmit = () => {
    console.log(note);
    console.log(selectedDate.getDate());
    let obj = {
      Note: note,
      Month: selectedDate.getMonth(),
      EventDate: selectedDate.getDate(),
    };
    dispatch({ type: "ADD_ITEM", payload: obj });
    let a = [];

    a = JSON.parse(localStorage.getItem("Reminder"));
    if (a == null) {
      localStorage.setItem("Reminder", JSON.stringify([obj]));
    } else {
      a.push(obj);
      localStorage.setItem("Reminder", JSON.stringify(a));
    }
    // dispatch({type:"ADD_ITEM",payload})
    setFlag(!flag);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name == "value") setNote(e.target.value);
  };

  return (
    <div className="event-container-div">
      <label htmlFor=""> Enter the event</label>
      <input
        type="text"
        name="value"
        onChange={handleChange}
        placeholder="Enter your event here"
        value={note}
      />
      <DatePicker
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
      />
      <button className="submit" onClick={handleSubmit}>
        Add Event
      </button>
    </div>
  );
}

export default AddEventsInCalender;
