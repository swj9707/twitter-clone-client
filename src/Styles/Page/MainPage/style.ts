import styled, { css, keyframes } from "styled-components";
import {
  Twitter,
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  PencilSquare,
  MoreHorizontalOutline,
  Search,
} from "@/Styles/Icons";

import { Avatar, styled as MUIStyled } from "@mui/material";
import button from "@/Components/Buttons/button";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

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

export const TweetContainer = styled.div``;

export const SideBarContainer = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    height: 100vh;
    overflow-y: auto;
  }
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + div {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const TweetButton = styled(MenuButton)`
  background: var(--twitter);
  color: var(--white);
  padding: 8.25px;

  &:hover {
    background: var(--twitter-hover);
  }
`;

export const DropdownContainer = styled.div`
  outline: 0;
  button {
    width: 100%;
    height: auto;
  }

  & + button {
    margin-top: 16px;
  }
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;
export const CustomAvatar = MUIStyled(Avatar)({
  width: "39px",
  height: "39px",
  borderRadius: "50%",
  flexShrink: "0",
  background: "var(--gray)",
  "& img": {
    borderRadius: "50%",
    width: "100%",
    height: "auto",
  },
});

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;

    width: 25px;
    height: 25px;

    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--twitter);
      }
    }
  }
`;
export const DropdownMenu = styled.div`
  background: var(--twitter-dark-hover);
  position: relative;
  left: 200%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 1;
  transform: translate(-50%, 0);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 3;
`;

export const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li``;

export const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

export const AppbarContainer = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;

  padding: 0 10px 0 52px;
  border-radius: 19px;
  background: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  color: var(--gray);
`;

export const AppbarBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  position: sticky;
  top: 0;

  > div + div {
    margin-top: 15px;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
`;

export const FollowSuggestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const FollowSuggestionInfo = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(button)`
  padding-top: 6px 17px;
`;

export const FollowSuggestionAvatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
`;

export const SpinnerLoading = styled.div`
  width: 40px;
  margin: 0px auto;
  paddingtop: 50;
  paddingbottom: 50;
`;

const Rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  height: 26;
  width: 26;

  & svg: {
    height: 100%;
    width: 100%;
  }
  animation: ${Rotation} 0.75s linear 0s infinite;
`;

export const BackCircle = styled.circle`
  stroke: var(--white);
  stroke-width: 4;
  opacity: 0.2;
`;

export const FrontCircle = styled.circle`
  stroke: var(--white);
  stroke-width: 4;
  stroke-dasharray: 80;
  stroke-dashoffset: 60;
`;

export const FloatButtonContainer = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 70px;
  right: 25px;
  background-color: #1da1f2;
  color: #fff;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
    rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
  border-radius: 50px;
  text-align: center;
  font-size: 34px;
  z-index: 100;

  :hover {
    color: #fff;
    background-color: #0a669e;
  }
`;

const FloatIconCSS = css`
  width: 100%;
  :active {
    color: white;
  }
`;

export const FloatLogoIcon = styled(Twitter)`
  ${FloatIconCSS}
`;

export const FooterContainer = styled.div`
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;

export const ListItem = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const ListTitle = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

const FooterIconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const MoreIcon = styled(MoreHorizontalOutline)`
  ${iconCSS}
`;

export const PencilIcon = styled(PencilSquare)`
  ${iconCSS}
`;

export const FooterHomeIcon = styled(Home)`
  ${FooterIconCSS}
`;

export const FooterSearchIcon = styled(Search)`
  ${FooterIconCSS}
`;

export const FooterBellIcon = styled(Notifications)`
  ${FooterIconCSS}
`;

export const FooterEmailIcon = styled(Email)`
  ${FooterIconCSS}
`;
