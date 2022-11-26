

import Header from "components/Header";
import { GlobalStyles } from "styles/globalsCSS";
import CSSReset from "styles/resetCSS";
import Home from "pages/Home";

function App() {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Header />
      <Home/>
    </>
  );
}

export default App;
