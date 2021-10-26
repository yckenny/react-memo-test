import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div className="edit-container">
      <h1>Memo</h1>
      <p>To record somethings</p>
      <div className="form">
        <p>Content:</p>
        <input type="text" value={note} onChange={noteChange}></input>
        <p>Date:</p>
        <input type="date" value={date} onChange={dateChange}></input>
        <p>Time:</p>
        <input type="time" value={time} onChange={timeChange}></input>
        <button className="add" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Edit;
