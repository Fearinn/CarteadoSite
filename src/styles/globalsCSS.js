import { createGlobalStyle } from "styled-components";

export const colors = {
  fontBase: "#EEEEEE",
  backgroundBase: "#161616",
  styleLevel1: "#FAD014",
  styleLevel2: "#FF8C32",
};


export const GlobalStyles = createGlobalStyle`

  :where(html) {
  // font-family: ;
  }

  :where(body) {
    background: rgba(0, 0, 0, 0.85);
    color: white;
  }
 ;

 :where(h1, h2, h3) {
  text-transform: uppercase;
  letter-spacing: 0.1ch;
 // font-family: ;
  font-weight: bold;
 }

 :where(a):hover {
    color: ${colors.styleLevel2}
  }
 
 `;
