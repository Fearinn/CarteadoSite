import styled from "styled-components";
import { colors } from "styles/globalsCSS";
import {Link} from "react-router-dom"

const StyledLogo = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s all linear;

    &:hover {
      background-image: linear-gradient(to right, ${colors["styleLevel2"]}, ${colors["styleLevel1"]});
      background-clip: initial;
      -webkit-background-clip: text;
      color: transparent;
    }


    .img {
      background: url("/images/CarteadoLogo.webp") center / 100% no-repeat;
      display: inline-block;
      aspect-ratio: 10/12;
      height: auto;
      width: 100px;
      text-align: center;
    }

    .name {
      font-size: 1.8rem;
      line-height: 150%;
      max-width: 240px;
      text-align: left;
    }
  
`;

export default StyledLogo
