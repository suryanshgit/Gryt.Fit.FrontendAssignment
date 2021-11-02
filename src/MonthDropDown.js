import React, { useEffect, useRef } from "react";

function MonthDropDown({ month, setMonth }) {
  const handleChange = (e) => {
    console.log("Value inside the handleChange event");
    console.log(e.target.selectedIndex);
    setMonth(e.target.selectedIndex);
  };
  let inputRef = useRef(null);
  useEffect(() => {
    // inputRef.current.selected="selected";
    console.log("Value of inputRe is");
    console.log(inputRef);
    console.log(inputRef.current);
    inputRef.current[month].selected = "selected";
  }, []);

  return (
    <div>
      <select name="months" ref={inputRef} id="" onChange={handleChange}>
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
    </div>
  );
}

export default MonthDropDown;
