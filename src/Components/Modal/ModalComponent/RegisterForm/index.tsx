import { requestSignup } from "@/Service/Auth/AuthService";
import {
  Form,
  FormDiv,
  FormInput,
  FormInputButton,
} from "@/Styles/components/Modals/style";

import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [password, setPassword] = useState("");

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
        window.location.reload();
      })
      .catch((ex) => {
        alert("회원 가입에 실패하였습니다.");
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
            pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
            required
            value={email}
            onChange={onChangeInput}
          />
        </FormDiv>
        <FormDiv>
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$"
            value={username}
            onChange={onChangeInput}
          />
        </FormDiv>
        <FormDiv>
          <FormInput
            name="userNickname"
            type="text"
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,20}$"
            placeholder="User Nickname"
            required
            value={userNickname}
            onChange={onChangeInput}
          />
        </FormDiv>
        <FormDiv>
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            pattern="^[a-zA-Z\\d`~!@#$%^&*()-_=+]{4,24}$"
            required
            value={password}
            onChange={onChangeInput}
          />
        </FormDiv>
        <FormInputButton type="submit" value="Create Account" />
      </Form>
    </>
  );
};

export default RegisterForm;
