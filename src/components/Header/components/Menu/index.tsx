import StyledMenu from "./styles";
import config from "data/header.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLang from "hooks/useLang";

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function Menu() {
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (windowSize.innerWidth >= 1024) {setOpen(true)}
    }

    handleWindowResize() 
    
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  type Lang = keyof typeof config;

  const { lang } = useLang();

  const options = config[lang as Lang].options;
  const socials = config[lang as Lang].socials;

  return (
    <StyledMenu>
      {open && (
        <div className="options">
          {options.map((option, index) => {
            return (
              <a
                target={!option.link.includes("#") ? "_blank" : "_self"}
                className="option"
                key={index}
                href={option.link}
                aria-label={option.label}
                rel="noreferrer"
              >
                {option.name}
              </a>
            );
          })}
          <Link className="option" to={lang === "ptBr" ? "/" : "/ptBr"}>
            {lang === "ptBr" ? "EN-US" : "PT-BR"}
          </Link>
        </div>
      )}
      <div className="socials-container">
        <button className="menu-button" onClick={() => setOpen(!open)}></button>
        <div className="socials">
          {socials.map((social, index) => {
            return (
              <a
                className="social"
                target="_blank"
                key={index}
                aria-label=""
                href={social.link}
                rel="noreferrer"
              >
                <img src={social.logo} alt="" width={30} height={30} />
              </a>
            );
          })}
        </div>
      </div>
    </StyledMenu>
  );
}

export default Menu;
