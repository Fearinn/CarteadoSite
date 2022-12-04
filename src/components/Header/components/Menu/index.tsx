/* eslint-disable react-hooks/exhaustive-deps */
import StyledMenu from "./styles";
import header from "data/header.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useLang from "hooks/useLang";
import { IOption, ISocial, LangKey } from "interfaces/header";

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function Menu() {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const { lang, setLang } = useLang();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const options: IOption[] = header[lang as LangKey].options;
  const socials: ISocial[] = header[lang as LangKey].socials;

  const params = useParams();

  useEffect(() => {
    setLang(params.lang || "en");

    if (lang === "ptBr") {
      document.documentElement.lang = "pt-br";
    } else {
      document.documentElement.lang = "en";
    }
  }, [params.lang]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      if (windowSize.innerWidth >= 1024) {
        setOptionsOpen(true);
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
      {optionsOpen && (
        <div className="options" id="menu-options">
          {options.map((option: IOption, index) => {
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
        <button
          className="menu-button"
          aria-label={optionsOpen ? "close options" : "optionsOpen options"}
          aria-controls={optionsOpen ? "menu-options" : undefined}
          onClick={() => setOptionsOpen(!optionsOpen)}
        ></button>

        <div className="socials">
          {socials.map((social: ISocial, index) => {
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
