import {
  ContainerHeader,
  ContainerToggleButton,
  Policy,
  Toggle,
} from "@/Styles/Page/AuthPage/style";
import EmailButton from "../../Buttons/EmailLoginButton";

interface RegisterContainerProps {
  toggleLogin: () => void;
  handleOpen: () => void;
}

const RegisterContainer = (props: RegisterContainerProps) => {
  return (
    <>
      <ContainerHeader>Twitter Clone에 가입하세요</ContainerHeader>
      <EmailButton handleOpen={props.handleOpen} isLogin={false} />
      <Policy>
        By signing up, you agree to the{" "}
        <span style={{ color: "#2e64fe" }}>Terms of Service</span> and{" "}
        <span style={{ color: "#2e64fe" }}>Privacy Policy</span>, including{" "}
        <span style={{ color: "#2e64fe" }}>Cookie Use.</span>
      </Policy>
      <Toggle>
        트위터 아이디가 있으세요?{" "}
        <ContainerToggleButton onClick={props.toggleLogin}>
          로그인
        </ContainerToggleButton>
        하기
      </Toggle>
    </>
  );
};

export default RegisterContainer;
