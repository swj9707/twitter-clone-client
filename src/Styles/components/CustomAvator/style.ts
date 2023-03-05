import { Avatar, styled as MUIStyled } from "@mui/material";

export const CustomAvatar = MUIStyled(Avatar)({
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
