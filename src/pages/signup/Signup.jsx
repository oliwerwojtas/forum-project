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
    <div className="flex max-h-[45rem] w-auto justify-center items-center mt-4">
      <form className="flex-col w-96 bg-amber-300 p-6 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center ">Sing up</h2>
        <FormInput
          label="email:"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <FormInput
          label="password:"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <FormInput
          label="name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
        <FormInput label="image:" type="file" onChange={handleFileChange} required />
        {imageError && <div>{imageError}</div>}
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
