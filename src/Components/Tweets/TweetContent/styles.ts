import styled, { css } from "styled-components";

import { Chat, Retweet, Favorite, ThreeDots } from "@/Styles/Icons";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
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
  flex-direction: column;
  margin-top: 3px;
  position: relative;
`;

export const Info = styled.div``;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

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
  font-size: 20px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  overflow: auto;
  height: auto;
  width: auto;
  height: min(200px, max(285px, 41vw));
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
  border-top: 1px solid var(--outline);
  flex-wrap: wrap;
  margin: 11px auto 0;

  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg path {
      color: var(--like);
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

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;

export const OptionIcon = styled(ThreeDots)`
  width: 19px;
  height: 19px;
  border-radius: 14px;
  margin-left: 35px;
  margin-right: 9px;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;