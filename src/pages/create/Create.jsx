import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";

export const categories = [
  { value: "hobby", label: "Hobby" },
  { value: "fashion", label: "Fashion" },
  { value: "traveling", label: "Traveling" },
  { value: "work", label: "Work" },
];
const Create = () => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("projects");
  const { documents } = useCollection("users");
  console.log(documents);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [checkError, setCheckError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
      console.log(documents);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckError(null);
    console.log(name, details, date, category.value, assignedUsers);

    if (!category || assignedUsers.length < 1) {
      setCheckError("Please correct inputs");
      return;
    }

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const project = {
      name,
      details,
      category: category.value,
      date: timestamp.fromDate(new Date(date)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="title text-center font-bold text-xl mb-6">Create a new subject</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Subject name:"
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-4">
            <FormInput
              label="Details:"
              required
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            />
          </div>
          <div className="mb-4">
            <FormInput
              label="Date:"
              required
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="mb-4">
            <Select onChange={(option) => setCategory(option)} options={categories} required />
          </div>
          <div className="mb-4">
            <Select
              onChange={(option) => setAssignedUsers(option)}
              options={users}
              isMulti
              required
            />
          </div>
          <div className="flex items-center justify-between"></div>
          {checkError && <p className="error">{checkError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Create;
