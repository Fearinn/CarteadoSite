import Header from "components/Header";
import { GlobalStyles } from "styles/globalsCSS";
import CSSReset from "styles/resetCSS";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path="/:lang" element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
