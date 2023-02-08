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
} from "@/Styles/Icons";
import styled, { css } from "styled-components";
import { Avatar, styled as MUIStyled } from "@mui/material";

export const Container = styled.div`
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

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
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
