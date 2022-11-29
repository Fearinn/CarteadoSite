import MainImages from "./components/MainImages";
import Sections from "./components/Sections";

import StyledContent from "./styles";

function Content() {
  return (
    <StyledContent>
      <div className="bg" />
      <MainImages/>
      <Sections />
    </StyledContent>
  );
}

export default Content;
