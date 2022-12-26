import { gradients } from "@uikit/gradients";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${gradients.main};
  }

  input, button {
    outline: none;
    transition: background-color .2s ease, color .2s ease, box-shadow .2s ease;
  }

  button {
    border: 0;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: unset;
  }

  #root {
    height: 100%;
  }

  #app {
    height: 100%;
  }
`;
