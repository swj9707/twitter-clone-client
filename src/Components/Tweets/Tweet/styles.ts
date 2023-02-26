import styled, { css } from "styled-components";
import { Avatar, styled as MUIStyled } from "@mui/material";
import { Chat, Retweet, Favorite, ThreeDots } from "@/Styles/Icons";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
  height: auto;
  &:hover {
    background: var(--primary-hover);
  }
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position : relative

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  overflow: auto;
  width: auto;
  height: min(200px) max(100%);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 14px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 11px auto 0;

  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray);
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray);
  font-size: 14px;
  position: absolute;
  right: 15px;

  > svg {
    margin-right: 5px;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;

  margin-left: 35px;
  margin-right: 9px;
`;

export const ComentIcon = styled(Chat)`
  ${iconCSS}
`;

export const OptionIcon = styled(ThreeDots)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;
