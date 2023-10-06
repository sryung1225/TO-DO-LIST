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
    font-family: omyu_pretty, sans-serif;
  }
  body {
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};;
    color: ${(props) => props.theme.textColor};
  }
  a {
    color: inherit;
    text-decoration:none;
  }
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  .a11y {
    position: absolute !important;
    display: inline-block;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
