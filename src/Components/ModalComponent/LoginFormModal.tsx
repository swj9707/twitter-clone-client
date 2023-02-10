import AuthForm from "./AuthForm";
import RegisterForm from "./RegisterForm";

interface propTypes {
  isLogin: boolean;
}

const LoginFormModal = (props: propTypes) => {
  const { isLogin } = props;
  return (
    <div className="outline-none absolute border p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center w-96 h-auto bg-white rounded-lg flex flex-col justify-start items-start">
      {isLogin && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">
            이메일로 로그인
          </h1>
          <AuthForm />
        </>
      )}
      {!isLogin && (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">
            계정을 생성하세요.
          </h1>
          <RegisterForm />
        </>
      )}
    </div>
  );
};

export default LoginFormModal;
