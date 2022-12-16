import { useDispatch, useSelector } from "react-redux";
import { requestLogout } from "../../../../Service/Auth/AuthService";
import { RootStore } from "../../../../Store/Data/Store";
import { logout } from "../../../../Store/Slices/AuthReducer";

const Profile = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    requestLogout().then(() => {
      alert("로그아웃 되었습니다.");
      dispatch(logout);
    });
  };
  return (
    <>
      <div>
        <input type="text" placeholder="Profile Image" readOnly={true} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={user.user?.email}
          readOnly={true}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          value={user.user?.userName}
          readOnly={true}
        />
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
