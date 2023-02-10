import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`
    w-full 
    h-full 
    transition 
    delay-75 
    duration-300
    `}
`;

export const MainContainer = styled.div`
  ${tw`
    h-full 
    w-full 
    flex 
    flex-col 
    lg:flex-row 
    relative
    `}
`;

export const BackgroundContainer = styled.div`
  ${tw`
    h-full 
    w-full 
    lg:w-1/2
    `}
`;

export const BackgroundImage = styled.img`
  ${tw`
    h-full 
    w-full 
    object-cover
    `}
`;

export const AuthContainer = styled.div`
  ${tw`
    h-full 
    w-full 
    lg:w-1/2 
    px-8 
    py-16 
    flex 
    flex-col
    `}
`;
