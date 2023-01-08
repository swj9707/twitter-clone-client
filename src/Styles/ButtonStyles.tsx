import styled from "styled-components";

export const BasicButton = styled.button`
  width: 100%;
  background-color: var(--twitter-color);
  border: none;
  color: white;
  font-weight: 900;
  border-radius: 30px;
  height: 50px;
  margin-top: 10px;
`;

export const OptionButton = styled.input.attrs({ type: "radio" })`
  color: black;
  font-weight: 400;
  background-color: #ffffff;
  border: none;
  height: 50px;
  &:hover {
    background-color: #e6e6e6;
  }
  &:visited {
    background-color: #e6e6e6;
  }
`;
