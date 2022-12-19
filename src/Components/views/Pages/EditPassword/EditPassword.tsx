import React, { useState } from "react";
import { editUserPassword } from "../../../../Service/User/UserService";
import { RootStore } from "../../../../Store/Data/Store";
import { useSelector } from "react-redux";
import { EditUserPassword } from "../../../../Store/Type/User/User";

const EditPassword = () => {
  const user = useSelector((state: RootStore) => state.AuthReducer);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "password") {
      setPassword(target.value);
    } else if (target.name === "newPassword") {
      setNewPassword(target.value);
    }
  };

  const onSubmitChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    editUserPassword({
      userId: user.user?.userId,
      currentPassword: password,
      newPassword: newPassword,
    }).then((res: EditUserPassword | any) => {
      if (res.status === "OK") {
        alert("비밀번호를 변경하였습니다.");
        window.location.replace("/");
      } else {
        alert("비밀번호 변경에 실패하였습니다.");
      }
    });
  };

  return (
    <form>
      <div>
        <input
          name="password"
          type="password"
          onChange={onChangeInput}
          placeholder="현재 비밀번호"
        />
      </div>
      <div>
        <input
          name="newPassword"
          type="password"
          onChange={onChangeInput}
          placeholder="변경 할 비밀번호"
        />
      </div>
      <div>
        <input type="submit" value="변경" />
      </div>
    </form>
  );
};

export default EditPassword;
