import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      const { uid } = projectAuth.currentUser;
      await projectFirestore.collection("users").doc(uid).update({ online: false });

      await projectAuth.signOut();

      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
