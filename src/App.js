import React, { useState, useEffect } from "react";
import DateComponent from "./DateComponent";
import "./scss/App.css";
import Month from "./Month.js";
import MonthDropDown from "./MonthDropDown";
import TodoItems from "./TodoItems";
import AddEvent from "./AddEvent";
import Weekdays from "./Weekdays";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useSelector } from "react-redux";

function App() {
  //month state
  const [month, setMonth] = useState(new Date().getMonth());

  let tarikh = [];
  const Eventdate = useSelector((state) => state);
  tarikh = Eventdate.map((item) => {
    return { date: item.EventDate, month: item.Month };
  });
  let dates = tarikh.map((item) => {
    if (item.month == month) return item.date;
  });
  console.log("Event dates is");
  console.log(dates);

  let a = [];
  let dt = new Date();
  // let month=dt.getMonth();
  let year = dt.getFullYear();
  let date = dt.getDate();
  console.log(month, date, year);

  let emptyblocks = new Date(year, month, 1).getDay();
  let numberOfDays = new Date(year, month + 1, 0).getDate();
  console.log("NUmber of days in month is " + numberOfDays);
  // console.log("Day is")
  // console.log(emptyblocks);

  const [slideIndex, setSlideIndex] = useState({
    start: 1,
    end: 7 - emptyblocks,
  });

  console.log("value of slide Index is ");
  console.log(slideIndex);

  if (slideIndex.start == 1) {
    for (let i = 0; i < emptyblocks; i++) a.push("");
  }

  for (let i = slideIndex.start; i <= slideIndex.end; i++) {
    if (i <= numberOfDays) a.push(i);
  }

  useEffect(() => {
    console.log("Use Effect hook is called");
    // for (let i = slideIndex.start; i <= slideIndex.end; i++) {
    //   a.push(i);
    // }
    emptyblocks = new Date(year, month, 1).getDay();
    setSlideIndex({
      start: 1,
      end: 7 - emptyblocks,
    });
  }, [month]);

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    if (e.currentTarget.name == "show-prev") {
      //if it is at the start only then move to last months day
      if (slideIndex.start <= 1) {
      } else {
        if (slideIndex.start < 8) {
          let a = {
            start: 1,
            end: slideIndex.start - 1,
          };
          setSlideIndex(a);
        } else {
          let a = {
            start: slideIndex.start - 7,
            end: slideIndex.end - 7,
          };
          setSlideIndex(a);
        }
      }
      console.log("Value after click on next button " + slideIndex);
      console.log(slideIndex);
    }

    if (e.currentTarget.name == "show-next") {
      if (slideIndex.start < numberOfDays && slideIndex.end > numberOfDays) {
      } else {
        if (
          !(slideIndex.start <= numberOfDays && slideIndex.end >= numberOfDays)
        ) {
          let a = {
            start: slideIndex.end + 1,
            end: slideIndex.end + 7,
          };
          setSlideIndex(a);
        }
      }
      console.log("Value after click on next button " + slideIndex);
      console.log(slideIndex);
    }
    e.stopPropagation();
  };
  return (
    <div className="App">
      <div className="header">
        <Month month={month} />
        <MonthDropDown month={month} setMonth={setMonth} />
      </div>

      <Weekdays />

      <div className="container" onClickCapture={(e)=>{console.log("Event capturing is set")}}>
        <button
          className="show-prev-item"
          name="show-prev"
          onClickCapture={handleClick}
        >
          <span>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
        </button>

        <div className="item-container">
          {a.map((item, index) => (
            <DateComponent item={item} index={index} dates={dates} />
          ))}
        </div>
        {/* {handleClick} */}
        <button
          className="show-next-item"
          name="show-next"
          onClickCapture={handleClick}
        >
        <span onClickCapture={()=>console.log("Child span tag is called")}
        class="fa fa-chevron-right" aria-hidden="true"/>
        </button>
      </div>
      <div className="event-container">
        <TodoItems month={month} slideIndex={slideIndex} />
        <AddEvent />
      </div>
    </div>
  );
}

export default App;
