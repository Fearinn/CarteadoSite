import Header from "components/Header";
import { GlobalStyles } from "styles/globalsCSS";
import CSSReset from "styles/resetCSS";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LangContext from "providers/Lang";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en")
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <LangContext.Provider value={{lang, setLang}}>
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path="/:lang" element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
      </LangContext.Provider>
    </>
  );
}

export default App;
