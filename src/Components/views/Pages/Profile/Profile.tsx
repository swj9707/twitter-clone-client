import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../../../../Service/Auth/AuthService";
import { RootStore } from "../../../../Store/Data/Store";
import { logout } from "../../../../Store/Slices/AuthReducer";
import { LogoutResponse } from "../../../../Store/Type/Auth/AuthRes";

const Profile = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = () => {
    requestLogout().then((res: LogoutResponse) => {
      alert("로그아웃 되었습니다.");
      dispatch(logout());
      navigate("/");
    });
  };
  return (
    <div className="container">
      <form className="profileForm">
        <input
          type="text"
          placeholder="Email"
          value={user.user?.email}
          readOnly={true}
          className="formInput"
        />
        <input
          type="text"
          placeholder="username"
          value={user.user?.userName}
          readOnly={true}
          className="formInput"
        />
      </form>

      <div
        style={{
          marginTop: 30,
        }}
      >
        <div>
          <Link to="/editPassword">
            <span className="formBtn confirmBtn ">비밀번호 변경</span>
          </Link>
          <Link to="/editProfile">
            <span className="formBtn confirmBtn">프로필 변경</span>
          </Link>
        </div>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <span className="formBtn cancelBtn logOut" onClick={onClickLogout}>
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
