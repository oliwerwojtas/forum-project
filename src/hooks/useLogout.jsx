import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
    setError(null);
    setIsPending(true);

    try {
      const { uid } = projectAuth.currentUser;
      await projectFirestore.collection("users").doc(uid).update({ online: false });

      await projectAuth.signOut();

      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
      localStorage.removeItem("theme");
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
