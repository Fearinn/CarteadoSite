/* eslint-disable react-hooks/exhaustive-deps */
import StyledSection from "./styles";

import main from "data/content.json";
import Contact from "./Contact";
import useLang from "hooks/useLang";
import { ICard, IMainLang, ISection, LangKey } from "interfaces/main";

function Sections() {
  const { lang } = useLang();

  const LangObject: IMainLang = main[lang as LangKey];

  const sections: ISection[] = LangObject.sections;

  return (
    <>
      {sections.map((section: ISection, index) => {
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
                              aria-label={card.title}
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
