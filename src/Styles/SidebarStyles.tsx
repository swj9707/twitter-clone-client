import styled from "styled-components";

export const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  material-icons {
    padding: 20px;
  }
  fa-twitter {
    padding: 20px;
  }
  h2 {
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }
  :hover {
    background-color: var(--twitter-background);
    border-radius: 30px;
    color: var(--twitter-color);
    transition: color 100ms ease-out;
  }
`;
export const MainTwitterIcon = styled.div`
  color: var(--twitter-color);
  font-size: 30px;
`;
