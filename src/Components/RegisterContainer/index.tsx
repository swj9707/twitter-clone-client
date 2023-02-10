import EmailButton from "../Buttons/EmailButton";
import { Header, ToggleButton } from "./style";

interface RegisterContainerProps {
  toggleLogin: () => void;
  handleOpen: () => void;
}

const RegisterContainer = (props: RegisterContainerProps) => {
  return (
    <>
      <Header>Twitter Clone에 가입하세요</Header>
      <EmailButton handleOpen={props.handleOpen} isLogin={false} />
      <h1 className="w-full md:w-1/2 mb-4">
        By signing up, you agree to the{" "}
        <span className="text-blue-600">Terms of Service</span> and{" "}
        <span className="text-blue-600">Privacy Policy</span>, including{" "}
        <span className="text-blue-600">Cookie Use.</span>
      </h1>
      <h1>
        트위터 아이디가 있으세요?{" "}
        <ToggleButton onClick={props.toggleLogin}>로그인</ToggleButton>
        하기
      </h1>
    </>
  );
};

export default RegisterContainer;
