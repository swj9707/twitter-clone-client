import { requestSignup } from "@/Service/Auth/AuthService";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "userNickname") {
      setUserNickname(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignup({
      userEmail: email,
      userName: username,
      userNickname: userNickname,
      password: password,
    })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((ex) => {
        alert("회원 가입에 실패하였습니다.");
      });
  };

  return (
    <>
      <form className="w-full flex flex-col py-3" onSubmit={onSubmit}>
        <div className="w-full mb-4">
          <input
            name="email"
            type="text"
            placeholder="Email"
            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
            required
            value={email}
            onChange={onChangeInput}
            className="w-full rounded-lg border border-gray-300 outline-none px-4 py-3 text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$"
            value={username}
            onChange={onChangeInput}
            className="w-full rounded-lg border border-gray-300 outline-none px-4 py-3 text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <input
            name="userNickname"
            type="text"
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$"
            placeholder="User Nickname"
            required
            value={userNickname}
            onChange={onChangeInput}
            className="w-full rounded-lg border border-gray-300 outline-none px-4 py-3 text-lg"
          />
        </div>
        <div className="w-full mb-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,24}$"
            required
            value={password}
            onChange={onChangeInput}
            className="w-full rounded-lg border border-gray-300 outline-none px-4 py-3 text-lg"
          />
        </div>
        <input
          className="cursor-pointer w-full rounded-xl bg-sky-500 text-white py-2 font-bold"
          type="submit"
          value="Create Account"
        />
      </form>
    </>
  );
};

export default RegisterForm;
