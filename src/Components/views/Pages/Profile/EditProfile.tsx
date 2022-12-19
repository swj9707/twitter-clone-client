import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../../../../Service/User/UserService";
import { RootStore } from "../../../../Store/Data/Store";
import { change_username } from "../../../../Store/Slices/AuthReducer";
import { EditProfileRes } from "../../../../Store/Type/User/UserRes";

const EditProfile = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    setNewUserName(target.value);
    console.log(newUserName);
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
        window.location.replace("/");
      } else {
        alert("회원 정보를 변경하는 데 문제가 생겼습니다.");
      }
    });
  };

  return (
    <form onSubmit={onSubmitChangeUsername}>
      <input
        type="text"
        defaultValue={user.user?.userName}
        placeholder="Display name"
        onChange={onChangeInput}
      />
      <input type="submit" value="프로필 변경" />
    </form>
  );
};

export default EditProfile;
