import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token: string = localStorage.getItem("token")!;
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);

  useEffect(() => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      console.log(currentTime);
      console.info("diff");
      console.log(decodedToken.exp!);
      console.info(decodedToken.exp! > currentTime);
      if (decodedToken.exp! > currentTime) {
        console.log("token is valid");
        setIsTokenValid(true);
      } else {
        console.log("token is invaliddddddd");
        setIsTokenValid(false);
      }
    } catch (err) {
      console.warn("Catch an exception");
      setIsTokenValid(false);
    }
    console.warn(isTokenValid + " finalize useEffect")
  }, [token]);

  if (!isTokenValid) {
    console.log("35: " +token);
    console.log("36: " +isTokenValid);
    alert("Enter the application");
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
