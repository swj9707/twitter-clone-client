import styled, { css } from "styled-components";
import { FileMedia } from "@styled-icons/octicons";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  padding-right: 10px;
  width: 100%;

  height: auto;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
