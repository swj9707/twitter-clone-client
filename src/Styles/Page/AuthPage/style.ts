import styled from "styled-components";

export const AuthPageContainer = styled.div`
  width: 100%;
  height: 100%;
  transition-delay: 75ms;
  transition-duration: 300ms;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 8px 8px 30px;
  span : {
    width: 100%;
    max-width: 500px;
  }
`;

export const IconContainer = styled.div`
  height: auto;
  img {
    height: 120px;
    margin-bottom: 20px;
  }
`;

export const ContainerHeader = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const AuthTitle = styled.h1`
  margin: 6px 0 20px 0;
  font-weight: bold;
  font-size: 3rem;
`;

export const ContainerToggleButton = styled.span`
  cursor: pointer;
  color: var(--deepBlue);
`;

export const Policy = styled.h1`
  width: 70%;
  font-size: 1.3rem;
  margin: 15px 0 10px 0;
  span : {
    color: var(--deepBlue);
  }
`;

export const Toggle = styled.h1`
  font-size: 1.4rem;
  margin: 15px 0 0 0;
`;
