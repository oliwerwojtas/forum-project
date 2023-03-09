import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import FormInput from "../../components/FormInput";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, image);
  };

  const handleFileChange = (e) => {
    setImage(null);

    let selected = e.target.files[0];
    console.log(selected);

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
    console.log("updated");
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
          label="Name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
        <FormInput label="Image:" type="file" onChange={handleFileChange} required />
        {imageError && <div>{imageError}</div>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
