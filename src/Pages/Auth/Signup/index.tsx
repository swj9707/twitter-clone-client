import {
  AuthForm,
  BtnBlue,
  FormInput,
  FormInputButton,
  Logo,
  Title,
  Wrapper,
} from "./styles";
import { requestSignup } from "@/Service/Auth/AuthService";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "email") {
      setEmail(target.value);
    } else if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignup({
      userEmail: email,
      userName: username,
      password: password,
    })
      .then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((ex) => {
        alert("회원 가입에 실패하였습니다.");
        console.log(ex);
      });
  };

  return (
    <Wrapper>
      <Logo />
      <Title>Twitter Clone Project</Title>
      <h2>Sign Up</h2>
      <AuthForm onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={onChangeInput}
          pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
        ></FormInput>
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          onChange={onChangeInput}
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={onChangeInput}
        ></FormInput>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
          }}
        >
          <FormInputButton
            style={{
              width: "40%",
              marginRight: "10px",
            }}
            type="submit"
            value="Sign up"
          />
          <BtnBlue
            style={{
              width: "40%",
              marginLeft: "10px",
            }}
            onClick={() => navigate("/")}
          >
            Cancel
          </BtnBlue>
        </div>
      </AuthForm>
    </Wrapper>
  );
};

export default SignUpPage;
