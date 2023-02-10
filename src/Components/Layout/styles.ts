import styled from "styled-components";
import tw from "twin.macro";

export const RootContainer = styled.div`
  background: var(--primary);
`;
export const RootWrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;

export const Root = styled.div`
  ${tw`
    w-full 
    h-full 
    transition 
    delay-75 
    duration-300
    `}
`;
