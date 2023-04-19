import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import FormInput from "../../utilities/FormInput";
import Button from "../../utilities/Button";
import ErrorPage from "../../utilities/ErrorPage";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [error, setError] = useState(null);
  const { signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);
    try {
      signup(email, password, displayName, image);
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

  return (
    <div className="flex justify-center items-center mt-14">
      <form className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold text-xl mb-6 ">Sing up</h2>
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
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
        <FormInput label="Image:" type="file" onChange={handleFileChange} required />
        {imageError && <div>{imageError}</div>}
        {error && <ErrorPage message={error} />}
        <Button text="Sign up" className="mt-4" />
      </form>
    </div>
  );
};

export default Signup;
