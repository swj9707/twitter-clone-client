import { memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Avatar, styled as MUIStyled } from "@mui/material";

const CustomAvatar = MUIStyled(Avatar)({
  width: "49px",
  height: "49px",
  borderRadius: "50%",
  flexShrink: "0",
  background: "var(--gray)",
  "& img": {
    borderRadius: "50%",
    width: "100%",
    height: "auto",
  },
});

const ProfileAvatar = memo((): ReactElement => {
  return (
    <Link to="/">
      <CustomAvatar src="https://twitter.clone.swj-dev.p-e.kr/cdn/tweetImage/2023-01-09-2cb65775-e974-228d-e273-5f8eccd557e8-.png" />
    </Link>
  );
});

export default ProfileAvatar;
