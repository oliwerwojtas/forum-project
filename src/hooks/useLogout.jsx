import { useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      await projectFirestore.collection("users").doc(user.uid).update({
        online: false,
      });
      await projectAuth.signOut();

      dispatch(authActions.logout());

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