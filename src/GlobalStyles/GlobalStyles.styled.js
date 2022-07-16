import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: var(--theme-bg);
    transition: background-color .3s ease-in-out;
    color: var(--theme-color);
    scroll-behavior: smooth;
  }
  html.dark {
        --theme-color: #fff;
        --theme-bg: #000;
  }
  html.light {
        --theme-color: #000;
        --theme-bg: #fff;
  }
`;
 
export default GlobalStyle;