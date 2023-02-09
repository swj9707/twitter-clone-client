import EmailButton from "../Buttons/EmailButton";

interface RegisterContainerProps {
  toggleLogin: (value: React.SetStateAction<boolean>) => void;
  handleOpen: (value: React.SetStateAction<boolean>) => void;
}

const RegisterContainer = (props: RegisterContainerProps) => {
  return (
    <>
      <h1>오늘 Jwitter에 가입하세요.</h1>
      <EmailButton handleOpen={props.handleOpen} isLogin={false} />
      <h1>
        By signing up, you agree to the <span>Terms of Service</span> and{" "}
        <span>Privacy Policy</span>, including <span>Cookie Use.</span>
      </h1>
      <h1>
        트위터 아이디가 있으세요?{" "}
        <span onClick={() => props.toggleLogin}>로그인</span>
        하기
      </h1>
    </>
  );
};

export default RegisterContainer;
