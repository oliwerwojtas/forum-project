import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
//components
import FormInput from "../../components/reusable/FormInput";
import Button from "../../components/reusable/Button";
import ErrorPage from "../../components/reusable/ErrorPage";
//utilites
import Select from "react-select";
import { timestamp } from "../../firebase/config";

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
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [error, setError] = useState(null);
  const [resetKey, setResetKey] = useState(0);
  const { user } = useAuthContext();

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!category || assignedUsers.length < 1 || assignedUsers.length > 2) {
      setError("Please correct inputs");
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
    setName("");
    setDate("");
    setResetKey(resetKey + 1);
    setDetails("");
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#777a92]">
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
          <div className=" flex flex-col mb-4">
            <div>
              Details: <span className="text-sm">(max 150letters)</span>
            </div>
            <textarea
              className="border-2 mt-4"
              required
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              maxlength="150"
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
            <p className="mb-2">Select category: </p>
            <Select
              key={resetKey}
              onChange={(option) => setCategory(option)}
              options={categories}
              required
            />
          </div>
          <div className="mb-4">
            <p className="mb-2">Select users:</p>

            <Select
              key={resetKey}
              onChange={(option) => setAssignedUsers(option)}
              options={users}
              isMulti
              required
              maxValue={2}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button text="Add subject" />
          </div>
          {error && <ErrorPage message={error} />}
        </form>
      </div>
    </div>
  );
};

export default Create;
