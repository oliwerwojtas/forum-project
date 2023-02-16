import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectFirestore.collection("users").doc(user.uid).update({
        online: false,
      });
      await projectAuth.signOut();

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
