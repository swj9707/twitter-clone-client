import styled, { css } from "styled-components";
import { LocationOn, Cake } from "@/Styles/Icons";
import button from "../button";
import { Avatar, styled as MUIStyled } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /**Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
  background: var(--darkGray);
  position: relative;
  img {
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const CustomAvatar = MUIStyled(Avatar)({
  width: "max(45px, min(135px, 22vw))",
  height: "max(45px, min(135px, 22vw))",
  borderRadius: "50%",
  position: "absolute",
  bottom: "max(-60px, -10vw)",
  left: "15px",

  background: "var(--gray)",
  "& img": {
    borderRadius: "50%",
    width: "100%",
    height: "auto",
  },
});

export const LegacyAvatar = styled.div`
  > img {
    border: 3.75px solid var(--primary);
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    background: var(--gray);
    border-radius: 50%;
    position: absolute;

    bottom: max(-60px, -10vw);
    left: 15px;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  margin-top : 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;

export const EditButton = styled(button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;
export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;
