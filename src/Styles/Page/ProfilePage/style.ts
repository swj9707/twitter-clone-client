import styled, { css } from "styled-components";

import {
  LocationOn,
  Cake,
  Home,
  Search,
  Notifications,
  Email,
  ArrowLeft,
} from "@/Styles/Icons";
import button from "@/Components/Buttons/button";
import { Avatar, styled as MUIStyled } from "@mui/material";
import tw from "twin.macro";

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

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);
  background: var(--darkGray);
  position: relative;
  img {
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

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%); /*vai ter no máx 601px ou 100% da tela*/

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const MainHeader = styled.div`
  z-index: 2;
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

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const ProfileEditWrapper = styled.div`
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

export const ProfileEditContainer = styled.div`
  width: min(601px, 100%);
  max-height: 100%;
  overflow-y: auto;
  background: var(--primary);
  scrollbar-width: none; /**Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileEditHeader = styled.div`
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

export const ProfileEditBanner = styled.div`
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

export const ProfileEditCustomAvatar = MUIStyled(Avatar)({
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

export const ProfileEditLegacyAvatar = styled.div`
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

export const ProfileEditProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  margin-top : 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;

export const ProfileEditEditButton = styled(button)`
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

const ProfileMainIconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const HomeIcon = styled(Home)`
  ${ProfileMainIconCSS}
`;

export const SearchIcon = styled(Search)`
  ${ProfileMainIconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${ProfileMainIconCSS}
`;

export const EmailIcon = styled(Email)`
  ${ProfileMainIconCSS}
`;
