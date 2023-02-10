import styled from "styled-components";
import tw from "twin.macro";

export const Header = styled.h1`
  ${tw`
        text-xl
        md:text-3xl
        font-bold
        mb-8
    `}
`;

export const ToggleButton = styled.span`
  ${tw`
        cursor-pointer
        text-blue-600
    `}
`;
