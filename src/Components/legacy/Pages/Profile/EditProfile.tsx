import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUserProfile } from "../../../../Service/User/UserService";
import { RootStore } from "../../../../Store/Data/Store";
import { change_username } from "../../../../Store/Slices/AuthReducer";
import { EditProfileRes } from "../../../../Store/Type/User/UserRes";

const EditProfile = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  const navigate = useNavigate();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    setNewUserName(target.value);
  };

  const onSubmitChangeUsername = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editUserProfile({
      userId: user.user?.userId,
      newUserName: newUserName,
    }).then((res: EditProfileRes | any) => {
      if (res.status === "OK") {
        dispatch(change_username(res));
        alert("닉네임을 변경하였습니다.");
        navigate("/");
      } else {
        alert("회원 정보를 변경하는 데 문제가 생겼습니다.");
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitChangeUsername} className="profileForm">
        <input
          type="text"
          defaultValue={user.user?.userName}
          placeholder="Display name"
          onChange={onChangeInput}
          className="formInput"
        />
        <input
          type="submit"
          value="프로필 변경"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
    </div>
  );
};

export default EditProfile;
