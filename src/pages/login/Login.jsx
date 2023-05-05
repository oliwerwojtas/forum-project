import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import FormInput from "../../utilities/FormInput";
import Button from "../../utilities/Button";
import { projectAuth, projectFirestore } from "../../firebase/config";
import ErrorPage from "../../utilities/ErrorPage";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const { user } = await projectAuth.signInWithEmailAndPassword(email, password);

      const userRef = projectFirestore.collection("users").doc(user.uid);
      const doc = await userRef.get();

      if (doc.exists) {
        login(email, password);

        navigate("/");
      } else {
        setError("User not found.");
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <form className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold text-xl mb-6">Login</h2>
        <div className="mb-4">
          <FormInput
            label="Email:"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-6">
          <FormInput
            label="Password:"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="flex justify-between">
          <Link to="/signup" className=" relative group">
            Create an account
            <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </Link>
          <Link to="/forgotPassword" className=" relative group">
            Reset
            <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </Link>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button text="Login" disabled={loading} />
        </div>

        {error && <ErrorPage message={error} />}
      </form>
    </div>
  );
};

export default Login;
