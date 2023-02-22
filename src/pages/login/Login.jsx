import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <div className="flex max-h-[45rem] w-auto justify-center items-center mt-4">
      <div></div>
      <form className="flex-col w-96 bg-amber-300 p-6 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center ">Log in</h2>
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
            className="w-full py-3 px-2 text-base mb-6"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
