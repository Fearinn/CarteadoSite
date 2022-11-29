import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledFooter = styled.footer`
  .container {
    display: flex;
    align-items: center;
    background-color: ${colors.backgroundBase};
    padding: 1rem;
    gap: 0.5rem;

    .logo {
      background: url("/images/CarteadoLogo2.webp") center / 100% no-repeat;
      aspect-ratio: 10/12;
      height: auto;
      width: 100px;
    }

    .disclaimers {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
  }
`;

export default StyledFooter;
