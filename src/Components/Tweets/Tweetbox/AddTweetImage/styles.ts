import styled, { css } from "styled-components";
import { Cancel, Edit } from "@/Styles/Icons";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-count: 2;
  width: 100%;
`;

export const ImageContent = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 58px;
  object-fit: cover;
  margin-top: 10px;
  height: auto;
  width: 80%;
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  fill: rgba(70, 78, 84, 0.6);
`;

export const CancelIcon = styled(Cancel)`
  ${iconCSS}
`;

export const EditIcon = styled(Edit)`
  ${iconCSS}
`;
