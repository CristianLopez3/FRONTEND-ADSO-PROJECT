import React, { createContext, useEffect, useState } from "react";
import { TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";
import { getCookies } from "@/utils/cookies";
import { useNavigate } from "react-router";
import { UserAuthResponse } from "@/types/User";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

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
  const [user, setUser] = useState<UserAuthResponse | null>(null);

  useEffect(() => {
    if (!token && !userCookie) {
      setUser(null);
      navigate("/login?error=There was an error, try sign in again!.");
    }
    setUser(auth!.user)
  }, [token, user, userCookie, auth, navigate]);

  return (
    <UserContext.Provider value={user ? user : userCookie}>
      {children}
    </UserContext.Provider>
  );
};

export default ProtectedRoute;