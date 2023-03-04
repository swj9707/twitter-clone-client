import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  min-width: 400px;
  flex-direction: column;
  text-align: center;
  position: fixed;
  padding: 10px 10px 10px 10px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: auto;
  background-color: var(--white);
  border-radius: 20px;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  color: var(--primary);
  font-size: 1.8rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px 0px 3px 0px;
`;

export const FormDiv = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 0 5px 0;
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: auto;
  border-radius: 10px;
  outline: none;
  color: var(--secondary);
  background-color: var(--white);
  padding: 7px 0 7px 0;
`;

export const FormInputButton = styled.input`
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  background-color: var(--twitter);
  font-weight: bold;
  padding: 7px 0px 7px 0px;
`;

export const TweetModalContainer = styled.div`
  outline-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  padding: 10px 10px 10px 10px;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  width: auto;
  min-width: 600px;
  height: auto;
  background-color: var(--primary);
  border-radius: 15px;
`;

export const ProfileEditWrapper = styled.div`
  outline-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  padding: 10px 10px 10px 10px;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  width: auto;
  min-width: 600px;
  height: auto;
  background-color: var(--primary);
  border-radius: 15px;
`;
