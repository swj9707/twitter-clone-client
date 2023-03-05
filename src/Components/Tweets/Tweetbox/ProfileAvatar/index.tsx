import { memo, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Avatar, styled as MUIStyled } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store";

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
  const userInfo = useSelector((state: RootStore) => state.UserInfoReducer);

  return (
    <Link to="/">
      <CustomAvatar src={userInfo.profileImage?.imageUrl} alt="" />
    </Link>
  );
});

export default ProfileAvatar;
