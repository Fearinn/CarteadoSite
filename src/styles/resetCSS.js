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
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    min-width: 320px;
  }
  :where(html) {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 320px;

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  :where(button,
  a) {
    text-decoration: none;
    opacity: 1;
    color: inherit;
  }
  
`;

export default CSSReset;
