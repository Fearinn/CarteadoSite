/* eslint-disable react-hooks/exhaustive-deps */
import StyledSection from "./styles";

import config from "data/content.json";
import Contact from "./Contact";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useLang from "hooks/useLang";

interface ICard {
  title: string;
  content: string;
  image?: string;
  link?: string;
}

type Lang = keyof typeof config;

function Sections() {
  const params = useParams();
  
  const {lang, setLang} = useLang()
  
  useEffect(() => {
    setLang(params.lang || "en");
  }, [params.lang]);

  const sections = config[lang as Lang].sections;
  return (
    <>
      {sections.map((section, index) => {
        const title = section.title;
        const slicedTitle = title.slice(0, title.indexOf(" "));

        return (
          <StyledSection id={slicedTitle} key={index}>
            <>
              <h2>{section.title}</h2>
              <div className="cards">
                <>
                  {section.cards &&
                    section.cards.map((card: ICard, index) => {
                      return (
                        <div className="card" key={index}>
                          <h3>{card.title}</h3>
                          <p>{card.content}</p>
                          {card.image && (
                            <a
                              target="_blank"
                              href={card.link}
                              rel="noreferrer"
                            >
                              <img
                                src={card.image}
                                width={160}
                                height={90}
                                alt=""
                              ></img>
                            </a>
                          )}
                        </div>
                      );
                    })}
                </>
              </div>
            </>
          </StyledSection>
        );
      })}
      <StyledSection id="contact">
        <h2>{lang === "ptBr" ? "contate-nos" : "contact Us"}</h2>
        <Contact />
      </StyledSection>
    </>
  );
}

export default Sections;
