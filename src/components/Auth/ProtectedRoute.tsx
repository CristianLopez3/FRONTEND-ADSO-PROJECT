import React, { useEffect } from "react";
import {  TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";
import { getCookies } from "@/utils/cookies";
import { useNavigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = getCookies(TOKEN_COOKIE);
  //const token = null
  const user = getCookies(USER_COOKIE);
  useEffect(() => {
    if (!token || !user) {
      navigate("/login?error=There was an error, try sign in again!.");
    }
  }, [token, user, navigate]);
  console.log(token);
  console.log(user);

  return <>{children}</>;
};

export default ProtectedRoute;
