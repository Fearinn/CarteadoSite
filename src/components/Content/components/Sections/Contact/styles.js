import styled from "styled-components";

const StyledContact = styled.div`
  display: flex;
  gap: 1rem;
  line-height: 200%;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }

  address {
    width: 100%;
    a {
      text-decoration: underline;
    }
  }

  .contact-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.5rem;
    font-weight: bold;
    width: 100%;

    img {
      flex-shrink: 0;
      height: 24px;
      width: 24px;
    }
  }

  img {
    aspect-ratio: 16/9;
    height: auto;
    width: 100%;
    border-radius: 8px;
  }
`;

export default StyledContact;
