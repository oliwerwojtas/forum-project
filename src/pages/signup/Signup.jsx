import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form className="flex-col w-90 bg-amber-300 p-6 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center ">Sing up</h2>
        <label className="block my-6 mx-auto">
          <span className="block mb-6">email:</span>
          <input
            className="w-full py-3 px-2 text-base"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="bg-emerald-100 block my-6 mx-auto">
          <span className="block mb-6">password</span>
          <input
            className="w-full py-3 px-2 text-base"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label className="bg-emerald-700 block my-6 mx-auto">
          <span className="block mb-6">name</span>
          <input
            className="w-full py-3 px-2 text-base"
            required
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label className="bg-emerald-400 block my-6 mx-auto">
          <span className="block mb-6">image: </span>
          <input
            className="w-full py-3 px-2 text-base"
            required
            type="file"
            onChange={handleFileChange}
          />
          {imageError && <div>{imageError}</div>}
        </label>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
