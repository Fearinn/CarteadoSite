import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */
  :where(*) {
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
    font-style: normal;
    padding: 0;
  }
  :where(body) {
    font-family: inherit;
    position: absolute;
  }
  /* NextJS */
  :where(html) {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 320px;
  }
  :where(body) {
    display: flex;
    flex-direction: column;
   // flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  /* Globals */
  :where(button,
  a) {
    text-decoration: none;
    opacity: 1;
    color: inherit;
  }
  
`;

export default CSSReset