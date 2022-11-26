import Logo from "./components/Logo";
import Menu from "./components/Menu";

import StyledHeader from "./styles";

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo />
        <Menu />
      </StyledHeader>
    </>
  );
}

export default Header;
