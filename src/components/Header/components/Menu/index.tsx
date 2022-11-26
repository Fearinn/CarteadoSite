import StyledMenu from "./styles";
import config from "data/en/header.json";
;
import { useEffect, useState } from "react";

const options = config.options;
const socials = config.socials;

function Menu() {
  const [open, setOpen] = useState(true)

  useEffect (() => {
    window.innerWidth < 1024 && setOpen(false)
  }, []) 
    
  return (
    <StyledMenu>
     { open && <div className="options">
        {options.map((option, index) => {
          return (
            <a
              target={option.link !== "#" ? "_blank" : "_self"}
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
      </div> }
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
