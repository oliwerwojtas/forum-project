import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const { user } = await projectAuth.signInWithEmailAndPassword(email, password);

      await projectFirestore.collection("users").doc(user.uid).update({
        online: true,
      });

      dispatch({ type: "LOGIN", payload: user });

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
