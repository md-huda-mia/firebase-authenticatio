import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AuthHook = () => {
  const all = useContext(AuthContext);
  return all;
};

export default AuthHook;
