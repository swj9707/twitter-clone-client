import styled, { css } from "styled-components";

export const Container = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--outline);
  padding-right: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const TweetBoxInput = styled.div`
  display: flex;
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
  background-color: var(--twitter-color);
  border: none;
  color: white;
  font-weight: 900;

  border-radius: 30px;
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-left: auto;
`;
