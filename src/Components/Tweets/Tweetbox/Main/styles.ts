import styled, { css } from "styled-components";
import { FileMedia } from "@styled-icons/octicons";
import { TextareaAutosize, styled as MUIStyled } from "@mui/material";

export const Container = styled.div`
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

export const Content = styled.div`
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

export const Avatar = styled.div`
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const TweetBoxInput = styled.div`
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

export const TweetBoxButton = styled.button`
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

export const InputButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 20px;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const ImageContent = styled.div`
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

const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--twitter);
`;

export const FileIcon = styled(FileMedia)`
  ${iconCSS}
`;
