import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { projectAuth, projectStorage, projectFirestore } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password, displayName, image) => {
    setError(null);
    setIsPending(true);

    try {
      const createUser = await projectAuth.createUserWithEmailAndPassword(email, password);

      if (!createUser) {
        throw new Error("Could not complete signup");
      }

      const path = `images/${createUser.user.uid}/${image.name}`;
      const img = await projectStorage.ref(path).put(image);
      const imgUrl = await img.ref.getDownloadURL();
      await createUser.user.updateProfile({ displayName, photoURL: imgUrl });

      await projectFirestore.collection("users").doc(createUser.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl,
      });

      dispatch({ type: "LOGIN", payload: createUser.user });

      navigate("/");
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
