import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //===== create user email and password ========
  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ======= login ========
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ===== user Profile Update ======
  const profileUpdate = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // =========  Email Verify
  const emailVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  // ===== Forget Password =====
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  //======= logout ======
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // ===== user state =====
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        setUser(user);
        setLoading(false);
      } catch (error) {
        console.error("Error setting user:", error);
      }
    });

    console.log(user);
    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [user]);
  // ===========
  const authentication = {
    createuser,
    loginUser,
    user,
    logOut,
    profileUpdate,
    resetPassword,
    emailVerify,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
