import styled from "styled-components";

const StyledContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  padding: 1rem;

  .bg {
    background-image: url("images/cardsbg.webp");
    background-size: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0.05;
    position: absolute;
    z-index: -99; 
  }
`;

export default StyledContent;
