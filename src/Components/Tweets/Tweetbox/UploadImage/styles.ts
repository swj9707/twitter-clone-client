import styled, { css } from "styled-components";
import { FileMedia } from "@styled-icons/octicons";

export const InputButton = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 20px;
  &:hover {
    background: var(--twitter-dark-hover);
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
