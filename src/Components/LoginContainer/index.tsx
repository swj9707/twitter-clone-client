import EmailButton from "../Buttons/EmailButton";
import { Header, ToggleButton } from "./style";

interface LoginContainerProps {
  toggleLogin: () => void;
  handleOpen: () => void;
}

const LoginContainer = (props: LoginContainerProps) => {
  return (
    <>
      <Header>Login</Header>
      <EmailButton handleOpen={props.handleOpen} isLogin={true} />
      <h1>
        계정이 없으신가요?
        <ToggleButton onClick={props.toggleLogin}>가입하기</ToggleButton>
      </h1>
    </>
  );
};

export default LoginContainer;
