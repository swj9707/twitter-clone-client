import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "@/Service/Auth/AuthService";
import { login_success, login_fail } from "@/Data/Slices/AuthReducer";
import {
  AuthForm,
  BtnBlue,
  FormInput,
  FormInputButton,
  Logo,
  Title,
  Wrapper,
} from "./styles";
import { BaseResponse } from "@/Data/Type/BaseResponse";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
    requestLogin({
      userEmail: email,
      password: password,
    }).then((res: BaseResponse) => {
      if (res.status === "OK") {
        dispatch(login_success(res));
        alert("로그인 되었습니다.");
        navigate("/");
      } else {
        alert(res);
        dispatch(login_fail());
      }
    });
  };

  return (
    <Wrapper>
      <Logo />
      <Title>Twitter Clone Project</Title>
      <AuthForm onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          required
          pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
          onChange={onChangeInput}
          className="authInput"
          value={email}
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onChangeInput}
          className="authInput"
          value={password}
        ></FormInput>

        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
          }}
        >
          <FormInputButton
            type="submit"
            className="formBtn confirmBtn"
            value="Sign In"
          />
          <BtnBlue onClick={() => navigate("/signup")}>Sign up</BtnBlue>
        </div>
        {/* <BtnBlue>Google Login</BtnBlue> */}
      </AuthForm>
    </Wrapper>
  );
};

export default AuthPage;
