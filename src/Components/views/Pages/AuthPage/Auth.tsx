import React, { useState } from "react";
import {
  requestLogin,
  RequestLogout,
} from "../../../../Service/Auth/AuthService";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    requestLogin({
      userEmail: email,
      password: password,
    });
  };

  const onClickLogout = () => {
    RequestLogout();
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
        <button name="logout" onClick={onClickLogout}>
          Test Logout Button
        </button>
      </div>
      <div>
        <button name="google">Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
