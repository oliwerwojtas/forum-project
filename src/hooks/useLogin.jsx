import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      await projectAuth.signInWithEmailAndPassword(email, password);

      await projectFirestore.collection("users").doc(user.uid).update({
        online: true,
      });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
