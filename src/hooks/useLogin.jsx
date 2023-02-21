import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { authActions } from "../store";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await projectAuth.signInWithEmailAndPassword(email, password);

      await projectFirestore.collection("users").doc(response.user.uid).update({
        online: true,
      });

      dispatch(authActions.login());

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
