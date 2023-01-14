import {
  AuthForm,
  BtnBlue,
  FormInput,
  FormInputButton,
  Logo,
  Title,
  Wrapper,
} from "./styles";

const AuthPage: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <Title>Twitter Clone Project</Title>
      <AuthForm>
        <FormInput type="text" placeholder="Email"></FormInput>
        <FormInput type="password" placeholder="Password"></FormInput>

        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
          }}
        >
          <FormInputButton type="button" value="login" />
          <BtnBlue>Sign up</BtnBlue>
        </div>
        <BtnBlue>Google Login</BtnBlue>
      </AuthForm>
    </Wrapper>
  );
};

export default AuthPage;
