import styled, { keyframes } from "styled-components";

export const Loading = styled.div`
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
