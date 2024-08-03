import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { createContext, useContext, useState } from "react";
import Toast from "react-native-toast-message";

type AuthProps = {
  user: FirebaseAuthTypes.User | null;
  onSignin: (email: string, password: string) => void;
  onCreateUser: (name: string, email: string, password: string) => void;
};
const AuthContext = createContext<AuthProps | null>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthProps;

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const handleError = (code: string) => {
    let message;
    if (code === "auth/email-already-in-use") {
      message = "That email address is already in use!";
    }

    if (code === "auth/invalid-email") {
      message = "That email address is invalid!";
    }
    if (code === "auth/invalid-credential") {
      message = "Invalid Credentail";
    }
    Toast.show({
      type: "error",
      text1: message,
      position: "bottom",
    });
  };

  const onSignin = async (email: string, password: string) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      setUser(response.user);
      Toast.show({
        type: "success",
        text1: "Login successfully",
      });
    } catch (error) {
      const firebaseError = error as { code: string };
      handleError(firebaseError.code);
    }
  };

  const onCreateUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      response.user.updateProfile({ displayName: name });
      setUser(response.user);
      Toast.show({
        type: "success",
        text1: "User Account created",
      });
    } catch (error) {
      const firebaseError = error as { code: string };
      handleError(firebaseError.code);
    }
  };

  return (
    <AuthContext.Provider value={{ user, onSignin, onCreateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
