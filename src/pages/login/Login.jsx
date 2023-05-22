import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
//components
import FormInput from "../../components/reusable/FormInput";
import Button from "../../components/reusable/Button";
import ErrorPage from "../../components/reusable/ErrorPage";
//utilities
import { projectAuth, projectFirestore } from "../../firebase/config";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

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
      <form
        className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#eff1fd]"
        onSubmit={handleSubmit}
      >
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
          <Link to="/forgotPassword" className="relative group text-sm flex items-end">
            Forgot Password?
            <RiLockPasswordFill size={20} className="ml-2 mb-0.5" />
            <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </Link>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button text="Login" disabled={loading} />
          <Link to="/signup" className=" relative group text-sm flex items-end">
            Create an account
            <FiPlusCircle size={20} className="ml-1 mb-0.5" />
            <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </Link>
        </div>

        {error && <ErrorPage message={error} />}
      </form>
    </div>
  );
};

export default Login;
