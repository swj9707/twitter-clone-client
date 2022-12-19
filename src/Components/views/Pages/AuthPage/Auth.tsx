import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../../../Service/Auth/AuthService";
import {
  login_success,
  login_fail,
} from "../../../../Store/Slices/AuthReducer";
import { LoginResponse } from "../../../../Store/Type/Auth/AuthRes";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    requestLogin({
      userEmail: email,
      password: password,
    }).then((res: LoginResponse) => {
      if (res.status === "OK") {
        dispatch(login_success(res));
        alert("로그인 되었습니다.");
        window.location.href = "/";
      } else {
        alert("로그인 에러!");
        dispatch(login_fail());
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
          onChange={onChangeInput}
          value={email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onChangeInput}
          value={password}
        />
        <div>
          <input type="submit" value="Sign In" />
        </div>
      </form>
      <div>
        <button name="google">Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
