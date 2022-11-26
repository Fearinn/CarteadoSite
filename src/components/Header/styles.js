import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.backgroundBase};
  color: ${colors.fontBase};
  font-weight: bold;
  width: 100%;

  

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    font-size: 1rem;
    justify-content: space-between;
    z-index: 1;

    .logo-header {
      justify-content: flex-start;
      border: none;
      margin-right: 1rem;
      width: auto;
    }
  }
`;

export default StyledHeader;
