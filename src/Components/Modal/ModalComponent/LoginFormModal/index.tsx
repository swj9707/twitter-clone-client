import {
  FormContainer,
  FormTitle,
} from "@/Styles/components/LoginFormModal/style";
import AuthForm from "../AuthForm";
import RegisterForm from "../RegisterForm";

interface propTypes {
  isLogin: boolean;
}

const LoginFormModal = (props: propTypes) => {
  const { isLogin } = props;
  return (
    <FormContainer>
      {isLogin && (
        <>
          <FormTitle>이메일로 로그인</FormTitle>
          <AuthForm />
        </>
      )}
      {!isLogin && (
        <>
          <FormTitle>계정을 생성하세요.</FormTitle>
          <RegisterForm />
        </>
      )}
    </FormContainer>
  );
};

export default LoginFormModal;
