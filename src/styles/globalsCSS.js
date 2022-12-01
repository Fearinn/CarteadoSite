import { createGlobalStyle } from "styled-components";

export const colors = {
  fontBase: "#EEEEEE",
  backgroundBase: "#161616",
  styleLevel1: "#FAD014",
  styleLevel2: "#FF8C32",
};

export const GlobalStyles = createGlobalStyle`

  :where(html) {
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
  }

  :where(body) {
    background: rgba(0, 0, 0, 0.85);
    color: white;
  }
 ;

 :where(h1, h2, h3, h4, h5, h6) {
  text-transform: uppercase;
  letter-spacing: 0.1ch;
 font-family: "Arvo", serif;
  font-weight: bold;
  @media (max-width: 320px) {
    word-break: break-all;
  } 
 }

 :where(a):hover {
    color: ${colors.styleLevel2};
  }

  p a {
    text-decoration: underline;
  }
 
 `;
