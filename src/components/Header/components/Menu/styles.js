import styled from "styled-components";
import { colors } from "styles/globalsCSS";

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  font-size: 1.3rem;
  height: 100%;
  padding: 0 0.5rem;
  text-transform: uppercase;
  width: 100%;

  .options {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;
    width: 100%;

    .option {
      border-bottom: 1px solid ${colors.fontBase};
      box-sizing: border-box;
      color: ${colors.fontBase};
      padding: 1rem 0.5rem;
      text-align: start;
      text-decoration: none;
      width: 100%;

      &:first-child {
        border-top: 1px solid ${colors.fontBase};
      }

      &:not([target="_self"])::after {
        content: "\\2197";
      }
    }
  }

  .menu-button {
    justify-self: flex-start;
    background: url("/images/button.svg") no-repeat center;
    border: 2px solid ${colors.fontBase};
    border-radius: 5px;
    color: ${colors.fontBase};
    height: 2.5rem;
    width: 3.5rem;
    transition: 0.3s all linear;
  }

  .socials-container {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .socials {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .social {
      transition: all 0.5s linear;

      &:hover {
        transform: translateY(-25%);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;

    .menu-button {
      display: none;
    }

    .socials-container {
      justify-content: flex-end;
      max-width: 25%;
    }

    .options {
      display: flex;
      background: none;
      flex-direction: row;
      flex-grow: 1;
      justify-content: space-around;
      padding: 0;

      .option {
        border: none;
        padding: 0;
        flex-wrap: nowrap;
        width: auto;

        &:first-child {
          border-top: none;
        }

        &:hover {
          background-color: rgba(256, 256, 256, 0.1);
          border-bottom: 2px solid ${colors.fontBase};
          padding: 0.5rem;
        }
      }
    }
  }
`;

export default StyledMenu;
