import styled, { css } from "styled-components";
import {
  Chat,
  Retweet,
  Favorite,
  ThreeDots,
  Cancel,
  Edit,
} from "@/Styles/Icons";
import { TextareaAutosize, styled as MUIStyled } from "@mui/material";
import { FileMedia } from "styled-icons/octicons";

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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-count: 2;
  width: 100%;
`;

export const InputImageContent = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 58px;
  object-fit: cover;
  margin-top: 10px;
  height: auto;
  width: 80%;
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

const ImageIconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  fill: rgba(70, 78, 84, 0.6);
`;

export const CancelIcon = styled(Cancel)`
  ${ImageIconCSS}
`;

export const EditIcon = styled(Edit)`
  ${ImageIconCSS}
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

export const TweetFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  padding-right: 10px;
  width: 100%;
  min-width: 399px;
  background-color: var(--primary);

  height: auto;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TweetFormContent = styled.div`
  display: flex;
  width: 100%;
`;

export const TextareaWrapper = styled.div`
  margin-left: 20px;
  width: 100%;
`;

export const TweetTextArea = MUIStyled(TextareaAutosize)({
  width: "100%",
  border: "0",
  fontSize: "20",
  outline: "none",
  resize: "none",
});

export const ContentTextArea = styled.div`
  width: 100%;
  border: 0;
  fontsize: 20;
  outline: none;
  resize: none;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  position: relative;
  padding-top: 5;
  padding-bottom: 5;
  left: -13;
  justify-content: space-between;
  max-width: 450;
  margin-top: 10;
  padding-left: 70;
`;

export const FooterAddForm = styled.div`
  display: flex;
  align-items: center;
`;

export const TweetFormAvatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
`;

export const TweetFormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const TweetFormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  img {
    border-radius: 50%;
    height: 40px;
  }
  input {
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
    outline: none;
  }
`;

export const TweetFormButton = styled.button`
  background-color: var(--twitter);
  border: none;
  color: white;
  font-weight: 900;

  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
  &:hover {
    background: var(--twitter-light-hover);
  }
`;

export const TweetFormInputButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 20px;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const TweetFormImageContent = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  height: min(200px, max(285px, 41vw));
  background: var(--outline);
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

const TweetFormIconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--twitter);
`;

export const FileIcon = styled(FileMedia)`
  ${TweetFormIconCSS}
`;

export const UploadImageInputButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 20px;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

const UploadImageIconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--twitter);
`;

export const UploadImageFileIcon = styled(FileMedia)`
  ${UploadImageIconCSS}
`;

export const UserTweetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const UserTweetButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const UserTweetTab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  width: 100%;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const UserTweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
