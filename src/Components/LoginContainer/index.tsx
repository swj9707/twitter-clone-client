import EmailButton from "../Buttons/EmailButton";

interface LoginContainerProps {
  toggleLogin: (value: React.SetStateAction<boolean>) => void;
  handleOpen: (value: React.SetStateAction<boolean>) => void;
}

const LoginContainer = (props: LoginContainerProps) => {
  return (
    <>
      <h1 className="text-xl md:text-3xl font-bold mb-8">Login</h1>
      <EmailButton handleOpen={props.handleOpen} isLogin={true} />
      <h1>
        계정이 없으신가요?
        <span
          className="cursor-pointer text-blue-600"
          onClick={() => props.toggleLogin}
        >
          가입하기
        </span>
      </h1>
    </>
  );
};

export default LoginContainer;
