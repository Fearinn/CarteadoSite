import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledMainImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1rem;

  a {

    &:hover {
      transform: scale(1.01, 1);
    }

    img {
      aspect-ratio: 16/9;
      border-radius: 8px;
      height: auto;
      width: 100%;

      &:hover,
      &:focus {
        border: none;
        outline: none;
        box-shadow: 0 0 0.5rem ${colors.styleLevel2};
      }
    }
  }
`;
export default StyledMainImages;
