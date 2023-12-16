import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //===== create user email and password ========
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ======= login ========
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //======= logout ======
  const logOut = () => {
    return signOut(auth);
  };
  // ===== user state =====
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    console.log(user);
  }, [user]);

  // ===========
  const authentication = {
    createuser,
    loginUser,
    user,
    logOut,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
