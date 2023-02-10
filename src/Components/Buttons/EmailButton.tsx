import React from "react";

interface EmailButtonProps {
  isLogin: boolean;
  handleOpen: () => void;
}

const EmailButton = (props: EmailButtonProps) => {
  return (
    <div
      onClick={props.handleOpen}
      className="cursor-pointer mb-4 border bg-white text-black border-gray-300 rounded-full w-full md:w-1/2 flex flex-row h-12 items-center justify-center font-bold"
    >
      {props.isLogin ? "이메일 로그인" : "이메일 가입하기"}
    </div>
  );
};

export default EmailButton;
