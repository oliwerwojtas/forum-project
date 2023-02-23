import { useState } from "react";
import "./Create.css";
const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, date);
  };
  return (
    <div className="form">
      <h2 className="title">Create a new subject</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Subject name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>
        <label>
          <span>Details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
        </label>
        <label>
          <span>Category:</span>
          <span>Assigned to:</span>
        </label>
        <button className="btn">Add Subject</button>
      </form>
    </div>
  );
};

export default Create;
