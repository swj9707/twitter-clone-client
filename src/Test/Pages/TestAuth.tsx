import {
  AuthContainer,
  AuthForm,
  BtnBlue,
  FormInput,
  FormInputButton,
  Title,
  Wrapper,
} from "../../Styles/AuthStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const TestAuth = () => {
  return (
    <AuthContainer>
      <Wrapper
        style={{
          backgroundColor: "#CEE3F6",
        }}
      >
        <AuthForm
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <Title>Twitter Clone Project</Title>
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Password" />
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
            }}
          >
            <FormInputButton
              style={{
                width: "45%",
                marginRight: "10px",
              }}
              type="submit"
              value="Login"
            />
            <BtnBlue
              style={{
                width: "45%",
                marginLeft: "10px",
              }}
            >
              Sign up
            </BtnBlue>
          </div>
          <BtnBlue>Google Login</BtnBlue>
        </AuthForm>
      </Wrapper>
    </AuthContainer>
  );
};
export default TestAuth;
