import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  justify-content: center;
  display: flex;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  padding: 10px;
`;

export const AuthForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 13px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center;
  background-color: white;
  color: black;
`;

export const FormInputButton = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  color: white;
  border-radius: 10px;
  background-color: #04aaff;
  margin-bottom: 10px;
  border: 1px solid black;
`;

export const BtnBlue = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  color: white;
  border-radius: 10px;
  background-color: #04aaff;
  margin-bottom: 10px;
  border: 1px solid black;
`;

export const Wrapper = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
