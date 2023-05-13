import { useState } from "react";
//components
import FormInput from "../../utilities/FormInput";
import Button from "../../utilities/Button";
import ErrorPage from "../../utilities/ErrorPage";
//utilities
import { projectAuth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await projectAuth.sendPasswordResetEmail(email);
      toast.success("Reset email sent. Check your inbox!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setEmail("");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <ToastContainer />
      <form
        className="bg-white w-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-[#eff1fd]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-xl mb-6">Forgot Password</h2>
        <div className="mb-4">
          <FormInput
            label="Email:"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <Link to="/login" className=" relative group">
            Back to login
            <div className="absolute w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button text="Send reset email" disabled={loading} />
        </div>

        {error && <ErrorPage message={error} />}
      </form>
    </div>
  );
};

export default ForgotPassword;
