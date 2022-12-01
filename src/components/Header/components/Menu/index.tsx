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
  const { lang } = useLang();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  type Lang = keyof typeof config;

  const options = config[lang as Lang].options;
  const socials = config[lang as Lang].socials;

  useEffect(() => {
    if (lang === "ptBr") {
      document.documentElement.lang = "pt-br";
    } else {
      document.documentElement.lang = "en";
    }
  }, [lang]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (windowSize.innerWidth >= 1024) {
        setOpen(true);
      }
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  return (
    <StyledMenu>
      {open && (
        <div className="options" id="menu-options">
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

        <button className="menu-button" aria-label="open options" aria-controls="menu-options" onClick={() => setOpen(!open)}></button>

        <div className="socials">
          {socials.map((social, index) => {
            return (
              <a
                className="social"
                target="_blank"
                key={index}
                aria-label={`Go to our ${social.name}`}
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
