import { RequestLogout } from "../../../../Service/Auth/AuthService";

const Profile = () => {
  const onClickLogout = () => {
    RequestLogout();
  };
  return (
    <>
      <div>
        <input type="text" placeholder="Profile Image" readOnly={true} />
      </div>
      <div>
        <input type="text" placeholder="Email" readOnly={true} />
      </div>
      <div>
        <input type="text" placeholder="username" readOnly={true} />
      </div>
      <button onClick={onClickLogout}>Log out</button>
      <div>
        <button>Follower</button>
        <button>Following</button>
      </div>
    </>
  );
};
export default Profile;
