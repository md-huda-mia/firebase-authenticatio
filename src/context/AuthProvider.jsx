import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../Firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

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

  // ===== user Profile Update ======
  const profileUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
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
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
