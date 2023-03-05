import {
  ContainerHeader,
  ContainerToggleButton,
  Toggle,
} from "@/Styles/Page/AuthPage/style";
import EmailButton from "../../Buttons/EmailLoginButton";

interface LoginContainerProps {
  toggleLogin: () => void;
  handleOpen: () => void;
}

const LoginContainer = (props: LoginContainerProps) => {
  return (
    <>
      <ContainerHeader>Login</ContainerHeader>
      <EmailButton handleOpen={props.handleOpen} isLogin={true} />
      <Toggle>
        계정이 없으신가요?
        <ContainerToggleButton onClick={props.toggleLogin}>
          가입하기
        </ContainerToggleButton>
      </Toggle>
    </>
  );
};

export default LoginContainer;
