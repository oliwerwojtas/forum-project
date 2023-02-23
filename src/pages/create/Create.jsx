import { useEffect, useState } from "react";
import Select from "react-select";
import "./Create.css";
import { useCollection } from "../../hooks/useCollection";

const categories = [
  { value: "hobby", label: "Hobby" },
  { value: "fashion", label: "Fashion" },
  { value: "traveling", label: "Traveling" },
  { value: "work", label: "Work" },
];
const Create = () => {
  const { documents } = useCollection("users");
  console.log(documents);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [checkError, setCheckError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckError(null);
    console.log(name, details, date, category.value, assignedUsers);
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
          <Select onChange={(option) => setCategory(option)} options={categories} />
        </label>
        <label>
          <span>Assign to:</span>
          <Select onChange={(option) => setAssignedUsers(option)} options={users} isMulti />
        </label>
        <button className="btn">Add Subject</button>

        {checkError && <p className="error">{checkError}</p>}
      </form>
    </div>
  );
};

export default Create;
