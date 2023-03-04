import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: var(--white);
}

html, body, #root {
  max-height: 100vh;
  max-width: 100vw;

  width: 100%;
  height: 100%;
}

*, button, input {
  border: 0;
  background: none;
  font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html {
  background: var(--primary);


}

:root {
  --primary: #000;
  --primary-hover : #141414;
  --secondary: #15181C;
  --search: #202327;
  --white: #D9D9D9;
  --darkGray : #424242;
  --gray: #7A7A7A;
  --outline: #2F3336;
  --retweet: #00C06B;
  --like: #E8265E;
  --deepBlue: #2e64fe;
  --twitter: #33A1F2;
  --twitter-hover: #1a8cd8;
  --twitter-dark-hover: #011017;
  --twitter-light-hover: #2C8ED6;
}

`;
