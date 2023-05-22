import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
//components
import FormInput from "../../components/reusable/FormInput";
import Button from "../../components/reusable/Button";
import ErrorPage from "../../components/reusable/ErrorPage";
//utilities
import { projectFirestore } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [error, setError] = useState(null);
  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    try {
      const displayNameRef = projectFirestore
        .collection("users")
        .where("displayName", "==", displayName);
      const snapshot = await displayNameRef.get();
      if (!snapshot.empty) {
        setNameError("This username is already taken");
        return;
      }
      signup(email, password, displayName, image);
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (e) => {
    setImage(null);

    let selected = e.target.files[0];

    if (!selected) {
      setImageError("Select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setImageError("Selected file must be an image");
      return;
    }

    if (selected.size > 100000) {
      setImageError("Image size must be less than 100000b");
      return;
    }

    setImageError(null);
    setImage(selected);
  };
  const handleNameChange = (e) => {
    const name = e.target.value;
    if (name.length > 10) {
      setNameError("Name must be 10 characters or less");
    } else {
      setNameError(null);
      setDisplayName(name);
    }
  };
  return (
    <div className="flex justify-center items-center mt-14">
      <ToastContainer />
      <form
        className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#eff1fd]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-xl mb-6 ">Sign up</h2>
        <FormInput
          label="Email:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <FormInput
          label="Password:"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <FormInput
          label="Name:"
          type="text"
          onChange={handleNameChange}
          value={displayName}
          required
        />
        {nameError && <ErrorPage message={nameError} />}
        <FormInput label="Image:" type="file" onChange={handleFileChange} required />
        {imageError && <ErrorPage message={imageError} />}
        {error && <ErrorPage message={error} />}
        <Button text="Sign up" className="mt-4" />
      </form>
    </div>
  );
};

export default Signup;
