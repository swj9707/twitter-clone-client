import styled from "styled-components";
import { Twitter } from "@/Styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;
  > path {
    fill: var(--twitter);
  }
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Wrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const AuthForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  h2 {
    color: #000;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 13px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: #d9d9d9;
  color: #000;
`;

export const FormInputButton = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  color: white;
  border-radius: 10px;
  background-color: #04aaff;
  margin-bottom: 10px;
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
