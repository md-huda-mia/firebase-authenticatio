import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // ======= Google log in ==========
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ======= Google log in ==========
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

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
    githubLogin,
    googleUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
