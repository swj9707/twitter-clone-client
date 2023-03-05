import styled from "styled-components";

export const EmailButtonContainer = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  background-color: var(--white);
  border-radius: 25px;
  outline: 0;
  justify-content: center;
  color: var(--primary);
  font-weight: bold;
  font-size: 20px;
`;

export const DropdownButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  transition-delay: 50ms;
  transition-duration: 300ms;
  border: solid var(--gray) 1px;
  font-size: 18px;
  border-radius: 4px;
  background-color: var(--primary);
  color: var(--white);
  padding: 4px 10px 4px 10px;
  &: hover {
    background: var(--primary-hover);
  }
`;
