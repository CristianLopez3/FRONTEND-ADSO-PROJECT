// import ProfileInfo from "../user/ProfileInfo";
import BaseIcon from "@/assets/icon.jpeg";
import styles from "./styles.module.css";
import { getCookies } from "@/utils/cookies";
import { TOKEN_COOKIE, USER_COOKIE } from "@/store/auth";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "@/components/Auth/ProtectedRoute";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useContext(UserContext);
  const auth = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookies(TOKEN_COOKIE);
    const userCookie = getCookies(USER_COOKIE);

    if ((!token && !userCookie) || user === null) {
      navigate("/login?error=There was an error, try sign in again!.");
    }
  }, [auth, navigate]);

  const {name, email, lastName} = user;

  return (

            <div className={styles.container_profile}>
                <div className={styles.header} >
                    <p className={styles.header_back} /> 
                    <div className={styles.icon_container}>
                        <img className="h-full w-full rounded-full" src={BaseIcon} alt="Profile icon" />
                    </div>
                </div> 
                <div className={styles.name_container}>
                    <h4 className={styles.name}>
                    {`${name} ${lastName} `}
                    </h4>
                    <p className={styles.role}>
                      {email}
                    </p>
                </div> 
                {
                  /**
                  <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-zinc-700 dark:text-white">17</p>
                    <p className="text-sm font-normal text-gray-600">Posts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-zinc-700 dark:text-white">
                        9.7K
                    </p>
                    <p className="text-sm font-normal text-gray-600">Followers</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold text-zinc-700 dark:text-white">
                        434
                    </p>
                    <p className="text-sm font-normal text-gray-600">Following</p>
                    </div>
                </div>
                */}
 
        </div>

  );
};

export default Profile;

