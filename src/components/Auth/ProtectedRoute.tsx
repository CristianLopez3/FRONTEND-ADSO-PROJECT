import React, { createContext, useEffect } from "react";
import { getCookies } from "@/utils/cookies";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

// Create a UserContext
export const UserContext = createContext(null);

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const token = getCookies(TOKEN_COOKIE);
  const userCookie = getCookies(USER_COOKIE);

  useEffect(() => {
    if (!token && !userCookie) {
      navigate("/login?error=There was an error, try sign in again!.");
    }
  }, [token, userCookie, auth, navigate]);

  // setUser(userCookie);

  return (
    <UserContext.Provider value={userCookie}>
      {children}
    </UserContext.Provider>
  );
};

export default ProtectedRoute;