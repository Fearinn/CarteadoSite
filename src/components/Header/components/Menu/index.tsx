import StyledMenu from "./styles";
import config from "data/header.json";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(true);
  const params = useParams();

  type Lang = keyof typeof config

  const lang: Lang = params.lang as Lang || "english" as Lang

 const options = config[lang].options;
  const socials = config.english.socials;

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
          <Link className="option" to="/pt-br">
            PT-BR
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
