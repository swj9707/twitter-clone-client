import styled, { css } from "styled-components";
import { LocationOn, Cake } from "@/Styles/Icons";
import button from "../button";
import { Avatar, styled as MUIStyled } from "@mui/material";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`outline-none 
  absolute
   border 
   top-1/4 
   left-1/2
    lg:left-1/2
     transform 
     -translate-x-1/2
      -translate-y-1/4 
      origin-center
       w-2/3 
       lg:w-1/2 
       h-auto 
       pt-2 
       pb-3 
       rounded-2xl 
       flex 
       flex-col 
       justify-start
        items-start`}
`;

export const Container = styled.div`
  width: min(601px, 100%);
  max-height: 100%;
  overflow-y: auto;
  background: var(--primary);
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

  padding: 8px 9px 13px;
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
  width: 100%;
  height: min(33vw, 199px);
  background: var(--darkGray);
  position: relative;
  img {
    border: none;
    width: 100%;
    height: auto;
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
  right: 40px;

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
