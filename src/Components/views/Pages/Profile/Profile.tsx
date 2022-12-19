import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestLogout } from "../../../../Service/Auth/AuthService";
import { RootStore } from "../../../../Store/Data/Store";
import { logout } from "../../../../Store/Slices/AuthReducer";
import { LogoutResponse } from "../../../../Store/Type/Auth/AuthRes";

const Profile = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    requestLogout().then((res: LogoutResponse) => {
      alert("로그아웃 되었습니다.");
      dispatch(logout());
      window.location.href = "/";
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
      <div>
        <Link to="/editPassword">
          <button>비밀번호 변경</button>
        </Link>
        <Link to="/editProfile">
          <button>프로필 변경</button>
        </Link>
      </div>
      <div>
        <button onClick={onClickLogout}>Log out</button>
      </div>
    </>
  );
};
export default Profile;
