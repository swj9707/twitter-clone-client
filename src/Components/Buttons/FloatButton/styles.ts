import styled, { css } from "styled-components";
import { Twitter } from "@/Styles/Icons";

export const Container = styled.div`
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

const iconCSS = css`
  width: 100%;
  :active {
    color: white;
  }
`;

export const LogoIcon = styled(Twitter)`
  ${iconCSS}
`;
