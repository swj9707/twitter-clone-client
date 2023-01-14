import styled from "styled-components";
import { Dialog, DialogContent, styled as MUIStyled } from "@mui/material";

export const CustomDialog = MUIStyled(Dialog)({
  width: " min(601px, 100%)",
  position: "fixed",
  left: "0",
  top: "0",
  right: "0",
  bottom: "0",
});
