import React from "react";
import { EmailButtonContainer } from "@/Styles/components/Buttons/style";

interface EmailButtonProps {
  isLogin: boolean;
  handleOpen: () => void;
}

const EmailButton = (props: EmailButtonProps) => {
  return (
    <EmailButtonContainer onClick={props.handleOpen}>
      {props.isLogin ? "이메일 로그인" : "이메일 가입하기"}
    </EmailButtonContainer>
  );
};

export default EmailButton;
