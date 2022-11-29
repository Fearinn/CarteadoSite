import StyledLogo from "./styles";

function Logo() {
  return (
    <StyledLogo to="/">
      <div className="img"></div>
      <h1 className="name" translate="no">Carteado Challenges</h1>
    </StyledLogo>
  );
}

export default Logo;
