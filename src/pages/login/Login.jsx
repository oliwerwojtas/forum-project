import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
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
      <form className="flex-col w-96 bg-amber-300 p-6 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center ">Log in</h2>
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

        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
