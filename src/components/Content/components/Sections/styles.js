import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledSection = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: stretch;
    }

    .card {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-grow: 1;
      justify-content: flex-start;
      gap: 1rem;
      border: 1px dashed ${colors.fontBase};
      border-radius: 8px;
      padding: 1rem 0.5rem;

      @media (min-width: 1024px) {
        border: none;
      }

      h3 {
        text-align: center;
      }

      p {
        align-self: flex-start;
        line-height: 150%;
      }

      img {
        aspect-ratio: 16/9;
        max-width: 200px;
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default StyledSection;
