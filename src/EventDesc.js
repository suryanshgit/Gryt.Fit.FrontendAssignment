import React, { useState } from "react";
import "./scss/EventDesc.css";
import { useSelector, useDispatch } from "react-redux";
import EditEvent from "./EditEvent";

function EventDesc({ setFlag, item }) {
  const mystate = useSelector((state) => state);
  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [newContent, setNewContent] = useState();

  const handleDelete = () => {
    setEditFlag(!editFlag);
    let index = -1;
    mystate.map((val, ind) => {
      if (val.Note == item.Note && val.Month == item.Month) {
        console.log(ind, val);
        index = ind;
      }
    });
    let a = JSON.parse(JSON.stringify(mystate));
    a.splice(index, 1);
    console.log("changed state");
    console.log(a);

    dispatch({ type: "DELETE_ITEM", payload: index });
  };

  const handleEdit = () => {
    setFlag(false);
    setEditFlag(!editFlag);

    let index = -1;
    mystate.map((val, ind) => {
      if (val.Note == item.Note && val.Month == item.Month) {
        console.log(ind, val);
        index = ind;
      }
    });
    let obj = {
      index: index,
      newEvent: newContent,
    };
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        index: index,
        newEvent: newContent,
      },
    });
  };

  return (
    <div className="eventDesc-container">
      <button className="close" onClick={() => setFlag(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <div className="eventDesc-content">
        <div>{item.Note}</div>
        <div>{item.EventDate}</div>
        <div>{item.Month}</div>
      </div>

      <div className="eventDesc-buttons">
        <button onClick={handleDelete}>Delete Event</button>
        <button onClick={() => setEditFlag(!editFlag)}>Edit Event</button>
      </div>
      <div>
        {editFlag && (
          <EditEvent
            setEditFlag={setEditFlag}
            setNewContent={setNewContent}
            newContent={newContent}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </div>
  );
}

export default EventDesc;
