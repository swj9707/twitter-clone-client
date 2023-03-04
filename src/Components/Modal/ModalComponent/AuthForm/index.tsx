import React, { useState } from "react";
import { login_success, login_fail } from "@/Data/Ducks/Auth/AuthReducer";
import { LoginResponse } from "@/Data/Type/Auth/AuthRes";
import { useDispatch } from "react-redux";
import { requestLogin } from "@/Service/Auth/AuthService";
import {
  Form,
  FormDiv,
  FormInput,
  FormInputButton,
} from "@/Styles/components/Modals/style";

const AuthForm = () => {
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
    requestLogin({
      userEmail: email,
      password: password,
    })
      .then((res: LoginResponse) => {
        if (res.status === "OK") {
          dispatch(login_success(res));
          alert("로그인 되었습니다.");
          window.location.reload();
        } else {
          alert(res);
          dispatch(login_fail());
        }
      })
      .catch(() => {
        dispatch(login_fail());
        alert("로그인 과정에 문제가 생겼습니다.");
      });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormDiv>
          <FormInput
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
            onChange={onChangeInput}
            required
          />
        </FormDiv>
        <FormDiv>
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,24}$"
            value={password}
            onChange={onChangeInput}
            required
          />
        </FormDiv>
        <FormInputButton type="submit" value="login" />
      </Form>
    </>
  );
};

export default AuthForm;
