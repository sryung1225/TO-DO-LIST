import { createGlobalStyle } from "styled-components";
import OmyuPretty from "../assets/fonts/OmyuPretty.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'omyu_pretty';
      font-weight: normal;
      font-style: normal;
      src: url(${OmyuPretty}) format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};;
    font-family: omyu_pretty, sans-serif;
    color: ${(props) => props.theme.textColor};
  }
  a {
    color: inherit;
    text-decoration:none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
