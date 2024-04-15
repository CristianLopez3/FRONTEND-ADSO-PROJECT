import ProfileInfo from "./components/user/ProfileInfo";

const Profile = () => {
  return (
    <div className="grid grid-cols-1">
      <ProfileInfo
        cellphone="313 37423 23"
        email="cristian@gmail.com"
        name="Cristian"
        role="ADMIN"
        id={2}
      />
    </div>
  );
};

export default Profile;

