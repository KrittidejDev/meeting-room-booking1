import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    min-width: 1448px;
    body {
      margin: 0;
      padding: 0;
      position: relative;
      font-size: 14px;
      font-family: Kanit;
      color: #333333;
      background: #FFFFFF;
      min-width: 1448px;
    }
    a {
      text-decoration: none;
    }
    svg {
      display: block;
    }
    button {
      border: none;
      background: inherit;
      font-family: inherit;
      cursor: pointer; 
      &:focus {
        outline: none;
      }
    }
    input {
      &:focus {
        outline: none;
      }
    }
    textarea {
      &:focus {
        outline: none;
      }
    }
  }
`;
